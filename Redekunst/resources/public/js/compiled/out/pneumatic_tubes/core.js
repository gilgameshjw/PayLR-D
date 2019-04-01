// Compiled by ClojureScript 1.10.238 {}
goog.provide('pneumatic_tubes.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cognitect.transit');
pneumatic_tubes.core.instances = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
pneumatic_tubes.core.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
pneumatic_tubes.core.w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
pneumatic_tubes.core.log = (function pneumatic_tubes$core$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28799 = arguments.length;
var i__4500__auto___28800 = (0);
while(true){
if((i__4500__auto___28800 < len__4499__auto___28799)){
args__4502__auto__.push((arguments[i__4500__auto___28800]));

var G__28801 = (i__4500__auto___28800 + (1));
i__4500__auto___28800 = G__28801;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return pneumatic_tubes.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

pneumatic_tubes.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (msg){
return console.log(cljs.core.apply.call(null,cljs.core.str,msg));
});

pneumatic_tubes.core.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pneumatic_tubes.core.log.cljs$lang$applyTo = (function (seq28798){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28798));
});

pneumatic_tubes.core.error = (function pneumatic_tubes$core$error(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28803 = arguments.length;
var i__4500__auto___28804 = (0);
while(true){
if((i__4500__auto___28804 < len__4499__auto___28803)){
args__4502__auto__.push((arguments[i__4500__auto___28804]));

var G__28805 = (i__4500__auto___28804 + (1));
i__4500__auto___28804 = G__28805;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return pneumatic_tubes.core.error.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

pneumatic_tubes.core.error.cljs$core$IFn$_invoke$arity$variadic = (function (msg){
return console.error(cljs.core.apply.call(null,cljs.core.str,msg));
});

pneumatic_tubes.core.error.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pneumatic_tubes.core.error.cljs$lang$applyTo = (function (seq28802){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28802));
});

pneumatic_tubes.core.warn = (function pneumatic_tubes$core$warn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28807 = arguments.length;
var i__4500__auto___28808 = (0);
while(true){
if((i__4500__auto___28808 < len__4499__auto___28807)){
args__4502__auto__.push((arguments[i__4500__auto___28808]));

var G__28809 = (i__4500__auto___28808 + (1));
i__4500__auto___28808 = G__28809;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return pneumatic_tubes.core.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

pneumatic_tubes.core.warn.cljs$core$IFn$_invoke$arity$variadic = (function (msg){
return console.warn(cljs.core.apply.call(null,cljs.core.str,msg));
});

pneumatic_tubes.core.warn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pneumatic_tubes.core.warn.cljs$lang$applyTo = (function (seq28806){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28806));
});

pneumatic_tubes.core.increasing_random_timeout = (function pneumatic_tubes$core$increasing_random_timeout(min_timout){
return (function (retries){
return cljs.core.rand.call(null,(function (){var x__4006__auto__ = (retries * (1000));
var y__4007__auto__ = min_timout;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());
});
});
pneumatic_tubes.core.default_config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"web-socket-impl","web-socket-impl",-1033662938),WebSocket,new cljs.core.Keyword(null,"out-queue-size","out-queue-size",-1386334924),(10),new cljs.core.Keyword(null,"backoff-strategy","backoff-strategy",1494825095),pneumatic_tubes.core.increasing_random_timeout.call(null,(5000))], null);
pneumatic_tubes.core.noop = (function pneumatic_tubes$core$noop(){
return null;
});
/**
 * Creates the spec of a tube. Parameters:
 *  url: web socket connection url.
 *  on-receive: function to process received events, takes event as parameter
 *  on-connect: function will be called when connection is successfully established
 *  on-disconnect: function will be called when connection lost or tube is destroyed by user, acceps code as parameter
 *  on-connect-failed: function will be called when attempt to connect to server failed, accepts code as paremeter
 *  config: optional configuration for the tube, see default-config
 */
pneumatic_tubes.core.tube = (function pneumatic_tubes$core$tube(var_args){
var G__28811 = arguments.length;
switch (G__28811) {
case 2:
return pneumatic_tubes.core.tube.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pneumatic_tubes.core.tube.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return pneumatic_tubes.core.tube.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return pneumatic_tubes.core.tube.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pneumatic_tubes.core.tube.cljs$core$IFn$_invoke$arity$2 = (function (url,on_receive){
return pneumatic_tubes.core.tube.call(null,url,on_receive,pneumatic_tubes.core.noop,pneumatic_tubes.core.noop,pneumatic_tubes.core.noop,pneumatic_tubes.core.default_config);
});

pneumatic_tubes.core.tube.cljs$core$IFn$_invoke$arity$3 = (function (url,on_receive,config){
return pneumatic_tubes.core.tube.call(null,url,on_receive,pneumatic_tubes.core.noop,pneumatic_tubes.core.noop,pneumatic_tubes.core.noop,config);
});

pneumatic_tubes.core.tube.cljs$core$IFn$_invoke$arity$5 = (function (url,on_receive,on_connect,on_disconnect,on_connect_failed){
return pneumatic_tubes.core.tube.call(null,url,on_receive,on_connect,on_disconnect,on_connect_failed,pneumatic_tubes.core.default_config);
});

pneumatic_tubes.core.tube.cljs$core$IFn$_invoke$arity$6 = (function (url,on_receive,on_connect,on_disconnect,on_connect_failed,config){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),on_receive,new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),on_disconnect,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),on_connect,new cljs.core.Keyword(null,"on-connect-failed","on-connect-failed",-1909228375),on_connect_failed,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.merge.call(null,pneumatic_tubes.core.default_config,config)], null);
});

pneumatic_tubes.core.tube.cljs$lang$maxFixedArity = 6;

pneumatic_tubes.core.tube_id = (function pneumatic_tubes$core$tube_id(tube_spec){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(tube_spec);
});
pneumatic_tubes.core.get_tube_instance = (function pneumatic_tubes$core$get_tube_instance(var_args){
var G__28814 = arguments.length;
switch (G__28814) {
case 1:
return pneumatic_tubes.core.get_tube_instance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pneumatic_tubes.core.get_tube_instance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pneumatic_tubes.core.get_tube_instance.cljs$core$IFn$_invoke$arity$1 = (function (tube_spec){
return pneumatic_tubes.core.get_tube_instance.call(null,cljs.core.deref.call(null,pneumatic_tubes.core.instances),tube_spec);
});

pneumatic_tubes.core.get_tube_instance.cljs$core$IFn$_invoke$arity$2 = (function (all_instances,tube_spec){
return cljs.core.get.call(null,all_instances,pneumatic_tubes.core.tube_id.call(null,tube_spec));
});

pneumatic_tubes.core.get_tube_instance.cljs$lang$maxFixedArity = 2;

/**
 * Creates new instance if not exist or updates existing
 */
pneumatic_tubes.core.init_tube_instance_BANG_ = (function pneumatic_tubes$core$init_tube_instance_BANG_(tube_spec,socket,out_queue){
return cljs.core.swap_BANG_.call(null,pneumatic_tubes.core.instances,(function (p1__28816_SHARP_){
var inst = pneumatic_tubes.core.get_tube_instance.call(null,p1__28816_SHARP_,tube_spec);
return cljs.core.assoc.call(null,p1__28816_SHARP_,pneumatic_tubes.core.tube_id.call(null,tube_spec),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"out-queue","out-queue",412260295),out_queue,new cljs.core.Keyword(null,"retries","retries",1888092808),(cljs.core.truth_(inst)?(new cljs.core.Keyword(null,"retries","retries",1888092808).cljs$core$IFn$_invoke$arity$1(inst) + (1)):(0)),new cljs.core.Keyword(null,"connected","connected",-169833045),false,new cljs.core.Keyword(null,"destroyed","destroyed",-427566535),(cljs.core.truth_(inst)?new cljs.core.Keyword(null,"destroyed","destroyed",-427566535).cljs$core$IFn$_invoke$arity$1(inst):false)], null));
}));
});
pneumatic_tubes.core.rm_tube_instance_BANG_ = (function pneumatic_tubes$core$rm_tube_instance_BANG_(tube_spec){
return cljs.core.swap_BANG_.call(null,pneumatic_tubes.core.instances,cljs.core.dissoc,pneumatic_tubes.core.tube_id.call(null,tube_spec));
});
pneumatic_tubes.core.mark_tube_destroyed_BANG_ = (function pneumatic_tubes$core$mark_tube_destroyed_BANG_(tube_spec){
return cljs.core.swap_BANG_.call(null,pneumatic_tubes.core.instances,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pneumatic_tubes.core.tube_id.call(null,tube_spec),new cljs.core.Keyword(null,"destroyed","destroyed",-427566535)], null),true);
});
pneumatic_tubes.core.mark_tube_connected_BANG_ = (function pneumatic_tubes$core$mark_tube_connected_BANG_(tube_spec){
return cljs.core.swap_BANG_.call(null,pneumatic_tubes.core.instances,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pneumatic_tubes.core.tube_id.call(null,tube_spec),new cljs.core.Keyword(null,"connected","connected",-169833045)], null),true);
});
pneumatic_tubes.core.dispatch = (function pneumatic_tubes$core$dispatch(tube,event_v){

var ch = new cljs.core.Keyword(null,"out-queue","out-queue",412260295).cljs$core$IFn$_invoke$arity$1(pneumatic_tubes.core.get_tube_instance.call(null,tube));
if(cljs.core.truth_(ch)){
return cljs.core.async.put_BANG_.call(null,ch,event_v);
} else {
throw (new Error(["Tube for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(tube))," is not started!"].join('')));
}
});
pneumatic_tubes.core.start_send_loop_BANG_ = (function pneumatic_tubes$core$start_send_loop_BANG_(socket,out_queue){
var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__){
return (function (state_28833){
var state_val_28834 = (state_28833[(1)]);
if((state_val_28834 === (1))){
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28833__$1,(2),out_queue);
} else {
if((state_val_28834 === (2))){
var inst_28818 = (state_28833[(2)]);
var inst_28819 = inst_28818;
var state_28833__$1 = (function (){var statearr_28835 = state_28833;
(statearr_28835[(7)] = inst_28819);

return statearr_28835;
})();
var statearr_28836_28848 = state_28833__$1;
(statearr_28836_28848[(2)] = null);

(statearr_28836_28848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (3))){
var inst_28819 = (state_28833[(7)]);
var state_28833__$1 = state_28833;
if(cljs.core.truth_(inst_28819)){
var statearr_28837_28849 = state_28833__$1;
(statearr_28837_28849[(1)] = (5));

} else {
var statearr_28838_28850 = state_28833__$1;
(statearr_28838_28850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (4))){
var inst_28831 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28833__$1,inst_28831);
} else {
if((state_val_28834 === (5))){
var inst_28819 = (state_28833[(7)]);
var inst_28822 = cognitect.transit.write.call(null,pneumatic_tubes.core.w,inst_28819);
var inst_28823 = socket.send(inst_28822);
var state_28833__$1 = (function (){var statearr_28839 = state_28833;
(statearr_28839[(8)] = inst_28823);

return statearr_28839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28833__$1,(8),out_queue);
} else {
if((state_val_28834 === (6))){
var state_28833__$1 = state_28833;
var statearr_28840_28851 = state_28833__$1;
(statearr_28840_28851[(2)] = null);

(statearr_28840_28851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (7))){
var inst_28829 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28841_28852 = state_28833__$1;
(statearr_28841_28852[(2)] = inst_28829);

(statearr_28841_28852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (8))){
var inst_28825 = (state_28833[(2)]);
var inst_28819 = inst_28825;
var state_28833__$1 = (function (){var statearr_28842 = state_28833;
(statearr_28842[(7)] = inst_28819);

return statearr_28842;
})();
var statearr_28843_28853 = state_28833__$1;
(statearr_28843_28853[(2)] = null);

(statearr_28843_28853[(1)] = (3));


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
});})(c__26728__auto__))
;
return ((function (switch__26640__auto__,c__26728__auto__){
return (function() {
var pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto__ = null;
var pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto____0 = (function (){
var statearr_28844 = [null,null,null,null,null,null,null,null,null];
(statearr_28844[(0)] = pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto__);

(statearr_28844[(1)] = (1));

return statearr_28844;
});
var pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto____1 = (function (state_28833){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_28833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e28845){if((e28845 instanceof Object)){
var ex__26644__auto__ = e28845;
var statearr_28846_28854 = state_28833;
(statearr_28846_28854[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28855 = state_28833;
state_28833 = G__28855;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto__ = function(state_28833){
switch(arguments.length){
case 0:
return pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto____0.call(this);
case 1:
return pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto____1.call(this,state_28833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto____0;
pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto____1;
return pneumatic_tubes$core$start_send_loop_BANG__$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__))
})();
var state__26730__auto__ = (function (){var statearr_28847 = f__26729__auto__.call(null);
(statearr_28847[(6)] = c__26728__auto__);

return statearr_28847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__))
);

return c__26728__auto__;
});
/**
 * Creates a tube. On server side this will trigger :tube/on-create event
 */
pneumatic_tubes.core.create_BANG_ = (function pneumatic_tubes$core$create_BANG_(var_args){
var G__28857 = arguments.length;
switch (G__28857) {
case 1:
return pneumatic_tubes.core.create_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pneumatic_tubes.core.create_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pneumatic_tubes.core.create_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tube){
return pneumatic_tubes.core.create_BANG_.call(null,tube,null);
});

pneumatic_tubes.core.create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (tube,params){
var param_str = clojure.string.join.call(null,"&",(function (){var iter__4292__auto__ = (function pneumatic_tubes$core$iter__28860(s__28861){
return (new cljs.core.LazySeq(null,(function (){
var s__28861__$1 = s__28861;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28861__$1);
if(temp__4657__auto__){
var s__28861__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28861__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28861__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28863 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28862 = (0);
while(true){
if((i__28862 < size__4291__auto__)){
var vec__28864 = cljs.core._nth.call(null,c__4290__auto__,i__28862);
var k = cljs.core.nth.call(null,vec__28864,(0),null);
var v = cljs.core.nth.call(null,vec__28864,(1),null);
cljs.core.chunk_append.call(null,b__28863,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__28875 = (i__28862 + (1));
i__28862 = G__28875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28863),pneumatic_tubes$core$iter__28860.call(null,cljs.core.chunk_rest.call(null,s__28861__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28863),null);
}
} else {
var vec__28867 = cljs.core.first.call(null,s__28861__$2);
var k = cljs.core.nth.call(null,vec__28867,(0),null);
var v = cljs.core.nth.call(null,vec__28867,(1),null);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),pneumatic_tubes$core$iter__28860.call(null,cljs.core.rest.call(null,s__28861__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,params);
})());
var base_url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(tube);
var map__28858 = tube;
var map__28858__$1 = ((((!((map__28858 == null)))?(((((map__28858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28858):map__28858);
var on_receive = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243));
var on_disconnect = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814));
var on_connect = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056));
var on_connect_failed = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"on-connect-failed","on-connect-failed",-1909228375));
var config = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"config","config",994861415));
var map__28859 = config;
var map__28859__$1 = ((((!((map__28859 == null)))?(((((map__28859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28859):map__28859);
var ws_impl = cljs.core.get.call(null,map__28859__$1,new cljs.core.Keyword(null,"web-socket-impl","web-socket-impl",-1033662938));
var queue_size = cljs.core.get.call(null,map__28859__$1,new cljs.core.Keyword(null,"out-queue-size","out-queue-size",-1386334924));
var backoff = cljs.core.get.call(null,map__28859__$1,new cljs.core.Keyword(null,"backoff-strategy","backoff-strategy",1494825095));
var url = ((cljs.core.empty_QMARK_.call(null,param_str))?base_url:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_str)].join(''));
var out_queue = cljs.core.async.chan.call(null,queue_size);
var temp__4655__auto__ = (new ws_impl(url));
if(cljs.core.truth_(temp__4655__auto__)){
var socket = temp__4655__auto__;
socket.onopen = ((function (socket,temp__4655__auto__,param_str,base_url,map__28858,map__28858__$1,on_receive,on_disconnect,on_connect,on_connect_failed,config,map__28859,map__28859__$1,ws_impl,queue_size,backoff,url,out_queue){
return (function (){
pneumatic_tubes.core.log.call(null,"Created tube on ",url);

pneumatic_tubes.core.mark_tube_connected_BANG_.call(null,tube);

pneumatic_tubes.core.start_send_loop_BANG_.call(null,socket,out_queue);

return on_connect.call(null);
});})(socket,temp__4655__auto__,param_str,base_url,map__28858,map__28858__$1,on_receive,on_disconnect,on_connect,on_connect_failed,config,map__28859,map__28859__$1,ws_impl,queue_size,backoff,url,out_queue))
;

socket.onclose = ((function (socket,temp__4655__auto__,param_str,base_url,map__28858,map__28858__$1,on_receive,on_disconnect,on_connect,on_connect_failed,config,map__28859,map__28859__$1,ws_impl,queue_size,backoff,url,out_queue){
return (function (close_event){
var instance = pneumatic_tubes.core.get_tube_instance.call(null,tube);
var map__28872 = instance;
var map__28872__$1 = ((((!((map__28872 == null)))?(((((map__28872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28872):map__28872);
var out_queue__$1 = cljs.core.get.call(null,map__28872__$1,new cljs.core.Keyword(null,"out-queue","out-queue",412260295));
var retries = cljs.core.get.call(null,map__28872__$1,new cljs.core.Keyword(null,"retries","retries",1888092808));
var connected = cljs.core.get.call(null,map__28872__$1,new cljs.core.Keyword(null,"connected","connected",-169833045));
var destroyed = cljs.core.get.call(null,map__28872__$1,new cljs.core.Keyword(null,"destroyed","destroyed",-427566535));
cljs.core.async.close_BANG_.call(null,out_queue__$1);

if(cljs.core.truth_(connected)){
on_disconnect.call(null,close_event.code);
} else {
on_connect_failed.call(null,close_event.code);
}

if(cljs.core.truth_(destroyed)){
pneumatic_tubes.core.rm_tube_instance_BANG_.call(null,tube);

return pneumatic_tubes.core.log.call(null,"Destroyed tube on ",url);
} else {
return setTimeout(((function (instance,map__28872,map__28872__$1,out_queue__$1,retries,connected,destroyed,socket,temp__4655__auto__,param_str,base_url,map__28858,map__28858__$1,on_receive,on_disconnect,on_connect,on_connect_failed,config,map__28859,map__28859__$1,ws_impl,queue_size,backoff,url,out_queue){
return (function (){
pneumatic_tubes.core.log.call(null,"Reconnect ",retries," : ",url);

return pneumatic_tubes.core.create_BANG_.call(null,tube,params);
});})(instance,map__28872,map__28872__$1,out_queue__$1,retries,connected,destroyed,socket,temp__4655__auto__,param_str,base_url,map__28858,map__28858__$1,on_receive,on_disconnect,on_connect,on_connect_failed,config,map__28859,map__28859__$1,ws_impl,queue_size,backoff,url,out_queue))
,backoff.call(null,retries));
}
});})(socket,temp__4655__auto__,param_str,base_url,map__28858,map__28858__$1,on_receive,on_disconnect,on_connect,on_connect_failed,config,map__28859,map__28859__$1,ws_impl,queue_size,backoff,url,out_queue))
;

socket.onmessage = ((function (socket,temp__4655__auto__,param_str,base_url,map__28858,map__28858__$1,on_receive,on_disconnect,on_connect,on_connect_failed,config,map__28859,map__28859__$1,ws_impl,queue_size,backoff,url,out_queue){
return (function (msg){
var event_v = cognitect.transit.read.call(null,pneumatic_tubes.core.r,msg.data);
return on_receive.call(null,event_v);
});})(socket,temp__4655__auto__,param_str,base_url,map__28858,map__28858__$1,on_receive,on_disconnect,on_connect,on_connect_failed,config,map__28859,map__28859__$1,ws_impl,queue_size,backoff,url,out_queue))
;

return pneumatic_tubes.core.init_tube_instance_BANG_.call(null,tube,socket,out_queue);
} else {
return pneumatic_tubes.core.error.call(null,"WebSocket connection failed. url: ",url);
}
});

pneumatic_tubes.core.create_BANG_.cljs$lang$maxFixedArity = 2;

pneumatic_tubes.core.destroy_BANG_ = (function pneumatic_tubes$core$destroy_BANG_(tube){

var socket = new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(pneumatic_tubes.core.get_tube_instance.call(null,tube));
pneumatic_tubes.core.mark_tube_destroyed_BANG_.call(null,tube);

return socket.close();
});

//# sourceMappingURL=core.js.map?rel=1554122635694
