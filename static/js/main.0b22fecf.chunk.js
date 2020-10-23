(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{37:function(e,t,a){e.exports=a(83)},42:function(e,t,a){},71:function(e,t){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(34),c=a.n(r),i=(a(42),a(1)),o=a(2),l=a(4),u=a(3),m=a(5),p=a(35),f=a.n(p),h=(a(74),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.users,n=e.setReceiver,r=e.setPublicChat,c=a&&t?Object.keys(a).filter((function(e){return a[e].name!==t.name})).map((function(e,t){return console.log(a[e].name),console.log(a[e]),s.a.createElement("div",{className:"users flex flex-column items-center"},s.a.createElement("button",{className:"private-user-btn",key:t,onClick:function(){return n(a[e])}},"chat with ",s.a.createElement("span",{className:"ttc"},a[e].name)))})):null;return s.a.createElement("div",{className:"flex flex-column items-center"},s.a.createElement("div",{className:"flex w-100 justify-center"},s.a.createElement("button",{className:"public-btn",onClick:r},"Public Chat")),s.a.createElement("div",{className:"divider"}),s.a.createElement("p",{className:"private-users-title"},"Private chat with users online"),a&&t&&1===Object.keys(a).length&&s.a.createElement("p",{className:"no-users-warning"},"No users online!"),c&&c)}}]),t}(n.Component)),v=a(18),g=(a(75),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onMessageSubmit=function(t){t.preventDefault();var a=e.props.setMessage;if(e.state.message.length>=0)a(e.state.message),e.setState({message:""});else{var n=e.state.errors;e.setState({errors:[].concat(Object(v.a)(n),["The message should be at least one character"])})}},e.onMessageChange=function(t){var a=t.target,n=e.props.setTyping,s=a.value.length>=1;e.setState({message:a.value}),console.log(e.state.message),n(s)},e.submitText=function(t){13===t.keyCode&&e.onMessageSubmit(t)},e.state={message:"",errors:[]},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.errors,a=this.props.userError,n=[];a.length>0&&(n=[].concat(Object(v.a)(t),[a]));var r=n.length>0?n.map((function(e,t){return s.a.createElement("div",{key:t},e)})):null,c=t.length>0?"bg-red":"";return s.a.createElement("div",{className:"tc bg-grey"},s.a.createElement("form",{className:"w-100 flex flex-row"},s.a.createElement("textarea",{className:"w-100 h4 message-input",id:"message",placeholder:"Enter your message here",ref:function(t){e.textInput=t},onChange:this.onMessageChange,value:this.state.message,onKeyDown:this.submitText})),s.a.createElement("div",{className:c},r))}}]),t}(n.Component)),b=(a(76),a(77),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).printPublicMessages=function(t){var a=e.props.user;return t?t.map((function(e,n){return console.log(e),console.log(e.time),s.a.createElement("div",{key:n,className:a&&e.sender&&a.name===e.sender.name?"red f5 ph3 pv2":""},t&&s.a.createElement("div",null,"Message from ",e.user.name[0].toUpperCase()+e.user.name.slice(1),s.a.createElement("span",null," sent at ",e.time)),s.a.createElement("div",{className:"fw6"},e.message))})):null},e.printPrivateMessagesOfActiveReceiver=function(t){return t.map((function(t){return console.log(t),console.log(e.props.user),s.a.createElement("div",{className:""},s.a.createElement("div",{key:t.id,className:"flex items-center justify-start"},e.props.user.name!==t.receiver.name&&s.a.createElement("p",{className:"pink fw3 f6"},e.props.user.name," to ",t.receiver.name),s.a.createElement("span",{className:"ml2 green"},"Sent at ",t.time)),s.a.createElement("p",{className:"message-text"},t.message))}))},e.privateMessagesOfActiveReceiver=function(t){var a=e.props.receiver;console.log(a.name);var n=t.filter((function(e){return console.log(a.name,e.receiver.name),e.receiver.name===a.name}));return console.log(n,t),n},e.state={},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.publicMessages,a=e.privateMessages,n=e.activePrivateMessages,r=e.oppositeChatter,c=e.popup;console.log(t,a,n,r);"fw3 f6 ".concat(c?"popup":"");var i=t&&t.length>0?this.printPublicMessages(t):null;return s.a.createElement("div",{className:"w-100 h-100 bg-white flex br2"},s.a.createElement("div",{className:"bg-light-gray w-50 pa2"},s.a.createElement("div",{className:"tc fw3 f5 ttu mb2"},s.a.createElement("span",{className:"fw4 f4"},"public Messages")),i),s.a.createElement("div",{className:"bl bw2 pa2 w-50"},s.a.createElement("div",{className:"tc fw3 f5 ttu"},s.a.createElement("span",{className:"fw4 f4 mb2"},"private Messages")),0===n.length&&s.a.createElement("p",null,"So far no messages sent!"),n.length>0&&s.a.createElement("div",{className:""},s.a.createElement("p",null,this.printPrivateMessagesOfActiveReceiver(this.privateMessagesOfActiveReceiver(n))))))}}]),t}(n.Component)),d=(a(78),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).initSocket=function(t){t.on("MESSAGE",(function(t,a,n,s,r){a?e.setState({publicMessages:t}):e.setState({activePrivateMessages:t,oppositeChatter:n,popup:r,receiver:s})})),t.on("TYPING",(function(t,a){e.setState({isTyping:t,typer:a})}))},e.setReceiver=function(t){e.setState({receiver:t,isPublic:!1}),console.log(t)},e.setPublicChat=function(){e.setState({receiver:null,isPublic:!0})},e.setMessage=function(t){var a=e.props,n=a.socket,s=a.user,r=e.state,c=r.isPublic,i=r.receiver;console.log(s,i),e.setReceiver(e.state.receiver),s?n.emit("MESSAGE",t,s,c,i):e.setState({error:"before sending a message, please first log in"}),e.setTyping(!1)},e.setTyping=function(t){var a=e.props,n=a.socket,s=a.user,r=e.state,c=r.isPublic,i=r.receiver;n.emit("TYPING",t,c,s,i)},e.state={receiver:null,oppositeChatter:null,publicMessages:null,privateMessages:null,activePrivateMessages:[],isPublic:!0,error:"",typer:null,isTyping:!1,popup:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.initSocket(this.props.socket)}},{key:"render",value:function(){var e=this.state,t=e.oppositeChatter,a=e.error,n=e.publicMessages,r=e.privateMessages,c=e.activePrivateMessages,i=e.isPublic,o=e.popup,l=e.receiver,u=this.props,m=u.user,p=u.users;return console.log(c,n,r,t,o,i,l),s.a.createElement("div",{className:"chatsection"},s.a.createElement("div",{className:"users bg-light-blue"},s.a.createElement("div",{className:"f4 fw6 mb2 tc red ttc"},m&&m.name),s.a.createElement(h,{users:p,user:m,setReceiver:this.setReceiver,setPublicChat:this.setPublicChat})),s.a.createElement("div",{className:"messages"},s.a.createElement(b,{oppositeChatter:t,publicMessages:n,privateMessages:r,activePrivateMessages:c,user:m,isPublic:i,popup:o,receiver:l})),s.a.createElement("div",{className:"input"},s.a.createElement(g,{setMessage:this.setMessage,userError:a,setTyping:this.setTyping})))}}]),t}(n.Component)),E=(a(79),a(80),a(13)),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onInputChange=function(t){var a=t.target;e.setState({name:a.value}),console.log(e.state.name)},e.onFormSubmit=function(t){var a=e.props,n=a.socket,s=a.setUser;if(t.preventDefault(),e.state.name.length<=0){e.setState({error:"You have not entered any name"})}else n.emit("NAME",e.state.name,(function(t){var a=t.error,n=t.user;console.log("error: ".concat(a,", user: ").concat(JSON.stringify(n))),n?(s(n),e.setState({error:""})):e.setState({error:a})}))},e.textInput=s.a.createRef(),e.state={name:"",user:null,error:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.textInput.current.focus()}},{key:"render",value:function(){console.log(this.props.socket);var e=this.state.error;return s.a.createElement("div",{className:"w-50"},s.a.createElement("div",{className:"tc h5 bg-white o-30 flex flex-column justify-center items-center ttu dark-blue grow"},s.a.createElement("div",{className:"mb4 f3 fw4"},"Enter Your Name to Register for Chat"),s.a.createElement("form",{className:"w-50 f4 flex",onSubmit:this.onFormSubmit},s.a.createElement("input",{className:"ph2 ttc ml3 f3 fw7 black",onChange:this.onInputChange,ref:this.textInput,id:"name",placeholder:"Enter Your Name",value:this.state.name}),s.a.createElement("button",{className:"ml2 bg-light-blue fw9 ttu"},"ok"))),e.length>0&&s.a.createElement("div",{className:"f4 fw3 white mt3 tracked ttu tc flex justify-center items-center"},e," ",s.a.createElement(E.a,{color:"red",size:"1.5em"})))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onInputChange=function(t){var a=t.target;e.setState({name:a.value})},e.onFormSubmit=function(t){var a=e.state.name,n=e.props.checkUser;if(t.preventDefault(),a.length<=0){e.setState({error:"You have not entered any name"})}else n(a,(function(t){e.setState({error:t})}))},e.textInput=s.a.createRef(),e.state={name:"",error:"",matchedUser:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.textInput.current.focus()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.name;return s.a.createElement("div",{className:"w-50"},s.a.createElement("div",{className:"tc h5 bg-white o-30 flex flex-column justify-center items-center ttu dark-blue grow"},s.a.createElement("div",{className:"mb4 f3 fw7 black"},"Enter your name to login"),s.a.createElement("form",{className:"w-50 f4 flex",onSubmit:this.onFormSubmit},s.a.createElement("input",{className:"ph2 ttc ml3 f3 fw7 black",onChange:this.onInputChange,ref:this.textInput,id:"name",placeholder:"Enter Your Name",value:a}),s.a.createElement("button",{className:"ml2 bg-light-blue fw9 ttu"},"ok"))),t.length>0&&s.a.createElement("div",{className:"f4 fw3 white mt3 tracked ttu tc flex justify-center items-center"},t," ",s.a.createElement(E.a,{color:"red",size:"1.5em"})))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onLoginClick=function(){e.setState({loginClicked:!0})},e.onRegisterClick=function(){e.setState({registerClicked:!0})},e.state={loginClicked:!1,registerClicked:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="pa4 f4 br2 grow ma2 ttu tc fw7 dark-gray bg-white o-40",t=this.state,a=t.loginClicked,n=t.registerClicked,r=this.props,c=r.socket,i=r.setUser,o=r.users,l=r.checkUser;return s.a.createElement("div",{className:"container"},a||n?n?s.a.createElement(k,{socket:c,setUser:i}):s.a.createElement(N,{users:o,checkUser:l}):s.a.createElement("div",{className:"auth"},s.a.createElement("div",{className:"login ".concat(e),onClick:this.onLoginClick},"Login"),s.a.createElement("div",{className:"register ".concat(e),onClick:this.onRegisterClick},"Register")))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).initSocket=function(){var t={API_URL:"https://myapp.herokuapp.com"},a=f()(t.API_URL).on("connect",(function(){console.log("connected to server")}));e.setState({socket:a}),a.on("USERS",(function(t){console.log(t),t&&e.setState({users:t})}))},e.setUser=function(t){console.log(t),e.state.socket.emit("USER_TO_USERS",t),e.setState({user:t})},e.checkUser=function(t,a){console.log("checking user with name ".concat(t)),e.state.socket.emit("CHECKUSER",t,(function(t){var n=t?"":"The name you entered does not match our data";e.setState({user:t}),a(n)}))},e.state={socket:null,user:null,users:null,matchedUser:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.initSocket(this.props.socket)}},{key:"render",value:function(){var e=this.state,t=e.socket,a=e.user,n=e.users;return console.log(n),s.a.createElement("div",{className:"container vh-100"},s.a.createElement("div",{className:"element pa4"},a?s.a.createElement(d,{socket:t,user:a,users:n}):s.a.createElement(j,{user:a,socket:t,setUser:this.setUser,users:n,checkUser:this.checkUser})))}}]),t}(n.Component),y=a(36),w=a.n(y),C=(a(81),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(w.a,{params:{particles:{line_linked:{color:"#FFFFFF"},number:{value:250},size:{value:5}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},style:{width:"100%",background:"#1E90FF",position:"absolute",zIndex:1}}),s.a.createElement("div",{style:{position:"relative",top:0,zIndex:200}},s.a.createElement(O,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82);c.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.0b22fecf.chunk.js.map