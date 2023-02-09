import React from 'react';
import styles from './Header.module.css';
import bg from "../assets/bg.jpg"
import Navbar from './Navbar'


export const Header = (props) => {
  return (
    <div>
      <Navbar onNDOpen={props.onNDOpen} onKosarOpen={props.onKosarOpen} onRendelesekOpen={props.onRendelesekOpen} hidenRendelesek={props.onRendelesekClose} showLogin={props.showLogin} />
      <img className={styles.Bg} src={bg}></img>

    </div>
  )
}

export default Header;
