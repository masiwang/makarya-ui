import React from 'react';
import slide1 from '../../assets/img/slider/slide1.png';
import slide2 from '../../assets/img/slider/slide2.png';
import slide3 from '../../assets/img/slider/slide3.png';

function Slider(){
    return(
        <div id="carouselExampleCaptions" className="carousel slide mt-4" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    );
};

export default Slider;