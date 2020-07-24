import React, {Component} from 'react'
import { IoIosLock } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Logo(props){
    return <IoIosLock size={props.size} style={{marginTop:"8vh", color:"var(--main-color)"}}/>
}

class Landing extends Component{
    render(){
        return (
            <div className="container-fluid" style={{height:"100vh", backgroundColor:"var(--secondary-color)"}}>
                <div className="container text-center">
                    <Logo size="12em"/>
                    <div>
                        <h1 style={{color: "var(--main-color"}}>Selamat Datang</h1>
                        <p style={{color: "var(--main-color)", fontSize:"1.2em"}}>Ini adalah aplikasi karya kucing.</p>
                    </div>
                </div>
                <nav className="navbar fixed-bottom navbar-light bg-transparent">
                <div className="container-fluid">
                    <Link to="/register" className="navbar-brand text-light">Registrasi</Link>
                    <Link to="/login" className="navbar-brand text-light">Masuk</Link>
                </div>
                </nav>
            </div>
            
        )
    }
}
export default Landing;