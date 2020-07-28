import React, { Component } from 'react'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
// custom-component
import NavbarBack from './components/NavbarBack'
import PopularItem from './components/PopularItem'
import ProductItem from './components/ProductItem'
import MenuIcon from './components/MenuIcon'
// font-awesome
import { FaBolt, FaHeart } from 'react-icons/fa'
// self-icon
import iMeat from '../../assets/icon/meat.png'
import iBeef from '../../assets/icon/beef.png'
import iChicken from '../../assets/icon/chicken.png'
import iFish from '../../assets/icon/fish.png'
// dummy-slider
import daging1 from '../../assets/img/slider/daging1.png'
import daging2 from '../../assets/img/slider/daging2.png'
// dummy product image
import produk from '../../assets/img/daging/ayam.jpg'
// dummy data
import {dummyProduct} from './data/DummyData'

class MarketDaging extends Component{
    render(){
        
        return( 
            <Container fluid> 
                <NavbarBack title="Daging"/>
                <Row style={{marginTop:'5em'}}>
                    <h4>Kategori</h4>
                </Row>
                <Row className="mt-2">
                    <MenuIcon logo={iMeat} title="Semua"/>
                    <MenuIcon logo={iBeef} title="Merah"/>
                    <MenuIcon logo={iChicken} title="Unggas"/>
                    <MenuIcon logo={iFish} title="Ikan"/>
                </Row>
                <Row className="mt-4">
                    <Carousel indicators={false} controls={false} fade={false} touch={true}>
                        <Carousel.Item>
                            <img className="d-block w-100" src={daging1} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={daging2} alt="First slide" />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row className="mt-4">
                    <Col className="d-flex justify-content-between align-item-center">
                    <p><span className="text-warning"><FaBolt/></span> <span style={{fontSize:'1.1em', fontWeight:'500'}}>Produk Terpopuler</span></p>
                    <p style={{fontSize:'.9em'}} className="text-info mt-1">Lebih banyak</p>
                    </Col>
                </Row>
                <Row className="mt-2">
                    {dummyProduct.map((e) => {
                        return (
                            <PopularItem image={produk} name={e.name} rating={e.rating} sold={e.sold}/>
                        );
                    })}
                </Row>
                <Row className="mt-4">
                    <Col className="d-flex justify-content-between align-item-center">
                    <p><span className="text-danger"><FaHeart/></span> <span style={{fontSize:'1.1em', fontWeight:'500'}}>Untuk Kamu</span></p>
                    </Col>
                </Row>
                <Row className="mt-2">
                    {dummyProduct.map((e) => {
                        return (
                            <ProductItem image={produk} name={e.name} rating={e.rating} sold={e.sold}/>
                        );
                    })}
                </Row>
                <Button variant="outline-danger" size="md" block>
                    Lebih banyak
                </Button>
            </Container>
        );
    }
}

export default MarketDaging;