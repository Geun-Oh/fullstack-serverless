//보호된 경로 생성의 예시 컴포넌트. 사용자가 로그인하면 이 경로를 볼 수 있다. 로그인하지 않은 사용자는 로그인 양식으로 리다이렉션.

import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';

function Protected(props) {
    useEffect(() => {
        Auth.currentAuthenticatedUser().catch(() => {
            props.history.push('/profile') // 인증에 실패하면 다시 프로필 창을 호출해 리다이렉션.
        })
    }, [])
    return (
        <Container>
            <h1>Protected route</h1>
        </Container>
    )
}

export default Protected;