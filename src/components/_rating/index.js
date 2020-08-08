import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function MaRating(props){
    let count = props.count;
    let fillStar;
    let halfStar;
    let emptyStar;
    if(count%1 === 0){
        fillStar = (count > 0) ? [...Array(count)].map((index)=>{return <FaStar key={index} size='.65em'/>}) : '';
        halfStar = '';
        emptyStar = ((5-count) > 0) ? [...Array(5-count)].map((index)=>{return <FaRegStar key={index} size='.65em'/>}) : '';
    }else{
        fillStar = (count > 0) ? [...Array(count - count%1)].map((index)=>{return <FaStar key={index} size='.65em'/>}) : '';
        halfStar = [...Array(1)].map((index)=>{return <FaStarHalfAlt key={index} size='.65em'/>});
        emptyStar = ((5-count-count%1) > 0) ? [...Array(5-count-count%1)].map((index)=>{return <FaRegStar key={index} size='.65em'/>}) : '';

    }
    return (
        <div className="text-warning">
            {fillStar}
            {halfStar}
            {emptyStar}
        </div>
    )
}

export default MaRating;