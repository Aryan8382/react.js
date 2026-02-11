import React, { useEffect, useState } from "react";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function AddFixedUser() {
  const [users, setUsers] = useState([]);

  const sendData = async () => {
    try {
      await setDoc(doc(db, "users", "Aryan"), {
        user: "aryan",
        email: "shah@gmail.com",
      });
      alert("User Added");
      getData();  
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const list = [];

    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setUsers(list);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button onClick={sendData}>Send Data</button>

      <h2>Users</h2>

      {users.map((u) => (
        <p key={u.id}>
          Name: {u.user} | Email: {u.email}
        </p>
      ))}
    </div>
  );
}
