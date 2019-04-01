// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39072){if((e39072 instanceof Error)){
var e = e39072;
return "Error: Unable to stringify";
} else {
throw e39072;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39075 = arguments.length;
switch (G__39075) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39073_SHARP_){
if(typeof p1__39073_SHARP_ === 'string'){
return p1__39073_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39073_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39078 = arguments.length;
var i__4500__auto___39079 = (0);
while(true){
if((i__4500__auto___39079 < len__4499__auto___39078)){
args__4502__auto__.push((arguments[i__4500__auto___39079]));

var G__39080 = (i__4500__auto___39079 + (1));
i__4500__auto___39079 = G__39080;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39077){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39077));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39082 = arguments.length;
var i__4500__auto___39083 = (0);
while(true){
if((i__4500__auto___39083 < len__4499__auto___39082)){
args__4502__auto__.push((arguments[i__4500__auto___39083]));

var G__39084 = (i__4500__auto___39083 + (1));
i__4500__auto___39083 = G__39084;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39081){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39081));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39085){
var map__39086 = p__39085;
var map__39086__$1 = ((((!((map__39086 == null)))?(((((map__39086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39086):map__39086);
var message = cljs.core.get.call(null,map__39086__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39086__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26728__auto___39165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___39165,ch){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___39165,ch){
return (function (state_39137){
var state_val_39138 = (state_39137[(1)]);
if((state_val_39138 === (7))){
var inst_39133 = (state_39137[(2)]);
var state_39137__$1 = state_39137;
var statearr_39139_39166 = state_39137__$1;
(statearr_39139_39166[(2)] = inst_39133);

(statearr_39139_39166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (1))){
var state_39137__$1 = state_39137;
var statearr_39140_39167 = state_39137__$1;
(statearr_39140_39167[(2)] = null);

(statearr_39140_39167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (4))){
var inst_39090 = (state_39137[(7)]);
var inst_39090__$1 = (state_39137[(2)]);
var state_39137__$1 = (function (){var statearr_39141 = state_39137;
(statearr_39141[(7)] = inst_39090__$1);

return statearr_39141;
})();
if(cljs.core.truth_(inst_39090__$1)){
var statearr_39142_39168 = state_39137__$1;
(statearr_39142_39168[(1)] = (5));

} else {
var statearr_39143_39169 = state_39137__$1;
(statearr_39143_39169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (15))){
var inst_39097 = (state_39137[(8)]);
var inst_39112 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39097);
var inst_39113 = cljs.core.first.call(null,inst_39112);
var inst_39114 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39113);
var inst_39115 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39114)].join('');
var inst_39116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39115);
var state_39137__$1 = state_39137;
var statearr_39144_39170 = state_39137__$1;
(statearr_39144_39170[(2)] = inst_39116);

(statearr_39144_39170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (13))){
var inst_39121 = (state_39137[(2)]);
var state_39137__$1 = state_39137;
var statearr_39145_39171 = state_39137__$1;
(statearr_39145_39171[(2)] = inst_39121);

(statearr_39145_39171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (6))){
var state_39137__$1 = state_39137;
var statearr_39146_39172 = state_39137__$1;
(statearr_39146_39172[(2)] = null);

(statearr_39146_39172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (17))){
var inst_39119 = (state_39137[(2)]);
var state_39137__$1 = state_39137;
var statearr_39147_39173 = state_39137__$1;
(statearr_39147_39173[(2)] = inst_39119);

(statearr_39147_39173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (3))){
var inst_39135 = (state_39137[(2)]);
var state_39137__$1 = state_39137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39137__$1,inst_39135);
} else {
if((state_val_39138 === (12))){
var inst_39096 = (state_39137[(9)]);
var inst_39110 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39096,opts);
var state_39137__$1 = state_39137;
if(cljs.core.truth_(inst_39110)){
var statearr_39148_39174 = state_39137__$1;
(statearr_39148_39174[(1)] = (15));

} else {
var statearr_39149_39175 = state_39137__$1;
(statearr_39149_39175[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (2))){
var state_39137__$1 = state_39137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39137__$1,(4),ch);
} else {
if((state_val_39138 === (11))){
var inst_39097 = (state_39137[(8)]);
var inst_39102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39103 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39097);
var inst_39104 = cljs.core.async.timeout.call(null,(1000));
var inst_39105 = [inst_39103,inst_39104];
var inst_39106 = (new cljs.core.PersistentVector(null,2,(5),inst_39102,inst_39105,null));
var state_39137__$1 = state_39137;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39137__$1,(14),inst_39106);
} else {
if((state_val_39138 === (9))){
var inst_39097 = (state_39137[(8)]);
var inst_39123 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39124 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39097);
var inst_39125 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39124);
var inst_39126 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39125)].join('');
var inst_39127 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39126);
var state_39137__$1 = (function (){var statearr_39150 = state_39137;
(statearr_39150[(10)] = inst_39123);

return statearr_39150;
})();
var statearr_39151_39176 = state_39137__$1;
(statearr_39151_39176[(2)] = inst_39127);

(statearr_39151_39176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (5))){
var inst_39090 = (state_39137[(7)]);
var inst_39092 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39093 = (new cljs.core.PersistentArrayMap(null,2,inst_39092,null));
var inst_39094 = (new cljs.core.PersistentHashSet(null,inst_39093,null));
var inst_39095 = figwheel.client.focus_msgs.call(null,inst_39094,inst_39090);
var inst_39096 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39095);
var inst_39097 = cljs.core.first.call(null,inst_39095);
var inst_39098 = figwheel.client.autoload_QMARK_.call(null);
var state_39137__$1 = (function (){var statearr_39152 = state_39137;
(statearr_39152[(8)] = inst_39097);

(statearr_39152[(9)] = inst_39096);

return statearr_39152;
})();
if(cljs.core.truth_(inst_39098)){
var statearr_39153_39177 = state_39137__$1;
(statearr_39153_39177[(1)] = (8));

} else {
var statearr_39154_39178 = state_39137__$1;
(statearr_39154_39178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (14))){
var inst_39108 = (state_39137[(2)]);
var state_39137__$1 = state_39137;
var statearr_39155_39179 = state_39137__$1;
(statearr_39155_39179[(2)] = inst_39108);

(statearr_39155_39179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (16))){
var state_39137__$1 = state_39137;
var statearr_39156_39180 = state_39137__$1;
(statearr_39156_39180[(2)] = null);

(statearr_39156_39180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (10))){
var inst_39129 = (state_39137[(2)]);
var state_39137__$1 = (function (){var statearr_39157 = state_39137;
(statearr_39157[(11)] = inst_39129);

return statearr_39157;
})();
var statearr_39158_39181 = state_39137__$1;
(statearr_39158_39181[(2)] = null);

(statearr_39158_39181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39138 === (8))){
var inst_39096 = (state_39137[(9)]);
var inst_39100 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39096,opts);
var state_39137__$1 = state_39137;
if(cljs.core.truth_(inst_39100)){
var statearr_39159_39182 = state_39137__$1;
(statearr_39159_39182[(1)] = (11));

} else {
var statearr_39160_39183 = state_39137__$1;
(statearr_39160_39183[(1)] = (12));

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
});})(c__26728__auto___39165,ch))
;
return ((function (switch__26640__auto__,c__26728__auto___39165,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26641__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26641__auto____0 = (function (){
var statearr_39161 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39161[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26641__auto__);

(statearr_39161[(1)] = (1));

return statearr_39161;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26641__auto____1 = (function (state_39137){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_39137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e39162){if((e39162 instanceof Object)){
var ex__26644__auto__ = e39162;
var statearr_39163_39184 = state_39137;
(statearr_39163_39184[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39185 = state_39137;
state_39137 = G__39185;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26641__auto__ = function(state_39137){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26641__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26641__auto____1.call(this,state_39137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26641__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26641__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___39165,ch))
})();
var state__26730__auto__ = (function (){var statearr_39164 = f__26729__auto__.call(null);
(statearr_39164[(6)] = c__26728__auto___39165);

return statearr_39164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___39165,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39186_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39186_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39190 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39190){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39188 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39189 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39188,_STAR_print_fn_STAR_39189,sb,base_path_39190){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_39188,_STAR_print_fn_STAR_39189,sb,base_path_39190))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39189;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39188;
}}catch (e39187){if((e39187 instanceof Error)){
var e = e39187;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39190], null));
} else {
var e = e39187;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39190))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39191){
var map__39192 = p__39191;
var map__39192__$1 = ((((!((map__39192 == null)))?(((((map__39192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39192):map__39192);
var opts = map__39192__$1;
var build_id = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39192,map__39192__$1,opts,build_id){
return (function (p__39194){
var vec__39195 = p__39194;
var seq__39196 = cljs.core.seq.call(null,vec__39195);
var first__39197 = cljs.core.first.call(null,seq__39196);
var seq__39196__$1 = cljs.core.next.call(null,seq__39196);
var map__39198 = first__39197;
var map__39198__$1 = ((((!((map__39198 == null)))?(((((map__39198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39198):map__39198);
var msg = map__39198__$1;
var msg_name = cljs.core.get.call(null,map__39198__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39196__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39195,seq__39196,first__39197,seq__39196__$1,map__39198,map__39198__$1,msg,msg_name,_,map__39192,map__39192__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39195,seq__39196,first__39197,seq__39196__$1,map__39198,map__39198__$1,msg,msg_name,_,map__39192,map__39192__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39192,map__39192__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39200){
var vec__39201 = p__39200;
var seq__39202 = cljs.core.seq.call(null,vec__39201);
var first__39203 = cljs.core.first.call(null,seq__39202);
var seq__39202__$1 = cljs.core.next.call(null,seq__39202);
var map__39204 = first__39203;
var map__39204__$1 = ((((!((map__39204 == null)))?(((((map__39204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39204):map__39204);
var msg = map__39204__$1;
var msg_name = cljs.core.get.call(null,map__39204__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39202__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39206){
var map__39207 = p__39206;
var map__39207__$1 = ((((!((map__39207 == null)))?(((((map__39207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39207):map__39207);
var on_compile_warning = cljs.core.get.call(null,map__39207__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39207__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39207,map__39207__$1,on_compile_warning,on_compile_fail){
return (function (p__39209){
var vec__39210 = p__39209;
var seq__39211 = cljs.core.seq.call(null,vec__39210);
var first__39212 = cljs.core.first.call(null,seq__39211);
var seq__39211__$1 = cljs.core.next.call(null,seq__39211);
var map__39213 = first__39212;
var map__39213__$1 = ((((!((map__39213 == null)))?(((((map__39213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39213):map__39213);
var msg = map__39213__$1;
var msg_name = cljs.core.get.call(null,map__39213__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39211__$1;
var pred__39215 = cljs.core._EQ_;
var expr__39216 = msg_name;
if(cljs.core.truth_(pred__39215.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39216))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39215.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39216))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39207,map__39207__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__,msg_hist,msg_names,msg){
return (function (state_39305){
var state_val_39306 = (state_39305[(1)]);
if((state_val_39306 === (7))){
var inst_39225 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39225)){
var statearr_39307_39354 = state_39305__$1;
(statearr_39307_39354[(1)] = (8));

} else {
var statearr_39308_39355 = state_39305__$1;
(statearr_39308_39355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (20))){
var inst_39299 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39309_39356 = state_39305__$1;
(statearr_39309_39356[(2)] = inst_39299);

(statearr_39309_39356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (27))){
var inst_39295 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39310_39357 = state_39305__$1;
(statearr_39310_39357[(2)] = inst_39295);

(statearr_39310_39357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (1))){
var inst_39218 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39218)){
var statearr_39311_39358 = state_39305__$1;
(statearr_39311_39358[(1)] = (2));

} else {
var statearr_39312_39359 = state_39305__$1;
(statearr_39312_39359[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (24))){
var inst_39297 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39313_39360 = state_39305__$1;
(statearr_39313_39360[(2)] = inst_39297);

(statearr_39313_39360[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (4))){
var inst_39303 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39305__$1,inst_39303);
} else {
if((state_val_39306 === (15))){
var inst_39301 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39314_39361 = state_39305__$1;
(statearr_39314_39361[(2)] = inst_39301);

(statearr_39314_39361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (21))){
var inst_39254 = (state_39305[(2)]);
var inst_39255 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39256 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39255);
var state_39305__$1 = (function (){var statearr_39315 = state_39305;
(statearr_39315[(7)] = inst_39254);

return statearr_39315;
})();
var statearr_39316_39362 = state_39305__$1;
(statearr_39316_39362[(2)] = inst_39256);

(statearr_39316_39362[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (31))){
var inst_39284 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39284)){
var statearr_39317_39363 = state_39305__$1;
(statearr_39317_39363[(1)] = (34));

} else {
var statearr_39318_39364 = state_39305__$1;
(statearr_39318_39364[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (32))){
var inst_39293 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39319_39365 = state_39305__$1;
(statearr_39319_39365[(2)] = inst_39293);

(statearr_39319_39365[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (33))){
var inst_39280 = (state_39305[(2)]);
var inst_39281 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39282 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39281);
var state_39305__$1 = (function (){var statearr_39320 = state_39305;
(statearr_39320[(8)] = inst_39280);

return statearr_39320;
})();
var statearr_39321_39366 = state_39305__$1;
(statearr_39321_39366[(2)] = inst_39282);

(statearr_39321_39366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (13))){
var inst_39239 = figwheel.client.heads_up.clear.call(null);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39305__$1,(16),inst_39239);
} else {
if((state_val_39306 === (22))){
var inst_39260 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39261 = figwheel.client.heads_up.append_warning_message.call(null,inst_39260);
var state_39305__$1 = state_39305;
var statearr_39322_39367 = state_39305__$1;
(statearr_39322_39367[(2)] = inst_39261);

(statearr_39322_39367[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (36))){
var inst_39291 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39323_39368 = state_39305__$1;
(statearr_39323_39368[(2)] = inst_39291);

(statearr_39323_39368[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (29))){
var inst_39271 = (state_39305[(2)]);
var inst_39272 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39273 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39272);
var state_39305__$1 = (function (){var statearr_39324 = state_39305;
(statearr_39324[(9)] = inst_39271);

return statearr_39324;
})();
var statearr_39325_39369 = state_39305__$1;
(statearr_39325_39369[(2)] = inst_39273);

(statearr_39325_39369[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (6))){
var inst_39220 = (state_39305[(10)]);
var state_39305__$1 = state_39305;
var statearr_39326_39370 = state_39305__$1;
(statearr_39326_39370[(2)] = inst_39220);

(statearr_39326_39370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (28))){
var inst_39267 = (state_39305[(2)]);
var inst_39268 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39269 = figwheel.client.heads_up.display_warning.call(null,inst_39268);
var state_39305__$1 = (function (){var statearr_39327 = state_39305;
(statearr_39327[(11)] = inst_39267);

return statearr_39327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39305__$1,(29),inst_39269);
} else {
if((state_val_39306 === (25))){
var inst_39265 = figwheel.client.heads_up.clear.call(null);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39305__$1,(28),inst_39265);
} else {
if((state_val_39306 === (34))){
var inst_39286 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39305__$1,(37),inst_39286);
} else {
if((state_val_39306 === (17))){
var inst_39245 = (state_39305[(2)]);
var inst_39246 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39247 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39246);
var state_39305__$1 = (function (){var statearr_39328 = state_39305;
(statearr_39328[(12)] = inst_39245);

return statearr_39328;
})();
var statearr_39329_39371 = state_39305__$1;
(statearr_39329_39371[(2)] = inst_39247);

(statearr_39329_39371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (3))){
var inst_39237 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39237)){
var statearr_39330_39372 = state_39305__$1;
(statearr_39330_39372[(1)] = (13));

} else {
var statearr_39331_39373 = state_39305__$1;
(statearr_39331_39373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (12))){
var inst_39233 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39332_39374 = state_39305__$1;
(statearr_39332_39374[(2)] = inst_39233);

(statearr_39332_39374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (2))){
var inst_39220 = (state_39305[(10)]);
var inst_39220__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39305__$1 = (function (){var statearr_39333 = state_39305;
(statearr_39333[(10)] = inst_39220__$1);

return statearr_39333;
})();
if(cljs.core.truth_(inst_39220__$1)){
var statearr_39334_39375 = state_39305__$1;
(statearr_39334_39375[(1)] = (5));

} else {
var statearr_39335_39376 = state_39305__$1;
(statearr_39335_39376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (23))){
var inst_39263 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39263)){
var statearr_39336_39377 = state_39305__$1;
(statearr_39336_39377[(1)] = (25));

} else {
var statearr_39337_39378 = state_39305__$1;
(statearr_39337_39378[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (35))){
var state_39305__$1 = state_39305;
var statearr_39338_39379 = state_39305__$1;
(statearr_39338_39379[(2)] = null);

(statearr_39338_39379[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (19))){
var inst_39258 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39258)){
var statearr_39339_39380 = state_39305__$1;
(statearr_39339_39380[(1)] = (22));

} else {
var statearr_39340_39381 = state_39305__$1;
(statearr_39340_39381[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (11))){
var inst_39229 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39341_39382 = state_39305__$1;
(statearr_39341_39382[(2)] = inst_39229);

(statearr_39341_39382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (9))){
var inst_39231 = figwheel.client.heads_up.clear.call(null);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39305__$1,(12),inst_39231);
} else {
if((state_val_39306 === (5))){
var inst_39222 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39305__$1 = state_39305;
var statearr_39342_39383 = state_39305__$1;
(statearr_39342_39383[(2)] = inst_39222);

(statearr_39342_39383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (14))){
var inst_39249 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39249)){
var statearr_39343_39384 = state_39305__$1;
(statearr_39343_39384[(1)] = (18));

} else {
var statearr_39344_39385 = state_39305__$1;
(statearr_39344_39385[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (26))){
var inst_39275 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39275)){
var statearr_39345_39386 = state_39305__$1;
(statearr_39345_39386[(1)] = (30));

} else {
var statearr_39346_39387 = state_39305__$1;
(statearr_39346_39387[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (16))){
var inst_39241 = (state_39305[(2)]);
var inst_39242 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39243 = figwheel.client.heads_up.display_exception.call(null,inst_39242);
var state_39305__$1 = (function (){var statearr_39347 = state_39305;
(statearr_39347[(13)] = inst_39241);

return statearr_39347;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39305__$1,(17),inst_39243);
} else {
if((state_val_39306 === (30))){
var inst_39277 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39278 = figwheel.client.heads_up.display_warning.call(null,inst_39277);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39305__$1,(33),inst_39278);
} else {
if((state_val_39306 === (10))){
var inst_39235 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39348_39388 = state_39305__$1;
(statearr_39348_39388[(2)] = inst_39235);

(statearr_39348_39388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (18))){
var inst_39251 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39252 = figwheel.client.heads_up.display_exception.call(null,inst_39251);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39305__$1,(21),inst_39252);
} else {
if((state_val_39306 === (37))){
var inst_39288 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39349_39389 = state_39305__$1;
(statearr_39349_39389[(2)] = inst_39288);

(statearr_39349_39389[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (8))){
var inst_39227 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39305__$1,(11),inst_39227);
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
});})(c__26728__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26640__auto__,c__26728__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto____0 = (function (){
var statearr_39350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39350[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto__);

(statearr_39350[(1)] = (1));

return statearr_39350;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto____1 = (function (state_39305){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_39305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e39351){if((e39351 instanceof Object)){
var ex__26644__auto__ = e39351;
var statearr_39352_39390 = state_39305;
(statearr_39352_39390[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39391 = state_39305;
state_39305 = G__39391;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto__ = function(state_39305){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto____1.call(this,state_39305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__,msg_hist,msg_names,msg))
})();
var state__26730__auto__ = (function (){var statearr_39353 = f__26729__auto__.call(null);
(statearr_39353[(6)] = c__26728__auto__);

return statearr_39353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__,msg_hist,msg_names,msg))
);

return c__26728__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26728__auto___39420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___39420,ch){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___39420,ch){
return (function (state_39406){
var state_val_39407 = (state_39406[(1)]);
if((state_val_39407 === (1))){
var state_39406__$1 = state_39406;
var statearr_39408_39421 = state_39406__$1;
(statearr_39408_39421[(2)] = null);

(statearr_39408_39421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (2))){
var state_39406__$1 = state_39406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39406__$1,(4),ch);
} else {
if((state_val_39407 === (3))){
var inst_39404 = (state_39406[(2)]);
var state_39406__$1 = state_39406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39406__$1,inst_39404);
} else {
if((state_val_39407 === (4))){
var inst_39394 = (state_39406[(7)]);
var inst_39394__$1 = (state_39406[(2)]);
var state_39406__$1 = (function (){var statearr_39409 = state_39406;
(statearr_39409[(7)] = inst_39394__$1);

return statearr_39409;
})();
if(cljs.core.truth_(inst_39394__$1)){
var statearr_39410_39422 = state_39406__$1;
(statearr_39410_39422[(1)] = (5));

} else {
var statearr_39411_39423 = state_39406__$1;
(statearr_39411_39423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (5))){
var inst_39394 = (state_39406[(7)]);
var inst_39396 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39394);
var state_39406__$1 = state_39406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39406__$1,(8),inst_39396);
} else {
if((state_val_39407 === (6))){
var state_39406__$1 = state_39406;
var statearr_39412_39424 = state_39406__$1;
(statearr_39412_39424[(2)] = null);

(statearr_39412_39424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (7))){
var inst_39402 = (state_39406[(2)]);
var state_39406__$1 = state_39406;
var statearr_39413_39425 = state_39406__$1;
(statearr_39413_39425[(2)] = inst_39402);

(statearr_39413_39425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (8))){
var inst_39398 = (state_39406[(2)]);
var state_39406__$1 = (function (){var statearr_39414 = state_39406;
(statearr_39414[(8)] = inst_39398);

return statearr_39414;
})();
var statearr_39415_39426 = state_39406__$1;
(statearr_39415_39426[(2)] = null);

(statearr_39415_39426[(1)] = (2));


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
});})(c__26728__auto___39420,ch))
;
return ((function (switch__26640__auto__,c__26728__auto___39420,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26641__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26641__auto____0 = (function (){
var statearr_39416 = [null,null,null,null,null,null,null,null,null];
(statearr_39416[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26641__auto__);

(statearr_39416[(1)] = (1));

return statearr_39416;
});
var figwheel$client$heads_up_plugin_$_state_machine__26641__auto____1 = (function (state_39406){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_39406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e39417){if((e39417 instanceof Object)){
var ex__26644__auto__ = e39417;
var statearr_39418_39427 = state_39406;
(statearr_39418_39427[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39428 = state_39406;
state_39406 = G__39428;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26641__auto__ = function(state_39406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26641__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26641__auto____1.call(this,state_39406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26641__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26641__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___39420,ch))
})();
var state__26730__auto__ = (function (){var statearr_39419 = f__26729__auto__.call(null);
(statearr_39419[(6)] = c__26728__auto___39420);

return statearr_39419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___39420,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__){
return (function (state_39434){
var state_val_39435 = (state_39434[(1)]);
if((state_val_39435 === (1))){
var inst_39429 = cljs.core.async.timeout.call(null,(3000));
var state_39434__$1 = state_39434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39434__$1,(2),inst_39429);
} else {
if((state_val_39435 === (2))){
var inst_39431 = (state_39434[(2)]);
var inst_39432 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39434__$1 = (function (){var statearr_39436 = state_39434;
(statearr_39436[(7)] = inst_39431);

return statearr_39436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39434__$1,inst_39432);
} else {
return null;
}
}
});})(c__26728__auto__))
;
return ((function (switch__26640__auto__,c__26728__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26641__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26641__auto____0 = (function (){
var statearr_39437 = [null,null,null,null,null,null,null,null];
(statearr_39437[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26641__auto__);

(statearr_39437[(1)] = (1));

return statearr_39437;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26641__auto____1 = (function (state_39434){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_39434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e39438){if((e39438 instanceof Object)){
var ex__26644__auto__ = e39438;
var statearr_39439_39441 = state_39434;
(statearr_39439_39441[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39442 = state_39434;
state_39434 = G__39442;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26641__auto__ = function(state_39434){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26641__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26641__auto____1.call(this,state_39434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26641__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26641__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__))
})();
var state__26730__auto__ = (function (){var statearr_39440 = f__26729__auto__.call(null);
(statearr_39440[(6)] = c__26728__auto__);

return statearr_39440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__))
);

return c__26728__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39449){
var state_val_39450 = (state_39449[(1)]);
if((state_val_39450 === (1))){
var inst_39443 = cljs.core.async.timeout.call(null,(2000));
var state_39449__$1 = state_39449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39449__$1,(2),inst_39443);
} else {
if((state_val_39450 === (2))){
var inst_39445 = (state_39449[(2)]);
var inst_39446 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39447 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39446);
var state_39449__$1 = (function (){var statearr_39451 = state_39449;
(statearr_39451[(7)] = inst_39445);

return statearr_39451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39449__$1,inst_39447);
} else {
return null;
}
}
});})(c__26728__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26640__auto__,c__26728__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto____0 = (function (){
var statearr_39452 = [null,null,null,null,null,null,null,null];
(statearr_39452[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto__);

(statearr_39452[(1)] = (1));

return statearr_39452;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto____1 = (function (state_39449){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_39449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e39453){if((e39453 instanceof Object)){
var ex__26644__auto__ = e39453;
var statearr_39454_39456 = state_39449;
(statearr_39454_39456[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39457 = state_39449;
state_39449 = G__39457;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto__ = function(state_39449){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto____1.call(this,state_39449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26730__auto__ = (function (){var statearr_39455 = f__26729__auto__.call(null);
(statearr_39455[(6)] = c__26728__auto__);

return statearr_39455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__,figwheel_version,temp__4657__auto__))
);

return c__26728__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39458){
var map__39459 = p__39458;
var map__39459__$1 = ((((!((map__39459 == null)))?(((((map__39459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39459):map__39459);
var file = cljs.core.get.call(null,map__39459__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39459__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39459__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39461 = "";
var G__39461__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39461),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39461);
var G__39461__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39461__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39461__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39461__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39461__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39462){
var map__39463 = p__39462;
var map__39463__$1 = ((((!((map__39463 == null)))?(((((map__39463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39463):map__39463);
var ed = map__39463__$1;
var formatted_exception = cljs.core.get.call(null,map__39463__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39463__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39463__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39465_39469 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39466_39470 = null;
var count__39467_39471 = (0);
var i__39468_39472 = (0);
while(true){
if((i__39468_39472 < count__39467_39471)){
var msg_39473 = cljs.core._nth.call(null,chunk__39466_39470,i__39468_39472);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39473);


var G__39474 = seq__39465_39469;
var G__39475 = chunk__39466_39470;
var G__39476 = count__39467_39471;
var G__39477 = (i__39468_39472 + (1));
seq__39465_39469 = G__39474;
chunk__39466_39470 = G__39475;
count__39467_39471 = G__39476;
i__39468_39472 = G__39477;
continue;
} else {
var temp__4657__auto___39478 = cljs.core.seq.call(null,seq__39465_39469);
if(temp__4657__auto___39478){
var seq__39465_39479__$1 = temp__4657__auto___39478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39465_39479__$1)){
var c__4319__auto___39480 = cljs.core.chunk_first.call(null,seq__39465_39479__$1);
var G__39481 = cljs.core.chunk_rest.call(null,seq__39465_39479__$1);
var G__39482 = c__4319__auto___39480;
var G__39483 = cljs.core.count.call(null,c__4319__auto___39480);
var G__39484 = (0);
seq__39465_39469 = G__39481;
chunk__39466_39470 = G__39482;
count__39467_39471 = G__39483;
i__39468_39472 = G__39484;
continue;
} else {
var msg_39485 = cljs.core.first.call(null,seq__39465_39479__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39485);


var G__39486 = cljs.core.next.call(null,seq__39465_39479__$1);
var G__39487 = null;
var G__39488 = (0);
var G__39489 = (0);
seq__39465_39469 = G__39486;
chunk__39466_39470 = G__39487;
count__39467_39471 = G__39488;
i__39468_39472 = G__39489;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39490){
var map__39491 = p__39490;
var map__39491__$1 = ((((!((map__39491 == null)))?(((((map__39491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39491):map__39491);
var w = map__39491__$1;
var message = cljs.core.get.call(null,map__39491__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39493 = cljs.core.seq.call(null,plugins);
var chunk__39494 = null;
var count__39495 = (0);
var i__39496 = (0);
while(true){
if((i__39496 < count__39495)){
var vec__39497 = cljs.core._nth.call(null,chunk__39494,i__39496);
var k = cljs.core.nth.call(null,vec__39497,(0),null);
var plugin = cljs.core.nth.call(null,vec__39497,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39503 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39493,chunk__39494,count__39495,i__39496,pl_39503,vec__39497,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39503.call(null,msg_hist);
});})(seq__39493,chunk__39494,count__39495,i__39496,pl_39503,vec__39497,k,plugin))
);
} else {
}


var G__39504 = seq__39493;
var G__39505 = chunk__39494;
var G__39506 = count__39495;
var G__39507 = (i__39496 + (1));
seq__39493 = G__39504;
chunk__39494 = G__39505;
count__39495 = G__39506;
i__39496 = G__39507;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39493);
if(temp__4657__auto__){
var seq__39493__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39493__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__39493__$1);
var G__39508 = cljs.core.chunk_rest.call(null,seq__39493__$1);
var G__39509 = c__4319__auto__;
var G__39510 = cljs.core.count.call(null,c__4319__auto__);
var G__39511 = (0);
seq__39493 = G__39508;
chunk__39494 = G__39509;
count__39495 = G__39510;
i__39496 = G__39511;
continue;
} else {
var vec__39500 = cljs.core.first.call(null,seq__39493__$1);
var k = cljs.core.nth.call(null,vec__39500,(0),null);
var plugin = cljs.core.nth.call(null,vec__39500,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39512 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39493,chunk__39494,count__39495,i__39496,pl_39512,vec__39500,k,plugin,seq__39493__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39512.call(null,msg_hist);
});})(seq__39493,chunk__39494,count__39495,i__39496,pl_39512,vec__39500,k,plugin,seq__39493__$1,temp__4657__auto__))
);
} else {
}


var G__39513 = cljs.core.next.call(null,seq__39493__$1);
var G__39514 = null;
var G__39515 = (0);
var G__39516 = (0);
seq__39493 = G__39513;
chunk__39494 = G__39514;
count__39495 = G__39515;
i__39496 = G__39516;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39518 = arguments.length;
switch (G__39518) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39519_39524 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39520_39525 = null;
var count__39521_39526 = (0);
var i__39522_39527 = (0);
while(true){
if((i__39522_39527 < count__39521_39526)){
var msg_39528 = cljs.core._nth.call(null,chunk__39520_39525,i__39522_39527);
figwheel.client.socket.handle_incoming_message.call(null,msg_39528);


var G__39529 = seq__39519_39524;
var G__39530 = chunk__39520_39525;
var G__39531 = count__39521_39526;
var G__39532 = (i__39522_39527 + (1));
seq__39519_39524 = G__39529;
chunk__39520_39525 = G__39530;
count__39521_39526 = G__39531;
i__39522_39527 = G__39532;
continue;
} else {
var temp__4657__auto___39533 = cljs.core.seq.call(null,seq__39519_39524);
if(temp__4657__auto___39533){
var seq__39519_39534__$1 = temp__4657__auto___39533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39519_39534__$1)){
var c__4319__auto___39535 = cljs.core.chunk_first.call(null,seq__39519_39534__$1);
var G__39536 = cljs.core.chunk_rest.call(null,seq__39519_39534__$1);
var G__39537 = c__4319__auto___39535;
var G__39538 = cljs.core.count.call(null,c__4319__auto___39535);
var G__39539 = (0);
seq__39519_39524 = G__39536;
chunk__39520_39525 = G__39537;
count__39521_39526 = G__39538;
i__39522_39527 = G__39539;
continue;
} else {
var msg_39540 = cljs.core.first.call(null,seq__39519_39534__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39540);


var G__39541 = cljs.core.next.call(null,seq__39519_39534__$1);
var G__39542 = null;
var G__39543 = (0);
var G__39544 = (0);
seq__39519_39524 = G__39541;
chunk__39520_39525 = G__39542;
count__39521_39526 = G__39543;
i__39522_39527 = G__39544;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39549 = arguments.length;
var i__4500__auto___39550 = (0);
while(true){
if((i__4500__auto___39550 < len__4499__auto___39549)){
args__4502__auto__.push((arguments[i__4500__auto___39550]));

var G__39551 = (i__4500__auto___39550 + (1));
i__4500__auto___39550 = G__39551;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39546){
var map__39547 = p__39546;
var map__39547__$1 = ((((!((map__39547 == null)))?(((((map__39547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39547):map__39547);
var opts = map__39547__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39545){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39545));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39552){if((e39552 instanceof Error)){
var e = e39552;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39552;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39553){
var map__39554 = p__39553;
var map__39554__$1 = ((((!((map__39554 == null)))?(((((map__39554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39554):map__39554);
var msg_name = cljs.core.get.call(null,map__39554__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1554122670305
