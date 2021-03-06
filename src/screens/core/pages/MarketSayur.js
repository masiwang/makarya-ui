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
//custom-style
// font-awesome
import { FaBolt, FaHeart } from 'react-icons/fa'
// self-icon
import iVegetables from '../../assets/icon/vegetables.png'
import iVegan from '../../assets/icon/vegan.png'
import iCarrot from '../../assets/icon/carrot.png'
import iBean from '../../assets/icon/bean.png'
import iMushroom from '../../assets/icon/mushroom.png'
// dummy-slider
import sayur1 from '../../assets/img/slider/sayur1.png'
import sayur2 from '../../assets/img/slider/sayur2.png'
// dummy-product
import produk from '../../assets/img/sayur/sayur.png'

function Icon(props){
    return (
        <Col className="text-center">
            <img src={props.logo} style={{width:'2.75em'}}/><br/>
            <div className="mt-1" style={{fontSize:'.9em'}}>{props.title}</div>
        </Col>
    )
}

class MarketSayur extends Component{
    render(){
        const dummyProduct = [
            {
                name: 'Kacang polong',
                rating: 4.8,
                sold: 8,
            },
            {
                name: 'Kacang polong',
                rating: 4.8,
                sold: 8,
            },
            {
                name: 'Kacang polong',
                rating: 4.8,
                sold: 8,
            },
            {
                name: 'Kacang polong',
                rating: 4.8,
                sold: 8,
            },
            {
                name: 'Kacang polong',
                rating: 4.8,
                sold: 8,
            },
            {
                name: 'Kacang polong',
                rating: 4.8,
                sold: 8,
            },
        ];
        return( 
            <Container fluid> 
                <NavbarBack title="Sayuran"/>
                <Row style={{marginTop:'5em'}}>
                    <h4>Kategori</h4>
                </Row>
                <Row className="mt-2">
                    <Icon logo={iVegetables} title="Semua"/>
                    <Icon logo={iVegan} title="Daun"/>
                    <Icon logo={iCarrot} title="Umbi"/>
                    <Icon logo={iBean} title="Kacang"/>
                    <Icon logo={iMushroom} title="Jamur"/>
                </Row>
                <Row className="mt-4">
                    <Carousel indicators={false} controls={false} fade={false} touch={true}>
                        <Carousel.Item>
                            <img className="d-block w-100" src={sayur1} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={sayur2} alt="First slide" />
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
                <Button variant="outline-success" size="md" block>
                    Lebih banyak
                </Button>
            </Container>
        );
    }
}

export default MarketSayur;