import React from "react";
// import idimmage from '../assets/1.jpg';
import Style from './Card.module.css';
import { useRef, useContext, useState } from "react";
import Input from "./Input";
import InputContext from "../store/InputContext";

export const Card = (props) => {

    const storedUserLoggedInInformation = localStorage.getItem('Login');

    const Ctx = useContext(InputContext);

    const amountInputRef = useRef(0);

    const addToCartHandler = () => {
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        Ctx.addItem({
            id: props.id,
            name: props.name,
            ar: props.ar,
            darab: enteredAmountNumber
        })
        console.log(
            props.id + " " + props.name + " " + props.ar + " " + enteredAmount
        );
    }

    const submitHandler = (event) => {
        //ne frissüljön
        event.preventDefault();
    }

    //Itemdeleter
    // const [tasks, setTasks] = useState([]);
    const ItemDeleterHandler = async (id) => {
        await fetch(`https://react-http-70f07-default-rtdb.firebaseio.com/sTibi/` + id + '.json', { method: 'DELETE' })
        console.log('delete', id);
        // setTasks(tasks.filter((task) => task.id !== id))
        window.location.reload();
    }


    return (
        <form className={Style.InSideCard} onSubmit={submitHandler}>
            <div>
                <img className={Style.InsidePich} src={props.immage} />
            </div>
            <h1>{props.name}</h1>
            <p>{props.leiras}</p>
            <p>{props.ar} '-Ft</p>
            <Input
                ref={amountInputRef}
                label='darab'
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '20',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button className={Style.Button} onClick={addToCartHandler}> Add + </button>
            {storedUserLoggedInInformation === '1' &&
                <button className={Style.Button} type='submit'
                    style={{ background: '#f29a2c', margin: '20px' }}
                    name={props.id}
                    onClick={() => ItemDeleterHandler(props.id)}>Törlés</button>}
        </form>
    )
}

export default Card;
