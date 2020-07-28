import React, { Component } from 'react'
//boostrap
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
//icon
import { FaHeart, FaShoppingCart, FaArrowLeft, FaRegClock, FaEllipsisV } from 'react-icons/fa'

function Navigation(){
    return (
        <Navbar bg="white" fixed="top" className="px-3 py-2 border-bottom">
            <FaArrowLeft size="1.3em"/>
            <h4 className="ml-2 mr-auto mb-0 w-100">Notifikasi</h4>
            <Button variant="link" className="my-0 ml-2 text-nowrap" style={{color:'#777'}}><FaHeart size='1.5em'/><sup><span class="badge bg-danger">15</span></sup></Button>
            <Button variant="link" className="my-0 mx-0 text-nowrap" style={{color:'#777'}}><FaShoppingCart size='1.5em'/><sup><span class="badge bg-danger">8</span></sup></Button>
        </Navbar>
    )
}

class Notification extends Component{
    render(){
        return(
            <>
                <Navigation/>
                <div style={{marginTop:'4.5em'}}></div>
                <Container fluid>
                    <Row>
                        <Col style={{width:'500em', overflowX:'auto'}} className="no-scrollbar">
                            <ListGroup horizontal className="py-1">
                                <ListGroup.Item className="p-0 mr-1" style={{border:'0em'}}>
                                    <Button variant="outline-primary" size="sm" className="my-0 text-nowrap" style={{borderRadius:'1em', width:'auto'}}>Semua Notifikasi</Button>
                                </ListGroup.Item>
                                <ListGroup.Item className="p-0 mr-1" style={{border:'0em'}}>
                                    <Button variant="outline-primary" size="sm" className="my-0 text-nowrap" style={{borderRadius:'1em'}}>Promo Market</Button>
                                </ListGroup.Item>
                                <ListGroup.Item className="p-0 mr-1" style={{border:'0em'}}>
                                    <Button variant="outline-primary" size="sm" className="my-0 text-nowrap" style={{borderRadius:'1em'}}>Promo Investasi</Button>
                                </ListGroup.Item>
                                <ListGroup.Item className="p-0 mr-1" style={{border:'0em'}}>
                                    <Button variant="outline-primary" size="sm" className="my-0 text-nowrap" style={{borderRadius:'1em'}}>Keamanan</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row className="mt-3 px-0">
                        <ListGroup style={{borderRadius:'0'}} className="px-0">
                            <ListGroup.Item style={{borderTop:'1px solid #eee', borderBottom:'1px solid #eee', borderLeft:'0px', borderRight:'0px', backgroundColor:'#e3f2fd'}}>
                                <Row>
                                    <Col xs={2} className="text-danger">
                                        <FaHeart size="2em"/>
                                    </Col>
                                    <Col xs={8} className="px-0">
                                        <div>
                                            <h6>Pesan</h6>
                                            <p style={{fontSize:'.8em', color:'#777'}} className="mb-1">Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.</p>
                                            <small style={{fontSize:'.7em', color:'#bbb'}}><FaRegClock/> 17-06-2020 20:22</small>
                                        </div>
                                    </Col>
                                    <Col xs={2} className="text-right text-muted">
                                    <FaEllipsisV/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item style={{borderTop:'1px solid #eee', borderBottom:'1px solid #eee', borderLeft:'0px', borderRight:'0px'}}>
                                <Row>
                                <Col xs={2} className="text-danger">
                                        <FaHeart size="2em"/>
                                    </Col>
                                    <Col xs={8} className="px-0">
                                        <div>
                                            <h6>Pesan</h6>
                                            <p style={{fontSize:'.8em', color:'#777'}} className="mb-1">Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.</p>
                                            <small style={{fontSize:'.7em', color:'#bbb'}}><FaRegClock/> 17-06-2020 20:22</small>
                                        </div>
                                    </Col>
                                    <Col xs={2} className="text-right text-muted">
                                    <FaEllipsisV/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item style={{borderTop:'1px solid #eee', borderBottom:'1px solid #eee', borderLeft:'0px', borderRight:'0px'}}>
                                <Row>
                                <Col xs={2} className="text-danger">
                                        <FaHeart size="2em"/>
                                    </Col>
                                    <Col xs={8} className="px-0">
                                        <div>
                                            <h6>Pesan</h6>
                                            <p style={{fontSize:'.8em', color:'#777'}} className="mb-1">Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.</p>
                                            <small style={{fontSize:'.7em', color:'#bbb'}}><FaRegClock/> 17-06-2020 20:22</small>
                                        </div>
                                    </Col>
                                    <Col xs={2} className="text-right text-muted">
                                    <FaEllipsisV/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item style={{borderTop:'1px solid #eee', borderBottom:'1px solid #eee', borderLeft:'0px', borderRight:'0px'}}>
                                <Row>
                                <Col xs={2} className="text-danger">
                                        <FaHeart size="2em"/>
                                    </Col>
                                    <Col xs={8} className="px-0">
                                        <div>
                                            <h6>Pesan</h6>
                                            <p style={{fontSize:'.8em', color:'#777'}} className="mb-1">Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.</p>
                                            <small style={{fontSize:'.7em', color:'#bbb'}}><FaRegClock/> 17-06-2020 20:22</small>
                                        </div>
                                    </Col>
                                    <Col xs={2} className="text-right text-muted">
                                    <FaEllipsisV/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item style={{borderTop:'1px solid #eee', borderBottom:'1px solid #eee', borderLeft:'0px', borderRight:'0px'}}>
                                <Row>
                                <Col xs={2} className="text-danger">
                                        <FaHeart size="2em"/>
                                    </Col>
                                    <Col xs={8} className="px-0">
                                        <div>
                                            <h6>Pesan</h6>
                                            <p style={{fontSize:'.8em', color:'#777'}} className="mb-1">Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.</p>
                                            <small style={{fontSize:'.7em', color:'#bbb'}}><FaRegClock/> 17-06-2020 20:22</small>
                                        </div>
                                    </Col>
                                    <Col xs={2} className="text-right text-muted">
                                    <FaEllipsisV/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item style={{borderTop:'1px solid #eee', borderBottom:'1px solid #eee', borderLeft:'0px', borderRight:'0px'}}>
                                <Row>
                                <Col xs={2} className="text-danger">
                                        <FaHeart size="2em"/>
                                    </Col>
                                    <Col xs={8} className="px-0">
                                        <div>
                                            <h6>Pesan</h6>
                                            <p style={{fontSize:'.8em', color:'#777'}} className="mb-1">Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.</p>
                                            <small style={{fontSize:'.7em', color:'#bbb'}}><FaRegClock/> 17-06-2020 20:22</small>
                                        </div>
                                    </Col>
                                    <Col xs={2} className="text-right text-muted">
                                    <FaEllipsisV/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Notification;