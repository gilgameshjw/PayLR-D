// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26774 = arguments.length;
switch (G__26774) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26775 = (function (f,blockable,meta26776){
this.f = f;
this.blockable = blockable;
this.meta26776 = meta26776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26777,meta26776__$1){
var self__ = this;
var _26777__$1 = this;
return (new cljs.core.async.t_cljs$core$async26775(self__.f,self__.blockable,meta26776__$1));
});

cljs.core.async.t_cljs$core$async26775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26777){
var self__ = this;
var _26777__$1 = this;
return self__.meta26776;
});

cljs.core.async.t_cljs$core$async26775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26776","meta26776",-1526466647,null)], null);
});

cljs.core.async.t_cljs$core$async26775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26775";

cljs.core.async.t_cljs$core$async26775.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26775");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26775.
 */
cljs.core.async.__GT_t_cljs$core$async26775 = (function cljs$core$async$__GT_t_cljs$core$async26775(f__$1,blockable__$1,meta26776){
return (new cljs.core.async.t_cljs$core$async26775(f__$1,blockable__$1,meta26776));
});

}

return (new cljs.core.async.t_cljs$core$async26775(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26781 = arguments.length;
switch (G__26781) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26784 = arguments.length;
switch (G__26784) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26787 = arguments.length;
switch (G__26787) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26789 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26789);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26789,ret){
return (function (){
return fn1.call(null,val_26789);
});})(val_26789,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26791 = arguments.length;
switch (G__26791) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___26793 = n;
var x_26794 = (0);
while(true){
if((x_26794 < n__4376__auto___26793)){
(a[x_26794] = (0));

var G__26795 = (x_26794 + (1));
x_26794 = G__26795;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26796 = (i + (1));
i = G__26796;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26797 = (function (flag,meta26798){
this.flag = flag;
this.meta26798 = meta26798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26799,meta26798__$1){
var self__ = this;
var _26799__$1 = this;
return (new cljs.core.async.t_cljs$core$async26797(self__.flag,meta26798__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26799){
var self__ = this;
var _26799__$1 = this;
return self__.meta26798;
});})(flag))
;

cljs.core.async.t_cljs$core$async26797.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26797.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26797.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26798","meta26798",-932712416,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26797";

cljs.core.async.t_cljs$core$async26797.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26797");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26797.
 */
cljs.core.async.__GT_t_cljs$core$async26797 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26797(flag__$1,meta26798){
return (new cljs.core.async.t_cljs$core$async26797(flag__$1,meta26798));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26797(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26800 = (function (flag,cb,meta26801){
this.flag = flag;
this.cb = cb;
this.meta26801 = meta26801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26802,meta26801__$1){
var self__ = this;
var _26802__$1 = this;
return (new cljs.core.async.t_cljs$core$async26800(self__.flag,self__.cb,meta26801__$1));
});

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26802){
var self__ = this;
var _26802__$1 = this;
return self__.meta26801;
});

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26801","meta26801",-1661159794,null)], null);
});

cljs.core.async.t_cljs$core$async26800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26800";

cljs.core.async.t_cljs$core$async26800.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26800");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26800.
 */
cljs.core.async.__GT_t_cljs$core$async26800 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26800(flag__$1,cb__$1,meta26801){
return (new cljs.core.async.t_cljs$core$async26800(flag__$1,cb__$1,meta26801));
});

}

return (new cljs.core.async.t_cljs$core$async26800(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26803_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26803_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26804_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26804_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26805 = (i + (1));
i = G__26805;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26811 = arguments.length;
var i__4500__auto___26812 = (0);
while(true){
if((i__4500__auto___26812 < len__4499__auto___26811)){
args__4502__auto__.push((arguments[i__4500__auto___26812]));

var G__26813 = (i__4500__auto___26812 + (1));
i__4500__auto___26812 = G__26813;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26808){
var map__26809 = p__26808;
var map__26809__$1 = ((((!((map__26809 == null)))?(((((map__26809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26809):map__26809);
var opts = map__26809__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26806){
var G__26807 = cljs.core.first.call(null,seq26806);
var seq26806__$1 = cljs.core.next.call(null,seq26806);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26807,seq26806__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26815 = arguments.length;
switch (G__26815) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26728__auto___26861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___26861){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___26861){
return (function (state_26839){
var state_val_26840 = (state_26839[(1)]);
if((state_val_26840 === (7))){
var inst_26835 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26841_26862 = state_26839__$1;
(statearr_26841_26862[(2)] = inst_26835);

(statearr_26841_26862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (1))){
var state_26839__$1 = state_26839;
var statearr_26842_26863 = state_26839__$1;
(statearr_26842_26863[(2)] = null);

(statearr_26842_26863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (4))){
var inst_26818 = (state_26839[(7)]);
var inst_26818__$1 = (state_26839[(2)]);
var inst_26819 = (inst_26818__$1 == null);
var state_26839__$1 = (function (){var statearr_26843 = state_26839;
(statearr_26843[(7)] = inst_26818__$1);

return statearr_26843;
})();
if(cljs.core.truth_(inst_26819)){
var statearr_26844_26864 = state_26839__$1;
(statearr_26844_26864[(1)] = (5));

} else {
var statearr_26845_26865 = state_26839__$1;
(statearr_26845_26865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (13))){
var state_26839__$1 = state_26839;
var statearr_26846_26866 = state_26839__$1;
(statearr_26846_26866[(2)] = null);

(statearr_26846_26866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (6))){
var inst_26818 = (state_26839[(7)]);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26839__$1,(11),to,inst_26818);
} else {
if((state_val_26840 === (3))){
var inst_26837 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26839__$1,inst_26837);
} else {
if((state_val_26840 === (12))){
var state_26839__$1 = state_26839;
var statearr_26847_26867 = state_26839__$1;
(statearr_26847_26867[(2)] = null);

(statearr_26847_26867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (2))){
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26839__$1,(4),from);
} else {
if((state_val_26840 === (11))){
var inst_26828 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
if(cljs.core.truth_(inst_26828)){
var statearr_26848_26868 = state_26839__$1;
(statearr_26848_26868[(1)] = (12));

} else {
var statearr_26849_26869 = state_26839__$1;
(statearr_26849_26869[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (9))){
var state_26839__$1 = state_26839;
var statearr_26850_26870 = state_26839__$1;
(statearr_26850_26870[(2)] = null);

(statearr_26850_26870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (5))){
var state_26839__$1 = state_26839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26851_26871 = state_26839__$1;
(statearr_26851_26871[(1)] = (8));

} else {
var statearr_26852_26872 = state_26839__$1;
(statearr_26852_26872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (14))){
var inst_26833 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26853_26873 = state_26839__$1;
(statearr_26853_26873[(2)] = inst_26833);

(statearr_26853_26873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (10))){
var inst_26825 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26854_26874 = state_26839__$1;
(statearr_26854_26874[(2)] = inst_26825);

(statearr_26854_26874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (8))){
var inst_26822 = cljs.core.async.close_BANG_.call(null,to);
var state_26839__$1 = state_26839;
var statearr_26855_26875 = state_26839__$1;
(statearr_26855_26875[(2)] = inst_26822);

(statearr_26855_26875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___26861))
;
return ((function (switch__26640__auto__,c__26728__auto___26861){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_26856 = [null,null,null,null,null,null,null,null];
(statearr_26856[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_26856[(1)] = (1));

return statearr_26856;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_26839){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_26839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e26857){if((e26857 instanceof Object)){
var ex__26644__auto__ = e26857;
var statearr_26858_26876 = state_26839;
(statearr_26858_26876[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26877 = state_26839;
state_26839 = G__26877;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_26839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_26839);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___26861))
})();
var state__26730__auto__ = (function (){var statearr_26859 = f__26729__auto__.call(null);
(statearr_26859[(6)] = c__26728__auto___26861);

return statearr_26859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___26861))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26878){
var vec__26879 = p__26878;
var v = cljs.core.nth.call(null,vec__26879,(0),null);
var p = cljs.core.nth.call(null,vec__26879,(1),null);
var job = vec__26879;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26728__auto___27050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___27050,res,vec__26879,v,p,job,jobs,results){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___27050,res,vec__26879,v,p,job,jobs,results){
return (function (state_26886){
var state_val_26887 = (state_26886[(1)]);
if((state_val_26887 === (1))){
var state_26886__$1 = state_26886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26886__$1,(2),res,v);
} else {
if((state_val_26887 === (2))){
var inst_26883 = (state_26886[(2)]);
var inst_26884 = cljs.core.async.close_BANG_.call(null,res);
var state_26886__$1 = (function (){var statearr_26888 = state_26886;
(statearr_26888[(7)] = inst_26883);

return statearr_26888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26886__$1,inst_26884);
} else {
return null;
}
}
});})(c__26728__auto___27050,res,vec__26879,v,p,job,jobs,results))
;
return ((function (switch__26640__auto__,c__26728__auto___27050,res,vec__26879,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0 = (function (){
var statearr_26889 = [null,null,null,null,null,null,null,null];
(statearr_26889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__);

(statearr_26889[(1)] = (1));

return statearr_26889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1 = (function (state_26886){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_26886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e26890){if((e26890 instanceof Object)){
var ex__26644__auto__ = e26890;
var statearr_26891_27051 = state_26886;
(statearr_26891_27051[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_26886;
state_26886 = G__27052;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = function(state_26886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1.call(this,state_26886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___27050,res,vec__26879,v,p,job,jobs,results))
})();
var state__26730__auto__ = (function (){var statearr_26892 = f__26729__auto__.call(null);
(statearr_26892[(6)] = c__26728__auto___27050);

return statearr_26892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___27050,res,vec__26879,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26893){
var vec__26894 = p__26893;
var v = cljs.core.nth.call(null,vec__26894,(0),null);
var p = cljs.core.nth.call(null,vec__26894,(1),null);
var job = vec__26894;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27053 = n;
var __27054 = (0);
while(true){
if((__27054 < n__4376__auto___27053)){
var G__26897_27055 = type;
var G__26897_27056__$1 = (((G__26897_27055 instanceof cljs.core.Keyword))?G__26897_27055.fqn:null);
switch (G__26897_27056__$1) {
case "compute":
var c__26728__auto___27058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27054,c__26728__auto___27058,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (__27054,c__26728__auto___27058,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async){
return (function (state_26910){
var state_val_26911 = (state_26910[(1)]);
if((state_val_26911 === (1))){
var state_26910__$1 = state_26910;
var statearr_26912_27059 = state_26910__$1;
(statearr_26912_27059[(2)] = null);

(statearr_26912_27059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (2))){
var state_26910__$1 = state_26910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26910__$1,(4),jobs);
} else {
if((state_val_26911 === (3))){
var inst_26908 = (state_26910[(2)]);
var state_26910__$1 = state_26910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26910__$1,inst_26908);
} else {
if((state_val_26911 === (4))){
var inst_26900 = (state_26910[(2)]);
var inst_26901 = process.call(null,inst_26900);
var state_26910__$1 = state_26910;
if(cljs.core.truth_(inst_26901)){
var statearr_26913_27060 = state_26910__$1;
(statearr_26913_27060[(1)] = (5));

} else {
var statearr_26914_27061 = state_26910__$1;
(statearr_26914_27061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (5))){
var state_26910__$1 = state_26910;
var statearr_26915_27062 = state_26910__$1;
(statearr_26915_27062[(2)] = null);

(statearr_26915_27062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (6))){
var state_26910__$1 = state_26910;
var statearr_26916_27063 = state_26910__$1;
(statearr_26916_27063[(2)] = null);

(statearr_26916_27063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (7))){
var inst_26906 = (state_26910[(2)]);
var state_26910__$1 = state_26910;
var statearr_26917_27064 = state_26910__$1;
(statearr_26917_27064[(2)] = inst_26906);

(statearr_26917_27064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27054,c__26728__auto___27058,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async))
;
return ((function (__27054,switch__26640__auto__,c__26728__auto___27058,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0 = (function (){
var statearr_26918 = [null,null,null,null,null,null,null];
(statearr_26918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__);

(statearr_26918[(1)] = (1));

return statearr_26918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1 = (function (state_26910){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_26910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e26919){if((e26919 instanceof Object)){
var ex__26644__auto__ = e26919;
var statearr_26920_27065 = state_26910;
(statearr_26920_27065[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27066 = state_26910;
state_26910 = G__27066;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = function(state_26910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1.call(this,state_26910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__;
})()
;})(__27054,switch__26640__auto__,c__26728__auto___27058,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async))
})();
var state__26730__auto__ = (function (){var statearr_26921 = f__26729__auto__.call(null);
(statearr_26921[(6)] = c__26728__auto___27058);

return statearr_26921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(__27054,c__26728__auto___27058,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async))
);


break;
case "async":
var c__26728__auto___27067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27054,c__26728__auto___27067,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (__27054,c__26728__auto___27067,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async){
return (function (state_26934){
var state_val_26935 = (state_26934[(1)]);
if((state_val_26935 === (1))){
var state_26934__$1 = state_26934;
var statearr_26936_27068 = state_26934__$1;
(statearr_26936_27068[(2)] = null);

(statearr_26936_27068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (2))){
var state_26934__$1 = state_26934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26934__$1,(4),jobs);
} else {
if((state_val_26935 === (3))){
var inst_26932 = (state_26934[(2)]);
var state_26934__$1 = state_26934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26934__$1,inst_26932);
} else {
if((state_val_26935 === (4))){
var inst_26924 = (state_26934[(2)]);
var inst_26925 = async.call(null,inst_26924);
var state_26934__$1 = state_26934;
if(cljs.core.truth_(inst_26925)){
var statearr_26937_27069 = state_26934__$1;
(statearr_26937_27069[(1)] = (5));

} else {
var statearr_26938_27070 = state_26934__$1;
(statearr_26938_27070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (5))){
var state_26934__$1 = state_26934;
var statearr_26939_27071 = state_26934__$1;
(statearr_26939_27071[(2)] = null);

(statearr_26939_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (6))){
var state_26934__$1 = state_26934;
var statearr_26940_27072 = state_26934__$1;
(statearr_26940_27072[(2)] = null);

(statearr_26940_27072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (7))){
var inst_26930 = (state_26934[(2)]);
var state_26934__$1 = state_26934;
var statearr_26941_27073 = state_26934__$1;
(statearr_26941_27073[(2)] = inst_26930);

(statearr_26941_27073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27054,c__26728__auto___27067,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async))
;
return ((function (__27054,switch__26640__auto__,c__26728__auto___27067,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0 = (function (){
var statearr_26942 = [null,null,null,null,null,null,null];
(statearr_26942[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__);

(statearr_26942[(1)] = (1));

return statearr_26942;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1 = (function (state_26934){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_26934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e26943){if((e26943 instanceof Object)){
var ex__26644__auto__ = e26943;
var statearr_26944_27074 = state_26934;
(statearr_26944_27074[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27075 = state_26934;
state_26934 = G__27075;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = function(state_26934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1.call(this,state_26934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__;
})()
;})(__27054,switch__26640__auto__,c__26728__auto___27067,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async))
})();
var state__26730__auto__ = (function (){var statearr_26945 = f__26729__auto__.call(null);
(statearr_26945[(6)] = c__26728__auto___27067);

return statearr_26945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(__27054,c__26728__auto___27067,G__26897_27055,G__26897_27056__$1,n__4376__auto___27053,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26897_27056__$1)].join('')));

}

var G__27076 = (__27054 + (1));
__27054 = G__27076;
continue;
} else {
}
break;
}

var c__26728__auto___27077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___27077,jobs,results,process,async){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___27077,jobs,results,process,async){
return (function (state_26967){
var state_val_26968 = (state_26967[(1)]);
if((state_val_26968 === (1))){
var state_26967__$1 = state_26967;
var statearr_26969_27078 = state_26967__$1;
(statearr_26969_27078[(2)] = null);

(statearr_26969_27078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (2))){
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26967__$1,(4),from);
} else {
if((state_val_26968 === (3))){
var inst_26965 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26967__$1,inst_26965);
} else {
if((state_val_26968 === (4))){
var inst_26948 = (state_26967[(7)]);
var inst_26948__$1 = (state_26967[(2)]);
var inst_26949 = (inst_26948__$1 == null);
var state_26967__$1 = (function (){var statearr_26970 = state_26967;
(statearr_26970[(7)] = inst_26948__$1);

return statearr_26970;
})();
if(cljs.core.truth_(inst_26949)){
var statearr_26971_27079 = state_26967__$1;
(statearr_26971_27079[(1)] = (5));

} else {
var statearr_26972_27080 = state_26967__$1;
(statearr_26972_27080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (5))){
var inst_26951 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26967__$1 = state_26967;
var statearr_26973_27081 = state_26967__$1;
(statearr_26973_27081[(2)] = inst_26951);

(statearr_26973_27081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (6))){
var inst_26953 = (state_26967[(8)]);
var inst_26948 = (state_26967[(7)]);
var inst_26953__$1 = cljs.core.async.chan.call(null,(1));
var inst_26954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26955 = [inst_26948,inst_26953__$1];
var inst_26956 = (new cljs.core.PersistentVector(null,2,(5),inst_26954,inst_26955,null));
var state_26967__$1 = (function (){var statearr_26974 = state_26967;
(statearr_26974[(8)] = inst_26953__$1);

return statearr_26974;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26967__$1,(8),jobs,inst_26956);
} else {
if((state_val_26968 === (7))){
var inst_26963 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26975_27082 = state_26967__$1;
(statearr_26975_27082[(2)] = inst_26963);

(statearr_26975_27082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (8))){
var inst_26953 = (state_26967[(8)]);
var inst_26958 = (state_26967[(2)]);
var state_26967__$1 = (function (){var statearr_26976 = state_26967;
(statearr_26976[(9)] = inst_26958);

return statearr_26976;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26967__$1,(9),results,inst_26953);
} else {
if((state_val_26968 === (9))){
var inst_26960 = (state_26967[(2)]);
var state_26967__$1 = (function (){var statearr_26977 = state_26967;
(statearr_26977[(10)] = inst_26960);

return statearr_26977;
})();
var statearr_26978_27083 = state_26967__$1;
(statearr_26978_27083[(2)] = null);

(statearr_26978_27083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___27077,jobs,results,process,async))
;
return ((function (switch__26640__auto__,c__26728__auto___27077,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0 = (function (){
var statearr_26979 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__);

(statearr_26979[(1)] = (1));

return statearr_26979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1 = (function (state_26967){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_26967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e26980){if((e26980 instanceof Object)){
var ex__26644__auto__ = e26980;
var statearr_26981_27084 = state_26967;
(statearr_26981_27084[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27085 = state_26967;
state_26967 = G__27085;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___27077,jobs,results,process,async))
})();
var state__26730__auto__ = (function (){var statearr_26982 = f__26729__auto__.call(null);
(statearr_26982[(6)] = c__26728__auto___27077);

return statearr_26982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___27077,jobs,results,process,async))
);


var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__,jobs,results,process,async){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__,jobs,results,process,async){
return (function (state_27020){
var state_val_27021 = (state_27020[(1)]);
if((state_val_27021 === (7))){
var inst_27016 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27022_27086 = state_27020__$1;
(statearr_27022_27086[(2)] = inst_27016);

(statearr_27022_27086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (20))){
var state_27020__$1 = state_27020;
var statearr_27023_27087 = state_27020__$1;
(statearr_27023_27087[(2)] = null);

(statearr_27023_27087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (1))){
var state_27020__$1 = state_27020;
var statearr_27024_27088 = state_27020__$1;
(statearr_27024_27088[(2)] = null);

(statearr_27024_27088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (4))){
var inst_26985 = (state_27020[(7)]);
var inst_26985__$1 = (state_27020[(2)]);
var inst_26986 = (inst_26985__$1 == null);
var state_27020__$1 = (function (){var statearr_27025 = state_27020;
(statearr_27025[(7)] = inst_26985__$1);

return statearr_27025;
})();
if(cljs.core.truth_(inst_26986)){
var statearr_27026_27089 = state_27020__$1;
(statearr_27026_27089[(1)] = (5));

} else {
var statearr_27027_27090 = state_27020__$1;
(statearr_27027_27090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (15))){
var inst_26998 = (state_27020[(8)]);
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27020__$1,(18),to,inst_26998);
} else {
if((state_val_27021 === (21))){
var inst_27011 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27028_27091 = state_27020__$1;
(statearr_27028_27091[(2)] = inst_27011);

(statearr_27028_27091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (13))){
var inst_27013 = (state_27020[(2)]);
var state_27020__$1 = (function (){var statearr_27029 = state_27020;
(statearr_27029[(9)] = inst_27013);

return statearr_27029;
})();
var statearr_27030_27092 = state_27020__$1;
(statearr_27030_27092[(2)] = null);

(statearr_27030_27092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (6))){
var inst_26985 = (state_27020[(7)]);
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27020__$1,(11),inst_26985);
} else {
if((state_val_27021 === (17))){
var inst_27006 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
if(cljs.core.truth_(inst_27006)){
var statearr_27031_27093 = state_27020__$1;
(statearr_27031_27093[(1)] = (19));

} else {
var statearr_27032_27094 = state_27020__$1;
(statearr_27032_27094[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (3))){
var inst_27018 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27020__$1,inst_27018);
} else {
if((state_val_27021 === (12))){
var inst_26995 = (state_27020[(10)]);
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27020__$1,(14),inst_26995);
} else {
if((state_val_27021 === (2))){
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27020__$1,(4),results);
} else {
if((state_val_27021 === (19))){
var state_27020__$1 = state_27020;
var statearr_27033_27095 = state_27020__$1;
(statearr_27033_27095[(2)] = null);

(statearr_27033_27095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (11))){
var inst_26995 = (state_27020[(2)]);
var state_27020__$1 = (function (){var statearr_27034 = state_27020;
(statearr_27034[(10)] = inst_26995);

return statearr_27034;
})();
var statearr_27035_27096 = state_27020__$1;
(statearr_27035_27096[(2)] = null);

(statearr_27035_27096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (9))){
var state_27020__$1 = state_27020;
var statearr_27036_27097 = state_27020__$1;
(statearr_27036_27097[(2)] = null);

(statearr_27036_27097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (5))){
var state_27020__$1 = state_27020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27037_27098 = state_27020__$1;
(statearr_27037_27098[(1)] = (8));

} else {
var statearr_27038_27099 = state_27020__$1;
(statearr_27038_27099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (14))){
var inst_26998 = (state_27020[(8)]);
var inst_27000 = (state_27020[(11)]);
var inst_26998__$1 = (state_27020[(2)]);
var inst_26999 = (inst_26998__$1 == null);
var inst_27000__$1 = cljs.core.not.call(null,inst_26999);
var state_27020__$1 = (function (){var statearr_27039 = state_27020;
(statearr_27039[(8)] = inst_26998__$1);

(statearr_27039[(11)] = inst_27000__$1);

return statearr_27039;
})();
if(inst_27000__$1){
var statearr_27040_27100 = state_27020__$1;
(statearr_27040_27100[(1)] = (15));

} else {
var statearr_27041_27101 = state_27020__$1;
(statearr_27041_27101[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (16))){
var inst_27000 = (state_27020[(11)]);
var state_27020__$1 = state_27020;
var statearr_27042_27102 = state_27020__$1;
(statearr_27042_27102[(2)] = inst_27000);

(statearr_27042_27102[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (10))){
var inst_26992 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27043_27103 = state_27020__$1;
(statearr_27043_27103[(2)] = inst_26992);

(statearr_27043_27103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (18))){
var inst_27003 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27044_27104 = state_27020__$1;
(statearr_27044_27104[(2)] = inst_27003);

(statearr_27044_27104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (8))){
var inst_26989 = cljs.core.async.close_BANG_.call(null,to);
var state_27020__$1 = state_27020;
var statearr_27045_27105 = state_27020__$1;
(statearr_27045_27105[(2)] = inst_26989);

(statearr_27045_27105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto__,jobs,results,process,async))
;
return ((function (switch__26640__auto__,c__26728__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0 = (function (){
var statearr_27046 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__);

(statearr_27046[(1)] = (1));

return statearr_27046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1 = (function (state_27020){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_27020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e27047){if((e27047 instanceof Object)){
var ex__26644__auto__ = e27047;
var statearr_27048_27106 = state_27020;
(statearr_27048_27106[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27107 = state_27020;
state_27020 = G__27107;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__ = function(state_27020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1.call(this,state_27020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__,jobs,results,process,async))
})();
var state__26730__auto__ = (function (){var statearr_27049 = f__26729__auto__.call(null);
(statearr_27049[(6)] = c__26728__auto__);

return statearr_27049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__,jobs,results,process,async))
);

return c__26728__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27109 = arguments.length;
switch (G__27109) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27112 = arguments.length;
switch (G__27112) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27115 = arguments.length;
switch (G__27115) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26728__auto___27164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___27164,tc,fc){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___27164,tc,fc){
return (function (state_27141){
var state_val_27142 = (state_27141[(1)]);
if((state_val_27142 === (7))){
var inst_27137 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27143_27165 = state_27141__$1;
(statearr_27143_27165[(2)] = inst_27137);

(statearr_27143_27165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (1))){
var state_27141__$1 = state_27141;
var statearr_27144_27166 = state_27141__$1;
(statearr_27144_27166[(2)] = null);

(statearr_27144_27166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (4))){
var inst_27118 = (state_27141[(7)]);
var inst_27118__$1 = (state_27141[(2)]);
var inst_27119 = (inst_27118__$1 == null);
var state_27141__$1 = (function (){var statearr_27145 = state_27141;
(statearr_27145[(7)] = inst_27118__$1);

return statearr_27145;
})();
if(cljs.core.truth_(inst_27119)){
var statearr_27146_27167 = state_27141__$1;
(statearr_27146_27167[(1)] = (5));

} else {
var statearr_27147_27168 = state_27141__$1;
(statearr_27147_27168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (13))){
var state_27141__$1 = state_27141;
var statearr_27148_27169 = state_27141__$1;
(statearr_27148_27169[(2)] = null);

(statearr_27148_27169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (6))){
var inst_27118 = (state_27141[(7)]);
var inst_27124 = p.call(null,inst_27118);
var state_27141__$1 = state_27141;
if(cljs.core.truth_(inst_27124)){
var statearr_27149_27170 = state_27141__$1;
(statearr_27149_27170[(1)] = (9));

} else {
var statearr_27150_27171 = state_27141__$1;
(statearr_27150_27171[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (3))){
var inst_27139 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27141__$1,inst_27139);
} else {
if((state_val_27142 === (12))){
var state_27141__$1 = state_27141;
var statearr_27151_27172 = state_27141__$1;
(statearr_27151_27172[(2)] = null);

(statearr_27151_27172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (2))){
var state_27141__$1 = state_27141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27141__$1,(4),ch);
} else {
if((state_val_27142 === (11))){
var inst_27118 = (state_27141[(7)]);
var inst_27128 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27141__$1,(8),inst_27128,inst_27118);
} else {
if((state_val_27142 === (9))){
var state_27141__$1 = state_27141;
var statearr_27152_27173 = state_27141__$1;
(statearr_27152_27173[(2)] = tc);

(statearr_27152_27173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (5))){
var inst_27121 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27122 = cljs.core.async.close_BANG_.call(null,fc);
var state_27141__$1 = (function (){var statearr_27153 = state_27141;
(statearr_27153[(8)] = inst_27121);

return statearr_27153;
})();
var statearr_27154_27174 = state_27141__$1;
(statearr_27154_27174[(2)] = inst_27122);

(statearr_27154_27174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (14))){
var inst_27135 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27155_27175 = state_27141__$1;
(statearr_27155_27175[(2)] = inst_27135);

(statearr_27155_27175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (10))){
var state_27141__$1 = state_27141;
var statearr_27156_27176 = state_27141__$1;
(statearr_27156_27176[(2)] = fc);

(statearr_27156_27176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (8))){
var inst_27130 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
if(cljs.core.truth_(inst_27130)){
var statearr_27157_27177 = state_27141__$1;
(statearr_27157_27177[(1)] = (12));

} else {
var statearr_27158_27178 = state_27141__$1;
(statearr_27158_27178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___27164,tc,fc))
;
return ((function (switch__26640__auto__,c__26728__auto___27164,tc,fc){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_27159 = [null,null,null,null,null,null,null,null,null];
(statearr_27159[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_27159[(1)] = (1));

return statearr_27159;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_27141){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_27141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e27160){if((e27160 instanceof Object)){
var ex__26644__auto__ = e27160;
var statearr_27161_27179 = state_27141;
(statearr_27161_27179[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27180 = state_27141;
state_27141 = G__27180;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_27141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_27141);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___27164,tc,fc))
})();
var state__26730__auto__ = (function (){var statearr_27162 = f__26729__auto__.call(null);
(statearr_27162[(6)] = c__26728__auto___27164);

return statearr_27162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___27164,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__){
return (function (state_27201){
var state_val_27202 = (state_27201[(1)]);
if((state_val_27202 === (7))){
var inst_27197 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
var statearr_27203_27221 = state_27201__$1;
(statearr_27203_27221[(2)] = inst_27197);

(statearr_27203_27221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (1))){
var inst_27181 = init;
var state_27201__$1 = (function (){var statearr_27204 = state_27201;
(statearr_27204[(7)] = inst_27181);

return statearr_27204;
})();
var statearr_27205_27222 = state_27201__$1;
(statearr_27205_27222[(2)] = null);

(statearr_27205_27222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (4))){
var inst_27184 = (state_27201[(8)]);
var inst_27184__$1 = (state_27201[(2)]);
var inst_27185 = (inst_27184__$1 == null);
var state_27201__$1 = (function (){var statearr_27206 = state_27201;
(statearr_27206[(8)] = inst_27184__$1);

return statearr_27206;
})();
if(cljs.core.truth_(inst_27185)){
var statearr_27207_27223 = state_27201__$1;
(statearr_27207_27223[(1)] = (5));

} else {
var statearr_27208_27224 = state_27201__$1;
(statearr_27208_27224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (6))){
var inst_27188 = (state_27201[(9)]);
var inst_27184 = (state_27201[(8)]);
var inst_27181 = (state_27201[(7)]);
var inst_27188__$1 = f.call(null,inst_27181,inst_27184);
var inst_27189 = cljs.core.reduced_QMARK_.call(null,inst_27188__$1);
var state_27201__$1 = (function (){var statearr_27209 = state_27201;
(statearr_27209[(9)] = inst_27188__$1);

return statearr_27209;
})();
if(inst_27189){
var statearr_27210_27225 = state_27201__$1;
(statearr_27210_27225[(1)] = (8));

} else {
var statearr_27211_27226 = state_27201__$1;
(statearr_27211_27226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (3))){
var inst_27199 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27201__$1,inst_27199);
} else {
if((state_val_27202 === (2))){
var state_27201__$1 = state_27201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27201__$1,(4),ch);
} else {
if((state_val_27202 === (9))){
var inst_27188 = (state_27201[(9)]);
var inst_27181 = inst_27188;
var state_27201__$1 = (function (){var statearr_27212 = state_27201;
(statearr_27212[(7)] = inst_27181);

return statearr_27212;
})();
var statearr_27213_27227 = state_27201__$1;
(statearr_27213_27227[(2)] = null);

(statearr_27213_27227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (5))){
var inst_27181 = (state_27201[(7)]);
var state_27201__$1 = state_27201;
var statearr_27214_27228 = state_27201__$1;
(statearr_27214_27228[(2)] = inst_27181);

(statearr_27214_27228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (10))){
var inst_27195 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
var statearr_27215_27229 = state_27201__$1;
(statearr_27215_27229[(2)] = inst_27195);

(statearr_27215_27229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (8))){
var inst_27188 = (state_27201[(9)]);
var inst_27191 = cljs.core.deref.call(null,inst_27188);
var state_27201__$1 = state_27201;
var statearr_27216_27230 = state_27201__$1;
(statearr_27216_27230[(2)] = inst_27191);

(statearr_27216_27230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto__))
;
return ((function (switch__26640__auto__,c__26728__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26641__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26641__auto____0 = (function (){
var statearr_27217 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27217[(0)] = cljs$core$async$reduce_$_state_machine__26641__auto__);

(statearr_27217[(1)] = (1));

return statearr_27217;
});
var cljs$core$async$reduce_$_state_machine__26641__auto____1 = (function (state_27201){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_27201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e27218){if((e27218 instanceof Object)){
var ex__26644__auto__ = e27218;
var statearr_27219_27231 = state_27201;
(statearr_27219_27231[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27232 = state_27201;
state_27201 = G__27232;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26641__auto__ = function(state_27201){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26641__auto____1.call(this,state_27201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26641__auto____0;
cljs$core$async$reduce_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26641__auto____1;
return cljs$core$async$reduce_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__))
})();
var state__26730__auto__ = (function (){var statearr_27220 = f__26729__auto__.call(null);
(statearr_27220[(6)] = c__26728__auto__);

return statearr_27220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__))
);

return c__26728__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__,f__$1){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__,f__$1){
return (function (state_27238){
var state_val_27239 = (state_27238[(1)]);
if((state_val_27239 === (1))){
var inst_27233 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27238__$1 = state_27238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27238__$1,(2),inst_27233);
} else {
if((state_val_27239 === (2))){
var inst_27235 = (state_27238[(2)]);
var inst_27236 = f__$1.call(null,inst_27235);
var state_27238__$1 = state_27238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27238__$1,inst_27236);
} else {
return null;
}
}
});})(c__26728__auto__,f__$1))
;
return ((function (switch__26640__auto__,c__26728__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26641__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26641__auto____0 = (function (){
var statearr_27240 = [null,null,null,null,null,null,null];
(statearr_27240[(0)] = cljs$core$async$transduce_$_state_machine__26641__auto__);

(statearr_27240[(1)] = (1));

return statearr_27240;
});
var cljs$core$async$transduce_$_state_machine__26641__auto____1 = (function (state_27238){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_27238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e27241){if((e27241 instanceof Object)){
var ex__26644__auto__ = e27241;
var statearr_27242_27244 = state_27238;
(statearr_27242_27244[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27245 = state_27238;
state_27238 = G__27245;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26641__auto__ = function(state_27238){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26641__auto____1.call(this,state_27238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26641__auto____0;
cljs$core$async$transduce_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26641__auto____1;
return cljs$core$async$transduce_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__,f__$1))
})();
var state__26730__auto__ = (function (){var statearr_27243 = f__26729__auto__.call(null);
(statearr_27243[(6)] = c__26728__auto__);

return statearr_27243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__,f__$1))
);

return c__26728__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27247 = arguments.length;
switch (G__27247) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__){
return (function (state_27272){
var state_val_27273 = (state_27272[(1)]);
if((state_val_27273 === (7))){
var inst_27254 = (state_27272[(2)]);
var state_27272__$1 = state_27272;
var statearr_27274_27295 = state_27272__$1;
(statearr_27274_27295[(2)] = inst_27254);

(statearr_27274_27295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (1))){
var inst_27248 = cljs.core.seq.call(null,coll);
var inst_27249 = inst_27248;
var state_27272__$1 = (function (){var statearr_27275 = state_27272;
(statearr_27275[(7)] = inst_27249);

return statearr_27275;
})();
var statearr_27276_27296 = state_27272__$1;
(statearr_27276_27296[(2)] = null);

(statearr_27276_27296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (4))){
var inst_27249 = (state_27272[(7)]);
var inst_27252 = cljs.core.first.call(null,inst_27249);
var state_27272__$1 = state_27272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27272__$1,(7),ch,inst_27252);
} else {
if((state_val_27273 === (13))){
var inst_27266 = (state_27272[(2)]);
var state_27272__$1 = state_27272;
var statearr_27277_27297 = state_27272__$1;
(statearr_27277_27297[(2)] = inst_27266);

(statearr_27277_27297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (6))){
var inst_27257 = (state_27272[(2)]);
var state_27272__$1 = state_27272;
if(cljs.core.truth_(inst_27257)){
var statearr_27278_27298 = state_27272__$1;
(statearr_27278_27298[(1)] = (8));

} else {
var statearr_27279_27299 = state_27272__$1;
(statearr_27279_27299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (3))){
var inst_27270 = (state_27272[(2)]);
var state_27272__$1 = state_27272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27272__$1,inst_27270);
} else {
if((state_val_27273 === (12))){
var state_27272__$1 = state_27272;
var statearr_27280_27300 = state_27272__$1;
(statearr_27280_27300[(2)] = null);

(statearr_27280_27300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (2))){
var inst_27249 = (state_27272[(7)]);
var state_27272__$1 = state_27272;
if(cljs.core.truth_(inst_27249)){
var statearr_27281_27301 = state_27272__$1;
(statearr_27281_27301[(1)] = (4));

} else {
var statearr_27282_27302 = state_27272__$1;
(statearr_27282_27302[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (11))){
var inst_27263 = cljs.core.async.close_BANG_.call(null,ch);
var state_27272__$1 = state_27272;
var statearr_27283_27303 = state_27272__$1;
(statearr_27283_27303[(2)] = inst_27263);

(statearr_27283_27303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (9))){
var state_27272__$1 = state_27272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27284_27304 = state_27272__$1;
(statearr_27284_27304[(1)] = (11));

} else {
var statearr_27285_27305 = state_27272__$1;
(statearr_27285_27305[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (5))){
var inst_27249 = (state_27272[(7)]);
var state_27272__$1 = state_27272;
var statearr_27286_27306 = state_27272__$1;
(statearr_27286_27306[(2)] = inst_27249);

(statearr_27286_27306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (10))){
var inst_27268 = (state_27272[(2)]);
var state_27272__$1 = state_27272;
var statearr_27287_27307 = state_27272__$1;
(statearr_27287_27307[(2)] = inst_27268);

(statearr_27287_27307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27273 === (8))){
var inst_27249 = (state_27272[(7)]);
var inst_27259 = cljs.core.next.call(null,inst_27249);
var inst_27249__$1 = inst_27259;
var state_27272__$1 = (function (){var statearr_27288 = state_27272;
(statearr_27288[(7)] = inst_27249__$1);

return statearr_27288;
})();
var statearr_27289_27308 = state_27272__$1;
(statearr_27289_27308[(2)] = null);

(statearr_27289_27308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto__))
;
return ((function (switch__26640__auto__,c__26728__auto__){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_27290 = [null,null,null,null,null,null,null,null];
(statearr_27290[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_27290[(1)] = (1));

return statearr_27290;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_27272){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_27272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e27291){if((e27291 instanceof Object)){
var ex__26644__auto__ = e27291;
var statearr_27292_27309 = state_27272;
(statearr_27292_27309[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27310 = state_27272;
state_27272 = G__27310;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_27272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_27272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__))
})();
var state__26730__auto__ = (function (){var statearr_27293 = f__26729__auto__.call(null);
(statearr_27293[(6)] = c__26728__auto__);

return statearr_27293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__))
);

return c__26728__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27311 = (function (ch,cs,meta27312){
this.ch = ch;
this.cs = cs;
this.meta27312 = meta27312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27313,meta27312__$1){
var self__ = this;
var _27313__$1 = this;
return (new cljs.core.async.t_cljs$core$async27311(self__.ch,self__.cs,meta27312__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27313){
var self__ = this;
var _27313__$1 = this;
return self__.meta27312;
});})(cs))
;

cljs.core.async.t_cljs$core$async27311.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27311.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27311.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27311.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27311.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27311.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27311.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27312","meta27312",-1998644866,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27311";

cljs.core.async.t_cljs$core$async27311.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27311");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27311.
 */
cljs.core.async.__GT_t_cljs$core$async27311 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27311(ch__$1,cs__$1,meta27312){
return (new cljs.core.async.t_cljs$core$async27311(ch__$1,cs__$1,meta27312));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27311(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26728__auto___27533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___27533,cs,m,dchan,dctr,done){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___27533,cs,m,dchan,dctr,done){
return (function (state_27448){
var state_val_27449 = (state_27448[(1)]);
if((state_val_27449 === (7))){
var inst_27444 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27450_27534 = state_27448__$1;
(statearr_27450_27534[(2)] = inst_27444);

(statearr_27450_27534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (20))){
var inst_27347 = (state_27448[(7)]);
var inst_27359 = cljs.core.first.call(null,inst_27347);
var inst_27360 = cljs.core.nth.call(null,inst_27359,(0),null);
var inst_27361 = cljs.core.nth.call(null,inst_27359,(1),null);
var state_27448__$1 = (function (){var statearr_27451 = state_27448;
(statearr_27451[(8)] = inst_27360);

return statearr_27451;
})();
if(cljs.core.truth_(inst_27361)){
var statearr_27452_27535 = state_27448__$1;
(statearr_27452_27535[(1)] = (22));

} else {
var statearr_27453_27536 = state_27448__$1;
(statearr_27453_27536[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (27))){
var inst_27391 = (state_27448[(9)]);
var inst_27316 = (state_27448[(10)]);
var inst_27396 = (state_27448[(11)]);
var inst_27389 = (state_27448[(12)]);
var inst_27396__$1 = cljs.core._nth.call(null,inst_27389,inst_27391);
var inst_27397 = cljs.core.async.put_BANG_.call(null,inst_27396__$1,inst_27316,done);
var state_27448__$1 = (function (){var statearr_27454 = state_27448;
(statearr_27454[(11)] = inst_27396__$1);

return statearr_27454;
})();
if(cljs.core.truth_(inst_27397)){
var statearr_27455_27537 = state_27448__$1;
(statearr_27455_27537[(1)] = (30));

} else {
var statearr_27456_27538 = state_27448__$1;
(statearr_27456_27538[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (1))){
var state_27448__$1 = state_27448;
var statearr_27457_27539 = state_27448__$1;
(statearr_27457_27539[(2)] = null);

(statearr_27457_27539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (24))){
var inst_27347 = (state_27448[(7)]);
var inst_27366 = (state_27448[(2)]);
var inst_27367 = cljs.core.next.call(null,inst_27347);
var inst_27325 = inst_27367;
var inst_27326 = null;
var inst_27327 = (0);
var inst_27328 = (0);
var state_27448__$1 = (function (){var statearr_27458 = state_27448;
(statearr_27458[(13)] = inst_27325);

(statearr_27458[(14)] = inst_27327);

(statearr_27458[(15)] = inst_27328);

(statearr_27458[(16)] = inst_27326);

(statearr_27458[(17)] = inst_27366);

return statearr_27458;
})();
var statearr_27459_27540 = state_27448__$1;
(statearr_27459_27540[(2)] = null);

(statearr_27459_27540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (39))){
var state_27448__$1 = state_27448;
var statearr_27463_27541 = state_27448__$1;
(statearr_27463_27541[(2)] = null);

(statearr_27463_27541[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (4))){
var inst_27316 = (state_27448[(10)]);
var inst_27316__$1 = (state_27448[(2)]);
var inst_27317 = (inst_27316__$1 == null);
var state_27448__$1 = (function (){var statearr_27464 = state_27448;
(statearr_27464[(10)] = inst_27316__$1);

return statearr_27464;
})();
if(cljs.core.truth_(inst_27317)){
var statearr_27465_27542 = state_27448__$1;
(statearr_27465_27542[(1)] = (5));

} else {
var statearr_27466_27543 = state_27448__$1;
(statearr_27466_27543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (15))){
var inst_27325 = (state_27448[(13)]);
var inst_27327 = (state_27448[(14)]);
var inst_27328 = (state_27448[(15)]);
var inst_27326 = (state_27448[(16)]);
var inst_27343 = (state_27448[(2)]);
var inst_27344 = (inst_27328 + (1));
var tmp27460 = inst_27325;
var tmp27461 = inst_27327;
var tmp27462 = inst_27326;
var inst_27325__$1 = tmp27460;
var inst_27326__$1 = tmp27462;
var inst_27327__$1 = tmp27461;
var inst_27328__$1 = inst_27344;
var state_27448__$1 = (function (){var statearr_27467 = state_27448;
(statearr_27467[(13)] = inst_27325__$1);

(statearr_27467[(14)] = inst_27327__$1);

(statearr_27467[(15)] = inst_27328__$1);

(statearr_27467[(16)] = inst_27326__$1);

(statearr_27467[(18)] = inst_27343);

return statearr_27467;
})();
var statearr_27468_27544 = state_27448__$1;
(statearr_27468_27544[(2)] = null);

(statearr_27468_27544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (21))){
var inst_27370 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27472_27545 = state_27448__$1;
(statearr_27472_27545[(2)] = inst_27370);

(statearr_27472_27545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (31))){
var inst_27396 = (state_27448[(11)]);
var inst_27400 = done.call(null,null);
var inst_27401 = cljs.core.async.untap_STAR_.call(null,m,inst_27396);
var state_27448__$1 = (function (){var statearr_27473 = state_27448;
(statearr_27473[(19)] = inst_27400);

return statearr_27473;
})();
var statearr_27474_27546 = state_27448__$1;
(statearr_27474_27546[(2)] = inst_27401);

(statearr_27474_27546[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (32))){
var inst_27391 = (state_27448[(9)]);
var inst_27390 = (state_27448[(20)]);
var inst_27389 = (state_27448[(12)]);
var inst_27388 = (state_27448[(21)]);
var inst_27403 = (state_27448[(2)]);
var inst_27404 = (inst_27391 + (1));
var tmp27469 = inst_27390;
var tmp27470 = inst_27389;
var tmp27471 = inst_27388;
var inst_27388__$1 = tmp27471;
var inst_27389__$1 = tmp27470;
var inst_27390__$1 = tmp27469;
var inst_27391__$1 = inst_27404;
var state_27448__$1 = (function (){var statearr_27475 = state_27448;
(statearr_27475[(9)] = inst_27391__$1);

(statearr_27475[(22)] = inst_27403);

(statearr_27475[(20)] = inst_27390__$1);

(statearr_27475[(12)] = inst_27389__$1);

(statearr_27475[(21)] = inst_27388__$1);

return statearr_27475;
})();
var statearr_27476_27547 = state_27448__$1;
(statearr_27476_27547[(2)] = null);

(statearr_27476_27547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (40))){
var inst_27416 = (state_27448[(23)]);
var inst_27420 = done.call(null,null);
var inst_27421 = cljs.core.async.untap_STAR_.call(null,m,inst_27416);
var state_27448__$1 = (function (){var statearr_27477 = state_27448;
(statearr_27477[(24)] = inst_27420);

return statearr_27477;
})();
var statearr_27478_27548 = state_27448__$1;
(statearr_27478_27548[(2)] = inst_27421);

(statearr_27478_27548[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (33))){
var inst_27407 = (state_27448[(25)]);
var inst_27409 = cljs.core.chunked_seq_QMARK_.call(null,inst_27407);
var state_27448__$1 = state_27448;
if(inst_27409){
var statearr_27479_27549 = state_27448__$1;
(statearr_27479_27549[(1)] = (36));

} else {
var statearr_27480_27550 = state_27448__$1;
(statearr_27480_27550[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (13))){
var inst_27337 = (state_27448[(26)]);
var inst_27340 = cljs.core.async.close_BANG_.call(null,inst_27337);
var state_27448__$1 = state_27448;
var statearr_27481_27551 = state_27448__$1;
(statearr_27481_27551[(2)] = inst_27340);

(statearr_27481_27551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (22))){
var inst_27360 = (state_27448[(8)]);
var inst_27363 = cljs.core.async.close_BANG_.call(null,inst_27360);
var state_27448__$1 = state_27448;
var statearr_27482_27552 = state_27448__$1;
(statearr_27482_27552[(2)] = inst_27363);

(statearr_27482_27552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (36))){
var inst_27407 = (state_27448[(25)]);
var inst_27411 = cljs.core.chunk_first.call(null,inst_27407);
var inst_27412 = cljs.core.chunk_rest.call(null,inst_27407);
var inst_27413 = cljs.core.count.call(null,inst_27411);
var inst_27388 = inst_27412;
var inst_27389 = inst_27411;
var inst_27390 = inst_27413;
var inst_27391 = (0);
var state_27448__$1 = (function (){var statearr_27483 = state_27448;
(statearr_27483[(9)] = inst_27391);

(statearr_27483[(20)] = inst_27390);

(statearr_27483[(12)] = inst_27389);

(statearr_27483[(21)] = inst_27388);

return statearr_27483;
})();
var statearr_27484_27553 = state_27448__$1;
(statearr_27484_27553[(2)] = null);

(statearr_27484_27553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (41))){
var inst_27407 = (state_27448[(25)]);
var inst_27423 = (state_27448[(2)]);
var inst_27424 = cljs.core.next.call(null,inst_27407);
var inst_27388 = inst_27424;
var inst_27389 = null;
var inst_27390 = (0);
var inst_27391 = (0);
var state_27448__$1 = (function (){var statearr_27485 = state_27448;
(statearr_27485[(9)] = inst_27391);

(statearr_27485[(27)] = inst_27423);

(statearr_27485[(20)] = inst_27390);

(statearr_27485[(12)] = inst_27389);

(statearr_27485[(21)] = inst_27388);

return statearr_27485;
})();
var statearr_27486_27554 = state_27448__$1;
(statearr_27486_27554[(2)] = null);

(statearr_27486_27554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (43))){
var state_27448__$1 = state_27448;
var statearr_27487_27555 = state_27448__$1;
(statearr_27487_27555[(2)] = null);

(statearr_27487_27555[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (29))){
var inst_27432 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27488_27556 = state_27448__$1;
(statearr_27488_27556[(2)] = inst_27432);

(statearr_27488_27556[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (44))){
var inst_27441 = (state_27448[(2)]);
var state_27448__$1 = (function (){var statearr_27489 = state_27448;
(statearr_27489[(28)] = inst_27441);

return statearr_27489;
})();
var statearr_27490_27557 = state_27448__$1;
(statearr_27490_27557[(2)] = null);

(statearr_27490_27557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (6))){
var inst_27380 = (state_27448[(29)]);
var inst_27379 = cljs.core.deref.call(null,cs);
var inst_27380__$1 = cljs.core.keys.call(null,inst_27379);
var inst_27381 = cljs.core.count.call(null,inst_27380__$1);
var inst_27382 = cljs.core.reset_BANG_.call(null,dctr,inst_27381);
var inst_27387 = cljs.core.seq.call(null,inst_27380__$1);
var inst_27388 = inst_27387;
var inst_27389 = null;
var inst_27390 = (0);
var inst_27391 = (0);
var state_27448__$1 = (function (){var statearr_27491 = state_27448;
(statearr_27491[(9)] = inst_27391);

(statearr_27491[(29)] = inst_27380__$1);

(statearr_27491[(20)] = inst_27390);

(statearr_27491[(30)] = inst_27382);

(statearr_27491[(12)] = inst_27389);

(statearr_27491[(21)] = inst_27388);

return statearr_27491;
})();
var statearr_27492_27558 = state_27448__$1;
(statearr_27492_27558[(2)] = null);

(statearr_27492_27558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (28))){
var inst_27407 = (state_27448[(25)]);
var inst_27388 = (state_27448[(21)]);
var inst_27407__$1 = cljs.core.seq.call(null,inst_27388);
var state_27448__$1 = (function (){var statearr_27493 = state_27448;
(statearr_27493[(25)] = inst_27407__$1);

return statearr_27493;
})();
if(inst_27407__$1){
var statearr_27494_27559 = state_27448__$1;
(statearr_27494_27559[(1)] = (33));

} else {
var statearr_27495_27560 = state_27448__$1;
(statearr_27495_27560[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (25))){
var inst_27391 = (state_27448[(9)]);
var inst_27390 = (state_27448[(20)]);
var inst_27393 = (inst_27391 < inst_27390);
var inst_27394 = inst_27393;
var state_27448__$1 = state_27448;
if(cljs.core.truth_(inst_27394)){
var statearr_27496_27561 = state_27448__$1;
(statearr_27496_27561[(1)] = (27));

} else {
var statearr_27497_27562 = state_27448__$1;
(statearr_27497_27562[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (34))){
var state_27448__$1 = state_27448;
var statearr_27498_27563 = state_27448__$1;
(statearr_27498_27563[(2)] = null);

(statearr_27498_27563[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (17))){
var state_27448__$1 = state_27448;
var statearr_27499_27564 = state_27448__$1;
(statearr_27499_27564[(2)] = null);

(statearr_27499_27564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (3))){
var inst_27446 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27448__$1,inst_27446);
} else {
if((state_val_27449 === (12))){
var inst_27375 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27500_27565 = state_27448__$1;
(statearr_27500_27565[(2)] = inst_27375);

(statearr_27500_27565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (2))){
var state_27448__$1 = state_27448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27448__$1,(4),ch);
} else {
if((state_val_27449 === (23))){
var state_27448__$1 = state_27448;
var statearr_27501_27566 = state_27448__$1;
(statearr_27501_27566[(2)] = null);

(statearr_27501_27566[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (35))){
var inst_27430 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27502_27567 = state_27448__$1;
(statearr_27502_27567[(2)] = inst_27430);

(statearr_27502_27567[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (19))){
var inst_27347 = (state_27448[(7)]);
var inst_27351 = cljs.core.chunk_first.call(null,inst_27347);
var inst_27352 = cljs.core.chunk_rest.call(null,inst_27347);
var inst_27353 = cljs.core.count.call(null,inst_27351);
var inst_27325 = inst_27352;
var inst_27326 = inst_27351;
var inst_27327 = inst_27353;
var inst_27328 = (0);
var state_27448__$1 = (function (){var statearr_27503 = state_27448;
(statearr_27503[(13)] = inst_27325);

(statearr_27503[(14)] = inst_27327);

(statearr_27503[(15)] = inst_27328);

(statearr_27503[(16)] = inst_27326);

return statearr_27503;
})();
var statearr_27504_27568 = state_27448__$1;
(statearr_27504_27568[(2)] = null);

(statearr_27504_27568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (11))){
var inst_27325 = (state_27448[(13)]);
var inst_27347 = (state_27448[(7)]);
var inst_27347__$1 = cljs.core.seq.call(null,inst_27325);
var state_27448__$1 = (function (){var statearr_27505 = state_27448;
(statearr_27505[(7)] = inst_27347__$1);

return statearr_27505;
})();
if(inst_27347__$1){
var statearr_27506_27569 = state_27448__$1;
(statearr_27506_27569[(1)] = (16));

} else {
var statearr_27507_27570 = state_27448__$1;
(statearr_27507_27570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (9))){
var inst_27377 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27508_27571 = state_27448__$1;
(statearr_27508_27571[(2)] = inst_27377);

(statearr_27508_27571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (5))){
var inst_27323 = cljs.core.deref.call(null,cs);
var inst_27324 = cljs.core.seq.call(null,inst_27323);
var inst_27325 = inst_27324;
var inst_27326 = null;
var inst_27327 = (0);
var inst_27328 = (0);
var state_27448__$1 = (function (){var statearr_27509 = state_27448;
(statearr_27509[(13)] = inst_27325);

(statearr_27509[(14)] = inst_27327);

(statearr_27509[(15)] = inst_27328);

(statearr_27509[(16)] = inst_27326);

return statearr_27509;
})();
var statearr_27510_27572 = state_27448__$1;
(statearr_27510_27572[(2)] = null);

(statearr_27510_27572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (14))){
var state_27448__$1 = state_27448;
var statearr_27511_27573 = state_27448__$1;
(statearr_27511_27573[(2)] = null);

(statearr_27511_27573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (45))){
var inst_27438 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27512_27574 = state_27448__$1;
(statearr_27512_27574[(2)] = inst_27438);

(statearr_27512_27574[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (26))){
var inst_27380 = (state_27448[(29)]);
var inst_27434 = (state_27448[(2)]);
var inst_27435 = cljs.core.seq.call(null,inst_27380);
var state_27448__$1 = (function (){var statearr_27513 = state_27448;
(statearr_27513[(31)] = inst_27434);

return statearr_27513;
})();
if(inst_27435){
var statearr_27514_27575 = state_27448__$1;
(statearr_27514_27575[(1)] = (42));

} else {
var statearr_27515_27576 = state_27448__$1;
(statearr_27515_27576[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (16))){
var inst_27347 = (state_27448[(7)]);
var inst_27349 = cljs.core.chunked_seq_QMARK_.call(null,inst_27347);
var state_27448__$1 = state_27448;
if(inst_27349){
var statearr_27516_27577 = state_27448__$1;
(statearr_27516_27577[(1)] = (19));

} else {
var statearr_27517_27578 = state_27448__$1;
(statearr_27517_27578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (38))){
var inst_27427 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27518_27579 = state_27448__$1;
(statearr_27518_27579[(2)] = inst_27427);

(statearr_27518_27579[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (30))){
var state_27448__$1 = state_27448;
var statearr_27519_27580 = state_27448__$1;
(statearr_27519_27580[(2)] = null);

(statearr_27519_27580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (10))){
var inst_27328 = (state_27448[(15)]);
var inst_27326 = (state_27448[(16)]);
var inst_27336 = cljs.core._nth.call(null,inst_27326,inst_27328);
var inst_27337 = cljs.core.nth.call(null,inst_27336,(0),null);
var inst_27338 = cljs.core.nth.call(null,inst_27336,(1),null);
var state_27448__$1 = (function (){var statearr_27520 = state_27448;
(statearr_27520[(26)] = inst_27337);

return statearr_27520;
})();
if(cljs.core.truth_(inst_27338)){
var statearr_27521_27581 = state_27448__$1;
(statearr_27521_27581[(1)] = (13));

} else {
var statearr_27522_27582 = state_27448__$1;
(statearr_27522_27582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (18))){
var inst_27373 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27523_27583 = state_27448__$1;
(statearr_27523_27583[(2)] = inst_27373);

(statearr_27523_27583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (42))){
var state_27448__$1 = state_27448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27448__$1,(45),dchan);
} else {
if((state_val_27449 === (37))){
var inst_27407 = (state_27448[(25)]);
var inst_27316 = (state_27448[(10)]);
var inst_27416 = (state_27448[(23)]);
var inst_27416__$1 = cljs.core.first.call(null,inst_27407);
var inst_27417 = cljs.core.async.put_BANG_.call(null,inst_27416__$1,inst_27316,done);
var state_27448__$1 = (function (){var statearr_27524 = state_27448;
(statearr_27524[(23)] = inst_27416__$1);

return statearr_27524;
})();
if(cljs.core.truth_(inst_27417)){
var statearr_27525_27584 = state_27448__$1;
(statearr_27525_27584[(1)] = (39));

} else {
var statearr_27526_27585 = state_27448__$1;
(statearr_27526_27585[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (8))){
var inst_27327 = (state_27448[(14)]);
var inst_27328 = (state_27448[(15)]);
var inst_27330 = (inst_27328 < inst_27327);
var inst_27331 = inst_27330;
var state_27448__$1 = state_27448;
if(cljs.core.truth_(inst_27331)){
var statearr_27527_27586 = state_27448__$1;
(statearr_27527_27586[(1)] = (10));

} else {
var statearr_27528_27587 = state_27448__$1;
(statearr_27528_27587[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___27533,cs,m,dchan,dctr,done))
;
return ((function (switch__26640__auto__,c__26728__auto___27533,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26641__auto__ = null;
var cljs$core$async$mult_$_state_machine__26641__auto____0 = (function (){
var statearr_27529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27529[(0)] = cljs$core$async$mult_$_state_machine__26641__auto__);

(statearr_27529[(1)] = (1));

return statearr_27529;
});
var cljs$core$async$mult_$_state_machine__26641__auto____1 = (function (state_27448){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_27448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e27530){if((e27530 instanceof Object)){
var ex__26644__auto__ = e27530;
var statearr_27531_27588 = state_27448;
(statearr_27531_27588[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27589 = state_27448;
state_27448 = G__27589;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26641__auto__ = function(state_27448){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26641__auto____1.call(this,state_27448);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26641__auto____0;
cljs$core$async$mult_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26641__auto____1;
return cljs$core$async$mult_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___27533,cs,m,dchan,dctr,done))
})();
var state__26730__auto__ = (function (){var statearr_27532 = f__26729__auto__.call(null);
(statearr_27532[(6)] = c__26728__auto___27533);

return statearr_27532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___27533,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27591 = arguments.length;
switch (G__27591) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27603 = arguments.length;
var i__4500__auto___27604 = (0);
while(true){
if((i__4500__auto___27604 < len__4499__auto___27603)){
args__4502__auto__.push((arguments[i__4500__auto___27604]));

var G__27605 = (i__4500__auto___27604 + (1));
i__4500__auto___27604 = G__27605;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27597){
var map__27598 = p__27597;
var map__27598__$1 = ((((!((map__27598 == null)))?(((((map__27598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27598):map__27598);
var opts = map__27598__$1;
var statearr_27600_27606 = state;
(statearr_27600_27606[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__27598,map__27598__$1,opts){
return (function (val){
var statearr_27601_27607 = state;
(statearr_27601_27607[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27598,map__27598__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27602_27608 = state;
(statearr_27602_27608[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27593){
var G__27594 = cljs.core.first.call(null,seq27593);
var seq27593__$1 = cljs.core.next.call(null,seq27593);
var G__27595 = cljs.core.first.call(null,seq27593__$1);
var seq27593__$2 = cljs.core.next.call(null,seq27593__$1);
var G__27596 = cljs.core.first.call(null,seq27593__$2);
var seq27593__$3 = cljs.core.next.call(null,seq27593__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27594,G__27595,G__27596,seq27593__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27609 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27610){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27610 = meta27610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27611,meta27610__$1){
var self__ = this;
var _27611__$1 = this;
return (new cljs.core.async.t_cljs$core$async27609(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27610__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27611){
var self__ = this;
var _27611__$1 = this;
return self__.meta27610;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27609.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27609.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27610","meta27610",-265167219,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27609";

cljs.core.async.t_cljs$core$async27609.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27609");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27609.
 */
cljs.core.async.__GT_t_cljs$core$async27609 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27609(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27610){
return (new cljs.core.async.t_cljs$core$async27609(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27610));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27609(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26728__auto___27773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___27773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___27773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27713){
var state_val_27714 = (state_27713[(1)]);
if((state_val_27714 === (7))){
var inst_27628 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27715_27774 = state_27713__$1;
(statearr_27715_27774[(2)] = inst_27628);

(statearr_27715_27774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (20))){
var inst_27640 = (state_27713[(7)]);
var state_27713__$1 = state_27713;
var statearr_27716_27775 = state_27713__$1;
(statearr_27716_27775[(2)] = inst_27640);

(statearr_27716_27775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (27))){
var state_27713__$1 = state_27713;
var statearr_27717_27776 = state_27713__$1;
(statearr_27717_27776[(2)] = null);

(statearr_27717_27776[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (1))){
var inst_27615 = (state_27713[(8)]);
var inst_27615__$1 = calc_state.call(null);
var inst_27617 = (inst_27615__$1 == null);
var inst_27618 = cljs.core.not.call(null,inst_27617);
var state_27713__$1 = (function (){var statearr_27718 = state_27713;
(statearr_27718[(8)] = inst_27615__$1);

return statearr_27718;
})();
if(inst_27618){
var statearr_27719_27777 = state_27713__$1;
(statearr_27719_27777[(1)] = (2));

} else {
var statearr_27720_27778 = state_27713__$1;
(statearr_27720_27778[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (24))){
var inst_27664 = (state_27713[(9)]);
var inst_27687 = (state_27713[(10)]);
var inst_27673 = (state_27713[(11)]);
var inst_27687__$1 = inst_27664.call(null,inst_27673);
var state_27713__$1 = (function (){var statearr_27721 = state_27713;
(statearr_27721[(10)] = inst_27687__$1);

return statearr_27721;
})();
if(cljs.core.truth_(inst_27687__$1)){
var statearr_27722_27779 = state_27713__$1;
(statearr_27722_27779[(1)] = (29));

} else {
var statearr_27723_27780 = state_27713__$1;
(statearr_27723_27780[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (4))){
var inst_27631 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
if(cljs.core.truth_(inst_27631)){
var statearr_27724_27781 = state_27713__$1;
(statearr_27724_27781[(1)] = (8));

} else {
var statearr_27725_27782 = state_27713__$1;
(statearr_27725_27782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (15))){
var inst_27658 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
if(cljs.core.truth_(inst_27658)){
var statearr_27726_27783 = state_27713__$1;
(statearr_27726_27783[(1)] = (19));

} else {
var statearr_27727_27784 = state_27713__$1;
(statearr_27727_27784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (21))){
var inst_27663 = (state_27713[(12)]);
var inst_27663__$1 = (state_27713[(2)]);
var inst_27664 = cljs.core.get.call(null,inst_27663__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27665 = cljs.core.get.call(null,inst_27663__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27666 = cljs.core.get.call(null,inst_27663__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27713__$1 = (function (){var statearr_27728 = state_27713;
(statearr_27728[(9)] = inst_27664);

(statearr_27728[(12)] = inst_27663__$1);

(statearr_27728[(13)] = inst_27665);

return statearr_27728;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27713__$1,(22),inst_27666);
} else {
if((state_val_27714 === (31))){
var inst_27695 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
if(cljs.core.truth_(inst_27695)){
var statearr_27729_27785 = state_27713__$1;
(statearr_27729_27785[(1)] = (32));

} else {
var statearr_27730_27786 = state_27713__$1;
(statearr_27730_27786[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (32))){
var inst_27672 = (state_27713[(14)]);
var state_27713__$1 = state_27713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27713__$1,(35),out,inst_27672);
} else {
if((state_val_27714 === (33))){
var inst_27663 = (state_27713[(12)]);
var inst_27640 = inst_27663;
var state_27713__$1 = (function (){var statearr_27731 = state_27713;
(statearr_27731[(7)] = inst_27640);

return statearr_27731;
})();
var statearr_27732_27787 = state_27713__$1;
(statearr_27732_27787[(2)] = null);

(statearr_27732_27787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (13))){
var inst_27640 = (state_27713[(7)]);
var inst_27647 = inst_27640.cljs$lang$protocol_mask$partition0$;
var inst_27648 = (inst_27647 & (64));
var inst_27649 = inst_27640.cljs$core$ISeq$;
var inst_27650 = (cljs.core.PROTOCOL_SENTINEL === inst_27649);
var inst_27651 = ((inst_27648) || (inst_27650));
var state_27713__$1 = state_27713;
if(cljs.core.truth_(inst_27651)){
var statearr_27733_27788 = state_27713__$1;
(statearr_27733_27788[(1)] = (16));

} else {
var statearr_27734_27789 = state_27713__$1;
(statearr_27734_27789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (22))){
var inst_27673 = (state_27713[(11)]);
var inst_27672 = (state_27713[(14)]);
var inst_27671 = (state_27713[(2)]);
var inst_27672__$1 = cljs.core.nth.call(null,inst_27671,(0),null);
var inst_27673__$1 = cljs.core.nth.call(null,inst_27671,(1),null);
var inst_27674 = (inst_27672__$1 == null);
var inst_27675 = cljs.core._EQ_.call(null,inst_27673__$1,change);
var inst_27676 = ((inst_27674) || (inst_27675));
var state_27713__$1 = (function (){var statearr_27735 = state_27713;
(statearr_27735[(11)] = inst_27673__$1);

(statearr_27735[(14)] = inst_27672__$1);

return statearr_27735;
})();
if(cljs.core.truth_(inst_27676)){
var statearr_27736_27790 = state_27713__$1;
(statearr_27736_27790[(1)] = (23));

} else {
var statearr_27737_27791 = state_27713__$1;
(statearr_27737_27791[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (36))){
var inst_27663 = (state_27713[(12)]);
var inst_27640 = inst_27663;
var state_27713__$1 = (function (){var statearr_27738 = state_27713;
(statearr_27738[(7)] = inst_27640);

return statearr_27738;
})();
var statearr_27739_27792 = state_27713__$1;
(statearr_27739_27792[(2)] = null);

(statearr_27739_27792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (29))){
var inst_27687 = (state_27713[(10)]);
var state_27713__$1 = state_27713;
var statearr_27740_27793 = state_27713__$1;
(statearr_27740_27793[(2)] = inst_27687);

(statearr_27740_27793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (6))){
var state_27713__$1 = state_27713;
var statearr_27741_27794 = state_27713__$1;
(statearr_27741_27794[(2)] = false);

(statearr_27741_27794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (28))){
var inst_27683 = (state_27713[(2)]);
var inst_27684 = calc_state.call(null);
var inst_27640 = inst_27684;
var state_27713__$1 = (function (){var statearr_27742 = state_27713;
(statearr_27742[(15)] = inst_27683);

(statearr_27742[(7)] = inst_27640);

return statearr_27742;
})();
var statearr_27743_27795 = state_27713__$1;
(statearr_27743_27795[(2)] = null);

(statearr_27743_27795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (25))){
var inst_27709 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27744_27796 = state_27713__$1;
(statearr_27744_27796[(2)] = inst_27709);

(statearr_27744_27796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (34))){
var inst_27707 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27745_27797 = state_27713__$1;
(statearr_27745_27797[(2)] = inst_27707);

(statearr_27745_27797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (17))){
var state_27713__$1 = state_27713;
var statearr_27746_27798 = state_27713__$1;
(statearr_27746_27798[(2)] = false);

(statearr_27746_27798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (3))){
var state_27713__$1 = state_27713;
var statearr_27747_27799 = state_27713__$1;
(statearr_27747_27799[(2)] = false);

(statearr_27747_27799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (12))){
var inst_27711 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27713__$1,inst_27711);
} else {
if((state_val_27714 === (2))){
var inst_27615 = (state_27713[(8)]);
var inst_27620 = inst_27615.cljs$lang$protocol_mask$partition0$;
var inst_27621 = (inst_27620 & (64));
var inst_27622 = inst_27615.cljs$core$ISeq$;
var inst_27623 = (cljs.core.PROTOCOL_SENTINEL === inst_27622);
var inst_27624 = ((inst_27621) || (inst_27623));
var state_27713__$1 = state_27713;
if(cljs.core.truth_(inst_27624)){
var statearr_27748_27800 = state_27713__$1;
(statearr_27748_27800[(1)] = (5));

} else {
var statearr_27749_27801 = state_27713__$1;
(statearr_27749_27801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (23))){
var inst_27672 = (state_27713[(14)]);
var inst_27678 = (inst_27672 == null);
var state_27713__$1 = state_27713;
if(cljs.core.truth_(inst_27678)){
var statearr_27750_27802 = state_27713__$1;
(statearr_27750_27802[(1)] = (26));

} else {
var statearr_27751_27803 = state_27713__$1;
(statearr_27751_27803[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (35))){
var inst_27698 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
if(cljs.core.truth_(inst_27698)){
var statearr_27752_27804 = state_27713__$1;
(statearr_27752_27804[(1)] = (36));

} else {
var statearr_27753_27805 = state_27713__$1;
(statearr_27753_27805[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (19))){
var inst_27640 = (state_27713[(7)]);
var inst_27660 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27640);
var state_27713__$1 = state_27713;
var statearr_27754_27806 = state_27713__$1;
(statearr_27754_27806[(2)] = inst_27660);

(statearr_27754_27806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (11))){
var inst_27640 = (state_27713[(7)]);
var inst_27644 = (inst_27640 == null);
var inst_27645 = cljs.core.not.call(null,inst_27644);
var state_27713__$1 = state_27713;
if(inst_27645){
var statearr_27755_27807 = state_27713__$1;
(statearr_27755_27807[(1)] = (13));

} else {
var statearr_27756_27808 = state_27713__$1;
(statearr_27756_27808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (9))){
var inst_27615 = (state_27713[(8)]);
var state_27713__$1 = state_27713;
var statearr_27757_27809 = state_27713__$1;
(statearr_27757_27809[(2)] = inst_27615);

(statearr_27757_27809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (5))){
var state_27713__$1 = state_27713;
var statearr_27758_27810 = state_27713__$1;
(statearr_27758_27810[(2)] = true);

(statearr_27758_27810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (14))){
var state_27713__$1 = state_27713;
var statearr_27759_27811 = state_27713__$1;
(statearr_27759_27811[(2)] = false);

(statearr_27759_27811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (26))){
var inst_27673 = (state_27713[(11)]);
var inst_27680 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27673);
var state_27713__$1 = state_27713;
var statearr_27760_27812 = state_27713__$1;
(statearr_27760_27812[(2)] = inst_27680);

(statearr_27760_27812[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (16))){
var state_27713__$1 = state_27713;
var statearr_27761_27813 = state_27713__$1;
(statearr_27761_27813[(2)] = true);

(statearr_27761_27813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (38))){
var inst_27703 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27762_27814 = state_27713__$1;
(statearr_27762_27814[(2)] = inst_27703);

(statearr_27762_27814[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (30))){
var inst_27664 = (state_27713[(9)]);
var inst_27665 = (state_27713[(13)]);
var inst_27673 = (state_27713[(11)]);
var inst_27690 = cljs.core.empty_QMARK_.call(null,inst_27664);
var inst_27691 = inst_27665.call(null,inst_27673);
var inst_27692 = cljs.core.not.call(null,inst_27691);
var inst_27693 = ((inst_27690) && (inst_27692));
var state_27713__$1 = state_27713;
var statearr_27763_27815 = state_27713__$1;
(statearr_27763_27815[(2)] = inst_27693);

(statearr_27763_27815[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (10))){
var inst_27615 = (state_27713[(8)]);
var inst_27636 = (state_27713[(2)]);
var inst_27637 = cljs.core.get.call(null,inst_27636,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27638 = cljs.core.get.call(null,inst_27636,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27639 = cljs.core.get.call(null,inst_27636,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27640 = inst_27615;
var state_27713__$1 = (function (){var statearr_27764 = state_27713;
(statearr_27764[(16)] = inst_27639);

(statearr_27764[(7)] = inst_27640);

(statearr_27764[(17)] = inst_27638);

(statearr_27764[(18)] = inst_27637);

return statearr_27764;
})();
var statearr_27765_27816 = state_27713__$1;
(statearr_27765_27816[(2)] = null);

(statearr_27765_27816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (18))){
var inst_27655 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27766_27817 = state_27713__$1;
(statearr_27766_27817[(2)] = inst_27655);

(statearr_27766_27817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (37))){
var state_27713__$1 = state_27713;
var statearr_27767_27818 = state_27713__$1;
(statearr_27767_27818[(2)] = null);

(statearr_27767_27818[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (8))){
var inst_27615 = (state_27713[(8)]);
var inst_27633 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27615);
var state_27713__$1 = state_27713;
var statearr_27768_27819 = state_27713__$1;
(statearr_27768_27819[(2)] = inst_27633);

(statearr_27768_27819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___27773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26640__auto__,c__26728__auto___27773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26641__auto__ = null;
var cljs$core$async$mix_$_state_machine__26641__auto____0 = (function (){
var statearr_27769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27769[(0)] = cljs$core$async$mix_$_state_machine__26641__auto__);

(statearr_27769[(1)] = (1));

return statearr_27769;
});
var cljs$core$async$mix_$_state_machine__26641__auto____1 = (function (state_27713){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_27713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e27770){if((e27770 instanceof Object)){
var ex__26644__auto__ = e27770;
var statearr_27771_27820 = state_27713;
(statearr_27771_27820[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27821 = state_27713;
state_27713 = G__27821;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26641__auto__ = function(state_27713){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26641__auto____1.call(this,state_27713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26641__auto____0;
cljs$core$async$mix_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26641__auto____1;
return cljs$core$async$mix_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___27773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26730__auto__ = (function (){var statearr_27772 = f__26729__auto__.call(null);
(statearr_27772[(6)] = c__26728__auto___27773);

return statearr_27772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___27773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27823 = arguments.length;
switch (G__27823) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27827 = arguments.length;
switch (G__27827) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__27825_SHARP_){
if(cljs.core.truth_(p1__27825_SHARP_.call(null,topic))){
return p1__27825_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27825_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27828 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27829){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27829 = meta27829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27830,meta27829__$1){
var self__ = this;
var _27830__$1 = this;
return (new cljs.core.async.t_cljs$core$async27828(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27829__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27830){
var self__ = this;
var _27830__$1 = this;
return self__.meta27829;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27828.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27828.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27828.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27828.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27828.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27829","meta27829",-1361045439,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27828";

cljs.core.async.t_cljs$core$async27828.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27828");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27828.
 */
cljs.core.async.__GT_t_cljs$core$async27828 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27828(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27829){
return (new cljs.core.async.t_cljs$core$async27828(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27829));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27828(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26728__auto___27948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___27948,mults,ensure_mult,p){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___27948,mults,ensure_mult,p){
return (function (state_27902){
var state_val_27903 = (state_27902[(1)]);
if((state_val_27903 === (7))){
var inst_27898 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27904_27949 = state_27902__$1;
(statearr_27904_27949[(2)] = inst_27898);

(statearr_27904_27949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (20))){
var state_27902__$1 = state_27902;
var statearr_27905_27950 = state_27902__$1;
(statearr_27905_27950[(2)] = null);

(statearr_27905_27950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (1))){
var state_27902__$1 = state_27902;
var statearr_27906_27951 = state_27902__$1;
(statearr_27906_27951[(2)] = null);

(statearr_27906_27951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (24))){
var inst_27881 = (state_27902[(7)]);
var inst_27890 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27881);
var state_27902__$1 = state_27902;
var statearr_27907_27952 = state_27902__$1;
(statearr_27907_27952[(2)] = inst_27890);

(statearr_27907_27952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (4))){
var inst_27833 = (state_27902[(8)]);
var inst_27833__$1 = (state_27902[(2)]);
var inst_27834 = (inst_27833__$1 == null);
var state_27902__$1 = (function (){var statearr_27908 = state_27902;
(statearr_27908[(8)] = inst_27833__$1);

return statearr_27908;
})();
if(cljs.core.truth_(inst_27834)){
var statearr_27909_27953 = state_27902__$1;
(statearr_27909_27953[(1)] = (5));

} else {
var statearr_27910_27954 = state_27902__$1;
(statearr_27910_27954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (15))){
var inst_27875 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27911_27955 = state_27902__$1;
(statearr_27911_27955[(2)] = inst_27875);

(statearr_27911_27955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (21))){
var inst_27895 = (state_27902[(2)]);
var state_27902__$1 = (function (){var statearr_27912 = state_27902;
(statearr_27912[(9)] = inst_27895);

return statearr_27912;
})();
var statearr_27913_27956 = state_27902__$1;
(statearr_27913_27956[(2)] = null);

(statearr_27913_27956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (13))){
var inst_27857 = (state_27902[(10)]);
var inst_27859 = cljs.core.chunked_seq_QMARK_.call(null,inst_27857);
var state_27902__$1 = state_27902;
if(inst_27859){
var statearr_27914_27957 = state_27902__$1;
(statearr_27914_27957[(1)] = (16));

} else {
var statearr_27915_27958 = state_27902__$1;
(statearr_27915_27958[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (22))){
var inst_27887 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
if(cljs.core.truth_(inst_27887)){
var statearr_27916_27959 = state_27902__$1;
(statearr_27916_27959[(1)] = (23));

} else {
var statearr_27917_27960 = state_27902__$1;
(statearr_27917_27960[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (6))){
var inst_27881 = (state_27902[(7)]);
var inst_27883 = (state_27902[(11)]);
var inst_27833 = (state_27902[(8)]);
var inst_27881__$1 = topic_fn.call(null,inst_27833);
var inst_27882 = cljs.core.deref.call(null,mults);
var inst_27883__$1 = cljs.core.get.call(null,inst_27882,inst_27881__$1);
var state_27902__$1 = (function (){var statearr_27918 = state_27902;
(statearr_27918[(7)] = inst_27881__$1);

(statearr_27918[(11)] = inst_27883__$1);

return statearr_27918;
})();
if(cljs.core.truth_(inst_27883__$1)){
var statearr_27919_27961 = state_27902__$1;
(statearr_27919_27961[(1)] = (19));

} else {
var statearr_27920_27962 = state_27902__$1;
(statearr_27920_27962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (25))){
var inst_27892 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27921_27963 = state_27902__$1;
(statearr_27921_27963[(2)] = inst_27892);

(statearr_27921_27963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (17))){
var inst_27857 = (state_27902[(10)]);
var inst_27866 = cljs.core.first.call(null,inst_27857);
var inst_27867 = cljs.core.async.muxch_STAR_.call(null,inst_27866);
var inst_27868 = cljs.core.async.close_BANG_.call(null,inst_27867);
var inst_27869 = cljs.core.next.call(null,inst_27857);
var inst_27843 = inst_27869;
var inst_27844 = null;
var inst_27845 = (0);
var inst_27846 = (0);
var state_27902__$1 = (function (){var statearr_27922 = state_27902;
(statearr_27922[(12)] = inst_27868);

(statearr_27922[(13)] = inst_27844);

(statearr_27922[(14)] = inst_27846);

(statearr_27922[(15)] = inst_27845);

(statearr_27922[(16)] = inst_27843);

return statearr_27922;
})();
var statearr_27923_27964 = state_27902__$1;
(statearr_27923_27964[(2)] = null);

(statearr_27923_27964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (3))){
var inst_27900 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27902__$1,inst_27900);
} else {
if((state_val_27903 === (12))){
var inst_27877 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27924_27965 = state_27902__$1;
(statearr_27924_27965[(2)] = inst_27877);

(statearr_27924_27965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (2))){
var state_27902__$1 = state_27902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27902__$1,(4),ch);
} else {
if((state_val_27903 === (23))){
var state_27902__$1 = state_27902;
var statearr_27925_27966 = state_27902__$1;
(statearr_27925_27966[(2)] = null);

(statearr_27925_27966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (19))){
var inst_27883 = (state_27902[(11)]);
var inst_27833 = (state_27902[(8)]);
var inst_27885 = cljs.core.async.muxch_STAR_.call(null,inst_27883);
var state_27902__$1 = state_27902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27902__$1,(22),inst_27885,inst_27833);
} else {
if((state_val_27903 === (11))){
var inst_27857 = (state_27902[(10)]);
var inst_27843 = (state_27902[(16)]);
var inst_27857__$1 = cljs.core.seq.call(null,inst_27843);
var state_27902__$1 = (function (){var statearr_27926 = state_27902;
(statearr_27926[(10)] = inst_27857__$1);

return statearr_27926;
})();
if(inst_27857__$1){
var statearr_27927_27967 = state_27902__$1;
(statearr_27927_27967[(1)] = (13));

} else {
var statearr_27928_27968 = state_27902__$1;
(statearr_27928_27968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (9))){
var inst_27879 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27929_27969 = state_27902__$1;
(statearr_27929_27969[(2)] = inst_27879);

(statearr_27929_27969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (5))){
var inst_27840 = cljs.core.deref.call(null,mults);
var inst_27841 = cljs.core.vals.call(null,inst_27840);
var inst_27842 = cljs.core.seq.call(null,inst_27841);
var inst_27843 = inst_27842;
var inst_27844 = null;
var inst_27845 = (0);
var inst_27846 = (0);
var state_27902__$1 = (function (){var statearr_27930 = state_27902;
(statearr_27930[(13)] = inst_27844);

(statearr_27930[(14)] = inst_27846);

(statearr_27930[(15)] = inst_27845);

(statearr_27930[(16)] = inst_27843);

return statearr_27930;
})();
var statearr_27931_27970 = state_27902__$1;
(statearr_27931_27970[(2)] = null);

(statearr_27931_27970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (14))){
var state_27902__$1 = state_27902;
var statearr_27935_27971 = state_27902__$1;
(statearr_27935_27971[(2)] = null);

(statearr_27935_27971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (16))){
var inst_27857 = (state_27902[(10)]);
var inst_27861 = cljs.core.chunk_first.call(null,inst_27857);
var inst_27862 = cljs.core.chunk_rest.call(null,inst_27857);
var inst_27863 = cljs.core.count.call(null,inst_27861);
var inst_27843 = inst_27862;
var inst_27844 = inst_27861;
var inst_27845 = inst_27863;
var inst_27846 = (0);
var state_27902__$1 = (function (){var statearr_27936 = state_27902;
(statearr_27936[(13)] = inst_27844);

(statearr_27936[(14)] = inst_27846);

(statearr_27936[(15)] = inst_27845);

(statearr_27936[(16)] = inst_27843);

return statearr_27936;
})();
var statearr_27937_27972 = state_27902__$1;
(statearr_27937_27972[(2)] = null);

(statearr_27937_27972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (10))){
var inst_27844 = (state_27902[(13)]);
var inst_27846 = (state_27902[(14)]);
var inst_27845 = (state_27902[(15)]);
var inst_27843 = (state_27902[(16)]);
var inst_27851 = cljs.core._nth.call(null,inst_27844,inst_27846);
var inst_27852 = cljs.core.async.muxch_STAR_.call(null,inst_27851);
var inst_27853 = cljs.core.async.close_BANG_.call(null,inst_27852);
var inst_27854 = (inst_27846 + (1));
var tmp27932 = inst_27844;
var tmp27933 = inst_27845;
var tmp27934 = inst_27843;
var inst_27843__$1 = tmp27934;
var inst_27844__$1 = tmp27932;
var inst_27845__$1 = tmp27933;
var inst_27846__$1 = inst_27854;
var state_27902__$1 = (function (){var statearr_27938 = state_27902;
(statearr_27938[(13)] = inst_27844__$1);

(statearr_27938[(14)] = inst_27846__$1);

(statearr_27938[(17)] = inst_27853);

(statearr_27938[(15)] = inst_27845__$1);

(statearr_27938[(16)] = inst_27843__$1);

return statearr_27938;
})();
var statearr_27939_27973 = state_27902__$1;
(statearr_27939_27973[(2)] = null);

(statearr_27939_27973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (18))){
var inst_27872 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27940_27974 = state_27902__$1;
(statearr_27940_27974[(2)] = inst_27872);

(statearr_27940_27974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (8))){
var inst_27846 = (state_27902[(14)]);
var inst_27845 = (state_27902[(15)]);
var inst_27848 = (inst_27846 < inst_27845);
var inst_27849 = inst_27848;
var state_27902__$1 = state_27902;
if(cljs.core.truth_(inst_27849)){
var statearr_27941_27975 = state_27902__$1;
(statearr_27941_27975[(1)] = (10));

} else {
var statearr_27942_27976 = state_27902__$1;
(statearr_27942_27976[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___27948,mults,ensure_mult,p))
;
return ((function (switch__26640__auto__,c__26728__auto___27948,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_27943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27943[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_27943[(1)] = (1));

return statearr_27943;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_27902){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_27902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e27944){if((e27944 instanceof Object)){
var ex__26644__auto__ = e27944;
var statearr_27945_27977 = state_27902;
(statearr_27945_27977[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27978 = state_27902;
state_27902 = G__27978;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_27902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_27902);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___27948,mults,ensure_mult,p))
})();
var state__26730__auto__ = (function (){var statearr_27946 = f__26729__auto__.call(null);
(statearr_27946[(6)] = c__26728__auto___27948);

return statearr_27946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___27948,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27980 = arguments.length;
switch (G__27980) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27983 = arguments.length;
switch (G__27983) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27986 = arguments.length;
switch (G__27986) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26728__auto___28053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___28053,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___28053,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28025){
var state_val_28026 = (state_28025[(1)]);
if((state_val_28026 === (7))){
var state_28025__$1 = state_28025;
var statearr_28027_28054 = state_28025__$1;
(statearr_28027_28054[(2)] = null);

(statearr_28027_28054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (1))){
var state_28025__$1 = state_28025;
var statearr_28028_28055 = state_28025__$1;
(statearr_28028_28055[(2)] = null);

(statearr_28028_28055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (4))){
var inst_27989 = (state_28025[(7)]);
var inst_27991 = (inst_27989 < cnt);
var state_28025__$1 = state_28025;
if(cljs.core.truth_(inst_27991)){
var statearr_28029_28056 = state_28025__$1;
(statearr_28029_28056[(1)] = (6));

} else {
var statearr_28030_28057 = state_28025__$1;
(statearr_28030_28057[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (15))){
var inst_28021 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28031_28058 = state_28025__$1;
(statearr_28031_28058[(2)] = inst_28021);

(statearr_28031_28058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (13))){
var inst_28014 = cljs.core.async.close_BANG_.call(null,out);
var state_28025__$1 = state_28025;
var statearr_28032_28059 = state_28025__$1;
(statearr_28032_28059[(2)] = inst_28014);

(statearr_28032_28059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (6))){
var state_28025__$1 = state_28025;
var statearr_28033_28060 = state_28025__$1;
(statearr_28033_28060[(2)] = null);

(statearr_28033_28060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (3))){
var inst_28023 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28025__$1,inst_28023);
} else {
if((state_val_28026 === (12))){
var inst_28011 = (state_28025[(8)]);
var inst_28011__$1 = (state_28025[(2)]);
var inst_28012 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28011__$1);
var state_28025__$1 = (function (){var statearr_28034 = state_28025;
(statearr_28034[(8)] = inst_28011__$1);

return statearr_28034;
})();
if(cljs.core.truth_(inst_28012)){
var statearr_28035_28061 = state_28025__$1;
(statearr_28035_28061[(1)] = (13));

} else {
var statearr_28036_28062 = state_28025__$1;
(statearr_28036_28062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (2))){
var inst_27988 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27989 = (0);
var state_28025__$1 = (function (){var statearr_28037 = state_28025;
(statearr_28037[(7)] = inst_27989);

(statearr_28037[(9)] = inst_27988);

return statearr_28037;
})();
var statearr_28038_28063 = state_28025__$1;
(statearr_28038_28063[(2)] = null);

(statearr_28038_28063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (11))){
var inst_27989 = (state_28025[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28025,(10),Object,null,(9));
var inst_27998 = chs__$1.call(null,inst_27989);
var inst_27999 = done.call(null,inst_27989);
var inst_28000 = cljs.core.async.take_BANG_.call(null,inst_27998,inst_27999);
var state_28025__$1 = state_28025;
var statearr_28039_28064 = state_28025__$1;
(statearr_28039_28064[(2)] = inst_28000);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28025__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (9))){
var inst_27989 = (state_28025[(7)]);
var inst_28002 = (state_28025[(2)]);
var inst_28003 = (inst_27989 + (1));
var inst_27989__$1 = inst_28003;
var state_28025__$1 = (function (){var statearr_28040 = state_28025;
(statearr_28040[(7)] = inst_27989__$1);

(statearr_28040[(10)] = inst_28002);

return statearr_28040;
})();
var statearr_28041_28065 = state_28025__$1;
(statearr_28041_28065[(2)] = null);

(statearr_28041_28065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (5))){
var inst_28009 = (state_28025[(2)]);
var state_28025__$1 = (function (){var statearr_28042 = state_28025;
(statearr_28042[(11)] = inst_28009);

return statearr_28042;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28025__$1,(12),dchan);
} else {
if((state_val_28026 === (14))){
var inst_28011 = (state_28025[(8)]);
var inst_28016 = cljs.core.apply.call(null,f,inst_28011);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28025__$1,(16),out,inst_28016);
} else {
if((state_val_28026 === (16))){
var inst_28018 = (state_28025[(2)]);
var state_28025__$1 = (function (){var statearr_28043 = state_28025;
(statearr_28043[(12)] = inst_28018);

return statearr_28043;
})();
var statearr_28044_28066 = state_28025__$1;
(statearr_28044_28066[(2)] = null);

(statearr_28044_28066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (10))){
var inst_27993 = (state_28025[(2)]);
var inst_27994 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28025__$1 = (function (){var statearr_28045 = state_28025;
(statearr_28045[(13)] = inst_27993);

return statearr_28045;
})();
var statearr_28046_28067 = state_28025__$1;
(statearr_28046_28067[(2)] = inst_27994);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28025__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (8))){
var inst_28007 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28047_28068 = state_28025__$1;
(statearr_28047_28068[(2)] = inst_28007);

(statearr_28047_28068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28053,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26640__auto__,c__26728__auto___28053,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_28048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28048[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_28048[(1)] = (1));

return statearr_28048;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_28025){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_28025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e28049){if((e28049 instanceof Object)){
var ex__26644__auto__ = e28049;
var statearr_28050_28069 = state_28025;
(statearr_28050_28069[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28070 = state_28025;
state_28025 = G__28070;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_28025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_28025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___28053,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26730__auto__ = (function (){var statearr_28051 = f__26729__auto__.call(null);
(statearr_28051[(6)] = c__26728__auto___28053);

return statearr_28051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___28053,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28073 = arguments.length;
switch (G__28073) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26728__auto___28127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___28127,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___28127,out){
return (function (state_28105){
var state_val_28106 = (state_28105[(1)]);
if((state_val_28106 === (7))){
var inst_28084 = (state_28105[(7)]);
var inst_28085 = (state_28105[(8)]);
var inst_28084__$1 = (state_28105[(2)]);
var inst_28085__$1 = cljs.core.nth.call(null,inst_28084__$1,(0),null);
var inst_28086 = cljs.core.nth.call(null,inst_28084__$1,(1),null);
var inst_28087 = (inst_28085__$1 == null);
var state_28105__$1 = (function (){var statearr_28107 = state_28105;
(statearr_28107[(7)] = inst_28084__$1);

(statearr_28107[(8)] = inst_28085__$1);

(statearr_28107[(9)] = inst_28086);

return statearr_28107;
})();
if(cljs.core.truth_(inst_28087)){
var statearr_28108_28128 = state_28105__$1;
(statearr_28108_28128[(1)] = (8));

} else {
var statearr_28109_28129 = state_28105__$1;
(statearr_28109_28129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (1))){
var inst_28074 = cljs.core.vec.call(null,chs);
var inst_28075 = inst_28074;
var state_28105__$1 = (function (){var statearr_28110 = state_28105;
(statearr_28110[(10)] = inst_28075);

return statearr_28110;
})();
var statearr_28111_28130 = state_28105__$1;
(statearr_28111_28130[(2)] = null);

(statearr_28111_28130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (4))){
var inst_28075 = (state_28105[(10)]);
var state_28105__$1 = state_28105;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28105__$1,(7),inst_28075);
} else {
if((state_val_28106 === (6))){
var inst_28101 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28112_28131 = state_28105__$1;
(statearr_28112_28131[(2)] = inst_28101);

(statearr_28112_28131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (3))){
var inst_28103 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28105__$1,inst_28103);
} else {
if((state_val_28106 === (2))){
var inst_28075 = (state_28105[(10)]);
var inst_28077 = cljs.core.count.call(null,inst_28075);
var inst_28078 = (inst_28077 > (0));
var state_28105__$1 = state_28105;
if(cljs.core.truth_(inst_28078)){
var statearr_28114_28132 = state_28105__$1;
(statearr_28114_28132[(1)] = (4));

} else {
var statearr_28115_28133 = state_28105__$1;
(statearr_28115_28133[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (11))){
var inst_28075 = (state_28105[(10)]);
var inst_28094 = (state_28105[(2)]);
var tmp28113 = inst_28075;
var inst_28075__$1 = tmp28113;
var state_28105__$1 = (function (){var statearr_28116 = state_28105;
(statearr_28116[(11)] = inst_28094);

(statearr_28116[(10)] = inst_28075__$1);

return statearr_28116;
})();
var statearr_28117_28134 = state_28105__$1;
(statearr_28117_28134[(2)] = null);

(statearr_28117_28134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (9))){
var inst_28085 = (state_28105[(8)]);
var state_28105__$1 = state_28105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28105__$1,(11),out,inst_28085);
} else {
if((state_val_28106 === (5))){
var inst_28099 = cljs.core.async.close_BANG_.call(null,out);
var state_28105__$1 = state_28105;
var statearr_28118_28135 = state_28105__$1;
(statearr_28118_28135[(2)] = inst_28099);

(statearr_28118_28135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (10))){
var inst_28097 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28119_28136 = state_28105__$1;
(statearr_28119_28136[(2)] = inst_28097);

(statearr_28119_28136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (8))){
var inst_28084 = (state_28105[(7)]);
var inst_28085 = (state_28105[(8)]);
var inst_28086 = (state_28105[(9)]);
var inst_28075 = (state_28105[(10)]);
var inst_28089 = (function (){var cs = inst_28075;
var vec__28080 = inst_28084;
var v = inst_28085;
var c = inst_28086;
return ((function (cs,vec__28080,v,c,inst_28084,inst_28085,inst_28086,inst_28075,state_val_28106,c__26728__auto___28127,out){
return (function (p1__28071_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28071_SHARP_);
});
;})(cs,vec__28080,v,c,inst_28084,inst_28085,inst_28086,inst_28075,state_val_28106,c__26728__auto___28127,out))
})();
var inst_28090 = cljs.core.filterv.call(null,inst_28089,inst_28075);
var inst_28075__$1 = inst_28090;
var state_28105__$1 = (function (){var statearr_28120 = state_28105;
(statearr_28120[(10)] = inst_28075__$1);

return statearr_28120;
})();
var statearr_28121_28137 = state_28105__$1;
(statearr_28121_28137[(2)] = null);

(statearr_28121_28137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28127,out))
;
return ((function (switch__26640__auto__,c__26728__auto___28127,out){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_28122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28122[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_28122[(1)] = (1));

return statearr_28122;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_28105){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_28105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e28123){if((e28123 instanceof Object)){
var ex__26644__auto__ = e28123;
var statearr_28124_28138 = state_28105;
(statearr_28124_28138[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28139 = state_28105;
state_28105 = G__28139;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_28105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_28105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___28127,out))
})();
var state__26730__auto__ = (function (){var statearr_28125 = f__26729__auto__.call(null);
(statearr_28125[(6)] = c__26728__auto___28127);

return statearr_28125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___28127,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28141 = arguments.length;
switch (G__28141) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26728__auto___28186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___28186,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___28186,out){
return (function (state_28165){
var state_val_28166 = (state_28165[(1)]);
if((state_val_28166 === (7))){
var inst_28147 = (state_28165[(7)]);
var inst_28147__$1 = (state_28165[(2)]);
var inst_28148 = (inst_28147__$1 == null);
var inst_28149 = cljs.core.not.call(null,inst_28148);
var state_28165__$1 = (function (){var statearr_28167 = state_28165;
(statearr_28167[(7)] = inst_28147__$1);

return statearr_28167;
})();
if(inst_28149){
var statearr_28168_28187 = state_28165__$1;
(statearr_28168_28187[(1)] = (8));

} else {
var statearr_28169_28188 = state_28165__$1;
(statearr_28169_28188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (1))){
var inst_28142 = (0);
var state_28165__$1 = (function (){var statearr_28170 = state_28165;
(statearr_28170[(8)] = inst_28142);

return statearr_28170;
})();
var statearr_28171_28189 = state_28165__$1;
(statearr_28171_28189[(2)] = null);

(statearr_28171_28189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (4))){
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28165__$1,(7),ch);
} else {
if((state_val_28166 === (6))){
var inst_28160 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28172_28190 = state_28165__$1;
(statearr_28172_28190[(2)] = inst_28160);

(statearr_28172_28190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (3))){
var inst_28162 = (state_28165[(2)]);
var inst_28163 = cljs.core.async.close_BANG_.call(null,out);
var state_28165__$1 = (function (){var statearr_28173 = state_28165;
(statearr_28173[(9)] = inst_28162);

return statearr_28173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28165__$1,inst_28163);
} else {
if((state_val_28166 === (2))){
var inst_28142 = (state_28165[(8)]);
var inst_28144 = (inst_28142 < n);
var state_28165__$1 = state_28165;
if(cljs.core.truth_(inst_28144)){
var statearr_28174_28191 = state_28165__$1;
(statearr_28174_28191[(1)] = (4));

} else {
var statearr_28175_28192 = state_28165__$1;
(statearr_28175_28192[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (11))){
var inst_28142 = (state_28165[(8)]);
var inst_28152 = (state_28165[(2)]);
var inst_28153 = (inst_28142 + (1));
var inst_28142__$1 = inst_28153;
var state_28165__$1 = (function (){var statearr_28176 = state_28165;
(statearr_28176[(10)] = inst_28152);

(statearr_28176[(8)] = inst_28142__$1);

return statearr_28176;
})();
var statearr_28177_28193 = state_28165__$1;
(statearr_28177_28193[(2)] = null);

(statearr_28177_28193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (9))){
var state_28165__$1 = state_28165;
var statearr_28178_28194 = state_28165__$1;
(statearr_28178_28194[(2)] = null);

(statearr_28178_28194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (5))){
var state_28165__$1 = state_28165;
var statearr_28179_28195 = state_28165__$1;
(statearr_28179_28195[(2)] = null);

(statearr_28179_28195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (10))){
var inst_28157 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28180_28196 = state_28165__$1;
(statearr_28180_28196[(2)] = inst_28157);

(statearr_28180_28196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (8))){
var inst_28147 = (state_28165[(7)]);
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28165__$1,(11),out,inst_28147);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28186,out))
;
return ((function (switch__26640__auto__,c__26728__auto___28186,out){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_28181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28181[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_28181[(1)] = (1));

return statearr_28181;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_28165){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_28165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e28182){if((e28182 instanceof Object)){
var ex__26644__auto__ = e28182;
var statearr_28183_28197 = state_28165;
(statearr_28183_28197[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28198 = state_28165;
state_28165 = G__28198;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_28165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_28165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___28186,out))
})();
var state__26730__auto__ = (function (){var statearr_28184 = f__26729__auto__.call(null);
(statearr_28184[(6)] = c__26728__auto___28186);

return statearr_28184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___28186,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28200 = (function (f,ch,meta28201){
this.f = f;
this.ch = ch;
this.meta28201 = meta28201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28202,meta28201__$1){
var self__ = this;
var _28202__$1 = this;
return (new cljs.core.async.t_cljs$core$async28200(self__.f,self__.ch,meta28201__$1));
});

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28202){
var self__ = this;
var _28202__$1 = this;
return self__.meta28201;
});

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28203 = (function (f,ch,meta28201,_,fn1,meta28204){
this.f = f;
this.ch = ch;
this.meta28201 = meta28201;
this._ = _;
this.fn1 = fn1;
this.meta28204 = meta28204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28205,meta28204__$1){
var self__ = this;
var _28205__$1 = this;
return (new cljs.core.async.t_cljs$core$async28203(self__.f,self__.ch,self__.meta28201,self__._,self__.fn1,meta28204__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28205){
var self__ = this;
var _28205__$1 = this;
return self__.meta28204;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28199_SHARP_){
return f1.call(null,(((p1__28199_SHARP_ == null))?null:self__.f.call(null,p1__28199_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28203.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28201","meta28201",-1115615459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28200","cljs.core.async/t_cljs$core$async28200",2108406396,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28204","meta28204",-721463512,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28203";

cljs.core.async.t_cljs$core$async28203.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28203");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28203.
 */
cljs.core.async.__GT_t_cljs$core$async28203 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28203(f__$1,ch__$1,meta28201__$1,___$2,fn1__$1,meta28204){
return (new cljs.core.async.t_cljs$core$async28203(f__$1,ch__$1,meta28201__$1,___$2,fn1__$1,meta28204));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28203(self__.f,self__.ch,self__.meta28201,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28201","meta28201",-1115615459,null)], null);
});

cljs.core.async.t_cljs$core$async28200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28200";

cljs.core.async.t_cljs$core$async28200.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28200");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28200.
 */
cljs.core.async.__GT_t_cljs$core$async28200 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28200(f__$1,ch__$1,meta28201){
return (new cljs.core.async.t_cljs$core$async28200(f__$1,ch__$1,meta28201));
});

}

return (new cljs.core.async.t_cljs$core$async28200(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28206 = (function (f,ch,meta28207){
this.f = f;
this.ch = ch;
this.meta28207 = meta28207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28208,meta28207__$1){
var self__ = this;
var _28208__$1 = this;
return (new cljs.core.async.t_cljs$core$async28206(self__.f,self__.ch,meta28207__$1));
});

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28208){
var self__ = this;
var _28208__$1 = this;
return self__.meta28207;
});

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28207","meta28207",-1825458930,null)], null);
});

cljs.core.async.t_cljs$core$async28206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28206";

cljs.core.async.t_cljs$core$async28206.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28206");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28206.
 */
cljs.core.async.__GT_t_cljs$core$async28206 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28206(f__$1,ch__$1,meta28207){
return (new cljs.core.async.t_cljs$core$async28206(f__$1,ch__$1,meta28207));
});

}

return (new cljs.core.async.t_cljs$core$async28206(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28209 = (function (p,ch,meta28210){
this.p = p;
this.ch = ch;
this.meta28210 = meta28210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28211,meta28210__$1){
var self__ = this;
var _28211__$1 = this;
return (new cljs.core.async.t_cljs$core$async28209(self__.p,self__.ch,meta28210__$1));
});

cljs.core.async.t_cljs$core$async28209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28211){
var self__ = this;
var _28211__$1 = this;
return self__.meta28210;
});

cljs.core.async.t_cljs$core$async28209.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28209.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28209.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28209.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28210","meta28210",-1055265092,null)], null);
});

cljs.core.async.t_cljs$core$async28209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28209";

cljs.core.async.t_cljs$core$async28209.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28209");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28209.
 */
cljs.core.async.__GT_t_cljs$core$async28209 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28209(p__$1,ch__$1,meta28210){
return (new cljs.core.async.t_cljs$core$async28209(p__$1,ch__$1,meta28210));
});

}

return (new cljs.core.async.t_cljs$core$async28209(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28213 = arguments.length;
switch (G__28213) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26728__auto___28253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___28253,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___28253,out){
return (function (state_28234){
var state_val_28235 = (state_28234[(1)]);
if((state_val_28235 === (7))){
var inst_28230 = (state_28234[(2)]);
var state_28234__$1 = state_28234;
var statearr_28236_28254 = state_28234__$1;
(statearr_28236_28254[(2)] = inst_28230);

(statearr_28236_28254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (1))){
var state_28234__$1 = state_28234;
var statearr_28237_28255 = state_28234__$1;
(statearr_28237_28255[(2)] = null);

(statearr_28237_28255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (4))){
var inst_28216 = (state_28234[(7)]);
var inst_28216__$1 = (state_28234[(2)]);
var inst_28217 = (inst_28216__$1 == null);
var state_28234__$1 = (function (){var statearr_28238 = state_28234;
(statearr_28238[(7)] = inst_28216__$1);

return statearr_28238;
})();
if(cljs.core.truth_(inst_28217)){
var statearr_28239_28256 = state_28234__$1;
(statearr_28239_28256[(1)] = (5));

} else {
var statearr_28240_28257 = state_28234__$1;
(statearr_28240_28257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (6))){
var inst_28216 = (state_28234[(7)]);
var inst_28221 = p.call(null,inst_28216);
var state_28234__$1 = state_28234;
if(cljs.core.truth_(inst_28221)){
var statearr_28241_28258 = state_28234__$1;
(statearr_28241_28258[(1)] = (8));

} else {
var statearr_28242_28259 = state_28234__$1;
(statearr_28242_28259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (3))){
var inst_28232 = (state_28234[(2)]);
var state_28234__$1 = state_28234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28234__$1,inst_28232);
} else {
if((state_val_28235 === (2))){
var state_28234__$1 = state_28234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28234__$1,(4),ch);
} else {
if((state_val_28235 === (11))){
var inst_28224 = (state_28234[(2)]);
var state_28234__$1 = state_28234;
var statearr_28243_28260 = state_28234__$1;
(statearr_28243_28260[(2)] = inst_28224);

(statearr_28243_28260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (9))){
var state_28234__$1 = state_28234;
var statearr_28244_28261 = state_28234__$1;
(statearr_28244_28261[(2)] = null);

(statearr_28244_28261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (5))){
var inst_28219 = cljs.core.async.close_BANG_.call(null,out);
var state_28234__$1 = state_28234;
var statearr_28245_28262 = state_28234__$1;
(statearr_28245_28262[(2)] = inst_28219);

(statearr_28245_28262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (10))){
var inst_28227 = (state_28234[(2)]);
var state_28234__$1 = (function (){var statearr_28246 = state_28234;
(statearr_28246[(8)] = inst_28227);

return statearr_28246;
})();
var statearr_28247_28263 = state_28234__$1;
(statearr_28247_28263[(2)] = null);

(statearr_28247_28263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (8))){
var inst_28216 = (state_28234[(7)]);
var state_28234__$1 = state_28234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28234__$1,(11),out,inst_28216);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28253,out))
;
return ((function (switch__26640__auto__,c__26728__auto___28253,out){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_28248 = [null,null,null,null,null,null,null,null,null];
(statearr_28248[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_28248[(1)] = (1));

return statearr_28248;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_28234){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_28234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e28249){if((e28249 instanceof Object)){
var ex__26644__auto__ = e28249;
var statearr_28250_28264 = state_28234;
(statearr_28250_28264[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28265 = state_28234;
state_28234 = G__28265;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_28234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_28234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___28253,out))
})();
var state__26730__auto__ = (function (){var statearr_28251 = f__26729__auto__.call(null);
(statearr_28251[(6)] = c__26728__auto___28253);

return statearr_28251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___28253,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28267 = arguments.length;
switch (G__28267) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__){
return (function (state_28330){
var state_val_28331 = (state_28330[(1)]);
if((state_val_28331 === (7))){
var inst_28326 = (state_28330[(2)]);
var state_28330__$1 = state_28330;
var statearr_28332_28370 = state_28330__$1;
(statearr_28332_28370[(2)] = inst_28326);

(statearr_28332_28370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (20))){
var inst_28296 = (state_28330[(7)]);
var inst_28307 = (state_28330[(2)]);
var inst_28308 = cljs.core.next.call(null,inst_28296);
var inst_28282 = inst_28308;
var inst_28283 = null;
var inst_28284 = (0);
var inst_28285 = (0);
var state_28330__$1 = (function (){var statearr_28333 = state_28330;
(statearr_28333[(8)] = inst_28285);

(statearr_28333[(9)] = inst_28284);

(statearr_28333[(10)] = inst_28283);

(statearr_28333[(11)] = inst_28282);

(statearr_28333[(12)] = inst_28307);

return statearr_28333;
})();
var statearr_28334_28371 = state_28330__$1;
(statearr_28334_28371[(2)] = null);

(statearr_28334_28371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (1))){
var state_28330__$1 = state_28330;
var statearr_28335_28372 = state_28330__$1;
(statearr_28335_28372[(2)] = null);

(statearr_28335_28372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (4))){
var inst_28271 = (state_28330[(13)]);
var inst_28271__$1 = (state_28330[(2)]);
var inst_28272 = (inst_28271__$1 == null);
var state_28330__$1 = (function (){var statearr_28336 = state_28330;
(statearr_28336[(13)] = inst_28271__$1);

return statearr_28336;
})();
if(cljs.core.truth_(inst_28272)){
var statearr_28337_28373 = state_28330__$1;
(statearr_28337_28373[(1)] = (5));

} else {
var statearr_28338_28374 = state_28330__$1;
(statearr_28338_28374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (15))){
var state_28330__$1 = state_28330;
var statearr_28342_28375 = state_28330__$1;
(statearr_28342_28375[(2)] = null);

(statearr_28342_28375[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (21))){
var state_28330__$1 = state_28330;
var statearr_28343_28376 = state_28330__$1;
(statearr_28343_28376[(2)] = null);

(statearr_28343_28376[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (13))){
var inst_28285 = (state_28330[(8)]);
var inst_28284 = (state_28330[(9)]);
var inst_28283 = (state_28330[(10)]);
var inst_28282 = (state_28330[(11)]);
var inst_28292 = (state_28330[(2)]);
var inst_28293 = (inst_28285 + (1));
var tmp28339 = inst_28284;
var tmp28340 = inst_28283;
var tmp28341 = inst_28282;
var inst_28282__$1 = tmp28341;
var inst_28283__$1 = tmp28340;
var inst_28284__$1 = tmp28339;
var inst_28285__$1 = inst_28293;
var state_28330__$1 = (function (){var statearr_28344 = state_28330;
(statearr_28344[(8)] = inst_28285__$1);

(statearr_28344[(14)] = inst_28292);

(statearr_28344[(9)] = inst_28284__$1);

(statearr_28344[(10)] = inst_28283__$1);

(statearr_28344[(11)] = inst_28282__$1);

return statearr_28344;
})();
var statearr_28345_28377 = state_28330__$1;
(statearr_28345_28377[(2)] = null);

(statearr_28345_28377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (22))){
var state_28330__$1 = state_28330;
var statearr_28346_28378 = state_28330__$1;
(statearr_28346_28378[(2)] = null);

(statearr_28346_28378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (6))){
var inst_28271 = (state_28330[(13)]);
var inst_28280 = f.call(null,inst_28271);
var inst_28281 = cljs.core.seq.call(null,inst_28280);
var inst_28282 = inst_28281;
var inst_28283 = null;
var inst_28284 = (0);
var inst_28285 = (0);
var state_28330__$1 = (function (){var statearr_28347 = state_28330;
(statearr_28347[(8)] = inst_28285);

(statearr_28347[(9)] = inst_28284);

(statearr_28347[(10)] = inst_28283);

(statearr_28347[(11)] = inst_28282);

return statearr_28347;
})();
var statearr_28348_28379 = state_28330__$1;
(statearr_28348_28379[(2)] = null);

(statearr_28348_28379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (17))){
var inst_28296 = (state_28330[(7)]);
var inst_28300 = cljs.core.chunk_first.call(null,inst_28296);
var inst_28301 = cljs.core.chunk_rest.call(null,inst_28296);
var inst_28302 = cljs.core.count.call(null,inst_28300);
var inst_28282 = inst_28301;
var inst_28283 = inst_28300;
var inst_28284 = inst_28302;
var inst_28285 = (0);
var state_28330__$1 = (function (){var statearr_28349 = state_28330;
(statearr_28349[(8)] = inst_28285);

(statearr_28349[(9)] = inst_28284);

(statearr_28349[(10)] = inst_28283);

(statearr_28349[(11)] = inst_28282);

return statearr_28349;
})();
var statearr_28350_28380 = state_28330__$1;
(statearr_28350_28380[(2)] = null);

(statearr_28350_28380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (3))){
var inst_28328 = (state_28330[(2)]);
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28330__$1,inst_28328);
} else {
if((state_val_28331 === (12))){
var inst_28316 = (state_28330[(2)]);
var state_28330__$1 = state_28330;
var statearr_28351_28381 = state_28330__$1;
(statearr_28351_28381[(2)] = inst_28316);

(statearr_28351_28381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (2))){
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28330__$1,(4),in$);
} else {
if((state_val_28331 === (23))){
var inst_28324 = (state_28330[(2)]);
var state_28330__$1 = state_28330;
var statearr_28352_28382 = state_28330__$1;
(statearr_28352_28382[(2)] = inst_28324);

(statearr_28352_28382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (19))){
var inst_28311 = (state_28330[(2)]);
var state_28330__$1 = state_28330;
var statearr_28353_28383 = state_28330__$1;
(statearr_28353_28383[(2)] = inst_28311);

(statearr_28353_28383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (11))){
var inst_28296 = (state_28330[(7)]);
var inst_28282 = (state_28330[(11)]);
var inst_28296__$1 = cljs.core.seq.call(null,inst_28282);
var state_28330__$1 = (function (){var statearr_28354 = state_28330;
(statearr_28354[(7)] = inst_28296__$1);

return statearr_28354;
})();
if(inst_28296__$1){
var statearr_28355_28384 = state_28330__$1;
(statearr_28355_28384[(1)] = (14));

} else {
var statearr_28356_28385 = state_28330__$1;
(statearr_28356_28385[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (9))){
var inst_28318 = (state_28330[(2)]);
var inst_28319 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28330__$1 = (function (){var statearr_28357 = state_28330;
(statearr_28357[(15)] = inst_28318);

return statearr_28357;
})();
if(cljs.core.truth_(inst_28319)){
var statearr_28358_28386 = state_28330__$1;
(statearr_28358_28386[(1)] = (21));

} else {
var statearr_28359_28387 = state_28330__$1;
(statearr_28359_28387[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (5))){
var inst_28274 = cljs.core.async.close_BANG_.call(null,out);
var state_28330__$1 = state_28330;
var statearr_28360_28388 = state_28330__$1;
(statearr_28360_28388[(2)] = inst_28274);

(statearr_28360_28388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (14))){
var inst_28296 = (state_28330[(7)]);
var inst_28298 = cljs.core.chunked_seq_QMARK_.call(null,inst_28296);
var state_28330__$1 = state_28330;
if(inst_28298){
var statearr_28361_28389 = state_28330__$1;
(statearr_28361_28389[(1)] = (17));

} else {
var statearr_28362_28390 = state_28330__$1;
(statearr_28362_28390[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (16))){
var inst_28314 = (state_28330[(2)]);
var state_28330__$1 = state_28330;
var statearr_28363_28391 = state_28330__$1;
(statearr_28363_28391[(2)] = inst_28314);

(statearr_28363_28391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (10))){
var inst_28285 = (state_28330[(8)]);
var inst_28283 = (state_28330[(10)]);
var inst_28290 = cljs.core._nth.call(null,inst_28283,inst_28285);
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28330__$1,(13),out,inst_28290);
} else {
if((state_val_28331 === (18))){
var inst_28296 = (state_28330[(7)]);
var inst_28305 = cljs.core.first.call(null,inst_28296);
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28330__$1,(20),out,inst_28305);
} else {
if((state_val_28331 === (8))){
var inst_28285 = (state_28330[(8)]);
var inst_28284 = (state_28330[(9)]);
var inst_28287 = (inst_28285 < inst_28284);
var inst_28288 = inst_28287;
var state_28330__$1 = state_28330;
if(cljs.core.truth_(inst_28288)){
var statearr_28364_28392 = state_28330__$1;
(statearr_28364_28392[(1)] = (10));

} else {
var statearr_28365_28393 = state_28330__$1;
(statearr_28365_28393[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto__))
;
return ((function (switch__26640__auto__,c__26728__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26641__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26641__auto____0 = (function (){
var statearr_28366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28366[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26641__auto__);

(statearr_28366[(1)] = (1));

return statearr_28366;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26641__auto____1 = (function (state_28330){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_28330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e28367){if((e28367 instanceof Object)){
var ex__26644__auto__ = e28367;
var statearr_28368_28394 = state_28330;
(statearr_28368_28394[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28395 = state_28330;
state_28330 = G__28395;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26641__auto__ = function(state_28330){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26641__auto____1.call(this,state_28330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26641__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26641__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__))
})();
var state__26730__auto__ = (function (){var statearr_28369 = f__26729__auto__.call(null);
(statearr_28369[(6)] = c__26728__auto__);

return statearr_28369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__))
);

return c__26728__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28397 = arguments.length;
switch (G__28397) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28400 = arguments.length;
switch (G__28400) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28403 = arguments.length;
switch (G__28403) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26728__auto___28450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___28450,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___28450,out){
return (function (state_28427){
var state_val_28428 = (state_28427[(1)]);
if((state_val_28428 === (7))){
var inst_28422 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
var statearr_28429_28451 = state_28427__$1;
(statearr_28429_28451[(2)] = inst_28422);

(statearr_28429_28451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (1))){
var inst_28404 = null;
var state_28427__$1 = (function (){var statearr_28430 = state_28427;
(statearr_28430[(7)] = inst_28404);

return statearr_28430;
})();
var statearr_28431_28452 = state_28427__$1;
(statearr_28431_28452[(2)] = null);

(statearr_28431_28452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (4))){
var inst_28407 = (state_28427[(8)]);
var inst_28407__$1 = (state_28427[(2)]);
var inst_28408 = (inst_28407__$1 == null);
var inst_28409 = cljs.core.not.call(null,inst_28408);
var state_28427__$1 = (function (){var statearr_28432 = state_28427;
(statearr_28432[(8)] = inst_28407__$1);

return statearr_28432;
})();
if(inst_28409){
var statearr_28433_28453 = state_28427__$1;
(statearr_28433_28453[(1)] = (5));

} else {
var statearr_28434_28454 = state_28427__$1;
(statearr_28434_28454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (6))){
var state_28427__$1 = state_28427;
var statearr_28435_28455 = state_28427__$1;
(statearr_28435_28455[(2)] = null);

(statearr_28435_28455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (3))){
var inst_28424 = (state_28427[(2)]);
var inst_28425 = cljs.core.async.close_BANG_.call(null,out);
var state_28427__$1 = (function (){var statearr_28436 = state_28427;
(statearr_28436[(9)] = inst_28424);

return statearr_28436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28427__$1,inst_28425);
} else {
if((state_val_28428 === (2))){
var state_28427__$1 = state_28427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28427__$1,(4),ch);
} else {
if((state_val_28428 === (11))){
var inst_28407 = (state_28427[(8)]);
var inst_28416 = (state_28427[(2)]);
var inst_28404 = inst_28407;
var state_28427__$1 = (function (){var statearr_28437 = state_28427;
(statearr_28437[(7)] = inst_28404);

(statearr_28437[(10)] = inst_28416);

return statearr_28437;
})();
var statearr_28438_28456 = state_28427__$1;
(statearr_28438_28456[(2)] = null);

(statearr_28438_28456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (9))){
var inst_28407 = (state_28427[(8)]);
var state_28427__$1 = state_28427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28427__$1,(11),out,inst_28407);
} else {
if((state_val_28428 === (5))){
var inst_28404 = (state_28427[(7)]);
var inst_28407 = (state_28427[(8)]);
var inst_28411 = cljs.core._EQ_.call(null,inst_28407,inst_28404);
var state_28427__$1 = state_28427;
if(inst_28411){
var statearr_28440_28457 = state_28427__$1;
(statearr_28440_28457[(1)] = (8));

} else {
var statearr_28441_28458 = state_28427__$1;
(statearr_28441_28458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (10))){
var inst_28419 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
var statearr_28442_28459 = state_28427__$1;
(statearr_28442_28459[(2)] = inst_28419);

(statearr_28442_28459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (8))){
var inst_28404 = (state_28427[(7)]);
var tmp28439 = inst_28404;
var inst_28404__$1 = tmp28439;
var state_28427__$1 = (function (){var statearr_28443 = state_28427;
(statearr_28443[(7)] = inst_28404__$1);

return statearr_28443;
})();
var statearr_28444_28460 = state_28427__$1;
(statearr_28444_28460[(2)] = null);

(statearr_28444_28460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28450,out))
;
return ((function (switch__26640__auto__,c__26728__auto___28450,out){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_28445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28445[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_28445[(1)] = (1));

return statearr_28445;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_28427){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_28427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e28446){if((e28446 instanceof Object)){
var ex__26644__auto__ = e28446;
var statearr_28447_28461 = state_28427;
(statearr_28447_28461[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28462 = state_28427;
state_28427 = G__28462;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_28427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_28427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___28450,out))
})();
var state__26730__auto__ = (function (){var statearr_28448 = f__26729__auto__.call(null);
(statearr_28448[(6)] = c__26728__auto___28450);

return statearr_28448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___28450,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28464 = arguments.length;
switch (G__28464) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26728__auto___28530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___28530,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___28530,out){
return (function (state_28502){
var state_val_28503 = (state_28502[(1)]);
if((state_val_28503 === (7))){
var inst_28498 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
var statearr_28504_28531 = state_28502__$1;
(statearr_28504_28531[(2)] = inst_28498);

(statearr_28504_28531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (1))){
var inst_28465 = (new Array(n));
var inst_28466 = inst_28465;
var inst_28467 = (0);
var state_28502__$1 = (function (){var statearr_28505 = state_28502;
(statearr_28505[(7)] = inst_28467);

(statearr_28505[(8)] = inst_28466);

return statearr_28505;
})();
var statearr_28506_28532 = state_28502__$1;
(statearr_28506_28532[(2)] = null);

(statearr_28506_28532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (4))){
var inst_28470 = (state_28502[(9)]);
var inst_28470__$1 = (state_28502[(2)]);
var inst_28471 = (inst_28470__$1 == null);
var inst_28472 = cljs.core.not.call(null,inst_28471);
var state_28502__$1 = (function (){var statearr_28507 = state_28502;
(statearr_28507[(9)] = inst_28470__$1);

return statearr_28507;
})();
if(inst_28472){
var statearr_28508_28533 = state_28502__$1;
(statearr_28508_28533[(1)] = (5));

} else {
var statearr_28509_28534 = state_28502__$1;
(statearr_28509_28534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (15))){
var inst_28492 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
var statearr_28510_28535 = state_28502__$1;
(statearr_28510_28535[(2)] = inst_28492);

(statearr_28510_28535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (13))){
var state_28502__$1 = state_28502;
var statearr_28511_28536 = state_28502__$1;
(statearr_28511_28536[(2)] = null);

(statearr_28511_28536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (6))){
var inst_28467 = (state_28502[(7)]);
var inst_28488 = (inst_28467 > (0));
var state_28502__$1 = state_28502;
if(cljs.core.truth_(inst_28488)){
var statearr_28512_28537 = state_28502__$1;
(statearr_28512_28537[(1)] = (12));

} else {
var statearr_28513_28538 = state_28502__$1;
(statearr_28513_28538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (3))){
var inst_28500 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28502__$1,inst_28500);
} else {
if((state_val_28503 === (12))){
var inst_28466 = (state_28502[(8)]);
var inst_28490 = cljs.core.vec.call(null,inst_28466);
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28502__$1,(15),out,inst_28490);
} else {
if((state_val_28503 === (2))){
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28502__$1,(4),ch);
} else {
if((state_val_28503 === (11))){
var inst_28482 = (state_28502[(2)]);
var inst_28483 = (new Array(n));
var inst_28466 = inst_28483;
var inst_28467 = (0);
var state_28502__$1 = (function (){var statearr_28514 = state_28502;
(statearr_28514[(7)] = inst_28467);

(statearr_28514[(10)] = inst_28482);

(statearr_28514[(8)] = inst_28466);

return statearr_28514;
})();
var statearr_28515_28539 = state_28502__$1;
(statearr_28515_28539[(2)] = null);

(statearr_28515_28539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (9))){
var inst_28466 = (state_28502[(8)]);
var inst_28480 = cljs.core.vec.call(null,inst_28466);
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28502__$1,(11),out,inst_28480);
} else {
if((state_val_28503 === (5))){
var inst_28467 = (state_28502[(7)]);
var inst_28470 = (state_28502[(9)]);
var inst_28475 = (state_28502[(11)]);
var inst_28466 = (state_28502[(8)]);
var inst_28474 = (inst_28466[inst_28467] = inst_28470);
var inst_28475__$1 = (inst_28467 + (1));
var inst_28476 = (inst_28475__$1 < n);
var state_28502__$1 = (function (){var statearr_28516 = state_28502;
(statearr_28516[(12)] = inst_28474);

(statearr_28516[(11)] = inst_28475__$1);

return statearr_28516;
})();
if(cljs.core.truth_(inst_28476)){
var statearr_28517_28540 = state_28502__$1;
(statearr_28517_28540[(1)] = (8));

} else {
var statearr_28518_28541 = state_28502__$1;
(statearr_28518_28541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (14))){
var inst_28495 = (state_28502[(2)]);
var inst_28496 = cljs.core.async.close_BANG_.call(null,out);
var state_28502__$1 = (function (){var statearr_28520 = state_28502;
(statearr_28520[(13)] = inst_28495);

return statearr_28520;
})();
var statearr_28521_28542 = state_28502__$1;
(statearr_28521_28542[(2)] = inst_28496);

(statearr_28521_28542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (10))){
var inst_28486 = (state_28502[(2)]);
var state_28502__$1 = state_28502;
var statearr_28522_28543 = state_28502__$1;
(statearr_28522_28543[(2)] = inst_28486);

(statearr_28522_28543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28503 === (8))){
var inst_28475 = (state_28502[(11)]);
var inst_28466 = (state_28502[(8)]);
var tmp28519 = inst_28466;
var inst_28466__$1 = tmp28519;
var inst_28467 = inst_28475;
var state_28502__$1 = (function (){var statearr_28523 = state_28502;
(statearr_28523[(7)] = inst_28467);

(statearr_28523[(8)] = inst_28466__$1);

return statearr_28523;
})();
var statearr_28524_28544 = state_28502__$1;
(statearr_28524_28544[(2)] = null);

(statearr_28524_28544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28530,out))
;
return ((function (switch__26640__auto__,c__26728__auto___28530,out){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_28525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28525[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_28525[(1)] = (1));

return statearr_28525;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_28502){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_28502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e28526){if((e28526 instanceof Object)){
var ex__26644__auto__ = e28526;
var statearr_28527_28545 = state_28502;
(statearr_28527_28545[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28546 = state_28502;
state_28502 = G__28546;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_28502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_28502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___28530,out))
})();
var state__26730__auto__ = (function (){var statearr_28528 = f__26729__auto__.call(null);
(statearr_28528[(6)] = c__26728__auto___28530);

return statearr_28528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___28530,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28548 = arguments.length;
switch (G__28548) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26728__auto___28618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___28618,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___28618,out){
return (function (state_28590){
var state_val_28591 = (state_28590[(1)]);
if((state_val_28591 === (7))){
var inst_28586 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
var statearr_28592_28619 = state_28590__$1;
(statearr_28592_28619[(2)] = inst_28586);

(statearr_28592_28619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (1))){
var inst_28549 = [];
var inst_28550 = inst_28549;
var inst_28551 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28590__$1 = (function (){var statearr_28593 = state_28590;
(statearr_28593[(7)] = inst_28550);

(statearr_28593[(8)] = inst_28551);

return statearr_28593;
})();
var statearr_28594_28620 = state_28590__$1;
(statearr_28594_28620[(2)] = null);

(statearr_28594_28620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (4))){
var inst_28554 = (state_28590[(9)]);
var inst_28554__$1 = (state_28590[(2)]);
var inst_28555 = (inst_28554__$1 == null);
var inst_28556 = cljs.core.not.call(null,inst_28555);
var state_28590__$1 = (function (){var statearr_28595 = state_28590;
(statearr_28595[(9)] = inst_28554__$1);

return statearr_28595;
})();
if(inst_28556){
var statearr_28596_28621 = state_28590__$1;
(statearr_28596_28621[(1)] = (5));

} else {
var statearr_28597_28622 = state_28590__$1;
(statearr_28597_28622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (15))){
var inst_28580 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
var statearr_28598_28623 = state_28590__$1;
(statearr_28598_28623[(2)] = inst_28580);

(statearr_28598_28623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (13))){
var state_28590__$1 = state_28590;
var statearr_28599_28624 = state_28590__$1;
(statearr_28599_28624[(2)] = null);

(statearr_28599_28624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (6))){
var inst_28550 = (state_28590[(7)]);
var inst_28575 = inst_28550.length;
var inst_28576 = (inst_28575 > (0));
var state_28590__$1 = state_28590;
if(cljs.core.truth_(inst_28576)){
var statearr_28600_28625 = state_28590__$1;
(statearr_28600_28625[(1)] = (12));

} else {
var statearr_28601_28626 = state_28590__$1;
(statearr_28601_28626[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (3))){
var inst_28588 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28590__$1,inst_28588);
} else {
if((state_val_28591 === (12))){
var inst_28550 = (state_28590[(7)]);
var inst_28578 = cljs.core.vec.call(null,inst_28550);
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28590__$1,(15),out,inst_28578);
} else {
if((state_val_28591 === (2))){
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28590__$1,(4),ch);
} else {
if((state_val_28591 === (11))){
var inst_28554 = (state_28590[(9)]);
var inst_28558 = (state_28590[(10)]);
var inst_28568 = (state_28590[(2)]);
var inst_28569 = [];
var inst_28570 = inst_28569.push(inst_28554);
var inst_28550 = inst_28569;
var inst_28551 = inst_28558;
var state_28590__$1 = (function (){var statearr_28602 = state_28590;
(statearr_28602[(11)] = inst_28570);

(statearr_28602[(12)] = inst_28568);

(statearr_28602[(7)] = inst_28550);

(statearr_28602[(8)] = inst_28551);

return statearr_28602;
})();
var statearr_28603_28627 = state_28590__$1;
(statearr_28603_28627[(2)] = null);

(statearr_28603_28627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (9))){
var inst_28550 = (state_28590[(7)]);
var inst_28566 = cljs.core.vec.call(null,inst_28550);
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28590__$1,(11),out,inst_28566);
} else {
if((state_val_28591 === (5))){
var inst_28554 = (state_28590[(9)]);
var inst_28551 = (state_28590[(8)]);
var inst_28558 = (state_28590[(10)]);
var inst_28558__$1 = f.call(null,inst_28554);
var inst_28559 = cljs.core._EQ_.call(null,inst_28558__$1,inst_28551);
var inst_28560 = cljs.core.keyword_identical_QMARK_.call(null,inst_28551,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28561 = ((inst_28559) || (inst_28560));
var state_28590__$1 = (function (){var statearr_28604 = state_28590;
(statearr_28604[(10)] = inst_28558__$1);

return statearr_28604;
})();
if(cljs.core.truth_(inst_28561)){
var statearr_28605_28628 = state_28590__$1;
(statearr_28605_28628[(1)] = (8));

} else {
var statearr_28606_28629 = state_28590__$1;
(statearr_28606_28629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (14))){
var inst_28583 = (state_28590[(2)]);
var inst_28584 = cljs.core.async.close_BANG_.call(null,out);
var state_28590__$1 = (function (){var statearr_28608 = state_28590;
(statearr_28608[(13)] = inst_28583);

return statearr_28608;
})();
var statearr_28609_28630 = state_28590__$1;
(statearr_28609_28630[(2)] = inst_28584);

(statearr_28609_28630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (10))){
var inst_28573 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
var statearr_28610_28631 = state_28590__$1;
(statearr_28610_28631[(2)] = inst_28573);

(statearr_28610_28631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (8))){
var inst_28554 = (state_28590[(9)]);
var inst_28550 = (state_28590[(7)]);
var inst_28558 = (state_28590[(10)]);
var inst_28563 = inst_28550.push(inst_28554);
var tmp28607 = inst_28550;
var inst_28550__$1 = tmp28607;
var inst_28551 = inst_28558;
var state_28590__$1 = (function (){var statearr_28611 = state_28590;
(statearr_28611[(14)] = inst_28563);

(statearr_28611[(7)] = inst_28550__$1);

(statearr_28611[(8)] = inst_28551);

return statearr_28611;
})();
var statearr_28612_28632 = state_28590__$1;
(statearr_28612_28632[(2)] = null);

(statearr_28612_28632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28618,out))
;
return ((function (switch__26640__auto__,c__26728__auto___28618,out){
return (function() {
var cljs$core$async$state_machine__26641__auto__ = null;
var cljs$core$async$state_machine__26641__auto____0 = (function (){
var statearr_28613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28613[(0)] = cljs$core$async$state_machine__26641__auto__);

(statearr_28613[(1)] = (1));

return statearr_28613;
});
var cljs$core$async$state_machine__26641__auto____1 = (function (state_28590){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_28590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e28614){if((e28614 instanceof Object)){
var ex__26644__auto__ = e28614;
var statearr_28615_28633 = state_28590;
(statearr_28615_28633[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28634 = state_28590;
state_28590 = G__28634;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
cljs$core$async$state_machine__26641__auto__ = function(state_28590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26641__auto____1.call(this,state_28590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26641__auto____0;
cljs$core$async$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26641__auto____1;
return cljs$core$async$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___28618,out))
})();
var state__26730__auto__ = (function (){var statearr_28616 = f__26729__auto__.call(null);
(statearr_28616[(6)] = c__26728__auto___28618);

return statearr_28616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___28618,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1554122634952
