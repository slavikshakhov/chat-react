
import React, { Component } from 'react';
import {FaSadTear} from 'react-icons/fa';


export default class Login extends Component {
    constructor(){
        super();
        this.textInput = React.createRef();
        this.state = {name: '', error: '', matchedUser: false}
    }
    componentDidMount(){
        this.textInput.current.focus();
    }
    onInputChange = ({target}) => {
        this.setState({name: target.value});        
      }
    onFormSubmit = (e) => {
        const {name} = this.state;  
        const {checkUser} = this.props;       
        e.preventDefault();                       
        if(name.length <= 0){
            const error = 'You have not entered any name';                    
            this.setState({error});
        }        
        else {
            checkUser(name, (err) => {
                this.setState({error: err})
            });
            
        }        
      }
    render() {       
        const {error, name} = this.state;   
        
           
                 
        return ( 
            <div className='w-50'>
                <div className='tc h5 bg-white o-30 flex flex-column justify-center items-center ttu dark-blue grow'>
                    <div className='mb4 f3 fw7 black'>Enter your name to login</div>
                    <form className='w-50 f4 flex' onSubmit={this.onFormSubmit}>                      
                        <input className='ph2 ttc ml3 f3 fw7 black' onChange={this.onInputChange} ref={this.textInput} id='name' placeholder={'Enter Your Name'} value={name} /> 
                        <button className='ml2 bg-light-blue fw9 ttu'>ok</button>                            
                    </form>                       
                </div>           
                {error.length > 0 && <div className='f4 fw3 white mt3 tracked ttu tc flex justify-center items-center'>{error} <FaSadTear color='red' size='1.5em' /></div>} 
            </div>
        )
    }
}

