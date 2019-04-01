// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38784){
var map__38785 = p__38784;
var map__38785__$1 = ((((!((map__38785 == null)))?(((((map__38785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38785):map__38785);
var m = map__38785__$1;
var n = cljs.core.get.call(null,map__38785__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38785__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38787_38809 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38788_38810 = null;
var count__38789_38811 = (0);
var i__38790_38812 = (0);
while(true){
if((i__38790_38812 < count__38789_38811)){
var f_38813 = cljs.core._nth.call(null,chunk__38788_38810,i__38790_38812);
cljs.core.println.call(null,"  ",f_38813);


var G__38814 = seq__38787_38809;
var G__38815 = chunk__38788_38810;
var G__38816 = count__38789_38811;
var G__38817 = (i__38790_38812 + (1));
seq__38787_38809 = G__38814;
chunk__38788_38810 = G__38815;
count__38789_38811 = G__38816;
i__38790_38812 = G__38817;
continue;
} else {
var temp__4657__auto___38818 = cljs.core.seq.call(null,seq__38787_38809);
if(temp__4657__auto___38818){
var seq__38787_38819__$1 = temp__4657__auto___38818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38787_38819__$1)){
var c__4319__auto___38820 = cljs.core.chunk_first.call(null,seq__38787_38819__$1);
var G__38821 = cljs.core.chunk_rest.call(null,seq__38787_38819__$1);
var G__38822 = c__4319__auto___38820;
var G__38823 = cljs.core.count.call(null,c__4319__auto___38820);
var G__38824 = (0);
seq__38787_38809 = G__38821;
chunk__38788_38810 = G__38822;
count__38789_38811 = G__38823;
i__38790_38812 = G__38824;
continue;
} else {
var f_38825 = cljs.core.first.call(null,seq__38787_38819__$1);
cljs.core.println.call(null,"  ",f_38825);


var G__38826 = cljs.core.next.call(null,seq__38787_38819__$1);
var G__38827 = null;
var G__38828 = (0);
var G__38829 = (0);
seq__38787_38809 = G__38826;
chunk__38788_38810 = G__38827;
count__38789_38811 = G__38828;
i__38790_38812 = G__38829;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38830 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38830);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38830)))?cljs.core.second.call(null,arglists_38830):arglists_38830));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38791_38831 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38792_38832 = null;
var count__38793_38833 = (0);
var i__38794_38834 = (0);
while(true){
if((i__38794_38834 < count__38793_38833)){
var vec__38795_38835 = cljs.core._nth.call(null,chunk__38792_38832,i__38794_38834);
var name_38836 = cljs.core.nth.call(null,vec__38795_38835,(0),null);
var map__38798_38837 = cljs.core.nth.call(null,vec__38795_38835,(1),null);
var map__38798_38838__$1 = ((((!((map__38798_38837 == null)))?(((((map__38798_38837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38798_38837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38798_38837):map__38798_38837);
var doc_38839 = cljs.core.get.call(null,map__38798_38838__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38840 = cljs.core.get.call(null,map__38798_38838__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38836);

cljs.core.println.call(null," ",arglists_38840);

if(cljs.core.truth_(doc_38839)){
cljs.core.println.call(null," ",doc_38839);
} else {
}


var G__38841 = seq__38791_38831;
var G__38842 = chunk__38792_38832;
var G__38843 = count__38793_38833;
var G__38844 = (i__38794_38834 + (1));
seq__38791_38831 = G__38841;
chunk__38792_38832 = G__38842;
count__38793_38833 = G__38843;
i__38794_38834 = G__38844;
continue;
} else {
var temp__4657__auto___38845 = cljs.core.seq.call(null,seq__38791_38831);
if(temp__4657__auto___38845){
var seq__38791_38846__$1 = temp__4657__auto___38845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38791_38846__$1)){
var c__4319__auto___38847 = cljs.core.chunk_first.call(null,seq__38791_38846__$1);
var G__38848 = cljs.core.chunk_rest.call(null,seq__38791_38846__$1);
var G__38849 = c__4319__auto___38847;
var G__38850 = cljs.core.count.call(null,c__4319__auto___38847);
var G__38851 = (0);
seq__38791_38831 = G__38848;
chunk__38792_38832 = G__38849;
count__38793_38833 = G__38850;
i__38794_38834 = G__38851;
continue;
} else {
var vec__38800_38852 = cljs.core.first.call(null,seq__38791_38846__$1);
var name_38853 = cljs.core.nth.call(null,vec__38800_38852,(0),null);
var map__38803_38854 = cljs.core.nth.call(null,vec__38800_38852,(1),null);
var map__38803_38855__$1 = ((((!((map__38803_38854 == null)))?(((((map__38803_38854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38803_38854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38803_38854):map__38803_38854);
var doc_38856 = cljs.core.get.call(null,map__38803_38855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38857 = cljs.core.get.call(null,map__38803_38855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38853);

cljs.core.println.call(null," ",arglists_38857);

if(cljs.core.truth_(doc_38856)){
cljs.core.println.call(null," ",doc_38856);
} else {
}


var G__38858 = cljs.core.next.call(null,seq__38791_38846__$1);
var G__38859 = null;
var G__38860 = (0);
var G__38861 = (0);
seq__38791_38831 = G__38858;
chunk__38792_38832 = G__38859;
count__38793_38833 = G__38860;
i__38794_38834 = G__38861;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38805 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38806 = null;
var count__38807 = (0);
var i__38808 = (0);
while(true){
if((i__38808 < count__38807)){
var role = cljs.core._nth.call(null,chunk__38806,i__38808);
var temp__4657__auto___38862__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38862__$1)){
var spec_38863 = temp__4657__auto___38862__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38863));
} else {
}


var G__38864 = seq__38805;
var G__38865 = chunk__38806;
var G__38866 = count__38807;
var G__38867 = (i__38808 + (1));
seq__38805 = G__38864;
chunk__38806 = G__38865;
count__38807 = G__38866;
i__38808 = G__38867;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38805);
if(temp__4657__auto____$1){
var seq__38805__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38805__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38805__$1);
var G__38868 = cljs.core.chunk_rest.call(null,seq__38805__$1);
var G__38869 = c__4319__auto__;
var G__38870 = cljs.core.count.call(null,c__4319__auto__);
var G__38871 = (0);
seq__38805 = G__38868;
chunk__38806 = G__38869;
count__38807 = G__38870;
i__38808 = G__38871;
continue;
} else {
var role = cljs.core.first.call(null,seq__38805__$1);
var temp__4657__auto___38872__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38872__$2)){
var spec_38873 = temp__4657__auto___38872__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38873));
} else {
}


var G__38874 = cljs.core.next.call(null,seq__38805__$1);
var G__38875 = null;
var G__38876 = (0);
var G__38877 = (0);
seq__38805 = G__38874;
chunk__38806 = G__38875;
count__38807 = G__38876;
i__38808 = G__38877;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1554122669112
