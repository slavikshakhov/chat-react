import React, { Component } from 'react'
import io from 'socket.io-client'
import ChatSection from './ChatSection'
import './Layout.css'
import PromptToLogin from './PromptToLogin'

export default class Layout extends Component {
  constructor() {
    super()
    this.state = { socket: null, user: null, users: null, matchedUser: false }
  }
  componentWillMount() {
    this.initSocket(this.props.socket)
  }

  initSocket = () => {
    const prod = {        
            API_URL: 'https://slavik-checkers.herokuapp.com'        
    };
    const dev = {       
            API_URL: 'http://localhost:5000'        
    };
    const config = process.env.NODE_ENV === 'development' ? dev : prod;
    const socket = io(config.API_URL).on('connect', () => {
      console.log('connected to server')
    })
    this.setState({ socket })
    socket.on('USERS', (users) => {
      console.log(users)
      if (users) {
        this.setState({ users })
      }
    })
  }
  removeUser = () => {
    this.setState({user: null})
  }
  setUser = (user) => {
    console.log(user)
    const { socket } = this.state
    socket.emit('USER_TO_USERS', user)
    this.setState({ user })
  }
  //check if user attempting to log in already in redistered users list
  checkUser = (name, cb) => {
    console.log(`checking user with name ${name}`)
    this.state.socket.emit('CHECKUSER', name, (user) => {
      const error = !user ? 'The name you entered does not match our data' : ''
      this.setState({ user })
      cb(error)
    })
  }
  render() {
    const { socket, user, users } = this.state
    console.log(users)
    // const classes = {display: 'flex', justifyContent: 'center', alignItems: 'center'}
    return (
      <div className="container vh-100">
        <div className="element pa4">
          {!user ? (
            <PromptToLogin
              user={user}
              socket={socket}
              setUser={this.setUser}
              users={users}
              checkUser={this.checkUser}
            />
          ) : (
            <ChatSection socket={socket} user={user} users={users} removeUser={this.removeUser} />
          )}
        </div>
      </div>
    )
  }
}

// <Login socket={socket} setUser={this.setUser}/>
