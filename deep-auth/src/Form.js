/* 
formState를 만들고 formState를 지정한다. formState는 유저의 개인정보가 담긴 form이며 계속 업데이트된다.
또한 formType을 통해 렌더링할 페이지를 관리한다.
renderForm 함수에는 사용자 정의 로직을 작성한다.
*/

import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import SignIn from './SignIn';
import SignUp from './SignUp';
import comfirmSignUp from './ConfirmSignUp';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordSubmit from './ForgotPasswordSubmit';

async function signIn ({ username, password }, setUser) {
    try {
        const user = await Auth.signIn(username, password)
        const userInfo = { username: user.username, ...user.attributes }
        setUser(userInfo)
    } catch (err) {
        console.log('error signing in..', err)
    }
}

async function signUp ({ username, password, email }, updateFormType) {
    try {
        await Auth.signUp({
            username, password, attributes: { email }
        })
        console.log('sign up success!')
        updateFormType('confirmSignUp')
    } catch (err) {
        console.log('error signing up..', err)
    }
}

async function confirmSignUp ({ username, confirmationCode }, updateFormType) {
    try {
        await Auth.comfirmSignUp(username, confirmationCode)
        updateFormType('signIn')
    } catch (err) {
        console.log('error signing up..', err)
    }
}

async function forgotPassword ({ username }, updateFormType) {
    try {
        await Auth.forgotPassword(username)
        updateFormType('forgotPasswordSubmit')
    } catch (err) {
        console.log('error submitting username to reset password...', err)
    }
}

async function forgotPasswordSubmit ({ username, confirmationCode, password }, updateFormType) {
    try {
        await Auth.forgotPasswordSubmit(username, confirmationCode, password)
        updateFormType('signIn')
    } catch (err) {
        console.log('error updating password...', err)
    }
}

const initialFormState = {
    username: '',
    password: '',
    email: '',
    confirmationCode: ''    
}

function Form (props) {
    const [formType, updateFormType] = useState('signIn')
    const [formState, updateFormState] = useState(initialFormState)

    function updateForm (event) { // initialState에 핸들러에 입력된 단일 타겟 이벤트를 포함시키기 위해 입력된 값을 포함하는 새 객체를 선언 후 이를 업데이트.
        const newFormState = {
            ...formState, [event.target.name]: event.target.value
        }
        updateFormState(newFormState)
    }

    function renderForm() { // renderForm 함수는 현재 렌더링되는 양식을 나타내는 formType을 확인하고 적절한 양식을 렌더링한다.
        switch (formType) {
            case 'signUp':
                return (
                    <SignUp
                        signUp={() => signUp(formState, updateFormType)}
                        updateFormState={e => updateForm(e)}
                    />
                )
            case 'comfirmSignUp':
                return (
                    <ConfirmSignUp
                        confirmSignUp={() => confirmSignUp(formState, updateFormType)}
                        updateFormState={e => updateForm(e)}
                    />
                )
            case 'signIn':
                return (
                    <SignIp
                        signIp={() => signIp(formState, props.setUser)}
                        updateFormState={e => updateForm(e)}
                    />
                )
            case 'forgotPassword':
                return (
                    <ForgotPassword
                        forgotPassword={() => forgotPassword(formState, updateFormType)}
                        updateFormState={e => updateForm(e)}
                    />
                )
            case 'forgotPasswordSubmit':
                return (
                    <ForgotPasswordSubmit
                        forgotPasswordSubmit={() => forgotPasswordSubmit(formState, updateFormType)}
                        updateFormState={e => updateForm(e)}
                    />
                )
            default:
                return null
        }
    }

    return (
        <div>
            {renderForm()}
            { // 사용자가 signUp, signIn, forgotPassword 페이지를 자유자재로 이동할 수 있도록 렌더링함!
                formType === 'signUp' && (
                    <p style={styles.toggleForm}>
                        Already have an account? <span
                            style={styles.anchor}
                            onClick={() => updateFormType('signIn')}
                        >Sign In</span>
                    </p>
                )
            }
            {
                formType === 'signIn' && (
                    <>
                        <p style={styles.toggleForm}>
                            Need an account? <span
                                style={styles.anchor}
                                onClick={() => updateFormType('signUp')}
                            >Sign Up</span>
                        </p>
                        <p style={{ ...styles.toggleForm, ...styles.resetPassword }}>
                            Forget your password? <span
                                style={styles.anchor}
                                onClick={() => updateFormType('forgotPassword')}
                            >Reset password</span>
                        </p>
                    </>
                )
            }
        </div>
    )
}

/*
또한 Form.js에 컴포넌트 간에 공유하여 사용할 스타일을 지정하고 내보낸다.
*/

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 45,
        marginTop: 8,
        width: 300,
        maxWidth: 300,
        padding: '0px 8px',
        fontSize: 16,
        outline: 'none',
        border: 'none',
        borderBottom: '2px solid rgba(0, 0, 0, 0.3)'
    },
    toggleForm: {
        fontWeight: '600',
        padding: '0px 25px',
        marginTop: '15px',
        marginBottom: 0,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    resetPassword: {
        marginTop: '5px'
    },
    anchor: {
        color: '#006bfc',
        cursor: 'pointer'
    }
}

export { styles, Form as default }