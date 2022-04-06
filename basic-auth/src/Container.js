//다른 컴포넌트에 재사용이 가능한 스타일을 적용하는 데 사용할 컴포넌트가 포함됨.
//다른 컴포넌트에서 스타일을 재작성할 필요 없이 애플리케이션 전체에서 일관된 스타일 적용이 가능해짐.
//추후 스타일 변경은 여기에서만 진행하면 됨.

import React from 'react';

const Container = ({ children }) => (
    <div style={styles.container}>
        { children }
    </div>
)

const styles = {
    container: {
        margin: '0 auto',
        padding: '50px 100px'
    }
}

export default Container;