import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Admin from './Admin';
import Nav from './Nav';
import Footer from './Footer';
import Container from './Container';
import Performance from './Performance';

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