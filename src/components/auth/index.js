import React, {Component} from 'react'

import Container from 'react-bootstrap/Container'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

import {FaEnvelope, FaKey, FaArrowRight} from 'react-icons/fa'

import _background from '../../images/auth_background.jpg'
import _logo from '../../images/logo.png'

function Background(){
    return(
        <img src={_background} alt="logo" style={{zIndex:-1, maxWidth:"100%", position:"absolute", top:0, left:0, transform:"translate(0, -30px)"}}></img>
    )
}

function Logo(){
    return(
        <div className="text-center" style={{paddingTop:"20vh"}}>
            <img src={_logo} alt="logo" style={{width:"5em"}}/>
            <h1 className="text-success">Makarya</h1>
        </div>
    )
}

function Title(props){
    return(
        <div className="mt-3">
            <h2>{props.title}</h2>
        </div>
    )
}

function EmailInput(){
    return(
        <Form.Group className="mt-2">
            <Form.Label htmlFor="emailInput" srOnly>
                Username
            </Form.Label>
            <InputGroup className="mb-2">
                <InputGroup.Prepend>
                    <InputGroup.Text style={{borderTopRightRadius:'0', borderBottomRightRadius:'0'}}>
                            <FaEnvelope className="my-1"/>
                    </InputGroup.Text>
                </InputGroup.Prepend>
            <Form.Control id="emailInput" placeholder="Email" />
            </InputGroup>
    </Form.Group>
    )
}

function PasswordInput(){
    return (
        <Form.Group className="mt-3">
            <Form.Label htmlFor="passInput" srOnly>
                Password
            </Form.Label>
                <InputGroup className="mb-2">
                <InputGroup.Prepend>
                    <InputGroup.Text style={{borderTopRightRadius:'0', borderBottomRightRadius:'0'}}>
                        <FaKey className="my-1"/>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control id="passInput" placeholder="Password" />
            </InputGroup>
        </Form.Group>
    )
}

function ConfirmPasswordInput(){
    return (
        <Form.Group className="mt-3">
            <Form.Label htmlFor="passInput" srOnly>
                Ulangi Password
            </Form.Label>
                <InputGroup className="mb-2">
                <InputGroup.Prepend>
                    <InputGroup.Text style={{borderTopRightRadius:'0', borderBottomRightRadius:'0'}}>
                        <FaKey className="my-1"/>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control id="passInput" placeholder="Ulangi Password" />
            </InputGroup>
        </Form.Group>
    )
}

class Auth extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSignUpForm: true,
        }
    }
    switchForm(){
        this.state.isSignUpForm ? this.setState({isSignUpForm: false}) : this.setState({isSignUpForm: true})
    }
    doLogin(){
        localStorage.setItem('isLogin', true)
        window.location.href = '/'
    }
    render(){
        return(
            <Container fluid>
                <Background/>
                <Logo/>
                <main>
                    <Title title={this.state.isSignUpForm ? "Sign Up" : "Sign In"}/>
                    {/* Form start */}
                    <Form className="mt-4">
                        <EmailInput/>
                        <PasswordInput title="Password"/>
                        {this.state.isSignUpForm && <ConfirmPasswordInput/>}
                        <div className="text-right">
                            <Button onClick={() => {this.doLogin()}} className="my-2" variant="success"><FaArrowRight/></Button>
                        </div>
                    </Form>
                    {/* Form end */}
                    <div className="text-right">
                        <Button variant="link" className="my-0 text-decoration-none text-dark">Lupa password</Button><br/>
                        <Button onClick={() => {this.switchForm()}} variant="link" className="my-0 text-decoration-none text-dark"><b>{this.state.isSignUpForm ? "Sign In" : "Sign Up"}</b></Button>
                    </div>
                </main>
            </Container>
        )
    }
}

export default Auth;