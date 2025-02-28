import React, { useState } from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'
import { Axios } from 'axios'

export default function User() {

  const [user,setUsers] = useState([]);

  const getUser = () => {
    Axios.get().then(res => {
      console.log(res);
    })
  }

    const users = [
        {id : 1,
         name : "Tharindu"   
        },
        {id : 2,
            name : "john"   
        }
    ]

  return (
    <div>
        <UserForm users={users}/>
        <UserTable rows={users}/>
    </div>
  )
}
