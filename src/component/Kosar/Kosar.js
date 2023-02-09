import Style from '../PostNewComponent/NewComponentWindow.module.css';
import InputContext from '../../store/InputContext';
import { useContext, useState } from 'react';
import Kosarelem from './Kosarelem';
import UserData from './UserData';
import React from 'react';

export const Kosar = (props) => {
  const [elkuldve, setElkuldve] = useState(false);
  const [sikereskuldes, setSikereskuldes] = useState(false);

  const cartCtx = useContext(InputContext);

  const totalAmount = cartCtx.totalAmount.toFixed(0);

  const kosaritemdarab = cartCtx.items.length;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, darab: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) =>
        <Kosarelem
          key={item.id}
          name={item.name}
          ar={item.ar}
          darab={item.darab}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></Kosarelem>)}
    </ul>
  );

  /*User Data*/
  const [userData, setUserData] = useState(false);
  const showUserDataHandler = () => {
    setUserData(true)
  }
  const hidenUserDataHandler = () => {
    setUserData(false)
  }

  const submitPostHandler = async (Data) => {
    setElkuldve(true);
    await fetch('https://react-http-70f07-default-rtdb.firebaseio.com/STibirendel.json', {
      method: 'POST',
      body: JSON.stringify({
        kesz:false,
        user: Data,
        rendeles: cartCtx.items
      })
    })
    setElkuldve(false);
    setSikereskuldes(true);
    cartCtx.clearKosar();
  }

  const makeFaseHandler = (props) => {
    setSikereskuldes(false);
  }

  const kuldes =
    <div className={Style.BackgroundWindow}>
      <div className={Style.Window}>
        <h1>Elküldve</h1>
        <button onClick={makeFaseHandler}>Bezár</button>
      </div>
    </div>

  return (
    <div className={Style.BackgroundWindow}>
      <div className={Style.Window}>
        {cartItems}
        <div >
          <span> Teljes összeg: </span>
          <span>{totalAmount} '-FT</span>
        </div>
        <div>
          {userData && kosaritemdarab > 0 ? <UserData onConfirm={submitPostHandler} hidenUserDataHandler={hidenUserDataHandler} /> : ''}
        </div>


        <button onClick={props.onClose}>Bezár</button>
        {userData && kosaritemdarab > 0 ? <button onClick={hidenUserDataHandler}>Vissza</button> : <button onClick={showUserDataHandler}
          disabled={kosaritemdarab === 0}>Tovább</button>}
        {sikereskuldes && kuldes}
      </div>
    </div>

  )
}

export default Kosar;