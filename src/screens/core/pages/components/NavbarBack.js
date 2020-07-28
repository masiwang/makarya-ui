import React, {Component} from 'react'
// bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// icon
import { FaArrowLeft, FaSearch, FaShoppingCart  } from 'react-icons/fa'

function NavbarBack(props){
    return (
        <Navbar bg="white" fixed="top" className="d-flex align-item-center container shadow-sm">
            <h5 href="" className="mr-3 mb-0">
                <FaArrowLeft/>
            </h5>
            <Navbar.Brand href="home" className="mr-auto">
                <p className="mb-0">{props.title}</p>
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="search">
                    <h5><FaSearch/></h5>
                </Nav.Link>
                <Nav.Link href="cart">
                    <h5><FaShoppingCart/></h5>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarBack;