import React from 'react'
import Style from './NewComponentWindow.module.css'
import useInput from "../hooks/use-input";


export const NewComponentWindow = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredAr,
    isValid: enteredArIsValid,
    hasError: arInputHasError,
    valueChangeHandler: arChangedHandler,
    inputBlurHandler: arBlurHandler,
    reset: resetArInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredleiras,
    isValid: enteredleirasTouched,
    hasError: enteredleirasIsInvalid,
    valueChangeHandler: leirasInputChangeHandler,
    inputBlurHandler: leirasInputBlurHandler,
    reset: resetleirasInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredPich,
    isValid: enteredPichTouched,
    hasError: enteredPichIsInvalid,
    valueChangeHandler: PichInputChangeHandler,
    inputBlurHandler: PichInputBlurHandler,
    reset: resetPichInput
  } = useInput(value => value.trim() !== '');


  let formIsValid = false;

  if (enteredNameIsValid && enteredArIsValid && enteredleirasTouched && enteredPichTouched) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    // event.preventDefault();
    // console.log(enteredName);
    // console.log(enteredAr);
    // console.log(enteredleiras);
    // console.log(enteredPich);
    //ez a kimenő adat 
    props.onConfirm({
      id: "s"+Math.random()*10000,
      name: enteredName,
      leiras: enteredleiras,
      immage: enteredPich,
      ar: enteredAr,
    });
    resetNameInput();
    resetArInput();
    resetleirasInput();
    resetPichInput();
  }

  //az index.css-be tettem.
  const nameInputClasses = nameInputHasError
    ? 'Nem'
    : 'Igen';
  const arInputClasses = arInputHasError
    ? 'Nem'
    : 'Igen';

  const leirasInputClasses = enteredleirasIsInvalid
    ? 'Nem'
    : 'Igen';

  const PichInputClasses = enteredPichIsInvalid
    ? 'Nem'
    : 'Igen';




  return (
    <div className={Style.BackgroundWindow}>
      <div className={Style.Window}>
        <div >
          <form onSubmit={formSubmissionHandler}>
            <div>
              <div className={nameInputClasses}>
                <label htmlFor='name'>A süti neve:</label>
                <input

                  type='text'
                  id='name'
                  onChange={nameChangedHandler}
                  onBlur={nameBlurHandler}
                  value={enteredName} />
              </div>
              {nameInputHasError && (
                <p className={Style.errortext}>Kérem írja be a nevét</p>
              )}

              <div className={arInputClasses} >
                <label htmlFor='price'>Ára:</label>
                <input type='number'
                  id='price'
                  onChange={arChangedHandler}
                  onBlur={arBlurHandler}
                  value={enteredAr} />
              </div>
              {arInputHasError && (
                <p className={Style.errortext}>Kérem adjon neki árat.</p>
              )}

              <div className={leirasInputClasses} >
                <label htmlFor='leiras'>Leírása:</label>
                <input type='text'
                  id='leiras'
                  onChange={leirasInputChangeHandler}
                  onBlur={leirasInputBlurHandler}
                  value={enteredleiras} />
              </div>
              {enteredleirasIsInvalid && (
                <p className={Style.errortext}>Kérem helyezzen ide egy leírást.</p>)}


              <div className={PichInputClasses} >
                <label htmlFor='url'>Kép (url): </label>
                <input type='text'
                  id='url'
                  onChange={PichInputChangeHandler}
                  onBlur={PichInputBlurHandler}
                  value={enteredPich} />
              </div>
              {enteredPichIsInvalid && (
                <p className={Style.errortext}>Kérem helyezzen ide egy kép linket</p>)}

              <div className='form-actions' className={Style.Labelinput}>
                <button onClick={props.onClose}>Vissza</button>

                <button disabled={!formIsValid}>Küld</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}


export default NewComponentWindow;