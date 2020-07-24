import React, {Component, useState} from 'react';
import { IconContext } from 'react-icons';
import { FaHome, FaChartLine, FaMoneyCheckAlt, FaBell, FaUserAlt } from 'react-icons/fa';
import Home from './pages/Home';


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            mainText: 'Home'
        }
        this.goTo = this.goTo.bind(this)
    }
    goTo(e) {
        this.setState({
          mainText: e
        });
    }
    render(){
        const doLogout = () => {
            localStorage.clear();
            window.location.href = '/';
        }
        return(
            <div className="container-fluid px-0">
                {(this.state.mainText == "Home") && <Home/>}
                <nav className="navbar fixed-bottom navbar-light bg-white border-top" >
                    <div className="container-fluid mx-3">
                        <IconContext.Provider value={{ color: "var(--peimary-color)", size: "1.3em"}}>
                            <div onClick={(e) => this.goTo("Home")} className="text-center text-muted text-decoration-none"><FaHome/><br/><span style={{fontSize:'0.6em'}}>Home</span></div>
                            <div onClick={(e) => this.goTo("Investasi")} className="text-center text-muted text-decoration-none"><FaChartLine/><br/><span style={{fontSize:'0.6em'}}>Investasi</span></div>
                            <div onClick={(e) => this.goTo("Dana")} className="text-center text-muted text-decoration-none"><FaMoneyCheckAlt/><br/><span style={{fontSize:'0.6em'}}>Dana</span></div>
                            <div onClick={(e) => this.goTo("Notifikasi")} className="text-center text-muted text-decoration-none"><FaBell/><br/><span style={{fontSize:'0.6em'}}>Notifikasi</span></div>
                            <div onClick={(e) => this.goTo("Profile")} className="text-center text-muted text-decoration-none"><FaUserAlt/><br/><span style={{fontSize:'0.6em'}}>Profile</span></div>
                        </IconContext.Provider>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Main;