(this["webpackJsonpmy-first-resume"]=this["webpackJsonpmy-first-resume"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},13:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",activeLink:"Dialogs_activeLink__34w6e",messages:"Dialogs_messages__1w_Up",item:"Dialogs_item__29pPd"}},15:function(e,t,n){e.exports={number:"counter_number__3TH36",forfive:"counter_forfive__1dAkR",ac:"counter_ac__3FoK1"}},22:function(e,t,n){e.exports={toDoList:"ToDoList_toDoList__2PB_l","active-filter":"ToDoList_active-filter__1JGSA","is-done":"ToDoList_is-done__3VUte",error:"ToDoList_error__EZ88M"}},23:function(e,t,n){e.exports={header:"Header_header__1VCKf",item:"Header_item__3IlmB",gridContainer:"Header_gridContainer__3Bd07",a:"Header_a__1Re6_"}},32:function(e,t,n){e.exports={item:"MainInfo_item__2HXZk",container:"MainInfo_container__29xve",centered:"MainInfo_centered__12BOe"}},35:function(e,t,n){e.exports={a:"Contacts_a__TLfP-"}},37:function(e,t,n){e.exports={item:"Users_item__2_u8d",selectedPage:"Users_selectedPage__J63sh"}},38:function(e,t,n){e.exports={item:"MyPosts_item__pQ6IE",post:"MyPosts_post__14H_U"}},53:function(e,t,n){e.exports={item:"Post_item__3Pfp9"}},54:function(e,t,n){e.exports={works:"WorkExamples_works__3VTTk"}},55:function(e,t,n){e.exports={ac:"Rating_ac__32mFP"}},56:function(e,t,n){e.exports={ac:"Accordion_ac__1qDHp"}},57:function(e,t,n){e.exports={item:"MoreInformation_item__3wulB"}},58:function(e,t,n){e.exports={main:"AboutMe_main__28Sd6"}},59:function(e,t,n){e.exports={item:"Music_item__2ushy"}},64:function(e,t,n){},65:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(26),a=n.n(c),r=(n(64),n(65),n(23)),o=n.n(r),l=n(35),d=n.n(l),u=n(0),j=function(){return Object(u.jsxs)("div",{style:{gridArea:"c"},children:[Object(u.jsxs)("div",{className:d.a.a,children:["Phone number",Object(u.jsx)("a",{href:"tel:=375(25)5413874",children:"  +375(25) 541-38-74 "})]}),Object(u.jsxs)("div",{className:d.a.a,children:["Mailing address",Object(u.jsx)("a",{href:"mailto:diana.lyah.96@mail.ru",children:"  diana.lyah.96@mail.ru "})]})]})},b=function(){return Object(u.jsxs)("header",{className:"".concat(o.a.header," ").concat(o.a.item," ").concat(o.a.gridContainer),children:[Object(u.jsx)("img",{style:{gridArea:"p"},alt:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"}),Object(u.jsx)("a",{href:"mailto:diana.lyah.96@mail.ru",className:o.a.a,children:" Invitation to Interview "}),Object(u.jsx)(j,{})]})},h=n(12),p=n.n(h),O=n(6),m=function(){return Object(u.jsxs)("nav",{className:p.a.nav,children:[Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(O.b,{to:"/mainPage",activeClassName:p.a.activeLink,children:"Main page"})}),Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(O.b,{to:"/moreInformaition",activeClassName:p.a.activeLink,children:"More about me"})}),Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(O.b,{to:"/message",activeClassName:p.a.activeLink,children:"Message"})}),Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(O.b,{to:"/music",activeClassName:p.a.activeLink,children:"Music for soul"})}),Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(O.b,{to:"/users",activeClassName:p.a.activeLink,children:"Friends"})})]})},g=n(27),f=n(28),x=n(31),v=n(30),_=n(2),y="FOLLOW",k="UNFOLLOW",w="SET-USERS",D="SET-CURRENT-PAGE",C="SET-TOTAL-USERS-COUNT",P="TOGGLE-IS-FETCHING",T={users:[],pageSize:7,totalUsersCount:0,currentPage:1,isFetching:!0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var n=e.users.map((function(e){return e.id===t.userId?Object(_.a)(Object(_.a)({},e),{},{followed:!1}):e}));return Object(_.a)(Object(_.a)({},e),{},{users:n});case k:var s=e.users.map((function(e){return e.id===t.userId?Object(_.a)(Object(_.a)({},e),{},{followed:!0}):e}));return Object(_.a)(Object(_.a)({},e),{},{users:s});case w:return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case D:return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case C:return Object(_.a)(Object(_.a)({},e),{},{totalUsersCount:t.totalUsersCount});case P:return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});default:return e}},S=n(14),I=n(20),E=n.n(I),B=n(37),L=n.n(B),F=n.p+"static/media/man.1c0b4819.png",U=function(e){var t=Array(10).fill(0).map((function(e,t){return t+1}));return Object(u.jsxs)("div",{className:L.a.item,children:[Object(u.jsx)("div",{children:t.map((function(t){return Object(u.jsxs)("span",{onClick:function(){e.onPageChanged(t)},className:e.currentPage===t?L.a.selectedPage:"",children:[" ",t," "]})}))}),e.usersPage.map((function(t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(O.b,{to:"/mainPage/"+t.id,children:Object(u.jsx)("img",{src:t.photos.small?t.photos.small:F,alt:"Man"})})}),t.name,t.followed?Object(u.jsx)("button",{onClick:function(){return e.followed(t.id)},children:"UnFollow"}):Object(u.jsx)("button",{onClick:function(){return e.unfollowed(t.id)},children:"Follow"}),Object(u.jsx)("div",{children:t.status}),Object(u.jsx)("div",{children:"user.location.country"}),Object(u.jsx)("div",{children:"user.location.city"})]},t.id)}))]})},M=n.p+"static/media/loaderGif.85e15ac8.svg",A=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:M,alt:"loader"})})},R=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(g.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setToggleIsFetchig(!0),E.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize)).then((function(t){e.props.setToggleIsFetchig(!1),e.props.setUsers(t.data.items)}))},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.setToggleIsFetchig(!0),E.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.setToggleIsFetchig(!1),e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[this.props.isFetching?Object(u.jsx)(A,{}):null,Object(u.jsx)(U,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,usersPage:this.props.usersPage,followed:this.props.followed,unfollowed:this.props.unfollowed,onPageChanged:this.onPageChanged})]})}}]),n}(i.a.Component),G=Object(S.b)((function(e){return{usersPage:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{followed:function(e){return{type:y,userId:e}},unfollowed:function(e){return{type:k,userId:e}},setUsers:function(e){return{type:w,users:e}},setCurrentPage:function(e){return{type:D,currentPage:e}},setTotalUsersCount:function(e){return{type:C,totalUsersCount:e}},setToggleIsFetchig:function(e){return{type:P,isFetching:e}}})(R),H=n(38),V=n.n(H),W=n(53),z=n.n(W),K=function(e){return Object(u.jsxs)("div",{className:z.a.item,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{alt:"Can not add",src:"https://hi-news.ru/wp-content/uploads/2016/05/razum-750x521.jpg"}),e.message]}),Object(u.jsx)("div",{children:Object(u.jsxs)("span",{children:[e.likecount," Likes"]})})]})},J=function(e){var t=e.profilePage.postsData.map((function(e){return Object(u.jsx)(K,{message:e.message,likecount:e.likecount})})),n=i.a.createRef();return Object(u.jsxs)("div",{className:V.a.item,children:[Object(u.jsx)("h3",{children:"My posts"}),Object(u.jsx)("textarea",{ref:n,onChange:function(){if(n.current){var t=n.current.value;e.postChange(t)}},value:e.profilePage.newPostText,onKeyPress:function(t){"Enter"===t.key&&e.addPost()}}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){e.addPost()},children:"Add motivation"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){e.deletePost()},children:"Remove"})}),Object(u.jsx)("div",{className:V.a.post,children:t})]})},X=n(18),Q=n(4),q="ADD-POST",Y="UPDATE-NEW-POST-TEXT",Z="DELETE-POSTS",$="SET-USER-PROFILE",ee={postsData:[{id:Object(Q.v1)(),message:"You see things and say \u2018Why?\u2019, but I dream things and say \u2018Why not?\u2019 George Bernard Shaw",likecount:29},{id:Object(Q.v1)(),message:"Success is going from failure to failure without losing your enthusiasm. Winston Churchill",likecount:21},{id:Object(Q.v1)(),message:"Genius is one percent inspiration, and ninety-nine percent perspiration. Thomas Edison",likecount:25}],newPostText:"",profile:{}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(_.a)(Object(_.a)({},e),{},{newPostText:"",postsData:[].concat(Object(X.a)(e.postsData),[{id:Object(Q.v1)(),message:e.newPostText,likecount:0}])});case Y:return Object(_.a)(Object(_.a)({},e),{},{newPostText:t.newText});case Z:return Object(_.a)(Object(_.a)({},e),{},{postsData:[]});case $:return Object(_.a)(Object(_.a)({},e),{},{profile:t.profile});default:return e}},ne=Object(S.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{postChange:function(t){e(function(e){return{type:Y,newText:e}}(t))},addPost:function(){e({type:q})},deletePost:function(){e({type:Z})}}}))(J),se=n(32),ie=n.n(se),ce=function(e){var t,n,s;return e.profile?Object(u.jsxs)("div",{className:ie.a.container,children:[Object(u.jsx)("img",{alt:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",src:"https://nanosemantics.ai/wp-content/uploads/2019/12/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-1024x683.jpg"}),Object(u.jsxs)("div",{className:"".concat(ie.a.item," ").concat(ie.a.centered),children:["I like to learn, I like to write code and see the result of my work.",Object(u.jsx)("div",{children:"I am the frontend specialist that you are looking for!"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:null===(t=e.profile.photos)||void 0===t?void 0:t.large,alt:"My face"}),"Information about me: I ",e.profile.fullName," ",e.profile.aboutMe,"Contacts: github: ",null===(n=e.profile.contacts)||void 0===n?void 0:n.github,"instagram: ",null===(s=e.profile.contacts)||void 0===s?void 0:s.instagram]})]})]}):Object(u.jsx)(A,{})},ae=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(ce,{profile:e.profile}),Object(u.jsx)(ne,{})]})},re=n(3),oe=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.userID||(this.props.match.params.userID="2"),E.a.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(this.props.match.params.userID)).then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(u.jsx)(ae,Object(_.a)({},this.props))}}]),n}(i.a.Component),le=Object(re.g)(oe),de=Object(S.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:$,profile:e}}})(le),ue=n(54),je=n.n(ue),be=n(7),he=n(22),pe=n.n(he),Oe=function(e){var t=e.tasks.map((function(t){return Object(u.jsxs)("li",{className:"".concat(!0===t.isDone?"is-done":""," ").concat(pe.a.customcCheckbox),children:[Object(u.jsx)("input",{type:"checkbox",onChange:function(n){return e.changeTaskStatus(t.id,n.currentTarget.checked)},checked:t.isDone,value:t.title}),Object(u.jsx)("span",{children:t.title}),Object(u.jsx)("button",{onClick:function(){return e.removeTask(t.id)},children:"X"})]},t.id)})),n=Object(s.useState)(""),i=Object(be.a)(n,2),c=i[0],a=i[1],r=Object(s.useState)(!1),o=Object(be.a)(r,2),l=o[0],d=o[1],j=function(){var t=c.trim();t?(e.addTask(t),a("")):d(!0),a("")},b="all"===e.filter?"active-filter":"",h="active"===e.filter?"active-filter":"",p="completed"===e.filter?"active-filter":"",O=l?Object(u.jsx)("div",{style:{backgroundColor:"red",color:"white",fontWeight:900,textAlign:"center"},children:"Title is required"}):"";return Object(u.jsxs)("div",{className:pe.a.toDoList,children:[Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:e.title})}),Object(u.jsx)("input",{className:l?"error":"",onChange:function(e){d(!1),a(e.currentTarget.value)},value:c,onKeyPress:function(e){(e.ctrlKey||"Enter"===e.key)&&j()},placeholder:"Write something"}),O,Object(u.jsx)("button",{onClick:j,children:"+"}),Object(u.jsx)("ul",{children:t}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:b,onClick:function(){return e.changeFilter("all")},children:"All"}),Object(u.jsx)("button",{className:h,onClick:function(){return e.changeFilter("active")},children:"Active"}),Object(u.jsx)("button",{className:p,onClick:function(){return e.changeFilter("completed")},children:"Completed"})]})]})},me=function(){var e=Object(s.useState)([{id:Object(Q.v1)(),title:"HTML",isDone:!0},{id:Object(Q.v1)(),title:"CSS",isDone:!0},{id:Object(Q.v1)(),title:"React",isDone:!0},{id:Object(Q.v1)(),title:"Redux",isDone:!0}]),t=Object(be.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)("all"),a=Object(be.a)(c,2),r=a[0],o=a[1],l=n;return"active"===r?l=n.filter((function(e){return!1===e.isDone})):"completed"===r&&(l=n.filter((function(e){return!0===e.isDone}))),Object(u.jsx)("div",{className:pe.a.works,children:Object(u.jsx)(Oe,{title:"I learned:",tasks:l,filter:r,removeTask:function(e){i(n.filter((function(t){return t.id!==e})))},changeFilter:o,addTask:function(e){var t={id:Object(Q.v1)(),title:e,isDone:!1};i([t].concat(Object(X.a)(n)))},changeTaskStatus:function(e,t){i(n.map((function(n){return n.id===e?Object(_.a)(Object(_.a)({},n),{},{isDone:t}):n})))}})})},ge=function(e){var t=e.number,n=(e.setNumber,e.maxValue),s=(e.minValue,e.classNameForNumber);return Object(u.jsx)("div",{style:t!==n?{backgroundColor:"#E6E6FA"}:{backgroundColor:"#D8BFD8"},children:Object(u.jsx)("div",{className:s,children:t})})},fe=n(15),xe=n.n(fe),ve=function(e){var t=e.incButton,n=e.resetButton,s=e.disabledForInc,i=e.disabledForReset;return Object(u.jsxs)("span",{children:[Object(u.jsx)("button",{className:xe.a.button,onClick:t,disabled:s,children:"inc"}),Object(u.jsx)("button",{className:xe.a.button,onClick:n,disabled:i,children:"reset"})]})},_e=function(){var e=Object(s.useState)(0),t=Object(be.a)(e,2),n=t[0],i=t[1],c=5!==n?"".concat(xe.a.number):"".concat(xe.a.number," ").concat(xe.a.forfive),a=5===n,r=0===n;return Object(u.jsxs)("div",{className:xe.a.ac,children:[Object(u.jsx)(ge,{number:n,setNumber:i,maxValue:5,minValue:0,classNameForNumber:c}),Object(u.jsx)(ve,{incButton:function(){n<5&&i(n+1)},resetButton:function(){return i(0)},disabledForInc:a,disabledForReset:r})]})},ye=n(55),ke=n.n(ye);function we(e){var t=e.selected,n=e.onClick;return Object(u.jsx)("span",{onClick:n,style:{cursor:"pointer"},children:t?"\u2605":"\u2606"})}function De(e){var t=Object(s.useState)(e.value),n=Object(be.a)(t,2),i=n[0],c=n[1];return Object(u.jsxs)("div",{className:ke.a.ac,children:["You can change rating",Object(u.jsx)("div",{children:Array(e.maxValue).fill(null).map((function(e,t){return Object(u.jsx)(we,{selected:t<i,onClick:function(){return c(t+1)}})}))})]})}var Ce=n(56),Pe=n.n(Ce);function Te(e){return Object(u.jsx)("h2",{children:e.title})}function Ne(){return Object(u.jsxs)("ul",{style:{textAlign:"center"},children:[Object(u.jsx)("h4",{children:"Three steps to success"}),Object(u.jsx)("li",{children:"1. Choose for yourself one area in which you want to develop and achieve excellent results."}),Object(u.jsx)("li",{children:"2. You must be surrounded by people who are engaged in this business."}),Object(u.jsx)("li",{children:"3. Daily practice. Daily hard work is the key to success. "})]})}function Se(e){var t=Object(s.useState)(!0),n=Object(be.a)(t,2),i=n[0],c=n[1];return Object(u.jsxs)("div",{className:Pe.a.ac,style:i?{height:"300px"}:{height:"500px"},children:[Object(u.jsx)(Te,{title:e.titleValue}),Object(u.jsx)("button",{onClick:function(){return c(!i)},children:i?"Show":"Collapse"}),!i&&Object(u.jsx)(Ne,{})]})}function Ie(){var e=Object(s.useState)(!1),t=Object(be.a)(e,2),n=t[0],i=t[1],c={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",backgroundColor:n?"green":"white"},a={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",marginLeft:"2px",padding:"2px",backgroundColor:n?"white":"red"},r={width:"30px",height:"30px",borderRadius:"15px",border:"1px solid black",display:"inline-block",marginLeft:"10px",backgroundColor:n?"green":"red"};return Object(u.jsxs)("div",{style:{border:"1px solid gray",height:"70px",borderRadius:"25px",padding:"12px"},children:[Object(u.jsx)("div",{style:c,onClick:function(){return i(!0)},children:"On"}),Object(u.jsx)("div",{style:a,onClick:function(){return i(!1)},children:"Off"}),Object(u.jsx)("div",{style:r,children:" "})]})}var Ee=function(){return Object(u.jsxs)("div",{className:je.a.works,children:[Object(u.jsx)(me,{}),Object(u.jsx)(_e,{}),Object(u.jsx)(Ie,{}),Object(u.jsx)(Se,{titleValue:"If you want to see something interesting, then click on me"}),Object(u.jsx)(De,{value:3,maxValue:5})]})},Be=n(57),Le=n.n(Be),Fe=n(58),Ue=n.n(Fe),Me=function(){return Object(u.jsxs)("div",{className:Ue.a.maim,children:[Object(u.jsxs)("div",{style:{padding:"20px"},children:["I mastered it on my own native js at ",Object(u.jsx)("a",{href:"https://learn.javascript.ru/",children:"https://learn.javascript.ru/"})]}),Object(u.jsx)("div",{style:{paddingLeft:"20px"},children:Object(u.jsx)("b",{children:"Completed projects:"})}),Object(u.jsxs)("div",{style:{paddingLeft:"20px"},children:[Object(u.jsxs)("div",{style:{paddingLeft:"10px"},children:[" ",Object(u.jsx)("b",{children:"A"})," single-page application in React with TypeScript connection (props, typing), Redux, which includes the use of hooks: useState (filter, conditional rendering), useEffect."]}),Object(u.jsxs)("div",{style:{paddingLeft:"10px"},children:[" ",Object(u.jsx)("b",{children:"T"}),"o do List, Counter, Accordin, Rating."]}),Object(u.jsxs)("div",{style:{paddingLeft:"10px"},children:[" ",Object(u.jsx)("b",{children:"W"}),"riting unit tests for your applications."]})]}),Object(u.jsxs)("div",{style:{padding:"20px"},children:["GitHub link: ",Object(u.jsx)("a",{href:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",children:"https://github.com/Diana-ctrl"})]}),Object(u.jsxs)("div",{style:{padding:"20px"},children:[Object(u.jsx)("div",{children:"Links to completed tasks: "}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"https://leetcode.com/Diana_Lyah/",children:"https://leetcode.com/Diana_Lyah/"})}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"https://www.codewars.com/users/Diana-ctrl",children:"https://www.codewars.com/users/Diana-ctrl"})}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",children:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"})})]}),Object(u.jsxs)("div",{style:{padding:"20px"},children:[Object(u.jsx)("div",{children:"2021"}),"Programming courses in ",Object(u.jsx)("a",{href:"https://it-incubator.by/",children:"IT-INCUBATOR"}),Object(u.jsx)("div",{children:"Front-end development"}),Object(u.jsx)("div",{children:"2020"}),Object(u.jsx)("a",{href:"https://abitur.bsuir.by/programmnoe-obespechenie-informatsionnykh-tekhnologiy",children:"Belarusian State University of Informatics and Radioelectronics"}),Object(u.jsx)("div",{children:"Incomplete distance education, Information technology software"}),Object(u.jsx)("div",{children:"2019"}),Object(u.jsx)("a",{href:"https://skyengschool.com/",children:"Skyeng: Online English School"}),Object(u.jsx)("div",{children:"General English, Pre-Intermediate"}),Object(u.jsx)("div",{children:"2018"}),Object(u.jsx)("a",{href:"https://by.belstu.by/",children:"Belarusian State Technological University"}),Object(u.jsx)("div",{children:"Organic Technology, Certification Specialist"})]})]})},Ae=function(){return Object(u.jsx)("div",{className:Le.a.item,children:Object(u.jsx)(Me,{})})},Re=n(59),Ge=n.n(Re),He=function(){return Object(u.jsx)("div",{className:Ge.a.item,children:"Music for soul"})},Ve=n(13),We=n.n(Ve),ze=function(e){return Object(u.jsxs)("div",{className:We.a.dialogs+" "+We.a.active+" "+We.a.item,children:[Object(u.jsx)("img",{src:e.photo,alt:"Can not add"}),Object(u.jsx)(O.b,{to:"/dialogs/"+e.id,activeClassName:We.a.activeLink,children:e.name})]})},Ke=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:We.a.massage,children:e.message})})},Je=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(u.jsx)(ze,{id:e.id,name:e.name,photo:e.photo},e.id)})),n=e.dialogsPage.messages.map((function(e){return Object(u.jsx)(Ke,{message:e.message},e.id)})),s=i.a.createRef();return Object(u.jsxs)("div",{className:We.a.dialogs,children:[Object(u.jsx)("div",{className:We.a.dialogsItems,children:t}),Object(u.jsxs)("div",{className:We.a.messages,children:[n,Object(u.jsx)("textarea",{ref:s,onChange:function(){s.current&&e.messageChange(s.current.value)},value:e.dialogsPage.newMessageText,onKeyPress:function(t){"Enter"===t.key&&e.addMessage()}}),Object(u.jsx)("button",{onClick:function(){e.addMessage()},children:"Add message"})]})]})},Xe="UPDATE-NEW-MESSAGE-TEXT",Qe="ADD-MESSAGE",qe={dialogs:[{id:Object(Q.v1)(),name:"IT-INCUBATOR",photo:"https://yt3.ggpht.com/ytc/AKedOLTG4icr2chj7SuttAtEnnqP7KS20Xmc3CQcokQ0CQ=s900-c-k-c0x00ffffff-no-rj"},{id:Object(Q.v1)(),name:"Employer",photo:"https://new-variant.ru/wp-content/uploads/2019/06/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BE%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C.jpg"},{id:Object(Q.v1)(),name:"English courses",photo:"https://www.slivki.by/znijki-media/w522_322/default/1009921/kursy-obuchenie-minsk-skidka-englishbel-1.jpg"},{id:Object(Q.v1)(),name:"Minsk Technical University",photo:"https://upload.wikimedia.org/wikipedia/commons/9/94/Don_state_technical_university.JPG"}],messages:[{id:Object(Q.v1)(),message:"Hi"},{id:Object(Q.v1)(),message:"How are you? How is the learning?"},{id:Object(Q.v1)(),message:"Do our courses help you?"}],newMessageText:""},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:return Object(_.a)(Object(_.a)({},e),{},{newMessageText:t.newText});case Qe:return Object(_.a)(Object(_.a)({},e),{},{newMessageText:"",messages:[].concat(Object(X.a)(e.messages),[{id:Object(Q.v1)(),message:e.newMessageText}])});default:return e}},Ze=Object(S.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(){e({type:Qe})},messageChange:function(t){e(function(e){return{type:Xe,newText:e}}(t))}}}))(Je);var $e=function(){return"/"===Object(re.f)().pathname?Object(u.jsx)(re.a,{to:"/mainPage"}):Object(u.jsxs)("div",{className:"app-wrapper",children:[Object(u.jsx)(b,{}),Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:"app-wrapper-content",children:[Object(u.jsx)(re.b,{path:"/mainPage/:userID?",render:function(){return Object(u.jsx)(de,{})}}),Object(u.jsx)(re.b,{path:"/moreInformaition",render:function(){return Object(u.jsx)(Ae,{})}}),Object(u.jsx)(re.b,{exact:!0,path:"/message",render:function(){return Object(u.jsx)(Ze,{})}}),Object(u.jsx)(re.b,{path:"/music",render:function(){return Object(u.jsx)(He,{})}}),Object(u.jsx)(re.b,{path:"/users",render:function(){return Object(u.jsx)(G,{})}})]}),Object(u.jsx)(Ee,{})]})},et=n(39),tt=Object(et.a)({profilePage:te,dialogsPage:Ye,usersPage:N}),nt=Object(et.b)(tt);a.a.render(Object(u.jsx)(O.a,{basename:"/resume",children:Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(S.a,{store:nt,children:Object(u.jsx)($e,{})})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.4e90d514.chunk.js.map