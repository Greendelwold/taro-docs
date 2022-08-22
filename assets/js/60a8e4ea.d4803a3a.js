"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[10683],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78016:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(93106);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return a.createElement("div",r({role:"tabpanel"},{hidden:t,className:n}),e)}},27205:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(93106),r=n(60467),l=n(7617),o=n(26679),i="tabItem_ySgZ";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function p(e){var t,n;const{lazy:r,block:p,defaultValue:s,values:u,groupId:m,className:d}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=u?u:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,l.lx)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const N=null===s?s:null!==(b=null!=s?s:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:null===(n=k[0])||void 0===n?void 0:n.props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,l.UB)(),[h,w]=(0,a.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=m){const e=y[m];null!=e&&e!==h&&g.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==h&&(x(t),w(a),null!=m&&v(m,a))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]||O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]||O[O.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},d)},g.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,key:e,ref:e=>O.push(e),onKeyDown:T,onFocus:I,onClick:I},n,{className:(0,o.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":h===e})}),null!=t?t:e)))),r?(0,a.cloneElement)(k.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function s(e){const t=(0,r.Z)();return a.createElement(p,c({key:String(t)},e))}},50694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});n(93106);var a=n(79874),r=n(27205),l=n(78016);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={title:"Icon",sidebar_label:"Icon"},p=void 0,s={unversionedId:"components/base/icon",id:"components/base/icon",title:"Icon",description:"\u56fe\u6807\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px",source:"@site/docs/components/base/icon.md",sourceDirName:"components/base",slug:"/components/base/icon",permalink:"/taro-docs/docs/next/components/base/icon",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/base/icon.md",tags:[],version:"current",frontMatter:{title:"Icon",sidebar_label:"Icon"},sidebar:"components",previous:{title:"View",permalink:"/taro-docs/docs/next/components/viewContainer/view"},next:{title:"Text",permalink:"/taro-docs/docs/next/components/base/text"}},u={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"IconProps",id:"iconprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"TIconType",id:"ticontype",level:3}],d={toc:m};function k(e){var{components:t}=e,c=i(e,["components"]);return(0,a.kt)("wrapper",o({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u56fe\u6807\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(21207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(92182).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(66839).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(58884).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(56174).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(82078).Z,className:"icon_platform",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<IconProps>\n")),(0,a.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Icon size='60' type='success' />\n        <Icon size='60' type='info' />\n        <Icon size='60' type='warn' color='#ccc' />\n        <Icon size='60' type='warn' />\n        <Icon size='60' type='waiting' />\n        <Icon size='20' type='success_no_circle' />\n        <Icon size='20' type='warn' />\n        <Icon size='20' type='success' />\n        <Icon size='20' type='download' />\n        <Icon size='20' type='clear' color='red' />\n        <Icon size='20' type='search' />\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("template",null,(0,a.kt)("view",{class:"components-page"},(0,a.kt)("icon",{size:"60",type:"success"}),(0,a.kt)("icon",{size:"60",type:"info"}),(0,a.kt)("icon",{size:"60",type:"warn",color:"#ccc"}),(0,a.kt)("icon",{size:"60",type:"warn"}),(0,a.kt)("icon",{size:"60",type:"waiting"}),(0,a.kt)("icon",{size:"20",type:"success_no_circle"}),(0,a.kt)("icon",{size:"20",type:"warn"}),(0,a.kt)("icon",{size:"20",type:"success"}),(0,a.kt)("icon",{size:"20",type:"download"}),(0,a.kt)("icon",{size:"20",type:"clear",color:"red"}),(0,a.kt)("icon",{size:"20",type:"search"}))))),(0,a.kt)("h2",o({},{id:"iconprops"}),"IconProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof TIconType")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"icon \u7684\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"size"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"23")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"icon \u7684\u5927\u5c0f\uff0c\u5355\u4f4dpx")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"icon \u7684\u989c\u8272\uff0c\u540c css \u7684 color")))),(0,a.kt)("h3",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"IconProps.type"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"IconProps.size"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"IconProps.color"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,a.kt)("h3",o({},{id:"ticontype"}),"TIconType"),(0,a.kt)("p",null,"icon \u7684\u7c7b\u578b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6210\u529f\u56fe\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"success_no_circle"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6210\u529f\u56fe\u6807\uff08\u4e0d\u5e26\u5916\u5708\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"info"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u4fe1\u606f\u56fe\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"warn"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u8b66\u544a\u56fe\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"waiting"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7b49\u5f85\u56fe\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"cancel"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u53d6\u6d88\u56fe\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"download"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u4e0b\u8f7d\u56fe\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"search"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u641c\u7d22\u56fe\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"clear"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6e05\u9664\u56fe\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"circle"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5706\u73af\u56fe\u6807(\u591a\u9009\u63a7\u4ef6\u56fe\u6807\u672a\u9009\u62e9)\u300c\u5fae\u4fe1\u6587\u6863\u672a\u6807\u6ce8\u5c5e\u6027\u300d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"info_circle"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5e26\u5706\u73af\u7684\u4fe1\u606f\u56fe\u6807\u300c\u5fae\u4fe1\u6587\u6863\u672a\u6807\u6ce8\u5c5e\u6027\u300d")))))}k.isMDXComponent=!0},66839:function(e,t,n){t.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},56174:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},82078:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},92182:function(e,t,n){t.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},58884:function(e,t,n){t.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},21207:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);