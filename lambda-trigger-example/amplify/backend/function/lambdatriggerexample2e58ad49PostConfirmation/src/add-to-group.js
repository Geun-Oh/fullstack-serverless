/**
 * 사용자가 adminEmails 배열에 지정되어 있는 관리자 중 하나인 경우 Admin이라는 그룹에 자동 배치되는 기능을 담당한다.
 */

const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitoProvider = new aws.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18'
  })

  let isAdmin = false
  const adminEmails = ['kandy1002@naver.com']

  // 사용자가 관리자 중 한 명이라면 isAdmin 변수를 true로 설정한다.
  if (adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
    isAdmin = true
  }

  const groupParams = {
    UserPoolId: event.userPoolId
  };
  const userParams = {
    UserPoolId: event.userPoolId,
    Username: event.userName
  };
  /**
   *  그룹이 있는지 확인하고, 없으면 그룹을 생성한다.
   */
  if (isAdmin) {
    try {
      await cognitoProvider.getGroup(groupParams).promise();
    } catch (e) {
      await cognitoProvider.createGroup(groupParams).promise();
    }
    /**
     * 사용자가 관리자라면 Admin 그룹에 추가한다.
     */
    try {
      await cognitoProvider.adminAddUserToGroup(userParams).promise();
      callback(null, event);
    } catch (e) {
      callback(e);
    }
  } else {
    // 사용자가 어느 그룹에도 속하지 않으면 아무 작업도 하지 않는다.
    callback(null, event)
  }
}
