import './UserForm.css';
import { useState, useEffect } from 'react';

export default function UserForm({ addUsers, updateUser, isEdit, data }) {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isEdit && data) {
      setId(data.id);
      setName(data.name);
      setEmail(data.email);
    }
  }, [isEdit, data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { id, name, email };

    if (isEdit) updateUser(payload);
    else addUsers(payload);

    setId("");
    setName("");
    setEmail("");
  };

  return (
    <main className="formcontainer">
      <form className="form" onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />

        <label>ID</label>
        <input 
          value={id} 
          onChange={(e) => setId(e.target.value)}
        />

        <label>Email</label>
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="submit" 
          className="submit" 
          value={isEdit ? "Update" : "Add"}
        />
      </form>
    </main>
  );
}
