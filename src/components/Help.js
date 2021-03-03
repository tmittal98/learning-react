/* eslint-disable no-unused-vars */
//Props tutorial
import React,{useEffect,useState} from 'react'

function Help(props){

    useEffect( () => {
        console.warn("check props",props.name);
    })

     useEffect( () => {
        console.warn("check props 2 for update ",props.name);
    },[props.name])

    return(
        <div className="help">
            <h1>Help Component</h1>
            <h2> {props.name}</h2>
        </div>
    )
}

export default Help