import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    prenom: "",
    email: "",
    phone: ""
  });

  const { name, prenom, email, phone, password } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/listeapprenant");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
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
              placeholder="Entrer Le Nom"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Le  Prenom"
              name="prenom"
              value={prenom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Entrer e-mail "
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              pattern ="[0-9]+"
              className="form-control form-control-lg"
              placeholder="Entrer Le Numero de telephone"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Mot de Passe de l'apprenant"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Valider</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

