import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { MdRemoveRedEye } from 'react-icons/md';




const CourseList = () => {
  const [cours, setUser] = useState([]);

  useEffect(() => {
    loadCours();
  }, []);

  const loadCours = async () => {
    const result = await axios.get("http://localhost:3003/cours");
    setUser(result.data.reverse());
  };

  

  
  return (
    <div className="container">
      <div className="py-4 w-75 mx-auto">
        <div className="row mb-2 mt-5 "> 
          <div className="col-10">
            <h3 className="text-left">LISTE DES COURS</h3>
          </div>
         
        </div>
        <table  class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">N˚</th>
              <th scope="col">Matiére</th>
              <th scope="col">Description</th>
              <th scope="col">Nombre d'heures</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cours.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.username}</td>
                <td className="text-center">{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/cours/${user.id}`}>

                   <MdRemoveRedEye />

                  </Link>
                
                 
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button className="btn btn-secondary btn-block" to="/archiverprof">Archives</button> */}
      </div>
      
    </div>
  );
};

export default CourseList;