import React from 'react'

const InputContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem: (item)=>{},
    remountItem:(id)=>{},
    clearKosar:()=>{},
})


export default InputContext;