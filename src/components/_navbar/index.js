import React from 'react'
// bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Badge from 'react-bootstrap/Badge'
import { FaHeart, FaShoppingCart, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function MaNavbar(props){
    let type = props.type;
    let background;
    let textColor;
    let badgeTextColor;
    let badgeColor;
    switch(props.menu){
        case 'daging':
            background = 'danger'
            textColor = 'text-light';
            badgeTextColor = 'text-dark';
            badgeColor = 'bg-warning';
            break;
        default:
            background = 'white';
            textColor = 'text-dark';
            badgeTextColor = 'text-light';
            badgeColor = 'bg-danger';
            break;
    }

    return(
        <Navbar bg={background} fixed="top" className="px-3 py-2 text-nowrap border-bottom d-flex align-item-center" style={{height:'3.75em'}}>
            {(type === 'back') && <div className="mr-auto d-flex justify-content-start">
                <Link to="/home" className={"py-1 mr-1 "+textColor}>
                    <p className="mb-0"><FaArrowLeft/></p>
                </Link>
                <Navbar.Brand href="home" className={"mr-auto "+textColor}>
                    <h4 className="mb-0">{props.title}</h4>
                </Navbar.Brand>
            </div>}

            {(type === 'title') && <div className="mr-auto d-flex justify-content-start">
                <Navbar.Brand href="home" className={"mr-auto "+textColor}>
                    <h4 className="mb-0">{props.title}</h4>
                </Navbar.Brand>
            </div>}

            {(type === 'search') && <Form inline className="mr-auto w-100">
                <FormControl type="text" placeholder="Cari produk" style={{borderRadius:'1.5em', backgroundColor:'#eee'}}/>
            </Form>}
            <Link to="favorite" className={"px-2 "+textColor}>
                <FaHeart size="1.3em"/>
                <sup><span class={"badge "+badgeColor+" "+badgeTextColor}>9</span></sup>
            </Link>
            <Link to="cart" className={textColor}>
                <FaShoppingCart size="1.3em"/>
                <sup><span class={"badge "+badgeColor+" "+badgeTextColor}>9</span></sup>
            </Link>
        </Navbar>
    )
};

export default MaNavbar;