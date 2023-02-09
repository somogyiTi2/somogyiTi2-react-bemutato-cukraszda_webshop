import React from 'react'
import { useRef,useState } from "react";
import Style from './Card.module.css';
import Input from "./Input";

export const InputForm = (props) => {
      // const Ctx = useContext(InputContext);
      const [amountIsValid,setAmountIsValid]=useState(true);
      const amountInputRef = useRef();
  
      const addToCartHandler = evenet => {
          //ne töltödjön újra az oldal:
          evenet.preventDefault();
          //befogjuk az értéket (azért működik mert az Inputba beintegártuk a ref-et.)
          const enteredAmount = amountInputRef.current.value;
          //számmá alakítjuk
          const enteredAmountNumber = +enteredAmount;
          console.log(enteredAmount);
  
          if (enteredAmount.trim().length === 0|| enteredAmount<1 || enteredAmount>5){
              setAmountIsValid(false);
              return;
          }
          props.onAddToCart(enteredAmountNumber);  
      }
    
  return (
    <form onSubmit={addToCartHandler}>
    <Input
        ref={amountInputRef}
        label='Darab'
        input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }}
    />
    <button className={Style.Button}> Add + </button>
    {!amountIsValid && <p>Kérlek reális számot válassz ki.</p>}
</form>
  )
}

export default InputForm;

