"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[185,712],{6712:function(e,t,i){i.r(t),i.d(t,{StyledTable:function(){return v},default:function(){return f}});var n=i(4942),r=i(277),o=i(1680),s=i(6015),a=i(9827),l=i(807),c=i(4390),d=i(9773),h=i(3540),u=i(2089),x=(i(7008),i(4809)),p=[{id:0,category:"Good",lightThemeColor:x.Z.light.palette.chart.optionsColors.aqi[0],darkThemeColor:x.Z.dark.palette.chart.optionsColors.aqi[0],aqiUS:{low:0,high:50},rawPM2_5:{low:0,high:12},description:"Air quality is satisfactory, and air pollution poses little or no risk",healthSuggestions:{outdoors:"Enjoy outdoor activities, the air is great!",indoors_generic:"Enjoy clean indoor air",indoors_dining_hall:"Enjoy clean dining hall air",indoors_gym:"Enjoy clean air for physical activities indoors",indoors_vulnerable:"Enjoy clean indoor air"}},{id:1,category:"Moderate",lightThemeColor:x.Z.light.palette.chart.optionsColors.aqi[1],darkThemeColor:x.Z.dark.palette.chart.optionsColors.aqi[1],aqiUS:{low:51,high:100},rawPM2_5:{low:12.1,high:35.4},description:"Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution",healthSuggestions:{outdoors:"Children and individuals with respiratory issues might need to reduce prolonged outdoor exertion",indoors_generic:"Indoor air is acceptable, but not great",indoors_dining_hall:"Indoor air is acceptable, but not great<br>Avoid Grill area",indoors_gym:"Indoor air is acceptable, but not great",indoors_vulnerable:"Indoor air is acceptable, but not great"}},{id:2,category:"Unhealthy for Sensitive Groups",lightThemeColor:x.Z.light.palette.chart.optionsColors.aqi[2],darkThemeColor:x.Z.dark.palette.chart.optionsColors.aqi[2],aqiUS:{low:101,high:150},rawPM2_5:{low:35.5,high:55.4},description:"Members of sensitive groups may experience health effects. The general public is less likely to be affected",healthSuggestions:{outdoors:"Children and individuals with respiratory issues should limit outdoor exertion",indoors_generic:"",indoors_dining_hall:"Consider take-aways<br>Avoid Grill area",indoors_gym:"Individuals with respiratory issues should lower the intensity of indoor exercises",indoors_vulnerable:"Monitor closely individuals with respiratory issues for any symptom"}},{id:3,category:"Unhealthy",lightThemeColor:x.Z.light.palette.chart.optionsColors.aqi[3],darkThemeColor:x.Z.dark.palette.chart.optionsColors.aqi[3],aqiUS:{low:151,high:200},rawPM2_5:{low:55.5,high:150.4},description:"Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects",healthSuggestions:{outdoors:"Everyone should limit outdoor activities<br>Wear masks when going outside",indoors_generic:"",indoors_dining_hall:"Consider take-aways<br>Avoid Grill area<br>Come back at off-peak hours",indoors_gym:"Everyone should lower the intensity of indoor exercises",indoors_vulnerable:"Monitor closely individuals with respiratory issues for any symptom"}},{id:4,category:"Very Unhealthy",lightThemeColor:x.Z.light.palette.chart.optionsColors.aqi[4],darkThemeColor:x.Z.dark.palette.chart.optionsColors.aqi[4],aqiUS:{low:201,high:300},rawPM2_5:{low:150.5,high:250.4},description:"Health alert: The risk of health effects is increased for everyone",healthSuggestions:{outdoors:"Avoid outdoor activities at all cost<br>Wear N95 masks when going outside",indoors_generic:"",indoors_dining_hall:"Consider take-aways<br>Avoid Grill area<br>Come back at off-peak hours",indoors_gym:"Indoor air quality is not suitable for any physical activities",indoors_vulnerable:"Monitor closely individuals with respiratory issues for any symptom"}},{id:5,category:"Hazardous",lightThemeColor:x.Z.light.palette.chart.optionsColors.aqi[5],darkThemeColor:x.Z.dark.palette.chart.optionsColors.aqi[5],aqiUS:{low:300,high:500},rawPM2_5:{low:250.5,high:550.5},description:"Health warning of emergency conditions: everyone is more likely to be affected",healthSuggestions:{outdoors:"Avoid outdoor activities at all cost<br>Wear N95 masks when going outside",indoors_generic:"",indoors_dining_hall:"Consider take-aways<br>Avoid Grill area<br>Come back at off-peak hours",indoors_gym:"Indoor air quality is not suitable for any physical activities",indoors_vulnerable:""}}],m=i(604),g=i(184),v=(0,r.ZP)(o.Z)((function(e){var t=e.theme,i=e.isTiny;return{minWidth:i||700,"& th, td":(0,n.Z)({fontSize:i?"0.625rem":"0.6875rem",color:t.palette.text.secondary},t.breakpoints.down("sm"),{fontSize:i?"0.5rem":"0.6875rem"}),"& th":{fontWeight:500,color:t.palette.text.primary,lineHeight:"1rem"}}}));var f=function(e){var t=e.isTiny,i=e.hideAQIDescription,n=e.themePreference;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(s.Z,{overflow:"auto",children:(0,g.jsxs)(v,{size:"small",isTiny:t,children:[(0,g.jsx)(a.Z,{children:(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(c.Z,{sx:{pr:0},children:(0,g.jsx)(s.Z,{sx:{width:"1em",height:"1em"}})}),(0,g.jsx)(c.Z,{sx:{pl:1},children:"Category"}),(0,g.jsx)(c.Z,{align:"right",children:"US AQI"}),(0,g.jsxs)(c.Z,{align:"right",children:["PM2.5 Concentration (\xb5g/m",(0,g.jsx)("sup",{children:"3"}),")"]}),!i&&(0,g.jsx)(c.Z,{align:"left",children:"Description"}),!i&&(0,g.jsx)(c.Z,{align:"left",children:"CITIESair' Suggested Actions"})]})}),(0,g.jsx)(d.Z,{children:p.map((function(e,t){return(0,g.jsxs)(l.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,g.jsx)(c.Z,{sx:{pr:0},children:(0,g.jsx)(s.Z,{sx:{width:"1em",height:"1em",backgroundColor:n===m.Z.light?e.lightThemeColor:e.darkThemeColor}})}),(0,g.jsx)(c.Z,{sx:{pl:1},children:e.category}),(0,g.jsxs)(c.Z,{align:"right",children:[e.aqiUS.low,"\xa0 - \xa0",e.aqiUS.high]}),(0,g.jsxs)(c.Z,{align:"right",children:[e.rawPM2_5.low,"\xa0 - \xa0",e.rawPM2_5.high]}),!i&&(0,g.jsx)(c.Z,{align:"left",children:e.description}),!i&&(0,g.jsx)(c.Z,{align:"left",children:(0,h.ZP)(e.healthSuggestions.outdoors,{replace:u.T})})]},t)}))})]})})})}},1185:function(e,t,i){i.r(t),i.d(t,{default:function(){return Oe}});var n=i(885),r=i(1413),o=i(5987),s=i(2791),a=i(6871),l=i(5973),c=i(229),d=i(3540),h=i(7008),u=i(1745),x=i(472),p=i(5814),m=i(5209),g=i(6015),v=i(803),f=i(5953),Z=i(4565),j=i(1872),y=i(4142),b=i(604),w=i(173),C=i(5590),k=i(4162),S=i(3245),D=i(7962),_=i(286),T=i(1162),I=i(8388),P=i(7438),M=i(6712),q=i(184);function z(e){var t=(0,s.useState)(null),i=(0,n.Z)(t,2),o=i[0],a=i[1],l=function(e){a(e.currentTarget),P.y(P.z.airQualityIndexLegendQuickGlance)},c=function(){a(null)},d=Boolean(o);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(I.T,(0,r.Z)((0,r.Z)({},e),{},{distanceFromBottomOfWindow:"5.5rem",children:(0,q.jsx)(C.Z,{sx:{mt:1},"aria-owns":d?P.z.airQualityIndexLegendQuickGlance:void 0,"aria-haspopup":"true",onMouseEnter:l,onMouseLeave:c,onClick:function(e){return w.tq&&(d?c():l(e))},"aria-label":P.z.airQualityIndexLegendQuickGlance,color:"primary",children:(0,q.jsxs)(k.Z,{direction:"column",alignItems:"center",children:[(0,q.jsx)(T.Z,{fontSize:"1rem"}),(0,q.jsx)(Z.Z,{variant:"body2",fontWeight:"500",children:"AQI"})]})})})),(0,q.jsx)(S.Z,{id:P.z.airQualityIndexLegendQuickGlance,sx:{pointerEvents:"none",mt:-1},open:d,anchorEl:o,placement:"top-end",onClose:c,keepMounted:!0,disableRestoreFocus:!0,transition:!0,children:function(e){var t=e.TransitionProps;return(0,q.jsx)(D.Z,(0,r.Z)((0,r.Z)({},t),{},{timeout:350,children:(0,q.jsxs)(_.Z,{elevation:8,sx:{py:.5,mb:1},children:[(0,q.jsx)(Z.Z,{sx:{mx:2,mt:1},color:"text.disabled",variant:"body1",fontWeight:500,children:"AQI at quick glance"}),(0,q.jsx)(M.default,{isTiny:!0,hideAQIDescription:!0,themePreference:!0})]})}))}})]})}var A=i(5461),L=i(1478),U=i(501),E=i(4281),O=i(4058),Y=i(4853),N=i(9161),Q=i(2089),F=i(4942),W=i(2797),B=i(7205),G=i(5399),H=i(7248),R=i(5450),V=i(6283),K=i(1680),X=i(9827),J=i(807),$=i(4390),ee=i(9773),te=i(1803),ie=i(1898),ne=i(3057),re=i(324),oe=i(3978),se=i(230),ae=i(8821),le=i(1566),ce=i(1009),de=i(5108),he=i(8914),ue=i(7892),xe=i.n(ue),pe=i(277),me=i(3634),ge=i(1652),ve=i(4639),fe=i(6767),Ze=i(822),je=i(8928),ye=i(3767),be=["versionDates","day"],we=(0,pe.ZP)(ve.H)((function(e){return{"&:after, :hover::after":{content:'"."',fontSize:"1.5rem",bottom:"-0.5rem",position:"absolute",color:e.theme.palette.primary.main,opacity:.5},"&:hover::after":{opacity:1}}}));function Ce(e){var t=e.versionDates,i=void 0===t?[]:t,n=e.day,s=(0,o.Z)(e,be);return i.indexOf(xe()(n).format("YYYY-MM-DD"))>=0?(0,q.jsx)(we,(0,r.Z)((0,r.Z)({},s),{},{day:n})):(0,q.jsx)(ve.H,(0,r.Z)((0,r.Z)({},s),{},{day:n}))}function ke(e){var t=e.smallScreen,i=e.onChange,n=e.versions.filter((function(e){return 10===e.version.length})).map((function(e){return e.version}));return(0,q.jsx)(ye.Z,{onClickAway:function(){return i("close")},children:(0,q.jsx)(je.Z,{sx:!t&&{position:"absolute",right:0,zIndex:999},raised:!0,children:(0,q.jsx)(ge._,{dateAdapter:me.y,children:(0,q.jsx)(fe.W,{loading:!n,format:"YYYY-MM-DD",renderLoading:function(){return(0,q.jsx)(Ze.e,{})},slots:{day:Ce},onChange:function(e,t){return"finish"===t?i(xe()(e).format("YYYY-MM-DD")):null},slotProps:{day:{versionDates:n}},shouldDisableDate:function(e){return t=e,!(n.indexOf(xe()(t).format("YYYY-MM-DD"))>=0);var t},disableHighlightToday:!0,minDate:xe()(n.slice(-1)[0]),maxDate:xe()(n[0])})})})})}function Se(e){var t=e.project,i=(0,s.useContext)(se.N),r=(0,s.useState)(),o=(0,n.Z)(r,2),a=o[0],l=o[1];(0,s.useEffect)((function(){t&&i&&l(i[null===t||void 0===t?void 0:t.id])}),[t,i]);var c=(0,y.Z)(),d=(0,W.Z)(c.breakpoints.down("sm")),h=(0,s.useState)(!1),u=(0,n.Z)(h,2),x=u[0],p=u[1],g=function(){return p(!1)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(B.Z,{onClick:function(){p(!0),P.y(P.z.rawDatasetButtonClicked,{project_id:t.id})},variant:"contained",children:[(0,q.jsx)(le.Z,{sx:{fontSize:"1rem"}}),"\xa0Raw Dataset"]}),(0,q.jsxs)(G.Z,{open:x,onClose:g,maxWidth:"lg",fullWidth:!0,fullScreen:d,keepMounted:!0,children:[d&&(0,q.jsx)(H.Z,{justifyContent:"flex-start",children:(0,q.jsxs)(B.Z,{autoFocus:!0,onClick:g,children:[(0,q.jsx)(ce.Z,{sx:{fontSize:"1rem"}}),"Back"]})}),(0,q.jsxs)(R.Z,{sx:{px:d?2:3,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",height:"100%"},children:[(0,q.jsx)(m.Z,{label:t.title,size:"small",sx:{mb:1}}),(0,q.jsx)(Z.Z,{variant:"h6",children:"Preview and download raw dataset(s)"}),(0,q.jsx)(De,{datasets:a,smallScreen:d,project:t}),a&&(0,q.jsxs)(Z.Z,{variant:"caption",sx:{my:3,fontStyle:"italic"},children:["This dataset is provided by the CITIES Dashboard with the support of ",function(e){if(e&&0!==e.length){if(1===e.length)return e[0];if(2===e.length)return e.join(" and ");var t=e.pop(),i=e.join(", ");return"".concat(i,", and ").concat(t)}return"the relevant owners"}(t.owners),". Should you intend to utilize this dataset for your project, research, or publication, we kindly request that you notify us at ",(0,q.jsx)(V.Z,{href:"mailto:nyuad.cities@nyu.edu",children:"nyuad.cities@nyu.edu"})," to discuss citation requirements."]})]})]})]})}var De=function(e){var t=e.datasets,i=e.smallScreen,o=e.project,a=(0,s.useState)(),l=(0,n.Z)(a,2),c=l[0],d=l[1],h=(0,s.useState)(),u=(0,n.Z)(h,2),x=u[0],p=u[1];return(0,s.useEffect)((function(){var e,i,n,o;(null===t||void 0===t?void 0:t.length)>0&&(d(null===(e=t[0])||void 0===e?void 0:e.versions[0]),p(null===(i=t[0])||void 0===i?void 0:i.id),(0,he.m)(null===(n=t[0])||void 0===n||null===(o=n.versions[0])||void 0===o?void 0:o.rawLink,"csv").then((function(e){var i;d((0,r.Z)((0,r.Z)({},null===(i=t[0])||void 0===i?void 0:i.versions[0]),{},{fetchedDataset:e}))})))}),[t]),(0,q.jsxs)(f.ZP,{container:!0,justifyContent:"center",alignItems:"start",spacing:3,children:[(0,q.jsx)(f.ZP,{item:!0,sm:12,md:6,children:(0,q.jsx)(_e,{datasets:t,smallScreen:i,previewingDataset:c,setPreviewingDataset:d,previewingDatasetId:x,setPreviewingDatasetId:p})}),(0,q.jsx)(f.ZP,{item:!0,sm:12,md:6,maxWidth:i?"100%":"unset",sx:{mt:1},children:(0,q.jsx)(Ie,{previewingDataset:c,previewingDatasetId:x,project:o,smallScreen:i})})]})},_e=function(e){var t=e.datasets,i=e.smallScreen,n=e.previewingDataset,r=e.setPreviewingDataset,o=e.previewingDatasetId,s=e.setPreviewingDatasetId;return(0,q.jsxs)(K.Z,{size:"small",sx:{tableLayout:"fixed","& td, div, .MuiMenuItem-root":{fontSize:i?"0.625rem":"0.8rem"}},children:[(0,q.jsx)(X.Z,{children:(0,q.jsxs)(J.Z,{children:[(0,q.jsx)($.Z,{sx:{pl:1},children:"Dataset"}),(0,q.jsx)($.Z,{sx:{width:i?"9.5rem":"11rem"},children:"Version"}),(0,q.jsx)($.Z,{sx:{width:i?"5rem":"6rem"},children:"Size"})]})}),(0,q.jsx)(ee.Z,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,q.jsx)(Te,{smallScreen:i,dataset:e,previewingDataset:n,setPreviewingDataset:r,isPreviewing:e.id===o,setPreviewingDatasetId:s},e.id)}))})]})},Te=function(e){var t=e.smallScreen,i=e.dataset,o=e.setPreviewingDataset,a=e.isPreviewing,l=e.previewingDatasetId,c=e.setPreviewingDatasetId,d=(0,s.useState)({}),h=(0,n.Z)(d,2),u=h[0],x=h[1],m=(null===i||void 0===i?void 0:i.versions[0])||{},g=(0,s.useState)(!1),v=(0,n.Z)(g,2),f=v[0],Z=v[1],j=(0,s.useState)(m),b=(0,n.Z)(j,2),w=b[0],C=b[1],S=null===i||void 0===i?void 0:i.versions.slice(0,3);S.find((function(e){return e==w}))||S.push((0,r.Z)((0,r.Z)({},w),{},{isOlderVersion:!0}));var D=(null===i||void 0===i?void 0:i.versions.length)>3,_=function(e){var t=e.target.value;if("Calendar"!==t){var n=null===i||void 0===i?void 0:i.versions.find((function(e){return e.version===t}));C(n),c(i.id),o(n),I(n)}else Z(!0)},T=function(e){Z(!1),"close"!==e&&_({target:{value:e}})},I=function(e){u[e.version]?o(u[e.version]):(0,he.m)(e.rawLink,"csv").then((function(t){var i=(0,r.Z)((0,r.Z)({},e),{},{fetchedDataset:t});o(i),x((0,r.Z)((0,r.Z)({},u),{},(0,F.Z)({},i.version,i)))}))},P=function(){l!==i.id&&(c(i.id),o(w),I(w))},M=(0,y.Z)();return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(J.Z,{children:[(0,q.jsx)($.Z,{sx:{pl:1,cursor:"pointer",background:a&&M.palette.background.NYUpurpleLight},onClick:P,children:null===w||void 0===w?void 0:w.name}),(0,q.jsxs)($.Z,{sx:{position:"relative",background:a&&M.palette.background.NYUpurpleLight},children:[f&&(t?(0,q.jsx)(te.Z,{open:f,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,q.jsx)(ke,{onChange:T,smallScreen:t,versions:null===i||void 0===i?void 0:i.versions})}):(0,q.jsx)(ke,{onChange:T,versions:null===i||void 0===i?void 0:i.versions})),(0,q.jsx)(ie.Z,{size:"small",children:(0,q.jsxs)(ne.Z,{value:null===w||void 0===w?void 0:w.version,onClick:function(){i.versions.length<=1&&P()},onChange:_,variant:"standard",MenuProps:{disablePortal:!0},children:[S.map((function(e,t){return(0,q.jsx)(re.Z,{value:e.version,sx:[t===S.length-1&&{mb:-.75},e.isOlderVersion&&{marginTop:"1rem","&::before":{content:'""',borderTop:"2px dotted ".concat(M.palette.text.secondary),width:"1rem",height:"1rem",position:"absolute",top:0,left:"50%",transform:"translate(-50%, -50%)"}}],children:(0,q.jsxs)(k.Z,{direction:"row",alignItems:"center",children:[e.version,e===m&&(0,q.jsx)(p.Z,{title:"Latest version",enterDelay:0,leaveDelay:200,children:(0,q.jsx)(oe.Z,{sx:{ml:.5,width:"1rem",height:"1rem",background:M.palette.success.main},children:(0,q.jsx)(O.Z,{sx:{width:"0.8rem",height:"0.8rem"}})})})]})},e.version)})),D&&(0,q.jsx)(re.Z,{value:"Calendar",sx:{pt:1,mt:1,mb:-.75,borderTop:"0.5px solid"},children:(0,q.jsxs)(k.Z,{direction:"row",alignItems:"center",children:["Older Versions",(0,q.jsx)(de.Z,{fontSize:"small",sx:{ml:.5}})]})},"Calendar")]})})]}),(0,q.jsx)($.Z,{sx:{background:a&&M.palette.background.NYUpurpleLight},children:function(e){if(e)return e<1048576?(e/1024).toFixed(1)+" KB":(e/1048576).toFixed(1)+" MB"}(null===w||void 0===w?void 0:w.sizeInBytes)})]},i.id)})},Ie=function(e){var t=e.previewingDataset,i=e.previewingDatasetId,r=e.project,o=e.smallScreen,a="[".concat(r.id,"] ").concat(null===t||void 0===t?void 0:t.name,"-").concat(null===t||void 0===t?void 0:t.version,".csv"),l=(0,y.Z)(),c=(0,s.useState)(""),d=(0,n.Z)(c,2),h=d[0],u=d[1],x=(0,s.useState)(""),p=(0,n.Z)(x,2),m=p[0],v=p[1];return(0,s.useEffect)((function(){if(null!==t&&void 0!==t&&t.fetchedDataset){var e=null===t||void 0===t?void 0:t.fetchedDataset,i=e.split("\n"),n=i.length;if(n<=10)u(e),v(Array.from({length:n},(function(e,t){return t+1})).join("\n"));else{var r=i.slice(0,5),o=i.slice(n-5),s=n-10,a=["... [".concat(s," rows hidden] ...")];u(r.concat(a).concat(o).join("\n")),v(Array.from({length:11},(function(e,t){var i=t+1;return i<6?i:6==i?"":s+i-1})).join("\n"))}}}),[t]),(0,q.jsxs)(k.Z,{spacing:1,children:[(0,q.jsxs)(g.Z,{sx:{"& *":{fontFamily:"monospace !important"}},children:[(0,q.jsx)(k.Z,{direction:"row",children:(0,q.jsx)(Z.Z,{variant:"body2",gutterBottom:!0,fontWeight:600,children:t?"Previewing: ".concat(t.name," (").concat(null===t||void 0===t?void 0:t.version,")"):"Not previewing any dataset"})}),(0,q.jsx)(g.Z,{component:"pre",sx:{overflowX:"auto",color:l.palette.text.secondary,backgroundColor:l.palette.customBackground,p:2,pt:1.5,borderRadius:l.spacing(1),borderTopLeftRadius:0,minHeight:"5rem",width:o?"100%":"unset",marginTop:0},children:(0,q.jsxs)(k.Z,{direction:"row",sx:{fontSize:o?"0.625rem !important":"0.8rem !important"},children:[(0,q.jsx)(g.Z,{sx:{mr:2,userSelect:"none"},children:m}),(0,q.jsx)(g.Z,{children:h})]})})]}),(0,q.jsx)(g.Z,{textAlign:"center",children:(0,q.jsxs)(B.Z,{variant:"contained",sx:{textTransform:"none",textAlign:"left",lineHeight:1.1,px:1.5,py:1},onClick:function(){!function(){if(null!==t&&void 0!==t&&t.fetchedDataset){var e=new Blob([null===t||void 0===t?void 0:t.fetchedDataset],{type:"application/octet-stream"}),i=URL.createObjectURL(e),n=document.createElement("a");n.href=i,n.download=a,document.body.appendChild(n),n.click(),URL.revokeObjectURL(i),document.body.removeChild(n)}}(),P.y(P.z.rawDatasetDownloaded,{project_id:r.id,dataset_id:i,dataset_name:t.name,dataset_version:t.version})},disabled:!t,children:[(0,q.jsx)(ae.Z,{sx:{fontSize:"1.25rem",mr:.5}}),t?a:"No dataset available to download"]})})]})},Pe=i(1131),Me=i(6344),qe=i(445),ze=i(6175),Ae=i(5276);var Le=function(e){var t=e.text,i=e.wordLimit,r=void 0===i?75:i,o=e.reference,a=(0,s.useState)(!1),l=(0,n.Z)(a,2),c=l[0],h=l[1],u=(0,y.Z)(),x=(0,W.Z)(u.breakpoints.down("sm")),p=t.split(" ");if(!x||p.length<=r)return(0,q.jsxs)(g.Z,{children:[(0,q.jsx)(Z.Z,{children:(0,d.ZP)(t,{replace:Q.T})}),o&&(0,q.jsx)(Z.Z,{variant:"caption",color:"text.secondary",children:(0,d.ZP)(o,{replace:Q.T})})]});var m=p.slice(0,r).join(" "),v=m.lastIndexOf(".");return-1!==v&&(m=m.slice(0,v+1)),(0,q.jsx)(ye.Z,{onClickAway:function(){return h(!1)},children:(0,q.jsx)(g.Z,{onClick:function(){return h(!c)},style:{cursor:"pointer"},children:c?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Z.Z,{children:(0,d.ZP)(t,{replace:Q.T})}),o&&(0,q.jsx)(Z.Z,{variant:"caption",color:"text.secondary",children:(0,d.ZP)(o,{replace:Q.T})})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Z.Z,{display:"inline",children:[(0,d.ZP)(m,{replace:Q.T}),"..."]}),(0,q.jsx)(Z.Z,{display:"inline",color:"text.primary",fontWeight:"500",sx:{ml:.5,"& :hover":{textDecoration:"underline"}},children:"See more"})]})})})},Ue=["tooltipTitle"],Ee=function(e){var t=e.tooltipTitle,i=(0,o.Z)(e,Ue);return(0,q.jsx)(p.Z,{title:t,enterDelay:0,leaveDelay:200,children:(0,q.jsx)(m.Z,(0,r.Z)({size:"small"},i))})},Oe=function(e){var t=e.themePreference,i=(0,s.useContext)(l.F),o=(0,n.Z)(i,4),p=(o[0],o[1]),m=o[2],w=o[3],C=(0,a.UO)().id,k=(0,s.useState)({}),S=(0,n.Z)(k,2),D=S[0],_=S[1],T=(0,s.useState)(!1),I=(0,n.Z)(T,2),M=I[0],F=I[1],W=(0,s.useContext)(c.q),B=(0,n.Z)(W,2),G=B[0],H=B[1],R=(0,s.useContext)(qe.c),V=(0,n.Z)(R,1)[0][D.id],K=(0,s.useContext)(ze.M),X=(0,n.Z)(K,1)[0][D.id];(0,s.useEffect)((function(){D.title&&(document.title="".concat(D.title," | CITIES Dashboard"))})),(0,s.useEffect)((function(){var e=[];A.map((function(t){if(t.id===C){_((0,r.Z)({},t));for(var i={},n=0;n<t.charts.length;n++)i[n]=0;H(i),F(!0),e=t.charts.map((function(e,t){return{chartTitle:e.title,chartID:"chart-".concat(t+1)}}))}})),p("project"),w(e)}),[C,p,w]);var J=(0,y.Z)();return(0,q.jsx)(q.Fragment,{children:M&&(0,q.jsxs)(g.Z,{width:"100%",children:["air-quality"===D.id&&(0,q.jsx)(z,{themePreference:t}),(0,q.jsx)(Me.Z,{backgroundColor:"customAlternateBackground",children:(0,q.jsxs)(v.Z,{sx:{pt:5,pb:3},children:[(0,q.jsx)(u.Z,{text:D.title}),(0,q.jsxs)(f.ZP,{container:!0,spacing:1,sx:{pb:3,mt:-3},children:[D.owners.map((function(e,t){return(0,q.jsx)(f.ZP,{item:!0,children:(0,q.jsx)(Ee,{icon:(0,q.jsx)(U.Z,{}),label:e,tooltipTitle:"Dataset Owner"},t)})})),(0,q.jsx)(f.ZP,{item:!0,children:(0,q.jsx)(Ee,{icon:(0,q.jsx)(E.Z,{}),label:D.contact,tooltipTitle:"Contact",component:"a",href:"mailto:".concat(D.contact),clickable:!0})}),(0,q.jsx)(f.ZP,{item:!0,children:(0,q.jsx)(Ee,{icon:(0,q.jsx)(Y.Z,{}),label:"".concat(D.charts.length," Chart").concat(D.charts.length>1&&"s"),tooltipTitle:"Number of Charts",onClick:function(){(0,Pe.Qj)(L.O3.id),P.y(P.z.internalNavigation,{destination_id:L.O3.id,destination_label:L.project.toString(),origin_id:"chip"})}})}),X&&(0,q.jsx)(f.ZP,{item:!0,children:(0,q.jsx)(Ee,{icon:(0,q.jsx)(O.Z,{}),label:"Last update: ".concat(X),tooltipTitle:"Last Update"})}),null!=V&&(0,q.jsx)(f.ZP,{item:!0,children:(0,q.jsx)(Ee,{icon:(0,q.jsx)(N.Z,{}),label:"".concat(V," Comment").concat(V>1?"s":""),tooltipTitle:"Number of Comments",onClick:function(){(0,Pe.Qj)(L.Sf.id),P.y(P.z.internalNavigation,{destination_id:L.Sf.id,destination_label:L.Sf.toString(),origin_id:"chip"})}})})]}),(0,q.jsx)(Z.Z,{component:"div",variant:"body1",color:"text.secondary",sx:{textAlign:"justify",pb:3,mb:0,"& table *":{color:"".concat(J.palette.text.secondary)}},gutterBottom:!0,children:(0,d.ZP)(D.description,{replace:Q.T})}),(0,q.jsx)(Se,{project:D})]})}),(0,q.jsx)(g.Z,{id:L.O3.id,children:D.charts.map((function(e,i){return(0,q.jsx)(Me.Z,{id:m[i].chartID,backgroundColor:i%2!=0&&"customAlternateBackground",children:(0,q.jsxs)(v.Z,{sx:{pt:4,pb:4},height:"auto",className:t===b.Z.dark?"dark":"",children:[(0,q.jsxs)(Z.Z,{variant:"h6",color:"text.primary",children:[i+1,". ",e.title]}),e.chartSubstituteComponentName?(0,q.jsx)(Ae.default,{chartSubstituteComponentName:e.chartSubstituteComponentName}):(0,q.jsx)(h.Z,{chartData:(0,r.Z)({chartIndex:i,sheetId:D.sheetId},e)}),(0,q.jsx)(g.Z,{sx:{my:3},children:(0,q.jsxs)(Z.Z,{component:"div",variant:"body1",color:"text.secondary",sx:{mb:1},children:[e.subtitle&&(0,q.jsx)(Le,{text:e.subtitle,reference:e.reference?e.reference:void 0}),Object.keys(G)[i]==i&&e.subcharts&&e.subcharts[Object.values(G)[i]].subchartSubtitle&&(0,q.jsx)(Le,{text:e.subcharts[Object.values(G)[i]].subchartSubtitle,reference:e.subcharts[Object.values(G)[i]].reference?e.subcharts[Object.values(G)[i]].reference:void 0})]})})]})},i)}))}),(0,q.jsx)(j.Z,{}),(0,q.jsx)(Me.Z,{id:L.Sf.id,sx:{pt:3,pb:4},children:(0,q.jsx)(x.Z,{pageID:D.id})})]})})}}}]);
//# sourceMappingURL=185.66b292ce.chunk.js.map