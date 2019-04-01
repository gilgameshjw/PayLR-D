// Compiled by ClojureScript 1.10.238 {}
goog.provide('fullstack.config');
goog.require('cljs.core');
fullstack.config.host = "localhost";
/**
 * In dev mode figwheel provides the server with a path not specified here. When in dev mode it has to be the same as the figwheel server port as specified in project.clj. For prod mode it can be configured here.
 */
fullstack.config.port = (3448);
fullstack.config.url = (function fullstack$config$url(scheme,path){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(scheme),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fullstack.config.host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fullstack.config.port),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
});
fullstack.config.websocket_url = fullstack.config.url.call(null,"ws","ws");

//# sourceMappingURL=config.js.map?rel=1554122635726
