import React, { PureComponent } from 'react';
import './Navbar.css';
import Logo  from '../../assets/images/logo.png';
import {Link} from "react-router-dom";
import AjouterCours from '../../Components/Administrateurs/Cours/AjouterCours';
import Home from '../../Components/Admin/Professeurs/pages/Home';

export class Navbar extends PureComponent {
    render() {
        return (
            <div>
                <header>
                  <nav
                       id="main-navbar"
                       class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
                       >
                       
                    <div class="container-fluid">

                      <button
                              class="navbar-toggler"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#sidebarMenu"
                              aria-controls="sidebarMenu"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                              >
                        <i class="fas fa-bars"></i>
                      </button>


                      <a class="navbar-brand col-1" href="#">
                        <img
                             src={ Logo }
                             style={{height:"45px"}}
                             alt=""
                             loading="lazy"
                             />
                      </a>
                      <span className="text-uppercase mr-4">Admin</span>
                      <form class="d-none d-md-flex input-group w-auto my-auto">
                        <input
                               autocomplete="off"
                               type="search"
                               class="form-control rounded"
                               placeholder='Rechercher'
                               style={{minWidth: "425px"}}
                               />
                        <span class="input-group-text border-0"
                              ><i class="fas fa-search"></i
                          ></span>
                      </form>


                      <ul class="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item mr-2">
                        <Link
                           to="ajout-cours"
                           className="list-group-item list-group-item-action py-2 ripple"
                           >
                          <i class="fas fa-book fa-fw me-3"></i
                            ><span>Cours</span>
                        </Link>
                        </li>

                        <li className="nav-item mr-2">
                        <Link
                           to="/home"
                           className="list-group-item list-group-item-action py-2 ripple"
                           >
                          <i class="fas fa-user-graduate fa-fw me-3"></i
                            ><span>Apprenants</span>
                        </Link>
                        </li>

                        <li className="nav-item mr-2">
                        <a
                           href="#"
                           className="list-group-item list-group-item-action py-2 ripple"
                           >
                          <i class="fas fa-briefcase fa-fw me-3"></i
                            ><span>Professeurs</span>
                        </a>
                        </li>

                        <li class="nav-item dropdown">
                          <a
                             class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                             href="#"
                             id="navbarDropdown"
                             role="button"
                             data-mdb-toggle="dropdown"
                             aria-expanded="false"
                             >
                            <i class="far fa-calendar-alt"></i>
                          </a>
                          <ul
                              class="dropdown-menu dropdown-menu-end"
                              aria-labelledby="navbarDropdown"
                              >
                            <li>
                              <a class="dropdown-item" href="#"
                                >Calendrier</a
                                >
                            </li>
                          </ul>
                        </li>


                        <li class="nav-item dropdown">
                          <a
                             class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                             href="#"
                             id="navbarDropdownMenuLink"
                             role="button"
                             data-mdb-toggle="dropdown"
                             aria-expanded="false"
                             >
                            <img
                                 src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                                 class="rounded-circle"
                                 style={{height:"22px"}}
                                 alt=""
                                 loading="lazy"
                                 />
                          </a>
                          <ul
                              class="dropdown-menu dropdown-menu-end"
                              aria-labelledby="navbarDropdownMenuLink"
                              >
                            <li><a class="dropdown-item" href="#">Mon profil</a></li>
                            <li><a class="dropdown-item" href="#">Parametre</a></li>
                            <li><a class="dropdown-item" href="#">Déconnection</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                  </nav>
                  
                </header>
            </div>
        )
    }
}

export default Navbar;
