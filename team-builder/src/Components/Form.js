import React, { useState } from 'react';


const Form = props => {
    const [member, setMember] = useState ({
        name: "", email: "", role: ""
    })

    const changeHandler = event => {
        setMember({...member, [event.target.name] : event.target.value})
    }

    const submitForm = event => {
        event.preventDefault()
        const newMember = {
            ...member,
            id: Date.now()
        }

        props.addNewMember(newMember)
        setMember(newMember)
    }

    return(
        <div>
            <form onSubmit={submitForm}>

                <label htmlFor="name">Name: </label>
                <input onChange={changeHandler} id="name" type="text" value={member.name} placeholder="Name"></input>

                <label htmlFor="email">Email: </label>
                <input onChange={changeHandler} id="email" type="text" value={member.email} placeholder="Email"></input>

                <label htmlFor="role">Role: </label>
                <input onChange={changeHandler} id="role" type="text" value={member.role} placeholder="Role"></input>

                <button type="submit"> Submit!</button>
            </form>
        </div>
    )
}



export default Form;