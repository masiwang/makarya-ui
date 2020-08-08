import React, { Component } from 'react'
//boostrap
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

import MaNavbar from '../_navbar';
//icon
import { FaHeart, FaShoppingCart, FaArrowLeft, FaRegClock, FaEllipsisV } from 'react-icons/fa'

function NotifMenu(props){
    return(
        <Row>
            <Col style={{width:'500em', overflowX:'auto'}} className="no-scrollbar">
                <ListGroup horizontal className="py-1">
                    {props.data.map((e)=>{
                        return (
                            <ListGroup.Item key={e.id} className="p-0 mr-1" style={{border:'0em'}}>
                                <a className="my-0 text-nowrap btn btn-outline-primary btn-sm" style={{borderRadius:'1em', width:'auto'}}>{e.title}</a>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>            
            </Col>
        </Row>
    )
}

function NotifList(props){
    return(
        <Row className="mt-3 px-0">
            <ListGroup style={{borderRadius:'0'}} className="px-0">
                {props.data.map((e) => {
                    const isRead = (e.isRead) ? '#fff' : '#e3f2fd';
                    return (
                        <ListGroup.Item style={{borderTop:'1px solid #eee', borderBottom:'1px solid #eee', borderLeft:'0px', borderRight:'0px', backgroundColor:isRead}}>
                            <Row>
                                <Col xs={2} className="text-danger">
                                    <FaHeart size="2em"/>
                                </Col>
                                <Col xs={8} className="px-0">
                                    <div>
                                        <h6>{e.title}</h6>
                                        <p style={{fontSize:'.8em', color:'#777'}} className="mb-1">{e.body}</p>
                                        <small style={{fontSize:'.7em', color:'#bbb'}}><FaRegClock/> {e.time}</small>
                                    </div>
                                </Col>
                                <Col xs={2} className="text-right text-muted">
                                    <FaEllipsisV/>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )
                })}      
            </ListGroup>
        </Row>
    )  
}

class Notification extends Component{
    render(){
        const notifMenuItems = [
            {id: 1, title: 'Semua Notifikasi', goto:'all_notif'},
            {id: 2, title: 'Promo Market', goto:'market_notif'},
            {id: 3, title: 'Promo Investasi', goto:'invest_notif'},
            {id: 4, title: 'Keamanan', goto:'security_notif'},
        ];
        const notifListItems = [
            {id: 1, title: 'Pesan', body:'Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.', time:'17-06-2020 20:22', isRead: false},
            {id: 2, title: 'Pesan', body:'Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.', time:'17-06-2020 20:22', isRead: true},
            {id: 3, title: 'Pesan', body:'Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.', time:'17-06-2020 20:22', isRead: true},
            {id: 4, title: 'Pesan', body:'Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.', time:'17-06-2020 20:22', isRead: true},
            {id: 5, title: 'Pesan', body:'Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.', time:'17-06-2020 20:22', isRead: true},
            {id: 6, title: 'Pesan', body:'Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.', time:'17-06-2020 20:22', isRead: true},
            {id: 7, title: 'Pesan', body:'Pesanan 201902901973891 telah diproses. Konfirmasi pesanan diterima dapat dilakukan apabila tombol "Pesanan Diterima" telah tersedia.', time:'17-06-2020 20:22', isRead: true},
        ];
        return(
            <Container fluid>
                <MaNavbar type="title" title="Notifikasi" menu="notifikasi"/>
                <div style={{marginTop:'4.5em'}}></div>
                <NotifMenu data={notifMenuItems}/>
                <NotifList data={notifListItems}    />
            </Container>
        )
    }
}

export default Notification;