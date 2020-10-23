import React, { Component } from 'react';
import {FaSadTear} from 'react-icons/fa';


export default class Register extends Component {
    constructor(){
        super();
        this.textInput = React.createRef();
        this.state = {name: '', user: null, error: ''}
    }
    componentDidMount(){
      this.textInput.current.focus();
    }
    onInputChange = ({target}) => {
        this.setState({name: target.value});
        console.log(this.state.name);
      }
    onFormSubmit = (e) => {
       const {socket, setUser} = this.props;
        e.preventDefault();        
        const {name} = this.state;               
        if(name.length <= 0){
            const err = 'You have not entered any name';                    
            this.setState({error: err});
        }
        else {
          socket.emit('NAME', this.state.name, ({error, user}) =>{
            console.log(`error: ${error}, user: ${JSON.stringify(user)}`);
            if(user){
              setUser(user);     
              this.setState({error: ''})          
            }
            else{            
              this.setState({error});
            }             
          });      
        }
        
      }
    render() {
        console.log(this.props.socket);
        const {error} = this.state;                 
        return (
          <div className='w-50'>
            <div className='tc h5 bg-white o-30 flex flex-column justify-center items-center ttu dark-blue grow'>
                <div className='mb4 f3 fw4'>Enter Your Name to Register for Chat</div>
                <form className='w-50 f4 flex' onSubmit={this.onFormSubmit}>                    
                    <input className='ph2 ttc ml3 f3 fw7 black' onChange={this.onInputChange} ref={this.textInput} id='name' placeholder={'Enter Your Name'} value={this.state.name} /> 
                    <button className='ml2 bg-light-blue fw9 ttu'>ok</button>                           
                </form>                                             
            </div>
            {error.length > 0 && <div className='f4 fw3 white mt3 tracked ttu tc flex justify-center items-center'>{error} <FaSadTear color='red' size='1.5em' /></div>}                  
          </div>
            
        )
    }
}

    