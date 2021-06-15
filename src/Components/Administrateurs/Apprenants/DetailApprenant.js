import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BiArrowBack } from 'react-icons/bi'

const User = () => {
  const [user, setUser] = useState({
    name: "",
    prenom: "",
    email: "",
    phone: "",
    password: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, );
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/listeapprenant">
        <BiArrowBack />
      </Link>
      <h1 className="display-4">Details Des Apprenants: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Prenom: {user.prenom}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">Téléphone: {user.phone}</li>
        <li className="list-group-item">Mot De Passe: {user.password}</li>
      </ul>
    </div>
  );
};

export default User;
