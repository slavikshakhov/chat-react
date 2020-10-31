(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{37:function(e,t,a){e.exports=a(82)},42:function(e,t,a){},71:function(e,t){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(34),c=a.n(r),i=(a(42),a(1)),o=a(2),l=a(4),u=a(3),m=a(5),p=a(35),f=a.n(p),v=(a(74),function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).logout=function(){var e=a.props,t=e.user,s=e.socket;console.log(t),s.disconnect()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.users,s=e.setReceiver,r=e.setPublicChat,c=a&&t?Object.keys(a).filter((function(e){return a[e].name!==t.name})).map((function(e,t){return console.log(a[e].name),console.log(a[e]),n.a.createElement("div",{className:"users flex flex-column items-center"},n.a.createElement("button",{className:"private-user-btn bg-blue",key:t,onClick:function(){return s(a[e])}},"chat with ",n.a.createElement("span",{className:"ttc"},a[e].name)))})):null;return n.a.createElement("div",{className:"w-100 flex flex-column justify-between users-container"},n.a.createElement("div",{className:"flex flex-column items-center"},n.a.createElement("div",{className:"flex w-100 justify-center"},n.a.createElement("button",{className:"public-btn",onClick:r},"Public Chat")),n.a.createElement("div",{className:"divider"}),n.a.createElement("p",{className:"private-users-title"},"Private chat with users online"),a&&t&&1===Object.keys(a).length&&n.a.createElement("p",{className:"no-users-warning"},"No users online!"),c&&c),n.a.createElement("button",{className:"flex items-center justify-center w-100 h2 br2 bg-pink logout-btn",onClick:this.logout},"Logout"))}}]),t}(s.Component)),h=a(18),g=(a(75),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onMessageSubmit=function(t){t.preventDefault();var a=e.props.setMessage;if(e.state.message.length>=0)a(e.state.message),e.setState({message:""});else{var s=e.state.errors;e.setState({errors:[].concat(Object(h.a)(s),["The message should be at least one character"])})}},e.onMessageChange=function(t){var a=t.target,s=e.props.setTyping,n=a.value.length>=1;e.setState({message:a.value}),console.log(e.state.message),s(n)},e.submitText=function(t){13===t.keyCode&&e.onMessageSubmit(t)},e.state={message:"",errors:[]},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.errors,a=this.props.userError,s=[];a.length>0&&(s=[].concat(Object(h.a)(t),[a]));var r=s.length>0?s.map((function(e,t){return n.a.createElement("div",{key:t},e)})):null,c=t.length>0?"bg-red":"";return n.a.createElement("div",{className:"tc bg-grey"},n.a.createElement("form",{className:"w-100 flex flex-row"},n.a.createElement("textarea",{className:"w-100 h4 message-input",id:"message",placeholder:"Enter your message here",ref:function(t){e.textInput=t},onChange:this.onMessageChange,value:this.state.message,onKeyDown:this.submitText})),n.a.createElement("div",{className:c},r))}}]),t}(s.Component)),b=(a(76),a(77),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).printPublicMessages=function(t){var a=e.props.user;return t?t.map((function(e,s){return console.log(e),console.log(e.time),n.a.createElement("div",{key:s,className:a&&e.sender&&a.name===e.sender.name?"red f5 ph3 pv2":""},t&&n.a.createElement("div",null,"Message from ",e.user.name[0].toUpperCase()+e.user.name.slice(1),n.a.createElement("span",null," sent at ",e.time)),n.a.createElement("div",{className:"fw6"},e.message))})):null},e.printPrivateMessagesOfActiveReceiver=function(t){return t.map((function(t){return console.log(t),console.log(e.props.user),n.a.createElement("div",{className:""},n.a.createElement("div",{key:t.id,className:"flex items-center justify-start"},e.props.user.name!==t.receiver.name&&n.a.createElement("p",{className:"pink fw3 f6"},e.props.user.name," to ",t.receiver.name),n.a.createElement("span",{className:"ml2 green"},"Sent at ",t.time)),n.a.createElement("p",{className:"message-text"},t.message))}))},e.privateMessagesOfActiveReceiver=function(t){var a=e.props.receiver;console.log(a.name);var s=t.filter((function(e){return console.log(a.name,e.receiver.name),e.receiver.name===a.name}));return console.log(s,t),s},e.state={},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.publicMessages,a=e.privateMessages,s=e.activePrivateMessages,r=e.oppositeChatter,c=e.popup;console.log(t,a,s,r);"fw3 f6 ".concat(c?"popup":"");var i=t&&t.length>0?this.printPublicMessages(t):null;return n.a.createElement("div",{className:"w-100 h-100 bg-white flex br2"},n.a.createElement("div",{className:"bg-light-gray w-50 pa2"},n.a.createElement("div",{className:"tc fw3 f5 ttu mb2"},n.a.createElement("span",{className:"fw4 f4"},"public Messages")),i),n.a.createElement("div",{className:"bl bw2 pa2 w-50"},n.a.createElement("div",{className:"tc fw3 f5 ttu"},n.a.createElement("span",{className:"fw4 f4 mb2"},"private Messages")),0===s.length&&n.a.createElement("p",null,"So far no messages sent!"),s.length>0&&n.a.createElement("div",{className:""},n.a.createElement("p",null,this.printPrivateMessagesOfActiveReceiver(this.privateMessagesOfActiveReceiver(s))))))}}]),t}(s.Component)),d=(a(78),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).initSocket=function(t){t.on("MESSAGE",(function(t,a,s,n,r){a?e.setState({publicMessages:t}):e.setState({activePrivateMessages:t,oppositeChatter:s,popup:r,receiver:n})})),t.on("TYPING",(function(t,a){e.setState({isTyping:t,typer:a})}))},e.setReceiver=function(t){e.setState({receiver:t,isPublic:!1}),console.log(t)},e.setPublicChat=function(){e.setState({receiver:e.state.receiver,isPublic:!0})},e.setMessage=function(t){var a=e.props,s=a.socket,n=a.user,r=e.state,c=r.isPublic,i=r.receiver;console.log(n,i),e.setReceiver(e.state.receiver),n?s.emit("MESSAGE",t,n,c,i):e.setState({error:"before sending a message, please first log in"}),e.setTyping(!1)},e.setTyping=function(t){var a=e.props,s=a.socket,n=a.user,r=e.state,c=r.isPublic,i=r.receiver;s.emit("TYPING",t,c,n,i)},e.state={receiver:null,oppositeChatter:null,publicMessages:null,privateMessages:null,activePrivateMessages:[],isPublic:!0,error:"",typer:null,isTyping:!1,popup:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.initSocket(this.props.socket)}},{key:"render",value:function(){var e=this.state,t=e.oppositeChatter,a=e.error,s=e.publicMessages,r=e.privateMessages,c=e.activePrivateMessages,i=e.isPublic,o=e.popup,l=e.receiver,u=this.props,m=u.user,p=u.users;return console.log(c,s,r,t,o,i,l),n.a.createElement("div",{className:"chatsection"},n.a.createElement("div",{className:"users bg-light-blue"},n.a.createElement("div",{className:"f4 fw6 mb2 tc red ttc"},m&&m.name),n.a.createElement(v,{users:p,user:m,setReceiver:this.setReceiver,setPublicChat:this.setPublicChat,socket:this.props.socket})),n.a.createElement("div",{className:"messages"},n.a.createElement(b,{oppositeChatter:t,publicMessages:s,privateMessages:r,activePrivateMessages:c,user:m,isPublic:i,popup:o,receiver:l})),n.a.createElement("div",{className:"input"},n.a.createElement(g,{setMessage:this.setMessage,userError:a,setTyping:this.setTyping})))}}]),t}(s.Component)),E=(a(79),a(80),a(12)),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onInputChange=function(t){var a=t.target;e.setState({name:a.value}),console.log(e.state.name)},e.onFormSubmit=function(t){var a=e.props,s=a.socket,n=a.setUser;if(t.preventDefault(),e.state.name.length<=0){e.setState({error:"You have not entered any name"})}else s.emit("NAME",e.state.name,(function(t){var a=t.error,s=t.user;console.log("error: ".concat(a,", user: ").concat(JSON.stringify(s))),s?(n(s),e.setState({error:""})):e.setState({error:a})}))},e.textInput=n.a.createRef(),e.state={name:"",user:null,error:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.textInput.current.focus()}},{key:"render",value:function(){console.log(this.props.socket);var e=this.state.error;return n.a.createElement("div",{className:"w-50"},n.a.createElement("div",{className:"tc h5 bg-white o-30 flex flex-column justify-center items-center ttu dark-blue grow"},n.a.createElement("div",{className:"mb4 f3 fw4"},"Enter Your Name to Register for Chat"),n.a.createElement("form",{className:"w-50 f4 flex",onSubmit:this.onFormSubmit},n.a.createElement("input",{className:"ph2 ttc ml3 f3 fw7 black",onChange:this.onInputChange,ref:this.textInput,id:"name",placeholder:"Enter Your Name",value:this.state.name}),n.a.createElement("button",{className:"ml2 bg-light-blue fw9 ttu"},"ok"))),e.length>0&&n.a.createElement("div",{className:"f4 fw3 white mt3 tracked ttu tc flex justify-center items-center"},e," ",n.a.createElement(E.a,{color:"red",size:"1.5em"})))}}]),t}(s.Component),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onInputChange=function(t){var a=t.target;e.setState({name:a.value})},e.onFormSubmit=function(t){var a=e.state.name,s=e.props.checkUser;if(t.preventDefault(),a.length<=0){e.setState({error:"You have not entered any name"})}else s(a,(function(t){e.setState({error:t})}))},e.textInput=n.a.createRef(),e.state={name:"",error:"",matchedUser:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.textInput.current.focus()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.name;return n.a.createElement("div",{className:"w-50"},n.a.createElement("div",{className:"tc h5 bg-white o-30 flex flex-column justify-center items-center ttu dark-blue grow"},n.a.createElement("div",{className:"mb4 f3 fw7 black"},"Enter your name to login"),n.a.createElement("form",{className:"w-50 f4 flex",onSubmit:this.onFormSubmit},n.a.createElement("input",{className:"ph2 ttc ml3 f3 fw7 black",onChange:this.onInputChange,ref:this.textInput,id:"name",placeholder:"Enter Your Name",value:a}),n.a.createElement("button",{className:"ml2 bg-light-blue fw9 ttu"},"ok"))),t.length>0&&n.a.createElement("div",{className:"f4 fw3 white mt3 tracked ttu tc flex justify-center items-center"},t," ",n.a.createElement(E.a,{color:"red",size:"1.5em"})))}}]),t}(s.Component),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onLoginClick=function(){e.setState({loginClicked:!0})},e.onRegisterClick=function(){e.setState({registerClicked:!0})},e.state={loginClicked:!1,registerClicked:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="pa4 f4 br2 grow ma2 ttu tc fw7 dark-gray bg-white o-40",t=this.state,a=t.loginClicked,s=t.registerClicked,r=this.props,c=r.socket,i=r.setUser,o=r.users,l=r.checkUser;return n.a.createElement("div",{className:"container"},a||s?s?n.a.createElement(k,{socket:c,setUser:i}):n.a.createElement(N,{users:o,checkUser:l}):n.a.createElement("div",{className:"auth"},n.a.createElement("div",{className:"login ".concat(e),onClick:this.onLoginClick},"Login"),n.a.createElement("div",{className:"register ".concat(e),onClick:this.onRegisterClick},"Register")))}}]),t}(s.Component),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).initSocket=function(){var t={API_URL:"https://slavik-checkers.herokuapp.com"},a=f()(t.API_URL).on("connect",(function(){console.log("connected to server")}));e.setState({socket:a}),a.on("USERS",(function(t){console.log(t),t&&e.setState({users:t})}))},e.setUser=function(t){console.log(t),e.state.socket.emit("USER_TO_USERS",t),e.setState({user:t})},e.checkUser=function(t,a){console.log("checking user with name ".concat(t)),e.state.socket.emit("CHECKUSER",t,(function(t){var s=t?"":"The name you entered does not match our data";e.setState({user:t}),a(s)}))},e.state={socket:null,user:null,users:null,matchedUser:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.initSocket(this.props.socket)}},{key:"render",value:function(){var e=this.state,t=e.socket,a=e.user,s=e.users;return console.log(s),n.a.createElement("div",{className:"container vh-100"},n.a.createElement("div",{className:"element pa4"},a?n.a.createElement(d,{socket:t,user:a,users:s}):n.a.createElement(j,{user:a,socket:t,setUser:this.setUser,users:s,checkUser:this.checkUser})))}}]),t}(s.Component),y=a(36),O=a.n(y),C=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(O.a,{params:{particles:{line_linked:{color:"#FFFFFF"},number:{value:250},size:{value:5}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},style:{width:"100%",background:"#1E90FF",position:"absolute",zIndex:1}}),n.a.createElement("div",{style:{position:"relative",top:0,zIndex:200}},n.a.createElement(w,null)))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(81);c.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.933fbc83.chunk.js.map