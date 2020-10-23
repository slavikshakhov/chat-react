import React, { Component } from 'react'
import './Users.css'

export default class Users extends Component {
  render() {
    const { user, users, setReceiver, setPublicChat } = this.props   
    
    const otherUsers =
      users && user
        ? Object.keys(users)
            .filter((u) => users[u].name !== user.name)
            .map((u, i) => {
              console.log(users[u].name)
              console.log(users[u])
              return (
                <div className="users flex flex-column items-center">
                  <button
                    className="private-user-btn"
                    key={i}
                    onClick={() => setReceiver(users[u])}
                  >
                    chat with <span className="ttc">{users[u].name}</span> 
                  </button>
                  
                </div>
              )
            })
        : null
    return (
      <div className="flex flex-column items-center">
        <div className="flex w-100 justify-center">
          <button className="public-btn" onClick={setPublicChat}>
            Public Chat
          </button>          
        </div>
        <div className="divider"></div>
        <p className="private-users-title">Private chat with users online</p>
        {users && user && Object.keys(users).length === 1 && <p className="no-users-warning">No users online!</p>} 
        {otherUsers && otherUsers}
      </div>
    )
  }
}
