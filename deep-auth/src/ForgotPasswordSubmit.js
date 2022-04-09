/*
formState를 업데이트하는 함수와 클릭 시 호출할 forgotPasswordSubmit 함수를 props를 전달받는다.
*/

import React from 'react';
import Button from './Button';
import { styles } from './Form';

function forgotPasswordSubmit({ updateFormState, forgotPasswordSubmit }) {
    return (
        <div style={styles.container}>
            <input
                name="confirmationCode"
                placeholder="Confirmation code"
                onChange={e => {e.persist();updateFormState(e)}}
                style={styles.input}
            />
            <input
                name="password"
                placeholder="new password"
                type="password"
                onChange={e => {e.persist();updateFormState(e)}}
                style={styles.input}
            />
            <Button onclick={forgotPasswordSubmit} title="Save new password" />
        </div>
    )
}

export default forgotPasswordSubmit;