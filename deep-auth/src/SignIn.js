/*
로그인 양시기을 렌더링하는 컴포넌트. formState를 업데이트하는 함수와 클릭시 호출할 singIn 함수를 props로 전달받는다.
*/

import React from 'react';
import Button from './Button';
import { styles } from './Form';

function SignIn({ signIn, updateFormState }) {
    return(
        <div style={styles.container}>
            <input
                name='username'
                onChange={e => {e.persist;updateFormState(e)}}
                style={styles.input}
                placeholder='username' 
            />
            <input
                type='password'
                name='password'
                onChange={e => {e.persist;updateFormState(e)}}
                style={styles.input}
                placeholder='password' 
            />
            <Button onClick={signIn} title='Sign In' />
        </div>
    )
}

export default SignIn;