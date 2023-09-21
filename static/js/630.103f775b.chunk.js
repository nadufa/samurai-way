"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[630],{6630:function(s,e,t){t.r(e),t.d(e,{default:function(){return z}});var o=t(1413),i=t(5671),n=t(3144),r=t(136),a=t(5716),l=t(2791),c="Profile_profile__UraoW",u=t(885),d={profileInfo:"ProfileInfo_profileInfo__cEcwY",descriptionBlock:"ProfileInfo_descriptionBlock__LlPoU",contact:"ProfileInfo_contact__GWXSr",chooseFileInput:"ProfileInfo_chooseFileInput__iP+-1",chooseFileButton:"ProfileInfo_chooseFileButton__0liEG",editOrSaveInfo:"ProfileInfo_editOrSaveInfo__BrV2i",description:"ProfileInfo_description__X6AaZ",fullName:"ProfileInfo_fullName__Pmr+4"},f=t(8388),h=t(184),p=function(s){var e=(0,l.useState)(!1),t=(0,u.Z)(e,2),o=t[0],i=t[1],n=(0,l.useState)(s.status),r=(0,u.Z)(n,2),a=r[0],c=r[1];(0,l.useEffect)((function(){c(s.status)}),[s.status]);return(0,h.jsxs)("div",{children:[!o&&(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Status: "}),(0,h.jsx)("span",{onDoubleClick:function(){i(!0)},children:s.status||"-------"})]}),o&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(s){c(s.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),s.updateStatus(a)},value:a})})]})},j=t(4353),m=t(1117),x=t(704),v=t(9234),P=(0,x.Z)({form:"editProfile"})((function(s){var e=s.handleSubmit,t=s.profile,o=s.error;return(0,h.jsxs)("form",{onSubmit:e,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name:"}),": ",(0,m.Gr)("Full name","fullName",[],m.II,{},"")]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job"}),": ",(0,m.Gr)("","lookingForAJob",[],m.II,{type:"checkbox"},"")]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills"}),": ",(0,m.Gr)("My professional skills","lookingForAJobDescription",[],m.Kx,{},"")]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me"}),": ",(0,m.Gr)("About me","aboutMe",[],m.Kx,{},"")]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(s){return(0,h.jsx)("div",{className:d.contacts,children:(0,h.jsxs)("b",{children:[s,": ",(0,m.Gr)("Full name","contacts."+s,[],m.II,{},"")]})},s)})),(0,h.jsx)("div",{children:(0,h.jsx)("button",{className:d.editOrSaveInfo,children:"save"})}),o&&(0,h.jsx)("div",{className:v.Z.formSummaryError,children:o})]})]})})),_=function(s){var e=s.profile,t=s.isOwner,o=s.goToEditMode;return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:d.fullName+" "+d.description,children:(0,h.jsxs)("span",{children:[(0,h.jsx)("b",{children:"Name"}),": ",e.fullName]})}),(0,h.jsxs)("div",{className:d.description,children:[(0,h.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,h.jsxs)("div",{className:d.description,children:[(0,h.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,h.jsxs)("div",{className:d.description,children:[(0,h.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,h.jsxs)("div",{className:d.description,children:[(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(s){return(0,h.jsx)(b,{contactTitle:s,contactValue:e.contacts[s]},s)}))]}),t&&(0,h.jsx)("div",{children:(0,h.jsx)("button",{className:d.editOrSaveInfo,onClick:o,children:"Edit info"})})]})},b=function(s){var e=s.contactTitle,t=s.contactValue;return(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{className:d.contact,children:e}),": ",t]})},g=function(s){var e,t=s.profile,o=s.status,i=s.updateStatus,n=s.isOwner,r=s.savePhoto,a=s.saveProfile,c=(0,l.useRef)(null),m=(0,l.useState)(!1),x=(0,u.Z)(m,2),v=x[0],b=x[1];if(!t)return(0,h.jsx)(f.Z,{});return(0,h.jsx)("div",{className:d.profileInfo,children:(0,h.jsxs)("div",{className:d.descriptionBlock,children:[(0,h.jsx)("img",{src:(null===(e=t.photos)||void 0===e?void 0:e.large)||j}),n&&(0,h.jsx)("input",{className:d.chooseFileInput,ref:c,type:"file",onChange:function(s){var e;null!==(e=s.target.files)&&void 0!==e&&e.length&&r(s.target.files[0])}}),(0,h.jsx)("button",{className:d.chooseFileButton,onClick:function(){var s;c&&(null===(s=c.current)||void 0===s||s.click())},children:"Change photo"}),v?(0,h.jsx)(P,{initialValues:t,profile:t,onSubmit:function(s){a(s).then((function(){b(!1)}))}}):(0,h.jsx)(_,{profile:t,isOwner:n,goToEditMode:function(){b(!0)}}),(0,h.jsx)(p,{status:o,updateStatus:i})]})})},k="MyPosts_posts__so5M3",I="MyPosts_postsBlock__h8Sj5",N="MyPosts_blockName__SYA+I",S="MyPosts_addPost__1ojcx",y=t(6407),A="Post_item__HSN9y",w=function(s){return(0,h.jsxs)("div",{className:A,children:[(0,h.jsx)("img",{src:"https://shapka-youtube.ru/wp-content/uploads/2020/12/ava-anime-11.jpg",alt:""}),s.message,(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"like "}),s.likesCount]})]})},C=t(6139),Z=t(3079),F=l.memo((function(s){var e=s.posts.map((function(s){return(0,h.jsx)(w,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,h.jsxs)("div",{className:I,children:[(0,h.jsx)("div",{className:N,children:(0,h.jsx)("h3",{children:"My posts"})}),(0,h.jsx)(O,{onSubmit:function(e){console.log(e),s.addPost(e.newPostText)}}),(0,h.jsx)("div",{className:k,children:e})]})})),M=(0,Z.D)(10),O=(0,x.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,h.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,h.jsx)(C.Z,{name:"newPostText",component:m.Kx,placeholder:"Post message",validate:[Z.C,M]}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{className:S,children:"Add post"})})]})})),B=F,E=t(364),T=(0,E.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(e){s((0,y.Pi)(e))}}}))(B),U=function(s){return(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)(g,{savePhoto:s.savePhoto,profile:s.profilePage.profile,status:s.status,updateStatus:s.updateStatus,isOwner:s.isOwner,saveProfile:s.saveProfile}),(0,h.jsx)(T,{})]})},D=t(9271),G=t(2932),J=t(7781),V=function(s){(0,r.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),e.apply(this,arguments)}return(0,n.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId?this.props.match.params.userId:this.props.authorizedUserId?this.props.authorizedUserId:this.props.history.push("/login");s&&(this.props.getUserProfile(s),this.props.getStatus(s))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.match.params.userId!==s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)(U,(0,o.Z)((0,o.Z)({},this.props),{},{profilePage:this.props.profilePage,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),$=function(s){var e;return{profilePage:s.profilePage,status:s.profilePage.status,authorizedUserId:null!==(e=s.auth.userId)&&void 0!==e?e:"",isAuth:s.auth.isAuth}};(0,J.qC)((0,E.$j)($,{getUserProfile:y.et}),D.EN,G.D)(V);var z=(0,J.qC)((0,E.$j)($,{getUserProfile:y.et,getStatus:y.lR,updateStatus:y.Nf,savePhoto:y.Ju,saveProfile:y.Ii}),D.EN)(V)},2932:function(s,e,t){t.d(e,{D:function(){return u}});var o=t(1413),i=t(5987),n=(t(2791),t(9271)),r=t(364),a=t(184),l=["isAuth"],c=function(s){return{isAuth:s.auth.isAuth}};function u(s){return(0,r.$j)(c)((function(e){var t=e.isAuth,r=(0,i.Z)(e,l);return t?(0,a.jsx)(s,(0,o.Z)({},r)):(0,a.jsx)(n.l_,{to:"/login"})}))}}}]);
//# sourceMappingURL=630.103f775b.chunk.js.map