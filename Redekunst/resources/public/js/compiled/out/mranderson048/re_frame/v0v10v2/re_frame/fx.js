// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__33343 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33344 = null;
var count__33345 = (0);
var i__33346 = (0);
while(true){
if((i__33346 < count__33345)){
var vec__33347 = cljs.core._nth.call(null,chunk__33344,i__33346);
var effect_key = cljs.core.nth.call(null,vec__33347,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33347,(1),null);
var temp__4655__auto___33353 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___33353)){
var effect_fn_33354 = temp__4655__auto___33353;
effect_fn_33354.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__33355 = seq__33343;
var G__33356 = chunk__33344;
var G__33357 = count__33345;
var G__33358 = (i__33346 + (1));
seq__33343 = G__33355;
chunk__33344 = G__33356;
count__33345 = G__33357;
i__33346 = G__33358;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33343);
if(temp__4657__auto__){
var seq__33343__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33343__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33343__$1);
var G__33359 = cljs.core.chunk_rest.call(null,seq__33343__$1);
var G__33360 = c__4319__auto__;
var G__33361 = cljs.core.count.call(null,c__4319__auto__);
var G__33362 = (0);
seq__33343 = G__33359;
chunk__33344 = G__33360;
count__33345 = G__33361;
i__33346 = G__33362;
continue;
} else {
var vec__33350 = cljs.core.first.call(null,seq__33343__$1);
var effect_key = cljs.core.nth.call(null,vec__33350,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33350,(1),null);
var temp__4655__auto___33363 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___33363)){
var effect_fn_33364 = temp__4655__auto___33363;
effect_fn_33364.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__33365 = cljs.core.next.call(null,seq__33343__$1);
var G__33366 = null;
var G__33367 = (0);
var G__33368 = (0);
seq__33343 = G__33365;
chunk__33344 = G__33366;
count__33345 = G__33367;
i__33346 = G__33368;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__33369 = cljs.core.seq.call(null,value);
var chunk__33370 = null;
var count__33371 = (0);
var i__33372 = (0);
while(true){
if((i__33372 < count__33371)){
var map__33373 = cljs.core._nth.call(null,chunk__33370,i__33372);
var map__33373__$1 = ((((!((map__33373 == null)))?(((((map__33373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33373):map__33373);
var effect = map__33373__$1;
var ms = cljs.core.get.call(null,map__33373__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33373__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33369,chunk__33370,count__33371,i__33372,map__33373,map__33373__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__33369,chunk__33370,count__33371,i__33372,map__33373,map__33373__$1,effect,ms,dispatch))
,ms);
}


var G__33377 = seq__33369;
var G__33378 = chunk__33370;
var G__33379 = count__33371;
var G__33380 = (i__33372 + (1));
seq__33369 = G__33377;
chunk__33370 = G__33378;
count__33371 = G__33379;
i__33372 = G__33380;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33369);
if(temp__4657__auto__){
var seq__33369__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33369__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33369__$1);
var G__33381 = cljs.core.chunk_rest.call(null,seq__33369__$1);
var G__33382 = c__4319__auto__;
var G__33383 = cljs.core.count.call(null,c__4319__auto__);
var G__33384 = (0);
seq__33369 = G__33381;
chunk__33370 = G__33382;
count__33371 = G__33383;
i__33372 = G__33384;
continue;
} else {
var map__33375 = cljs.core.first.call(null,seq__33369__$1);
var map__33375__$1 = ((((!((map__33375 == null)))?(((((map__33375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33375):map__33375);
var effect = map__33375__$1;
var ms = cljs.core.get.call(null,map__33375__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33375__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33369,chunk__33370,count__33371,i__33372,map__33375,map__33375__$1,effect,ms,dispatch,seq__33369__$1,temp__4657__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__33369,chunk__33370,count__33371,i__33372,map__33375,map__33375__$1,effect,ms,dispatch,seq__33369__$1,temp__4657__auto__))
,ms);
}


var G__33385 = cljs.core.next.call(null,seq__33369__$1);
var G__33386 = null;
var G__33387 = (0);
var G__33388 = (0);
seq__33369 = G__33385;
chunk__33370 = G__33386;
count__33371 = G__33387;
i__33372 = G__33388;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__33389 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33390 = null;
var count__33391 = (0);
var i__33392 = (0);
while(true){
if((i__33392 < count__33391)){
var event = cljs.core._nth.call(null,chunk__33390,i__33392);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__33393 = seq__33389;
var G__33394 = chunk__33390;
var G__33395 = count__33391;
var G__33396 = (i__33392 + (1));
seq__33389 = G__33393;
chunk__33390 = G__33394;
count__33391 = G__33395;
i__33392 = G__33396;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33389);
if(temp__4657__auto__){
var seq__33389__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33389__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33389__$1);
var G__33397 = cljs.core.chunk_rest.call(null,seq__33389__$1);
var G__33398 = c__4319__auto__;
var G__33399 = cljs.core.count.call(null,c__4319__auto__);
var G__33400 = (0);
seq__33389 = G__33397;
chunk__33390 = G__33398;
count__33391 = G__33399;
i__33392 = G__33400;
continue;
} else {
var event = cljs.core.first.call(null,seq__33389__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__33401 = cljs.core.next.call(null,seq__33389__$1);
var G__33402 = null;
var G__33403 = (0);
var G__33404 = (0);
seq__33389 = G__33401;
chunk__33390 = G__33402;
count__33391 = G__33403;
i__33392 = G__33404;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__33405 = cljs.core.seq.call(null,value);
var chunk__33406 = null;
var count__33407 = (0);
var i__33408 = (0);
while(true){
if((i__33408 < count__33407)){
var event = cljs.core._nth.call(null,chunk__33406,i__33408);
clear_event.call(null,event);


var G__33409 = seq__33405;
var G__33410 = chunk__33406;
var G__33411 = count__33407;
var G__33412 = (i__33408 + (1));
seq__33405 = G__33409;
chunk__33406 = G__33410;
count__33407 = G__33411;
i__33408 = G__33412;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33405);
if(temp__4657__auto__){
var seq__33405__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33405__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33405__$1);
var G__33413 = cljs.core.chunk_rest.call(null,seq__33405__$1);
var G__33414 = c__4319__auto__;
var G__33415 = cljs.core.count.call(null,c__4319__auto__);
var G__33416 = (0);
seq__33405 = G__33413;
chunk__33406 = G__33414;
count__33407 = G__33415;
i__33408 = G__33416;
continue;
} else {
var event = cljs.core.first.call(null,seq__33405__$1);
clear_event.call(null,event);


var G__33417 = cljs.core.next.call(null,seq__33405__$1);
var G__33418 = null;
var G__33419 = (0);
var G__33420 = (0);
seq__33405 = G__33417;
chunk__33406 = G__33418;
count__33407 = G__33419;
i__33408 = G__33420;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1554122649431
