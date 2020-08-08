import React, { Component } from 'react';
// icon
import { FaStore, FaChartLine, FaMedal } from 'react-icons/fa'
// Makarya
import Menu from '../_menu';
import MaNavbar from '../_navbar';
import MaCarousel from '../_carousel';
import MaProductList from '../_productList';
import MaSectionTitle from '../_sectionTitle';
//bootstrap
import Container from 'react-bootstrap/Container'
// dummy slider
import dummySlide1 from '../../images/slide1.png'
import dummySlide2 from '../../images/slide2.png'
// dummy product
import produk from '../../images/ayam.jpg'
// icon
import iFoods from '../../icon/foods.png'
import iRice from '../../icon/rice.png'
import iMeat from '../../icon/meat.png'
import iVegetables from '../../icon/vegetables.png'
import iFruit from '../../icon/watermelon.png'
import iIvest from '../../icon/invest.png'
import iPortofolio from '../../icon/savings.png'
import iDate from '../../icon/date.png'
import iWeek from '../../icon/week.png'
import iYear from '../../icon/year.png'



class Home extends Component{
    render(){
        const firstMenu = [
            {id: 1, logo: iFoods, title: 'Semua', goto:'/market/all'},
            {id: 2, logo: iRice, title: 'Pokok', goto:'/market/pokok'},
            {id: 3, logo: iMeat, title: 'Daging', goto:'/market/daging'},
            {id: 4, logo: iVegetables, title: 'Sayuran', goto:'/market/sayuran'},
            {id: 5, logo: iFruit, title: 'Buah', goto:'/market/buah'}];
        const secondMenu = [
            {id: 1, logo: iIvest, title: 'Semua'},
            {id: 2, logo: iDate, title: 'Pendek'},
            {id: 3, logo: iWeek, title: 'Menengah'},
            {id: 4, logo: iYear, title: 'Panjang'},
            {id: 5, logo: iPortofolio, title: 'Portofilio'}];
        const slideData = [
            {id: 1, image: dummySlide1, alt: 'Dummy slide 1'},
            {id: 2, image: dummySlide2, alt: 'Dummy slide 2'}];
        const productData = [
            {id: 1, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 1},
            {id: 2, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 1.5},
            {id: 3, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 2},
            {id: 4, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 2.5},
            {id: 5, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 3},
            {id: 6, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 3.5},
            {id: 7, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 4},
            {id: 8, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 4.5},
            {id: 9, image: produk, title: 'Ayam Potong', price: 'Rp. 2,1jt/kg', rating: 5},
        ];
        return (
            <>
                <MaNavbar type="search"/>
                <Container fluid>
                    <div style={{marginTop:'4.25em'}}/> 

                    <MaCarousel data={slideData}/>

                    <MaSectionTitle icon={<FaStore/>} title="Market" color="success"/>
                    <Menu list={firstMenu}/>

                    <MaSectionTitle icon={<FaChartLine/>} title="Investment" color="warning"/>
                    <Menu list={secondMenu}/>

                    <MaSectionTitle icon={<FaMedal/>} title="Rekomendasi" color="danger"/>
                    <MaProductList data={productData}/>

                    <div style={{paddingBottom:'4em'}}></div>
                </Container>
            </>
        )
    }
}
export default Home;