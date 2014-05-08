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
enfocus.core.ISelector = (function (){var obj10015 = {};return obj10015;
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
enfocus.core.ITransform = (function (){var obj10017 = {};return obj10017;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__10018_SHARP_){if(typeof p1__10018_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__10018_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__10018_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__10025_10031 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__10026_10032 = null;var count__10027_10033 = 0;var i__10028_10034 = 0;while(true){
if((i__10028_10034 < count__10027_10033))
{var vec__10029_10035 = cljs.core._nth.call(null,chunk__10026_10032,i__10028_10034);var attr_10036 = cljs.core.nth.call(null,vec__10029_10035,0,null);var value_10037 = cljs.core.nth.call(null,vec__10029_10035,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_10036),value_10037);
{
var G__10038 = seq__10025_10031;
var G__10039 = chunk__10026_10032;
var G__10040 = count__10027_10033;
var G__10041 = (i__10028_10034 + 1);
seq__10025_10031 = G__10038;
chunk__10026_10032 = G__10039;
count__10027_10033 = G__10040;
i__10028_10034 = G__10041;
continue;
}
} else
{var temp__4092__auto___10042 = cljs.core.seq.call(null,seq__10025_10031);if(temp__4092__auto___10042)
{var seq__10025_10043__$1 = temp__4092__auto___10042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10025_10043__$1))
{var c__4191__auto___10044 = cljs.core.chunk_first.call(null,seq__10025_10043__$1);{
var G__10045 = cljs.core.chunk_rest.call(null,seq__10025_10043__$1);
var G__10046 = c__4191__auto___10044;
var G__10047 = cljs.core.count.call(null,c__4191__auto___10044);
var G__10048 = 0;
seq__10025_10031 = G__10045;
chunk__10026_10032 = G__10046;
count__10027_10033 = G__10047;
i__10028_10034 = G__10048;
continue;
}
} else
{var vec__10030_10049 = cljs.core.first.call(null,seq__10025_10043__$1);var attr_10050 = cljs.core.nth.call(null,vec__10030_10049,0,null);var value_10051 = cljs.core.nth.call(null,vec__10030_10049,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_10050),value_10051);
{
var G__10052 = cljs.core.next.call(null,seq__10025_10043__$1);
var G__10053 = null;
var G__10054 = 0;
var G__10055 = 0;
seq__10025_10031 = G__10052;
chunk__10026_10032 = G__10053;
count__10027_10033 = G__10054;
i__10028_10034 = G__10055;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__10060 = cljs.core.seq.call(null,values);var chunk__10061 = null;var count__10062 = 0;var i__10063 = 0;while(true){
if((i__10063 < count__10062))
{var attr = cljs.core._nth.call(null,chunk__10061,i__10063);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__10064 = seq__10060;
var G__10065 = chunk__10061;
var G__10066 = count__10062;
var G__10067 = (i__10063 + 1);
seq__10060 = G__10064;
chunk__10061 = G__10065;
count__10062 = G__10066;
i__10063 = G__10067;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10060);if(temp__4092__auto__)
{var seq__10060__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10060__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10060__$1);{
var G__10068 = cljs.core.chunk_rest.call(null,seq__10060__$1);
var G__10069 = c__4191__auto__;
var G__10070 = cljs.core.count.call(null,c__4191__auto__);
var G__10071 = 0;
seq__10060 = G__10068;
chunk__10061 = G__10069;
count__10062 = G__10070;
i__10063 = G__10071;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__10060__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__10072 = cljs.core.next.call(null,seq__10060__$1);
var G__10073 = null;
var G__10074 = 0;
var G__10075 = 0;
seq__10060 = G__10072;
chunk__10061 = G__10073;
count__10062 = G__10074;
i__10063 = G__10075;
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
{var seq__10082_10088 = cljs.core.seq.call(null,ats);var chunk__10083_10089 = null;var count__10084_10090 = 0;var i__10085_10091 = 0;while(true){
if((i__10085_10091 < count__10084_10090))
{var vec__10086_10092 = cljs.core._nth.call(null,chunk__10083_10089,i__10085_10091);var k_10093 = cljs.core.nth.call(null,vec__10086_10092,0,null);var v_10094 = cljs.core.nth.call(null,vec__10086_10092,1,null);add_map_attrs.call(null,elem,k_10093,v_10094);
{
var G__10095 = seq__10082_10088;
var G__10096 = chunk__10083_10089;
var G__10097 = count__10084_10090;
var G__10098 = (i__10085_10091 + 1);
seq__10082_10088 = G__10095;
chunk__10083_10089 = G__10096;
count__10084_10090 = G__10097;
i__10085_10091 = G__10098;
continue;
}
} else
{var temp__4092__auto___10099 = cljs.core.seq.call(null,seq__10082_10088);if(temp__4092__auto___10099)
{var seq__10082_10100__$1 = temp__4092__auto___10099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10082_10100__$1))
{var c__4191__auto___10101 = cljs.core.chunk_first.call(null,seq__10082_10100__$1);{
var G__10102 = cljs.core.chunk_rest.call(null,seq__10082_10100__$1);
var G__10103 = c__4191__auto___10101;
var G__10104 = cljs.core.count.call(null,c__4191__auto___10101);
var G__10105 = 0;
seq__10082_10088 = G__10102;
chunk__10083_10089 = G__10103;
count__10084_10090 = G__10104;
i__10085_10091 = G__10105;
continue;
}
} else
{var vec__10087_10106 = cljs.core.first.call(null,seq__10082_10100__$1);var k_10107 = cljs.core.nth.call(null,vec__10087_10106,0,null);var v_10108 = cljs.core.nth.call(null,vec__10087_10106,1,null);add_map_attrs.call(null,elem,k_10107,v_10108);
{
var G__10109 = cljs.core.next.call(null,seq__10082_10100__$1);
var G__10110 = null;
var G__10111 = 0;
var G__10112 = 0;
seq__10082_10088 = G__10109;
chunk__10083_10089 = G__10110;
count__10084_10090 = G__10111;
i__10085_10091 = G__10112;
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
var seq__10117_10121 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__10118_10122 = null;var count__10119_10123 = 0;var i__10120_10124 = 0;while(true){
if((i__10120_10124 < count__10119_10123))
{var node_10125 = cljs.core._nth.call(null,chunk__10118_10122,i__10120_10124);goog.dom.appendChild(div,node_10125);
{
var G__10126 = seq__10117_10121;
var G__10127 = chunk__10118_10122;
var G__10128 = count__10119_10123;
var G__10129 = (i__10120_10124 + 1);
seq__10117_10121 = G__10126;
chunk__10118_10122 = G__10127;
count__10119_10123 = G__10128;
i__10120_10124 = G__10129;
continue;
}
} else
{var temp__4092__auto___10130 = cljs.core.seq.call(null,seq__10117_10121);if(temp__4092__auto___10130)
{var seq__10117_10131__$1 = temp__4092__auto___10130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10117_10131__$1))
{var c__4191__auto___10132 = cljs.core.chunk_first.call(null,seq__10117_10131__$1);{
var G__10133 = cljs.core.chunk_rest.call(null,seq__10117_10131__$1);
var G__10134 = c__4191__auto___10132;
var G__10135 = cljs.core.count.call(null,c__4191__auto___10132);
var G__10136 = 0;
seq__10117_10121 = G__10133;
chunk__10118_10122 = G__10134;
count__10119_10123 = G__10135;
i__10120_10124 = G__10136;
continue;
}
} else
{var node_10137 = cljs.core.first.call(null,seq__10117_10131__$1);goog.dom.appendChild(div,node_10137);
{
var G__10138 = cljs.core.next.call(null,seq__10117_10131__$1);
var G__10139 = null;
var G__10140 = 0;
var G__10141 = 0;
seq__10117_10121 = G__10138;
chunk__10118_10122 = G__10139;
count__10119_10123 = G__10140;
i__10120_10124 = G__10141;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10142_SHARP_){var id = p1__10142_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__10142_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__10144 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__10144,0,null);var txt = cljs.core.nth.call(null,vec__10144,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__10149_10153 = cljs.core.seq.call(null,dfa);var chunk__10150_10154 = null;var count__10151_10155 = 0;var i__10152_10156 = 0;while(true){
if((i__10152_10156 < count__10151_10155))
{var df_10157 = cljs.core._nth.call(null,chunk__10150_10154,i__10152_10156);goog.dom.append(frag,df_10157);
{
var G__10158 = seq__10149_10153;
var G__10159 = chunk__10150_10154;
var G__10160 = count__10151_10155;
var G__10161 = (i__10152_10156 + 1);
seq__10149_10153 = G__10158;
chunk__10150_10154 = G__10159;
count__10151_10155 = G__10160;
i__10152_10156 = G__10161;
continue;
}
} else
{var temp__4092__auto___10162 = cljs.core.seq.call(null,seq__10149_10153);if(temp__4092__auto___10162)
{var seq__10149_10163__$1 = temp__4092__auto___10162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10149_10163__$1))
{var c__4191__auto___10164 = cljs.core.chunk_first.call(null,seq__10149_10163__$1);{
var G__10165 = cljs.core.chunk_rest.call(null,seq__10149_10163__$1);
var G__10166 = c__4191__auto___10164;
var G__10167 = cljs.core.count.call(null,c__4191__auto___10164);
var G__10168 = 0;
seq__10149_10153 = G__10165;
chunk__10150_10154 = G__10166;
count__10151_10155 = G__10167;
i__10152_10156 = G__10168;
continue;
}
} else
{var df_10169 = cljs.core.first.call(null,seq__10149_10163__$1);goog.dom.append(frag,df_10169);
{
var G__10170 = cljs.core.next.call(null,seq__10149_10163__$1);
var G__10171 = null;
var G__10172 = 0;
var G__10173 = 0;
seq__10149_10153 = G__10170;
chunk__10150_10154 = G__10171;
count__10151_10155 = G__10172;
i__10152_10156 = G__10173;
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
{var vec__10176 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__10176,0,null);var tdom = cljs.core.nth.call(null,vec__10176,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__10176,sym,tdom,dom,tsnip){
return (function (p1__10174_SHARP_){return p1__10174_SHARP_.outerHTML;
});})(vec__10176,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t10181 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t10181 = (function (trans,filt,func,extr_multi_node,meta10182){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta10182 = meta10182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t10181.cljs$lang$type = true;
enfocus.core.t10181.cljs$lang$ctorStr = "enfocus.core/t10181";
enfocus.core.t10181.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t10181");
});
enfocus.core.t10181.prototype.call = (function() {
var G__10185 = null;
var G__10185__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__10185__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__10185 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__10185__2.call(this,self__,nodes);
case 3:
return G__10185__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10185;
})()
;
enfocus.core.t10181.prototype.apply = (function (self__,args10184){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10184)));
});
enfocus.core.t10181.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10181.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10181.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t10181.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10181.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10183){var self__ = this;
var _10183__$1 = this;return self__.meta10182;
});
enfocus.core.t10181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10183,meta10182__$1){var self__ = this;
var _10183__$1 = this;return (new enfocus.core.t10181(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta10182__$1));
});
enfocus.core.__GT_t10181 = (function __GT_t10181(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta10182){return (new enfocus.core.t10181(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta10182));
});
}
return (new enfocus.core.t10181(trans,filt,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t10195 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t10195 = (function (trans,func,multi_node_chain,meta10196){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta10196 = meta10196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t10195.cljs$lang$type = true;
enfocus.core.t10195.cljs$lang$ctorStr = "enfocus.core/t10195";
enfocus.core.t10195.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t10195");
});
enfocus.core.t10195.prototype.call = (function() {
var G__10203 = null;
var G__10203__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__10203__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__10203 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__10203__2.call(this,self__,nodes);
case 3:
return G__10203__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10203;
})()
;
enfocus.core.t10195.prototype.apply = (function (self__,args10198){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10198)));
});
enfocus.core.t10195.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10195.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10195.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t10195.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10195.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10197){var self__ = this;
var _10197__$1 = this;return self__.meta10196;
});
enfocus.core.t10195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10197,meta10196__$1){var self__ = this;
var _10197__$1 = this;return (new enfocus.core.t10195(self__.trans,self__.func,self__.multi_node_chain,meta10196__$1));
});
enfocus.core.__GT_t10195 = (function __GT_t10195(trans__$1,func__$1,multi_node_chain__$1,meta10196){return (new enfocus.core.t10195(trans__$1,func__$1,multi_node_chain__$1,meta10196));
});
}
return (new enfocus.core.t10195(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__10186_SHARP_){return domina.nodes.call(null,p1__10186_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t10199 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t10199 = (function (trans,func,values,multi_node_chain,meta10200){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta10200 = meta10200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t10199.cljs$lang$type = true;
enfocus.core.t10199.cljs$lang$ctorStr = "enfocus.core/t10199";
enfocus.core.t10199.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t10199");
});
enfocus.core.t10199.prototype.call = (function() {
var G__10204 = null;
var G__10204__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__10204__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__10204 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__10204__2.call(this,self__,nodes);
case 3:
return G__10204__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10204;
})()
;
enfocus.core.t10199.prototype.apply = (function (self__,args10202){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10202)));
});
enfocus.core.t10199.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10199.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10199.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t10199.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10199.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10201){var self__ = this;
var _10201__$1 = this;return self__.meta10200;
});
enfocus.core.t10199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10201,meta10200__$1){var self__ = this;
var _10201__$1 = this;return (new enfocus.core.t10199(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta10200__$1));
});
enfocus.core.__GT_t10199 = (function __GT_t10199(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta10200){return (new enfocus.core.t10199(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta10200));
});
}
return (new enfocus.core.t10199(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10205_SHARP_,p2__10206_SHARP_){domina.destroy_children_BANG_.call(null,p1__10205_SHARP_);
return domina.append_BANG_.call(null,p1__10205_SHARP_,p2__10206_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__10207){
var values = cljs.core.seq(arglist__10207);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__10208_SHARP_){return domina.set_html_BANG_.call(null,p1__10208_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__10209_SHARP_){var seq__10216 = cljs.core.seq.call(null,pairs);var chunk__10217 = null;var count__10218 = 0;var i__10219 = 0;while(true){
if((i__10219 < count__10218))
{var vec__10220 = cljs.core._nth.call(null,chunk__10217,i__10219);var name = cljs.core.nth.call(null,vec__10220,0,null);var value = cljs.core.nth.call(null,vec__10220,1,null);domina.set_attr_BANG_.call(null,p1__10209_SHARP_,name,value);
{
var G__10222 = seq__10216;
var G__10223 = chunk__10217;
var G__10224 = count__10218;
var G__10225 = (i__10219 + 1);
seq__10216 = G__10222;
chunk__10217 = G__10223;
count__10218 = G__10224;
i__10219 = G__10225;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10216);if(temp__4092__auto__)
{var seq__10216__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10216__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10216__$1);{
var G__10226 = cljs.core.chunk_rest.call(null,seq__10216__$1);
var G__10227 = c__4191__auto__;
var G__10228 = cljs.core.count.call(null,c__4191__auto__);
var G__10229 = 0;
seq__10216 = G__10226;
chunk__10217 = G__10227;
count__10218 = G__10228;
i__10219 = G__10229;
continue;
}
} else
{var vec__10221 = cljs.core.first.call(null,seq__10216__$1);var name = cljs.core.nth.call(null,vec__10221,0,null);var value = cljs.core.nth.call(null,vec__10221,1,null);domina.set_attr_BANG_.call(null,p1__10209_SHARP_,name,value);
{
var G__10230 = cljs.core.next.call(null,seq__10216__$1);
var G__10231 = null;
var G__10232 = 0;
var G__10233 = 0;
seq__10216 = G__10230;
chunk__10217 = G__10231;
count__10218 = G__10232;
i__10219 = G__10233;
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
set_attr.cljs$lang$applyTo = (function (arglist__10234){
var values = cljs.core.seq(arglist__10234);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__10235_SHARP_){var seq__10240 = cljs.core.seq.call(null,values);var chunk__10241 = null;var count__10242 = 0;var i__10243 = 0;while(true){
if((i__10243 < count__10242))
{var name = cljs.core._nth.call(null,chunk__10241,i__10243);domina.remove_attr_BANG_.call(null,p1__10235_SHARP_,name);
{
var G__10244 = seq__10240;
var G__10245 = chunk__10241;
var G__10246 = count__10242;
var G__10247 = (i__10243 + 1);
seq__10240 = G__10244;
chunk__10241 = G__10245;
count__10242 = G__10246;
i__10243 = G__10247;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10240);if(temp__4092__auto__)
{var seq__10240__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10240__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10240__$1);{
var G__10248 = cljs.core.chunk_rest.call(null,seq__10240__$1);
var G__10249 = c__4191__auto__;
var G__10250 = cljs.core.count.call(null,c__4191__auto__);
var G__10251 = 0;
seq__10240 = G__10248;
chunk__10241 = G__10249;
count__10242 = G__10250;
i__10243 = G__10251;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__10240__$1);domina.remove_attr_BANG_.call(null,p1__10235_SHARP_,name);
{
var G__10252 = cljs.core.next.call(null,seq__10240__$1);
var G__10253 = null;
var G__10254 = 0;
var G__10255 = 0;
seq__10240 = G__10252;
chunk__10241 = G__10253;
count__10242 = G__10254;
i__10243 = G__10255;
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
remove_attr.cljs$lang$applyTo = (function (arglist__10256){
var values = cljs.core.seq(arglist__10256);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__10259){var vec__10260 = p__10259;var n = cljs.core.nth.call(null,vec__10260,0,null);var v = cljs.core.nth.call(null,vec__10260,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__10261){
var forms = cljs.core.seq(arglist__10261);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__10262_SHARP_){var seq__10267 = cljs.core.seq.call(null,values);var chunk__10268 = null;var count__10269 = 0;var i__10270 = 0;while(true){
if((i__10270 < count__10269))
{var val = cljs.core._nth.call(null,chunk__10268,i__10270);domina.add_class_BANG_.call(null,p1__10262_SHARP_,val);
{
var G__10271 = seq__10267;
var G__10272 = chunk__10268;
var G__10273 = count__10269;
var G__10274 = (i__10270 + 1);
seq__10267 = G__10271;
chunk__10268 = G__10272;
count__10269 = G__10273;
i__10270 = G__10274;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10267);if(temp__4092__auto__)
{var seq__10267__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10267__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10267__$1);{
var G__10275 = cljs.core.chunk_rest.call(null,seq__10267__$1);
var G__10276 = c__4191__auto__;
var G__10277 = cljs.core.count.call(null,c__4191__auto__);
var G__10278 = 0;
seq__10267 = G__10275;
chunk__10268 = G__10276;
count__10269 = G__10277;
i__10270 = G__10278;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__10267__$1);domina.add_class_BANG_.call(null,p1__10262_SHARP_,val);
{
var G__10279 = cljs.core.next.call(null,seq__10267__$1);
var G__10280 = null;
var G__10281 = 0;
var G__10282 = 0;
seq__10267 = G__10279;
chunk__10268 = G__10280;
count__10269 = G__10281;
i__10270 = G__10282;
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
add_class.cljs$lang$applyTo = (function (arglist__10283){
var values = cljs.core.seq(arglist__10283);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__10284_SHARP_){var seq__10289 = cljs.core.seq.call(null,values);var chunk__10290 = null;var count__10291 = 0;var i__10292 = 0;while(true){
if((i__10292 < count__10291))
{var val = cljs.core._nth.call(null,chunk__10290,i__10292);domina.remove_class_BANG_.call(null,p1__10284_SHARP_,val);
{
var G__10293 = seq__10289;
var G__10294 = chunk__10290;
var G__10295 = count__10291;
var G__10296 = (i__10292 + 1);
seq__10289 = G__10293;
chunk__10290 = G__10294;
count__10291 = G__10295;
i__10292 = G__10296;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10289);if(temp__4092__auto__)
{var seq__10289__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10289__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10289__$1);{
var G__10297 = cljs.core.chunk_rest.call(null,seq__10289__$1);
var G__10298 = c__4191__auto__;
var G__10299 = cljs.core.count.call(null,c__4191__auto__);
var G__10300 = 0;
seq__10289 = G__10297;
chunk__10290 = G__10298;
count__10291 = G__10299;
i__10292 = G__10300;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__10289__$1);domina.remove_class_BANG_.call(null,p1__10284_SHARP_,val);
{
var G__10301 = cljs.core.next.call(null,seq__10289__$1);
var G__10302 = null;
var G__10303 = 0;
var G__10304 = 0;
seq__10289 = G__10301;
chunk__10290 = G__10302;
count__10291 = G__10303;
i__10292 = G__10304;
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
remove_class.cljs$lang$applyTo = (function (arglist__10305){
var values = cljs.core.seq(arglist__10305);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__10306_SHARP_){return domina.set_classes_BANG_.call(null,p1__10306_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__10307){
var values = cljs.core.seq(arglist__10307);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__10312 = cljs.core.seq.call(null,forms);var chunk__10313 = null;var count__10314 = 0;var i__10315 = 0;while(true){
if((i__10315 < count__10314))
{var fun = cljs.core._nth.call(null,chunk__10313,i__10315);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__10316 = seq__10312;
var G__10317 = chunk__10313;
var G__10318 = count__10314;
var G__10319 = (i__10315 + 1);
seq__10312 = G__10316;
chunk__10313 = G__10317;
count__10314 = G__10318;
i__10315 = G__10319;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10312);if(temp__4092__auto__)
{var seq__10312__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10312__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10312__$1);{
var G__10320 = cljs.core.chunk_rest.call(null,seq__10312__$1);
var G__10321 = c__4191__auto__;
var G__10322 = cljs.core.count.call(null,c__4191__auto__);
var G__10323 = 0;
seq__10312 = G__10320;
chunk__10313 = G__10321;
count__10314 = G__10322;
i__10315 = G__10323;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__10312__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__10324 = cljs.core.next.call(null,seq__10312__$1);
var G__10325 = null;
var G__10326 = 0;
var G__10327 = 0;
seq__10312 = G__10324;
chunk__10313 = G__10325;
count__10314 = G__10326;
i__10315 = G__10327;
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
do__GT_.cljs$lang$applyTo = (function (arglist__10328){
var forms = cljs.core.seq(arglist__10328);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10329_SHARP_,p2__10330_SHARP_){return domina.append_BANG_.call(null,p1__10329_SHARP_,p2__10330_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__10331){
var values = cljs.core.seq(arglist__10331);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10332_SHARP_,p2__10333_SHARP_){return domina.prepend_BANG_.call(null,p1__10332_SHARP_,p2__10333_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__10334){
var values = cljs.core.seq(arglist__10334);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10335_SHARP_,p2__10336_SHARP_){return domina.insert_before_BANG_.call(null,p1__10335_SHARP_,p2__10336_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__10337){
var values = cljs.core.seq(arglist__10337);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10338_SHARP_,p2__10339_SHARP_){return domina.insert_after_BANG_.call(null,p1__10338_SHARP_,p2__10339_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__10340){
var values = cljs.core.seq(arglist__10340);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__10341_SHARP_,p2__10342_SHARP_){return domina.swap_content_BANG_.call(null,p1__10341_SHARP_,p2__10342_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__10343){
var values = cljs.core.seq(arglist__10343);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__10344_SHARP_){return domina.detach_BANG_.call(null,p1__10344_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__10345_SHARP_){var seq__10352 = cljs.core.seq.call(null,pairs);var chunk__10353 = null;var count__10354 = 0;var i__10355 = 0;while(true){
if((i__10355 < count__10354))
{var vec__10356 = cljs.core._nth.call(null,chunk__10353,i__10355);var name = cljs.core.nth.call(null,vec__10356,0,null);var value = cljs.core.nth.call(null,vec__10356,1,null);domina.set_style_BANG_.call(null,p1__10345_SHARP_,name,value);
{
var G__10358 = seq__10352;
var G__10359 = chunk__10353;
var G__10360 = count__10354;
var G__10361 = (i__10355 + 1);
seq__10352 = G__10358;
chunk__10353 = G__10359;
count__10354 = G__10360;
i__10355 = G__10361;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10352);if(temp__4092__auto__)
{var seq__10352__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10352__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10352__$1);{
var G__10362 = cljs.core.chunk_rest.call(null,seq__10352__$1);
var G__10363 = c__4191__auto__;
var G__10364 = cljs.core.count.call(null,c__4191__auto__);
var G__10365 = 0;
seq__10352 = G__10362;
chunk__10353 = G__10363;
count__10354 = G__10364;
i__10355 = G__10365;
continue;
}
} else
{var vec__10357 = cljs.core.first.call(null,seq__10352__$1);var name = cljs.core.nth.call(null,vec__10357,0,null);var value = cljs.core.nth.call(null,vec__10357,1,null);domina.set_style_BANG_.call(null,p1__10345_SHARP_,name,value);
{
var G__10366 = cljs.core.next.call(null,seq__10352__$1);
var G__10367 = null;
var G__10368 = 0;
var G__10369 = 0;
seq__10352 = G__10366;
chunk__10353 = G__10367;
count__10354 = G__10368;
i__10355 = G__10369;
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
set_style.cljs$lang$applyTo = (function (arglist__10370){
var values = cljs.core.seq(arglist__10370);
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
remove_style.cljs$lang$applyTo = (function (arglist__10371){
var values = cljs.core.seq(arglist__10371);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__10372_SHARP_){return domina.set_data_BANG_.call(null,p1__10372_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__10373){
var ttime = cljs.core.first(arglist__10373);
var funcs = cljs.core.rest(arglist__10373);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__10375_SHARP_,p2__10374_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__10374_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__10400_10408 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__10401_10409 = null;var count__10402_10410 = 0;var i__10403_10411 = 0;while(true){
if((i__10403_10411 < count__10402_10410))
{var idx_10412 = cljs.core._nth.call(null,chunk__10401_10409,i__10403_10411);var attr_10413 = pnod.attributes.item(idx_10412);if(cljs.core.truth_(attr_10413.specified))
{attr_10413.value = rep_str.call(null,attr_10413.value);
} else
{}
{
var G__10414 = seq__10400_10408;
var G__10415 = chunk__10401_10409;
var G__10416 = count__10402_10410;
var G__10417 = (i__10403_10411 + 1);
seq__10400_10408 = G__10414;
chunk__10401_10409 = G__10415;
count__10402_10410 = G__10416;
i__10403_10411 = G__10417;
continue;
}
} else
{var temp__4092__auto___10418 = cljs.core.seq.call(null,seq__10400_10408);if(temp__4092__auto___10418)
{var seq__10400_10419__$1 = temp__4092__auto___10418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10400_10419__$1))
{var c__4191__auto___10420 = cljs.core.chunk_first.call(null,seq__10400_10419__$1);{
var G__10421 = cljs.core.chunk_rest.call(null,seq__10400_10419__$1);
var G__10422 = c__4191__auto___10420;
var G__10423 = cljs.core.count.call(null,c__4191__auto___10420);
var G__10424 = 0;
seq__10400_10408 = G__10421;
chunk__10401_10409 = G__10422;
count__10402_10410 = G__10423;
i__10403_10411 = G__10424;
continue;
}
} else
{var idx_10425 = cljs.core.first.call(null,seq__10400_10419__$1);var attr_10426 = pnod.attributes.item(idx_10425);if(cljs.core.truth_(attr_10426.specified))
{attr_10426.value = rep_str.call(null,attr_10426.value);
} else
{}
{
var G__10427 = cljs.core.next.call(null,seq__10400_10419__$1);
var G__10428 = null;
var G__10429 = 0;
var G__10430 = 0;
seq__10400_10408 = G__10427;
chunk__10401_10409 = G__10428;
count__10402_10410 = G__10429;
i__10403_10411 = G__10430;
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
{var seq__10404 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__10405 = null;var count__10406 = 0;var i__10407 = 0;while(true){
if((i__10407 < count__10406))
{var cnode = cljs.core._nth.call(null,chunk__10405,i__10407);rep_node.call(null,cnode);
{
var G__10431 = seq__10404;
var G__10432 = chunk__10405;
var G__10433 = count__10406;
var G__10434 = (i__10407 + 1);
seq__10404 = G__10431;
chunk__10405 = G__10432;
count__10406 = G__10433;
i__10407 = G__10434;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10404);if(temp__4092__auto__)
{var seq__10404__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10404__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10404__$1);{
var G__10435 = cljs.core.chunk_rest.call(null,seq__10404__$1);
var G__10436 = c__4191__auto__;
var G__10437 = cljs.core.count.call(null,c__4191__auto__);
var G__10438 = 0;
seq__10404 = G__10435;
chunk__10405 = G__10436;
count__10406 = G__10437;
i__10407 = G__10438;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__10404__$1);rep_node.call(null,cnode);
{
var G__10439 = cljs.core.next.call(null,seq__10404__$1);
var G__10440 = null;
var G__10441 = 0;
var G__10442 = 0;
seq__10404 = G__10439;
chunk__10405 = G__10440;
count__10406 = G__10441;
i__10407 = G__10442;
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
{var seq__10447 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));var chunk__10448 = null;var count__10449 = 0;var i__10450 = 0;while(true){
if((i__10450 < count__10449))
{var idx = cljs.core._nth.call(null,chunk__10448,i__10450);var el_10451 = (form_node.elements[idx]);var ky_10452 = cljs.core.keyword.call(null,el_10451.name);var val_10453 = ky_10452.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_10452))
{var val_10454__$1 = (cljs.core.truth_(val_10453)?val_10453:"");enfocus.core.set_form_input.call(null,val_10454__$1).call(null,el_10451);
} else
{}
{
var G__10455 = seq__10447;
var G__10456 = chunk__10448;
var G__10457 = count__10449;
var G__10458 = (i__10450 + 1);
seq__10447 = G__10455;
chunk__10448 = G__10456;
count__10449 = G__10457;
i__10450 = G__10458;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10447);if(temp__4092__auto__)
{var seq__10447__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10447__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10447__$1);{
var G__10459 = cljs.core.chunk_rest.call(null,seq__10447__$1);
var G__10460 = c__4191__auto__;
var G__10461 = cljs.core.count.call(null,c__4191__auto__);
var G__10462 = 0;
seq__10447 = G__10459;
chunk__10448 = G__10460;
count__10449 = G__10461;
i__10450 = G__10462;
continue;
}
} else
{var idx = cljs.core.first.call(null,seq__10447__$1);var el_10463 = (form_node.elements[idx]);var ky_10464 = cljs.core.keyword.call(null,el_10463.name);var val_10465 = ky_10464.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_10464))
{var val_10466__$1 = (cljs.core.truth_(val_10465)?val_10465:"");enfocus.core.set_form_input.call(null,val_10466__$1).call(null,el_10463);
} else
{}
{
var G__10467 = cljs.core.next.call(null,seq__10447__$1);
var G__10468 = null;
var G__10469 = 0;
var G__10470 = 0;
seq__10447 = G__10467;
chunk__10448 = G__10468;
count__10449 = G__10469;
i__10450 = G__10470;
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
{var vec__10480 = node_spec;var tag = cljs.core.nth.call(null,vec__10480,0,null);var vec__10481 = cljs.core.nthnext.call(null,vec__10480,1);var m = cljs.core.nth.call(null,vec__10481,0,null);var ms = cljs.core.nthnext.call(null,vec__10481,1);var more = vec__10481;var vec__10482 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__10482,0,null);var segments = cljs.core.nthnext.call(null,vec__10482,1);var id = cljs.core.some.call(null,((function (vec__10480,tag,vec__10481,m,ms,more,vec__10482,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__10480,tag,vec__10481,m,ms,more,vec__10482,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__10480,tag,vec__10481,m,ms,more,vec__10482,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__10480,tag,vec__10481,m,ms,more,vec__10482,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__10483_10489 = cljs.core.seq.call(null,attrs__$2);var chunk__10484_10490 = null;var count__10485_10491 = 0;var i__10486_10492 = 0;while(true){
if((i__10486_10492 < count__10485_10491))
{var vec__10487_10493 = cljs.core._nth.call(null,chunk__10484_10490,i__10486_10492);var key_10494 = cljs.core.nth.call(null,vec__10487_10493,0,null);var val_10495 = cljs.core.nth.call(null,vec__10487_10493,1,null);node.setAttribute(cljs.core.name.call(null,key_10494),val_10495);
{
var G__10496 = seq__10483_10489;
var G__10497 = chunk__10484_10490;
var G__10498 = count__10485_10491;
var G__10499 = (i__10486_10492 + 1);
seq__10483_10489 = G__10496;
chunk__10484_10490 = G__10497;
count__10485_10491 = G__10498;
i__10486_10492 = G__10499;
continue;
}
} else
{var temp__4092__auto___10500 = cljs.core.seq.call(null,seq__10483_10489);if(temp__4092__auto___10500)
{var seq__10483_10501__$1 = temp__4092__auto___10500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10483_10501__$1))
{var c__4191__auto___10502 = cljs.core.chunk_first.call(null,seq__10483_10501__$1);{
var G__10503 = cljs.core.chunk_rest.call(null,seq__10483_10501__$1);
var G__10504 = c__4191__auto___10502;
var G__10505 = cljs.core.count.call(null,c__4191__auto___10502);
var G__10506 = 0;
seq__10483_10489 = G__10503;
chunk__10484_10490 = G__10504;
count__10485_10491 = G__10505;
i__10486_10492 = G__10506;
continue;
}
} else
{var vec__10488_10507 = cljs.core.first.call(null,seq__10483_10501__$1);var key_10508 = cljs.core.nth.call(null,vec__10488_10507,0,null);var val_10509 = cljs.core.nth.call(null,vec__10488_10507,1,null);node.setAttribute(cljs.core.name.call(null,key_10508),val_10509);
{
var G__10510 = cljs.core.next.call(null,seq__10483_10501__$1);
var G__10511 = null;
var G__10512 = 0;
var G__10513 = 0;
seq__10483_10489 = G__10510;
chunk__10484_10490 = G__10511;
count__10485_10491 = G__10512;
i__10486_10492 = G__10513;
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
return (function (p1__10515_SHARP_,p2__10514_SHARP_){var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__10514_SHARP_));if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals)))
{return cljs.core.into.call(null,p1__10515_SHARP_,vals);
} else
{if(cljs.core.truth_(vals))
{return cljs.core.conj.call(null,p1__10515_SHARP_,vals);
} else
{return p1__10515_SHARP_;
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
});if(typeof enfocus.core.t10520 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t10520 = (function (trans,read_form_input,meta10521){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta10521 = meta10521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t10520.cljs$lang$type = true;
enfocus.core.t10520.cljs$lang$ctorStr = "enfocus.core/t10520";
enfocus.core.t10520.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t10520");
});
enfocus.core.t10520.prototype.call = (function() {
var G__10524 = null;
var G__10524__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__10524__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__10524 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__10524__2.call(this,self__,nodes);
case 3:
return G__10524__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10524;
})()
;
enfocus.core.t10520.prototype.apply = (function (self__,args10523){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10523)));
});
enfocus.core.t10520.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10520.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10520.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t10520.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t10520.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t10520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10522){var self__ = this;
var _10522__$1 = this;return self__.meta10521;
});
enfocus.core.t10520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10522,meta10521__$1){var self__ = this;
var _10522__$1 = this;return (new enfocus.core.t10520(self__.trans,self__.read_form_input,meta10521__$1));
});
enfocus.core.__GT_t10520 = (function __GT_t10520(trans__$1,read_form_input__$1,meta10521){return (new enfocus.core.t10520(trans__$1,read_form_input__$1,meta10521));
});
}
return (new enfocus.core.t10520(trans,read_form_input,null));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__10526_SHARP_,p2__10525_SHARP_){if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__10525_SHARP_).name)))
{return enfocus.core.merge_form_val.call(null,p1__10526_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__10525_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__10525_SHARP_)));
} else
{return p1__10526_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__10527_SHARP_){if((p1__10527_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__10527_SHARP_);
} else
{if((p1__10527_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__10527_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__10527_SHARP_))
{return create_sel_str.call(null,p1__10527_SHARP_);
} else
{if(typeof p1__10527_SHARP_ === 'string')
{return p1__10527_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__10538 = node;if(G__10538)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10538.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__10538.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10538);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10538);
}
} else
{return and__3431__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__10539 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__10539,0,null);var trans__$1 = cljs.core.nth.call(null,vec__10539,1,null);var seq__10540 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__10541 = null;var count__10542 = 0;var i__10543 = 0;while(true){
if((i__10543 < count__10542))
{var vec__10544 = cljs.core._nth.call(null,chunk__10541,i__10543);var sel = cljs.core.nth.call(null,vec__10544,0,null);var t = cljs.core.nth.call(null,vec__10544,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__10546 = seq__10540;
var G__10547 = chunk__10541;
var G__10548 = count__10542;
var G__10549 = (i__10543 + 1);
seq__10540 = G__10546;
chunk__10541 = G__10547;
count__10542 = G__10548;
i__10543 = G__10549;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10540);if(temp__4092__auto__)
{var seq__10540__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10540__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10540__$1);{
var G__10550 = cljs.core.chunk_rest.call(null,seq__10540__$1);
var G__10551 = c__4191__auto__;
var G__10552 = cljs.core.count.call(null,c__4191__auto__);
var G__10553 = 0;
seq__10540 = G__10550;
chunk__10541 = G__10551;
count__10542 = G__10552;
i__10543 = G__10553;
continue;
}
} else
{var vec__10545 = cljs.core.first.call(null,seq__10540__$1);var sel = cljs.core.nth.call(null,vec__10545,0,null);var t = cljs.core.nth.call(null,vec__10545,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__10554 = cljs.core.next.call(null,seq__10540__$1);
var G__10555 = null;
var G__10556 = 0;
var G__10557 = 0;
seq__10540 = G__10554;
chunk__10541 = G__10555;
count__10542 = G__10556;
i__10543 = G__10557;
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
i_at.cljs$lang$applyTo = (function (arglist__10558){
var id_mask = cljs.core.first(arglist__10558);
arglist__10558 = cljs.core.next(arglist__10558);
var node = cljs.core.first(arglist__10558);
var trans = cljs.core.rest(arglist__10558);
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
at.cljs$lang$applyTo = (function (arglist__10559){
var node = cljs.core.first(arglist__10559);
var trans = cljs.core.rest(arglist__10559);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__10564 = node;if(G__10564)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10564.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__10564.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10564);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10564);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__10565 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__10565,0,null);var trans__$1 = cljs.core.nth.call(null,vec__10565,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__10566){var vec__10567 = p__10566;var ky = cljs.core.nth.call(null,vec__10567,0,null);var sel = cljs.core.nth.call(null,vec__10567,1,null);var ext = cljs.core.nth.call(null,vec__10567,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__10568){
var node = cljs.core.first(arglist__10568);
var trans = cljs.core.rest(arglist__10568);
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
var G__10569 = null;
var G__10569__1 = (function (this$){return cljs.core.List.EMPTY;
});
var G__10569__2 = (function (this$,root){return cljs.core.List.EMPTY;
});
var G__10569__3 = (function (this$,root,id_mask){return cljs.core.List.EMPTY;
});
G__10569 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10569__1.call(this,this$);
case 2:
return G__10569__2.call(this,this$,root);
case 3:
return G__10569__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10569;
})()
);
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__10570 = null;
var G__10570__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__10570__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__10570__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__10570 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10570__1.call(this,this$);
case 2:
return G__10570__2.call(this,this$,root);
case 3:
return G__10570__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10570;
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
var G__10571 = null;
var G__10571__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__10571__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__10571__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__10571 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10571__1.call(this,this$);
case 2:
return G__10571__2.call(this,this$,root);
case 3:
return G__10571__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10571;
})()
);
(enfocus.core.ITransform["null"] = true);
(enfocus.core.apply_transform["null"] = (function() {
var G__10572 = null;
var G__10572__2 = (function (trans,nodes){return nodes;
});
var G__10572__3 = (function (trans,nodes,chain){return nodes;
});
G__10572 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__10572__2.call(this,trans,nodes);
case 3:
return G__10572__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10572;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__10573 = null;
var G__10573__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__10573__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__10573 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__10573__2.call(this,trans,nodes);
case 3:
return G__10573__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10573;
})()
);

//# sourceMappingURL=core.js.map