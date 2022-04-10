/**
 * 일관된 스타일을 적용하기 위해 쓰이는 Container
 */

import React from 'react';

export default function Container({ children }) {
    return (
        <div style={container}>
            {children}
        </div>
    )
}

const container = {
    padding: '30px 40px',
    minHeight: 'calc(100vh - 120px)'
}