(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10],{270:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"i",function(){return s}),e.d(n,"h",function(){return u}),e.d(n,"e",function(){return l}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return c}),e.d(n,"b",function(){return f}),e.d(n,"d",function(){return d}),e.d(n,"k",function(){return h}),e.d(n,"l",function(){return p}),e.d(n,"c",function(){return v}),e.d(n,"j",function(){return g});e(21),e(79),e(138),e(277),e(137),e(54),e(53),e(276),e(78),e(271),e(80);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(r,"").replace(i,"")}function l(t){return s.test(t)}function o(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(l(t))return t;var n=t.match(r),e=n?n[0]:"",i=u(t);return a.test(i)?t:i+".html"+e}function d(t,n){var e=t.hash,i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&u(t.path)===u(n)}function h(t,n,e){e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var u=a[s];".."===u?i.pop():"."!==u&&i.push(u)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=u(n),i=0;i<t.length;i++)if(u(t[i].path)===r)return Object.assign({},t[i],{type:"page",path:f(n)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function p(t,n,e,r){var i=e.pages,a=e.themeConfig,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){var n=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map(function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}})}]}(t);var u=s.sidebar||a.sidebar;if(u){var l=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(e))return{base:e,config:n[e]};var r;return{}}(n,u),o=l.base,c=l.config;return c?c.map(function(t){return function t(n,e,r,i){if("string"==typeof n)return h(e,n,r);if(Array.isArray(n))return Object.assign(h(e,n[0],r),{title:n[1]});i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=n.children||[];return{type:"group",title:n.title,children:a.map(function(n){return t(n,e,r,!0)}),collapsable:!1!==n.collapsable}}(t,i,o)}):[]}return[]}function v(t){var n;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},271:function(t,n,e){"use strict";var r=e(134),i=e(139),a=e(13),s=e(18),u=e(273),l=e(136),o=e(15),c=e(135),f=e(55),d=e(2),h=[].push,p=Math.min,v=!d(function(){return!RegExp(4294967295,"y")});r("split",2,function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(s(this)),a=void 0===e?4294967295:e>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return n.call(r,t,a);for(var u,l,o,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,d+"g");(u=f.call(v,r))&&!((l=v.lastIndex)>p&&(c.push(r.slice(p,u.index)),u.length>1&&u.index<r.length&&h.apply(c,u.slice(1)),o=u[0].length,p=l,c.length>=a));)v.lastIndex===u.index&&v.lastIndex++;return p===r.length?!o&&v.test("")||c.push(""):c.push(r.slice(p)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var i=s(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,i,e):r.call(String(i),n,e)},function(t,i){var s=e(r,t,this,i,r!==n);if(s.done)return s.value;var f=a(t),d=String(this),h=u(f,RegExp),g=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),b=new h(v?f:"^(?:"+f.source+")",m),k=void 0===i?4294967295:i>>>0;if(0===k)return[];if(0===d.length)return null===c(b,d)?[d]:[];for(var x=0,_=0,y=[];_<d.length;){b.lastIndex=v?_:0;var C,$=c(b,v?d:d.slice(_));if(null===$||(C=p(o(b.lastIndex+(v?0:_)),d.length))===x)_=l(d,_,g);else{if(y.push(d.slice(x,_)),y.length===k)return y;for(var w=1;w<=$.length-1;w++)if(y.push($[w]),y.length===k)return y;_=x=C}}return y.push(d.slice(x)),y}]},!v)},272:function(t,n,e){"use strict";var r=e(1),i=e(33).some,a=e(35),s=e(16),u=a("some"),l=s("some");r({target:"Array",proto:!0,forced:!u||!l},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},273:function(t,n,e){var r=e(13),i=e(81),a=e(3)("species");t.exports=function(t,n){var e,s=r(t).constructor;return void 0===s||null==(e=r(s)[a])?n:i(e)}},276:function(t,n,e){"use strict";var r=e(134),i=e(13),a=e(15),s=e(18),u=e(136),l=e(135);r("match",1,function(t,n,e){return[function(n){var e=s(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var s=i(t),o=String(this);if(!s.global)return l(s,o);var c=s.unicode;s.lastIndex=0;for(var f,d=[],h=0;null!==(f=l(s,o));){var p=String(f[0]);d[h]=p,""===p&&(s.lastIndex=u(o,a(s.lastIndex),c)),h++}return 0===h?null:d}]})},277:function(t,n,e){e(1)({target:"Array",stat:!0},{isArray:e(34)})},284:function(t,n,e){"use strict";e.r(n);e(272),e(82),e(287);var r=e(270),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(n){return n===t.link}):"/"===this.link}},methods:{isExternal:r.e,isMailto:r.f,isTel:r.g}},a=e(32),s=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);n.default=s.exports},287:function(t,n,e){"use strict";var r=e(1),i=e(288);r({target:"String",proto:!0,forced:e(289)("link")},{link:function(t){return i(this,"a","href",t)}})},288:function(t,n,e){var r=e(18),i=/"/g;t.exports=function(t,n,e,a){var s=String(r(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(a).replace(i,"&quot;")+'"'),u+">"+s+"</"+n+">"}},289:function(t,n,e){var r=e(2);t.exports=function(t){return r(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})}},293:function(t,n,e){},322:function(t,n,e){"use strict";var r=e(293);e.n(r).a},340:function(t,n,e){"use strict";e.r(n);var r={components:{NavLink:e(284).default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(e(322),e(32)),a=Object(i.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),e("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,function(n,r){return e("div",{key:r,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])}),0):t._e(),t._v(" "),e("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null);n.default=a.exports}}]);