import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

const AjouterCours= () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, username, email, phone } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/cours", user);
    history.push("/listecours");
  };
  
  return (
    <div className="container">
      <div className="w-50 mx-auto mt-5 shadow p-5">
        <h2 className="text-center mb-4">Ajouter un Cours</h2>
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
         
          <button className="btn btn-secondary  btn-block">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default AjouterCours;