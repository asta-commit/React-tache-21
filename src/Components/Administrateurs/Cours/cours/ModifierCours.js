import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

const ModifierCours = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, username, email } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/cours/${id}`, user);
    history.push("/listecours");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/cours/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto mt-5 shadow p-5">
        <h2 className="text-center mb-4">Modifier les informations</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Matiére"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Description"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nombre d'heures"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
        
          
          <button className="btn btn-warning btn-block">Modifier</button>
        </form>
      </div>
    </div>
  );
};

export default ModifierCours;

