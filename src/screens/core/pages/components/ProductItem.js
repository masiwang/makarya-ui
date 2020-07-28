import React, { Component } from 'react'
//bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//icon
import { FaStar } from 'react-icons/fa'

function ProductItem(props){
    return (
        <Col xs={6} className="mb-4">
            <Card style={{border:'0px'}}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body className="p-2">
                    <Card.Text className="row">
                        <p style={{fontSize:'.8em'}} className="mb-1">{props.name}</p>
                        <h4>Rp. 2jt/kg</h4>
                        <div className="d-flex justify-content-between" style={{fontSize:'0.8em'}}>
                            <p><span className="text-warning"><FaStar/></span> {props.rating}</p>
                            <span>{props.sold} Terjual</span>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductItem;