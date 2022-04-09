/*
현재 로그인한 사용자의 존재 여부에 따라 Form 컴포넌트 또는 사용자 프로필 정보를 렌더링하는 페이지.

Amplify 내장 로컬 이벤트 시스템 Hub 사용. Amplify는 인증 이벤트 또는 파일 다운로드 알림같이 이벤트가 발생할 때 서로 통신하기 위해 Hub를 사용한다.
이곳에서는 signOut 인증 이벤트를 감지하기 위해 Hub 리스너를 설정해 이벤트에 따라 사용자를 상태에서 제거하고 Profile 컴포넌트 대신 인증 페이지가 보이도록 리렌더링한다.
*/

import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Auth, Hub } from 'aws-amplify';
import Container from './Container';
import Form from './Form';

function Profile () {
    useEffect(() => {
        checkUser()
        Hub.listen('auth', (data) => {
            const { payload } = data
            if(payload.event === 'signOut') {
                setUser(null)
            }
        })
    }, [])

    const [user, setUser] = useState(null)
    async function checkUser() {
        try {
            const data = await Auth.currentUseerPoolUser()
            const userInfo = { username: data.username, ...data.attributes }
            setUser(userInfo)
        } catch (err) {
            console.log('error: ', err)
        }
    }
    function signOut () {
        Auth.signOut()
            .catch(err => console.log('error signing out: ', err))
    }
    if (user) {
        return (
            <Container>
                <h1>Profile</h1>
                <h2>Username: {user.username}</h2>
                <h3>Email: {user.email}</h3>
                <h4>Phone: {user.phone_number}</h4>
                <Button onClick={signOut}>Sign Out</Button>
            </Container>
        )
    }
    return <Form setUser={setUser} />
}

export default Profile;