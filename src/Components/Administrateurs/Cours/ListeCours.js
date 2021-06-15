import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { MdRemoveRedEye } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'



const ListeCours = () => {
  const [cours, setUser] = useState([]);

  useEffect(() => {
    loadCours();
  }, []);

  const loadCours = async () => {
    const result = await axios.get("http://localhost:3003/cours");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/cours/${id}`);
    loadCours();
  };

  
  return (
    <div className="container">
      <div className="py-4 w-75 mx-auto">
        <div className="row mb-2 mt-5 "> 
          <div className="col-10">
            <h3 className="text-left">LISTE DES COURS</h3>
          </div>
          <div className="col-2">
          <Link className=" bg-secondary 
                w-full hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-dark 
                  focus:shadow-outline btn btn-outline-dark text-right"  to="/cours/ajouter">
            Ajouter
        </Link>
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
                  <Link
                    class="btn btn-outline-warning mr-2"
                    to={`/cours/modifier/${user.id}`}>
                    
                    <FiEdit />

                  </Link>
                  <Link
                    class="btn btn-danger mr-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    <MdDelete />
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

export default ListeCours;