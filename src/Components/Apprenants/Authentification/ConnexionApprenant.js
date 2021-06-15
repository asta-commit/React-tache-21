import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useContext } from "react";

import FirebaseContext from "./../../Firebase/context";


const Login = (props) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  const handleSubmit = e => {
    e.preventDefault();


    firebase.loginUser(email, password)

      .then((user) => {
        setEmail("");
        setPassword("");
        props.history.push("/listeprof");
      })
      .catch((error) => {
        setError(error);
        setEmail("");
        setPassword("");
      });
  };

  const errorMsg = error !== "" && <span>{error.message}</span>;

  return (
    <div className="container container-1 ">
      <form className="formulaire-connexion" onSubmit={handleSubmit}>
        {errorMsg}
        <legend className="text-center legend-connexion">Se Connectez</legend>

        {/* Formulaire */}
        <div className="form-group  mb-0 mt-2">
          <div className="email">
            <label htmlFor="email" className="h5">
              Entrez votre mail
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handleChange}
            />
            {/* <p className="errorMsg">{emailError}</p> */}
          </div>
        </div>

        <div className="form-group  mt-0 mb-0">
          <div className="password">
            <label htmlFor="password" className="h5">
              Entrez votre mot de passe
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <p className="errorMsg">{passwordError}</p> */}
            {/* <span className="errorMsg">{passwordError}</span> */}
          </div>
        </div>

        {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}
      </form>
    </div>
  );
};

export default Login;
