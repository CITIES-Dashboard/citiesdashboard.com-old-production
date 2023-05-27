"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[43],{1745:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(4565),a=n(184);function s(e){var t=e.text;return(0,a.jsx)(r.Z,{variant:"h4",color:"text.primary",sx:{fontWeight:"medium",display:"inline-block",textTransform:"uppercase",pb:3,lineHeight:1},children:t})}},1932:function(e,t,n){var r=n(803),a=n(5953),s=n(286),c=n(4565),i=n(1745),o=n(2350),l=n(3540),d=n(270),x=n(184);t.Z=function(){return(0,x.jsxs)(r.Z,{children:[(0,x.jsx)(i.Z,{text:"join us"}),(0,x.jsx)(a.ZP,{container:!0,spacing:3,children:(0,x.jsx)(a.ZP,{item:!0,children:(0,x.jsx)(s.Z,{elevation:2,sx:{p:3},children:(0,x.jsx)(c.Z,{variant:"body2",color:"text.secondary",children:(0,l.ZP)(o.R9,{replace:d.T})})})})})]})}},4043:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(1413),a=n(9439),s=n(2791),c=n(6871),i=n(5973),o=n(229),l=n(3540),d=n(987),x=n(1745),h=n(6015),u=n(7205),p=n(5209),j=n(803),Z=n(5953),b=n(4565),f=n(1872),m=n(1932),g=n(277),v=n(417),y=n(3671),P=n(1267),T=n(1131),k=n(184),I=(0,g.ZP)(v.Z)((function(e){var t=e.theme,n=e.expanded;return{color:t.palette.text.secondary,backgroundImage:"none",backgroundColor:n?t.palette.background.default:"transparent",boxShadow:n?t.shadows:"none",transition:t.transitions}})),D=(0,g.ZP)(y.Z)((function(e){var t=e.theme,n=e.expanded;return{marginTop:n?t.spacing(3):0,flexDirection:"row-reverse",paddingLeft:n?t.spacing(1):0,"& .MuiTypography-root":{color:t.palette.text.primary,textDecoration:"underline",transition:t.transitions,"&:hover":{color:t.palette.primary.main}}}})),O=function(e){var t,n=e.title,r=e.content,c=(0,s.useState)(void 0),i=(0,a.Z)(c,2),o=i[0],l=i[1];return(0,k.jsx)("div",{children:(0,k.jsxs)(I,{expanded:"panel1"===o,onChange:(t="panel1",function(e,n){l(n?t:void 0)}),children:[(0,k.jsx)(D,{expanded:o,expandIcon:(0,k.jsx)(T.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,k.jsx)(b.Z,{component:"a",variant:"body1",children:n})}),(0,k.jsx)(P.Z,{children:r})]})})},w=n(6604),C=n(5461),S=n(5273),F=n(1164),A=n(4281),L=n(4058),N=n(270),U=function(e){var t=e.project,n=null==t.sheetId;return(0,k.jsx)(h.Z,{children:(0,k.jsx)("a",{href:n?"":"https://docs.google.com/spreadsheets/d/".concat(t.sheetId),target:"_blank",rel:"noreferrer",children:(0,k.jsxs)(u.Z,{disabled:n,variant:"contained",children:[(0,k.jsx)(F.Z,{}),"\xa0",n?"COMING SOON":"FULL DATASET"]})})})},_=function(e){var t=e.icon,n=e.label;return(0,k.jsx)(p.Z,{size:"small",icon:t,label:n})},z=function(e){var t=e.themePreference,n=(0,s.useContext)(i.F),u=(0,a.Z)(n,4),p=(u[0],u[1]),g=u[2],v=u[3],y=(0,c.UO)().id,P=(0,s.useState)({}),T=(0,a.Z)(P,2),I=T[0],D=T[1],F=(0,s.useState)(!1),z=(0,a.Z)(F,2),B=z[0],E=z[1],H=(0,s.useContext)(o.q),M=(0,a.Z)(H,2),q=M[0],G=M[1];return(0,s.useEffect)((function(){var e=[];C.map((function(t){if(t.id===y){D((0,r.Z)({},t));for(var n={},a=0;a<t.charts.length;a++)n[a]=0;G(n),E(!0),e=t.charts.map((function(e,t){return{chartTitle:e.title,chartID:"-".concat(t+1)}}))}})),p(y),v(e)}),[y,p,v]),(0,k.jsx)(k.Fragment,{children:B&&(0,k.jsxs)(h.Z,{width:"100%",children:[(0,k.jsx)(h.Z,{children:(0,k.jsxs)(j.Z,{sx:{pt:4,pb:4},children:[(0,k.jsx)(x.Z,{text:I.title}),(0,k.jsxs)(Z.ZP,{container:!0,spacing:1,sx:{pb:3,mt:-3},children:[(0,k.jsx)(Z.ZP,{item:!0,children:(0,k.jsx)(_,{icon:(0,k.jsx)(S.Z,{}),label:I.owner})}),(0,k.jsx)(Z.ZP,{item:!0,children:(0,k.jsx)(_,{icon:(0,k.jsx)(A.Z,{}),label:I.contact})}),(0,k.jsx)(Z.ZP,{item:!0,children:(0,k.jsx)(_,{icon:(0,k.jsx)(L.Z,{}),label:"Last update: ".concat(I.lastUpdate)})})]}),(0,k.jsx)(b.Z,{variant:"body1",color:"text.secondary",sx:{textAlign:"justify",pb:3,mb:0},gutterBottom:!0,children:(0,l.ZP)(I.description,{replace:N.T})}),(0,k.jsx)(U,{project:I}),(0,k.jsx)(O,{title:"Sample Data",content:(0,k.jsx)(k.Fragment,{children:I.rawDataTables.map((function(e,n){return(0,k.jsx)(h.Z,{sx:n<I.rawDataTables.length-1?{mb:3}:{mb:1},children:(0,k.jsx)(d.Z,{chartData:(0,r.Z)({chartType:"Table",sortAscending:!0,frozenColumns:1,sheetId:I.sheetId},e),themePreference:t,isHomepage:!1})},n)}))})})]})}),I.charts.map((function(e,n){return(0,k.jsx)(h.Z,{id:g[n].chartID,backgroundColor:n%2==0?"customAlternateBackground":"",children:(0,k.jsxs)(j.Z,{sx:{pt:4,pb:4},height:"auto",className:t===w.Z.dark?"dark":"",children:[(0,k.jsxs)(b.Z,{variant:"h6",color:"text.primary",children:[n+1,". ",e.title]}),(0,k.jsx)(d.Z,{chartData:(0,r.Z)({chartIndex:n,sheetId:I.sheetId},e)}),(0,k.jsxs)(h.Z,{sx:{m:3},children:[(0,k.jsxs)(b.Z,{variant:"body1",color:"text.secondary",sx:{mb:2},children:[e.subtitle&&(0,l.ZP)(e.subtitle,{replace:N.T}),Object.keys(q)[n]==n&&e.subcharts&&e.subcharts[Object.values(q)[n]].subchartSubtitle&&(0,l.ZP)(e.subcharts[Object.values(q)[n]].subchartSubtitle,{replace:N.T})]}),(0,k.jsxs)(b.Z,{variant:"caption",color:"text.secondary",children:[e.reference&&(0,l.ZP)(e.reference,{replace:N.T}),Object.keys(q)[n]==n&&e.subcharts&&e.subcharts[Object.values(q)[n]].reference&&(0,l.ZP)(e.subcharts[Object.values(q)[n]].reference,{replace:N.T})]})]})]})},n)})),I.charts.length%2!=0?(0,k.jsx)(k.Fragment,{}):(0,k.jsx)(f.Z,{}),(0,k.jsx)(h.Z,{id:"join-us",sx:{pt:3,pb:3},children:(0,k.jsx)(m.Z,{})}),I.charts.length%2!=0?(0,k.jsx)(f.Z,{}):(0,k.jsx)(k.Fragment,{})]})})}}}]);
//# sourceMappingURL=43.0232759c.chunk.js.map