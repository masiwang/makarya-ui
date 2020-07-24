import React, { Component } from 'react'
import Slider from '../components/Slider'
import Menu from '../components/Menu'
import MiniSlider from '../components/MiniSlider'

class Home extends Component{
    render(){
        return (
            <div style={{paddingBottom:'5em'}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        <div className="input-group navbar-brand mr-auto mb-0" style={{width:'85%'}}>
                            <span className="input-group-text" id="basic-addon1" style={{backgroundColor:'#f8f9fa', borderRight:'0px'}}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                </svg>
                            </span>
                            <input style={{backgroundColor:'#f8f9fa', borderLeft:'0px'}} type="text" className="form-control" placeholder="Cari Sayuran, Buah, Ikan atau Daging" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <a className="text-decoration-none" href="#">
                            <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-basket" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z"/>
                                <path fill-rule="evenodd" d="M1 7v1h14V7H1zM.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H.5z"/>
                                <path fill-rule="evenodd" d="M14 9H2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM2 8a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H2z"/>
                                <path fill-rule="evenodd" d="M4 10a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                            </svg><sup><span class="badge bg-danger">8</span></sup>
                        </a>
                    </div>
                </nav>
                <div className="container-fluid"  style={{marginTop:'2em', paddingTop:'1em'}}>
                    <Slider/>
                    <Menu/>
                    <MiniSlider name="Fresh Today" />
                    <MiniSlider name="Produk Terlaris" />
                </div>
            </div>
        )
    }
}
export default Home;