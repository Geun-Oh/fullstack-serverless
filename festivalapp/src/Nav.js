/**
 * 기본 네비게이션 바. 모든 무대와 공연을 보여주는 기본 화면으로 이동하기 위한 링크만 존재.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const Nav = (props) => {
    const { current } = props
    return (
        <div>
            <Menu selectedKeys={[current]} mode="horizontal">
                <Menu.Item key='home'>
                    <Link to='/'>
                        <HomeOutlined />Home
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Nav;