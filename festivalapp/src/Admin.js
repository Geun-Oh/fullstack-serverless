/**
 * 가입, 로그인, 로그아웃 세 가지 기능을 구현한다. 
 * 추후 관리자가 API를 생성하고 관리할 수 있도록 관리자로 가입하는 방법을 제공하는 방법으로 확장해 사용 가능하다.
 */

import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { Auth } from 'aws-amplify';
// import { Button } from 'antd';

function Admin() {
    return (
        <div>
            <h1 style={titleStyle}>Admin</h1>
            <AmplifySignOut />
        </div>
    )
}

const titleStyle = {
    fontWeight: 'normal',
    margin: '0px 0px 10px 0px'
}

export default withAuthenticator(Admin);