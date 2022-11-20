import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Template() {
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     return (
       <div className="wrap">
          <button id="btn" onClick={handleShow}>Connect Wallet</button>
         

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Choose your preferred Wallet : 

<div className="my_btns">
     <button className="metamask">
          <div className="p_tag">
      <img src={require('../images/image66.png')}  alt="vector" id="image66"/>
       <p >Metamask</p>
       </div>
       <img src={require('../images/Vector1.png')}  alt="vector" id="Vector1"/>
      </button>

      <button className="metamask">
          <div className="p_tag">
      <img src={require('../images/image69.png')}  alt="vector" id="image69"/>
       <p >Wallet Collect</p>
       </div>
       <img src={require('../images/Vector1.png')}  alt="vector" id="Vector1"/>
       
      </button>
      </div>
        </Modal.Body>
        
      </Modal>
       </div>
     )}
   
   







export default Template