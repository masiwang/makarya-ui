import React, { Component } from 'react'
import Menu from '../components/Menu'
import MenuIcon from './components/MenuIcon'
import NavbarSearch from './components/NavbarSearch'
import Container from 'react-bootstrap/Container'
//bootstrap
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
// dummy slider
import dummySlide1 from '../../assets/img/slider/slide1.png'
import dummySlide2 from '../../assets/img/slider/slide2.png'
// dummy product
import produk from '../../assets/img/daging/ayam.jpg'
// icon
import iFoods from '../../assets/icon/foods.png'
import iRice from '../../assets/icon/rice.png'
import iMeat from '../../assets/icon/meat.png'
import iVegetables from '../../assets/icon/vegetables.png'
import iFruit from '../../assets/icon/watermelon.png'
import iIvest from '../../assets/icon/invest.png'
import iPortofolio from '../../assets/icon/savings.png'
import iDate from '../../assets/icon/date.png'
import iWeek from '../../assets/icon/week.png'
import iYear from '../../assets/icon/year.png'
import { FaStore, FaChartLine, FaMedal, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

class Home extends Component{
    render(){
        return (
            <>
                <NavbarSearch/>
                <Container fluid>
                    <div style={{marginTop:'4.25em'}}/>
                    <Row className="mt-4">
                        <Carousel indicators={false} controls={false} fade={false} touch={true}>
                            <Carousel.Item>
                                <img className="d-block w-100" src={dummySlide1} alt="First slide" style={{borderRadius:'0.5em'}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={dummySlide2} alt="First slide" style={{borderRadius:'0.5em'}}/>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    <Row className="mt-4">
                        <p><span className="text-danger"><FaStore style={{paddingBottom:'.2em'}}/></span> <span style={{fontSize:'1.2em', fontWeight:'500'}}>Market</span></p>
                    </Row>
                    <Row className="mt-2">
                        <MenuIcon logo={iFoods} title="Semua"/>
                        <MenuIcon logo={iRice} title="Pokok"/>
                        <MenuIcon logo={iMeat} title="Daging"/>
                        <MenuIcon logo={iVegetables} title="Sayuran"/>
                        <MenuIcon logo={iFruit} title="Buah"/>
                    </Row>
                    <Row className="mt-4">
                    <p><span className="text-success"><FaChartLine style={{paddingBottom:'.2em'}}/></span> <span style={{fontSize:'1.2em', fontWeight:'500'}}>Investment</span></p>
                    </Row>
                    <Row className="mt-2">
                        <MenuIcon logo={iIvest} title="Semua"/>
                        <MenuIcon logo={iDate} title="Pendek"/>
                        <MenuIcon logo={iWeek} title="Menengah"/>
                        <MenuIcon logo={iYear} title="Panjang"/>
                        <MenuIcon logo={iPortofolio} title="Portofilio"/>
                    </Row>
                    <Row className="mt-4">
                    <p><span className="text-warning"><FaMedal style={{paddingBottom:'.2em'}}/></span> <span style={{fontSize:'1.2em', fontWeight:'500'}}>Rekomendasi</span></p>
                    </Row>
                    <Row className="mt-2">
                        <Col style={{width:'50em', overflow:'auto'}}>
                            <ListGroup horizontal>
                                <ListGroup.Item style={{border:'0em'}}>
                                    <div className="text-center">
                                        <img src={produk} style={{width:'7em'}}/><br/>
                                        <p className="mb-0" style={{fontSize:'0.8em'}}>Ayam Potong</p>
                                        <h6 className="mb-1">Rp. 2,1jt/kg</h6>
                                        <div className="text-warning">
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStarHalfAlt size='.65em'/>
                                            <FaRegStar size='.65em'/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{border:'0em'}}>
                                    <div className="text-center">
                                        <img src={produk} style={{width:'7em'}}/><br/>
                                        <p className="mb-0" style={{fontSize:'0.8em'}}>Ayam Potong</p>
                                        <h6 className="mb-1">Rp. 2,1jt/kg</h6>
                                        <div className="text-warning">
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStarHalfAlt size='.65em'/>
                                            <FaRegStar size='.65em'/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{border:'0em'}}>
                                    <div className="text-center">
                                        <img src={produk} style={{width:'7em'}}/><br/>
                                        <p className="mb-0" style={{fontSize:'0.8em'}}>Ayam Potong</p>
                                        <h6 className="mb-1">Rp. 2,1jt/kg</h6>
                                        <div className="text-warning">
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStarHalfAlt size='.65em'/>
                                            <FaRegStar size='.65em'/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{border:'0em'}}>
                                    <div className="text-center">
                                        <img src={produk} style={{width:'7em'}}/><br/>
                                        <p className="mb-0" style={{fontSize:'0.8em'}}>Ayam Potong</p>
                                        <h6 className="mb-1">Rp. 2,1jt/kg</h6>
                                        <div className="text-warning">
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStarHalfAlt size='.65em'/>
                                            <FaRegStar size='.65em'/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{border:'0em'}}>
                                    <div className="text-center">
                                        <img src={produk} style={{width:'7em'}}/><br/>
                                        <p className="mb-0" style={{fontSize:'0.8em'}}>Ayam Potong</p>
                                        <h6 className="mb-1">Rp. 2,1jt/kg</h6>
                                        <div className="text-warning">
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStarHalfAlt size='.65em'/>
                                            <FaRegStar size='.65em'/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{border:'0em'}}>
                                    <div className="text-center">
                                        <img src={produk} style={{width:'7em'}}/><br/>
                                        <p className="mb-0" style={{fontSize:'0.8em'}}>Ayam Potong</p>
                                        <h6 className="mb-1">Rp. 2,1jt/kg</h6>
                                        <div className="text-warning">
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStarHalfAlt size='.65em'/>
                                            <FaRegStar size='.65em'/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{border:'0em'}}>
                                    <div className="text-center">
                                        <img src={produk} style={{width:'7em'}}/><br/>
                                        <p className="mb-0" style={{fontSize:'0.8em'}}>Ayam Potong</p>
                                        <h6 className="mb-1">Rp. 2,1jt/kg</h6>
                                        <div className="text-warning">
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStar size='.65em'/>
                                            <FaStarHalfAlt size='.65em'/>
                                            <FaRegStar size='.65em'/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <div style={{paddingBottom:'em'}}></div>
                </Container>
            </>
        )
    }
}
export default Home;