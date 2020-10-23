import React, { Component } from 'react';
import './PromptToLogin.css';
import Register from './Register';
import Login from './Login';


export default class PromptToLogin extends Component {
    constructor(){
        super();
        this.state = {
            loginClicked: false, registerClicked: false
        }
    }
    onLoginClick = () => {
        this.setState({loginClicked: true});
    }
    onRegisterClick = () => {
        this.setState({registerClicked: true});
    }
    render() {
        const classes = `pa4 f4 br2 grow ma2 ttu tc fw7 dark-gray bg-white o-40`;        
        const {loginClicked, registerClicked} = this.state;
        const {socket, setUser, users, checkUser} = this.props;
        return (
            <div className='container'>
                {!loginClicked && !registerClicked ? 
                    (<div className='auth'>
                         <div className={`login ${classes}`} onClick={this.onLoginClick}>Login</div>
                         <div className={`register ${classes}`} onClick={this.onRegisterClick} >Register</div>
                    </div>)
                   
                    :
                    registerClicked ? <Register socket={socket} setUser={setUser} /> :
                    <Login users={users} checkUser={checkUser} />
            }
               
            </div>
        )
    }
}
