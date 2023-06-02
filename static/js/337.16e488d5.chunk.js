"use strict";(self.webpackChunkrestaurant_website=self.webpackChunkrestaurant_website||[]).push([[337],{3337:function(e,t,a){a.r(t),a.d(t,{default:function(){return re}});var o=a(4554),r=a(890),i=a(7462),n=a(3366),s=a(2791),c=a(8182),l=a(4419),d=a(1402),u=a(6934),p=a(5878),m=a(1217);function v(e){return(0,m.Z)("MuiTableContainer",e)}(0,p.Z)("MuiTableContainer",["root"]);var h=a(184),g=["className","component"],f=(0,u.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),x=s.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiTableContainer"}),o=a.className,r=a.component,s=void 0===r?"div":r,u=(0,n.Z)(a,g),p=(0,i.Z)({},a,{component:s}),m=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},v,t)}(p);return(0,h.jsx)(f,(0,i.Z)({ref:t,as:s,className:(0,c.Z)(m.root,o),ownerState:p},u))})),Z=a(5527);var b=s.createContext();function y(e){return(0,m.Z)("MuiTable",e)}(0,p.Z)("MuiTable",["root","stickyHeader"]);var w=["className","component","padding","size","stickyHeader"],j=(0,u.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,i.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,i.Z)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),C="table",k=s.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiTable"}),o=a.className,r=a.component,u=void 0===r?C:r,p=a.padding,m=void 0===p?"normal":p,v=a.size,g=void 0===v?"medium":v,f=a.stickyHeader,x=void 0!==f&&f,Z=(0,n.Z)(a,w),k=(0,i.Z)({},a,{component:u,padding:m,size:g,stickyHeader:x}),M=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,l.Z)(a,y,t)}(k),T=s.useMemo((function(){return{padding:m,size:g,stickyHeader:x}}),[m,g,x]);return(0,h.jsx)(b.Provider,{value:T,children:(0,h.jsx)(j,(0,i.Z)({as:u,role:u===C?null:"table",ref:t,className:(0,c.Z)(M.root,o),ownerState:k},Z))})}));var M=s.createContext();function T(e){return(0,m.Z)("MuiTableHead",e)}(0,p.Z)("MuiTableHead",["root"]);var H=["className","component"],R=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),z={variant:"head"},q="thead",N=s.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiTableHead"}),o=a.className,r=a.component,s=void 0===r?q:r,u=(0,n.Z)(a,H),p=(0,i.Z)({},a,{component:s}),m=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},T,t)}(p);return(0,h.jsx)(M.Provider,{value:z,children:(0,h.jsx)(R,(0,i.Z)({as:s,className:(0,c.Z)(m.root,o),ref:t,role:s===q?null:"rowgroup",ownerState:p},u))})})),S=a(4942),A=a(2065);function P(e){return(0,m.Z)("MuiTableRow",e)}var D=(0,p.Z)("MuiTableRow",["root","selected","hover","head","footer"]),O=["className","component","hover","selected"],B=(0,u.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,S.Z)(t,"&.".concat(D.hover,":hover"),{backgroundColor:(a.vars||a).palette.action.hover}),(0,S.Z)(t,"&.".concat(D.selected),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,A.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,A.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),_=s.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiTableRow"}),o=a.className,r=a.component,u=void 0===r?"tr":r,p=a.hover,m=void 0!==p&&p,v=a.selected,g=void 0!==v&&v,f=(0,n.Z)(a,O),x=s.useContext(M),Z=(0,i.Z)({},a,{component:u,hover:m,selected:g,head:x&&"head"===x.variant,footer:x&&"footer"===x.variant}),b=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,l.Z)(a,P,t)}(Z);return(0,h.jsx)(B,(0,i.Z)({as:u,ref:t,className:(0,c.Z)(b.root,o),role:"tr"===u?null:"row",ownerState:Z},f))})),F=_,I=a(4036);function L(e){return(0,m.Z)("MuiTableCell",e)}var U=(0,p.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),V=["align","className","component","padding","scope","size","sortDirection","variant"],W=(0,u.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat((0,I.Z)(a.size))],"normal"!==a.padding&&t["padding".concat((0,I.Z)(a.padding))],"inherit"!==a.align&&t["align".concat((0,I.Z)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,i.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,A.$n)((0,A.Fq)(t.palette.divider,1),.88):(0,A._j)((0,A.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:(t.vars||t).palette.text.primary},"footer"===a.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&(0,S.Z)({padding:"6px 16px"},"&.".concat(U.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),J=s.forwardRef((function(e,t){var a,o=(0,d.Z)({props:e,name:"MuiTableCell"}),r=o.align,u=void 0===r?"inherit":r,p=o.className,m=o.component,v=o.padding,g=o.scope,f=o.size,x=o.sortDirection,Z=o.variant,y=(0,n.Z)(o,V),w=s.useContext(b),j=s.useContext(M),C=j&&"head"===j.variant,k=g;"td"===(a=m||(C?"th":"td"))?k=void 0:!k&&C&&(k="col");var T=Z||j&&j.variant,H=(0,i.Z)({},o,{align:u,component:a,padding:v||(w&&w.padding?w.padding:"normal"),size:f||(w&&w.size?w.size:"medium"),sortDirection:x,stickyHeader:"head"===T&&w&&w.stickyHeader,variant:T}),R=function(e){var t=e.classes,a=e.variant,o=e.align,r=e.padding,i=e.size,n={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==o&&"align".concat((0,I.Z)(o)),"normal"!==r&&"padding".concat((0,I.Z)(r)),"size".concat((0,I.Z)(i))]};return(0,l.Z)(n,L,t)}(H),z=null;return x&&(z="asc"===x?"ascending":"descending"),(0,h.jsx)(W,(0,i.Z)({as:a,ref:t,className:(0,c.Z)(R.root,p),"aria-sort":z,scope:k,ownerState:H},y))})),X=J;function $(e){return(0,m.Z)("MuiTableBody",e)}(0,p.Z)("MuiTableBody",["root"]);var E=["className","component"],G=(0,u.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),K={variant:"body"},Q="tbody",Y=s.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiTableBody"}),o=a.className,r=a.component,s=void 0===r?Q:r,u=(0,n.Z)(a,E),p=(0,i.Z)({},a,{component:s}),m=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},$,t)}(p);return(0,h.jsx)(M.Provider,{value:K,children:(0,h.jsx)(G,(0,i.Z)({className:(0,c.Z)(m.root,o),as:s,ref:t,role:s===Q?null:"rowgroup",ownerState:p},u))})})),ee=a(7473),te=a(7130),ae=a(5335),oe=a(6002),re=function(){return(0,h.jsxs)(ee.Z,{children:[(0,h.jsxs)(o.Z,{sx:{m:5,mb:2,mt:10},children:[(0,h.jsx)(r.Z,{variant:"h3",children:"Contact Us"}),(0,h.jsx)(r.Z,{component:"p",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta exercitationem tempore ad, provident ratione, ex ut consectetur ipsam deserunt cumque corrupti accusantium deleniti quisquam iusto mollitia molestiae nihil, rerum nisi aliquam repellendus at soluta vitae quas in? Illum exercitationem doloribus sequi necessitatibus accusantium sunt nobis ipsum aliquam cumque repudiandae. Ut adipisci iusto qui laboriosam, obcaecati asperiores vero cum quisquam ipsa porro non ab corrupti, enim quasi assumenda, velit at eum! Delectus doloremque ratione iure maiores, impedit dolorum quis nobis dicta deleniti quam ut mollitia inventore odit quo obcaecati ab ipsam quasi hic, excepturi libero saepe totam rerum adipisci sapiente! Maiores."})]}),(0,h.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,h.jsx)(o.Z,{sx:{m:5,width:{xs:"300px",lg:"500px"}},children:(0,h.jsx)(x,{component:Z.Z,children:(0,h.jsxs)(k,{"aria-label":"simple table",children:[(0,h.jsx)(N,{children:(0,h.jsx)(F,{children:(0,h.jsx)(X,{sx:{bgcolor:"black",color:"white"},align:"center",children:"Contact Us"})})}),(0,h.jsxs)(Y,{children:[(0,h.jsx)(F,{children:(0,h.jsxs)(X,{component:"th",scope:"row",children:[(0,h.jsx)(te.Z,{sx:{color:"red",pt:1,mr:2}}),"1800-00-0000"]})},"1800-00-0000"),(0,h.jsx)(F,{children:(0,h.jsxs)(X,{component:"th",scope:"row",children:[(0,h.jsx)(ae.Z,{sx:{color:"skyblue",pt:1,mr:2}}),"help_greentable@gmail.com"]})},"help_greentable@gmail.com"),(0,h.jsx)(F,{children:(0,h.jsxs)(X,{component:"th",scope:"row",children:[(0,h.jsx)(oe.Z,{sx:{color:"green",pt:1,mr:2}}),"9945321345"]})},"9945321345")]})]})})})})]})}},6002:function(e,t,a){var o=a(4836);t.Z=void 0;var r=o(a(5649)),i=a(184),n=(0,r.default)((0,i.jsx)("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"}),"Call");t.Z=n},5335:function(e,t,a){var o=a(4836);t.Z=void 0;var r=o(a(5649)),i=a(184),n=(0,r.default)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");t.Z=n},7130:function(e,t,a){var o=a(4836);t.Z=void 0;var r=o(a(5649)),i=a(184),n=(0,r.default)([(0,i.jsx)("path",{d:"M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"},"0"),(0,i.jsx)("circle",{cx:"9",cy:"13",r:"1"},"1"),(0,i.jsx)("circle",{cx:"15",cy:"13",r:"1"},"2"),(0,i.jsx)("path",{d:"M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47z"},"3")],"SupportAgent");t.Z=n}}]);
//# sourceMappingURL=337.16e488d5.chunk.js.map