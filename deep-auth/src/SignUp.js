/*
가입 양식을 렌더링하는 컴포넌트. formState를 업데이트하는 함수와 클릭 시 호출할 signUp 함수를 props로 전달받는다.
*/

import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function SignUp({ updateFormState, signUp}) {
    return (
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
            <input
                name='email'
                onChange={e => {e.persist;updateFormState(e)}}
                style={styles.input}
                placeholder='email'
            />
            <Button onClick={signUp} title='Sign up' />
        </div>
    )
}

export default SignUp;