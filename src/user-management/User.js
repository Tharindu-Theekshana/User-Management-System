import React, { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'
import  Axios  from 'axios'



export default function User() {

  const [users,setUsers] = useState([]);
  const [submited,setSubmited] = useState(false);
  const [isEdit,setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

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

  const updateUser = (data) => {
    setSubmited(true);
    const payload = {
      id: data.id,
      name: data.name
    }
    Axios.put('http://localhost:8081/api/v1/updateUser',payload).then(()=> {
      getusers();
      setSubmited(false);
      setIsEdit(false);
    })
    .catch(error =>{
      console.error("Axios error : ", error);
    });

  }

  

  

  

    

  return (
    <div>
        <UserForm addUsers={addUsers} submited={submited} isEdit={isEdit} updateUser={updateUser} data={selectedUser}/>
        <UserTable rows={users} selectedUser={data=>{setSelectedUser(data); setIsEdit(true);}}/>
    </div>
  )
}
