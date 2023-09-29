import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';
import '../../assets/styles/header.css'

const Navigations = [
    {
        id: 'h1',
        name: 'Home',
        link: "/"
    },
    {
        id: 'h2',
        name: 'Blogs',
        link: "/bloglist"
    },
    {
        id: 'h3',
        name: 'Dropdown',
        dropDowns: [
            {
                id: "d1",
                name: "drop1",
                link: "/"
            },
            {
                id: "d2",
                name: "drop2",
                link: "/"
            }
        ]
    }
];


export default function Header() {

  return (
    <div className='customHeader'>
        <nav>
            {Navigations.map(nav => {
                if('dropDowns' in nav)
                {
                    return(
                        <div className='dropMenu'>
                            <a href={nav.link} className='dropNavItem'>{nav.name}</a>
                            <div className='dropContainer'>
                                {nav.dropDowns.map(dropItem => {    
                                    return(
                                        <a href={dropItem.link}>{dropItem.name}</a>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }

                else{
                    return(
                        <a href={nav.link} className='navItem'>{nav.name}</a>
                    )
                }
                
            })}
           
            {/* <a href='/'>About Us</a>
            <a href='/'>Drop Down</a> */}
        </nav>
    </div>
  )
}

//   export default function Header(){
//       return(
//            <>
//        <Navbar className="bg-body-tertiary mb-3">
//        <Container fluid>
      
//        <Navbar.Brand href="/">Logo</Navbar.Brand>
      
//        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
//        <Navbar.Offcanvas
//            id={`offcanvasNavbar-expand-xl`}
//            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
//            placement="end"
//        >
//            <Offcanvas.Header closeButton>
//            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
//               <Nav.Link href='/'>Logo</Nav.Link>
//            </Offcanvas.Title>
//            </Offcanvas.Header>
//            <Offcanvas.Body>
//            <Nav className="justify-content-center flex-grow-1 pe-3">
//               {Navigations.map(nav => {
//                   if('dropDowns' in nav){
//                       return(
//                           <NavDropdown
//                           title="Dropdown"
//                           id={`offcanvasNavbarDropdown-expand-xl`}
//                           >
//                           {nav.dropDowns.map(dropMenu => {
//                               return(
//                                   <NavDropdown.Item href="#action3">{dropMenu.name}</NavDropdown.Item>
//                               )
//                           })}
                          
//                           <NavDropdown.Divider />
//                           <NavDropdown.Item href="#action5">
//                               Something else here
//                           </NavDropdown.Item>
//                           </NavDropdown>
//                       )
//                   }
//                   else{
//                       return(
//                           <Nav.Link href={nav.link}>{nav.name}</Nav.Link>
//                       )
//                   }
//               })}
              
//            </Nav>
   
//            {/* <Form className="d-flex">
//                <Form.Control
//                type="search"
//                placeholder="Search"
//                className="me-2"
//                aria-label="Search"
//                />
//                <Button variant="outline-success">Search</Button>
//            </Form> */}
   
//            </Offcanvas.Body>
//        </Navbar.Offcanvas>
//        </Container>
//        </Navbar>
   
//        </> 
//       )
//    }