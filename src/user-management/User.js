import React, { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'
import  Axios  from 'axios'



export default function User() {

  const [users,setUsers] = useState([]);
  const [submited,setSubmited] = useState(false);

  useEffect(()=>{
    getusers();
  },[])

  const getusers = () => {
    Axios.get('http://localhost:8081/api/v1/getUsers').then(response =>{
      setUsers(response?.data || []);
  })
    .catch(error => {
      console.error("Axios error : ", error);
    })
  } 

  const addUsers = (data) => {
    setSubmited(true);
    const payload = {
      id: data.id,
      name: data.name
    }
    Axios.post('http://localhost:8081/api/v1/addUsers',payload).then(()=> {
      getusers();
      setSubmited(false);
    })
    .catch(error =>{
      console.error("Axios error : ", error);
    });
  }

  

    

  return (
    <div>
        <UserForm addUsers={addUsers}/>
        <UserTable rows={users}/>
    </div>
  )
}
