import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import MaRating from '../_rating'; 

function MaProductList(props){
    let data = props.data;
    return (
        <Row>
            <Col style={{width:'50em', overflow:'auto'}}>
                <ListGroup horizontal>
                    {data.map((e) => {
                        return (
                            <ListGroup.Item key={e.id} style={{border:'0em'}}>
                                <div className="text-center">
                                    <img src={e.image} style={{width:'7em'}}/><br/>
                                    <p className="mb-0" style={{fontSize:'0.8em'}}>{e.title}</p>
                                    <h6 className="mb-1">{e.price}</h6>
                                    <MaRating count={e.rating}/>
                                </div>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Col>
        </Row>
    )
}

export default MaProductList;