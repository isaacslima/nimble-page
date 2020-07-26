(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{29:function(e,t){e.exports="<div class=doc-1x-get-started-page> <h1> {{getText('TITLE')}} </h1> <section> <h4> <a href=#install-cli name=install-cli> {{getText('INSTALL_CLI.TITLE')}} </a> </h4> <p class=mb-4> {{getText('INSTALL_CLI.TEXT_1')}} <a href=doc/1x/cli>{{lang.get('GLOBAL.HERE')}}</a>. </p> <h5 class=\"mt-3 mb-0\"> {{getText('INSTALL_CLI.TEXT_2')}} </h5> <pre>\n            <code class=shell>\n$ npm i @nimble-ts/cli -g\n            </code>\n        </pre> <p class=mb-4> {{getText('INSTALL_CLI.TEXT_3')}} <a href=doc/1x/cli>{{lang.get('GLOBAL.HERE')}}</a>. </p> </section> <section> <h4 class=mb-3> <a href=#create-a-project name=create-a-project> {{getText('CREATE_A_PROJECT.TITLE')}} </a> </h4> <h5 class=\"mt-3 mb-0\" [html]=\"getText('CREATE_A_PROJECT.TEXT_1')\"></h5> <pre class=mb-0>\n            <code class=shell>\n$ nb\n            </code>\n        </pre> <h5 class=\"mt-0 mb-0\" [html]=\"getText('CREATE_A_PROJECT.TEXT_2')\"></h5> <pre class=mb-0>\n            <code class=shell>\n$ ? Do you want create new Nimble project? (Y/n) \n            </code>\n        </pre> <h5 class=\"mt-0 mb-0\" [html]=\"getText('CREATE_A_PROJECT.TEXT_3')\"></h5> <pre class=mb-0>\n            <code class=shell>\n? What is name of the your project? (ex.: my-project) \n            </code>\n        </pre> <h5 class=\"mt-0 mb-0\" [html]=\"getText('CREATE_A_PROJECT.TEXT_4')\"></h5> <pre>\n            <code class=shell>\npublic\n├─ assets\n├─ favicon.ico\n└─ index.html\nsrc\n├─ app\n├─ environments\n├─ scss\n├─ main.ts\n└─ style.scss\nnimble.json\npackage.json\ntsconfig.json\n            </code>\n        </pre> <p class=mb-5> {{getText('CREATE_A_PROJECT.TEXT_4_1')}} <a href=doc/1x/essentials/structure>{{lang.get('GLOBAL.HERE')}}</a>. </p> <h5 class=\"mt-3 mb-0\" [html]=\"getText('CREATE_A_PROJECT.TEXT_5')\"></h5> <pre>\n            <code class=shell>\nnb serve\n            </code>\n        </pre> <p class=mb-5> {{getText('CREATE_A_PROJECT.TEXT_5_1')}} <a href=doc/1x/cli>{{lang.get('GLOBAL.HERE')}}</a>. </p> </section> </div>"},30:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t),n.d(t,"Doc1xGetStartedPage",(function(){return T}));var c,o=n(1),s=n(4),a=(c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=function(e,t,n,c){var o,s=arguments.length,a=s<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,n):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,c);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e){function t(t){var n=e.call(this)||this;return n.lang=t,n.showCode1=!0,n}return a(t,e),t.prototype.getText=function(e){return this.lang.get("DOC.1x.CONTENT.ESSENTIALS.GET_STARTED."+e)},t.prototype.onEnter=function(){},t.prototype.onExit=function(){},t=r([Object(o.f)({template:n(29),style:n(30),title:"Get started / Document - Nimble"}),l("design:paramtypes",[s.a])],t)}(o.e)}}]);