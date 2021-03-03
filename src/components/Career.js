import React,{useEffect,useState} from 'react'

function Career(){

    const [name,setName] = useState('Tushar')
    const [age,setAge] = useState(26)

    //when component will build then it will run
    //this is called everytime
    //when a state is changed
    //if we pass [] then it will only be called once
    //[age] now only for age it will called
    useEffect( () =>{
        console.warn("hello from hook");
    },[age])

    return(
        <div>
            <h1>Career Page Component</h1>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <button onClick = { ()=>{
                setName("Tushar Mittal")
            }}>
                Update Name using Hook
            </button>
            <button onClick = { ()=>{
                setAge(29)
            }}>
                Update Age using Hook
            </button>
        </div>
    )
}

export default Career