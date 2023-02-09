import React from 'react'
import NewComponentWindow from './NewComponentWindow'
import Cards from '../Cards'

export const PostNewCoponent = (props) => {
  const postMethod = async (Data) => {
    await fetch('https://react-http-70f07-default-rtdb.firebaseio.com/sTibi.json', {
      method: 'POST',
      body: JSON.stringify({
          name: Data.name,
          leiras: Data.leiras,
          immage: Data.immage,
          ar: Data.ar,
      })
    });
  }
  return (
    <div><NewComponentWindow onClose={props.onClose} onConfirm={postMethod} /></div>
  )
}
