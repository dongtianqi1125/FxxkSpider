(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){n(20),e.exports=n(26)},20:function(e,t,n){"use strict";"undefined"==typeof Promise&&(n(21).enable(),window.Promise=n(24)),n(25),Object.assign=n(8)},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(1),l=n(28),r=n(17),c=n(35),s=n(55),o=n(56);l.render(a.createElement(r.HashRouter,null,a.createElement(r.Switch,null,a.createElement(o.default,null,a.createElement(r.Route,{path:"/",exact:!0,component:s.default}),a.createElement(r.Route,{path:"/create",component:c.default})))),document.getElementById("root"),()=>console.log("Page 服务已启动"))},35:function(e,t,n){"use strict";var a=this&&this.__decorate||function(e,t,n,a){var l,r=arguments.length,c=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(c=(r<3?l(c):r>3?l(t,n,c):l(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),c=n(57),s=n(11);let o=class extends r.Component{constructor(e){super(e),this.state={gameName:"",startPage:1,endPage:void 0,task:null,selectType:"1"}}runPoll(e){this.sto=setTimeout(()=>{e&&e(),this.runPoll(e)},1e3)}handleSubmit(e){const{gameName:t,startPage:n,endPage:a}=this.state;e.preventDefault(),s.default.post("/api/task",{gameName:t,startPage:n,endPage:a}).then(e=>{0===e.data.error&&(alert("创建成功"),this.props.history.push("/"))})}handleValueChange(e){const t={};t[e.target.name]=e.target.value,this.setState(t)}render(){return r.createElement("section",{style:{textAlign:"center"}},r.createElement("h1",null,"创建任务单"),r.createElement("form",{onSubmit:this.handleSubmit},r.createElement("label",null,"游戏名："),r.createElement("input",{type:"text",onChange:this.handleValueChange,name:"gameName"}),r.createElement("br",null),r.createElement("br",null),r.createElement("label",null,"开始页数："),r.createElement("input",{type:"number",onChange:this.handleValueChange,name:"startPage"}),r.createElement("br",null),r.createElement("br",null),r.createElement("label",null,"结束页数："),r.createElement("input",{type:"number",onChange:this.handleValueChange,name:"endPage"}),r.createElement("br",null),r.createElement("br",null),r.createElement("button",{type:"onSubmit"},"开始    ！")))}};o=a([c.autobind,l("design:paramtypes",[Object])],o),t.default=o},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(1),l=n(11);t.default=class extends a.Component{constructor(e){super(e),this.state={dataSource:[]}}componentDidMount(){l.default.get("/api/task").then(e=>this.setState({dataSource:e.data}))}renderStatus(e){switch(e){case-1:return"运行中";case 0:return"运行失败";case 1:return"成功！"}}handleExport(e){l.default.get(`/api/task/${e._id}/export`).then(e=>{0===e.data.error&&location.reload()})}renderResultUrl(e){if(1===e.status)return e.resultUrl?a.createElement("p",null,"数据下载链接：",a.createElement("a",{href:`/${e.resultUrl}`},e.resultUrl)):a.createElement("p",null,a.createElement("button",{onClick:this.handleExport.bind(this,e)},"导出数据"))}render(){const{dataSource:e}=this.state;return a.createElement("section",null,a.createElement("h1",null,"任务单列表："),e.map(e=>a.createElement("section",{style:{background:"#818181",margin:"20px 20px",color:"white"}},a.createElement("p",null,"描述：",e.desc),a.createElement("p",null,"创建时间：",new Date(e.createdAt).toLocaleTimeString()),a.createElement("p",null,"状态：",this.renderStatus(e.status)),this.renderResultUrl(e))))}}},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(1),l=n(17);t.default=class extends a.Component{render(){return a.createElement("div",null,a.createElement("nav",{style:{textAlign:"center",width:"100vw",margin:"0 0 50px 0"}},a.createElement(l.Link,{to:"/",style:{margin:"0 30px "}},"当前任务单"),a.createElement(l.Link,{to:"/create",style:{margin:"0 30px "}},"创建新任务单")),this.props.children)}}}},[[19,2,1]]]);