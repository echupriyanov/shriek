// Compiled by ClojureScript 0.0-2173
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.Timer');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.async.Delay');
goog.require('goog.dom');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.dom.forms');
goog.require('goog.Timer');
goog.require('domina.xpath');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('domina');
goog.require('goog.net.XhrIo');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('domina.css');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('domina.css');
enfocus.core.ISelector = (function (){var obj16869 = {};return obj16869;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.select[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.select["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.select[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.select["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.select[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.select["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;
enfocus.core.ITransform = (function (){var obj16871 = {};return obj16871;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;
enfocus.core.debug = false;
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__3431__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__3431__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3431__auto__;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){if((nl === window))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else
{return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__16872_SHARP_){if(typeof p1__16872_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__16872_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__16872_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__16879_16885 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__16880_16886 = null;var count__16881_16887 = 0;var i__16882_16888 = 0;while(true){
if((i__16882_16888 < count__16881_16887))
{var vec__16883_16889 = cljs.core._nth.call(null,chunk__16880_16886,i__16882_16888);var attr_16890 = cljs.core.nth.call(null,vec__16883_16889,0,null);var value_16891 = cljs.core.nth.call(null,vec__16883_16889,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_16890),value_16891);
{
var G__16892 = seq__16879_16885;
var G__16893 = chunk__16880_16886;
var G__16894 = count__16881_16887;
var G__16895 = (i__16882_16888 + 1);
seq__16879_16885 = G__16892;
chunk__16880_16886 = G__16893;
count__16881_16887 = G__16894;
i__16882_16888 = G__16895;
continue;
}
} else
{var temp__4092__auto___16896 = cljs.core.seq.call(null,seq__16879_16885);if(temp__4092__auto___16896)
{var seq__16879_16897__$1 = temp__4092__auto___16896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16879_16897__$1))
{var c__4191__auto___16898 = cljs.core.chunk_first.call(null,seq__16879_16897__$1);{
var G__16899 = cljs.core.chunk_rest.call(null,seq__16879_16897__$1);
var G__16900 = c__4191__auto___16898;
var G__16901 = cljs.core.count.call(null,c__4191__auto___16898);
var G__16902 = 0;
seq__16879_16885 = G__16899;
chunk__16880_16886 = G__16900;
count__16881_16887 = G__16901;
i__16882_16888 = G__16902;
continue;
}
} else
{var vec__16884_16903 = cljs.core.first.call(null,seq__16879_16897__$1);var attr_16904 = cljs.core.nth.call(null,vec__16884_16903,0,null);var value_16905 = cljs.core.nth.call(null,vec__16884_16903,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_16904),value_16905);
{
var G__16906 = cljs.core.next.call(null,seq__16879_16897__$1);
var G__16907 = null;
var G__16908 = 0;
var G__16909 = 0;
seq__16879_16885 = G__16906;
chunk__16880_16886 = G__16907;
count__16881_16887 = G__16908;
i__16882_16888 = G__16909;
continue;
}
}
} else
{}
}
break;
}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){var seq__16914 = cljs.core.seq.call(null,values);var chunk__16915 = null;var count__16916 = 0;var i__16917 = 0;while(true){
if((i__16917 < count__16916))
{var attr = cljs.core._nth.call(null,chunk__16915,i__16917);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__16918 = seq__16914;
var G__16919 = chunk__16915;
var G__16920 = count__16916;
var G__16921 = (i__16917 + 1);
seq__16914 = G__16918;
chunk__16915 = G__16919;
count__16916 = G__16920;
i__16917 = G__16921;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16914);if(temp__4092__auto__)
{var seq__16914__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16914__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__16914__$1);{
var G__16922 = cljs.core.chunk_rest.call(null,seq__16914__$1);
var G__16923 = c__4191__auto__;
var G__16924 = cljs.core.count.call(null,c__4191__auto__);
var G__16925 = 0;
seq__16914 = G__16922;
chunk__16915 = G__16923;
count__16916 = G__16924;
i__16917 = G__16925;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__16914__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__16926 = cljs.core.next.call(null,seq__16914__$1);
var G__16927 = null;
var G__16928 = 0;
var G__16929 = 0;
seq__16914 = G__16926;
chunk__16915 = G__16927;
count__16916 = G__16928;
i__16917 = G__16929;
continue;
}
}
} else
{return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){if((step < 0))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_.call(null,ats))
{var seq__16936_16942 = cljs.core.seq.call(null,ats);var chunk__16937_16943 = null;var count__16938_16944 = 0;var i__16939_16945 = 0;while(true){
if((i__16939_16945 < count__16938_16944))
{var vec__16940_16946 = cljs.core._nth.call(null,chunk__16937_16943,i__16939_16945);var k_16947 = cljs.core.nth.call(null,vec__16940_16946,0,null);var v_16948 = cljs.core.nth.call(null,vec__16940_16946,1,null);add_map_attrs.call(null,elem,k_16947,v_16948);
{
var G__16949 = seq__16936_16942;
var G__16950 = chunk__16937_16943;
var G__16951 = count__16938_16944;
var G__16952 = (i__16939_16945 + 1);
seq__16936_16942 = G__16949;
chunk__16937_16943 = G__16950;
count__16938_16944 = G__16951;
i__16939_16945 = G__16952;
continue;
}
} else
{var temp__4092__auto___16953 = cljs.core.seq.call(null,seq__16936_16942);if(temp__4092__auto___16953)
{var seq__16936_16954__$1 = temp__4092__auto___16953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16936_16954__$1))
{var c__4191__auto___16955 = cljs.core.chunk_first.call(null,seq__16936_16954__$1);{
var G__16956 = cljs.core.chunk_rest.call(null,seq__16936_16954__$1);
var G__16957 = c__4191__auto___16955;
var G__16958 = cljs.core.count.call(null,c__4191__auto___16955);
var G__16959 = 0;
seq__16936_16942 = G__16956;
chunk__16937_16943 = G__16957;
count__16938_16944 = G__16958;
i__16939_16945 = G__16959;
continue;
}
} else
{var vec__16941_16960 = cljs.core.first.call(null,seq__16936_16954__$1);var k_16961 = cljs.core.nth.call(null,vec__16941_16960,0,null);var v_16962 = cljs.core.nth.call(null,vec__16941_16960,1,null);add_map_attrs.call(null,elem,k_16961,v_16962);
{
var G__16963 = cljs.core.next.call(null,seq__16936_16954__$1);
var G__16964 = null;
var G__16965 = 0;
var G__16966 = 0;
seq__16936_16942 = G__16963;
chunk__16937_16943 = G__16964;
count__16938_16944 = G__16965;
i__16939_16945 = G__16966;
continue;
}
}
} else
{}
}
break;
}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){var div = goog.dom.createDom("div",enfocus.core.hide_style);if(cljs.core._EQ_.call(null,child.nodeType,11))
{goog.dom.appendChild(div,child);
} else
{enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));
var seq__16971_16975 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__16972_16976 = null;var count__16973_16977 = 0;var i__16974_16978 = 0;while(true){
if((i__16974_16978 < count__16973_16977))
{var node_16979 = cljs.core._nth.call(null,chunk__16972_16976,i__16974_16978);goog.dom.appendChild(div,node_16979);
{
var G__16980 = seq__16971_16975;
var G__16981 = chunk__16972_16976;
var G__16982 = count__16973_16977;
var G__16983 = (i__16974_16978 + 1);
seq__16971_16975 = G__16980;
chunk__16972_16976 = G__16981;
count__16973_16977 = G__16982;
i__16974_16978 = G__16983;
continue;
}
} else
{var temp__4092__auto___16984 = cljs.core.seq.call(null,seq__16971_16975);if(temp__4092__auto___16984)
{var seq__16971_16985__$1 = temp__4092__auto___16984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16971_16985__$1))
{var c__4191__auto___16986 = cljs.core.chunk_first.call(null,seq__16971_16985__$1);{
var G__16987 = cljs.core.chunk_rest.call(null,seq__16971_16985__$1);
var G__16988 = c__4191__auto___16986;
var G__16989 = cljs.core.count.call(null,c__4191__auto___16986);
var G__16990 = 0;
seq__16971_16975 = G__16987;
chunk__16972_16976 = G__16988;
count__16973_16977 = G__16989;
i__16974_16978 = G__16990;
continue;
}
} else
{var node_16991 = cljs.core.first.call(null,seq__16971_16985__$1);goog.dom.appendChild(div,node_16991);
{
var G__16992 = cljs.core.next.call(null,seq__16971_16985__$1);
var G__16993 = null;
var G__16994 = 0;
var G__16995 = 0;
seq__16971_16975 = G__16992;
chunk__16972_16976 = G__16993;
count__16973_16977 = G__16994;
i__16974_16978 = G__16995;
continue;
}
}
} else
{}
}
break;
}
}
goog.dom.appendChild(goog.dom.getDocument().documentElement,div);
return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){var child = div.childNodes;var frag = document.createDocumentFragment();goog.dom.append(frag,child);
goog.dom.removeNode(div);
return frag;
});
enfocus.core.last_element_child = (function last_element_child(node){return goog.dom.getLastElementChild(node);
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,(function (a,b,c,d){return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
}))], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16996_SHARP_){var id = p1__16996_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__16996_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__16998 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__16998,0,null);var txt = cljs.core.nth.call(null,vec__16998,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;goog.events.listen(req,goog.net.EventType.COMPLETE,(function (){callback.call(null,req);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));var frag = document.createDocumentFragment();enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));
var seq__17003_17007 = cljs.core.seq.call(null,dfa);var chunk__17004_17008 = null;var count__17005_17009 = 0;var i__17006_17010 = 0;while(true){
if((i__17006_17010 < count__17005_17009))
{var df_17011 = cljs.core._nth.call(null,chunk__17004_17008,i__17006_17010);goog.dom.append(frag,df_17011);
{
var G__17012 = seq__17003_17007;
var G__17013 = chunk__17004_17008;
var G__17014 = count__17005_17009;
var G__17015 = (i__17006_17010 + 1);
seq__17003_17007 = G__17012;
chunk__17004_17008 = G__17013;
count__17005_17009 = G__17014;
i__17006_17010 = G__17015;
continue;
}
} else
{var temp__4092__auto___17016 = cljs.core.seq.call(null,seq__17003_17007);if(temp__4092__auto___17016)
{var seq__17003_17017__$1 = temp__4092__auto___17016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17003_17017__$1))
{var c__4191__auto___17018 = cljs.core.chunk_first.call(null,seq__17003_17017__$1);{
var G__17019 = cljs.core.chunk_rest.call(null,seq__17003_17017__$1);
var G__17020 = c__4191__auto___17018;
var G__17021 = cljs.core.count.call(null,c__4191__auto___17018);
var G__17022 = 0;
seq__17003_17007 = G__17019;
chunk__17004_17008 = G__17020;
count__17005_17009 = G__17021;
i__17006_17010 = G__17022;
continue;
}
} else
{var df_17023 = cljs.core.first.call(null,seq__17003_17017__$1);goog.dom.append(frag,df_17023);
{
var G__17024 = cljs.core.next.call(null,seq__17003_17017__$1);
var G__17025 = null;
var G__17026 = 0;
var G__17027 = 0;
seq__17003_17007 = G__17024;
chunk__17004_17008 = G__17025;
count__17005_17009 = G__17026;
i__17006_17010 = G__17027;
continue;
}
}
} else
{}
}
break;
}
return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);if(cljs.core.truth_(nod))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){var sel_str = enfocus.core.create_sel_str.call(null,sel);var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));if(cljs.core.truth_(cache))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else
{var vec__17030 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__17030,0,null);var tdom = cljs.core.nth.call(null,vec__17030,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__17030,sym,tdom,dom,tsnip){
return (function (p1__17028_SHARP_){return p1__17028_SHARP_.outerHTML;
});})(vec__17030,sym,tdom,dom,tsnip))
,tsnip));enfocus.core.remove_node_return_child.call(null,dom);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to
* all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function() {
var extr_multi_node = null;
var extr_multi_node__1 = (function (func){return extr_multi_node.call(null,func,null);
});
var extr_multi_node__2 = (function (func,filt){var trans = (function trans(pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var result = cljs.core.map.call(null,func,pnod_col);var result__$1 = (cljs.core.truth_(filt)?cljs.core.filter.call(null,filt,result):result);if((cljs.core.count.call(null,result__$1) <= 1))
{return cljs.core.first.call(null,result__$1);
} else
{return result__$1;
}
});if(typeof enfocus.core.t17035 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t17035 = (function (trans,filt,func,extr_multi_node,meta17036){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta17036 = meta17036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t17035.cljs$lang$type = true;
enfocus.core.t17035.cljs$lang$ctorStr = "enfocus.core/t17035";
enfocus.core.t17035.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t17035");
});
enfocus.core.t17035.prototype.call = (function() {
var G__17039 = null;
var G__17039__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__17039__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__17039 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17039__2.call(this,self__,nodes);
case 3:
return G__17039__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17039;
})()
;
enfocus.core.t17035.prototype.apply = (function (self__,args17038){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17038)));
});
enfocus.core.t17035.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17035.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17035.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t17035.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17035.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17037){var self__ = this;
var _17037__$1 = this;return self__.meta17036;
});
enfocus.core.t17035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17037,meta17036__$1){var self__ = this;
var _17037__$1 = this;return (new enfocus.core.t17035(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta17036__$1));
});
enfocus.core.__GT_t17035 = (function __GT_t17035(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta17036){return (new enfocus.core.t17035(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta17036));
});
}
return (new enfocus.core.t17035(trans,filt,func,extr_multi_node,null));
});
extr_multi_node = function(func,filt){
switch(arguments.length){
case 1:
return extr_multi_node__1.call(this,func);
case 2:
return extr_multi_node__2.call(this,func,filt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extr_multi_node.cljs$core$IFn$_invoke$arity$1 = extr_multi_node__1;
extr_multi_node.cljs$core$IFn$_invoke$arity$2 = extr_multi_node__2;
return extr_multi_node;
})()
;
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){var trans = (function (nodes,chain){var val = func.call(null,nodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t17049 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t17049 = (function (trans,func,multi_node_chain,meta17050){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta17050 = meta17050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t17049.cljs$lang$type = true;
enfocus.core.t17049.cljs$lang$ctorStr = "enfocus.core/t17049";
enfocus.core.t17049.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t17049");
});
enfocus.core.t17049.prototype.call = (function() {
var G__17057 = null;
var G__17057__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__17057__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__17057 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17057__2.call(this,self__,nodes);
case 3:
return G__17057__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17057;
})()
;
enfocus.core.t17049.prototype.apply = (function (self__,args17052){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17052)));
});
enfocus.core.t17049.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17049.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17049.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t17049.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17049.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17051){var self__ = this;
var _17051__$1 = this;return self__.meta17050;
});
enfocus.core.t17049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17051,meta17050__$1){var self__ = this;
var _17051__$1 = this;return (new enfocus.core.t17049(self__.trans,self__.func,self__.multi_node_chain,meta17050__$1));
});
enfocus.core.__GT_t17049 = (function __GT_t17049(trans__$1,func__$1,multi_node_chain__$1,meta17050){return (new enfocus.core.t17049(trans__$1,func__$1,multi_node_chain__$1,meta17050));
});
}
return (new enfocus.core.t17049(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__17040_SHARP_){return domina.nodes.call(null,p1__17040_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t17053 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t17053 = (function (trans,func,values,multi_node_chain,meta17054){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta17054 = meta17054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t17053.cljs$lang$type = true;
enfocus.core.t17053.cljs$lang$ctorStr = "enfocus.core/t17053";
enfocus.core.t17053.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t17053");
});
enfocus.core.t17053.prototype.call = (function() {
var G__17058 = null;
var G__17058__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__17058__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__17058 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17058__2.call(this,self__,nodes);
case 3:
return G__17058__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17058;
})()
;
enfocus.core.t17053.prototype.apply = (function (self__,args17056){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17056)));
});
enfocus.core.t17053.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17053.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17053.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t17053.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17053.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17055){var self__ = this;
var _17055__$1 = this;return self__.meta17054;
});
enfocus.core.t17053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17055,meta17054__$1){var self__ = this;
var _17055__$1 = this;return (new enfocus.core.t17053(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta17054__$1));
});
enfocus.core.__GT_t17053 = (function __GT_t17053(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta17054){return (new enfocus.core.t17053(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta17054));
});
}
return (new enfocus.core.t17053(trans,func,values,multi_node_chain,null));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17059_SHARP_,p2__17060_SHARP_){domina.destroy_children_BANG_.call(null,p1__17059_SHARP_);
return domina.append_BANG_.call(null,p1__17059_SHARP_,p2__17060_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__17061){
var values = cljs.core.seq(arglist__17061);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__17062_SHARP_){return domina.set_html_BANG_.call(null,p1__17062_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__17063_SHARP_){var seq__17070 = cljs.core.seq.call(null,pairs);var chunk__17071 = null;var count__17072 = 0;var i__17073 = 0;while(true){
if((i__17073 < count__17072))
{var vec__17074 = cljs.core._nth.call(null,chunk__17071,i__17073);var name = cljs.core.nth.call(null,vec__17074,0,null);var value = cljs.core.nth.call(null,vec__17074,1,null);domina.set_attr_BANG_.call(null,p1__17063_SHARP_,name,value);
{
var G__17076 = seq__17070;
var G__17077 = chunk__17071;
var G__17078 = count__17072;
var G__17079 = (i__17073 + 1);
seq__17070 = G__17076;
chunk__17071 = G__17077;
count__17072 = G__17078;
i__17073 = G__17079;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17070);if(temp__4092__auto__)
{var seq__17070__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17070__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17070__$1);{
var G__17080 = cljs.core.chunk_rest.call(null,seq__17070__$1);
var G__17081 = c__4191__auto__;
var G__17082 = cljs.core.count.call(null,c__4191__auto__);
var G__17083 = 0;
seq__17070 = G__17080;
chunk__17071 = G__17081;
count__17072 = G__17082;
i__17073 = G__17083;
continue;
}
} else
{var vec__17075 = cljs.core.first.call(null,seq__17070__$1);var name = cljs.core.nth.call(null,vec__17075,0,null);var value = cljs.core.nth.call(null,vec__17075,1,null);domina.set_attr_BANG_.call(null,p1__17063_SHARP_,name,value);
{
var G__17084 = cljs.core.next.call(null,seq__17070__$1);
var G__17085 = null;
var G__17086 = 0;
var G__17087 = 0;
seq__17070 = G__17084;
chunk__17071 = G__17085;
count__17072 = G__17086;
i__17073 = G__17087;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__17088){
var values = cljs.core.seq(arglist__17088);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__17089_SHARP_){var seq__17094 = cljs.core.seq.call(null,values);var chunk__17095 = null;var count__17096 = 0;var i__17097 = 0;while(true){
if((i__17097 < count__17096))
{var name = cljs.core._nth.call(null,chunk__17095,i__17097);domina.remove_attr_BANG_.call(null,p1__17089_SHARP_,name);
{
var G__17098 = seq__17094;
var G__17099 = chunk__17095;
var G__17100 = count__17096;
var G__17101 = (i__17097 + 1);
seq__17094 = G__17098;
chunk__17095 = G__17099;
count__17096 = G__17100;
i__17097 = G__17101;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17094);if(temp__4092__auto__)
{var seq__17094__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17094__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17094__$1);{
var G__17102 = cljs.core.chunk_rest.call(null,seq__17094__$1);
var G__17103 = c__4191__auto__;
var G__17104 = cljs.core.count.call(null,c__4191__auto__);
var G__17105 = 0;
seq__17094 = G__17102;
chunk__17095 = G__17103;
count__17096 = G__17104;
i__17097 = G__17105;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__17094__$1);domina.remove_attr_BANG_.call(null,p1__17089_SHARP_,name);
{
var G__17106 = cljs.core.next.call(null,seq__17094__$1);
var G__17107 = null;
var G__17108 = 0;
var G__17109 = 0;
seq__17094 = G__17106;
chunk__17095 = G__17107;
count__17096 = G__17108;
i__17097 = G__17109;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__17110){
var values = cljs.core.seq(arglist__17110);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__17113){var vec__17114 = p__17113;var n = cljs.core.nth.call(null,vec__17114,0,null);var v = cljs.core.nth.call(null,vec__17114,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__17115){
var forms = cljs.core.seq(arglist__17115);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__17116_SHARP_){var seq__17121 = cljs.core.seq.call(null,values);var chunk__17122 = null;var count__17123 = 0;var i__17124 = 0;while(true){
if((i__17124 < count__17123))
{var val = cljs.core._nth.call(null,chunk__17122,i__17124);domina.add_class_BANG_.call(null,p1__17116_SHARP_,val);
{
var G__17125 = seq__17121;
var G__17126 = chunk__17122;
var G__17127 = count__17123;
var G__17128 = (i__17124 + 1);
seq__17121 = G__17125;
chunk__17122 = G__17126;
count__17123 = G__17127;
i__17124 = G__17128;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17121);if(temp__4092__auto__)
{var seq__17121__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17121__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17121__$1);{
var G__17129 = cljs.core.chunk_rest.call(null,seq__17121__$1);
var G__17130 = c__4191__auto__;
var G__17131 = cljs.core.count.call(null,c__4191__auto__);
var G__17132 = 0;
seq__17121 = G__17129;
chunk__17122 = G__17130;
count__17123 = G__17131;
i__17124 = G__17132;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__17121__$1);domina.add_class_BANG_.call(null,p1__17116_SHARP_,val);
{
var G__17133 = cljs.core.next.call(null,seq__17121__$1);
var G__17134 = null;
var G__17135 = 0;
var G__17136 = 0;
seq__17121 = G__17133;
chunk__17122 = G__17134;
count__17123 = G__17135;
i__17124 = G__17136;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__17137){
var values = cljs.core.seq(arglist__17137);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__17138_SHARP_){var seq__17143 = cljs.core.seq.call(null,values);var chunk__17144 = null;var count__17145 = 0;var i__17146 = 0;while(true){
if((i__17146 < count__17145))
{var val = cljs.core._nth.call(null,chunk__17144,i__17146);domina.remove_class_BANG_.call(null,p1__17138_SHARP_,val);
{
var G__17147 = seq__17143;
var G__17148 = chunk__17144;
var G__17149 = count__17145;
var G__17150 = (i__17146 + 1);
seq__17143 = G__17147;
chunk__17144 = G__17148;
count__17145 = G__17149;
i__17146 = G__17150;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17143);if(temp__4092__auto__)
{var seq__17143__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17143__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17143__$1);{
var G__17151 = cljs.core.chunk_rest.call(null,seq__17143__$1);
var G__17152 = c__4191__auto__;
var G__17153 = cljs.core.count.call(null,c__4191__auto__);
var G__17154 = 0;
seq__17143 = G__17151;
chunk__17144 = G__17152;
count__17145 = G__17153;
i__17146 = G__17154;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__17143__$1);domina.remove_class_BANG_.call(null,p1__17138_SHARP_,val);
{
var G__17155 = cljs.core.next.call(null,seq__17143__$1);
var G__17156 = null;
var G__17157 = 0;
var G__17158 = 0;
seq__17143 = G__17155;
chunk__17144 = G__17156;
count__17145 = G__17157;
i__17146 = G__17158;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__17159){
var values = cljs.core.seq(arglist__17159);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__17160_SHARP_){return domina.set_classes_BANG_.call(null,p1__17160_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__17161){
var values = cljs.core.seq(arglist__17161);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){return (function (pnod){var seq__17166 = cljs.core.seq.call(null,forms);var chunk__17167 = null;var count__17168 = 0;var i__17169 = 0;while(true){
if((i__17169 < count__17168))
{var fun = cljs.core._nth.call(null,chunk__17167,i__17169);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__17170 = seq__17166;
var G__17171 = chunk__17167;
var G__17172 = count__17168;
var G__17173 = (i__17169 + 1);
seq__17166 = G__17170;
chunk__17167 = G__17171;
count__17168 = G__17172;
i__17169 = G__17173;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17166);if(temp__4092__auto__)
{var seq__17166__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17166__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17166__$1);{
var G__17174 = cljs.core.chunk_rest.call(null,seq__17166__$1);
var G__17175 = c__4191__auto__;
var G__17176 = cljs.core.count.call(null,c__4191__auto__);
var G__17177 = 0;
seq__17166 = G__17174;
chunk__17167 = G__17175;
count__17168 = G__17176;
i__17169 = G__17177;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__17166__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__17178 = cljs.core.next.call(null,seq__17166__$1);
var G__17179 = null;
var G__17180 = 0;
var G__17181 = 0;
seq__17166 = G__17178;
chunk__17167 = G__17179;
count__17168 = G__17180;
i__17169 = G__17181;
continue;
}
}
} else
{return null;
}
}
break;
}
});
};
var do__GT_ = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__17182){
var forms = cljs.core.seq(arglist__17182);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17183_SHARP_,p2__17184_SHARP_){return domina.append_BANG_.call(null,p1__17183_SHARP_,p2__17184_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__17185){
var values = cljs.core.seq(arglist__17185);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17186_SHARP_,p2__17187_SHARP_){return domina.prepend_BANG_.call(null,p1__17186_SHARP_,p2__17187_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__17188){
var values = cljs.core.seq(arglist__17188);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17189_SHARP_,p2__17190_SHARP_){return domina.insert_before_BANG_.call(null,p1__17189_SHARP_,p2__17190_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__17191){
var values = cljs.core.seq(arglist__17191);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17192_SHARP_,p2__17193_SHARP_){return domina.insert_after_BANG_.call(null,p1__17192_SHARP_,p2__17193_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__17194){
var values = cljs.core.seq(arglist__17194);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17195_SHARP_,p2__17196_SHARP_){return domina.swap_content_BANG_.call(null,p1__17195_SHARP_,p2__17196_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__17197){
var values = cljs.core.seq(arglist__17197);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__17198_SHARP_){return domina.detach_BANG_.call(null,p1__17198_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){return (function (pnod){var elem = goog.dom.createElement(cljs.core.name.call(null,elm));enfocus.core.add_map_attrs.call(null,elem,mattr);
enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));
return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){return (function (pnod){var frag = document.createDocumentFragment();goog.dom.append(frag,pnod.childNodes);
return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__17199_SHARP_){var seq__17206 = cljs.core.seq.call(null,pairs);var chunk__17207 = null;var count__17208 = 0;var i__17209 = 0;while(true){
if((i__17209 < count__17208))
{var vec__17210 = cljs.core._nth.call(null,chunk__17207,i__17209);var name = cljs.core.nth.call(null,vec__17210,0,null);var value = cljs.core.nth.call(null,vec__17210,1,null);domina.set_style_BANG_.call(null,p1__17199_SHARP_,name,value);
{
var G__17212 = seq__17206;
var G__17213 = chunk__17207;
var G__17214 = count__17208;
var G__17215 = (i__17209 + 1);
seq__17206 = G__17212;
chunk__17207 = G__17213;
count__17208 = G__17214;
i__17209 = G__17215;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17206);if(temp__4092__auto__)
{var seq__17206__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17206__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17206__$1);{
var G__17216 = cljs.core.chunk_rest.call(null,seq__17206__$1);
var G__17217 = c__4191__auto__;
var G__17218 = cljs.core.count.call(null,c__4191__auto__);
var G__17219 = 0;
seq__17206 = G__17216;
chunk__17207 = G__17217;
count__17208 = G__17218;
i__17209 = G__17219;
continue;
}
} else
{var vec__17211 = cljs.core.first.call(null,seq__17206__$1);var name = cljs.core.nth.call(null,vec__17211,0,null);var value = cljs.core.nth.call(null,vec__17211,1,null);domina.set_style_BANG_.call(null,p1__17199_SHARP_,name,value);
{
var G__17220 = cljs.core.next.call(null,seq__17206__$1);
var G__17221 = null;
var G__17222 = 0;
var G__17223 = 0;
seq__17206 = G__17220;
chunk__17207 = G__17221;
count__17208 = G__17222;
i__17209 = G__17223;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__17224){
var values = cljs.core.seq(arglist__17224);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){return (function (pnod){return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__17225){
var values = cljs.core.seq(arglist__17225);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){return (function (node){return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){return (function (node){return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__17226_SHARP_){return domina.set_data_BANG_.call(null,p1__17226_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){return (function (pnod){return enfocus.core.setTimeout.call(null,(function (){return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;if (arguments.length > 1) {
  funcs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__17227){
var ttime = cljs.core.first(arglist__17227);
var funcs = cljs.core.rest(arglist__17227);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__17229_SHARP_,p2__17228_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__17228_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__17254_17262 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__17255_17263 = null;var count__17256_17264 = 0;var i__17257_17265 = 0;while(true){
if((i__17257_17265 < count__17256_17264))
{var idx_17266 = cljs.core._nth.call(null,chunk__17255_17263,i__17257_17265);var attr_17267 = pnod.attributes.item(idx_17266);if(cljs.core.truth_(attr_17267.specified))
{attr_17267.value = rep_str.call(null,attr_17267.value);
} else
{}
{
var G__17268 = seq__17254_17262;
var G__17269 = chunk__17255_17263;
var G__17270 = count__17256_17264;
var G__17271 = (i__17257_17265 + 1);
seq__17254_17262 = G__17268;
chunk__17255_17263 = G__17269;
count__17256_17264 = G__17270;
i__17257_17265 = G__17271;
continue;
}
} else
{var temp__4092__auto___17272 = cljs.core.seq.call(null,seq__17254_17262);if(temp__4092__auto___17272)
{var seq__17254_17273__$1 = temp__4092__auto___17272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17254_17273__$1))
{var c__4191__auto___17274 = cljs.core.chunk_first.call(null,seq__17254_17273__$1);{
var G__17275 = cljs.core.chunk_rest.call(null,seq__17254_17273__$1);
var G__17276 = c__4191__auto___17274;
var G__17277 = cljs.core.count.call(null,c__4191__auto___17274);
var G__17278 = 0;
seq__17254_17262 = G__17275;
chunk__17255_17263 = G__17276;
count__17256_17264 = G__17277;
i__17257_17265 = G__17278;
continue;
}
} else
{var idx_17279 = cljs.core.first.call(null,seq__17254_17273__$1);var attr_17280 = pnod.attributes.item(idx_17279);if(cljs.core.truth_(attr_17280.specified))
{attr_17280.value = rep_str.call(null,attr_17280.value);
} else
{}
{
var G__17281 = cljs.core.next.call(null,seq__17254_17273__$1);
var G__17282 = null;
var G__17283 = 0;
var G__17284 = 0;
seq__17254_17262 = G__17281;
chunk__17255_17263 = G__17282;
count__17256_17264 = G__17283;
i__17257_17265 = G__17284;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if(cljs.core._EQ_.call(null,pnod.nodeType,3))
{return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else
{var seq__17258 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__17259 = null;var count__17260 = 0;var i__17261 = 0;while(true){
if((i__17261 < count__17260))
{var cnode = cljs.core._nth.call(null,chunk__17259,i__17261);rep_node.call(null,cnode);
{
var G__17285 = seq__17258;
var G__17286 = chunk__17259;
var G__17287 = count__17260;
var G__17288 = (i__17261 + 1);
seq__17258 = G__17285;
chunk__17259 = G__17286;
count__17260 = G__17287;
i__17261 = G__17288;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17258);if(temp__4092__auto__)
{var seq__17258__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17258__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17258__$1);{
var G__17289 = cljs.core.chunk_rest.call(null,seq__17258__$1);
var G__17290 = c__4191__auto__;
var G__17291 = cljs.core.count.call(null,c__4191__auto__);
var G__17292 = 0;
seq__17258 = G__17289;
chunk__17259 = G__17290;
count__17260 = G__17291;
i__17261 = G__17292;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__17258__$1);rep_node.call(null,cnode);
{
var G__17293 = cljs.core.next.call(null,seq__17258__$1);
var G__17294 = null;
var G__17295 = 0;
var G__17296 = 0;
seq__17258 = G__17293;
chunk__17259 = G__17294;
count__17260 = G__17295;
i__17261 = G__17296;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
});
enfocus.core.exists_in_QMARK_ = (function exists_in_QMARK_(col_or_val,val){if(cljs.core.coll_QMARK_.call(null,col_or_val))
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([val], true),col_or_val);
} else
{return cljs.core._EQ_.call(null,col_or_val,val);
}
});
/**
* sets the value of a form input (text,select,checkbox,etc...)
* format (at node (set-form-input value))
*/
enfocus.core.set_form_input = (function set_form_input(val){return (function (el){if((cljs.core._EQ_.call(null,el.type,"checkbox")) || (cljs.core._EQ_.call(null,el.type,"radio")))
{return el.checked = enfocus.core.exists_in_QMARK_.call(null,val,el.value);
} else
{var nval = (((cljs.core.coll_QMARK_.call(null,val)) && (!(typeof val === 'string')))?cljs.core.vec.call(null,val):((cljs.core._EQ_.call(null,el.type,"select-multiple"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null):val));return goog.dom.forms.setValue(el,cljs.core.clj__GT_js.call(null,nval));
}
});
});
/**
* sets the values of a form based on a map
* (set-form {:val1 'val' :val2 'val'})
*/
enfocus.core.set_form = (function set_form(value_map){return (function (form_node){if(cljs.core._EQ_.call(null,form_node.nodeName,"FORM"))
{var seq__17301 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));var chunk__17302 = null;var count__17303 = 0;var i__17304 = 0;while(true){
if((i__17304 < count__17303))
{var idx = cljs.core._nth.call(null,chunk__17302,i__17304);var el_17305 = (form_node.elements[idx]);var ky_17306 = cljs.core.keyword.call(null,el_17305.name);var val_17307 = ky_17306.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_17306))
{var val_17308__$1 = (cljs.core.truth_(val_17307)?val_17307:"");enfocus.core.set_form_input.call(null,val_17308__$1).call(null,el_17305);
} else
{}
{
var G__17309 = seq__17301;
var G__17310 = chunk__17302;
var G__17311 = count__17303;
var G__17312 = (i__17304 + 1);
seq__17301 = G__17309;
chunk__17302 = G__17310;
count__17303 = G__17311;
i__17304 = G__17312;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17301);if(temp__4092__auto__)
{var seq__17301__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17301__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17301__$1);{
var G__17313 = cljs.core.chunk_rest.call(null,seq__17301__$1);
var G__17314 = c__4191__auto__;
var G__17315 = cljs.core.count.call(null,c__4191__auto__);
var G__17316 = 0;
seq__17301 = G__17313;
chunk__17302 = G__17314;
count__17303 = G__17315;
i__17304 = G__17316;
continue;
}
} else
{var idx = cljs.core.first.call(null,seq__17301__$1);var el_17317 = (form_node.elements[idx]);var ky_17318 = cljs.core.keyword.call(null,el_17317.name);var val_17319 = ky_17318.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_17318))
{var val_17320__$1 = (cljs.core.truth_(val_17319)?val_17319:"");enfocus.core.set_form_input.call(null,val_17320__$1).call(null,el_17317);
} else
{}
{
var G__17321 = cljs.core.next.call(null,seq__17301__$1);
var G__17322 = null;
var G__17323 = 0;
var G__17324 = 0;
seq__17301 = G__17321;
chunk__17302 = G__17322;
count__17303 = G__17323;
i__17304 = G__17324;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){if(typeof node_spec === 'string')
{return document.createTextNode(node_spec);
} else
{if(cljs.core.vector_QMARK_.call(null,node_spec))
{var vec__17334 = node_spec;var tag = cljs.core.nth.call(null,vec__17334,0,null);var vec__17335 = cljs.core.nthnext.call(null,vec__17334,1);var m = cljs.core.nth.call(null,vec__17335,0,null);var ms = cljs.core.nthnext.call(null,vec__17335,1);var more = vec__17335;var vec__17336 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__17336,0,null);var segments = cljs.core.nthnext.call(null,vec__17336,1);var id = cljs.core.some.call(null,((function (vec__17334,tag,vec__17335,m,ms,more,vec__17336,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__17334,tag,vec__17335,m,ms,more,vec__17336,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__17334,tag,vec__17335,m,ms,more,vec__17336,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__17334,tag,vec__17335,m,ms,more,vec__17336,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__17337_17343 = cljs.core.seq.call(null,attrs__$2);var chunk__17338_17344 = null;var count__17339_17345 = 0;var i__17340_17346 = 0;while(true){
if((i__17340_17346 < count__17339_17345))
{var vec__17341_17347 = cljs.core._nth.call(null,chunk__17338_17344,i__17340_17346);var key_17348 = cljs.core.nth.call(null,vec__17341_17347,0,null);var val_17349 = cljs.core.nth.call(null,vec__17341_17347,1,null);node.setAttribute(cljs.core.name.call(null,key_17348),val_17349);
{
var G__17350 = seq__17337_17343;
var G__17351 = chunk__17338_17344;
var G__17352 = count__17339_17345;
var G__17353 = (i__17340_17346 + 1);
seq__17337_17343 = G__17350;
chunk__17338_17344 = G__17351;
count__17339_17345 = G__17352;
i__17340_17346 = G__17353;
continue;
}
} else
{var temp__4092__auto___17354 = cljs.core.seq.call(null,seq__17337_17343);if(temp__4092__auto___17354)
{var seq__17337_17355__$1 = temp__4092__auto___17354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17337_17355__$1))
{var c__4191__auto___17356 = cljs.core.chunk_first.call(null,seq__17337_17355__$1);{
var G__17357 = cljs.core.chunk_rest.call(null,seq__17337_17355__$1);
var G__17358 = c__4191__auto___17356;
var G__17359 = cljs.core.count.call(null,c__4191__auto___17356);
var G__17360 = 0;
seq__17337_17343 = G__17357;
chunk__17338_17344 = G__17358;
count__17339_17345 = G__17359;
i__17340_17346 = G__17360;
continue;
}
} else
{var vec__17342_17361 = cljs.core.first.call(null,seq__17337_17355__$1);var key_17362 = cljs.core.nth.call(null,vec__17342_17361,0,null);var val_17363 = cljs.core.nth.call(null,vec__17342_17361,1,null);node.setAttribute(cljs.core.name.call(null,key_17362),val_17363);
{
var G__17364 = cljs.core.next.call(null,seq__17337_17355__$1);
var G__17365 = null;
var G__17366 = 0;
var G__17367 = 0;
seq__17337_17343 = G__17364;
chunk__17338_17344 = G__17365;
count__17339_17345 = G__17366;
i__17340_17346 = G__17367;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(content))
{return domina.append_BANG_.call(null,node,content);
} else
{return null;
}
} else
{if(cljs.core.sequential_QMARK_.call(null,node_spec))
{return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return document.createTextNode([cljs.core.str(node_spec)].join(''));
} else
{return null;
}
}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){return enfocus.core.extr_multi_node.call(null,(function (pnod){return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){return enfocus.core.extr_multi_node.call(null,(function (pnod){return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){return enfocus.core.extr_multi_node.call(null,(function (node){return domina.get_data.call(null,node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){return enfocus.core.extr_multi_node.call(null,(function (pnod){return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){var mval = form_map.call(null,ky);if(cljs.core.truth_(val))
{if((cljs.core.coll_QMARK_.call(null,mval)) && (cljs.core.coll_QMARK_.call(null,val)))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.into.call(null,mval,val));
} else
{if(cljs.core.coll_QMARK_.call(null,mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else
{if(cljs.core.truth_(mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.PersistentHashSet.fromArray([val,mval], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.assoc.call(null,form_map,ky,val);
} else
{return null;
}
}
}
}
} else
{return form_map;
}
});
/**
* returns the value of a given form input (text,select,checkbox,etc...)    If more than  one value exists it will return a set of values.
*/
enfocus.core.read_form_input = (function read_form_input(){var trans = (function (nodes,chain){var nod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var result = cljs.core.reduce.call(null,((function (nod_col){
return (function (p1__17369_SHARP_,p2__17368_SHARP_){var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__17368_SHARP_));if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals)))
{return cljs.core.into.call(null,p1__17369_SHARP_,vals);
} else
{if(cljs.core.truth_(vals))
{return cljs.core.conj.call(null,p1__17369_SHARP_,vals);
} else
{return p1__17369_SHARP_;
}
}
});})(nod_col))
,cljs.core.PersistentHashSet.EMPTY,nod_col);if(cljs.core.empty_QMARK_.call(null,result))
{return null;
} else
{if((cljs.core._EQ_.call(null,1,cljs.core.count.call(null,result))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["select-multiple",null,"checkbox",null], null), null).call(null,cljs.core.first.call(null,nod_col).type))))
{return cljs.core.first.call(null,result);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return result;
} else
{return null;
}
}
}
});if(typeof enfocus.core.t17374 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t17374 = (function (trans,read_form_input,meta17375){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta17375 = meta17375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t17374.cljs$lang$type = true;
enfocus.core.t17374.cljs$lang$ctorStr = "enfocus.core/t17374";
enfocus.core.t17374.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t17374");
});
enfocus.core.t17374.prototype.call = (function() {
var G__17378 = null;
var G__17378__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__17378__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__17378 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17378__2.call(this,self__,nodes);
case 3:
return G__17378__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17378;
})()
;
enfocus.core.t17374.prototype.apply = (function (self__,args17377){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17377)));
});
enfocus.core.t17374.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17374.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17374.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t17374.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17374.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17376){var self__ = this;
var _17376__$1 = this;return self__.meta17375;
});
enfocus.core.t17374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17376,meta17375__$1){var self__ = this;
var _17376__$1 = this;return (new enfocus.core.t17374(self__.trans,self__.read_form_input,meta17375__$1));
});
enfocus.core.__GT_t17374 = (function __GT_t17374(trans__$1,read_form_input__$1,meta17375){return (new enfocus.core.t17374(trans__$1,read_form_input__$1,meta17375));
});
}
return (new enfocus.core.t17374(trans,read_form_input,null));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__17380_SHARP_,p2__17379_SHARP_){if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__17379_SHARP_).name)))
{return enfocus.core.merge_form_val.call(null,p1__17380_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__17379_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__17379_SHARP_)));
} else
{return p1__17380_SHARP_;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,inputs.length));
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);var res = cljs.core.filter.call(null,ttest,pnod_col);if((chain == null))
{return enfocus.core.apply_transform.call(null,trans,res);
} else
{return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",1756218137),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){return (function (node){if(cljs.core.truth_((node["matches"])))
{return node.matches(selector);
} else
{if(cljs.core.truth_((node["matchesSelector"])))
{return node.matchesSelector(selector);
} else
{if(cljs.core.truth_((node["msMatchesSelector"])))
{return node.msMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["mozMatchesSelector"])))
{return node.mozMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["webkitMatchesSelector"])))
{return node.webkitMatchesSelector(selector);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));
} else
{return null;
}
}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__17381_SHARP_){if((p1__17381_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__17381_SHARP_);
} else
{if((p1__17381_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__17381_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__17381_SHARP_))
{return create_sel_str.call(null,p1__17381_SHARP_);
} else
{if(typeof p1__17381_SHARP_ === 'string')
{return p1__17381_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));var ret = domina.css.sel.call(null,dom_node,sel);return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){var or__3443__auto__ = func;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__3431__auto__ = !((node == null));if(and__3431__auto__)
{var G__17392 = node;if(G__17392)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__17392.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__17392.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__17392);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__17392);
}
} else
{return and__3431__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__17393 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__17393,0,null);var trans__$1 = cljs.core.nth.call(null,vec__17393,1,null);var seq__17394 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__17395 = null;var count__17396 = 0;var i__17397 = 0;while(true){
if((i__17397 < count__17396))
{var vec__17398 = cljs.core._nth.call(null,chunk__17395,i__17397);var sel = cljs.core.nth.call(null,vec__17398,0,null);var t = cljs.core.nth.call(null,vec__17398,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__17400 = seq__17394;
var G__17401 = chunk__17395;
var G__17402 = count__17396;
var G__17403 = (i__17397 + 1);
seq__17394 = G__17400;
chunk__17395 = G__17401;
count__17396 = G__17402;
i__17397 = G__17403;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17394);if(temp__4092__auto__)
{var seq__17394__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17394__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17394__$1);{
var G__17404 = cljs.core.chunk_rest.call(null,seq__17394__$1);
var G__17405 = c__4191__auto__;
var G__17406 = cljs.core.count.call(null,c__4191__auto__);
var G__17407 = 0;
seq__17394 = G__17404;
chunk__17395 = G__17405;
count__17396 = G__17406;
i__17397 = G__17407;
continue;
}
} else
{var vec__17399 = cljs.core.first.call(null,seq__17394__$1);var sel = cljs.core.nth.call(null,vec__17399,0,null);var t = cljs.core.nth.call(null,vec__17399,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__17408 = cljs.core.next.call(null,seq__17394__$1);
var G__17409 = null;
var G__17410 = 0;
var G__17411 = 0;
seq__17394 = G__17408;
chunk__17395 = G__17409;
count__17396 = G__17410;
i__17397 = G__17411;
continue;
}
}
} else
{return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;if (arguments.length > 2) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__17412){
var id_mask = cljs.core.first(arglist__17412);
arglist__17412 = cljs.core.next(arglist__17412);
var node = cljs.core.first(arglist__17412);
var trans = cljs.core.rest(arglist__17412);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__17413){
var node = cljs.core.first(arglist__17413);
var trans = cljs.core.rest(arglist__17413);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__17418 = node;if(G__17418)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__17418.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__17418.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__17418);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__17418);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__17419 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__17419,0,null);var trans__$1 = cljs.core.nth.call(null,vec__17419,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__17420){var vec__17421 = p__17420;var ky = cljs.core.nth.call(null,vec__17421,0,null);var sel = cljs.core.nth.call(null,vec__17421,1,null);var ext = cljs.core.nth.call(null,vec__17421,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
}),cljs.core.partition.call(null,3,trans__$1)));
} else
{return null;
}
}
}
};
var from = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__17422){
var node = cljs.core.first(arglist__17422);
var trans = cljs.core.rest(arglist__17422);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){return (function (root,id_mask){if(cljs.core.empty_QMARK_.call(null,id_mask))
{return domina.xpath.xpath.call(null,root,path);
} else
{var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){return root;
});
if(cljs.core.truth_((typeof Text != 'undefined')))
{Text.prototype.domina$DomContent$ = true;
Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){var content__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});
Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){var content__$1 = this;return content__$1;
});
} else
{}
(enfocus.core.ISelector["null"] = true);
(enfocus.core.select["null"] = (function() {
var G__17423 = null;
var G__17423__1 = (function (this$){return cljs.core.List.EMPTY;
});
var G__17423__2 = (function (this$,root){return cljs.core.List.EMPTY;
});
var G__17423__3 = (function (this$,root,id_mask){return cljs.core.List.EMPTY;
});
G__17423 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__17423__1.call(this,this$);
case 2:
return G__17423__2.call(this,this$,root);
case 3:
return G__17423__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17423;
})()
);
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__17424 = null;
var G__17424__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__17424__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__17424__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__17424 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__17424__1.call(this,this$);
case 2:
return G__17424__2.call(this,this$,root);
case 3:
return G__17424__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17424;
})()
);
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,document,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,root,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){var this$__$1 = this;return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});
(enfocus.core.ISelector["function"] = true);
(enfocus.core.select["function"] = (function() {
var G__17425 = null;
var G__17425__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__17425__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__17425__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__17425 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__17425__1.call(this,this$);
case 2:
return G__17425__2.call(this,this$,root);
case 3:
return G__17425__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17425;
})()
);
(enfocus.core.ITransform["null"] = true);
(enfocus.core.apply_transform["null"] = (function() {
var G__17426 = null;
var G__17426__2 = (function (trans,nodes){return nodes;
});
var G__17426__3 = (function (trans,nodes,chain){return nodes;
});
G__17426 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__17426__2.call(this,trans,nodes);
case 3:
return G__17426__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17426;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__17427 = null;
var G__17427__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__17427__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__17427 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__17427__2.call(this,trans,nodes);
case 3:
return G__17427__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17427;
})()
);

//# sourceMappingURL=core.js.map