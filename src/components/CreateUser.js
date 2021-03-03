/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function CreateUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    const makeUser = () => {

        let data = { name, age, address }
        console.warn("called", data);
    }
    return (
        <div>
            <h1>Make a new user</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} name="username" value={name} /><br />
            <input type="text" onChange={(e) => setAge(e.target.value)} name="age" value={age} /><br />
            <input type="text" onChange={(e) => setAddress(e.target.value)} name="address" value={address} /><br />
            <button onClick={makeUser}>CreateUser</button>
        </div>
    )
}

export default CreateUser