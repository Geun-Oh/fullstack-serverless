const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitoProvider = new aws.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18'
  })

  let isAdmin = false
  // 관리자 이메일을 설정합니다.
  const adminEmails = ['kandy1002@naver.com']

  // 사용자가 관리자면 isAdmin을 true로 설정한다.
  if (adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
    isAdmin = true
  }

  const groupParams = {
    UserPoolId: event.userPoolId,
  }

  const userParams = {
    UserPoolId: event.userPoolId,
    Username: event.userName,
  }

  if (isAdmin) {
    groupParams.GroupName = 'Admin',
    userParams.GroupName = 'Admin'

    // 그룹이 있는지 확인하고, 없으면 그룹을 생성합니다.
    try {
      await cognitoProvider.getGroup(groupParams).promise()
    } catch (e) {
      await cognitoProvider.createGroup(groupParams).promise()
    }

    // 사용자가 관리자인 경우 그룹에 추가한다.
    try {
      await cognitoProvider.adminAddUserToGroup(userParams).promise()
      callback(null, event)
    } catch (e) {
      callback(e)
    }
  } else {
    // 사용자가 관리자가 아니면 아무 작업도 하지 않는다.
    callback(null, event)
  }
}