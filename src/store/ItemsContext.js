import React from 'react'
import InputContext from './InputContext';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    /*updateTtotálár = */
    const updatedTotalAmount =
      state.totalAmount + action.item.ar * action.item.darab;
    /* id:props.id,
     ar:props.ar,
     darab: enteredAmountNumber    */
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        darab: existingCartItem.darab + action.item.darab,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
      /*A Concat egy beépített módszer a JavaScriptben,amely egy új elemet ad egy tömbhöz
        de a push-tól eltérően nem szerkeszti a meglévő tömböt, hanem egy új tömböt ad vissza. */
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };

  }


  /*********/
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.ar;
    let updatedItems;
    if (existingItem.darab === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, darab: existingItem.darab - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }



  /**************/
  if (action.type === 'CLEAR') {
    return defaultCartState;
  }
  return defaultCartState;
};

/******************************** */
export const ItemsContext = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const clearKocsiHandler = () => {
    dispatchCartAction({ type: 'CLEAR' })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearKosar: clearKocsiHandler
  };

  return (
    <InputContext.Provider value={cartContext}>
      {props.children}
    </InputContext.Provider>
  );

}

export default ItemsContext;