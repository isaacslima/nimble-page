(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{37:function(t,e){t.exports="<div class=cli-1x-args-page> <h1> {{getText('TITLE')}} </h1> <p class=mt-3 [html]=\"getText('TEXT_1')\"></p> <section> <h4> <a href=#nb-server name=nb-server [html]=\"getText('SERVER.TITLE')\"></a> </h4> <p [html]=\"getText('SERVER.TEXT_1')\" class=mb-2></p> <p [html]=\"getText('SERVER.TEXT_2')\"></p> <pre>\n\t\t\t<code class=shell>\n$ nb server\n\n❯ Nimble project is running at <span style=color:#ff0>http://0.0.0.0:8090/</span> <span style=color:gray>(open in your browser)</span>\n❯ Environment from: <span style=color:#ff0>src/environments/env.local</span>\n\n<span style=color:#0ff>❯ Await, starting the server...</span>\n\t\t\t</code>\n\t\t</pre> </section> <section> <h4> <a href=#nb-build name=nb-build [html]=\"getText('BUILD.TITLE')\"></a> </h4> <p [html]=\"getText('BUILD.TEXT_1')\" class=mb-2></p> <p [html]=\"getText('BUILD.TEXT_2')\"></p> <pre>\n\t\t\t<code class=shell>\n$ nb build\n\n❯ Environment from: <span style=color:#ff0>src/environments/env.local</span>\n<span style=color:#0ff>❯ Await, starting the server...</span>\n\n<span style=color:#8fbc8f>✔ Compiled successfully!</span>\n\n❯ Directory where the build is: <span style=color:#ff0>your-project/build</span>\n\t\t\t</code>\n\t\t</pre> <p [html]=\"getText('BUILD.TEXT_3')\"></p> </section> </div>"},38:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e),n.d(e,"Cli1xCommandsPage",(function(){return a}));var o,r=n(1),s=n(4),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t,e,n,o){var r,s=arguments.length,c=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(c=(s<3?r(c):s>3?r(e,n,c):r(e,n))||c);return s>3&&c&&Object.defineProperty(e,n,c),c},p=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(t){function e(e){var n=t.call(this)||this;return n.lang=e,n}return c(e,t),e.prototype.getText=function(t){return this.lang.get("DOC.1x.CONTENT.CLI.ARGS."+t)},e.prototype.onEnter=function(){},e.prototype.onExit=function(){},e=l([Object(r.f)({template:n(37),style:n(38),title:"CLI / Comandos via argumentos - Nimble"}),p("design:paramtypes",[s.a])],e)}(r.e)}}]);