import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FaStar, FaShoppingBag} from 'react-icons/fa';

function MaProductCard(props){
    const data = props.list;
    return(
            <Row className="mt-2 d-flex justify-content-between">
            {data.map((e) => {
                return (
                    <Col xs={4} className="mb-3 px-1">
                        <Card style={{border:'0px'}} className="shadow-sm p-1">
                            <Card.Img variant="top" src={e.image} />
                            <Card.Body className="p-2">
                                <Card.Text className="row">
                                    <p style={{fontSize:'.6em'}} className="mb-1">{e.title}</p>
                                    <p style={{fontSize:'.75em', fontWeight:'bold'}} className="mb-1">Rp. 2jt/kg</p>
                                    <div className="d-flex justify-content-between" style={{fontSize:'0.7em'}}>
                                        <p className="mb-0"><span className="text-warning"><FaStar/></span> {e.rating}</p>
                                        <p className="mb-0"><span className="text-danger"><FaShoppingBag/></span> {e.sold}</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>
                )
            })}
        </Row>
    )
}

export default MaProductCard;