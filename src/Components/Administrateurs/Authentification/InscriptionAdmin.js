import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useContext } from "react";

import { FirebaseContext } from "../../Firebase";
import { Link } from "react-router-dom";

const Signup = (props) => {
  const firebase = useContext(FirebaseContext);

  const data = {
    fullName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = loginData;

    firebase.signupUser(email, password)
      // cas ou l'inscription est reussi
      .then((user) => {
        setLoginData({ ...data });
        props.history.push("/");
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...data });
      });
  };
  // Nous avons fait du destructirirng
  const { fullName, lastName, email, password, confirmPassword } = loginData;

  const btn =
    fullName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    password !== confirmPassword ? (
      <button disabled>S'inscrire</button>
    ) : (
      <button>S'inscrire</button>
    );

  // gestion errors
  const errorMsg = error !== "" && <span>{error.message}</span>;

  return (
    <div className="container-fluid container-connexion">
      <div className="col-4-wrapper">
        <div className="form-wrapper mb-0">
          {/* partie formulaire */}

          {errorMsg}

            <h2>Créer un compte</h2>
            <form onSubmit={handleSubmit}>
            <div className="fullName">
              <label htmlFor="fullName" className="label-inscription">
                Prénom
              </label>
              <input
                type="text"
                id="fullName"
                onChange={handleChange}
                value={fullName}
                className="input-inscription"
                required
              />
            </div>
            <div className="lastName">
              <label htmlFo r="lastName" className="label-inscription">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                onChange={handleChange}
                value={lastName}
                className="input-inscription"
                required
              />
            </div>

            <div className="email">
              <label htmlFor="email" className="label-inscription">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                value={email}
                className="input-inscription"
                required
              />
              
            </div>

            <div className="password">
              <label htmlFor="password" className="label-inscription">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                value={password}
                className="input-inscription"
                required
              />
            </div>
            <div className="password">
              <label htmlFor="confirmPassword" className="label-inscription">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                onChange={handleChange}
                value={confirmPassword}
                className="input-inscription"
                required
              />
            </div>
            <div className="submit-inscription">{btn}</div>
          </form>
          <div className="linkContainer">
            <Link className="link" to="/">
              Déja inscrit? Connectez-vous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
