import React, {Component} from 'react';
import './Popup.css';
import './Messages.css';




export default class Messages extends Component {
    constructor(){
        super();
        this.state = {}
    }    
    printPublicMessages = (publicMessages) => {
        const {user} = this.props;
        const publicMes = publicMessages ? 
                publicMessages.map((mes, i) => {                   
                    console.log(mes);
                    console.log(mes.time);        
                    return (
                        <div key={i} className={(user && mes.sender) && user.name === mes.sender.name ? 'red f5 ph3 pv2' : ''}>
                            {publicMessages && 
                                <div>Message from {mes.user.name[0].toUpperCase() + mes.user.name.slice(1)}
                                    <span> sent at {mes.time}</span>
                                </div>            
                            }
                            
                            <div className='fw6'>{mes.message}</div>             
                        </div>
                    )
                
                }) : null;
       return publicMes;
    }
    /*

    printPrivateMessages = () => {
        const {privateMessages, user} = this.props;  
        let grouppedMessages = {};             
        if(privateMessages.length > 0){            
            for(const {sender, receiver, id, message, time, isPublic} of privateMessages){
                if(!grouppedMessages[sender.name]){
                    grouppedMessages[sender.name] = [];
                }
                grouppedMessages[sender.name].push({receiver, id, message, time, isPublic});                              
            } 
            //this.setState({grouppedMessages});   
                
        }        
        console.log(privateMessages);
        console.log(grouppedMessages);
        const privateMessagesBySender = grouppedMessages ? Object.keys(grouppedMessages).map((senderOfThisMessage, i) => {
                    return (
                        <div key={i} className='ma2 ba'>
                            <div>Chat with {senderOfThisMessage}</div>
                            {
                                grouppedMessages[senderOfThisMessage].map((mes, i) => {
                                    console.log(mes);
                                    return (
                                        <div key={i} className={(user && mes.receiver) && user.name === mes.receiver.name ? '' : 'red f5'}>                    
                                            <div>{mes.message}</div>
                                            <div>sent at {mes.time}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )                    
                }) : null
        return privateMessagesBySender;
    }   
    
    */
   //activePrivateMessages is array of messages related to the sender (user) with corresponding private receivers
   printPrivateMessagesOfActiveReceiver = (messagesFromThisReceiver) => {   
      
       return messagesFromThisReceiver.map(mes => {
           console.log(mes);
           console.log(this.props.user)
           return (
               <div className="">
                   <div key={mes.id} className="flex items-center justify-start">
                        {this.props.user.name !== mes.receiver.name && 
                            <p className="pink fw3 f6">{this.props.user.name} to {mes.receiver.name}</p>                
                        }               
                        <span className='ml2 green'>Sent at {mes.time}</span>
                
                    </div>
                    <p className="message-text">{mes.message}</p>
               </div>
           
           );
       })
   }
   privateMessagesOfActiveReceiver = (activePrivateMessages) => {
       const {receiver} = this.props;   
       console.log(receiver.name); 
       const userReceiverMes =  activePrivateMessages.filter((el) => {
           console.log(receiver.name, el.receiver.name)
           return el.receiver.name === receiver.name; 
       });
       console.log(userReceiverMes, activePrivateMessages);
       return userReceiverMes;
   }

    render(){   
        const {publicMessages, privateMessages, activePrivateMessages, oppositeChatter, popup} = this.props;  
         console.log(publicMessages, privateMessages, activePrivateMessages, oppositeChatter);
         const popupClass = popup ? 'popup' : '';
         const classes = `fw3 f6 ${popupClass}`;

         let publMes = !publicMessages ? null : publicMessages.length > 0 ? this.printPublicMessages(publicMessages) : null;
        return (
            
            <div className='w-100 h-100 bg-white flex br2'>                
                <div className='bg-light-gray w-50 pa2'>
                    <div className='tc fw3 f5 ttu mb2'><span className='fw4 f4'>public Messages</span></div>
                    {publMes}                    
                </div>   
                
               
                <div className='bl bw2 pa2 w-50'>
                    <div className='tc fw3 f5 ttu'><span className='fw4 f4 mb2'>private Messages</span></div>
                     {activePrivateMessages.length === 0 && <p>So far no messages sent!</p>}
                     {activePrivateMessages.length > 0 && 
                        <div className="">                            
                                                 
                            <p>{this.printPrivateMessagesOfActiveReceiver(this.privateMessagesOfActiveReceiver(activePrivateMessages)) }</p>  
                        </div>                        
                    }                       
                </div>                
                            
                
            </div>
        )
    }
   
}
 