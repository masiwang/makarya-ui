import React, {Fragment} from 'react';
import menu1 from '../../assets/img/menu/menu1.png';
import menu2 from '../../assets/img/menu/menu2.png';
import menu3 from '../../assets/img/menu/menu3.png';
import menu4 from '../../assets/img/menu/menu4.png';

function Slider(){
    return(
        <div className="row mt-4">
            <div className="col-12">
            <button className="btn btn-outline-success btn-sm my-0" style={{width:"23.5%", marginRight:'2%', borderRadius:'2em'}}>Sayur</button>
            <button className="btn btn-outline-secondary btn-sm my-0" style={{width:"23.5%", marginRight:'2%', borderRadius:'2em'}}>Buah</button>
            <button className="btn btn-outline-danger btn-sm my-0" style={{width:"23.5%", marginRight:'2%', borderRadius:'2em'}}>Daging</button>
            <button className="btn btn-outline-primary btn-sm my-0" style={{width:"23.5%", borderRadius:'2em'}}>Ikan</button>
            </div>
            
        </div>
    );
};

export default Slider;