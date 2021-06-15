import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'
//import FirebaseContext from './../../Firebase';



const AddUser= () => {


  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    prenom: "",
    email: "",  
    phone: "",
    password: "",
    confirmPassword: ""
  });


  //const [loginData, setLoginData] = useState(data);
  const [error] = useState('')


  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    
  }

const handleSubmit = e => {
  e.preventDefault();
  
    // cas ou l'inscription est reussi
   
   axios.post("http://localhost:3003/users", user);
    history.push("/listeapprenant");
  }
  // Nous avons fait du destructirirng
  const { name, prenom, email,phone , password, confirmPassword } = user;

   const btn=  name === '' || prenom === '' || email === '' || phone === '' || password === '' || password !== confirmPassword
  ? <button disabled className="btn btn-primary btn-block">Ajouter L'Apprenant</button> : <button className="btn btn-primary btn-block">Ajouter L'Apprenant</button>
   
  // gestion errors
  const errorMsg = error !== '' && <span>{error.message}</span>

    return (
      <div className="container">
        <Link className="btn btn-primary" to="/l">
          <BiArrowBack />
        </Link>
          <div className="w-75 mx-auto shadow p-5">
            <form onSubmit={handleSubmit}>
              <h2>Ajouter Un Apprenant</h2>
              <div className="form-group">
                <label htmlFor="fullName" className="label-inscription">
                  Prénom
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={name}
                  className="form-control form-control-lg"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="label-inscription">
                  Nom
                </label>
                <input
                  type="text"
                  name="prenom"
                  onChange={handleChange}
                  value={prenom}
                  className="form-control form-control-lg"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="label-inscription">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  className="form-control form-control-lg"
                  required
                />
                {errorMsg}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="label-inscription">
                  Téléphone
                </label>
                <input
                  type="tel"
                  pattern ="[0-9]+"
                  name="phone"
                  onChange={handleChange}
                  value={phone}
                  className="form-control form-control-lg"
                  required
                 />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="label-inscription">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                  className="form-control form-control-lg"
                  required
                 />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="label-inscription">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={confirmPassword}
                  className="form-control form-control-lg"
                  required
                />
              </div>
               <div className="btn btn-primary btn-block">{btn}</div>
            </form>
            
          </div>
      </div>
    );
  }


export default AddUser;
        