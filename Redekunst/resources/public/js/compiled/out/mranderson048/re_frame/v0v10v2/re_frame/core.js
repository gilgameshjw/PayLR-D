// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.core');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.subs');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.cofx');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.std_interceptors');
goog.require('clojure.set');
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch = mranderson048.re_frame.v0v10v2.re_frame.router.dispatch;
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch_sync = mranderson048.re_frame.v0v10v2.re_frame.router.dispatch_sync;
mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub = mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub;
mranderson048.re_frame.v0v10v2.re_frame.core.subscribe = mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_sub = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.subs.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_ = mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub_raw = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_sub_raw(query_id,handler_fn){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id,handler_fn);
});
mranderson048.re_frame.v0v10v2.re_frame.core.reg_fx = mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_fx = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.fx.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.reg_cofx = mranderson048.re_frame.v0v10v2.re_frame.cofx.reg_cofx;
mranderson048.re_frame.v0v10v2.re_frame.core.inject_cofx = mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_cofx;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_cofx = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_db(var_args){
var G__33424 = arguments.length;
switch (G__33424) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.db_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_fx(var_args){
var G__33427 = arguments.length;
switch (G__33427) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_ctx(var_args){
var G__33430 = arguments.length;
switch (G__33430) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

mranderson048.re_frame.v0v10v2.re_frame.core.clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.debug = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.debug;
mranderson048.re_frame.v0v10v2.re_frame.core.path = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.path;
mranderson048.re_frame.v0v10v2.re_frame.core.enrich = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.enrich;
mranderson048.re_frame.v0v10v2.re_frame.core.trim_v = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.trim_v;
mranderson048.re_frame.v0v10v2.re_frame.core.after = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.after;
mranderson048.re_frame.v0v10v2.re_frame.core.on_changes = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.on_changes;
mranderson048.re_frame.v0v10v2.re_frame.core.__GT_interceptor = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor;
mranderson048.re_frame.v0v10v2.re_frame.core.get_coeffect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect;
mranderson048.re_frame.v0v10v2.re_frame.core.assoc_coeffect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect;
mranderson048.re_frame.v0v10v2.re_frame.core.get_effect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect;
mranderson048.re_frame.v0v10v2.re_frame.core.assoc_effect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_effect;
mranderson048.re_frame.v0v10v2.re_frame.core.enqueue = mranderson048.re_frame.v0v10v2.re_frame.interceptor.enqueue;
mranderson048.re_frame.v0v10v2.re_frame.core.set_loggers_BANG_ = mranderson048.re_frame.v0v10v2.re_frame.loggers.set_loggers_BANG_;
mranderson048.re_frame.v0v10v2.re_frame.core.console = mranderson048.re_frame.v0v10v2.re_frame.loggers.console;
/**
 * Checkpoints the state of mranderson048.re-frame.v0v10v2.re-frame and returns a function which, when
 *   later called, will restore mranderson048.re-frame.v0v10v2.re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.core.make_restore_fn = (function mranderson048$re_frame$v0v10v2$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_33436 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_33437 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)));
var seq__33432_33438 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_33437,original_subs_33436));
var chunk__33433_33439 = null;
var count__33434_33440 = (0);
var i__33435_33441 = (0);
while(true){
if((i__33435_33441 < count__33434_33440)){
var sub_33442 = cljs.core._nth.call(null,chunk__33433_33439,i__33435_33441);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_33442);


var G__33443 = seq__33432_33438;
var G__33444 = chunk__33433_33439;
var G__33445 = count__33434_33440;
var G__33446 = (i__33435_33441 + (1));
seq__33432_33438 = G__33443;
chunk__33433_33439 = G__33444;
count__33434_33440 = G__33445;
i__33435_33441 = G__33446;
continue;
} else {
var temp__4657__auto___33447 = cljs.core.seq.call(null,seq__33432_33438);
if(temp__4657__auto___33447){
var seq__33432_33448__$1 = temp__4657__auto___33447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33432_33448__$1)){
var c__4319__auto___33449 = cljs.core.chunk_first.call(null,seq__33432_33448__$1);
var G__33450 = cljs.core.chunk_rest.call(null,seq__33432_33448__$1);
var G__33451 = c__4319__auto___33449;
var G__33452 = cljs.core.count.call(null,c__4319__auto___33449);
var G__33453 = (0);
seq__33432_33438 = G__33450;
chunk__33433_33439 = G__33451;
count__33434_33440 = G__33452;
i__33435_33441 = G__33453;
continue;
} else {
var sub_33454 = cljs.core.first.call(null,seq__33432_33448__$1);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_33454);


var G__33455 = cljs.core.next.call(null,seq__33432_33448__$1);
var G__33456 = null;
var G__33457 = (0);
var G__33458 = (0);
seq__33432_33438 = G__33455;
chunk__33433_33439 = G__33456;
count__33434_33440 = G__33457;
i__33435_33441 = G__33458;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$core$add_post_event_callback(var_args){
var G__33460 = arguments.length;
switch (G__33460) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.call(null,f,f);
});

mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return mranderson048.re_frame.v0v10v2.re_frame.router.add_post_event_callback.call(null,mranderson048.re_frame.v0v10v2.re_frame.router.event_queue,id,f);
});

mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

mranderson048.re_frame.v0v10v2.re_frame.core.remove_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$core$remove_post_event_callback(id){
return mranderson048.re_frame.v0v10v2.re_frame.router.remove_post_event_callback.call(null,mranderson048.re_frame.v0v10v2.re_frame.router.event_queue,id);
});
mranderson048.re_frame.v0v10v2.re_frame.core.register_handler = (function mranderson048$re_frame$v0v10v2$re_frame$core$register_handler(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33463 = arguments.length;
var i__4500__auto___33464 = (0);
while(true){
if((i__4500__auto___33464 < len__4499__auto___33463)){
args__4502__auto__.push((arguments[i__4500__auto___33464]));

var G__33465 = (i__4500__auto___33464 + (1));
i__4500__auto___33464 = G__33465;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson048.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db,args);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq33462){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33462));
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub = (function mranderson048$re_frame$v0v10v2$re_frame$core$register_sub(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33467 = arguments.length;
var i__4500__auto___33468 = (0);
while(true){
if((i__4500__auto___33468 < len__4499__auto___33467)){
args__4502__auto__.push((arguments[i__4500__auto___33468]));

var G__33469 = (i__4500__auto___33468 + (1));
i__4500__auto___33468 = G__33469;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson048.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub_raw,args);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq33466){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33466));
});


//# sourceMappingURL=core.js.map?rel=1554122649546
