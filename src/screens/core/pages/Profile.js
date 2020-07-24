import React, { Component } from 'react';

import { getProfile } from '../../../helpers/UserFunctions';

class Profile extends Component{
    constructor(){
        super()
        this.state = {
            name : '',
            email : ''
        }
    }

    componentDidMount(){
        getProfile().then(res=>{
            this.setState({
                name: res.user.name,
                email: res.user.email
            })
        })
    }

    render(){
        return (
            <div>
            <h1>{this.state.name}</h1>
            <h6>{this.state.email}</h6>
            </div>
        )
    }
}

export default Profile;