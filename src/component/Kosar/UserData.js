import { useRef, useState } from 'react';
import Style from '../PostNewComponent/NewComponentWindow.module.css'

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 4;

const UserData = (props) => {
    //felülírja (a validáció után) az új adatokra
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });
    //Bemenő adatok
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        //preventDefault() metódus törli az eseményt, és nem frissíti le ezáltal az oldalt, mert akkor minden adat veszik
        event.preventDefault();
        //Beléptet (valószínü a fügvényve behozza az értéket)
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        //validálók:
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
        //validált true, false
        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
        });
        //az egészet ellenörzi hogy igaz e
        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalCodeIsValid;
        //ha nem igaz minden akkor nem ad vissza értéket
        if (!formIsValid) {
            return;
        }
        //ez a kimenő adat 
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
        });
    };

    //az index.css-be tettem.
  const nameInputClasses = formInputsValidity.name 
  ? 'Igen'
  : 'Nem';

  const címInputClasses = formInputsValidity.street 
  ? 'Igen'
  : 'Nem';
  const postalCodeInputClasses = formInputsValidity.postalCode 
  ? 'Igen'
  : 'Nem';
  const cityInputClasses = formInputsValidity.city 
  ? 'Igen'
  : 'Nem';
    

    return (
        // <div className={Style.BackgroundWindow}>
            //  <div className={Style.Window}>
                <form onSubmit={confirmHandler}>
                    <div  className={nameInputClasses}>
                        <label htmlFor='name'>A neve:</label>
                        <input type='text' id='name' ref={nameInputRef} />
                        {!formInputsValidity.name && <p className={Style.errortext}>Kérlek írd le a neved!</p>}
                    </div>
                    <div className={címInputClasses}>
                        <label htmlFor='street'>cím (utca házszámmal): </label>
                        <input type='text' id='street' ref={streetInputRef} />
                        {!formInputsValidity.street && <p className={Style.errortext}>Kérelek írj be utcát!</p>}
                    </div>
                    <div className={postalCodeInputClasses}>
                        <label htmlFor='postal'>Irányítószám: </label>
                        <input type='text' id='postal' ref={postalCodeInputRef} />
                        {!formInputsValidity.postalCode && (
                            <p className={Style.errortext}>Kérlek valós irányító számot adjon meg</p>
                        )}
                    </div>
                    <div className={cityInputClasses}>
                        <label htmlFor='city'>Település: </label>
                        <input type='text' id='city' ref={cityInputRef} />
                        {!formInputsValidity.city && <p className={Style.errortext}>Kérlek add meg a várost!</p>}
                    </div>
                    <button>Küldés</button>
                </form>
            // </div>
        // </div>
    );
};

export default UserData;
