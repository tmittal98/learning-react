/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
//listing and conditions
import React, { useState, useEffect, Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
function User() {

    const [user, setUser] = useState([
        { name: "tushar", age: '26', address: 'noida' },
        { name: "nikhil", age: '21' },
        { name: "parag", age: '23' },
        { name: "suhail", age: '25' },
        { name: "bunty", age: '22' }
    ])

    return (
        <Fragment>
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
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            <Button variant="link">Link</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Fragment>
    )
}
export default User