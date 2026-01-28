import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Capi() {
  const [text, setText] = useState({
    name: "",
    email: ""
  });

  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3001/users");
    setUsers(res.data);
  };

  function handleChange(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (edit !== null) {
      await axios.put(
        `http://localhost:3001/users/${edit}`,
        { ...text, id: edit }
      );
      setEdit(null);
    } else {
      await axios.post("http://localhost:3001/users", text);
    }

    setText({ name: "", email: "" });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setText({ name: user.name, email: user.email });
    setEdit(user.id);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "az") {
      return a.name.localeCompare(b.name);
    }
    if (sortOrder === "za") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <div>
      <h1>Users API</h1>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by Name</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
      </select>

      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={text.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={text.email}
          onChange={handleChange}
        />
        <button type="submit">
          {edit ? "Update" : "Add"}
        </button>
      </form>

      <hr />

      {sortedUsers.map((user) => (
        <div key={user.id}>
          <p><b>ID:</b> {user.id}</p>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
