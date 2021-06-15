import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const CourseDetails = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  },);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/cours/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/listecoursA">
        Retour
      </Link>
      <h1 className="display-4">Informations</h1>
      <hr />
      <ul className="list-group w-75 mx-auto mt-5">
        <li className="list-group-item">Matiére: {user.name}</li>
        <li className="list-group-item">Description: {user.username}</li>
        <li className="list-group-item">Nombre d'heures: {user.email}</li>
      </ul>
    </div>
  );
};

export default  CourseDetails ;
  