/*
처음 마운트될 때 useEffect를 이용해 사용자의 로그인 여부를 판단하는 컴포넌트. 로그인 인증이 필요한 페이지의 경우 이 페이지로 감싸는 형태로 구현한다.
사용자가 로그인되어있으면 children 페이지를 렌더링하고, 사용자가 로그인하지 않은 경우 리다이렉션한다.
*/

import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';

const protectedRoute = (Comp, route = '/profile') => (props) => { // 인증시 렌더링할 페이지와 리다이렉션할 페이지를 전달한다.
    async function checkAuthState() {
        try {
            await Auth.currentAuthenticatedUser()
        } catch (err) {
            props.history.push(route)
        }
    }
    useEffect(() => {
        checkAuthState()
    }, [])
    return <Comp {...props} />
}

export default protectedRoute;