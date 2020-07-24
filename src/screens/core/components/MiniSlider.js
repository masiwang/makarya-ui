import React from 'react'
import menu3 from '../../assets/img/menu/menu3.png'

function MiniSlider(props){
    return (
        <div className="mt-3">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <h4 className="navbar-brand mr-auto mb-0" href="#">{props.name}</h4>
                        <a className="text-decoration-none btn btn-sm btn-outline-dark" href="#">
                            Lihat Semua
                        </a>
                    </div>
                </nav>
            </div>
            <div className="row mt-2" style={{overflowX:'scroll'}}>
                <div className="col-12">
                    <div style={{width:'45em'}}>
                        <div className="card shadow-sm mr-2" style={{width: '7em', float:'left'}}>
                            <img src={menu3} className="card-img-top" alt="..."/>
                            <div className="card-body pt-0 text-center">
                            <h6 className="card-title text-center mb-0">Daging</h6>
                            <small className='text-muted' style={{fontSize:'0.7em'}}>Rp.2 juta/kg</small>
                            </div>
                        </div>
                        <div className="card shadow-sm mr-2" style={{width: '7em', float:'left'}}>
                            <img src={menu3} className="card-img-top" alt="..."/>
                            <div className="card-body pt-0 text-center">
                            <h6 className="card-title text-center mb-0">Daging</h6>
                            <small className='text-muted' style={{fontSize:'0.7em'}}>Rp.2 juta/kg</small>
                            </div>
                        </div>
                        <div className="card shadow-sm mr-2" style={{width: '7em', float:'left'}}>
                            <img src={menu3} className="card-img-top" alt="..."/>
                            <div className="card-body pt-0 text-center">
                            <h6 className="card-title text-center mb-0">Daging</h6>
                            <small className='text-muted' style={{fontSize:'0.7em'}}>Rp.2 juta/kg</small>
                            </div>
                        </div>
                        <div className="card shadow-sm mr-2" style={{width: '7em', float:'left'}}>
                            <img src={menu3} className="card-img-top" alt="..."/>
                            <div className="card-body pt-0 text-center">
                            <h6 className="card-title text-center mb-0">Daging</h6>
                            <small className='text-muted' style={{fontSize:'0.7em'}}>Rp.2 juta/kg</small>
                            </div>
                        </div>
                        <div className="card shadow-sm mr-2" style={{width: '7em', float:'left'}}>
                            <img src={menu3} className="card-img-top" alt="..."/>
                            <div className="card-body pt-0 text-center">
                            <h6 className="card-title text-center mb-0">Daging</h6>
                            <small className='text-muted' style={{fontSize:'0.7em'}}>Rp.2 juta/kg</small>
                            </div>
                        </div>
                        <div className="card shadow-sm mr-2" style={{width: '7em', float:'left'}}>
                            <img src={menu3} className="card-img-top" alt="..."/>
                            <div className="card-body pt-0 text-center">
                            <h6 className="card-title text-center mb-0">Daging</h6>
                            <small className='text-muted' style={{fontSize:'0.7em'}}>Rp.2 juta/kg</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniSlider;