
import React from 'react';

const members = props => {

    return(

        <div>
            {props.member.map((member,index) =>{
                return(
                    <div classname="member" key={index}>
                        <h1>{member.name}</h1>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                )
            })}


        </div>


    )
}




export default members;