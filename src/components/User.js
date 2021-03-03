/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
//listing and conditions

//api is called when the component is loaded
import React, { useState, useEffect, Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
function User() {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
            data.json().then(result => {
                console.warn(result);
                setUser(result.data)
            })
        })
    }, [])
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
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, index) =>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                                <td>{item.employee_age}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Fragment>
    )
}
export default User