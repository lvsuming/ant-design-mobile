webpackJsonp([100],{3:function(n,s,a){"use strict";a(7),a(6);var t=Math.floor(window.devicePixelRatio||1);t>=2&&document.querySelector("html").classList.add("pixel-ratio-"+t)},6:function(n,s){},7:function(n,s){},74:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var s={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=n[a]);return s["default"]=n,s}function p(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var e=a[t],p=Object.getOwnPropertyDescriptor(s,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}function c(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function r(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function l(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):p(n,s))}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var i=a(1),u=e(i),k=a(2),f=t(k),d=function(n){function s(){return c(this,s),r(this,n.apply(this,arguments))}return l(s,n),s.prototype.render=function(){var n,s=this.props,a=s.direction,t=s.wrap,e=s.justify,p=s.align,c=s.alignContent,r=s.className,l=s.children,i=s.prefixCls,k=s.style,d=s.onClick,g=(0,f["default"])((n={},o(n,i,!0),o(n,i+"-dir-row","row"===a),o(n,i+"-dir-row-reverse","row-reverse"===a),o(n,i+"-dir-column","column"===a),o(n,i+"-dir-column-reverse","column-reverse"===a),o(n,i+"-nowrap","nowrap"===t),o(n,i+"-wrap","wrap"===t),o(n,i+"-wrap-reverse","wrap-reverse"===t),o(n,i+"-justify-start","start"===e),o(n,i+"-justify-end","end"===e),o(n,i+"-justify-center","center"===e),o(n,i+"-justify-between","between"===e),o(n,i+"-justify-around","around"===e),o(n,i+"-align-top","top"===p||"start"===p),o(n,i+"-align-middle","middle"===p||"center"===p),o(n,i+"-align-bottom","bottom"===p||"end"===p),o(n,i+"-align-baseline","baseline"===p),o(n,i+"-align-stretch","stretch"===p),o(n,i+"-align-content-start","start"===c),o(n,i+"-align-content-end","end"===c),o(n,i+"-align-content-center","center"===c),o(n,i+"-align-content-between","between"===c),o(n,i+"-align-content-around","around"===c),o(n,i+"-align-content-stretch","stretch"===c),o(n,r,r),n));return u.createElement("div",{className:g,style:k,onClick:d},l)},s}(u.Component);s["default"]=d,d.propTypes={direction:i.PropTypes.oneOf(["row","row-reverse","column","column-reverse"]),wrap:i.PropTypes.oneOf(["nowrap","wrap","wrap-reverse"]),justify:i.PropTypes.oneOf(["start","end","center","between","around"]),align:i.PropTypes.oneOf(["start","end","center","top","middle","bottom","baseline","stretch"]),alignContent:i.PropTypes.oneOf(["start","end","center","between","around","stretch"])},d.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=s["default"]},75:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var s={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=n[a]);return s["default"]=n,s}function p(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var e=a[t],p=Object.getOwnPropertyDescriptor(s,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}function c(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function r(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function l(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):p(n,s))}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var i=a(1),u=e(i),k=a(2),f=t(k),d=function(n){function s(){return c(this,s),r(this,n.apply(this,arguments))}return l(s,n),s.prototype.render=function(){var n,s=this.props,a=s.children,t=s.className,e=s.prefixCls,p=s.style,c=s.onClick,r=(0,f["default"])((n={},o(n,e+"-item",!0),o(n,t,t),n));return u.createElement("div",{className:r,style:p,onClick:c},a)},s}(u.Component);s["default"]=d,d.defaultProps={prefixCls:"am-flexbox"},n.exports=s["default"]},76:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0});var e=a(74),p=t(e),o=a(75),c=t(o);p["default"].Item=c["default"],s["default"]=p["default"],n.exports=s["default"]},79:function(n,s,a){"use strict";a(3),a(80)},80:function(n,s){},768:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(79),a(76)),p=t(e),o=(a(61),a(37)),c=t(o),r=a(1),l=t(r),i=a(4);t(i);n.exports={content:[],meta:{order:0,title:"\u65b9\u5411\u6027\u56fe\u6807",filename:"components/icon/demo/direction.md",id:"components-icon-demo-direction"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Icon<span class="token punctuation" >,</span> Flex <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> icons <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'step-backward\'</span><span class="token punctuation" >,</span> <span class="token string" >\'step-forward\'</span><span class="token punctuation" >,</span> <span class="token string" >\'fast-backward\'</span><span class="token punctuation" >,</span> <span class="token string" >\'fast-forward\'</span><span class="token punctuation" >,</span> <span class="token string" >\'shrink\'</span><span class="token punctuation" >,</span> <span class="token string" >\'arrow-salt\'</span><span class="token punctuation" >,</span> <span class="token string" >\'down\'</span><span class="token punctuation" >,</span> <span class="token string" >\'up\'</span><span class="token punctuation" >,</span> <span class="token string" >\'left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-down\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-up\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-circle-right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-circle-left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-circle-o-right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-circle-o-left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'circle-right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'circle-left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'circle-o-right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'circle-o-left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'double-right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'double-left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'verticle-right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'verticle-left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'forward\'</span><span class="token punctuation" >,</span> <span class="token string" >\'backward\'</span><span class="token punctuation" >,</span> <span class="token string" >\'rollback\'</span><span class="token punctuation" >,</span> <span class="token string" >\'retweet\'</span><span class="token punctuation" >,</span> <span class="token string" >\'swap\'</span><span class="token punctuation" >,</span> <span class="token string" >\'swap-left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'swap-right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'arrow-right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'arrow-up\'</span><span class="token punctuation" >,</span> <span class="token string" >\'arrow-down\'</span><span class="token punctuation" >,</span> <span class="token string" >\'arrow-left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'play-circle\'</span><span class="token punctuation" >,</span> <span class="token string" >\'play-circle-o\'</span><span class="token punctuation" >,</span> <span class="token string" >\'circle-up\'</span><span class="token punctuation" >,</span> <span class="token string" >\'circle-down\'</span><span class="token punctuation" >,</span> <span class="token string" >\'circle-o-up\'</span><span class="token punctuation" >,</span> <span class="token string" >\'circle-o-down\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-circle-o-up\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-circle-o-down\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-circle-up\'</span><span class="token punctuation" >,</span> <span class="token string" >\'caret-circle-down\'</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> IconExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> paddingTop<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span> <span class="token attr-name" >wrap</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>wrap<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>\n          icons<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token number" >60</span><span class="token punctuation" >,</span> fontSize<span class="token punctuation" >:</span> <span class="token number" >24</span><span class="token punctuation" >,</span> textAlign<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n          <span class="token punctuation" >)</span><span class="token punctuation" >)</span>\n        <span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>IconExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=["step-backward","step-forward","fast-backward","fast-forward","shrink","arrow-salt","down","up","left","right","caret-down","caret-up","caret-left","caret-right","caret-circle-right","caret-circle-left","caret-circle-o-right","caret-circle-o-left","circle-right","circle-left","circle-o-right","circle-o-left","double-right","double-left","verticle-right","verticle-left","forward","backward","rollback","retweet","swap","swap-left","swap-right","arrow-right","arrow-up","arrow-down","arrow-left","play-circle","play-circle-o","circle-up","circle-down","circle-o-up","circle-o-down","caret-circle-o-up","caret-circle-o-down","caret-circle-up","caret-circle-down"],s=l["default"].createClass({displayName:"IconExample",render:function(){return l["default"].createElement("div",{style:{paddingTop:16}},l["default"].createElement(p["default"],{wrap:"wrap"},n.map(function(n,s){return l["default"].createElement("span",{key:s,style:{width:100,height:60,fontSize:24,textAlign:"center"}},l["default"].createElement(c["default"],{type:n}))})))}});return l["default"].createElement(s,null)}}}});