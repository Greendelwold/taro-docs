"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51977],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78016:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(93106);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel"},{hidden:t,className:n}),e)}},27205:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(93106),o=n(60467),a=n(7617),l=n(26679),i="tabItem_ySgZ";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e){var t,n;const{lazy:o,block:s,defaultValue:u,values:p,groupId:m,className:f}=e,d=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=p?p:d.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,a.lx)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const y=null===u?u:null!==(h=null!=u?u:null===(t=d.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==h?h:null===(n=d[0])||void 0===n?void 0:n.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,a.UB)(),[O,k]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,a.o5)();if(null!=m){const e=g[m];null!=e&&e!==O&&v.some((t=>t.value===e))&&k(e)}const P=e=>{const t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==O&&(j(t),k(r),null!=m&&w(m,r))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},f)},v.map((({value:e,label:t,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:P,onClick:P},n,{className:(0,l.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),o?(0,r.cloneElement)(d.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function u(e){const t=(0,o.Z)();return r.createElement(s,c({key:String(t)},e))}},6904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});n(93106);var r=n(79874),o=n(27205),a=n(78016);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"RootPortal",sidebar_label:"RootPortal"},s=void 0,u={unversionedId:"components/viewContainer/root-portal",id:"components/viewContainer/root-portal",title:"RootPortal",description:"root-portal",source:"@site/docs/components/viewContainer/root-portal.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/root-portal",permalink:"/taro-docs/docs/next/components/viewContainer/root-portal",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/viewContainer/root-portal.md",tags:[],version:"current",frontMatter:{title:"RootPortal",sidebar_label:"RootPortal"},sidebar:"components",previous:{title:"PageContainer",permalink:"/taro-docs/docs/next/components/viewContainer/page-container"},next:{title:"ScrollView",permalink:"/taro-docs/docs/next/components/viewContainer/scroll-view"}},p={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],f={toc:m};function d(e){var{components:t}=e,c=i(e,["components"]);return(0,r.kt)("wrapper",l({},f,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"root-portal\n\u4f7f\u6574\u4e2a\u5b50\u6811\u4ece\u9875\u9762\u4e2d\u8131\u79bb\u51fa\u6765\uff0c\u7c7b\u4f3c\u4e8e\u5728 CSS \u4e2d\u4f7f\u7528 fixed position \u7684\u6548\u679c\u3002\u4e3b\u8981\u7528\u4e8e\u5236\u4f5c\u5f39\u7a97\u3001\u5f39\u51fa\u5c42\u7b49\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(21207).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(56174).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(82078).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(13555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType\n")),(0,r.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"import { useState } from 'react'\nimport { RootPortal, View, Button } from '@tarojs/components'\n\nexport default function RootPortalExample {\n  const [show, setShow] = useState(false)\n  const toggle = () => {\n    setShow(!show)\n  }\n  render () {\n    return (\n      <View>\n        <Button onClick={toggle}>\u663e\u793aroot-portal</Button>\n        {\n          show && (<RootPortal><View>content</View></RootPortal>)\n        }\n      </View>\n    )\n  }\n}\n")))))}d.isMDXComponent=!0},56174:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},13555:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},82078:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},21207:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);