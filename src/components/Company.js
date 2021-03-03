/* eslint-disable no-unused-vars */
//events and functions
//listing
import React,{useState}from 'react'

function Company(){

    const [val,setVal] = useState('Tushar')

    const test = (e) =>{
        console.warn("test function",e.target.value);
        setVal(e.target.value)
    }
    return(
        <div className="company">
            <h1>Company Component</h1>
            <input type="text" onChange={test} value={val}/>
            {/* dont write test() */}
            <button onClick={()=> alert(val)}>
                click me
            </button>
        </div>
    )
}

export default Company