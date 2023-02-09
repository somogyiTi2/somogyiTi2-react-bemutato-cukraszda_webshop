import React, { useContext } from 'react';
import Style from './Kosarelem.module.css';


export const Kosarelem = (props) => {
 

  return (
    <li>
    <div className={Style.KosarTartam}>
      <em>Termék: </em><h3><strong>{props.name}</strong></h3>
      <div>
        <span><em>Ár:</em> {props.ar}-'Ft</span>
        <p/>
        <span><em>Darab: </em> {props.darab}</span>
      </div>
    </div>
    <div  className={Style.PlussMinus}>
      <button onClick={props.onRemove}>−</button>
      <button onClick={props.onAdd}>+</button>
    </div>
    <hr/>
  </li>
  
  )
}

export default Kosarelem;