import React, { Component } from 'react'
// bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { FaHeart, FaShoppingCart, FaSistrix } from 'react-icons/fa'

function NavbarSearch(props){
    return(
        <Navbar bg="white" fixed="top" className="px-3 py-1">
            <Form inline className="mr-auto w-100">
                <FormControl type="text" placeholder="Cari produk" style={{borderRadius:'1.5em', backgroundColor:'#eee'}}/>
            </Form>
            <Button variant="link" className="my-0 ml-2" style={{fontSize: '1.5em', color:'#777'}}><FaHeart/></Button>
            <Button variant="link" className="my-0 mx-0" style={{fontSize: '1.5em', color:'#777'}}><FaShoppingCart/></Button>
        </Navbar>
    )
};

export default NavbarSearch;