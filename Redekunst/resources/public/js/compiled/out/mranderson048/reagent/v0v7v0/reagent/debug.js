// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v7v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__32379__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32380__i = 0, G__32380__a = new Array(arguments.length -  0);
while (G__32380__i < G__32380__a.length) {G__32380__a[G__32380__i] = arguments[G__32380__i + 0]; ++G__32380__i;}
  args = new cljs.core.IndexedSeq(G__32380__a,0,null);
} 
return G__32379__delegate.call(this,args);};
G__32379.cljs$lang$maxFixedArity = 0;
G__32379.cljs$lang$applyTo = (function (arglist__32381){
var args = cljs.core.seq(arglist__32381);
return G__32379__delegate(args);
});
G__32379.cljs$core$IFn$_invoke$arity$variadic = G__32379__delegate;
return G__32379;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32382__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32383__i = 0, G__32383__a = new Array(arguments.length -  0);
while (G__32383__i < G__32383__a.length) {G__32383__a[G__32383__i] = arguments[G__32383__i + 0]; ++G__32383__i;}
  args = new cljs.core.IndexedSeq(G__32383__a,0,null);
} 
return G__32382__delegate.call(this,args);};
G__32382.cljs$lang$maxFixedArity = 0;
G__32382.cljs$lang$applyTo = (function (arglist__32384){
var args = cljs.core.seq(arglist__32384);
return G__32382__delegate(args);
});
G__32382.cljs$core$IFn$_invoke$arity$variadic = G__32382__delegate;
return G__32382;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1554122646422
