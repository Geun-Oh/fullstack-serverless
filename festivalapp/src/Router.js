/**
 * 처음 index.js에서 구현되는 컴포넌트. 다른 컴포넌트들로 이동할 수 있도록 하는 이정표가 된다.
 */

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Admin from './Admin';
import Nav from './Nav';
import Footer from './Footer';
import Container from './Container';
import Performance from './Performance';

const Router = () => {
    const [current, setCurrent] = useState('home') // 현재 보여지는 페이지를 담아두는 변수
    useEffect(() => {
        setRoute() // 현재 보여지는 페이지를 나타내는 route를 확인하는 함수
        window.addEventListener('hashchange', setRoute) // hash값이 바뀌면 setRoute로 바뀐 경로를 확인함
        return () => window.removeEventListener('hashchange', setRoute) // 마지막으로 이벤트리스너를 삭제함(페이지가 렌더링될 때가 아니면 있을 이유가 없으므로).
    }, [])
    function setRoute() { // url 뒤에 따라오는 route를 설정하는 함수
        const location = window.location.href.split('/') // split 함수를 이용하여 현재 window url을 /를 기준으로 쪼갠 조각들로 이루어진 배열이다.
        const pathname = location[location.length - 1] // location 배열에서 가장 마지막(끝)에 있는 값을 가져온다. 즉 route를 가져온다.
        setCurrent(pathname ? pathname : 'home') // pathname이 true이면 current를 pathname으로 설정하고 그렇지 않으면 home을 기본값으로 설정한다.
    }

    /**
     * 처음에는 Home 컴포넌트를 보여주고 Performance와 admin을 보여줄 수 있는 루트를 설정함.
     */

    return (
        <HashRouter>
            <Nav current={current} />
            <Container>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/performance/:id" exact element={<Performance />} />
                    <Route path="/admin" exact element={<Admin />} />
                </Routes>
            </Container>
            <Footer />
        </HashRouter>
    )
}

export default Router;