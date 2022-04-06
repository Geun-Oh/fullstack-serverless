//로그인한 사용자에 대한 프로필 정보를 렌더링. 사용자 가입과 로그인을 위한 인증 컴포넌트를 추가할 컴포넌트.

import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Container from './Container';

function Profile() {
    useEffect(() => {
        checkUser()
    }, [])
    const [user, setUser] = useState({})
    async function checkUser() {
        try {
            const data = await Auth.currentUserPoolUser()
            const userInfo = { username: data.usename, ...data.attributes }
            setUser(userInfo)
        } catch (err) {console.log('error ', err) }
    }
    return (
        <Container>
            <h1>Profile</h1>
            <h2>Username: {user.username}</h2>
            <h3>Email: {user.email}</h3>
            <h4>Phone: {user.phone_number}</h4>
            <AmplifySignOut />
        </Container>
    );
}

export default withAuthenticator(Profile);