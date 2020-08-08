import React from 'react';
import { withRouter } from 'react-router-dom';
// bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { FaHome, FaNewspaper, FaHeart, FaBell, FaUserAlt } from 'react-icons/fa';

function MaNavBottom(props){
    const { location } = props;
    if(location.pathname.match('/home')){
        return (
            <Navbar bg="white" fixed="bottom" className="px-3 border-top">
                <Nav activeKey="" className="w-100">
                    <Nav.Item className="d-flex justify-content-between w-100">
                        <NavIcon goto="/home" title="Home">
                            <FaHome size="1.5em"/>
                        </NavIcon>
                        <NavIcon goto="/notification" onClick={() => {this.handleClick()}} title="Notifikasi">
                            <FaBell size="1.5em"/>
                        </NavIcon>
                        <NavIcon goto="/home" title="Favorite">
                            <FaHeart size="1.5em"/>
                        </NavIcon>
                        <NavIcon goto="/home" title="Berita">
                            <FaNewspaper size="1.5em"/>
                        </NavIcon>
                        <NavIcon goto="/home" title="Profil">
                            <FaUserAlt size="1.5em"/>
                        </NavIcon>
                    </Nav.Item>
                </Nav>
            </Navbar> 
        )
    }else{
        return null;
    }
}

export default withRouter(MaNavBottom);