//라우터와 현재 경로 이름을 결정하는 몇 가지 로직이 있는 곳.

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Public from './Public';
import Profile from './Profile';
import Protected from './Protected';

const Router = () => {
    const [current, setCurrent] = useState('home')
    useEffect(() => {
        setRoute()
        window.addEventListener('hashchange', setRoute)
        return () => window.removeEventListener('hashchange', setRoute)
    }, [])
    function setRoute() {
        const location = window.location.href.split('/')
        const pathname = location[location.length - 1]
        setCurrent(pathname ? pathname : 'home')
    }
    return (
        <HashRouter>
            <Nav current={current} />
            <Routes>
                <Route path='/' exact element={<Public />} />
                <Route path='/protected' exact element={<Protected />} />
                <Route path='/profile' exact element={<Profile />} />
                <Route element={<Public />} />
            </Routes>
        </HashRouter>
    )
}

export default Router;