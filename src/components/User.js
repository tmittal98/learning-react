/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
//listing and conditions
import React,{useState, useEffect} from 'react'

function User(){

    const [user,setUser] = useState([
        {name:"tushar",age:'26',address:'noida'},
        {name:"nikhil",age:'21'},
        {name:"parag",age:'23'},
        {name:"suhail",age:'25'},
        {name:"bunty",age:'22'}
    ])

    return(
        <>
            <h1>Users</h1>
            {
                // user.map((item,key)=>
                //     <p key={key}>
                //         <span>{item.name},</span>
                //         <span>{item.age},</span>
                //         <span>{item.address}</span>
                //     </p>
                // )

                //conditionals
                // user.length===5?
                // <div>Yes,this is right</div>:<div>No, length should be 5</div>

            }
        </>
    )
}
export default User