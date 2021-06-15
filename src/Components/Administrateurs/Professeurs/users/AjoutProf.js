import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

const AjouterProf= () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: ""
  });

  const { name, username, email, phone } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/listeprof");
  };
  
  return (
    <div className="container">
      <div className="w-50 mx-auto mt-5 shadow p-5">
        <h2 className="text-center mb-4">Ajouter un Professeur</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nom"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Prénom"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Addresse E-mail"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              pattern="[0-9]+"
              className="form-control form-control-lg"
              placeholder="Numéro de Téléphone"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-secondary  btn-block">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default AjouterProf;