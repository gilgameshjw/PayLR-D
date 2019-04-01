// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38116_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38116_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38117 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38118 = null;
var count__38119 = (0);
var i__38120 = (0);
while(true){
if((i__38120 < count__38119)){
var n = cljs.core._nth.call(null,chunk__38118,i__38120);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__38121 = seq__38117;
var G__38122 = chunk__38118;
var G__38123 = count__38119;
var G__38124 = (i__38120 + (1));
seq__38117 = G__38121;
chunk__38118 = G__38122;
count__38119 = G__38123;
i__38120 = G__38124;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38117);
if(temp__4657__auto__){
var seq__38117__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38117__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38117__$1);
var G__38125 = cljs.core.chunk_rest.call(null,seq__38117__$1);
var G__38126 = c__4319__auto__;
var G__38127 = cljs.core.count.call(null,c__4319__auto__);
var G__38128 = (0);
seq__38117 = G__38125;
chunk__38118 = G__38126;
count__38119 = G__38127;
i__38120 = G__38128;
continue;
} else {
var n = cljs.core.first.call(null,seq__38117__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__38129 = cljs.core.next.call(null,seq__38117__$1);
var G__38130 = null;
var G__38131 = (0);
var G__38132 = (0);
seq__38117 = G__38129;
chunk__38118 = G__38130;
count__38119 = G__38131;
i__38120 = G__38132;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__38133){
var vec__38134 = p__38133;
var _ = cljs.core.nth.call(null,vec__38134,(0),null);
var v = cljs.core.nth.call(null,vec__38134,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__38137){
var vec__38138 = p__38137;
var k = cljs.core.nth.call(null,vec__38138,(0),null);
var v = cljs.core.nth.call(null,vec__38138,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38150_38158 = cljs.core.seq.call(null,deps);
var chunk__38151_38159 = null;
var count__38152_38160 = (0);
var i__38153_38161 = (0);
while(true){
if((i__38153_38161 < count__38152_38160)){
var dep_38162 = cljs.core._nth.call(null,chunk__38151_38159,i__38153_38161);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_38162;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38162));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38162,(depth + (1)),state);
} else {
}


var G__38163 = seq__38150_38158;
var G__38164 = chunk__38151_38159;
var G__38165 = count__38152_38160;
var G__38166 = (i__38153_38161 + (1));
seq__38150_38158 = G__38163;
chunk__38151_38159 = G__38164;
count__38152_38160 = G__38165;
i__38153_38161 = G__38166;
continue;
} else {
var temp__4657__auto___38167 = cljs.core.seq.call(null,seq__38150_38158);
if(temp__4657__auto___38167){
var seq__38150_38168__$1 = temp__4657__auto___38167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38150_38168__$1)){
var c__4319__auto___38169 = cljs.core.chunk_first.call(null,seq__38150_38168__$1);
var G__38170 = cljs.core.chunk_rest.call(null,seq__38150_38168__$1);
var G__38171 = c__4319__auto___38169;
var G__38172 = cljs.core.count.call(null,c__4319__auto___38169);
var G__38173 = (0);
seq__38150_38158 = G__38170;
chunk__38151_38159 = G__38171;
count__38152_38160 = G__38172;
i__38153_38161 = G__38173;
continue;
} else {
var dep_38174 = cljs.core.first.call(null,seq__38150_38168__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_38174;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38174));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38174,(depth + (1)),state);
} else {
}


var G__38175 = cljs.core.next.call(null,seq__38150_38168__$1);
var G__38176 = null;
var G__38177 = (0);
var G__38178 = (0);
seq__38150_38158 = G__38175;
chunk__38151_38159 = G__38176;
count__38152_38160 = G__38177;
i__38153_38161 = G__38178;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38154){
var vec__38155 = p__38154;
var seq__38156 = cljs.core.seq.call(null,vec__38155);
var first__38157 = cljs.core.first.call(null,seq__38156);
var seq__38156__$1 = cljs.core.next.call(null,seq__38156);
var x = first__38157;
var xs = seq__38156__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38155,seq__38156,first__38157,seq__38156__$1,x,xs,get_deps__$1){
return (function (p1__38141_SHARP_){
return clojure.set.difference.call(null,p1__38141_SHARP_,x);
});})(vec__38155,seq__38156,first__38157,seq__38156__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38179 = cljs.core.seq.call(null,provides);
var chunk__38180 = null;
var count__38181 = (0);
var i__38182 = (0);
while(true){
if((i__38182 < count__38181)){
var prov = cljs.core._nth.call(null,chunk__38180,i__38182);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38183_38191 = cljs.core.seq.call(null,requires);
var chunk__38184_38192 = null;
var count__38185_38193 = (0);
var i__38186_38194 = (0);
while(true){
if((i__38186_38194 < count__38185_38193)){
var req_38195 = cljs.core._nth.call(null,chunk__38184_38192,i__38186_38194);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38195,prov);


var G__38196 = seq__38183_38191;
var G__38197 = chunk__38184_38192;
var G__38198 = count__38185_38193;
var G__38199 = (i__38186_38194 + (1));
seq__38183_38191 = G__38196;
chunk__38184_38192 = G__38197;
count__38185_38193 = G__38198;
i__38186_38194 = G__38199;
continue;
} else {
var temp__4657__auto___38200 = cljs.core.seq.call(null,seq__38183_38191);
if(temp__4657__auto___38200){
var seq__38183_38201__$1 = temp__4657__auto___38200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38183_38201__$1)){
var c__4319__auto___38202 = cljs.core.chunk_first.call(null,seq__38183_38201__$1);
var G__38203 = cljs.core.chunk_rest.call(null,seq__38183_38201__$1);
var G__38204 = c__4319__auto___38202;
var G__38205 = cljs.core.count.call(null,c__4319__auto___38202);
var G__38206 = (0);
seq__38183_38191 = G__38203;
chunk__38184_38192 = G__38204;
count__38185_38193 = G__38205;
i__38186_38194 = G__38206;
continue;
} else {
var req_38207 = cljs.core.first.call(null,seq__38183_38201__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38207,prov);


var G__38208 = cljs.core.next.call(null,seq__38183_38201__$1);
var G__38209 = null;
var G__38210 = (0);
var G__38211 = (0);
seq__38183_38191 = G__38208;
chunk__38184_38192 = G__38209;
count__38185_38193 = G__38210;
i__38186_38194 = G__38211;
continue;
}
} else {
}
}
break;
}


var G__38212 = seq__38179;
var G__38213 = chunk__38180;
var G__38214 = count__38181;
var G__38215 = (i__38182 + (1));
seq__38179 = G__38212;
chunk__38180 = G__38213;
count__38181 = G__38214;
i__38182 = G__38215;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38179);
if(temp__4657__auto__){
var seq__38179__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38179__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38179__$1);
var G__38216 = cljs.core.chunk_rest.call(null,seq__38179__$1);
var G__38217 = c__4319__auto__;
var G__38218 = cljs.core.count.call(null,c__4319__auto__);
var G__38219 = (0);
seq__38179 = G__38216;
chunk__38180 = G__38217;
count__38181 = G__38218;
i__38182 = G__38219;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38179__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38187_38220 = cljs.core.seq.call(null,requires);
var chunk__38188_38221 = null;
var count__38189_38222 = (0);
var i__38190_38223 = (0);
while(true){
if((i__38190_38223 < count__38189_38222)){
var req_38224 = cljs.core._nth.call(null,chunk__38188_38221,i__38190_38223);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38224,prov);


var G__38225 = seq__38187_38220;
var G__38226 = chunk__38188_38221;
var G__38227 = count__38189_38222;
var G__38228 = (i__38190_38223 + (1));
seq__38187_38220 = G__38225;
chunk__38188_38221 = G__38226;
count__38189_38222 = G__38227;
i__38190_38223 = G__38228;
continue;
} else {
var temp__4657__auto___38229__$1 = cljs.core.seq.call(null,seq__38187_38220);
if(temp__4657__auto___38229__$1){
var seq__38187_38230__$1 = temp__4657__auto___38229__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38187_38230__$1)){
var c__4319__auto___38231 = cljs.core.chunk_first.call(null,seq__38187_38230__$1);
var G__38232 = cljs.core.chunk_rest.call(null,seq__38187_38230__$1);
var G__38233 = c__4319__auto___38231;
var G__38234 = cljs.core.count.call(null,c__4319__auto___38231);
var G__38235 = (0);
seq__38187_38220 = G__38232;
chunk__38188_38221 = G__38233;
count__38189_38222 = G__38234;
i__38190_38223 = G__38235;
continue;
} else {
var req_38236 = cljs.core.first.call(null,seq__38187_38230__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38236,prov);


var G__38237 = cljs.core.next.call(null,seq__38187_38230__$1);
var G__38238 = null;
var G__38239 = (0);
var G__38240 = (0);
seq__38187_38220 = G__38237;
chunk__38188_38221 = G__38238;
count__38189_38222 = G__38239;
i__38190_38223 = G__38240;
continue;
}
} else {
}
}
break;
}


var G__38241 = cljs.core.next.call(null,seq__38179__$1);
var G__38242 = null;
var G__38243 = (0);
var G__38244 = (0);
seq__38179 = G__38241;
chunk__38180 = G__38242;
count__38181 = G__38243;
i__38182 = G__38244;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38245_38249 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38246_38250 = null;
var count__38247_38251 = (0);
var i__38248_38252 = (0);
while(true){
if((i__38248_38252 < count__38247_38251)){
var ns_38253 = cljs.core._nth.call(null,chunk__38246_38250,i__38248_38252);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38253);


var G__38254 = seq__38245_38249;
var G__38255 = chunk__38246_38250;
var G__38256 = count__38247_38251;
var G__38257 = (i__38248_38252 + (1));
seq__38245_38249 = G__38254;
chunk__38246_38250 = G__38255;
count__38247_38251 = G__38256;
i__38248_38252 = G__38257;
continue;
} else {
var temp__4657__auto___38258 = cljs.core.seq.call(null,seq__38245_38249);
if(temp__4657__auto___38258){
var seq__38245_38259__$1 = temp__4657__auto___38258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38245_38259__$1)){
var c__4319__auto___38260 = cljs.core.chunk_first.call(null,seq__38245_38259__$1);
var G__38261 = cljs.core.chunk_rest.call(null,seq__38245_38259__$1);
var G__38262 = c__4319__auto___38260;
var G__38263 = cljs.core.count.call(null,c__4319__auto___38260);
var G__38264 = (0);
seq__38245_38249 = G__38261;
chunk__38246_38250 = G__38262;
count__38247_38251 = G__38263;
i__38248_38252 = G__38264;
continue;
} else {
var ns_38265 = cljs.core.first.call(null,seq__38245_38259__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38265);


var G__38266 = cljs.core.next.call(null,seq__38245_38259__$1);
var G__38267 = null;
var G__38268 = (0);
var G__38269 = (0);
seq__38245_38249 = G__38266;
chunk__38246_38250 = G__38267;
count__38247_38251 = G__38268;
i__38248_38252 = G__38269;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__38270__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38271__i = 0, G__38271__a = new Array(arguments.length -  0);
while (G__38271__i < G__38271__a.length) {G__38271__a[G__38271__i] = arguments[G__38271__i + 0]; ++G__38271__i;}
  args = new cljs.core.IndexedSeq(G__38271__a,0,null);
} 
return G__38270__delegate.call(this,args);};
G__38270.cljs$lang$maxFixedArity = 0;
G__38270.cljs$lang$applyTo = (function (arglist__38272){
var args = cljs.core.seq(arglist__38272);
return G__38270__delegate(args);
});
G__38270.cljs$core$IFn$_invoke$arity$variadic = G__38270__delegate;
return G__38270;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__38273_SHARP_,p2__38274_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38273_SHARP_)].join('')),p2__38274_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__38275_SHARP_,p2__38276_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38275_SHARP_)].join(''),p2__38276_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__38277 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__38277.addCallback(((function (G__38277){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__38277))
);

G__38277.addErrback(((function (G__38277){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__38277))
);

return G__38277;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38278){if((e38278 instanceof Error)){
var e = e38278;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38278;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38279){if((e38279 instanceof Error)){
var e = e38279;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38279;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38280 = cljs.core._EQ_;
var expr__38281 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38280.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38281))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__38280.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38281))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__38280.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38281))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__38280,expr__38281){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38280,expr__38281))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38283,callback){
var map__38284 = p__38283;
var map__38284__$1 = ((((!((map__38284 == null)))?(((((map__38284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38284):map__38284);
var file_msg = map__38284__$1;
var request_url = cljs.core.get.call(null,map__38284__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__38284,map__38284__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38284,map__38284__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__){
return (function (state_38322){
var state_val_38323 = (state_38322[(1)]);
if((state_val_38323 === (7))){
var inst_38318 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
var statearr_38324_38350 = state_38322__$1;
(statearr_38324_38350[(2)] = inst_38318);

(statearr_38324_38350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (1))){
var state_38322__$1 = state_38322;
var statearr_38325_38351 = state_38322__$1;
(statearr_38325_38351[(2)] = null);

(statearr_38325_38351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (4))){
var inst_38288 = (state_38322[(7)]);
var inst_38288__$1 = (state_38322[(2)]);
var state_38322__$1 = (function (){var statearr_38326 = state_38322;
(statearr_38326[(7)] = inst_38288__$1);

return statearr_38326;
})();
if(cljs.core.truth_(inst_38288__$1)){
var statearr_38327_38352 = state_38322__$1;
(statearr_38327_38352[(1)] = (5));

} else {
var statearr_38328_38353 = state_38322__$1;
(statearr_38328_38353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (15))){
var inst_38303 = (state_38322[(8)]);
var inst_38301 = (state_38322[(9)]);
var inst_38305 = inst_38303.call(null,inst_38301);
var state_38322__$1 = state_38322;
var statearr_38329_38354 = state_38322__$1;
(statearr_38329_38354[(2)] = inst_38305);

(statearr_38329_38354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (13))){
var inst_38312 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
var statearr_38330_38355 = state_38322__$1;
(statearr_38330_38355[(2)] = inst_38312);

(statearr_38330_38355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (6))){
var state_38322__$1 = state_38322;
var statearr_38331_38356 = state_38322__$1;
(statearr_38331_38356[(2)] = null);

(statearr_38331_38356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (17))){
var inst_38309 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
var statearr_38332_38357 = state_38322__$1;
(statearr_38332_38357[(2)] = inst_38309);

(statearr_38332_38357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (3))){
var inst_38320 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38322__$1,inst_38320);
} else {
if((state_val_38323 === (12))){
var state_38322__$1 = state_38322;
var statearr_38333_38358 = state_38322__$1;
(statearr_38333_38358[(2)] = null);

(statearr_38333_38358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (2))){
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38322__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38323 === (11))){
var inst_38293 = (state_38322[(10)]);
var inst_38299 = figwheel.client.file_reloading.blocking_load.call(null,inst_38293);
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38322__$1,(14),inst_38299);
} else {
if((state_val_38323 === (9))){
var inst_38293 = (state_38322[(10)]);
var state_38322__$1 = state_38322;
if(cljs.core.truth_(inst_38293)){
var statearr_38334_38359 = state_38322__$1;
(statearr_38334_38359[(1)] = (11));

} else {
var statearr_38335_38360 = state_38322__$1;
(statearr_38335_38360[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (5))){
var inst_38288 = (state_38322[(7)]);
var inst_38294 = (state_38322[(11)]);
var inst_38293 = cljs.core.nth.call(null,inst_38288,(0),null);
var inst_38294__$1 = cljs.core.nth.call(null,inst_38288,(1),null);
var state_38322__$1 = (function (){var statearr_38336 = state_38322;
(statearr_38336[(11)] = inst_38294__$1);

(statearr_38336[(10)] = inst_38293);

return statearr_38336;
})();
if(cljs.core.truth_(inst_38294__$1)){
var statearr_38337_38361 = state_38322__$1;
(statearr_38337_38361[(1)] = (8));

} else {
var statearr_38338_38362 = state_38322__$1;
(statearr_38338_38362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (14))){
var inst_38303 = (state_38322[(8)]);
var inst_38293 = (state_38322[(10)]);
var inst_38301 = (state_38322[(2)]);
var inst_38302 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38303__$1 = cljs.core.get.call(null,inst_38302,inst_38293);
var state_38322__$1 = (function (){var statearr_38339 = state_38322;
(statearr_38339[(8)] = inst_38303__$1);

(statearr_38339[(9)] = inst_38301);

return statearr_38339;
})();
if(cljs.core.truth_(inst_38303__$1)){
var statearr_38340_38363 = state_38322__$1;
(statearr_38340_38363[(1)] = (15));

} else {
var statearr_38341_38364 = state_38322__$1;
(statearr_38341_38364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (16))){
var inst_38301 = (state_38322[(9)]);
var inst_38307 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38301);
var state_38322__$1 = state_38322;
var statearr_38342_38365 = state_38322__$1;
(statearr_38342_38365[(2)] = inst_38307);

(statearr_38342_38365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (10))){
var inst_38314 = (state_38322[(2)]);
var state_38322__$1 = (function (){var statearr_38343 = state_38322;
(statearr_38343[(12)] = inst_38314);

return statearr_38343;
})();
var statearr_38344_38366 = state_38322__$1;
(statearr_38344_38366[(2)] = null);

(statearr_38344_38366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (8))){
var inst_38294 = (state_38322[(11)]);
var inst_38296 = eval(inst_38294);
var state_38322__$1 = state_38322;
var statearr_38345_38367 = state_38322__$1;
(statearr_38345_38367[(2)] = inst_38296);

(statearr_38345_38367[(1)] = (10));


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
});})(c__26728__auto__))
;
return ((function (switch__26640__auto__,c__26728__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26641__auto__ = null;
var figwheel$client$file_reloading$state_machine__26641__auto____0 = (function (){
var statearr_38346 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38346[(0)] = figwheel$client$file_reloading$state_machine__26641__auto__);

(statearr_38346[(1)] = (1));

return statearr_38346;
});
var figwheel$client$file_reloading$state_machine__26641__auto____1 = (function (state_38322){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_38322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e38347){if((e38347 instanceof Object)){
var ex__26644__auto__ = e38347;
var statearr_38348_38368 = state_38322;
(statearr_38348_38368[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38369 = state_38322;
state_38322 = G__38369;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26641__auto__ = function(state_38322){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26641__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26641__auto____1.call(this,state_38322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26641__auto____0;
figwheel$client$file_reloading$state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26641__auto____1;
return figwheel$client$file_reloading$state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__))
})();
var state__26730__auto__ = (function (){var statearr_38349 = f__26729__auto__.call(null);
(statearr_38349[(6)] = c__26728__auto__);

return statearr_38349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__))
);

return c__26728__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38371 = arguments.length;
switch (G__38371) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38373,callback){
var map__38374 = p__38373;
var map__38374__$1 = ((((!((map__38374 == null)))?(((((map__38374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38374):map__38374);
var file_msg = map__38374__$1;
var namespace = cljs.core.get.call(null,map__38374__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38374,map__38374__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38374,map__38374__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38376){
var map__38377 = p__38376;
var map__38377__$1 = ((((!((map__38377 == null)))?(((((map__38377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38377):map__38377);
var file_msg = map__38377__$1;
var namespace = cljs.core.get.call(null,map__38377__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38379){
var map__38380 = p__38379;
var map__38380__$1 = ((((!((map__38380 == null)))?(((((map__38380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38380):map__38380);
var file_msg = map__38380__$1;
var namespace = cljs.core.get.call(null,map__38380__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38382,callback){
var map__38383 = p__38382;
var map__38383__$1 = ((((!((map__38383 == null)))?(((((map__38383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38383):map__38383);
var file_msg = map__38383__$1;
var request_url = cljs.core.get.call(null,map__38383__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38383__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26728__auto___38433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto___38433,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto___38433,out){
return (function (state_38418){
var state_val_38419 = (state_38418[(1)]);
if((state_val_38419 === (1))){
var inst_38392 = cljs.core.seq.call(null,files);
var inst_38393 = cljs.core.first.call(null,inst_38392);
var inst_38394 = cljs.core.next.call(null,inst_38392);
var inst_38395 = files;
var state_38418__$1 = (function (){var statearr_38420 = state_38418;
(statearr_38420[(7)] = inst_38393);

(statearr_38420[(8)] = inst_38395);

(statearr_38420[(9)] = inst_38394);

return statearr_38420;
})();
var statearr_38421_38434 = state_38418__$1;
(statearr_38421_38434[(2)] = null);

(statearr_38421_38434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (2))){
var inst_38395 = (state_38418[(8)]);
var inst_38401 = (state_38418[(10)]);
var inst_38400 = cljs.core.seq.call(null,inst_38395);
var inst_38401__$1 = cljs.core.first.call(null,inst_38400);
var inst_38402 = cljs.core.next.call(null,inst_38400);
var inst_38403 = (inst_38401__$1 == null);
var inst_38404 = cljs.core.not.call(null,inst_38403);
var state_38418__$1 = (function (){var statearr_38422 = state_38418;
(statearr_38422[(11)] = inst_38402);

(statearr_38422[(10)] = inst_38401__$1);

return statearr_38422;
})();
if(inst_38404){
var statearr_38423_38435 = state_38418__$1;
(statearr_38423_38435[(1)] = (4));

} else {
var statearr_38424_38436 = state_38418__$1;
(statearr_38424_38436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (3))){
var inst_38416 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38418__$1,inst_38416);
} else {
if((state_val_38419 === (4))){
var inst_38401 = (state_38418[(10)]);
var inst_38406 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38401);
var state_38418__$1 = state_38418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38418__$1,(7),inst_38406);
} else {
if((state_val_38419 === (5))){
var inst_38412 = cljs.core.async.close_BANG_.call(null,out);
var state_38418__$1 = state_38418;
var statearr_38425_38437 = state_38418__$1;
(statearr_38425_38437[(2)] = inst_38412);

(statearr_38425_38437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (6))){
var inst_38414 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38426_38438 = state_38418__$1;
(statearr_38426_38438[(2)] = inst_38414);

(statearr_38426_38438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (7))){
var inst_38402 = (state_38418[(11)]);
var inst_38408 = (state_38418[(2)]);
var inst_38409 = cljs.core.async.put_BANG_.call(null,out,inst_38408);
var inst_38395 = inst_38402;
var state_38418__$1 = (function (){var statearr_38427 = state_38418;
(statearr_38427[(8)] = inst_38395);

(statearr_38427[(12)] = inst_38409);

return statearr_38427;
})();
var statearr_38428_38439 = state_38418__$1;
(statearr_38428_38439[(2)] = null);

(statearr_38428_38439[(1)] = (2));


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
});})(c__26728__auto___38433,out))
;
return ((function (switch__26640__auto__,c__26728__auto___38433,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto____0 = (function (){
var statearr_38429 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38429[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto__);

(statearr_38429[(1)] = (1));

return statearr_38429;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto____1 = (function (state_38418){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_38418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e38430){if((e38430 instanceof Object)){
var ex__26644__auto__ = e38430;
var statearr_38431_38440 = state_38418;
(statearr_38431_38440[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38441 = state_38418;
state_38418 = G__38441;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto__ = function(state_38418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto____1.call(this,state_38418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto___38433,out))
})();
var state__26730__auto__ = (function (){var statearr_38432 = f__26729__auto__.call(null);
(statearr_38432[(6)] = c__26728__auto___38433);

return statearr_38432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto___38433,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38442,opts){
var map__38443 = p__38442;
var map__38443__$1 = ((((!((map__38443 == null)))?(((((map__38443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38443):map__38443);
var eval_body = cljs.core.get.call(null,map__38443__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38443__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38445){var e = e38445;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38446_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38446_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__38447){
var vec__38448 = p__38447;
var k = cljs.core.nth.call(null,vec__38448,(0),null);
var v = cljs.core.nth.call(null,vec__38448,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38451){
var vec__38452 = p__38451;
var k = cljs.core.nth.call(null,vec__38452,(0),null);
var v = cljs.core.nth.call(null,vec__38452,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38458,p__38459){
var map__38460 = p__38458;
var map__38460__$1 = ((((!((map__38460 == null)))?(((((map__38460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38460):map__38460);
var opts = map__38460__$1;
var before_jsload = cljs.core.get.call(null,map__38460__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38460__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38460__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38461 = p__38459;
var map__38461__$1 = ((((!((map__38461 == null)))?(((((map__38461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38461):map__38461);
var msg = map__38461__$1;
var files = cljs.core.get.call(null,map__38461__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38461__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38461__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26729__auto__ = (function (){var switch__26640__auto__ = ((function (c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38615){
var state_val_38616 = (state_38615[(1)]);
if((state_val_38616 === (7))){
var inst_38476 = (state_38615[(7)]);
var inst_38477 = (state_38615[(8)]);
var inst_38478 = (state_38615[(9)]);
var inst_38475 = (state_38615[(10)]);
var inst_38483 = cljs.core._nth.call(null,inst_38476,inst_38478);
var inst_38484 = figwheel.client.file_reloading.eval_body.call(null,inst_38483,opts);
var inst_38485 = (inst_38478 + (1));
var tmp38617 = inst_38476;
var tmp38618 = inst_38477;
var tmp38619 = inst_38475;
var inst_38475__$1 = tmp38619;
var inst_38476__$1 = tmp38617;
var inst_38477__$1 = tmp38618;
var inst_38478__$1 = inst_38485;
var state_38615__$1 = (function (){var statearr_38620 = state_38615;
(statearr_38620[(7)] = inst_38476__$1);

(statearr_38620[(8)] = inst_38477__$1);

(statearr_38620[(11)] = inst_38484);

(statearr_38620[(9)] = inst_38478__$1);

(statearr_38620[(10)] = inst_38475__$1);

return statearr_38620;
})();
var statearr_38621_38704 = state_38615__$1;
(statearr_38621_38704[(2)] = null);

(statearr_38621_38704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (20))){
var inst_38518 = (state_38615[(12)]);
var inst_38526 = figwheel.client.file_reloading.sort_files.call(null,inst_38518);
var state_38615__$1 = state_38615;
var statearr_38622_38705 = state_38615__$1;
(statearr_38622_38705[(2)] = inst_38526);

(statearr_38622_38705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (27))){
var state_38615__$1 = state_38615;
var statearr_38623_38706 = state_38615__$1;
(statearr_38623_38706[(2)] = null);

(statearr_38623_38706[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (1))){
var inst_38467 = (state_38615[(13)]);
var inst_38464 = before_jsload.call(null,files);
var inst_38465 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38466 = (function (){return ((function (inst_38467,inst_38464,inst_38465,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38455_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38455_SHARP_);
});
;})(inst_38467,inst_38464,inst_38465,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38467__$1 = cljs.core.filter.call(null,inst_38466,files);
var inst_38468 = cljs.core.not_empty.call(null,inst_38467__$1);
var state_38615__$1 = (function (){var statearr_38624 = state_38615;
(statearr_38624[(14)] = inst_38465);

(statearr_38624[(13)] = inst_38467__$1);

(statearr_38624[(15)] = inst_38464);

return statearr_38624;
})();
if(cljs.core.truth_(inst_38468)){
var statearr_38625_38707 = state_38615__$1;
(statearr_38625_38707[(1)] = (2));

} else {
var statearr_38626_38708 = state_38615__$1;
(statearr_38626_38708[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (24))){
var state_38615__$1 = state_38615;
var statearr_38627_38709 = state_38615__$1;
(statearr_38627_38709[(2)] = null);

(statearr_38627_38709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (39))){
var inst_38568 = (state_38615[(16)]);
var state_38615__$1 = state_38615;
var statearr_38628_38710 = state_38615__$1;
(statearr_38628_38710[(2)] = inst_38568);

(statearr_38628_38710[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (46))){
var inst_38610 = (state_38615[(2)]);
var state_38615__$1 = state_38615;
var statearr_38629_38711 = state_38615__$1;
(statearr_38629_38711[(2)] = inst_38610);

(statearr_38629_38711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (4))){
var inst_38512 = (state_38615[(2)]);
var inst_38513 = cljs.core.List.EMPTY;
var inst_38514 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38513);
var inst_38515 = (function (){return ((function (inst_38512,inst_38513,inst_38514,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38456_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38456_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38456_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38456_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_38512,inst_38513,inst_38514,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38516 = cljs.core.filter.call(null,inst_38515,files);
var inst_38517 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38518 = cljs.core.concat.call(null,inst_38516,inst_38517);
var state_38615__$1 = (function (){var statearr_38630 = state_38615;
(statearr_38630[(12)] = inst_38518);

(statearr_38630[(17)] = inst_38512);

(statearr_38630[(18)] = inst_38514);

return statearr_38630;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38631_38712 = state_38615__$1;
(statearr_38631_38712[(1)] = (16));

} else {
var statearr_38632_38713 = state_38615__$1;
(statearr_38632_38713[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (15))){
var inst_38502 = (state_38615[(2)]);
var state_38615__$1 = state_38615;
var statearr_38633_38714 = state_38615__$1;
(statearr_38633_38714[(2)] = inst_38502);

(statearr_38633_38714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (21))){
var inst_38528 = (state_38615[(19)]);
var inst_38528__$1 = (state_38615[(2)]);
var inst_38529 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38528__$1);
var state_38615__$1 = (function (){var statearr_38634 = state_38615;
(statearr_38634[(19)] = inst_38528__$1);

return statearr_38634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38615__$1,(22),inst_38529);
} else {
if((state_val_38616 === (31))){
var inst_38613 = (state_38615[(2)]);
var state_38615__$1 = state_38615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38615__$1,inst_38613);
} else {
if((state_val_38616 === (32))){
var inst_38568 = (state_38615[(16)]);
var inst_38573 = inst_38568.cljs$lang$protocol_mask$partition0$;
var inst_38574 = (inst_38573 & (64));
var inst_38575 = inst_38568.cljs$core$ISeq$;
var inst_38576 = (cljs.core.PROTOCOL_SENTINEL === inst_38575);
var inst_38577 = ((inst_38574) || (inst_38576));
var state_38615__$1 = state_38615;
if(cljs.core.truth_(inst_38577)){
var statearr_38635_38715 = state_38615__$1;
(statearr_38635_38715[(1)] = (35));

} else {
var statearr_38636_38716 = state_38615__$1;
(statearr_38636_38716[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (40))){
var inst_38590 = (state_38615[(20)]);
var inst_38589 = (state_38615[(2)]);
var inst_38590__$1 = cljs.core.get.call(null,inst_38589,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38591 = cljs.core.get.call(null,inst_38589,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38592 = cljs.core.not_empty.call(null,inst_38590__$1);
var state_38615__$1 = (function (){var statearr_38637 = state_38615;
(statearr_38637[(21)] = inst_38591);

(statearr_38637[(20)] = inst_38590__$1);

return statearr_38637;
})();
if(cljs.core.truth_(inst_38592)){
var statearr_38638_38717 = state_38615__$1;
(statearr_38638_38717[(1)] = (41));

} else {
var statearr_38639_38718 = state_38615__$1;
(statearr_38639_38718[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (33))){
var state_38615__$1 = state_38615;
var statearr_38640_38719 = state_38615__$1;
(statearr_38640_38719[(2)] = false);

(statearr_38640_38719[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (13))){
var inst_38488 = (state_38615[(22)]);
var inst_38492 = cljs.core.chunk_first.call(null,inst_38488);
var inst_38493 = cljs.core.chunk_rest.call(null,inst_38488);
var inst_38494 = cljs.core.count.call(null,inst_38492);
var inst_38475 = inst_38493;
var inst_38476 = inst_38492;
var inst_38477 = inst_38494;
var inst_38478 = (0);
var state_38615__$1 = (function (){var statearr_38641 = state_38615;
(statearr_38641[(7)] = inst_38476);

(statearr_38641[(8)] = inst_38477);

(statearr_38641[(9)] = inst_38478);

(statearr_38641[(10)] = inst_38475);

return statearr_38641;
})();
var statearr_38642_38720 = state_38615__$1;
(statearr_38642_38720[(2)] = null);

(statearr_38642_38720[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (22))){
var inst_38531 = (state_38615[(23)]);
var inst_38532 = (state_38615[(24)]);
var inst_38528 = (state_38615[(19)]);
var inst_38536 = (state_38615[(25)]);
var inst_38531__$1 = (state_38615[(2)]);
var inst_38532__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38531__$1);
var inst_38533 = (function (){var all_files = inst_38528;
var res_SINGLEQUOTE_ = inst_38531__$1;
var res = inst_38532__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38531,inst_38532,inst_38528,inst_38536,inst_38531__$1,inst_38532__$1,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38457_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38457_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38531,inst_38532,inst_38528,inst_38536,inst_38531__$1,inst_38532__$1,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38534 = cljs.core.filter.call(null,inst_38533,inst_38531__$1);
var inst_38535 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38536__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38535);
var inst_38537 = cljs.core.not_empty.call(null,inst_38536__$1);
var state_38615__$1 = (function (){var statearr_38643 = state_38615;
(statearr_38643[(23)] = inst_38531__$1);

(statearr_38643[(24)] = inst_38532__$1);

(statearr_38643[(25)] = inst_38536__$1);

(statearr_38643[(26)] = inst_38534);

return statearr_38643;
})();
if(cljs.core.truth_(inst_38537)){
var statearr_38644_38721 = state_38615__$1;
(statearr_38644_38721[(1)] = (23));

} else {
var statearr_38645_38722 = state_38615__$1;
(statearr_38645_38722[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (36))){
var state_38615__$1 = state_38615;
var statearr_38646_38723 = state_38615__$1;
(statearr_38646_38723[(2)] = false);

(statearr_38646_38723[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (41))){
var inst_38590 = (state_38615[(20)]);
var inst_38594 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38595 = cljs.core.map.call(null,inst_38594,inst_38590);
var inst_38596 = cljs.core.pr_str.call(null,inst_38595);
var inst_38597 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38596)].join('');
var inst_38598 = figwheel.client.utils.log.call(null,inst_38597);
var state_38615__$1 = state_38615;
var statearr_38647_38724 = state_38615__$1;
(statearr_38647_38724[(2)] = inst_38598);

(statearr_38647_38724[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (43))){
var inst_38591 = (state_38615[(21)]);
var inst_38601 = (state_38615[(2)]);
var inst_38602 = cljs.core.not_empty.call(null,inst_38591);
var state_38615__$1 = (function (){var statearr_38648 = state_38615;
(statearr_38648[(27)] = inst_38601);

return statearr_38648;
})();
if(cljs.core.truth_(inst_38602)){
var statearr_38649_38725 = state_38615__$1;
(statearr_38649_38725[(1)] = (44));

} else {
var statearr_38650_38726 = state_38615__$1;
(statearr_38650_38726[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (29))){
var inst_38568 = (state_38615[(16)]);
var inst_38531 = (state_38615[(23)]);
var inst_38532 = (state_38615[(24)]);
var inst_38528 = (state_38615[(19)]);
var inst_38536 = (state_38615[(25)]);
var inst_38534 = (state_38615[(26)]);
var inst_38564 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38567 = (function (){var all_files = inst_38528;
var res_SINGLEQUOTE_ = inst_38531;
var res = inst_38532;
var files_not_loaded = inst_38534;
var dependencies_that_loaded = inst_38536;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38568,inst_38531,inst_38532,inst_38528,inst_38536,inst_38534,inst_38564,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38566){
var map__38651 = p__38566;
var map__38651__$1 = ((((!((map__38651 == null)))?(((((map__38651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38651):map__38651);
var namespace = cljs.core.get.call(null,map__38651__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38568,inst_38531,inst_38532,inst_38528,inst_38536,inst_38534,inst_38564,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38568__$1 = cljs.core.group_by.call(null,inst_38567,inst_38534);
var inst_38570 = (inst_38568__$1 == null);
var inst_38571 = cljs.core.not.call(null,inst_38570);
var state_38615__$1 = (function (){var statearr_38653 = state_38615;
(statearr_38653[(28)] = inst_38564);

(statearr_38653[(16)] = inst_38568__$1);

return statearr_38653;
})();
if(inst_38571){
var statearr_38654_38727 = state_38615__$1;
(statearr_38654_38727[(1)] = (32));

} else {
var statearr_38655_38728 = state_38615__$1;
(statearr_38655_38728[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (44))){
var inst_38591 = (state_38615[(21)]);
var inst_38604 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38591);
var inst_38605 = cljs.core.pr_str.call(null,inst_38604);
var inst_38606 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38605)].join('');
var inst_38607 = figwheel.client.utils.log.call(null,inst_38606);
var state_38615__$1 = state_38615;
var statearr_38656_38729 = state_38615__$1;
(statearr_38656_38729[(2)] = inst_38607);

(statearr_38656_38729[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (6))){
var inst_38509 = (state_38615[(2)]);
var state_38615__$1 = state_38615;
var statearr_38657_38730 = state_38615__$1;
(statearr_38657_38730[(2)] = inst_38509);

(statearr_38657_38730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (28))){
var inst_38534 = (state_38615[(26)]);
var inst_38561 = (state_38615[(2)]);
var inst_38562 = cljs.core.not_empty.call(null,inst_38534);
var state_38615__$1 = (function (){var statearr_38658 = state_38615;
(statearr_38658[(29)] = inst_38561);

return statearr_38658;
})();
if(cljs.core.truth_(inst_38562)){
var statearr_38659_38731 = state_38615__$1;
(statearr_38659_38731[(1)] = (29));

} else {
var statearr_38660_38732 = state_38615__$1;
(statearr_38660_38732[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (25))){
var inst_38532 = (state_38615[(24)]);
var inst_38548 = (state_38615[(2)]);
var inst_38549 = cljs.core.not_empty.call(null,inst_38532);
var state_38615__$1 = (function (){var statearr_38661 = state_38615;
(statearr_38661[(30)] = inst_38548);

return statearr_38661;
})();
if(cljs.core.truth_(inst_38549)){
var statearr_38662_38733 = state_38615__$1;
(statearr_38662_38733[(1)] = (26));

} else {
var statearr_38663_38734 = state_38615__$1;
(statearr_38663_38734[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (34))){
var inst_38584 = (state_38615[(2)]);
var state_38615__$1 = state_38615;
if(cljs.core.truth_(inst_38584)){
var statearr_38664_38735 = state_38615__$1;
(statearr_38664_38735[(1)] = (38));

} else {
var statearr_38665_38736 = state_38615__$1;
(statearr_38665_38736[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (17))){
var state_38615__$1 = state_38615;
var statearr_38666_38737 = state_38615__$1;
(statearr_38666_38737[(2)] = recompile_dependents);

(statearr_38666_38737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (3))){
var state_38615__$1 = state_38615;
var statearr_38667_38738 = state_38615__$1;
(statearr_38667_38738[(2)] = null);

(statearr_38667_38738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (12))){
var inst_38505 = (state_38615[(2)]);
var state_38615__$1 = state_38615;
var statearr_38668_38739 = state_38615__$1;
(statearr_38668_38739[(2)] = inst_38505);

(statearr_38668_38739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (2))){
var inst_38467 = (state_38615[(13)]);
var inst_38474 = cljs.core.seq.call(null,inst_38467);
var inst_38475 = inst_38474;
var inst_38476 = null;
var inst_38477 = (0);
var inst_38478 = (0);
var state_38615__$1 = (function (){var statearr_38669 = state_38615;
(statearr_38669[(7)] = inst_38476);

(statearr_38669[(8)] = inst_38477);

(statearr_38669[(9)] = inst_38478);

(statearr_38669[(10)] = inst_38475);

return statearr_38669;
})();
var statearr_38670_38740 = state_38615__$1;
(statearr_38670_38740[(2)] = null);

(statearr_38670_38740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (23))){
var inst_38531 = (state_38615[(23)]);
var inst_38532 = (state_38615[(24)]);
var inst_38528 = (state_38615[(19)]);
var inst_38536 = (state_38615[(25)]);
var inst_38534 = (state_38615[(26)]);
var inst_38539 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38541 = (function (){var all_files = inst_38528;
var res_SINGLEQUOTE_ = inst_38531;
var res = inst_38532;
var files_not_loaded = inst_38534;
var dependencies_that_loaded = inst_38536;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38531,inst_38532,inst_38528,inst_38536,inst_38534,inst_38539,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38540){
var map__38671 = p__38540;
var map__38671__$1 = ((((!((map__38671 == null)))?(((((map__38671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38671):map__38671);
var request_url = cljs.core.get.call(null,map__38671__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38531,inst_38532,inst_38528,inst_38536,inst_38534,inst_38539,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38542 = cljs.core.reverse.call(null,inst_38536);
var inst_38543 = cljs.core.map.call(null,inst_38541,inst_38542);
var inst_38544 = cljs.core.pr_str.call(null,inst_38543);
var inst_38545 = figwheel.client.utils.log.call(null,inst_38544);
var state_38615__$1 = (function (){var statearr_38673 = state_38615;
(statearr_38673[(31)] = inst_38539);

return statearr_38673;
})();
var statearr_38674_38741 = state_38615__$1;
(statearr_38674_38741[(2)] = inst_38545);

(statearr_38674_38741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (35))){
var state_38615__$1 = state_38615;
var statearr_38675_38742 = state_38615__$1;
(statearr_38675_38742[(2)] = true);

(statearr_38675_38742[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (19))){
var inst_38518 = (state_38615[(12)]);
var inst_38524 = figwheel.client.file_reloading.expand_files.call(null,inst_38518);
var state_38615__$1 = state_38615;
var statearr_38676_38743 = state_38615__$1;
(statearr_38676_38743[(2)] = inst_38524);

(statearr_38676_38743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (11))){
var state_38615__$1 = state_38615;
var statearr_38677_38744 = state_38615__$1;
(statearr_38677_38744[(2)] = null);

(statearr_38677_38744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (9))){
var inst_38507 = (state_38615[(2)]);
var state_38615__$1 = state_38615;
var statearr_38678_38745 = state_38615__$1;
(statearr_38678_38745[(2)] = inst_38507);

(statearr_38678_38745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (5))){
var inst_38477 = (state_38615[(8)]);
var inst_38478 = (state_38615[(9)]);
var inst_38480 = (inst_38478 < inst_38477);
var inst_38481 = inst_38480;
var state_38615__$1 = state_38615;
if(cljs.core.truth_(inst_38481)){
var statearr_38679_38746 = state_38615__$1;
(statearr_38679_38746[(1)] = (7));

} else {
var statearr_38680_38747 = state_38615__$1;
(statearr_38680_38747[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (14))){
var inst_38488 = (state_38615[(22)]);
var inst_38497 = cljs.core.first.call(null,inst_38488);
var inst_38498 = figwheel.client.file_reloading.eval_body.call(null,inst_38497,opts);
var inst_38499 = cljs.core.next.call(null,inst_38488);
var inst_38475 = inst_38499;
var inst_38476 = null;
var inst_38477 = (0);
var inst_38478 = (0);
var state_38615__$1 = (function (){var statearr_38681 = state_38615;
(statearr_38681[(7)] = inst_38476);

(statearr_38681[(8)] = inst_38477);

(statearr_38681[(32)] = inst_38498);

(statearr_38681[(9)] = inst_38478);

(statearr_38681[(10)] = inst_38475);

return statearr_38681;
})();
var statearr_38682_38748 = state_38615__$1;
(statearr_38682_38748[(2)] = null);

(statearr_38682_38748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (45))){
var state_38615__$1 = state_38615;
var statearr_38683_38749 = state_38615__$1;
(statearr_38683_38749[(2)] = null);

(statearr_38683_38749[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (26))){
var inst_38531 = (state_38615[(23)]);
var inst_38532 = (state_38615[(24)]);
var inst_38528 = (state_38615[(19)]);
var inst_38536 = (state_38615[(25)]);
var inst_38534 = (state_38615[(26)]);
var inst_38551 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38553 = (function (){var all_files = inst_38528;
var res_SINGLEQUOTE_ = inst_38531;
var res = inst_38532;
var files_not_loaded = inst_38534;
var dependencies_that_loaded = inst_38536;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38531,inst_38532,inst_38528,inst_38536,inst_38534,inst_38551,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38552){
var map__38684 = p__38552;
var map__38684__$1 = ((((!((map__38684 == null)))?(((((map__38684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38684):map__38684);
var namespace = cljs.core.get.call(null,map__38684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38684__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38531,inst_38532,inst_38528,inst_38536,inst_38534,inst_38551,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38554 = cljs.core.map.call(null,inst_38553,inst_38532);
var inst_38555 = cljs.core.pr_str.call(null,inst_38554);
var inst_38556 = figwheel.client.utils.log.call(null,inst_38555);
var inst_38557 = (function (){var all_files = inst_38528;
var res_SINGLEQUOTE_ = inst_38531;
var res = inst_38532;
var files_not_loaded = inst_38534;
var dependencies_that_loaded = inst_38536;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38531,inst_38532,inst_38528,inst_38536,inst_38534,inst_38551,inst_38553,inst_38554,inst_38555,inst_38556,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38531,inst_38532,inst_38528,inst_38536,inst_38534,inst_38551,inst_38553,inst_38554,inst_38555,inst_38556,state_val_38616,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38558 = setTimeout(inst_38557,(10));
var state_38615__$1 = (function (){var statearr_38686 = state_38615;
(statearr_38686[(33)] = inst_38556);

(statearr_38686[(34)] = inst_38551);

return statearr_38686;
})();
var statearr_38687_38750 = state_38615__$1;
(statearr_38687_38750[(2)] = inst_38558);

(statearr_38687_38750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (16))){
var state_38615__$1 = state_38615;
var statearr_38688_38751 = state_38615__$1;
(statearr_38688_38751[(2)] = reload_dependents);

(statearr_38688_38751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (38))){
var inst_38568 = (state_38615[(16)]);
var inst_38586 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38568);
var state_38615__$1 = state_38615;
var statearr_38689_38752 = state_38615__$1;
(statearr_38689_38752[(2)] = inst_38586);

(statearr_38689_38752[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (30))){
var state_38615__$1 = state_38615;
var statearr_38690_38753 = state_38615__$1;
(statearr_38690_38753[(2)] = null);

(statearr_38690_38753[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (10))){
var inst_38488 = (state_38615[(22)]);
var inst_38490 = cljs.core.chunked_seq_QMARK_.call(null,inst_38488);
var state_38615__$1 = state_38615;
if(inst_38490){
var statearr_38691_38754 = state_38615__$1;
(statearr_38691_38754[(1)] = (13));

} else {
var statearr_38692_38755 = state_38615__$1;
(statearr_38692_38755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (18))){
var inst_38522 = (state_38615[(2)]);
var state_38615__$1 = state_38615;
if(cljs.core.truth_(inst_38522)){
var statearr_38693_38756 = state_38615__$1;
(statearr_38693_38756[(1)] = (19));

} else {
var statearr_38694_38757 = state_38615__$1;
(statearr_38694_38757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (42))){
var state_38615__$1 = state_38615;
var statearr_38695_38758 = state_38615__$1;
(statearr_38695_38758[(2)] = null);

(statearr_38695_38758[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (37))){
var inst_38581 = (state_38615[(2)]);
var state_38615__$1 = state_38615;
var statearr_38696_38759 = state_38615__$1;
(statearr_38696_38759[(2)] = inst_38581);

(statearr_38696_38759[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38616 === (8))){
var inst_38488 = (state_38615[(22)]);
var inst_38475 = (state_38615[(10)]);
var inst_38488__$1 = cljs.core.seq.call(null,inst_38475);
var state_38615__$1 = (function (){var statearr_38697 = state_38615;
(statearr_38697[(22)] = inst_38488__$1);

return statearr_38697;
})();
if(inst_38488__$1){
var statearr_38698_38760 = state_38615__$1;
(statearr_38698_38760[(1)] = (10));

} else {
var statearr_38699_38761 = state_38615__$1;
(statearr_38699_38761[(1)] = (11));

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
}
});})(c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26640__auto__,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto____0 = (function (){
var statearr_38700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38700[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto__);

(statearr_38700[(1)] = (1));

return statearr_38700;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto____1 = (function (state_38615){
while(true){
var ret_value__26642__auto__ = (function (){try{while(true){
var result__26643__auto__ = switch__26640__auto__.call(null,state_38615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26643__auto__;
}
break;
}
}catch (e38701){if((e38701 instanceof Object)){
var ex__26644__auto__ = e38701;
var statearr_38702_38762 = state_38615;
(statearr_38702_38762[(5)] = ex__26644__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38763 = state_38615;
state_38615 = G__38763;
continue;
} else {
return ret_value__26642__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto__ = function(state_38615){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto____1.call(this,state_38615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26641__auto__;
})()
;})(switch__26640__auto__,c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26730__auto__ = (function (){var statearr_38703 = f__26729__auto__.call(null);
(statearr_38703[(6)] = c__26728__auto__);

return statearr_38703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26730__auto__);
});})(c__26728__auto__,map__38460,map__38460__$1,opts,before_jsload,on_jsload,reload_dependents,map__38461,map__38461__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26728__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38766,link){
var map__38767 = p__38766;
var map__38767__$1 = ((((!((map__38767 == null)))?(((((map__38767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38767):map__38767);
var file = cljs.core.get.call(null,map__38767__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38767,map__38767__$1,file){
return (function (p1__38764_SHARP_,p2__38765_SHARP_){
if(cljs.core._EQ_.call(null,p1__38764_SHARP_,p2__38765_SHARP_)){
return p1__38764_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38767,map__38767__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38770){
var map__38771 = p__38770;
var map__38771__$1 = ((((!((map__38771 == null)))?(((((map__38771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38771):map__38771);
var match_length = cljs.core.get.call(null,map__38771__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38771__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38769_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38769_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38773_SHARP_,p2__38774_SHARP_){
return cljs.core.assoc.call(null,p1__38773_SHARP_,cljs.core.get.call(null,p2__38774_SHARP_,key),p2__38774_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38775 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38775);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38775);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38776,p__38777){
var map__38778 = p__38776;
var map__38778__$1 = ((((!((map__38778 == null)))?(((((map__38778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38778):map__38778);
var on_cssload = cljs.core.get.call(null,map__38778__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38779 = p__38777;
var map__38779__$1 = ((((!((map__38779 == null)))?(((((map__38779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38779):map__38779);
var files_msg = map__38779__$1;
var files = cljs.core.get.call(null,map__38779__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1554122668931
