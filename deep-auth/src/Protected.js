import React from 'react';
import Container from './Comtainer';
import protectedRoute from './protectedRoute';

function Protected() {
    return (
        <Container>
            <h1>Protected route</h1>
        </Container>
    )
}

export default protectedRoute(Protected); // 이와 같은 방식으로 컴포넌트를 파라미터로 넣어준다!