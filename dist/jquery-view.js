!function(e,t){var n="function"==typeof require?require:function(e){return{jquery:jQuery}[e]};"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(n):"function"==typeof define&&define.amd?define(["jquery"],t.bind(e,n)):e.View=t(n)}(this,function(e,t,n,r){return function i(t,n,r){function s(u,c){if(!n[u]){if(!t[u]){var a="function"==typeof e&&e;if(!c&&a)return a(u,!0);if(o)return o(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var f=n[u]={exports:{}};t[u][0].call(f.exports,function(e){var n=t[u][1][e];return s(n?n:e)},f,f.exports,i,t,n,r)}return n[u].exports}for(var o="function"==typeof e&&e,u=0;u<r.length;u++)s(r[u]);return s}({1:[function(e,t,n){var r=e("jquery"),i=e("./src/View"),s=e("./src/Template");r.fn.view=function(e){if(this.length){var t=new i(this,e);return this.data("view",t),t}},r.fn.view.Template=s,t.exports=i},{"./src/Template":7,"./src/View":8,jquery:"jquery"}],2:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function s(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function u(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!s(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,s,c,a;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],u(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(o(n))for(s=Array.prototype.slice.call(arguments,1),a=n.slice(),r=a.length,c=0;r>c;c++)a[c].apply(this,s);return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(n=u(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,s,u;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(n)){for(u=s;u-- >0;)if(n[u]===t||n[u].listener&&n[u].listener===t){r=u;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],3:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],4:[function(e,t,n){function r(){l=!1,u.length?a=u.concat(a):f=-1,a.length&&i()}function i(){if(!l){var e=setTimeout(r);l=!0;for(var t=a.length;t;){for(u=a,a=[];++f<t;)u&&u[f].run();f=-1,t=a.length}u=null,l=!1,clearTimeout(e)}}function s(e,t){this.fun=e,this.array=t}function o(){}var u,c=t.exports={},a=[],l=!1,f=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new s(e,t)),1!==a.length||l||setTimeout(i,0)},s.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=o,c.addListener=o,c.once=o,c.off=o,c.removeListener=o,c.removeAllListeners=o,c.emit=o,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},{}],5:[function(e,t,n){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],6:[function(e,t,n){(function(t,r){function i(e,t){var r={seen:[],stylize:o};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(t)?r.showHidden=t:t&&n._extend(r,t),w(r.showHidden)&&(r.showHidden=!1),w(r.depth)&&(r.depth=2),w(r.colors)&&(r.colors=!1),w(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),c(r,e,r.depth)}function s(e,t){var n=i.styles[t];return n?"["+i.colors[n][0]+"m"+e+"["+i.colors[n][1]+"m":e}function o(e,t){return e}function u(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function c(e,t,r){if(e.customInspect&&t&&S(t.inspect)&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var i=t.inspect(r,e);return _(i)||(i=c(e,i,r)),i}var s=a(e,t);if(s)return s;var o=Object.keys(t),d=u(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(t)),L(t)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return l(t);if(0===o.length){if(S(t)){var y=t.name?": "+t.name:"";return e.stylize("[Function"+y+"]","special")}if(x(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(E(t))return e.stylize(Date.prototype.toString.call(t),"date");if(L(t))return l(t)}var m="",g=!1,b=["{","}"];if(v(t)&&(g=!0,b=["[","]"]),S(t)){var w=t.name?": "+t.name:"";m=" [Function"+w+"]"}if(x(t)&&(m=" "+RegExp.prototype.toString.call(t)),E(t)&&(m=" "+Date.prototype.toUTCString.call(t)),L(t)&&(m=" "+l(t)),0===o.length&&(!g||0==t.length))return b[0]+m+b[1];if(0>r)return x(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var j;return j=g?f(e,t,r,d,o):o.map(function(n){return p(e,t,r,d,n,g)}),e.seen.pop(),h(j,m,b)}function a(e,t){if(w(t))return e.stylize("undefined","undefined");if(_(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return g(t)?e.stylize(""+t,"number"):d(t)?e.stylize(""+t,"boolean"):y(t)?e.stylize("null","null"):void 0}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,i){for(var s=[],o=0,u=t.length;u>o;++o)D(t,String(o))?s.push(p(e,t,n,r,String(o),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(p(e,t,n,r,i,!0))}),s}function p(e,t,n,r,i,s){var o,u,a;if(a=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},a.get?u=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(u=e.stylize("[Setter]","special")),D(r,i)||(o="["+i+"]"),u||(e.seen.indexOf(a.value)<0?(u=y(n)?c(e,a.value,null):c(e,a.value,n-1),u.indexOf("\n")>-1&&(u=s?u.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+u.split("\n").map(function(e){return"   "+e}).join("\n"))):u=e.stylize("[Circular]","special")),w(o)){if(s&&i.match(/^\d+$/))return u;o=JSON.stringify(""+i),o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+u}function h(e,t,n){var r=0,i=e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function v(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function y(e){return null===e}function m(e){return null==e}function g(e){return"number"==typeof e}function _(e){return"string"==typeof e}function b(e){return"symbol"==typeof e}function w(e){return void 0===e}function x(e){return j(e)&&"[object RegExp]"===k(e)}function j(e){return"object"==typeof e&&null!==e}function E(e){return j(e)&&"[object Date]"===k(e)}function L(e){return j(e)&&("[object Error]"===k(e)||e instanceof Error)}function S(e){return"function"==typeof e}function O(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function k(e){return Object.prototype.toString.call(e)}function T(e){return 10>e?"0"+e.toString(10):e.toString(10)}function $(){var e=new Date,t=[T(e.getHours()),T(e.getMinutes()),T(e.getSeconds())].join(":");return[e.getDate(),C[e.getMonth()],t].join(" ")}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var A=/%[sdj%]/g;n.format=function(e){if(!_(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,s=r.length,o=String(e).replace(A,function(e){if("%%"===e)return"%";if(n>=s)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}}),u=r[n];s>n;u=r[++n])o+=y(u)||!j(u)?" "+u:" "+i(u);return o},n.deprecate=function(e,i){function s(){if(!o){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),o=!0}return e.apply(this,arguments)}if(w(r.process))return function(){return n.deprecate(e,i).apply(this,arguments)};if(t.noDeprecation===!0)return e;var o=!1;return s};var q,z={};n.debuglog=function(e){if(w(q)&&(q=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!z[e])if(new RegExp("\\b"+e+"\\b","i").test(q)){var r=t.pid;z[e]=function(){var t=n.format.apply(n,arguments);console.error("%s %d: %s",e,r,t)}}else z[e]=function(){};return z[e]},n.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=v,n.isBoolean=d,n.isNull=y,n.isNullOrUndefined=m,n.isNumber=g,n.isString=_,n.isSymbol=b,n.isUndefined=w,n.isRegExp=x,n.isObject=j,n.isDate=E,n.isError=L,n.isFunction=S,n.isPrimitive=O,n.isBuffer=e("./support/isBuffer");var C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];n.log=function(){console.log("%s - %s",$(),n.format.apply(n,arguments))},n.inherits=e("inherits"),n._extend=function(e,t){if(!t||!j(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":5,_process:4,inherits:3}],7:[function(e,t,n){function r(e){e=e||"",this.source=e.trim(),this.context={},this.vars={},this.Template=r}var i=e("jquery"),s=e("./utils"),o=e("./directives");t.exports=r,r.directives=o;var u=r.prototype;u.setSource=function(e){this.source=e.trim()},u.parse=function(e,t){e&&(this.vars=e),t&&(this.context=t);var n=this,r=i(i.parseHTML(this.source)),s=i("<div>");return r.appendTo(s),s.find("*").each(function(){var e=i(this);e.parents().last().is(s)&&n.applyDirectives(e)}),this.supplant(s.html()).replace(/^\s*[\r\n]/gm,"")},u.compile=function(e,t){t=t||this.context;var n=this.vars,r=Object.keys(n),s=i.map(n,function(e,t){return i.isArray(e)?[e]:e}),o=new Function(r,"return "+e),u="";try{u=o.apply(t,s)}catch(c){console.error("Compile error:",c)}return u},u.supplant=function(e){var t=this,n=function(e,n){return t.compile(n)},r=e.replace(/{{([^{}]*)}}/g,function(e,t){return s.escape(n(e,t))});return r=r.replace(/{%([^{%}]*)%}/g,n)},u.applyDirectives=function(e){var t=this,n=s.getProps(e),o=Object.keys(r.directives);i.each(n,function(i,s){/^:.*/.test(i)&&-1!==o.indexOf(i.replace(":",""))&&(r.directives[i.replace(":","")].call(t,e,s,n),e.removeAttr(i))})},r.addDirective=function(e,t){r.directives[e]=t}},{"./directives":9,"./utils":10,jquery:"jquery"}],8:[function(e,t,n){function r(e,t){var n=this;this.$el=e,this._options=i.extend({},r.defaults,t),this._getInitialState(),i.each(this._options,function(e,t){-1===Object.keys(r.defaults).indexOf(e)&&(n[e]=t)}),this.props=c.getProps(e),this._directiveEvents=[],this._getTemplate().done(function(e){n._templateSource=e,n._template=new u(e),n.emit("template loaded"),n._start()}).fail(function(e){console.error("Fail to load external template:",e)})}var i=e("jquery"),s=e("events").EventEmitter,o=e("util").inherits,u=e("./Template"),c=e("./utils");t.exports=r;var a={};r.defaults={state:{},template:"",templateUrl:"",beforeRender:i.noop,afterRender:i.noop,events:null},o(r,s);var l=r.prototype;l._getInitialState=function(){var e=this._options.state;this._state=i.isFunction(e)?e():e},l.getState=function(e){return this._state},l.setState=function(e){return this._state=i.extend(this._state,e),this.emit("state change",this.getState()),this},l._getTemplate=function(){var e=this._options,t=this.$el;if(e.templateUrl)return this._getExternalTemplate();var n=i.Deferred();if(e.template)n.resolve(e.template);else{var r=t.prop("outerHTML");n.resolve(r)}return n.promise()},l._getExternalTemplate=function(){var e=this,t=this._options.templateUrl,n=i.Deferred();return a[t]?n.resolve(a[t]):i.get(t).done(function(r){a[t]=r,e.$el.html(r),r=e.$el.prop("outerHTML"),n.resolve(r)}).fail(n.reject),n.promise()},l._render=function(){var e=this.$el,t=this.getState(),n=this._template;this.emit("before render",e,t),i.each(this._directiveEvents,function(t,n){var r='[data-view-event-listener="'+t+'"]';e.filter(r).add(e.find(r)).off(n.type)}),this._directiveEvents=[];var r=n.parse(t,this),s=i(r);e.replaceWith(s),this.$el=e=s,i.each(this._directiveEvents,function(t,n){var r='[data-view-event-listener="'+t+'"]';e.filter(r).add(e.find(r)).on(n.type,n.callback)}),this.emit("after render",e,t)},l._start=function(){this.on("state change",this._render),this.on("before render",this._options.beforeRender),this.on("after render",this._options.afterRender),this._options.events&&(this.on("before render",this._clearEvents),this.on("after render",this._bindEvents)),this.init&&this.init(),this._render(),this.emit("ready",this.$el)},l._walkEventsHash=function(e){var t=this;i.each(this._options.events,function(n,r){n=n.split(/\s+/);var s=n[0].split(","),o=n[1]?n[1].split(","):[""];i.each(o,function(n,o){i.each(s,function(n,i){e.call(t,o,i,r)})})})},l._clearEvents=function(){this._walkEventsHash(function(e,t,n){this.$el.find(e).off(t)})},l._bindEvents=function(){var e=this;this._walkEventsHash(function(t,n,r){var s=t?this.$el.find(t):this.$el;s.on(n,function(t){r=i.isFunction(r)?r:e[r],r.call(e,i(this),t)})})}},{"./Template":7,"./utils":10,events:2,jquery:"jquery",util:6}],9:[function(e,t,n){function r(e,t,n){var r=this,s=this.context,o=new r.Template;o.context=r.context,o.vars=i.extend({},r.vars);var u=function(e){i.extend(o.vars,{$target:i(e.target),$event:e}),o.compile(n)};s._directiveEvents.push({type:t,callback:u}),e.attr("data-view-event-listener",s._directiveEvents.length-1)}var i=e("jquery"),s=e("./utils"),o=t.exports={};i.extend(o,{bind:function(e,t,n){e.text(this.compile(t))},show:function(e,t,n){this.compile(t)||e.remove()},hide:function(e,t,n){this.compile(t)&&e.remove()},"class":function(e,t,n){i.each(this.compile(t),function(t,n){n?e.addClass(s.kebabCase(t)):e.removeClass(t)})},style:function(e,t,n){e.css(this.compile(t))}}),o.repeat=function(e,t,n){var r=this,s=this.Template,o=t.match(/(.*)\S*in\S*(.*)/);if(!o)throw new Error("Invalid Syntax for :repeat");var u=o[1].trim(),c=this.compile(o[2].trim());if(!i.isArray(c)&&!i.isPlainObject(c))throw new Error("Haystack `"+o[2].trim()+"` must be a collection");var a=i.isArray(c)?c.length:Object.keys(c).length;if(!a)return e.remove();e.removeAttr(":repeat");var l=new s,f=i("<div>"),p=0;i.each(c,function(t,n){l.setSource(e.prop("outerHTML")),l.context=r.context,l.vars=i.extend(l.vars,r.vars,{$index:p,$key:t,$total:a,$first:0===p,$last:p===a-1,$even:p%2===0,$odd:!(p%2===0),$middle:p>0&&a-1>p}),l.vars[u]=n,f.append(l.parse()),p+=1}),e.replaceWith(f.html())},i.each(["selected","checked","disabled"],function(e,t){o[t]=function(e,n,r){this.compile(n)?e.attr(t,!0):e.removeAttr(t)}}),i.each(["href","src","value","title","alt"],function(e,t){o[t]=function(e,n,r){e.attr(t,this.compile(n))}});var u=["click","dbclick","hover","contextmenu","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseup","toggle","keydown","keypress","keyup","blur","change","focus","focusin","focusout","select","submit","load"];i.each(u,function(e,t){o[t]=function(e,n,i){r.call(this,e,t,n)}})},{"./utils":10,jquery:"jquery"}],10:[function(e,t,n){var r=e("jquery");n.getProps=function(e){var t={};return r.each(e[0].attributes,function(e,n){t[r.camelCase(n.name)]=n.value}),t},n.kebabCase=function(e){var t=/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;return e.replace(t,function(e){return"-"+e.toLowerCase()})},n.escape=function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};return String(e).replace(/[&<>"'\/]/g,function(e){return t[e]})}},{jquery:"jquery"}]},{},[1])(1)});
//# sourceMappingURL=jquery-view.js.map
