import React from "react";

import Template from './Template.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navs(){
    
    return (
   
        < div className="my_navbar">
      
      <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
        <a href="#"className="logo"><img src={require('../images/side_logo.png')}  alt="logo" id="side_logo"/>
        <span><img src={require('../images/Vector.png')}  alt="vector" /></span></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
         <Nav className="me-auto">
         <ul>
        <li>  <Nav.Link href="/">Home</Nav.Link></li>
        <li>   <Nav.Link href="/Place">place to stay</Nav.Link></li>
        <li>   <Nav.Link href="/community">Community</Nav.Link></li>
        <li>   <Nav.Link href="/NFTs">NFTs</Nav.Link></li>
        </ul>
        <Nav className="btn_modal">
        <Nav.Link href="#deets"><Template /></Nav.Link>  
        </Nav>
              </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
           </div>
        )
}




export default Navs