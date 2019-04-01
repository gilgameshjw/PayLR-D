// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39583__delegate = function (x__39569__auto__){
if(cljs.core.truth_(fullstack.core.mount_root)){
return cljs.core.apply.call(null,fullstack.core.mount_root,x__39569__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("fullstack.core/mount-root"),"' is missing"].join(''));
}
};
var G__39583 = function (var_args){
var x__39569__auto__ = null;
if (arguments.length > 0) {
var G__39584__i = 0, G__39584__a = new Array(arguments.length -  0);
while (G__39584__i < G__39584__a.length) {G__39584__a[G__39584__i] = arguments[G__39584__i + 0]; ++G__39584__i;}
  x__39569__auto__ = new cljs.core.IndexedSeq(G__39584__a,0,null);
} 
return G__39583__delegate.call(this,x__39569__auto__);};
G__39583.cljs$lang$maxFixedArity = 0;
G__39583.cljs$lang$applyTo = (function (arglist__39585){
var x__39569__auto__ = cljs.core.seq(arglist__39585);
return G__39583__delegate(x__39569__auto__);
});
G__39583.cljs$core$IFn$_invoke$arity$variadic = G__39583__delegate;
return G__39583;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3448/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1554122670407
