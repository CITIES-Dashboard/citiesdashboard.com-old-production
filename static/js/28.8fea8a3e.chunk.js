"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[28],{1745:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4565),o=n(184);function i(e){var t=e.text;return(0,o.jsx)(r.Z,{variant:"h4",color:"text.primary",sx:{fontWeight:"medium",display:"inline-block",textTransform:"uppercase",pb:3,lineHeight:1},children:t})}},547:function(e,t,n){var r=n(4942),o=n(6015),i=n(803),a=n(5953),s=n(286),c=n(4565),d=n(277),u=n(1745),l=n(2350),m=n(3540),f=n(1744),h=n(184),p=(0,d.ZP)(o.Z)((function(e){var t=e.theme;return(0,r.Z)({filter:"dark"==t.palette.mode&&"invert(0.848) hue-rotate(180deg)",display:"flex",justifyContent:"center",marginTop:t.spacing(2),height:"70vh"},t.breakpoints.down("md"),{marginLeft:t.spacing(-2),marginRight:t.spacing(-2)})}));t.Z=function(e){e.themePreference;return(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(u.Z,{text:"get in touch"}),(0,h.jsx)(a.ZP,{container:!0,spacing:3,children:(0,h.jsx)(a.ZP,{item:!0,children:(0,h.jsxs)(s.Z,{elevation:2,sx:{p:3},children:[(0,h.jsx)(c.Z,{variant:"body2",color:"text.secondary",children:(0,m.ZP)(l.W5.k,{replace:f.T})}),(0,h.jsx)(p,{children:(0,h.jsx)("iframe",{src:"".concat("https://docs.google.com/forms/d/e/1FAIpQLSenxtTIizWED0PT3hBOn3IU6fwmj4sr1yhjU70mjmK4R-ipsw/","viewform?embedded=true"),width:"100%",height:"100%",frameborder:"0",children:"Loading..."})})]})})})]})}},5028:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r=n(9439),o=n(2791),i=n(3504),a=n(5973),s=n(2129),c=n(7462),d=n(3366),u=n(8182),l=n(4419),m=n(277),f=n(5513),h=n(286),p=n(5878),Z=n(1217);function v(e){return(0,Z.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var x=n(184),g=["className","raised"],j=(0,m.ZP)(h.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),C=o.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiCard"}),r=n.className,o=n.raised,i=void 0!==o&&o,a=(0,d.Z)(n,g),s=(0,c.Z)({},n,{raised:i}),m=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},v,t)}(s);return(0,x.jsx)(j,(0,c.Z)({className:(0,u.Z)(m.root,r),elevation:i?8:void 0,ref:t,ownerState:s},a))})),b=n(4942);function y(e){return(0,Z.Z)("MuiCardActionArea",e)}var M=(0,p.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),w=n(9917),P=["children","className","focusVisibleClassName"],N=(0,m.ZP)(w.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},(0,b.Z)(t,"&:hover .".concat(M.focusHighlight),{opacity:(n.vars||n).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,b.Z)(t,"&.".concat(M.focusVisible," .").concat(M.focusHighlight),{opacity:(n.vars||n).palette.action.focusOpacity}),t})),R=(0,m.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),k=o.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiCardActionArea"}),r=n.children,o=n.className,i=n.focusVisibleClassName,a=(0,d.Z)(n,P),s=n,m=function(e){var t=e.classes;return(0,l.Z)({root:["root"],focusHighlight:["focusHighlight"]},y,t)}(s);return(0,x.jsxs)(N,(0,c.Z)({className:(0,u.Z)(m.root,o),focusVisibleClassName:(0,u.Z)(i,m.focusVisible),ref:t,ownerState:s},a,{children:[r,(0,x.jsx)(R,{className:m.focusHighlight,ownerState:s})]}))}));function A(e){return(0,Z.Z)("MuiCardMedia",e)}(0,p.Z)("MuiCardMedia",["root","media","img"]);var H=["children","className","component","image","src","style"],S=(0,m.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.isMediaComponent,o=n.isImageComponent;return[t.root,r&&t.media,o&&t.img]}})((function(e){var t=e.ownerState;return(0,c.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),I=["video","audio","picture","iframe","img"],T=["picture","img"],V=o.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiCardMedia"}),r=n.children,o=n.className,i=n.component,a=void 0===i?"div":i,s=n.image,m=n.src,h=n.style,p=(0,d.Z)(n,H),Z=-1!==I.indexOf(a),v=!Z&&s?(0,c.Z)({backgroundImage:'url("'.concat(s,'")')},h):h,g=(0,c.Z)({},n,{component:a,isMediaComponent:Z,isImageComponent:-1!==T.indexOf(a)}),j=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,l.Z)(n,A,t)}(g);return(0,x.jsx)(S,(0,c.Z)({className:(0,u.Z)(j.root,o),as:a,role:!Z&&s?"img":void 0,ref:t,style:v,ownerState:g,src:Z?s||m:void 0},p,{children:r}))}));function E(e){return(0,Z.Z)("MuiCardContent",e)}(0,p.Z)("MuiCardContent",["root"]);var O=["className","component"],W=(0,m.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),F=o.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiCardContent"}),r=n.className,o=n.component,i=void 0===o?"div":o,a=(0,d.Z)(n,O),s=(0,c.Z)({},n,{component:i}),m=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},E,t)}(s);return(0,x.jsx)(W,(0,c.Z)({as:i,className:(0,u.Z)(m.root,r),ownerState:s,ref:t},a))})),_=n(6015),z=n(803),L=n(5953),U=n(1872),B=n(4565),D=n(1745),K=n(2350),Q=n(3540),q=n(1744),G=function(){return(0,x.jsxs)(z.Z,{children:[(0,x.jsx)(D.Z,{text:"about"}),(0,x.jsx)(L.ZP,{container:!0,spacing:3,children:K.jZ.k.map((function(e,t){return(0,x.jsx)(L.ZP,{item:!0,xs:12,md:6,children:(0,x.jsx)(h.Z,{elevation:2,sx:{p:3},children:(0,x.jsx)(B.Z,{variant:"body2",color:"text.secondary",children:(0,Q.ZP)(e,{replace:q.T})})})},t)}))})]})},J=n(547),X=n(7438),Y=function(e){var t=e.themePreference,n=e.title;(0,o.useEffect)((function(){return document.title=n}),[]);var c=(0,o.useContext)(a.F),d=(0,r.Z)(c,4),u=(d[0],d[1]),l=(d[2],d[3]),m=(0,o.useContext)(s.R),f=(0,r.Z)(m,1)[0];return(0,o.useEffect)((function(){u("home"),l([])}),[]),(0,x.jsxs)(_.Z,{width:"100%",children:[(0,x.jsx)(_.Z,{children:(0,x.jsxs)(z.Z,{sx:{pt:3,pb:4},children:[(0,x.jsx)(D.Z,{text:"all projects"}),(0,x.jsx)(L.ZP,{container:!0,spacing:3,sx:{justifyContent:{sm:"center",md:"start"}},children:f.map((function(e,n){return(0,x.jsx)(L.ZP,{item:!0,xs:12,sm:9,md:6,lg:4,children:(0,x.jsx)(C,{elevation:2,children:(0,x.jsxs)(k,{component:i.rU,to:"/project/".concat(e.id),disabled:!e.isActive,onClick:function(){X.y(X.z.internalNavigation,{destination_id:"/project/".concat(e.id),destination_label:e.id})},children:[(0,x.jsx)(_.Z,{className:t?"dark-mode":"",children:(0,x.jsx)(V,{className:"noPointerEvent",children:e.graph,height:"auto",sx:{aspectRatio:"4/3"}})}),(0,x.jsx)(U.Z,{}),(0,x.jsxs)(F,{children:[(0,x.jsx)(B.Z,{variant:"body1",component:"div",color:"text.primary",fontWeight:"500",children:e.title}),(0,x.jsx)(B.Z,{variant:"caption",color:"text.secondary",children:e.owner})]})]})})},n)}))})]})}),(0,x.jsx)(_.Z,{id:K.jZ.id,sx:{pt:3,pb:4},children:(0,x.jsx)(G,{})}),(0,x.jsx)(_.Z,{id:K.W5.id,sx:{pt:3,pb:4},children:(0,x.jsx)(J.Z,{themePreference:t})})]})}}}]);
//# sourceMappingURL=28.8fea8a3e.chunk.js.map