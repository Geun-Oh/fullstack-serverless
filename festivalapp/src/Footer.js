/**
 * 관리자가 가입과 로그인을 할 수 있는 링크가 포하된 컴포넌트.
 */

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div style={footerStyle}>
            <Link to="/admin">
                Admins
            </Link>
        </div>
    )
}

const footerStyle = {
    borderTop: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    padding: 20
}

export default Footer;