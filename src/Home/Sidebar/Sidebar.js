import React, { PureComponent } from 'react';
import './Sidebar.css';


export class Sidebar extends PureComponent {
    render() {
        return (
            <div>
                
              <nav
                id="sidebarMenu"
                className="collapse d-lg-block sidebar collapse bg-white"
                >
                <div className="position-sticky">
                  <div className="list-group list-group-flush mx-3 mt-4">
                    <a
                       href="#"
                       className="list-group-item list-group-item-action py-2 ripple"
                       aria-current="true"
                       >
                      <i className="fas fa-tachometer-alt fa-fw me-3"></i
                        ><span>Tableau de bord</span>
                    </a>
                    <div className="list-group-item list-group-item-action py-2 ripple">
                      <div className=" mb-4 mt-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between px-md-1">
                              <div className="align-self-center">
                              <i className="fas fa-book fa-2x  me-1"></i>
                              </div>
                              <div className="text-end">
                                <h3>878</h3>
                                <p className="mb-0">Cours</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between px-md-1">
                              <div className="align-self-center">
                              <i className="fas fa-user-graduate fa-2x  me-1"></i>
                              </div>
                              <div className="text-end">
                                <h3>278</h3>
                                <p className="mb-0">Apprenants</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class=" mb-4">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                              <div class="align-self-center">
                                <i class="fas fa-briefcase fa-2x  me-1"></i>
                              </div>
                              <div class="text-end">
                                <h3>018</h3>
                                <p className="mb-0">Professeurs</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      
                    <div className="list-group-item py-2 ripple text-center text-black-50 p-3">
                      <div className="medias">
                        <span className="fb p-2 text-black-50">
                          <i className="fab fa-facebook-f"></i>
                        </span>
                        <span className="tw p-2 text-black-50">
                          <i className="fab fa-twitter"></i>
                        </span>
                        <span className="gl p-2 text-black-50">
                          <a href="https://gitlab.com/RootechSN/react-tach-21.git"><i className="fab fa-gitlab text-black-50"></i></a>
                        </span>
                      </div>
                      <span>Coding for life!  <br/> © 2021 - by Code'up</span>
                    </div>
                  </div>
                </div>
              </nav>

            </div>
        )
    }
}

export default Sidebar;
