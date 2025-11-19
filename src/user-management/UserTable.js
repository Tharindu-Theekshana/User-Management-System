import './UserTable.css';

export default function UserTable({ users, deleteUser, editUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>
              <button 
                className="editBtn"
                onClick={() => editUser(u)}
              >
                Edit
              </button>

              <button 
                className="deleteBtn"
                onClick={() => deleteUser(u.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
