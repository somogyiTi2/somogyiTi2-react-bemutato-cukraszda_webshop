import React from 'react';
import Style from './Text.module.css'

export const Text = () => {
  return (
    <div className={Style.Text}>
      <div>
        <h3>Kedves felhasználó</h3>
        <p>Ez itt a saját weboldalam, ezzel szeretném bemutatni jelenlegi tudásomat.
          Mivel egy online adatbázisaal (firebase) DB-t használ, így mindenki láthatja amit kiposztolsz így arra kérnélek:</p>
        <p>1. Ne tegyél fel valós adatot, és kérlek kerüld a NEM professzionális felhasználást. </p>
        <p>2. Mindenképp hagyj terméket ("hogy más is rendelhessen").</p>
        <p>Az "admin nézet" eléréséhez a loginba /**/ tettem a felhasználót és a jelszót</p>
        <p>Jó szórakozást</p>
      </div>
    </div>
  )
}

export default Text;