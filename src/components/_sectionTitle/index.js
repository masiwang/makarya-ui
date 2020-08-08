import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'react-router-dom/Link'

function MaSectionTitle(props){
    return (
        <Row className="mt-4">
            <Col className="d-flex justify-content-between">
                <div>
                    <span className={'text-'+props.color+' mr-1'}>
                        {props.icon}
                    </span>
                    <span style={{fontSize:'1.2em', fontWeight:'500'}}>
                        {props.title}
                    </span>
                </div>
                {(props.more) && <div>
                    <Link className="text-decoration-none text-muted" style={{fontSize:'0.8em'}} to={props.more}>Lebih banyak</Link>
                </div>}
            </Col>
        </Row>
    )
}

export default MaSectionTitle;