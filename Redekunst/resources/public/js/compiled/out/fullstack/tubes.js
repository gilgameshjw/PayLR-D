// Compiled by ClojureScript 1.10.238 {}
goog.provide('fullstack.tubes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pneumatic_tubes.core');
goog.require('fullstack.config');
fullstack.tubes.on_receive = (function fullstack$tubes$on_receive(event){
return re_frame.core.dispatch.call(null,event);
});
fullstack.tubes.websocket_url = fullstack.config.websocket_url;
cljs.core.print.call(null,"websocket-url",fullstack.config.websocket_url);
fullstack.tubes.tube = pneumatic_tubes.core.tube.call(null,fullstack.tubes.websocket_url,fullstack.tubes.on_receive);
fullstack.tubes.dispatch_to_server = (function fullstack$tubes$dispatch_to_server(event){
return pneumatic_tubes.core.dispatch.call(null,fullstack.tubes.tube,event);
});
pneumatic_tubes.core.create_BANG_.call(null,fullstack.tubes.tube);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"tubes","tubes",7138402),(function (event){
cljs.core.print.call(null,"tube",fullstack.tubes.tube,"event",event);

return pneumatic_tubes.core.dispatch.call(null,fullstack.tubes.tube,event);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("fullstack.tubes","tubes","fullstack.tubes/tubes",-878318096),(function (p__28880,p__28881){
var map__28882 = p__28880;
var map__28882__$1 = ((((!((map__28882 == null)))?(((((map__28882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28882):map__28882);
var db = cljs.core.get.call(null,map__28882__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28883 = p__28881;
var _ = cljs.core.nth.call(null,vec__28883,(0),null);
var event = cljs.core.nth.call(null,vec__28883,(1),null);
cljs.core.print.call(null,"dispatch event to server");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tubes","tubes",7138402),event], null);
}));

//# sourceMappingURL=tubes.js.map?rel=1554122635745
