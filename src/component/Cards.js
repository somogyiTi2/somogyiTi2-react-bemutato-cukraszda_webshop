import React from 'react';
import Card from './Card';
import Style from './Cards.module.css'

import { useState, useEffect } from 'react';


export const Cards = () => {
  const [suti, setSuti] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  /*GET*/
  useEffect(() => {
    const fetchSuti = async () => {
      const response = await fetch(
        'https://react-http-70f07-default-rtdb.firebaseio.com/sTibi.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedSuti = [];

      for (const key in responseData) {
        loadedSuti.push({
          id: key,
          name: responseData[key].name,
          leiras: responseData[key].leiras,
          ar: responseData[key].ar,
          immage: responseData[key].immage,
        });
      }
      setSuti(loadedSuti);
      setIsLoading(false);
    };

    fetchSuti().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section >
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section >
        <p>{httpError}</p>
      </section>
    );
  }



  /*kilistázás*/
  const sutiList = suti.map((suti) => (
    
    <Card
      key={suti.id}
      id={suti.id}
      name={suti.name}
      leiras={suti.leiras}
      ar={suti.ar}
      immage={suti.immage}
     
    />
   
    
  ));

  return (
    <div>
     
        <div className={Style.OutSideCard}>
          {sutiList}
        </div>
     
    </div>
  )
}

export default Cards;