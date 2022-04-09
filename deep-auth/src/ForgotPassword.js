/*
formState를 업데이트하는 함수와 클릭 시 호출할 forgotPassword 함수를 props로 전달받는다.
*/

function ForgotPassword ({ updateFormState, forgotPassword }) {
    return (
        <div style={StyleSheet.container}>
            <input
                name="username"
                placeholder="Username"
                onChange={e => {e.persist();updateFormState(e)}}
                style={styles.input}
            />
            <Button onClick={forgotPassword} title="Reset password" />
        </div>
    )
}

export default ForgotPassword;