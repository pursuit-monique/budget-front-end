import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import {useState, useEffect } from 'react';

export default function NavBar({total})  {


    let color = '';

    if (total > 1000){
    color = "text-success";
    }
    else if (total < 0 ) {
        color = "text-danger";
    } else {
        color = "text-dark"}

    

 
    
    return (<Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="../">Budget App</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="../">Home</Nav.Link>
        <Nav.Link href="../New">New Item</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
           <Navbar.Text>Total Funds: <span className={color}>{total}</span> </Navbar.Text>
        </Navbar.Collapse>
      </Nav>
    </Container>
  </Navbar>)
}