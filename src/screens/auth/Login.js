import React, {Component} from 'react'
import { FaArrowRight, FaEnvelope, FaKey } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import bg from '../assets/img/login-bg.jpg'
import logo from '../assets/img/logo.png'

class Login extends Component{
    render(){
        const doLogin = () => {
          localStorage.setItem('isLogin', true)
          window.location.href= "/"
        }
        return (
            <div className="container-fluid" style={{height:"100vh"}}>
                <img src={bg} alt="logo" style={{zIndex:-1, maxWidth:"100%", position:"absolute", top:0, left:0, transform:"translate(0, -30px)"}}></img>
                <div className="text-center" style={{paddingTop:"20vh"}}>
                    <img src={logo} alt="logo" style={{width:"5em"}}/>
                    <h1 className="text-success">Makarya</h1>
                </div>
                <div>
                    <div className="mt-3">
                        <h2>Sign In</h2>
                    </div>
                    <div className="mt-4 input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"><FaEnvelope/></span>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                    </div>
                    <div className="mt-3 input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"><FaKey/></span>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    
                    <div class="text-right">
                        <button onClick={doLogin} type="submit" className="btn btn-success" ><FaArrowRight/></button><br/>
                        <a href="/forgot" class="text-decoration-none text-dark">Lupa password?</a><br/>
                        <a href="/signup" class="text-decoration-none text-dark"><b>Sign Up</b></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;