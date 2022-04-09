/*
사용자가 가입하면 MFA 확인 코드를 전달받는다. 이 컴포넌트는 MFA 코드를 처리하고 제출하는 양식을 포함한다.
formState를 업데이트하는 함수와 클릭 시 호출할 confirmSignUp 함수를 props로 전달받는다.
*/

import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ConfirmSignUp ({ updateFormState, confirmSignUp }) {
    return (
        <div style={styles.container}>
            <input
                name="confirmationCode"
                placeholder="Confirmation Code"
                onChange={e => {e.persist;updateFormState(e)}}
                style={styles.input}
            />
            <Button onClick={confirmSignUp} title="Confirm Sign Up" />
        </div>
    )
}

export default ConfirmSignUp;