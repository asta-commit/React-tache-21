// import React, { useState, useHistory } from "react";
// import axios from "axios";
// import ListeProf from '../pages/ListeProf'





// const ArchiverProf= () => {
//   let history = useHistory();
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",  
//     phone: ""
//   });

//   // const { name, username, email, phone } = user;
//   // const onInputChange = e => {
//   //   setUser({ ...user, [e.target.name]: e.target.value });
//   // };

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.post("http://localhost:3003/users", user);
//     history.push("/archiverprof");
//   };



  
//   return (
//     <ListeProf />
//   )
// };

// export default ArchiverProf;