import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

function Menu(props){
    return(
        <Row className="mt-2">
            {props.list.map((e) => {
                return (
                    <Col key={e.id} className="text-center">
                        <Link to={e.goto} className="text-decoration-none text-dark">
                            <img src={e.logo} style={{width:'2.5em'}}/><br/>
                            <div className="mt-1" style={{fontSize:'.7em'}}>{e.title}</div>
                        </Link>
                    </Col>
                )
            })}
        </Row>
    )
}

export default Menu;