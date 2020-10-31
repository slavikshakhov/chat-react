import React, { Component } from 'react';
import Users from './Users';
import MessageInput from './MessageInput';
import Messages from './Messages';
import './ChatSection.css';

export default class ChatSection extends Component {
    constructor(){
        super();
        this.state = { receiver: null, oppositeChatter: null, publicMessages: null, privateMessages: null, activePrivateMessages: [], 
                        isPublic: true, error: '', typer: null, isTyping: false, popup: false}
    }
    componentWillMount(){        
        this.initSocket(this.props.socket);        
      }
      initSocket = (socket) => {                            
        

        //oppositeChatter is receiver if this user is sender, and is user if it received message from the user
        //popup will be true for the receiver, not sender
        socket.on('MESSAGE', (messages, isPublic, oppositeChatter, receiver, popup) => { 
                    
           isPublic ? this.setState({publicMessages: messages}) :
                 this.setState({activePrivateMessages: messages, oppositeChatter, popup, receiver});        
        }                         
        );
        socket.on('TYPING', (isTyping, typer) => {      
            this.setState({isTyping, typer});
        });  
    }
    
    setReceiver = (receiver) => {        
        this.setState({receiver, isPublic: false});
        console.log(receiver);
    }
    
    
    setPublicChat = () => {
        this.setState({ receiver: this.state.receiver, isPublic: true});
    }
    setMessage = (message) => {
        const {socket, user} = this.props;
        const {isPublic, receiver} = this.state;     
        console.log(user, receiver);
        this.setReceiver(this.state.receiver);
        if(user){ 
          socket.emit('MESSAGE', message, user, isPublic, receiver);          
         }         
         else {
            this.setState({error: 'before sending a message, please first log in'});
         }

        this.setTyping(false);   
    }
    setTyping = (isTyping) => {
        const {socket, user} = this.props;
        const {isPublic, receiver} = this.state;
        socket.emit('TYPING', isTyping, isPublic, user, receiver);    
    }
    
    
    render() {
        const {oppositeChatter, error, publicMessages, privateMessages, activePrivateMessages, isPublic, popup, receiver} = this.state;
        const {user, users} = this.props;
        console.log(activePrivateMessages, publicMessages, privateMessages, oppositeChatter, popup, isPublic, receiver);
        
        return (               
                <div className='chatsection'>                
                    <div className='users bg-light-blue'>
                        <div className='f4 fw6 mb2 tc red ttc'>{user && user.name}</div>
                        <Users users={users} user={user} setReceiver={this.setReceiver} setPublicChat={this.setPublicChat} socket={this.props.socket} />
                    </div>                
                    <div className='messages'><Messages oppositeChatter={oppositeChatter} publicMessages={publicMessages} privateMessages={privateMessages}
                                 activePrivateMessages={activePrivateMessages} user={user} isPublic={isPublic} popup={popup} receiver={receiver} /></div>
                        
                    <div className='input'><MessageInput setMessage={this.setMessage} userError={error} setTyping={this.setTyping} />
                    </div>                     
                </div>                  
        )
    }
}
