import { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'

export default function User() {
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("users");
    if (saved) {
      setUsers(JSON.parse(saved));
    }
  }, []);

  // Save whenever users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUsers = (user) => {
    setUsers(prev => [...prev, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(prev =>
      prev.map(u => (u.id === updatedUser.id ? updatedUser : u))
    );
    setIsEdit(false);
    setEditData(null);
  };

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  const editUser = (user) => {
    setIsEdit(true);
    setEditData(user);
  };

  // Filter users according to search
  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <UserForm 
        addUsers={addUsers}
        updateUser={updateUser}
        isEdit={isEdit}
        data={editData}
      />

      {/* Search Bar */}
      <input 
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: "20px", padding: "10px", width: "200px" }}
      />

      <UserTable 
        users={filteredUsers}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </>
  );
}
