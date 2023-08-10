import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
         <>
     <Navbar className="bg-body-tertiary mb-3">
     <Container fluid>
    
    <Link to="/">
     <Navbar.Brand href="#">Logo</Navbar.Brand>
    </Link>
    
     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
     <Navbar.Offcanvas
         id={`offcanvasNavbar-expand-xl`}
         aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
         placement="end"
     >
         <Offcanvas.Header closeButton>
         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
             Logo
         </Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
         <Nav className="justify-content-center flex-grow-1 pe-3">
             <Nav.Link href="#action1">Home</Nav.Link>
             <Nav.Link href="#action2">Link</Nav.Link>
             <NavDropdown
             title="Dropdown"
             id={`offcanvasNavbarDropdown-expand-xl`}
             >
             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
             <NavDropdown.Item href="#action4">
                 Another action
             </NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action5">
                 Something else here
             </NavDropdown.Item>
             </NavDropdown>
         </Nav>
 
         {/* <Form className="d-flex">
             <Form.Control
             type="search"
             placeholder="Search"
             className="me-2"
             aria-label="Search"
             />
             <Button variant="outline-success">Search</Button>
         </Form> */}
 
         </Offcanvas.Body>
     </Navbar.Offcanvas>
     </Container>
     </Navbar>
 
     </> 
    )
 }
