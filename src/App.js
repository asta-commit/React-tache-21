import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

                //Adama Diallo
import InscriptionAdmin from "./Components/Administrateurs/Authentification/InscriptionAdmin";
import ConnexionApprenant from "./Components/Apprenants/Authentification/ConnexionApprenant";


                //Hawa Bah
import ListeProf from "./Components/Administrateurs/Professeurs/pages/ListeProf";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AjouterProf from "./Components/Administrateurs/Professeurs/users/AjoutProf";
import EditUser from "./Components/Administrateurs/Professeurs/users/EditUser";
import User from "./Components/Administrateurs/Professeurs/users/User";
import ArchiverProf from "./Components/Administrateurs/Professeurs/users/ArchiverProf"


              //Omar sarr
import AjouterApprenant from "./Components/Administrateurs/Apprenants/AjouterApprenant";
import ModifierApprenant from "./Components/Administrateurs/Apprenants/ModifierApprenant";
import DetailApprenant from "./Components/Administrateurs/Apprenants/DetailApprenant";
import ListeApprenant from "./Components/Administrateurs/Apprenants/ListeApprenant"

                //Asta Diallo
import AjouterCours from "./Components/Administrateurs/Cours/cours/AjoutCours";
import ModifierCours from "./Components/Administrateurs/Cours/cours/ModifierCours";
import DetailCours from "./Components/Administrateurs/Cours/cours/DetailCours";
import ListeCours from "./Components/Administrateurs/Cours/ListeCours"
import CourseDetails from "./Components/Apprenants/CourseDetails"
import CourseList from "./Components/Apprenants/CourseList"






function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={ConnexionApprenant} exact />
          <Route path="/signup" component={InscriptionAdmin} exact />
          

          <Route path="/listeprof" component={ListeProf} exact />
          <Route exact path="/users/add" component={AjouterProf} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/archiverprof" component={ArchiverProf} />


          <Route exact path="/listeapprenant" component={ListeApprenant} />
          <Route exact path="/apprenant/ajout" component={AjouterApprenant} />
          <Route exact path="/apprenant/modification/:id" component={ModifierApprenant} />
          <Route exact path="/apprenant/detail/:id" component={DetailApprenant} />


          <Route path="/listecours" component={ListeCours} exact />
          <Route exact path="/cours/ajouter" component={AjouterCours} />
          <Route exact path="/cours/modifier/:id" component={ModifierCours} />
          <Route exact path="/cours/:id" component={DetailCours} />
          <Route exact path="/cours/:id" component={CourseDetails} />
          <Route exact path="/courselist" component={CourseList} />
          


       
       
       
        </Switch>
      </div>
    </Router>


  );
}

export default App
