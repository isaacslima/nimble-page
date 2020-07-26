(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{35:function(e,a){e.exports="<div class=cli-1x-commands-page> <h1> {{getText('TITLE')}} </h1> <p class=mt-3 [html]=\"getText('TEXT_1')\"></p> <pre>\n        <code class=shell>\n$ nb\n        </code>\n    </pre> <p [html]=\"getText('TEXT_2')\"></p> <section> <h4> <a href=#generate name=generate [html]=\"getText('GENERATE.TITLE')\"></a> </h4> <p [html]=\"getText('GENERATE.TEXT_1')\" class=mb-3></p> <p [html]=\"getText('GENERATE.TEXT_2')\"></p> <pre>\n            <code class=shell>\n$ nb\n? Select what do you want: <span style=color:gray>(Use arrow keys)</span>\n<span style=color:#0ff>❯ Generate </span>\n  <span style=color:#afafaf>Run server</span>\n  <span style=color:#afafaf>Run build </span>\n  <span style=color:#afafaf>Exit </span>\n            </code>\n        </pre> <p [html]=\"getText('GENERATE.TEXT_3')\"></p> <pre>\n            <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:gray>(Use arrow keys)</span>\n  Page\n  Dialog\n  Directive\n  Service\n            </code>\n        </pre> <section class=pl-3> <h5> <a href=#generate-page name=generate-page [html]=\"getText('GENERATE.PAGE.TITLE')\"></a> </h5> <p [html]=\"getText('GENERATE.PAGE.TEXT_1')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:gray>(Use arrow keys)</span>\n<span style=color:#0ff>❯ Page</span>\n  <span style=color:#afafaf>Dialog</span>\n  <span style=color:#afafaf>Directive</span>\n  <span style=color:#afafaf>Service</span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.PAGE.TEXT_2')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Page</span>\n? What is path and name? <span style=color:#afafaf>(ex.: pages/home)</span> <span class=terminal-io></span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.PAGE.TEXT_3')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Page</span>\n? What is path and name? <span style=color:#afafaf>(ex.: pages/home)</span> <span style=color:#0ff>pages/example</span>\n<span style=color:#8fbc8f>CREATED:</span> src/app/pages/example/example.page.html\n<span style=color:#8fbc8f>CREATED:</span> src/app/pages/example/example.page.scss\n<span style=color:#8fbc8f>CREATED:</span> src/app/pages/example/example.page.ts\n                </code>\n            </pre> </section> <section class=pl-3> <h5> <a href=#generate-dialog name=generate-dialog [html]=\"getText('GENERATE.DIALOG.TITLE')\"></a> </h5> <p [html]=\"getText('GENERATE.DIALOG.TEXT_1')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:gray>(Use arrow keys)</span>\n  <span style=color:#afafaf>Page</span>\n<span style=color:#0ff>❯ Dialog</span>\n  <span style=color:#afafaf>Directive</span>\n  <span style=color:#afafaf>Service</span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.DIALOG.TEXT_2')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Dialog</span>\n? What is path and name? <span style=color:#afafaf>(ex.: dialogs/confirmation)</span> <span class=terminal-io></span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.DIALOG.TEXT_3')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Page</span>\n? What is path and name? <span style=color:#afafaf>(ex.: dialogs/confirmation)</span> <span style=color:#0ff>dialogs/example</span>\n<span style=color:#8fbc8f>CREATED:</span> src/app/dialogs/example/example.dialog.html\n<span style=color:#8fbc8f>CREATED:</span> src/app/dialogs/example/example.dialog.scss\n<span style=color:#8fbc8f>CREATED:</span> src/app/dialogs/example/example.dialog.ts\n                </code>\n            </pre> </section> <section class=pl-3> <h5> <a href=#generate-directive name=generate-directive [html]=\"getText('GENERATE.DIRECTIVE.TITLE')\"></a> </h5> <p [html]=\"getText('GENERATE.DIRECTIVE.TEXT_1')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:gray>(Use arrow keys)</span>\n  <span style=color:#afafaf>Page</span>\n  <span style=color:#afafaf>Dialog</span>\n<span style=color:#0ff>❯ Directive</span>\n  <span style=color:#afafaf>Service</span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.DIRECTIVE.TEXT_2')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Directive</span>\n? What is path and name? <span style=color:#afafaf>(ex.: directives/tooltip)</span> <span class=terminal-io></span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.DIRECTIVE.TEXT_3')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Directive</span>\n? What is path and name? <span style=color:#afafaf>(ex.: directives/tooltip)</span> <span style=color:#0ff>directives/example</span>\n<span style=color:#8fbc8f>CREATED:</span> src/app/directives/example/example.directive.html\n<span style=color:#8fbc8f>CREATED:</span> src/app/directives/example/example.directive.scss\n<span style=color:#8fbc8f>CREATED:</span> src/app/directives/example/example.directive.ts\n                </code>\n            </pre> </section> <section class=pl-3> <h5> <a href=#generate-directive name=generate-directive [html]=\"getText('GENERATE.DIRECTIVE.TITLE')\"></a> </h5> <p [html]=\"getText('GENERATE.DIRECTIVE.TEXT_1')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:gray>(Use arrow keys)</span>\n  <span style=color:#afafaf>Page</span>\n  <span style=color:#afafaf>Dialog</span>\n<span style=color:#0ff>❯ Directive</span>\n  <span style=color:#afafaf>Service</span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.DIRECTIVE.TEXT_2')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Directive</span>\n? What is path and name? <span style=color:#afafaf>(ex.: directives/tooltip)</span> <span class=terminal-io></span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.DIRECTIVE.TEXT_3')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Directive</span>\n? What is path and name? <span style=color:#afafaf>(ex.: directives/tooltip)</span> <span style=color:#0ff>directives/example</span>\n<span style=color:#8fbc8f>CREATED:</span> src/app/directives/example.directive.ts\n                </code>\n            </pre> </section> <section class=pl-3> <h5> <a href=#generate-service name=generate-service [html]=\"getText('GENERATE.SERVICE.TITLE')\"></a> </h5> <p [html]=\"getText('GENERATE.SERVICE.TEXT_1')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:gray>(Use arrow keys)</span>\n  <span style=color:#afafaf>Page</span>\n  <span style=color:#afafaf>Dialog</span>\n  <span style=color:#afafaf>Directive</span>\n<span style=color:#0ff>❯ Service</span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.SERVICE.TEXT_2')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Service</span>\n? What is path and name? <span style=color:#afafaf>(ex.: directives/tooltip)</span> <span class=terminal-io></span>\n                </code>\n            </pre> <p class=mt-1 [html]=\"getText('GENERATE.SERVICE.TEXT_3')\"></p> <pre>\n                <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Generate</span>\n? Which what do you want to generate? <span style=color:#0ff>Service</span>\n? What is path and name? <span style=color:#afafaf>(ex.: services/tooltip)</span> <span style=color:#0ff>services/example</span>\n<span style=color:#8fbc8f>CREATED:</span> src/app/services/example.service.ts\n                </code>\n            </pre> </section> </section> <section> <h4> <a href=#server name=server [html]=\"getText('SERVER.TITLE')\"></a> </h4> <p [html]=\"getText('SERVER.TEXT_1')\"></p> <pre>\n            <code class=shell>\n$ nb\n? Select what do you want: <span style=color:gray>(Use arrow keys)</span>\n  <span style=color:#afafaf>Generate </span>\n<span style=color:#0ff>❯ Run server</span>\n  <span style=color:#afafaf>Run build </span>\n  <span style=color:#afafaf>Exit </span>\n            </code>\n        </pre> <p [html]=\"getText('SERVER.TEXT_2')\"></p> <pre>\n            <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Run server</span>\n❯ Nimble project is running at <span style=color:#ff0>http://0.0.0.0:8090/</span> <span style=color:gray>(open in your browser)</span>\n❯ Environment from: <span style=color:#ff0>src/environments/env.local</span>\n\n<span style=color:#0ff>❯ Await, starting the server...</span>\n            </code>\n        </pre> </section> <section> <h4> <a href=#build name=build [html]=\"getText('BUILD.TITLE')\"></a> </h4> <p [html]=\"getText('BUILD.TEXT_1')\"></p> <pre>\n            <code class=shell>\n$ nb\n? Select what do you want: <span style=color:gray>(Use arrow keys)</span>\n  <span style=color:#afafaf>Generate </span>\n  <span style=color:#afafaf>Run server</span>\n<span style=color:#0ff>❯ Run build</span>\n  <span style=color:#afafaf>Exit </span>\n            </code>\n        </pre> <p [html]=\"getText('BUILD.TEXT_2')\"></p> <pre>\n            <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Run build</span>\n? Select the environment to be used: <span style=color:gray>(Use arrow keys)</span>\n<span style=color:#0ff>❯ local</span>\n  <span style=color:#afafaf>dev</span>\n  <span style=color:#afafaf>prod</span>\n            </code>\n        </pre> <p [html]=\"getText('BUILD.TEXT_3')\"></p> <pre>\n            <code class=shell>\n$ nb\n? Select what do you want: <span style=color:#0ff>Run build</span>\n? Select the environment to be used: <span style=color:#0ff>local</span>\n\n❯ Environment from: <span style=color:#ff0>src/environments/env.local</span>\n<span style=color:#0ff>❯ Await, starting the server...</span>\n\n<span style=color:#8fbc8f>✔ Compiled successfully!</span>\n\n❯ Directory where the build is: <span style=color:#ff0>your-project/build</span>\n            </code>\n        </pre> <p [html]=\"getText('BUILD.TEXT_4')\"></p> </section> </div>"},36:function(e,a,n){},48:function(e,a,n){"use strict";n.r(a),n.d(a,"Cli1xCommandsPage",(function(){return c}));var t,s=n(1),o=n(4),l=(t=function(e,a){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)a.hasOwnProperty(n)&&(e[n]=a[n])})(e,a)},function(e,a){function n(){this.constructor=e}t(e,a),e.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}),p=function(e,a,n,t){var s,o=arguments.length,l=o<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,a,n,t);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(l=(o<3?s(l):o>3?s(a,n,l):s(a,n))||l);return o>3&&l&&Object.defineProperty(a,n,l),l},r=function(e,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,a)},c=function(e){function a(a){var n=e.call(this)||this;return n.lang=a,n}return l(a,e),a.prototype.getText=function(e){return this.lang.get("DOC.1x.CONTENT.CLI.INTERACTIVE_COMMANDS."+e)},a.prototype.onEnter=function(){},a.prototype.onExit=function(){},a=p([Object(s.f)({template:n(35),style:n(36),title:"CLI / Interactive commands - Nimble"}),r("design:paramtypes",[o.a])],a)}(s.e)}}]);