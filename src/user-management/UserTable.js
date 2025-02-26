import React from 'react'
import './UserTable.css'

export default function UserTable(props) {
  return (
    <div>
      <table>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Action</td>
        </tr>
        {props.rows.map(row=>(
             <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td><button className='updateButton'>Update</button><button className='deleteButton'>Delete</button></td>
             </tr>
        ))}
      </table>
    </div>
  )
}
