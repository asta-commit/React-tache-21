import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { MdRemoveRedEye } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'



const ListeProf = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  
  return (
    <div className="container">
      <div className="py-4 w-75 mx-auto">
        <div className="row mb-2 mt-5 "> 
          <div className="col-10">
            <h3 className="text-left">LISTE DES PROFESSEURS</h3>
          </div>
          <div className="col-2">
          <Link className=" bg-secondary 
                w-full hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-dark 
                  focus:shadow-outline btn btn-outline-dark text-right"  to="/users/add">
            Ajouter
        </Link>
          </div>
        </div>
        <table  class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">N˚</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>

                   <MdRemoveRedEye />

                  </Link>
                  <Link
                    class="btn btn-outline-warning mr-2"
                    to={`/users/edit/${user.id}`}>
                    
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

export default ListeProf;