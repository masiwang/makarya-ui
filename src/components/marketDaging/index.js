import React, { Component } from 'react'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
// custom-component
import MaMenu from '../_menu';
import MaNavbar from '../_navbar';
import MaProductCard from '../_productCard';
import MaCarousel from '../_carousel';
import MaSectionTitle from '../_sectionTitle';
// font-awesome
import { FaBolt, FaHeart } from 'react-icons/fa'
// self-icon
import iMeat from '../../icon/meat.png'
import iBeef from '../../icon/beef.png'
import iChicken from '../../icon/chicken.png'
import iFish from '../../icon/fish.png'
// dummy-slider
import daging1 from '../../images/daging1.png'
import daging2 from '../../images/daging2.png'
// dummy product image
import produk from '../../images/ayam.jpg'
// dummy data

class MarketDaging extends Component{
    render(){
        const firstMenu = [
            {id: 1, logo: iMeat, title: 'Semua'},
            {id: 2, logo: iBeef, title: 'Merah'},
            {id: 3, logo: iChicken, title: 'Unggas'},
            {id: 4, logo: iFish, title: 'Ikan'},
        ];
        const productData = [
            {id: 1, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 1, sold:'2.1jt'},
            {id: 2, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 1.5, sold:'2.1jt'},
            {id: 3, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 2, sold:'2.1jt'},
            {id: 4, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 2.5, sold:'2.1jt'},
            {id: 5, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 3, sold:'2.1jt'},
            {id: 6, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 3.5, sold:'2.1jt'},
        ];
        const slideData = [
            {id: 1, image: daging1, alt: 'Dummy slide 1'},
            {id: 2, image: daging2, alt: 'Dummy slide 2'}];
        return( 
            <Container fluid> 
                <MaNavbar type="back" title="Daging" menu="daging"/>
                <div style={{marginTop:'4.75em'}}></div>
                <MaMenu list={firstMenu}/>
                <MaCarousel data={slideData}/>

                <MaSectionTitle icon={<FaBolt/>} title="Produk Terpopuler" color="warning" more="/market/daging/popular"/>
                <MaProductCard list={productData}/>
                
                <MaSectionTitle icon={<FaHeart/>} title="Spesial Untuk Kamu" color="danger" more="/market/daging/foryou"/>
                <MaProductCard list={productData}/>
                <div style={{paddingBottom:'4.75em'}}></div>
            </Container>
        );
    }
}

export default MarketDaging;