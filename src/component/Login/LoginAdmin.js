import React from 'react';
import Style from '../PostNewComponent/NewComponentWindow.module.css'
import useInput from '../hooks/use-input';

export const LoginAdmin = (props) => {

    const {
        value: enteredUserName,
        isValid: enteredUserNameIsValid,
        hasError: userNameInputHasError,
        valueChangeHandler: userNameChangedHandler,
        inputBlurHandler: userNameBlurHandler,
        reset: resetUserNameInput
    } = useInput(value => value === "admin");


    const {
        value: enteredPw,
        isValid: enteredPwIsValid,
        hasError: pwInputHasError,
        valueChangeHandler: pwChangedHandler,
        inputBlurHandler: pwBlurHandler,
        reset: resetPwInput
    } = useInput(value => value==="password");


    let formIsValid = false;

    if (enteredUserNameIsValid && enteredPwIsValid) {
        formIsValid = true;
       
    }


    const formSubmissionHandler = (event) => {
     
        resetUserNameInput();
        resetPwInput();
    }

    //az index.css-be tettem.
    const userNameInputClasses = userNameInputHasError
        ? 'Nem'
        : 'Igen';
        const pwInputClasses = pwInputHasError
        ? 'Nem'
        : 'Igen';

     

    return (
        <div className={Style.BackgroundWindow}>
            <div className={Style.Window}>
                <form onSubmit={formSubmissionHandler}>
                    <div>
                        <div className={userNameInputClasses}>
                            <label htmlFor='userName'>Felhasználónév: 
                            <em> /*User: admin*/</em></label>
                            <p/>
                            <input
                                type='text'
                                id='userName'
                                onChange={userNameChangedHandler}
                                onBlur={userNameBlurHandler}
                                value={enteredUserName} />
                            {userNameInputHasError && (
                                <p className={Style.errortext}>Kérem adja meg felhasználó nevét</p>
                            )}
                            <p/>
                        </div>
                    </div>

                    <div>
                        <div className={pwInputClasses}>
                            <label htmlFor='password'> Jelszó: 
                            <em>/*Jelszó: password */</em></label>
                            <p/>
                            <input
                                type='password'
                                id='password'
                                onChange={pwChangedHandler}
                                onBlur={pwBlurHandler}
                                value={enteredPw} />
                            {pwInputHasError && (
                                <p className={Style.errortext}>Kérem adja meg felhasználó nevét</p>
                            )}
                        </div>
                    </div>
                    <button onClick={props.onClose}>Bezár</button>
                    <button type='submit' disabled={!formIsValid} onClick={()=>localStorage.setItem('Login','1')}>Küld</button>
                    
                </form>
            </div></div>
    )

}

export default LoginAdmin;