import React, {Component, useState} from 'react';
import {BrowserRouter, Route, Redirect, Link} from 'react-router-dom';
import { Nav, Button, Navbar } from 'react-bootstrap';
import { FaHome, FaBell, FaHeart, FaNewspaper, FaUserAlt } from 'react-icons/fa';
// pages
import Auth from './components/auth';
import Home from './components/home';
import Notification from './components/notification';
import MarketDaging from './components/marketDaging';

function NavIcon(props){
    return (
        <Nav.Link className="p-0">
          <Link to={props.goto}>
            <Button variant="link" size="sm" className="my-0 text-center text-decoration-none" style={{color:'#445'}}>
                {props.children}<br/>
                <p className="mb-0" style={{fontSize:'.8em'}}>{props.title}</p>
            </Button>
          </Link>
        </Nav.Link>
    )
}
function MaNavBar(){
  return (
    <Navbar bg="white" fixed="bottom" className="px-3 border-top">
        <Nav activeKey="" className="w-100">
          <Nav.Item className="d-flex justify-content-between w-100">
              <NavIcon goto="/home" title="Home">
                                  <FaHome size="1.5em"/>
                              </NavIcon>
                              <NavIcon goto="/notification" title="Notifikasi">
                                  <FaBell size="1.5em"/>
                              </NavIcon>
                              <NavIcon goto="/home" title="Favorite">
                                  <FaHeart size="1.5em"/>
                              </NavIcon>
                              <NavIcon goto="/home" title="Berita">
                                  <FaNewspaper size="1.5em"/>
                              </NavIcon>
                              <NavIcon goto="/home" title="Profil">
                                  <FaUserAlt size="1.5em"/>
                              </NavIcon>
                          </Nav.Item>
                      </Nav>
                  </Navbar>
  )
}
// function MaNavBottom(props){
//   const { location } = props;
//   if(location.pathname.match('/home')){
//     return (
//       <Navbar bg="white" fixed="bottom" className="px-3 border-top">
//         <Nav activeKey="" className="w-100">
//           <Nav.Item className="d-flex justify-content-between w-100">
//               <NavIcon goto="/home" title="Home">
//                                   <FaHome size="1.5em"/>
//                               </NavIcon>
//                               <NavIcon goto="/notification" onClick={() => {this.handleClick()}} title="Notifikasi">
//                                   <FaBell size="1.5em"/>
//                               </NavIcon>
//                               <NavIcon goto="/home" title="Favorite">
//                                   <FaHeart size="1.5em"/>
//                               </NavIcon>
//                               <NavIcon goto="/home" title="Berita">
//                                   <FaNewspaper size="1.5em"/>
//                               </NavIcon>
//                               <NavIcon goto="/home" title="Profil">
//                                   <FaUserAlt size="1.5em"/>
//                               </NavIcon>
//                           </Nav.Item>
//                       </Nav>
//                   </Navbar> 
//     )
//   }else{
//     return null;
//   }
// }

// const MaNavBottomFlex = withRouter(MaNavBottom);

class App extends Component{
  constructor(){
    super()
    this.state = {
      isFront: false,
      loc: '',
    };
    this.toggleIsFront = this.toggleIsFront.bind(this);
  };
  toggleIsFront() {
    this.setState(state => ({
      isFront: !state.isFront
    }));
  }
  
  render(){
    const isLogin = localStorage.getItem('isLogin');
    return(
      <BrowserRouter>
          {localStorage.getItem('isLogin') ? <Redirect to="/home"/> : <Redirect to="/login"/>}
          <Route exact path="/login" component={Auth}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/notification" component={Notification}/>

          <Route exact path="/market/daging" component={MarketDaging}/>

          {localStorage.getItem('isLogin') && <MaNavBar/>}
       </BrowserRouter>
    )
  }
}

export default App;