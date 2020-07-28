import React, {Component, useState} from 'react'
// bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { FaHome, FaNewspaper, FaHeart, FaBell, FaUserAlt } from 'react-icons/fa';
import Home from './pages/Home';

function NavIcon(props){
    return (
        <Nav.Link href={props.ref} className="p-0">
            <Button variant="link" size="sm" className="my-0 text-center text-decoration-none" style={{color:'#445'}}>
                {props.children}<br/>
                <p className="mb-0" style={{fontSize:'.8em'}}>{props.title}</p>
            </Button>
        </Nav.Link>
    )
}

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            mainText: 'Home'
        }
    }
    render(){
        const doLogout = () => {
            localStorage.clear();
            window.location.href = '/';
        }
        return(
            <div className="container-fluid px-0">
                {(this.state.mainText == "Home") && <Home/>}
                <Navbar bg="white" fixed="bottom" className="px-3 border-top">
                    <Nav activeKey="" className="w-100">
                        <Nav.Item className="d-flex justify-content-between w-100">
                            <NavIcon ref="/home" title="Home">
                                <FaHome size="1.5em"/>
                            </NavIcon>
                            <NavIcon ref="/home" title="Notifikasi">
                                <FaBell size="1.5em"/>
                            </NavIcon>
                            <NavIcon ref="/home" title="Favorite">
                                <FaHeart size="1.5em"/>
                            </NavIcon>
                            <NavIcon ref="/home" title="Berita">
                                <FaNewspaper size="1.5em"/>
                            </NavIcon>
                            <NavIcon ref="/home" title="Profil">
                                <FaUserAlt size="1.5em"/>
                            </NavIcon>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Main;