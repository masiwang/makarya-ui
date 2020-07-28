import React from 'react';
import dummySlide1 from '../../assets/img/slider/slide1.png'
import dummySlide2 from '../../assets/img/slider/slide2.png'

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
                    <img src={dummySlide1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={dummySlide2} className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    );
};

export default Slider;