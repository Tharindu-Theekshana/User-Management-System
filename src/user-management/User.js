import React from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'

export default function User() {

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
