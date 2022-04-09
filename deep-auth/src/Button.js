/*
재사용 가능한 버튼을 만든다. 디자인 패턴을 맞추기 위함.
onClick은 클릭 시 실행할 함수를 지정, title은 버튼에 렌더링될 내용이다.
*/

import React from 'react';
export default function Button({ onClick, title }) {
    return (
        <button style={styles.button} onClick={onClick}>
            {title}
        </button> 
    )
}

const styles = { //button 컴포넌트에 대한 스타일
    button: {
        backgroundColor: '#006bfc',
        color: 'white',
        width: 316,
        height: 45,
        fontWeight: '600',
        fontSize: 14,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        borderRadius: 3,
        marginTop: '25px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)'
    }
}