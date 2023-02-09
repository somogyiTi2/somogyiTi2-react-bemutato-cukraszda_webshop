import React from 'react'
import Style from './RendelesekWindow.module.css'


import { useState, useEffect } from 'react';



export const RendelesekWindow = () => {
    const [mindentLato, setMindentlato] = useState(true);
    const [rendeles, setRendeles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    const [postData, setPostData] = useState(false);
/*style*/
    let colorTureHandler = { backgroundColor: 'rgba(247,90,111,0.5)' }
    let colorFalseHandler = { backgroundColor: 'rgba(60,30,20,0.25)' }
    let colorHandler = { backgroundColor: 'rgba(60,30,20,0.25)' }

    useEffect(() => {
        const fetchRendeles = async () => {
            const response = await fetch(
                'https://react-http-70f07-default-rtdb.firebaseio.com/STibirendel.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedRendeles = [];

            for (const key in responseData) {
                loadedRendeles.push({
                    id: key,
                    kesz: responseData[key].kesz,
                    rendeles: responseData[key].rendeles,
                    user: responseData[key].user,
                });
            }
            setRendeles(loadedRendeles);
            setIsLoading(false);
            setPostData(false);
        };

        fetchRendeles().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, [postData]);

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


    /*UPDATE */
    let UpdateHandler = async (Data, kesze) => {
        // sending PUT request with fetch API in javascript
        await fetch("https://react-http-70f07-default-rtdb.firebaseio.com/STibirendel/" + Data + ".json", {
            method: "PATCH",
            // Fields that to be updated are passed
            body: JSON.stringify({
                kesz: !kesze
            })
        }
        )
            .then(function (response) {
                setPostData(true);
                return response.json();

            })

    };


    const showmindHaneler = () => {
        setMindentlato(false);
    }
    const hidenMindetLato = () => {
        setMindentlato(true);
    }
{/************************************MINDEN**************************************** */}
    const rendelesListfedo =
        <div className={Style.DataCard}>
         <button onClick={showmindHaneler}>Mind</button>
        {
            rendeles.map((minden, key) => (
                <div key={key}>
                    {minden.kesz === false ?
                        <div style={colorHandler}>
                            {minden.kesz}
                            <p >{minden.user.name}</p>
                            <p>{minden.user.postalCode} {minden.user.city} {minden.user.street}</p>
                            <div>
                                {minden.rendeles.map((adatok) => (
                                    <div>
                                        <h1>{adatok.name}:{adatok.darab} Darab</h1>
                                    </div>
                                ))}
                                <button type='submit' onClick={() => UpdateHandler(minden.id, minden.kesz)} >Kész</button>
                            </div>
                        </div>
                        
                        : <p style={{ color: 'green', margin:'-10px 10px' }}>Kész Rendelési azonosító:{minden.id}</p>}
                </div>
            ))
        }
            
        </div>



    const allData =
        <div className={Style.DataCard}>
         <button onClick={hidenMindetLato}>Elkészítendők</button>
         {
            rendeles.map((minden, key) => (
                <div key={key}>
                    {minden.kesz === false ?
                        <div style={colorTureHandler}>
                         {/************************************CSINÁLADNÓ**************************************** */}
                            <p>{key} {minden.id}</p>
                            {minden.kesz}
                            <p>{minden.user.name}</p>
                            <p>{minden.user.postalCode} {minden.user.city} {minden.user.street}</p>
                            <div>
                                {minden.rendeles.map((adatok) => (
                                    <div>
                                        <h1>{adatok.name}:{adatok.darab} Darab</h1>
                                    </div>
                                ))}
                                <button type='submit' onClick={() => UpdateHandler(minden.id, minden.kesz)} >Kész</button>
                                
                            </div>

                        </div>
                        : 
                        
                        <div style={colorFalseHandler}>
                        {/************************************KÉSZ**************************************** */}
                            <p>{key} {minden.id}</p>
                            {minden.kesz.id}
                            <p>{minden.user.name}</p>
                            <p>{minden.user.postalCode} {minden.user.city} {minden.user.street}</p>
                            <div>
                                {minden.rendeles.map((adatok) => (
                                    <div>
                                        <h1>{adatok.name}:{adatok.darab} Darab</h1>
                                    </div>
                                ))}
                                
                                <button type='submit' onClick={() => UpdateHandler(minden.id, minden.kesz)} >Mégse</button>
                             
                            </div>

                        </div>}

                </div>
            ))
        }
           
        </div>

    return (
        <div>
            {!mindentLato ? allData : rendelesListfedo}


        </div>
    )
}

export default RendelesekWindow;
