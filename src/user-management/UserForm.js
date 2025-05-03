import React, { useEffect } from 'react'
import './UserForm.css';
import { useState } from 'react';


export default function UserForm({addUsers,updateUser,isEdit,submited,data}) {

    const [id, setId] = useState();
    const [name, setName] = useState("");

    const handleId= (e) => {
        setId(e.target.value);
    }
    const handleName= (e) => {
        setName(e.target.value);
    }

    useEffect(()=>{
    
      if(data?.id && data.id !== 0){
        setId(data.id);
        setName(data.name);
      }
    },[data]) 
    useEffect(()=>{
    
      if(!submited){
           setId("");
           setName("");
      }
      
    },[submited]) 


    

  return (
    <div className='cont'>
        <div className='id'>ID <input value={id} onChange={handleId} placeholder='Enter ID'/></div>
        <div className='name'>Name <input value={name} onChange={handleName} placeholder='Enter Name'/></div>
        <div className='submit'><input value={isEdit?'Update': 'Add'} onClick={isEdit?()=>updateUser({id,name}):()=>addUsers({id,name})}/></div>
      
    </div>
  )
}
