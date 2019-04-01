// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_25343 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__25344 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25345 = null;
var count__25346 = (0);
var i__25347 = (0);
while(true){
if((i__25347 < count__25346)){
var vec__25348 = cljs.core._nth.call(null,chunk__25345,i__25347);
var effect_key = cljs.core.nth.call(null,vec__25348,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25348,(1),null);
var temp__4655__auto___25364 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25364)){
var effect_fn_25365 = temp__4655__auto___25364;
effect_fn_25365.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25366 = seq__25344;
var G__25367 = chunk__25345;
var G__25368 = count__25346;
var G__25369 = (i__25347 + (1));
seq__25344 = G__25366;
chunk__25345 = G__25367;
count__25346 = G__25368;
i__25347 = G__25369;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25344);
if(temp__4657__auto__){
var seq__25344__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25344__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25344__$1);
var G__25370 = cljs.core.chunk_rest.call(null,seq__25344__$1);
var G__25371 = c__4319__auto__;
var G__25372 = cljs.core.count.call(null,c__4319__auto__);
var G__25373 = (0);
seq__25344 = G__25370;
chunk__25345 = G__25371;
count__25346 = G__25372;
i__25347 = G__25373;
continue;
} else {
var vec__25351 = cljs.core.first.call(null,seq__25344__$1);
var effect_key = cljs.core.nth.call(null,vec__25351,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25351,(1),null);
var temp__4655__auto___25374 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25374)){
var effect_fn_25375 = temp__4655__auto___25374;
effect_fn_25375.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25376 = cljs.core.next.call(null,seq__25344__$1);
var G__25377 = null;
var G__25378 = (0);
var G__25379 = (0);
seq__25344 = G__25376;
chunk__25345 = G__25377;
count__25346 = G__25378;
i__25347 = G__25379;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__25183__auto___25380 = re_frame.interop.now.call(null);
var duration__25184__auto___25381 = (end__25183__auto___25380 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25184__auto___25381,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__25183__auto___25380);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25343;
}} else {
var seq__25354 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25355 = null;
var count__25356 = (0);
var i__25357 = (0);
while(true){
if((i__25357 < count__25356)){
var vec__25358 = cljs.core._nth.call(null,chunk__25355,i__25357);
var effect_key = cljs.core.nth.call(null,vec__25358,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25358,(1),null);
var temp__4655__auto___25382 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25382)){
var effect_fn_25383 = temp__4655__auto___25382;
effect_fn_25383.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25384 = seq__25354;
var G__25385 = chunk__25355;
var G__25386 = count__25356;
var G__25387 = (i__25357 + (1));
seq__25354 = G__25384;
chunk__25355 = G__25385;
count__25356 = G__25386;
i__25357 = G__25387;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25354);
if(temp__4657__auto__){
var seq__25354__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25354__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25354__$1);
var G__25388 = cljs.core.chunk_rest.call(null,seq__25354__$1);
var G__25389 = c__4319__auto__;
var G__25390 = cljs.core.count.call(null,c__4319__auto__);
var G__25391 = (0);
seq__25354 = G__25388;
chunk__25355 = G__25389;
count__25356 = G__25390;
i__25357 = G__25391;
continue;
} else {
var vec__25361 = cljs.core.first.call(null,seq__25354__$1);
var effect_key = cljs.core.nth.call(null,vec__25361,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25361,(1),null);
var temp__4655__auto___25392 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25392)){
var effect_fn_25393 = temp__4655__auto___25392;
effect_fn_25393.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25394 = cljs.core.next.call(null,seq__25354__$1);
var G__25395 = null;
var G__25396 = (0);
var G__25397 = (0);
seq__25354 = G__25394;
chunk__25355 = G__25395;
count__25356 = G__25396;
i__25357 = G__25397;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__25398 = cljs.core.seq.call(null,value);
var chunk__25399 = null;
var count__25400 = (0);
var i__25401 = (0);
while(true){
if((i__25401 < count__25400)){
var map__25402 = cljs.core._nth.call(null,chunk__25399,i__25401);
var map__25402__$1 = ((((!((map__25402 == null)))?(((((map__25402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25402):map__25402);
var effect = map__25402__$1;
var ms = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25402__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25398,chunk__25399,count__25400,i__25401,map__25402,map__25402__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25398,chunk__25399,count__25400,i__25401,map__25402,map__25402__$1,effect,ms,dispatch))
,ms);
}


var G__25406 = seq__25398;
var G__25407 = chunk__25399;
var G__25408 = count__25400;
var G__25409 = (i__25401 + (1));
seq__25398 = G__25406;
chunk__25399 = G__25407;
count__25400 = G__25408;
i__25401 = G__25409;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25398);
if(temp__4657__auto__){
var seq__25398__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25398__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25398__$1);
var G__25410 = cljs.core.chunk_rest.call(null,seq__25398__$1);
var G__25411 = c__4319__auto__;
var G__25412 = cljs.core.count.call(null,c__4319__auto__);
var G__25413 = (0);
seq__25398 = G__25410;
chunk__25399 = G__25411;
count__25400 = G__25412;
i__25401 = G__25413;
continue;
} else {
var map__25404 = cljs.core.first.call(null,seq__25398__$1);
var map__25404__$1 = ((((!((map__25404 == null)))?(((((map__25404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25404):map__25404);
var effect = map__25404__$1;
var ms = cljs.core.get.call(null,map__25404__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25404__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25398,chunk__25399,count__25400,i__25401,map__25404,map__25404__$1,effect,ms,dispatch,seq__25398__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25398,chunk__25399,count__25400,i__25401,map__25404,map__25404__$1,effect,ms,dispatch,seq__25398__$1,temp__4657__auto__))
,ms);
}


var G__25414 = cljs.core.next.call(null,seq__25398__$1);
var G__25415 = null;
var G__25416 = (0);
var G__25417 = (0);
seq__25398 = G__25414;
chunk__25399 = G__25415;
count__25400 = G__25416;
i__25401 = G__25417;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__25418 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25419 = null;
var count__25420 = (0);
var i__25421 = (0);
while(true){
if((i__25421 < count__25420)){
var event = cljs.core._nth.call(null,chunk__25419,i__25421);
re_frame.router.dispatch.call(null,event);


var G__25422 = seq__25418;
var G__25423 = chunk__25419;
var G__25424 = count__25420;
var G__25425 = (i__25421 + (1));
seq__25418 = G__25422;
chunk__25419 = G__25423;
count__25420 = G__25424;
i__25421 = G__25425;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25418);
if(temp__4657__auto__){
var seq__25418__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25418__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25418__$1);
var G__25426 = cljs.core.chunk_rest.call(null,seq__25418__$1);
var G__25427 = c__4319__auto__;
var G__25428 = cljs.core.count.call(null,c__4319__auto__);
var G__25429 = (0);
seq__25418 = G__25426;
chunk__25419 = G__25427;
count__25420 = G__25428;
i__25421 = G__25429;
continue;
} else {
var event = cljs.core.first.call(null,seq__25418__$1);
re_frame.router.dispatch.call(null,event);


var G__25430 = cljs.core.next.call(null,seq__25418__$1);
var G__25431 = null;
var G__25432 = (0);
var G__25433 = (0);
seq__25418 = G__25430;
chunk__25419 = G__25431;
count__25420 = G__25432;
i__25421 = G__25433;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__25434 = cljs.core.seq.call(null,value);
var chunk__25435 = null;
var count__25436 = (0);
var i__25437 = (0);
while(true){
if((i__25437 < count__25436)){
var event = cljs.core._nth.call(null,chunk__25435,i__25437);
clear_event.call(null,event);


var G__25438 = seq__25434;
var G__25439 = chunk__25435;
var G__25440 = count__25436;
var G__25441 = (i__25437 + (1));
seq__25434 = G__25438;
chunk__25435 = G__25439;
count__25436 = G__25440;
i__25437 = G__25441;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25434);
if(temp__4657__auto__){
var seq__25434__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25434__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25434__$1);
var G__25442 = cljs.core.chunk_rest.call(null,seq__25434__$1);
var G__25443 = c__4319__auto__;
var G__25444 = cljs.core.count.call(null,c__4319__auto__);
var G__25445 = (0);
seq__25434 = G__25442;
chunk__25435 = G__25443;
count__25436 = G__25444;
i__25437 = G__25445;
continue;
} else {
var event = cljs.core.first.call(null,seq__25434__$1);
clear_event.call(null,event);


var G__25446 = cljs.core.next.call(null,seq__25434__$1);
var G__25447 = null;
var G__25448 = (0);
var G__25449 = (0);
seq__25434 = G__25446;
chunk__25435 = G__25447;
count__25436 = G__25448;
i__25437 = G__25449;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1554122630988
