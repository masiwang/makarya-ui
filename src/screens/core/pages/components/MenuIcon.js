import React from 'react'
//bootstrap
import Col from 'react-bootstrap/Col'

function MenuIcon(props){
    return (
        <Col className="text-center">
            <img src={props.logo} style={{width:'2.5em'}}/><br/>
            <div className="mt-1" style={{fontSize:'.7em'}}>{props.title}</div>
        </Col>
    )
}

export default MenuIcon;