(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,e,r){"use strict";r.r(e);r(47),r(26),r(66),r(174),r(80);var n={created:function(){console.log("created")},mounted:function(){console.log("mounted loder"),setTimeout((function(){console.log("animation handler"),AnimationManager.startLoadAnimation(),Application.start()}),1500);var t=this.$root._route.hash;console.log("path",t),t=this.getsection(t),window.addEventListener("load",(function(e){if(console.log("scroll smoth"),t){var element=document.getElementById(t);setTimeout((function(){element.scrollIntoView({behavior:"smooth"})}),2100),console.log("scroll smoth")}}))},methods:{animationManager:function(){setTimeout((function(){console.log("animation handler"),Application.start(),AnimationManager.startLoadAnimation()}),1500)},getsection:function(t,e){e||(e=location.href),t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var r=new RegExp("[\\#&]([^&#]*)").exec(e);return null==r?null:r[1]}},head:{link:[{rel:"stylesheet",href:"/css/loader.css"},{rel:"stylesheet",href:"/css/application.css"}],script:[{src:"/js/application.js",body:!0}]}},o=r(9),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"loader"}},[r("div",{staticClass:"loader-content"},[r("div",{staticClass:"stripe-loader"},[r("div",{staticClass:"stripe"}),t._v(" "),r("div",{staticClass:"stripe"}),t._v(" "),r("div",{staticClass:"stripe"})])])]),t._v(" "),r("div",{attrs:{id:"loader-after"}}),t._v(" "),r("div",{attrs:{id:"page-transition"}},[r("div",{staticClass:"page-transition-content"},[r("div",{staticClass:"stripe-loader"},[r("div",{staticClass:"stripe"}),t._v(" "),r("div",{staticClass:"stripe"}),t._v(" "),r("div",{staticClass:"stripe"})])])]),t._v(" "),r("div",{attrs:{id:"page-transition-after"}})])}],!1,null,null,null);e.default=component.exports},135:function(t,e,r){"use strict";r.r(e);r(263);var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"main-navigation",attrs:{itemscope:"",itemtype:"http://schema.org/SiteNavigationElement"}},[r("div",{staticClass:"content nav-content"},[r("NuxtLink",{staticClass:"nav-logo",attrs:{to:"/","data-destination":"home",itemprop:"url"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"my-svg",version:"1.0",width:"256",height:"256",viewBox:"0 0 500.000000 500.000000",preserveAspectRatio:"xMidYMid meet"}},[r("g",{attrs:{xmlns:"http://www.w3.org/2000/svg",transform:"translate(0.000000,500.000000) scale(0.100000,-0.100000)",stroke:"none",fill:"#FFF"}},[r("path",{attrs:{d:"M691 4880 c-119 -43 -220 -135 -275 -250 -29 -62 -31 -72 -34 -205 l-3 -140 155 -142 155 -143 1318 0 c1152 0 1326 -2 1378 -15 181 -48 332 -199 380 -380 61 -235 -59 -495 -276 -598 -109 -51 -151 -57 -439 -57 l-260 0 0 -449 0 -449 288 -4 c329 -4 348 -8 476 -95 271 -185 304 -564 70 -800 -68 -67 -170 -123 -262 -142 -31 -6 -163 -11 -312 -11 l-260 0 0 -451 0 -451 333 4 c316 4 337 6 437 31 293 72 505 189 706 391 272 272 414 613 414 990 0 343 -104 642 -313 903 l-68 85 49 56 c158 182 275 439 317 691 21 126 16 391 -10 511 -62 284 -189 516 -394 720 -171 170 -338 275 -550 344 -228 75 -122 71 -1621 73 -1309 2 -1346 2 -1399 -17z m275 -851 c15 -26 -6 -15 -37 18 l-34 36 32 -22 c18 -12 35 -27 39 -32z"}}),t._v(" "),r("path",{attrs:{d:"M380 4131 l0 -131 121 0 122 0 -44 48 c-23 26 -78 85 -121 131 l-78 84 0 -132z"}}),t._v(" "),r("path",{attrs:{d:"M1670 3347 l0 -433 393 -361 c215 -198 418 -384 450 -413 l57 -52 0 135 0 135 -211 228 c-253 274 -279 303 -214 243 28 -25 134 -123 238 -218 l187 -173 0 671 0 671 -450 0 -450 0 0 -433z"}}),t._v(" "),r("path",{attrs:{d:"M1670 2676 l1 -201 447 -419 447 -418 3 136 3 136 -382 413 c-211 226 -413 444 -451 483 l-68 72 0 -202z"}}),t._v(" "),r("path",{attrs:{d:"M1672 2175 l3 -189 420 -388 c231 -214 432 -397 448 -409 l27 -20 -1 123 0 123 -435 460 c-239 253 -441 467 -450 475 -13 13 -14 -7 -12 -175z"}}),t._v(" "),r("path",{attrs:{d:"M1670 1731 l0 -140 378 -348 c207 -191 380 -352 384 -358 13 -17 9 -59 -8 -83 -15 -21 -47 -28 -78 -16 -12 5 -205 209 -633 673 l-42 46 0 -115 0 -115 184 -168 c102 -92 185 -174 185 -182 0 -8 -9 -19 -21 -25 -23 -13 -42 4 -247 225 l-102 110 2 -405 3 -405 34 -70 c45 -91 124 -171 216 -216 l69 -34 288 -3 288 -3 0 405 0 405 -446 480 c-245 265 -447 481 -450 481 -2 0 -4 -63 -4 -139z"}})])]),t._v(" "),r("span",{staticClass:"visual-hide",attrs:{itemprop:"name"}},[t._v(".home()")]),r("span",{attrs:{"aria-label":"Taha Bouras's Logo"}},[t._v("Taha\n          Bouras's Logo")])]),t._v(" "),t._m(0),t._v(" "),r("ul",{staticClass:"nav-links"},[r("li",[r("NuxtLink",{attrs:{to:"/","data-destination":"home"}},[t._v(".home()")])],1),t._v(" "),r("li",{attrs:{itemprop:"name"}},[r("NuxtLink",{attrs:{to:"/#about","data-scroll":"",itemprop:"url"}},[t._v(".about()")])],1),t._v(" "),r("li",{attrs:{itemprop:"name"}},[r("NuxtLink",{attrs:{to:"/#portfolio","data-scroll":"",itemprop:"url"}},[t._v(".portfolio()")])],1),t._v(" "),r("li",{attrs:{itemprop:"name"}},[r("NuxtLink",{attrs:{to:"/blog","data-scroll":"",itemprop:"url"}},[t._v(".blog()")])],1),t._v(" "),t._m(1)])],1)]),t._v(" "),r("nav",{staticClass:"mobile-menu"},[t._m(2),t._v(" "),r("ul",{staticClass:"mobile-nav-links"},[r("li",[r("NuxtLink",{attrs:{to:"/","data-destination":"home"}},[t._v(".home()")])],1),t._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/#about","data-scroll":""}},[t._v(".about()")])],1),t._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/#portfolio","data-scroll":""}},[t._v(".portfolio()")])],1),t._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/blog","data-scroll":""}},[t._v(".blog()")])],1),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-toggle",attrs:{"aria-label":"Mobile Menu"}},[e("span",{staticClass:"menu-trigger"},[e("i",{staticClass:"menu-trigger-bar top"}),e("i",{staticClass:"menu-trigger-bar middle"}),e("i",{staticClass:"menu-trigger-bar bottom"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:" open-contact",attrs:{href:"#"}},[t._v(".contact()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"close-trigger",attrs:{"aria-label":"Close"}},[e("i",{staticClass:"close-trigger-bar left"}),e("i",{staticClass:"close-trigger-bar right"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:" open-contact",attrs:{href:"#"}},[t._v(".contact()")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav-social-stripe"},[r("li",[r("a",{attrs:{href:"https://www.linkedin.com/in/taha-bouras/",target:"_blank",rel:"noopener","aria-label":"Linkedin"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/linkdin-white.svg"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/taha2002",target:"_blank",rel:"noopener","aria-label":"Github"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/github-white.svg"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100007522123943",target:"_blank",rel:"noopener","aria-label":"Facebook"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/facebook-white.svg"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"mailto:tahadevbou@gmail.com",target:"_blank",rel:"noopener","aria-label":"Email"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/email-white.svg"}})])])])}],!1,null,null,null);e.default=component.exports},180:function(t,e,r){var content=r(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("257af960",content,!0,{sourceMap:!1})},181:function(t,e,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("0cad5ddc",content,!0,{sourceMap:!1})},182:function(t,e,r){var content=r(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("8dee93b0",content,!0,{sourceMap:!1})},183:function(t,e,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("80cc8980",content,!0,{sourceMap:!1})},191:function(t,e,r){"use strict";var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("LoaderAnimation",{key:t.$route.path}),t._v(" "),r("div",{staticClass:"bright-theme blog",attrs:{id:"page-wrap"}},[r("Header"),t._v(" "),r("Nuxt")],1),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{LoaderAnimation:r(105).default,Header:r(135).default,Footer:r(78).default})},192:function(t,e,r){"use strict";r(265);var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("LoaderAnimation",{key:t.$route.path}),t._v(" "),r("div",{attrs:{id:"page-wrap-no"}},[r("HeaderPortfolio"),t._v(" "),r("Nuxt")],1),t._v(" "),r("Footer")],1)}),[],!1,null,"4dcc289c",null);e.a=component.exports;installComponents(component,{LoaderAnimation:r(105).default,HeaderPortfolio:r(274).default,Footer:r(78).default})},193:function(t,e,r){"use strict";var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("LoaderAnimation",{key:t.$route.path}),t._v(" "),r("div",{attrs:{id:"page-wrap"}},[r("Header"),t._v(" "),r("Nuxt")],1),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{LoaderAnimation:r(105).default,Header:r(135).default,Footer:r(78).default})},194:function(t,e,r){"use strict";var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("LoaderAnimation",{key:t.$route.path}),t._v(" "),r("div",{attrs:{id:"page-wrap"}},[r("HeaderHome"),t._v(" "),r("Nuxt")],1),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{LoaderAnimation:r(105).default,HeaderHome:r(275).default,Footer:r(78).default})},195:function(t,e,r){r(196),t.exports=r(197)},261:function(t,e,r){var content=r(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("470cbfe5",content,!0,{sourceMap:!1})},262:function(t,e,r){var n=r(39)(!1);n.push([t.i,"\r\n\r\n\r\n.st0 {\r\n    clip-path: url(#XMLID_8_);\r\n    fill: none;\r\n    stroke: url(#XMLID_9_);\r\n    stroke-width: 70.344;\r\n    stroke-miterlimit: 10;\r\n}\r\n\r\n.st1 {\r\n    clip-path: url(#XMLID_11_);\r\n    fill: none;\r\n    stroke: url(#XMLID_12_);\r\n    stroke-width: 70.344;\r\n    stroke-miterlimit: 10;\r\n}",""]),t.exports=n},263:function(t,e,r){"use strict";r(180)},264:function(t,e,r){var n=r(39)(!1);n.push([t.i,"\n.nuxt-logo {\r\n  height: 180px;\n}\r\n",""]),t.exports=n},265:function(t,e,r){"use strict";r(181)},266:function(t,e,r){var n=r(39)(!1);n.push([t.i,"\n#page-wrap[data-v-4dcc289c]{\r\n    height: 803px;\r\n    width: 100%;\n}\r\n",""]),t.exports=n},267:function(t,e,r){"use strict";r(182)},268:function(t,e,r){var n=r(39)(!1);n.push([t.i,"\n.nuxt-logo {\r\n  height: 180px;\n}\r\n",""]),t.exports=n},269:function(t,e,r){"use strict";r(183)},270:function(t,e,r){var n=r(39)(!1);n.push([t.i,"\n.nuxt-logo {\r\n  height: 180px;\n}\r\n",""]),t.exports=n},271:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"getter",(function(){return l})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return v}));var n=r(10),o=(r(46),function(){return{counter:0}}),l={getCounter:function(t){return t.counter}},c={increment:function(t){t.counter++}},v={fetchCounter:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={data:10},t.counter=r.data,e.abrupt("return",r.data);case 3:case"end":return e.stop()}}),e)})))()}}},272:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o}));var n=function(){return{posts:[]}},o={SET_POSTS:function(t,e){t.posts=e}}},273:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o}));var n=function(){return{posts:[]}},o={SET_POSTS:function(t,e){t.posts=e,console.log("setttt",e)}}},274:function(t,e,r){"use strict";r.r(e);r(267);var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"main-navigation",attrs:{itemscope:"",itemtype:"http://schema.org/SiteNavigationElement"}},[r("div",{staticClass:"content nav-content"},[r("NuxtLink",{staticClass:"nav-logo",attrs:{to:"/","data-destination":"home",itemprop:"url"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"my-svg",version:"1.0",width:"256",height:"256",viewBox:"0 0 500.000000 500.000000",preserveAspectRatio:"xMidYMid meet"}},[r("g",{attrs:{xmlns:"http://www.w3.org/2000/svg",transform:"translate(0.000000,500.000000) scale(0.100000,-0.100000)",stroke:"none",fill:"#FFF"}},[r("path",{attrs:{d:"M691 4880 c-119 -43 -220 -135 -275 -250 -29 -62 -31 -72 -34 -205 l-3 -140 155 -142 155 -143 1318 0 c1152 0 1326 -2 1378 -15 181 -48 332 -199 380 -380 61 -235 -59 -495 -276 -598 -109 -51 -151 -57 -439 -57 l-260 0 0 -449 0 -449 288 -4 c329 -4 348 -8 476 -95 271 -185 304 -564 70 -800 -68 -67 -170 -123 -262 -142 -31 -6 -163 -11 -312 -11 l-260 0 0 -451 0 -451 333 4 c316 4 337 6 437 31 293 72 505 189 706 391 272 272 414 613 414 990 0 343 -104 642 -313 903 l-68 85 49 56 c158 182 275 439 317 691 21 126 16 391 -10 511 -62 284 -189 516 -394 720 -171 170 -338 275 -550 344 -228 75 -122 71 -1621 73 -1309 2 -1346 2 -1399 -17z m275 -851 c15 -26 -6 -15 -37 18 l-34 36 32 -22 c18 -12 35 -27 39 -32z"}}),t._v(" "),r("path",{attrs:{d:"M380 4131 l0 -131 121 0 122 0 -44 48 c-23 26 -78 85 -121 131 l-78 84 0 -132z"}}),t._v(" "),r("path",{attrs:{d:"M1670 3347 l0 -433 393 -361 c215 -198 418 -384 450 -413 l57 -52 0 135 0 135 -211 228 c-253 274 -279 303 -214 243 28 -25 134 -123 238 -218 l187 -173 0 671 0 671 -450 0 -450 0 0 -433z"}}),t._v(" "),r("path",{attrs:{d:"M1670 2676 l1 -201 447 -419 447 -418 3 136 3 136 -382 413 c-211 226 -413 444 -451 483 l-68 72 0 -202z"}}),t._v(" "),r("path",{attrs:{d:"M1672 2175 l3 -189 420 -388 c231 -214 432 -397 448 -409 l27 -20 -1 123 0 123 -435 460 c-239 253 -441 467 -450 475 -13 13 -14 -7 -12 -175z"}}),t._v(" "),r("path",{attrs:{d:"M1670 1731 l0 -140 378 -348 c207 -191 380 -352 384 -358 13 -17 9 -59 -8 -83 -15 -21 -47 -28 -78 -16 -12 5 -205 209 -633 673 l-42 46 0 -115 0 -115 184 -168 c102 -92 185 -174 185 -182 0 -8 -9 -19 -21 -25 -23 -13 -42 4 -247 225 l-102 110 2 -405 3 -405 34 -70 c45 -91 124 -171 216 -216 l69 -34 288 -3 288 -3 0 405 0 405 -446 480 c-245 265 -447 481 -450 481 -2 0 -4 -63 -4 -139z"}})])]),t._v(" "),r("span",{staticClass:"visual-hide",attrs:{itemprop:"name"}},[t._v(".home()")]),r("span",{attrs:{"aria-label":"Taha Bouras's Logo"}},[t._v("Taha\n          Bouras's Logo")])]),t._v(" "),t._m(0),t._v(" "),r("ul",{staticClass:"nav-links"},[r("li",{},[r("NuxtLink",{attrs:{to:"/","data-destination":"home",rel:"nofollow"}},[r("span",{staticClass:"nav-link-icon",attrs:{"aria-label":"Back"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"476.2",height:"476.2",viewbox:"174 -174.2 476.2 476.2"}},[r("path",{attrs:{d:"M244.6 134.5l21.2-21.2-34.4-34.4h418.8v-30H231.4l34.4-34.4-21.2-21.2L174 63.9"}})])]),t._v("Turn Back Home\n          ")])],1),t._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/#about","data-scroll":"",itemprop:"url"}},[t._v(".about()")])],1),t._v(" "),t._m(1)])],1)]),t._v(" "),r("nav",{staticClass:"mobile-menu"},[t._m(2),t._v(" "),r("ul",{staticClass:"mobile-nav-links"},[r("li",[r("NuxtLink",{attrs:{to:"/","data-destination":"home"}},[t._v(".home()")])],1),t._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/#about","data-scroll":""}},[t._v(".about()")])],1),t._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/#portfolio","data-scroll":""}},[t._v(".portfolio()")])],1),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-toggle",attrs:{"aria-label":"Mobile Menu"}},[e("span",{staticClass:"menu-trigger"},[e("i",{staticClass:"menu-trigger-bar top"}),e("i",{staticClass:"menu-trigger-bar middle"}),e("i",{staticClass:"menu-trigger-bar bottom"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:" open-contact",attrs:{href:"#"}},[t._v(".contact()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"close-trigger",attrs:{"aria-label":"Close"}},[e("i",{staticClass:"close-trigger-bar left"}),e("i",{staticClass:"close-trigger-bar right"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:"open-contact",attrs:{href:"#"}},[t._v(".contact()")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav-social-stripe"},[r("li",[r("a",{attrs:{href:"https://www.linkedin.com/in/taha-bouras/",target:"_blank",rel:"noopener","aria-label":"Linkedin"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/linkdin-white.svg"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/taha2002",target:"_blank",rel:"noopener","aria-label":"Github"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/github-white.svg"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100007522123943",target:"_blank",rel:"noopener","aria-label":"Facebook"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/facebook-white.svg"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"mailto:tahadevbou@gmail.com",target:"_blank",rel:"noopener","aria-label":"Email"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/email-white.svg"}})])])])}],!1,null,null,null);e.default=component.exports},275:function(t,e,r){"use strict";r.r(e);r(269);var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"main-navigation",attrs:{itemscope:"",itemtype:"http://schema.org/SiteNavigationElement"}},[r("div",{staticClass:"content nav-content"},[r("NuxtLink",{staticClass:"nav-logo",attrs:{to:"/","data-destination":"home",itemprop:"url"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"my-svg",version:"1.0",width:"256",height:"256",viewBox:"0 0 500.000000 500.000000",preserveAspectRatio:"xMidYMid meet"}},[r("g",{attrs:{xmlns:"http://www.w3.org/2000/svg",transform:"translate(0.000000,500.000000) scale(0.100000,-0.100000)",stroke:"none",fill:"#FFF"}},[r("path",{attrs:{d:"M691 4880 c-119 -43 -220 -135 -275 -250 -29 -62 -31 -72 -34 -205 l-3 -140 155 -142 155 -143 1318 0 c1152 0 1326 -2 1378 -15 181 -48 332 -199 380 -380 61 -235 -59 -495 -276 -598 -109 -51 -151 -57 -439 -57 l-260 0 0 -449 0 -449 288 -4 c329 -4 348 -8 476 -95 271 -185 304 -564 70 -800 -68 -67 -170 -123 -262 -142 -31 -6 -163 -11 -312 -11 l-260 0 0 -451 0 -451 333 4 c316 4 337 6 437 31 293 72 505 189 706 391 272 272 414 613 414 990 0 343 -104 642 -313 903 l-68 85 49 56 c158 182 275 439 317 691 21 126 16 391 -10 511 -62 284 -189 516 -394 720 -171 170 -338 275 -550 344 -228 75 -122 71 -1621 73 -1309 2 -1346 2 -1399 -17z m275 -851 c15 -26 -6 -15 -37 18 l-34 36 32 -22 c18 -12 35 -27 39 -32z"}}),t._v(" "),r("path",{attrs:{d:"M380 4131 l0 -131 121 0 122 0 -44 48 c-23 26 -78 85 -121 131 l-78 84 0 -132z"}}),t._v(" "),r("path",{attrs:{d:"M1670 3347 l0 -433 393 -361 c215 -198 418 -384 450 -413 l57 -52 0 135 0 135 -211 228 c-253 274 -279 303 -214 243 28 -25 134 -123 238 -218 l187 -173 0 671 0 671 -450 0 -450 0 0 -433z"}}),t._v(" "),r("path",{attrs:{d:"M1670 2676 l1 -201 447 -419 447 -418 3 136 3 136 -382 413 c-211 226 -413 444 -451 483 l-68 72 0 -202z"}}),t._v(" "),r("path",{attrs:{d:"M1672 2175 l3 -189 420 -388 c231 -214 432 -397 448 -409 l27 -20 -1 123 0 123 -435 460 c-239 253 -441 467 -450 475 -13 13 -14 -7 -12 -175z"}}),t._v(" "),r("path",{attrs:{d:"M1670 1731 l0 -140 378 -348 c207 -191 380 -352 384 -358 13 -17 9 -59 -8 -83 -15 -21 -47 -28 -78 -16 -12 5 -205 209 -633 673 l-42 46 0 -115 0 -115 184 -168 c102 -92 185 -174 185 -182 0 -8 -9 -19 -21 -25 -23 -13 -42 4 -247 225 l-102 110 2 -405 3 -405 34 -70 c45 -91 124 -171 216 -216 l69 -34 288 -3 288 -3 0 405 0 405 -446 480 c-245 265 -447 481 -450 481 -2 0 -4 -63 -4 -139z"}})])]),t._v(" "),r("span",{staticClass:"visual-hide",attrs:{itemprop:"name"}},[t._v(".home()")]),r("span",{attrs:{"aria-label":"Taha Bouras's Logo"}},[t._v("Taha\n          Bouras's Logo")])]),t._v(" "),t._m(0),t._v(" "),r("ul",{staticClass:"nav-links"},[t._m(1),t._v(" "),t._m(2),t._v(" "),r("li",{attrs:{itemprop:"name"}},[r("NuxtLink",{staticClass:" ",attrs:{to:"/blog","data-scroll":"",itemprop:"url"}},[t._v(".blog()")])],1),t._v(" "),t._m(3),t._v(" "),r("li",{staticStyle:{"vertical-align":"bottom"}},[r("a",{attrs:{href:"#",id:"change-theme"}},[r("svg",{staticStyle:{"margin-bottom":"5px"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"23px",height:"23px",viewBox:"0 0 12 12",version:"1.1"}},[r("g",{attrs:{id:"surface3"}},[r("path",{staticStyle:{stroke:"none","fill-rule":"nonzero","fill-opacity":"1"},attrs:{d:"M 6.019531 0 C 2.699219 0 0 2.699219 0 6.019531 C 0 9.339844 2.699219 12.039062 6.019531 12.039062 C 9.339844 12.039062 12.039062 9.339844 12.039062 6.019531 C 12.039062 2.699219 9.339844 0 6.019531 0 Z M 6.019531 10.984375 L 6.019531 1.050781 C 8.757812 1.050781 10.984375 3.28125 10.984375 6.019531 C 10.984375 8.757812 8.757812 10.984375 6.019531 10.984375 Z M 6.019531 10.984375 "}})])])])])])],1)]),t._v(" "),r("nav",{staticClass:"mobile-menu"},[t._m(4),t._v(" "),r("ul",{staticClass:"mobile-nav-links"},[t._m(5),t._v(" "),t._m(6),t._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/blog"}},[t._v(".blog()")])],1),t._v(" "),t._m(7)]),t._v(" "),t._m(8)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-toggle",attrs:{"aria-label":"Mobile Menu"}},[r("span",{staticClass:"menu-trigger"},[r("i",{staticClass:"menu-trigger-bar top"}),t._v(" "),r("i",{staticClass:"menu-trigger-bar middle"}),t._v(" "),r("i",{staticClass:"menu-trigger-bar bottom"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{attrs:{itemprop:"name"}},[r("a",{staticClass:" ",attrs:{href:"#about","data-scroll":"",itemprop:"url"}},[t._v(".about()")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{attrs:{itemprop:"name"}},[r("a",{staticClass:" ",attrs:{href:"#portfolio","data-scroll":"",itemprop:"url"}},[t._v(".portfolio()")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:" open-contact",attrs:{href:"#"}},[t._v(".contact()")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"close-trigger",attrs:{"aria-label":"Close"}},[r("i",{staticClass:"close-trigger-bar left"}),t._v(" "),r("i",{staticClass:"close-trigger-bar right"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#about","data-scroll":""}},[t._v(".about()")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#portfolio","data-scroll":""}},[t._v(".portfolio()")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:"open-contact",attrs:{href:"#"}},[t._v(".contact()")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav-social-stripe"},[r("li",[r("a",{attrs:{href:"https://www.linkedin.com/in/taha-bouras/",target:"_blank",rel:"noopener","aria-label":"Linkedin"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/linkdin-white.svg"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/taha2002",target:"_blank",rel:"noopener","aria-label":"Github"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/github-white.svg"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100007522123943",target:"_blank",rel:"noopener","aria-label":"Facebook"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/facebook-white.svg"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"mailto:tahadevbou@gmail.com",target:"_blank",rel:"noopener","aria-label":"Email"}},[r("img",{staticStyle:{height:"23px",width:"23px"},attrs:{src:"/icons/email-white.svg"}})])])])}],!1,null,null,null);e.default=component.exports},78:function(t,e,r){"use strict";r.r(e);var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer",attrs:{itemscope:"",itemtype:"http://schema.org/WPFooter"}},[r("div",{staticClass:"content"},[r("a",{staticClass:"footer-logo no-smoothstate",attrs:{href:"#top","data-scroll":""}},[r("img",{attrs:{src:"/icons/logo-white.svg",alt:"Taha Bouras's Personal Logo"}}),t._v(" "),r("div",{staticClass:"footer-logo-top-label"},[t._v("Top"),r("div",{staticClass:"footer-logo-top-icon"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 31.479 31.479"}},[r("path",{attrs:{d:"M26.477 10.274a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-8.047-8.047v26.555c0 .619-.492 1.111-1.111 1.111a1.118 1.118 0 0 1-1.127-1.111V3.813L6.59 11.86c-.444.429-1.159.429-1.587 0a1.112 1.112 0 0 1 0-1.587L14.955.321a1.12 1.12 0 0 1 1.571 0l9.951 9.953z",fill:"#1e201d"}})])])])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inner-container text-center"},[r("ul",{staticClass:"footer-links"},[r("li",[r("a",{attrs:{href:"https://www.linkedin.com/in/taha-bouras/",target:"_blank",rel:"noopener"}},[t._v("Linkedin")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/taha2002",target:"_blank",rel:"noopener"}},[t._v("Github")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100007522123943",target:"_blank",rel:"noopener"}},[t._v("Facebook")])]),t._v(" "),r("li",[r("a",{attrs:{href:"mailto:tahadevbou@gmail.com",target:"_blank",rel:"noopener"}},[t._v("Email")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-copy"},[t._v("©\n      Taha Bouras - "),r("a",{staticClass:"no-smoothState",attrs:{href:"mailto:tahadevbou@gmail.com"}},[t._v("Contact")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(78).default})}},[[195,20,1,21]]]);