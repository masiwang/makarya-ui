import React from 'react';
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel';

function MaCarousel(props){
    let data = props.data;
    return (
        <Row className="mt-4">
            <Carousel indicators={false} controls={false} fade={false} touch={true}>
                {data.map((e, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100" src={e.image} alt={e.alt} style={{borderRadius:'0.5em'}}/>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Row>
    )
};

export default MaCarousel;