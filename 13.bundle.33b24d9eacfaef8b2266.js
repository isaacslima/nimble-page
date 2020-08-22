(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{13:function(t,e,n){"use strict";n.r(e),n.d(e,"Framework1xServicesInternalPage",(function(){return c}));var o,r=n(1),p=n(4),s=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=function(t,e,n,o){var r,p=arguments.length,s=p<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(s=(p<3?r(s):p>3?r(e,n,s):r(e,n))||s);return p>3&&s&&Object.defineProperty(e,n,s),s},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(t){function e(e){var n=t.call(this)||this;return n.lang=e,n}return s(e,t),e.prototype.getText=function(t){return this.lang.get("DOC.1x.CONTENT.FRAMEWORK.SERVICES.INTERNAL."+t)},e.prototype.onInit=function(){},e.prototype.onDestroy=function(){},e=i([Object(r.m)({template:n(73),style:n(74),title:"Services - Internals / Document - Nimble"}),l("design:paramtypes",[p.a])],e)}(r.k)},73:function(t,e){t.exports="<div class=framework-1x-services-internals-page> <h1>{{getText('TITLE')}}</h1> <h6 class=\"border-0 font-weight-normal pb-0\">{{getText('SUBTITLE')}}</h6> <p [html]=\"getText('TEXT')\"></p> <section class=mb-1> <h4> <a href=#listener-element name=listener-element> {{getText('ELEMENT_LISTENER.TITLE')}} </a> </h4> <p [html]=\"getText('ELEMENT_LISTENER.TEXT')\"></p> <pre>\n            <code class=typescript>\n@Injectable()\nexport class ElementListener {\n\n    public listen(target: any, eventName: string, callback: (e?: any) => void, options?: AddEventListenerOptions): () => void;\n    \n}\n            </code>\n        </pre> </section> <section class=mb-1> <h4> <a href=#http-client name=http-client> {{getText('HTTP_CLIENT.TITLE')}} </a> </h4> <p [html]=\"getText('HTTP_CLIENT.TEXT')\"></p> <pre>\n            <code class=typescript>\n@Injectable()\nexport class HttpClient {\n    public get&lt;T&gt;(url: string, options?: HttpOptions): Promise&lt;HttpResponse&lt;T&gt;;\n\n    public post&lt;T&gt;(url: string, body: any, options?: HttpOptions): Promise&lt;HttpResponse&lt;T&gt;;\n\n    public put&lt;T&gt;(url: string, body: any, options?: HttpOptions): Promise&lt;HttpResponse&lt;T&gt;;\n\n    public patch&lt;T&gt;(url: string, body: any, options?: HttpOptions): Promise&lt;HttpResponse&lt;T&gt;;\n\n    public del&lt;T&gt;(url: string, options?: HttpOptions): Promise&lt;HttpResponse&lt;T&gt;;\n}\n            </code>\n        </pre> </section> <section class=mb-1> <h4> <a href=#dialog-build name=dialog-builder> {{getText('DIALOG_BUILDER.TITLE')}} </a> </h4> <p [html]=\"getText('DIALOG_BUILDER.TEXT')\"></p> <pre>\n            <code class=typescript>\n@Injectable()\nexport class DialogBuilder {\n    public open&lt;T extends Dialog&gt;(dialog: Type&lt;T&gt;, config?: DialogOpenConfig): DialogRef&lt;T&gt;;\n\n    public closeAll();\n\n}\n            </code>\n        </pre> </section> <section class=mb-1> <h4> <a href=#route-params name=route-params> {{getText('ROUTE_PARAMS.TITLE')}} </a> </h4> <p [html]=\"getText('ROUTE_PARAMS.TEXT')\"></p> <pre>\n            <code class=typescript>\n@Injectable()\nexport class RouteParams {\n\n    public parent: RouteParams;\n    public data: { [key: string]: any };\n    public params: { [key: string]: any };\n\n}\n            </code>\n        </pre> </section> </div>"},74:function(t,e,n){}}]);