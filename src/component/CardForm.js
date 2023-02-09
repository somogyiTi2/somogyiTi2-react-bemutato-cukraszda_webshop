import React from 'react'
import Style from './Card.module.css';
import Input from "./Input";
//Osztály komponens működésért felelős (this.props)
import { Component } from 'react';

//Osztályba kell tenni, hogy render()->rendszer vissz tudja az eredményt
class CardForm extends Component {
    // const CardForm = (this.props) => {
    render() {
        return (
            <form className={Style.InSideCard} onSubmit={this.props.submitHandler}>
                <div>
                    <img className={Style.InsidePich} src={this.props.immage} />
                </div>
                <h1>{this.props.name}</h1>
                <p>{this.props.leiras}</p>
                <p>{this.props.ar} '-Ft</p>
                <Input
                    ref={this.props.amountInputRef}
                    label='darab'
                    input={{
                        id: 'amount',
                        type: 'number',
                        min: '1',
                        max: '20',
                        step: '1',
                        defaultValue: '1',
                    }}
                /><button className={Style.Button} onClick={this.props.addToCartHandler}> Add + </button>
            </form>
        )
    }
}

export default CardForm;