import React, { Component } from "react"
//bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//icon
import { FaStar } from 'react-icons/fa'

function PopularItem(props){
    return (
        <Col xs={4} className="mb-3">
            <Card style={{border:'0px'}}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body className="p-2">
                    <Card.Text className="row">
                        <p style={{fontSize:'.7em'}} className="mb-1">{props.name}</p>
                        <h6>Rp. 2jt/kg</h6>
                        <div className="d-flex justify-content-between" style={{fontSize:'0.7em'}}>
                            <p><span className="text-warning"><FaStar/></span> {props.rating}</p>
                            <span>{props.sold} Terjual</span>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PopularItem;