// Compiled by ClojureScript 1.10.238 {}
goog.provide('fullstack.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('fullstack.events');
goog.require('fullstack.views');
fullstack.core.debug_QMARK_ = goog.DEBUG;
fullstack.core.dev_setup = (function fullstack$core$dev_setup(){
if(fullstack.core.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
fullstack.core.mount_root = (function fullstack$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fullstack.views.main_panel], null),document.getElementById("app"));
});
fullstack.core.init = (function fullstack$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fullstack.events","initialize","fullstack.events/initialize",-1729755357)], null));

fullstack.core.dev_setup.call(null);

return fullstack.core.mount_root.call(null);
});
goog.exportSymbol('fullstack.core.init', fullstack.core.init);

//# sourceMappingURL=core.js.map?rel=1554122635820
