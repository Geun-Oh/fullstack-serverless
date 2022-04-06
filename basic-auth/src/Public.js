//사용자의 로그인 여부와 상관없이 볼 수 있는 기본 경로.

import React from 'react';
import Container from './Container';

function Public () {
    return (
        <Container>
            <h1>Public route</h1>
        </Container>
    )
}

export default Public;