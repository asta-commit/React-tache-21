import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FaEye } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa'
import { FaArchive } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'




const ListeApprenant = () => {
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

      <div className="py-4">
        <h1>Liste Des Apprenants</h1>
        <div className="container_fluid">
        <Link className="btn btn-outline-dark" to="/apprenant/ajout">Ajouter Un Apprenant</Link>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">N</th>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Email</th>
              <th scope="col">Téléphone</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.prenom}</td>
                <td>{user.email}</td>
                <td>

                  <Link class="btn btn-primary mr-2" to={`/apprenant/detail/${user.id}`}>
                  <FaEye />
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/apprenant/modification/${user.id}`}
                  >
                    <FaUserEdit />
                  </Link>
                  <Link
                    class="btn btn-danger mr-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    <MdDelete />
                  </Link>
                  <Link
                    class="btn btn-light"
                    onClick={() => (user.id)}
                  >
                    <FaArchive />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    </div>
  );
};

export default ListeApprenant;