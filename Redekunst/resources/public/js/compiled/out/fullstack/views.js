// Compiled by ClojureScript 1.10.238 {}
goog.provide('fullstack.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('fullstack.subs');
goog.require('fullstack.tubes');
goog.require('fullstack.events');
fullstack.views.panel = (function fullstack$views$panel(p__28891){
var map__28892 = p__28891;
var map__28892__$1 = ((((!((map__28892 == null)))?(((((map__28892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28892):map__28892);
var id = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var title = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fullstack__window","div.fullstack__window",225962494),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.window__header","div.window__header",604010047),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.window__title","div.window__title",-1655340771),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.windows__body","div.windows__body",236925605),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null)], null)], null);
});
fullstack.views.input_frame = (function fullstack$views$input_frame(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.fullstack__form__row","div.row.fullstack__form__row",-82986081),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-11","div.col-11",-1912369579),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-input","div.text-input",-271840105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sentence","sentence",2033657256)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28894_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fullstack.events","sentence-change","fullstack.events/sentence-change",1895758254),p1__28894_SHARP_.target.value], null));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fullstack__form__row.fullstack__form__actions","div.fullstack__form__row.fullstack__form__actions",1862775259),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4","div.col-4",-64503036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.fullstack__button.fullstack__button--primary","a.fullstack__button.fullstack__button--primary",-303954756),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return fullstack.tubes.dispatch_to_server.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ask-chat-bot","ask-chat-bot",281247260),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sentence","sentence",2033657256)], null)))], null));
})], null),"Send"], null)], null)], null)], null);
});
fullstack.views.output_frame = (function fullstack$views$output_frame(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.fullstack__form__row","div.row.fullstack__form__row",-82986081),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-11","div.col-11",-1912369579),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-input","div.text-input",-271840105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"analysis","analysis",-1362593389)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28895_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fullstack.events","analysis-change","fullstack.events/analysis-change",1980727366),p1__28895_SHARP_.target.value], null));
})], null)], null)], null)], null)], null)], null);
});
fullstack.views.frames = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"title","title",636505583),"Type your request here",new cljs.core.Keyword(null,"content","content",15833224),fullstack.views.input_frame,new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"w","w",354169001),(400),new cljs.core.Keyword(null,"h","h",1109658740),(200)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Reaction of the Chat Bot",new cljs.core.Keyword(null,"content","content",15833224),fullstack.views.output_frame,new cljs.core.Keyword(null,"x","x",2099068185),(500),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"w","w",354169001),(400),new cljs.core.Keyword(null,"h","h",1109658740),(200)], null)], null);
fullstack.views.main_panel = (function fullstack$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fullstack","div.fullstack",-1160107833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fullstack__header","div.fullstack__header",-71479218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fullstack__productbar","div.fullstack__productbar",-1760507183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fullstack__userbar","div.fullstack__userbar",187655418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fullstack__name","div.fullstack__name",1093508559),"Hermes - an innovative Chat Bot"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fullstack__workspace","div.fullstack__workspace",285053698),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__28896_SHARP_){
return p1__28896_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__28897_SHARP_){
return p1__28897_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__28898_SHARP_){
return p1__28898_SHARP_.preventDefault();
})], null),(function (){var iter__4292__auto__ = (function fullstack$views$main_panel_$_iter__28899(s__28900){
return (new cljs.core.LazySeq(null,(function (){
var s__28900__$1 = s__28900;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28900__$1);
if(temp__4657__auto__){
var s__28900__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28900__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28900__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28902 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28901 = (0);
while(true){
if((i__28901 < size__4291__auto__)){
var f = cljs.core._nth.call(null,c__4290__auto__,i__28901);
cljs.core.chunk_append.call(null,b__28902,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fullstack.views.panel,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f)], null)));

var G__28903 = (i__28901 + (1));
i__28901 = G__28903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28902),fullstack$views$main_panel_$_iter__28899.call(null,cljs.core.chunk_rest.call(null,s__28900__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28902),null);
}
} else {
var f = cljs.core.first.call(null,s__28900__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fullstack.views.panel,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f)], null)),fullstack$views$main_panel_$_iter__28899.call(null,cljs.core.rest.call(null,s__28900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,fullstack.views.frames);
})()], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1554122635804
