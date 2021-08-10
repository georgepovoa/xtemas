import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';



class Nav extends Component {
  render() {
    return (
      <div>


<div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a href="https://xstemas.herokuapp.com">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Consulta
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="https://xstemas.herokuapp.com/cadastro">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            Cadastro
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            -
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            -
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-bar-chart-o fa-2x"></i>
                        <span class="nav-text">
                            -
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x"></i>
                        <span class="nav-text">
                           -
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i class="fa fa-table fa-2x"></i>
                        <span class="nav-text">
                            -
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            -
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            -
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            -
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
        </div>
              )
}
}
              export default Nav;