import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';



class Nav extends Component{
    render(){
        return(
            <div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/cadastro">Cadastrar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>
</Navbar>

<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
</div>
        )
}
}
export default Nav;