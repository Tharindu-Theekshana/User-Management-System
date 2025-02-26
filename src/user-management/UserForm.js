import React from 'react'
import './UserForm.css';
import { useState } from 'react';


export default function UserForm(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");

    const handleId= (e) => {
        setId(e.target.value);
    }
    const handleName= (e) => {
        setName(e.target.value);
    }



    

  return (
    <div className='cont'>
        <div className='id'>ID <input onChange={handleId} placeholder='Enter ID'/></div>
        <div className='name'>Name <input onChange={handleName} placeholder='Enter Name'/></div>
        <div className='submit'><input type='submit' /></div>
      
    </div>
  )
}
