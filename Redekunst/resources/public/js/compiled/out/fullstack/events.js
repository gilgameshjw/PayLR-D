// Compiled by ClojureScript 1.10.238 {}
goog.provide('fullstack.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('fullstack.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("fullstack.events","initialize","fullstack.events/initialize",-1729755357),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sentence","sentence",2033657256),"Hello!",new cljs.core.Keyword(null,"analysis","analysis",-1362593389),"Not chatty yet :( "], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("fullstack.events","sentence-change","fullstack.events/sentence-change",1895758254),(function (db,p__25657){
var vec__25658 = p__25657;
var _ = cljs.core.nth.call(null,vec__25658,(0),null);
var new_sentence = cljs.core.nth.call(null,vec__25658,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sentence","sentence",2033657256),new_sentence);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("fullstack.events","analysis-change","fullstack.events/analysis-change",1980727366),(function (db,p__25661){
var vec__25662 = p__25661;
var _ = cljs.core.nth.call(null,vec__25662,(0),null);
var new_analysis = cljs.core.nth.call(null,vec__25662,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"analysis","analysis",-1362593389),new_analysis);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("fullstack.events","server-response","fullstack.events/server-response",2044736466),(function (_,p__25665){
var vec__25666 = p__25665;
var ___$1 = cljs.core.nth.call(null,vec__25666,(0),null);
var response = cljs.core.nth.call(null,vec__25666,(1),null);
return cljs.core.print.call(null,response);
}));

//# sourceMappingURL=events.js.map?rel=1554122631737
