import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  },);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/listeprof">
        Retour
      </Link>
      <h1 className="display-4">Information</h1>
      <hr />
      <ul className="list-group w-75 mx-auto mt-5">
        <li className="list-group-item">Nom: {user.name}</li>
        <li className="list-group-item">Prénom: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Téléphone: {user.phone}</li>
      </ul>
    </div>
  );
};

export default User;