import React, {Component} from 'react';
import Layout from './Layout';
import Particles from 'react-particles-js';

class App extends Component{
  render(){
       
    return (
      <div>
       <Particles
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#FFFFFF"
                                    },
                        "number": {
                            "value": 250
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                        width: '100%',
                        background: `#1E90FF`,
                        position: 'absolute',
                        zIndex: 1
                 }}
                />
        
        <div style={{ position: 'relative', top: 0, zIndex: 200 }}>
           <Layout />  
        </div>        
      </div>
    );
  }  
}

export default App;
