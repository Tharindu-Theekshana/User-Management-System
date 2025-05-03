import React from 'react'
import './UserTable.css'

export default function UserTable({rows,selectedUser}) {
  return (
    <div>
      <table>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Action</td>
        </tr>
        {rows.map(row=>(
             <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td><button className='updateButton' onClick={()=>{selectedUser({id: row.id, name: row.name})}}>Update</button><button className='deleteButton'>Delete</button></td>
             </tr>
        ))}
      </table>
    </div>
  )
}
