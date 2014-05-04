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
enfocus.core.ISelector = (function (){var obj6448 = {};return obj6448;
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
enfocus.core.ITransform = (function (){var obj6450 = {};return obj6450;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__6451_SHARP_){if(typeof p1__6451_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__6451_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__6451_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__6458_6464 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__6459_6465 = null;var count__6460_6466 = 0;var i__6461_6467 = 0;while(true){
if((i__6461_6467 < count__6460_6466))
{var vec__6462_6468 = cljs.core._nth.call(null,chunk__6459_6465,i__6461_6467);var attr_6469 = cljs.core.nth.call(null,vec__6462_6468,0,null);var value_6470 = cljs.core.nth.call(null,vec__6462_6468,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_6469),value_6470);
{
var G__6471 = seq__6458_6464;
var G__6472 = chunk__6459_6465;
var G__6473 = count__6460_6466;
var G__6474 = (i__6461_6467 + 1);
seq__6458_6464 = G__6471;
chunk__6459_6465 = G__6472;
count__6460_6466 = G__6473;
i__6461_6467 = G__6474;
continue;
}
} else
{var temp__4092__auto___6475 = cljs.core.seq.call(null,seq__6458_6464);if(temp__4092__auto___6475)
{var seq__6458_6476__$1 = temp__4092__auto___6475;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6458_6476__$1))
{var c__4191__auto___6477 = cljs.core.chunk_first.call(null,seq__6458_6476__$1);{
var G__6478 = cljs.core.chunk_rest.call(null,seq__6458_6476__$1);
var G__6479 = c__4191__auto___6477;
var G__6480 = cljs.core.count.call(null,c__4191__auto___6477);
var G__6481 = 0;
seq__6458_6464 = G__6478;
chunk__6459_6465 = G__6479;
count__6460_6466 = G__6480;
i__6461_6467 = G__6481;
continue;
}
} else
{var vec__6463_6482 = cljs.core.first.call(null,seq__6458_6476__$1);var attr_6483 = cljs.core.nth.call(null,vec__6463_6482,0,null);var value_6484 = cljs.core.nth.call(null,vec__6463_6482,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_6483),value_6484);
{
var G__6485 = cljs.core.next.call(null,seq__6458_6476__$1);
var G__6486 = null;
var G__6487 = 0;
var G__6488 = 0;
seq__6458_6464 = G__6485;
chunk__6459_6465 = G__6486;
count__6460_6466 = G__6487;
i__6461_6467 = G__6488;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__6493 = cljs.core.seq.call(null,values);var chunk__6494 = null;var count__6495 = 0;var i__6496 = 0;while(true){
if((i__6496 < count__6495))
{var attr = cljs.core._nth.call(null,chunk__6494,i__6496);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__6497 = seq__6493;
var G__6498 = chunk__6494;
var G__6499 = count__6495;
var G__6500 = (i__6496 + 1);
seq__6493 = G__6497;
chunk__6494 = G__6498;
count__6495 = G__6499;
i__6496 = G__6500;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6493);if(temp__4092__auto__)
{var seq__6493__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6493__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6493__$1);{
var G__6501 = cljs.core.chunk_rest.call(null,seq__6493__$1);
var G__6502 = c__4191__auto__;
var G__6503 = cljs.core.count.call(null,c__4191__auto__);
var G__6504 = 0;
seq__6493 = G__6501;
chunk__6494 = G__6502;
count__6495 = G__6503;
i__6496 = G__6504;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__6493__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__6505 = cljs.core.next.call(null,seq__6493__$1);
var G__6506 = null;
var G__6507 = 0;
var G__6508 = 0;
seq__6493 = G__6505;
chunk__6494 = G__6506;
count__6495 = G__6507;
i__6496 = G__6508;
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
{var seq__6515_6521 = cljs.core.seq.call(null,ats);var chunk__6516_6522 = null;var count__6517_6523 = 0;var i__6518_6524 = 0;while(true){
if((i__6518_6524 < count__6517_6523))
{var vec__6519_6525 = cljs.core._nth.call(null,chunk__6516_6522,i__6518_6524);var k_6526 = cljs.core.nth.call(null,vec__6519_6525,0,null);var v_6527 = cljs.core.nth.call(null,vec__6519_6525,1,null);add_map_attrs.call(null,elem,k_6526,v_6527);
{
var G__6528 = seq__6515_6521;
var G__6529 = chunk__6516_6522;
var G__6530 = count__6517_6523;
var G__6531 = (i__6518_6524 + 1);
seq__6515_6521 = G__6528;
chunk__6516_6522 = G__6529;
count__6517_6523 = G__6530;
i__6518_6524 = G__6531;
continue;
}
} else
{var temp__4092__auto___6532 = cljs.core.seq.call(null,seq__6515_6521);if(temp__4092__auto___6532)
{var seq__6515_6533__$1 = temp__4092__auto___6532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6515_6533__$1))
{var c__4191__auto___6534 = cljs.core.chunk_first.call(null,seq__6515_6533__$1);{
var G__6535 = cljs.core.chunk_rest.call(null,seq__6515_6533__$1);
var G__6536 = c__4191__auto___6534;
var G__6537 = cljs.core.count.call(null,c__4191__auto___6534);
var G__6538 = 0;
seq__6515_6521 = G__6535;
chunk__6516_6522 = G__6536;
count__6517_6523 = G__6537;
i__6518_6524 = G__6538;
continue;
}
} else
{var vec__6520_6539 = cljs.core.first.call(null,seq__6515_6533__$1);var k_6540 = cljs.core.nth.call(null,vec__6520_6539,0,null);var v_6541 = cljs.core.nth.call(null,vec__6520_6539,1,null);add_map_attrs.call(null,elem,k_6540,v_6541);
{
var G__6542 = cljs.core.next.call(null,seq__6515_6533__$1);
var G__6543 = null;
var G__6544 = 0;
var G__6545 = 0;
seq__6515_6521 = G__6542;
chunk__6516_6522 = G__6543;
count__6517_6523 = G__6544;
i__6518_6524 = G__6545;
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
var seq__6550_6554 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__6551_6555 = null;var count__6552_6556 = 0;var i__6553_6557 = 0;while(true){
if((i__6553_6557 < count__6552_6556))
{var node_6558 = cljs.core._nth.call(null,chunk__6551_6555,i__6553_6557);goog.dom.appendChild(div,node_6558);
{
var G__6559 = seq__6550_6554;
var G__6560 = chunk__6551_6555;
var G__6561 = count__6552_6556;
var G__6562 = (i__6553_6557 + 1);
seq__6550_6554 = G__6559;
chunk__6551_6555 = G__6560;
count__6552_6556 = G__6561;
i__6553_6557 = G__6562;
continue;
}
} else
{var temp__4092__auto___6563 = cljs.core.seq.call(null,seq__6550_6554);if(temp__4092__auto___6563)
{var seq__6550_6564__$1 = temp__4092__auto___6563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6550_6564__$1))
{var c__4191__auto___6565 = cljs.core.chunk_first.call(null,seq__6550_6564__$1);{
var G__6566 = cljs.core.chunk_rest.call(null,seq__6550_6564__$1);
var G__6567 = c__4191__auto___6565;
var G__6568 = cljs.core.count.call(null,c__4191__auto___6565);
var G__6569 = 0;
seq__6550_6554 = G__6566;
chunk__6551_6555 = G__6567;
count__6552_6556 = G__6568;
i__6553_6557 = G__6569;
continue;
}
} else
{var node_6570 = cljs.core.first.call(null,seq__6550_6564__$1);goog.dom.appendChild(div,node_6570);
{
var G__6571 = cljs.core.next.call(null,seq__6550_6564__$1);
var G__6572 = null;
var G__6573 = 0;
var G__6574 = 0;
seq__6550_6554 = G__6571;
chunk__6551_6555 = G__6572;
count__6552_6556 = G__6573;
i__6553_6557 = G__6574;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6575_SHARP_){var id = p1__6575_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__6575_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__6577 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__6577,0,null);var txt = cljs.core.nth.call(null,vec__6577,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__6582_6586 = cljs.core.seq.call(null,dfa);var chunk__6583_6587 = null;var count__6584_6588 = 0;var i__6585_6589 = 0;while(true){
if((i__6585_6589 < count__6584_6588))
{var df_6590 = cljs.core._nth.call(null,chunk__6583_6587,i__6585_6589);goog.dom.append(frag,df_6590);
{
var G__6591 = seq__6582_6586;
var G__6592 = chunk__6583_6587;
var G__6593 = count__6584_6588;
var G__6594 = (i__6585_6589 + 1);
seq__6582_6586 = G__6591;
chunk__6583_6587 = G__6592;
count__6584_6588 = G__6593;
i__6585_6589 = G__6594;
continue;
}
} else
{var temp__4092__auto___6595 = cljs.core.seq.call(null,seq__6582_6586);if(temp__4092__auto___6595)
{var seq__6582_6596__$1 = temp__4092__auto___6595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6582_6596__$1))
{var c__4191__auto___6597 = cljs.core.chunk_first.call(null,seq__6582_6596__$1);{
var G__6598 = cljs.core.chunk_rest.call(null,seq__6582_6596__$1);
var G__6599 = c__4191__auto___6597;
var G__6600 = cljs.core.count.call(null,c__4191__auto___6597);
var G__6601 = 0;
seq__6582_6586 = G__6598;
chunk__6583_6587 = G__6599;
count__6584_6588 = G__6600;
i__6585_6589 = G__6601;
continue;
}
} else
{var df_6602 = cljs.core.first.call(null,seq__6582_6596__$1);goog.dom.append(frag,df_6602);
{
var G__6603 = cljs.core.next.call(null,seq__6582_6596__$1);
var G__6604 = null;
var G__6605 = 0;
var G__6606 = 0;
seq__6582_6586 = G__6603;
chunk__6583_6587 = G__6604;
count__6584_6588 = G__6605;
i__6585_6589 = G__6606;
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
{var vec__6609 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__6609,0,null);var tdom = cljs.core.nth.call(null,vec__6609,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__6609,sym,tdom,dom,tsnip){
return (function (p1__6607_SHARP_){return p1__6607_SHARP_.outerHTML;
});})(vec__6609,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t6614 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6614 = (function (trans,filt,func,extr_multi_node,meta6615){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta6615 = meta6615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6614.cljs$lang$type = true;
enfocus.core.t6614.cljs$lang$ctorStr = "enfocus.core/t6614";
enfocus.core.t6614.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t6614");
});
enfocus.core.t6614.prototype.call = (function() {
var G__6618 = null;
var G__6618__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6618__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6618 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6618__2.call(this,self__,nodes);
case 3:
return G__6618__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6618;
})()
;
enfocus.core.t6614.prototype.apply = (function (self__,args6617){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6617)));
});
enfocus.core.t6614.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6614.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6614.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6614.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6614.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6616){var self__ = this;
var _6616__$1 = this;return self__.meta6615;
});
enfocus.core.t6614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6616,meta6615__$1){var self__ = this;
var _6616__$1 = this;return (new enfocus.core.t6614(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta6615__$1));
});
enfocus.core.__GT_t6614 = (function __GT_t6614(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta6615){return (new enfocus.core.t6614(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta6615));
});
}
return (new enfocus.core.t6614(trans,filt,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t6628 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6628 = (function (trans,func,multi_node_chain,meta6629){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta6629 = meta6629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6628.cljs$lang$type = true;
enfocus.core.t6628.cljs$lang$ctorStr = "enfocus.core/t6628";
enfocus.core.t6628.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t6628");
});
enfocus.core.t6628.prototype.call = (function() {
var G__6636 = null;
var G__6636__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6636__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6636 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6636__2.call(this,self__,nodes);
case 3:
return G__6636__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6636;
})()
;
enfocus.core.t6628.prototype.apply = (function (self__,args6631){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6631)));
});
enfocus.core.t6628.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6628.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6628.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6628.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6628.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6630){var self__ = this;
var _6630__$1 = this;return self__.meta6629;
});
enfocus.core.t6628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6630,meta6629__$1){var self__ = this;
var _6630__$1 = this;return (new enfocus.core.t6628(self__.trans,self__.func,self__.multi_node_chain,meta6629__$1));
});
enfocus.core.__GT_t6628 = (function __GT_t6628(trans__$1,func__$1,multi_node_chain__$1,meta6629){return (new enfocus.core.t6628(trans__$1,func__$1,multi_node_chain__$1,meta6629));
});
}
return (new enfocus.core.t6628(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__6619_SHARP_){return domina.nodes.call(null,p1__6619_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t6632 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6632 = (function (trans,func,values,multi_node_chain,meta6633){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta6633 = meta6633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6632.cljs$lang$type = true;
enfocus.core.t6632.cljs$lang$ctorStr = "enfocus.core/t6632";
enfocus.core.t6632.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t6632");
});
enfocus.core.t6632.prototype.call = (function() {
var G__6637 = null;
var G__6637__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6637__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6637 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6637__2.call(this,self__,nodes);
case 3:
return G__6637__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6637;
})()
;
enfocus.core.t6632.prototype.apply = (function (self__,args6635){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6635)));
});
enfocus.core.t6632.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6632.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6632.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6632.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6632.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6634){var self__ = this;
var _6634__$1 = this;return self__.meta6633;
});
enfocus.core.t6632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6634,meta6633__$1){var self__ = this;
var _6634__$1 = this;return (new enfocus.core.t6632(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta6633__$1));
});
enfocus.core.__GT_t6632 = (function __GT_t6632(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta6633){return (new enfocus.core.t6632(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta6633));
});
}
return (new enfocus.core.t6632(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6638_SHARP_,p2__6639_SHARP_){domina.destroy_children_BANG_.call(null,p1__6638_SHARP_);
return domina.append_BANG_.call(null,p1__6638_SHARP_,p2__6639_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__6640){
var values = cljs.core.seq(arglist__6640);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__6641_SHARP_){return domina.set_html_BANG_.call(null,p1__6641_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__6642_SHARP_){var seq__6649 = cljs.core.seq.call(null,pairs);var chunk__6650 = null;var count__6651 = 0;var i__6652 = 0;while(true){
if((i__6652 < count__6651))
{var vec__6653 = cljs.core._nth.call(null,chunk__6650,i__6652);var name = cljs.core.nth.call(null,vec__6653,0,null);var value = cljs.core.nth.call(null,vec__6653,1,null);domina.set_attr_BANG_.call(null,p1__6642_SHARP_,name,value);
{
var G__6655 = seq__6649;
var G__6656 = chunk__6650;
var G__6657 = count__6651;
var G__6658 = (i__6652 + 1);
seq__6649 = G__6655;
chunk__6650 = G__6656;
count__6651 = G__6657;
i__6652 = G__6658;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6649);if(temp__4092__auto__)
{var seq__6649__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6649__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6649__$1);{
var G__6659 = cljs.core.chunk_rest.call(null,seq__6649__$1);
var G__6660 = c__4191__auto__;
var G__6661 = cljs.core.count.call(null,c__4191__auto__);
var G__6662 = 0;
seq__6649 = G__6659;
chunk__6650 = G__6660;
count__6651 = G__6661;
i__6652 = G__6662;
continue;
}
} else
{var vec__6654 = cljs.core.first.call(null,seq__6649__$1);var name = cljs.core.nth.call(null,vec__6654,0,null);var value = cljs.core.nth.call(null,vec__6654,1,null);domina.set_attr_BANG_.call(null,p1__6642_SHARP_,name,value);
{
var G__6663 = cljs.core.next.call(null,seq__6649__$1);
var G__6664 = null;
var G__6665 = 0;
var G__6666 = 0;
seq__6649 = G__6663;
chunk__6650 = G__6664;
count__6651 = G__6665;
i__6652 = G__6666;
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
set_attr.cljs$lang$applyTo = (function (arglist__6667){
var values = cljs.core.seq(arglist__6667);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6668_SHARP_){var seq__6673 = cljs.core.seq.call(null,values);var chunk__6674 = null;var count__6675 = 0;var i__6676 = 0;while(true){
if((i__6676 < count__6675))
{var name = cljs.core._nth.call(null,chunk__6674,i__6676);domina.remove_attr_BANG_.call(null,p1__6668_SHARP_,name);
{
var G__6677 = seq__6673;
var G__6678 = chunk__6674;
var G__6679 = count__6675;
var G__6680 = (i__6676 + 1);
seq__6673 = G__6677;
chunk__6674 = G__6678;
count__6675 = G__6679;
i__6676 = G__6680;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6673);if(temp__4092__auto__)
{var seq__6673__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6673__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6673__$1);{
var G__6681 = cljs.core.chunk_rest.call(null,seq__6673__$1);
var G__6682 = c__4191__auto__;
var G__6683 = cljs.core.count.call(null,c__4191__auto__);
var G__6684 = 0;
seq__6673 = G__6681;
chunk__6674 = G__6682;
count__6675 = G__6683;
i__6676 = G__6684;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__6673__$1);domina.remove_attr_BANG_.call(null,p1__6668_SHARP_,name);
{
var G__6685 = cljs.core.next.call(null,seq__6673__$1);
var G__6686 = null;
var G__6687 = 0;
var G__6688 = 0;
seq__6673 = G__6685;
chunk__6674 = G__6686;
count__6675 = G__6687;
i__6676 = G__6688;
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
remove_attr.cljs$lang$applyTo = (function (arglist__6689){
var values = cljs.core.seq(arglist__6689);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__6692){var vec__6693 = p__6692;var n = cljs.core.nth.call(null,vec__6693,0,null);var v = cljs.core.nth.call(null,vec__6693,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__6694){
var forms = cljs.core.seq(arglist__6694);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6695_SHARP_){var seq__6700 = cljs.core.seq.call(null,values);var chunk__6701 = null;var count__6702 = 0;var i__6703 = 0;while(true){
if((i__6703 < count__6702))
{var val = cljs.core._nth.call(null,chunk__6701,i__6703);domina.add_class_BANG_.call(null,p1__6695_SHARP_,val);
{
var G__6704 = seq__6700;
var G__6705 = chunk__6701;
var G__6706 = count__6702;
var G__6707 = (i__6703 + 1);
seq__6700 = G__6704;
chunk__6701 = G__6705;
count__6702 = G__6706;
i__6703 = G__6707;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6700);if(temp__4092__auto__)
{var seq__6700__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6700__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6700__$1);{
var G__6708 = cljs.core.chunk_rest.call(null,seq__6700__$1);
var G__6709 = c__4191__auto__;
var G__6710 = cljs.core.count.call(null,c__4191__auto__);
var G__6711 = 0;
seq__6700 = G__6708;
chunk__6701 = G__6709;
count__6702 = G__6710;
i__6703 = G__6711;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__6700__$1);domina.add_class_BANG_.call(null,p1__6695_SHARP_,val);
{
var G__6712 = cljs.core.next.call(null,seq__6700__$1);
var G__6713 = null;
var G__6714 = 0;
var G__6715 = 0;
seq__6700 = G__6712;
chunk__6701 = G__6713;
count__6702 = G__6714;
i__6703 = G__6715;
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
add_class.cljs$lang$applyTo = (function (arglist__6716){
var values = cljs.core.seq(arglist__6716);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6717_SHARP_){var seq__6722 = cljs.core.seq.call(null,values);var chunk__6723 = null;var count__6724 = 0;var i__6725 = 0;while(true){
if((i__6725 < count__6724))
{var val = cljs.core._nth.call(null,chunk__6723,i__6725);domina.remove_class_BANG_.call(null,p1__6717_SHARP_,val);
{
var G__6726 = seq__6722;
var G__6727 = chunk__6723;
var G__6728 = count__6724;
var G__6729 = (i__6725 + 1);
seq__6722 = G__6726;
chunk__6723 = G__6727;
count__6724 = G__6728;
i__6725 = G__6729;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6722);if(temp__4092__auto__)
{var seq__6722__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6722__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6722__$1);{
var G__6730 = cljs.core.chunk_rest.call(null,seq__6722__$1);
var G__6731 = c__4191__auto__;
var G__6732 = cljs.core.count.call(null,c__4191__auto__);
var G__6733 = 0;
seq__6722 = G__6730;
chunk__6723 = G__6731;
count__6724 = G__6732;
i__6725 = G__6733;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__6722__$1);domina.remove_class_BANG_.call(null,p1__6717_SHARP_,val);
{
var G__6734 = cljs.core.next.call(null,seq__6722__$1);
var G__6735 = null;
var G__6736 = 0;
var G__6737 = 0;
seq__6722 = G__6734;
chunk__6723 = G__6735;
count__6724 = G__6736;
i__6725 = G__6737;
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
remove_class.cljs$lang$applyTo = (function (arglist__6738){
var values = cljs.core.seq(arglist__6738);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6739_SHARP_){return domina.set_classes_BANG_.call(null,p1__6739_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__6740){
var values = cljs.core.seq(arglist__6740);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__6745 = cljs.core.seq.call(null,forms);var chunk__6746 = null;var count__6747 = 0;var i__6748 = 0;while(true){
if((i__6748 < count__6747))
{var fun = cljs.core._nth.call(null,chunk__6746,i__6748);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__6749 = seq__6745;
var G__6750 = chunk__6746;
var G__6751 = count__6747;
var G__6752 = (i__6748 + 1);
seq__6745 = G__6749;
chunk__6746 = G__6750;
count__6747 = G__6751;
i__6748 = G__6752;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6745);if(temp__4092__auto__)
{var seq__6745__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6745__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6745__$1);{
var G__6753 = cljs.core.chunk_rest.call(null,seq__6745__$1);
var G__6754 = c__4191__auto__;
var G__6755 = cljs.core.count.call(null,c__4191__auto__);
var G__6756 = 0;
seq__6745 = G__6753;
chunk__6746 = G__6754;
count__6747 = G__6755;
i__6748 = G__6756;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__6745__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__6757 = cljs.core.next.call(null,seq__6745__$1);
var G__6758 = null;
var G__6759 = 0;
var G__6760 = 0;
seq__6745 = G__6757;
chunk__6746 = G__6758;
count__6747 = G__6759;
i__6748 = G__6760;
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
do__GT_.cljs$lang$applyTo = (function (arglist__6761){
var forms = cljs.core.seq(arglist__6761);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6762_SHARP_,p2__6763_SHARP_){return domina.append_BANG_.call(null,p1__6762_SHARP_,p2__6763_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__6764){
var values = cljs.core.seq(arglist__6764);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6765_SHARP_,p2__6766_SHARP_){return domina.prepend_BANG_.call(null,p1__6765_SHARP_,p2__6766_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__6767){
var values = cljs.core.seq(arglist__6767);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6768_SHARP_,p2__6769_SHARP_){return domina.insert_before_BANG_.call(null,p1__6768_SHARP_,p2__6769_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__6770){
var values = cljs.core.seq(arglist__6770);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6771_SHARP_,p2__6772_SHARP_){return domina.insert_after_BANG_.call(null,p1__6771_SHARP_,p2__6772_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__6773){
var values = cljs.core.seq(arglist__6773);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6774_SHARP_,p2__6775_SHARP_){return domina.swap_content_BANG_.call(null,p1__6774_SHARP_,p2__6775_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__6776){
var values = cljs.core.seq(arglist__6776);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__6777_SHARP_){return domina.detach_BANG_.call(null,p1__6777_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__6778_SHARP_){var seq__6785 = cljs.core.seq.call(null,pairs);var chunk__6786 = null;var count__6787 = 0;var i__6788 = 0;while(true){
if((i__6788 < count__6787))
{var vec__6789 = cljs.core._nth.call(null,chunk__6786,i__6788);var name = cljs.core.nth.call(null,vec__6789,0,null);var value = cljs.core.nth.call(null,vec__6789,1,null);domina.set_style_BANG_.call(null,p1__6778_SHARP_,name,value);
{
var G__6791 = seq__6785;
var G__6792 = chunk__6786;
var G__6793 = count__6787;
var G__6794 = (i__6788 + 1);
seq__6785 = G__6791;
chunk__6786 = G__6792;
count__6787 = G__6793;
i__6788 = G__6794;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6785);if(temp__4092__auto__)
{var seq__6785__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6785__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6785__$1);{
var G__6795 = cljs.core.chunk_rest.call(null,seq__6785__$1);
var G__6796 = c__4191__auto__;
var G__6797 = cljs.core.count.call(null,c__4191__auto__);
var G__6798 = 0;
seq__6785 = G__6795;
chunk__6786 = G__6796;
count__6787 = G__6797;
i__6788 = G__6798;
continue;
}
} else
{var vec__6790 = cljs.core.first.call(null,seq__6785__$1);var name = cljs.core.nth.call(null,vec__6790,0,null);var value = cljs.core.nth.call(null,vec__6790,1,null);domina.set_style_BANG_.call(null,p1__6778_SHARP_,name,value);
{
var G__6799 = cljs.core.next.call(null,seq__6785__$1);
var G__6800 = null;
var G__6801 = 0;
var G__6802 = 0;
seq__6785 = G__6799;
chunk__6786 = G__6800;
count__6787 = G__6801;
i__6788 = G__6802;
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
set_style.cljs$lang$applyTo = (function (arglist__6803){
var values = cljs.core.seq(arglist__6803);
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
remove_style.cljs$lang$applyTo = (function (arglist__6804){
var values = cljs.core.seq(arglist__6804);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__6805_SHARP_){return domina.set_data_BANG_.call(null,p1__6805_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__6806){
var ttime = cljs.core.first(arglist__6806);
var funcs = cljs.core.rest(arglist__6806);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__6808_SHARP_,p2__6807_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__6807_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__6833_6841 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__6834_6842 = null;var count__6835_6843 = 0;var i__6836_6844 = 0;while(true){
if((i__6836_6844 < count__6835_6843))
{var idx_6845 = cljs.core._nth.call(null,chunk__6834_6842,i__6836_6844);var attr_6846 = pnod.attributes.item(idx_6845);if(cljs.core.truth_(attr_6846.specified))
{attr_6846.value = rep_str.call(null,attr_6846.value);
} else
{}
{
var G__6847 = seq__6833_6841;
var G__6848 = chunk__6834_6842;
var G__6849 = count__6835_6843;
var G__6850 = (i__6836_6844 + 1);
seq__6833_6841 = G__6847;
chunk__6834_6842 = G__6848;
count__6835_6843 = G__6849;
i__6836_6844 = G__6850;
continue;
}
} else
{var temp__4092__auto___6851 = cljs.core.seq.call(null,seq__6833_6841);if(temp__4092__auto___6851)
{var seq__6833_6852__$1 = temp__4092__auto___6851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6833_6852__$1))
{var c__4191__auto___6853 = cljs.core.chunk_first.call(null,seq__6833_6852__$1);{
var G__6854 = cljs.core.chunk_rest.call(null,seq__6833_6852__$1);
var G__6855 = c__4191__auto___6853;
var G__6856 = cljs.core.count.call(null,c__4191__auto___6853);
var G__6857 = 0;
seq__6833_6841 = G__6854;
chunk__6834_6842 = G__6855;
count__6835_6843 = G__6856;
i__6836_6844 = G__6857;
continue;
}
} else
{var idx_6858 = cljs.core.first.call(null,seq__6833_6852__$1);var attr_6859 = pnod.attributes.item(idx_6858);if(cljs.core.truth_(attr_6859.specified))
{attr_6859.value = rep_str.call(null,attr_6859.value);
} else
{}
{
var G__6860 = cljs.core.next.call(null,seq__6833_6852__$1);
var G__6861 = null;
var G__6862 = 0;
var G__6863 = 0;
seq__6833_6841 = G__6860;
chunk__6834_6842 = G__6861;
count__6835_6843 = G__6862;
i__6836_6844 = G__6863;
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
{var seq__6837 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__6838 = null;var count__6839 = 0;var i__6840 = 0;while(true){
if((i__6840 < count__6839))
{var cnode = cljs.core._nth.call(null,chunk__6838,i__6840);rep_node.call(null,cnode);
{
var G__6864 = seq__6837;
var G__6865 = chunk__6838;
var G__6866 = count__6839;
var G__6867 = (i__6840 + 1);
seq__6837 = G__6864;
chunk__6838 = G__6865;
count__6839 = G__6866;
i__6840 = G__6867;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6837);if(temp__4092__auto__)
{var seq__6837__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6837__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6837__$1);{
var G__6868 = cljs.core.chunk_rest.call(null,seq__6837__$1);
var G__6869 = c__4191__auto__;
var G__6870 = cljs.core.count.call(null,c__4191__auto__);
var G__6871 = 0;
seq__6837 = G__6868;
chunk__6838 = G__6869;
count__6839 = G__6870;
i__6840 = G__6871;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__6837__$1);rep_node.call(null,cnode);
{
var G__6872 = cljs.core.next.call(null,seq__6837__$1);
var G__6873 = null;
var G__6874 = 0;
var G__6875 = 0;
seq__6837 = G__6872;
chunk__6838 = G__6873;
count__6839 = G__6874;
i__6840 = G__6875;
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
{var seq__6880 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));var chunk__6881 = null;var count__6882 = 0;var i__6883 = 0;while(true){
if((i__6883 < count__6882))
{var idx = cljs.core._nth.call(null,chunk__6881,i__6883);var el_6884 = (form_node.elements[idx]);var ky_6885 = cljs.core.keyword.call(null,el_6884.name);var val_6886 = ky_6885.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_6885))
{var val_6887__$1 = (cljs.core.truth_(val_6886)?val_6886:"");enfocus.core.set_form_input.call(null,val_6887__$1).call(null,el_6884);
} else
{}
{
var G__6888 = seq__6880;
var G__6889 = chunk__6881;
var G__6890 = count__6882;
var G__6891 = (i__6883 + 1);
seq__6880 = G__6888;
chunk__6881 = G__6889;
count__6882 = G__6890;
i__6883 = G__6891;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6880);if(temp__4092__auto__)
{var seq__6880__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6880__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6880__$1);{
var G__6892 = cljs.core.chunk_rest.call(null,seq__6880__$1);
var G__6893 = c__4191__auto__;
var G__6894 = cljs.core.count.call(null,c__4191__auto__);
var G__6895 = 0;
seq__6880 = G__6892;
chunk__6881 = G__6893;
count__6882 = G__6894;
i__6883 = G__6895;
continue;
}
} else
{var idx = cljs.core.first.call(null,seq__6880__$1);var el_6896 = (form_node.elements[idx]);var ky_6897 = cljs.core.keyword.call(null,el_6896.name);var val_6898 = ky_6897.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_6897))
{var val_6899__$1 = (cljs.core.truth_(val_6898)?val_6898:"");enfocus.core.set_form_input.call(null,val_6899__$1).call(null,el_6896);
} else
{}
{
var G__6900 = cljs.core.next.call(null,seq__6880__$1);
var G__6901 = null;
var G__6902 = 0;
var G__6903 = 0;
seq__6880 = G__6900;
chunk__6881 = G__6901;
count__6882 = G__6902;
i__6883 = G__6903;
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
{var vec__6913 = node_spec;var tag = cljs.core.nth.call(null,vec__6913,0,null);var vec__6914 = cljs.core.nthnext.call(null,vec__6913,1);var m = cljs.core.nth.call(null,vec__6914,0,null);var ms = cljs.core.nthnext.call(null,vec__6914,1);var more = vec__6914;var vec__6915 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__6915,0,null);var segments = cljs.core.nthnext.call(null,vec__6915,1);var id = cljs.core.some.call(null,((function (vec__6913,tag,vec__6914,m,ms,more,vec__6915,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__6913,tag,vec__6914,m,ms,more,vec__6915,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__6913,tag,vec__6914,m,ms,more,vec__6915,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__6913,tag,vec__6914,m,ms,more,vec__6915,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__6916_6922 = cljs.core.seq.call(null,attrs__$2);var chunk__6917_6923 = null;var count__6918_6924 = 0;var i__6919_6925 = 0;while(true){
if((i__6919_6925 < count__6918_6924))
{var vec__6920_6926 = cljs.core._nth.call(null,chunk__6917_6923,i__6919_6925);var key_6927 = cljs.core.nth.call(null,vec__6920_6926,0,null);var val_6928 = cljs.core.nth.call(null,vec__6920_6926,1,null);node.setAttribute(cljs.core.name.call(null,key_6927),val_6928);
{
var G__6929 = seq__6916_6922;
var G__6930 = chunk__6917_6923;
var G__6931 = count__6918_6924;
var G__6932 = (i__6919_6925 + 1);
seq__6916_6922 = G__6929;
chunk__6917_6923 = G__6930;
count__6918_6924 = G__6931;
i__6919_6925 = G__6932;
continue;
}
} else
{var temp__4092__auto___6933 = cljs.core.seq.call(null,seq__6916_6922);if(temp__4092__auto___6933)
{var seq__6916_6934__$1 = temp__4092__auto___6933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6916_6934__$1))
{var c__4191__auto___6935 = cljs.core.chunk_first.call(null,seq__6916_6934__$1);{
var G__6936 = cljs.core.chunk_rest.call(null,seq__6916_6934__$1);
var G__6937 = c__4191__auto___6935;
var G__6938 = cljs.core.count.call(null,c__4191__auto___6935);
var G__6939 = 0;
seq__6916_6922 = G__6936;
chunk__6917_6923 = G__6937;
count__6918_6924 = G__6938;
i__6919_6925 = G__6939;
continue;
}
} else
{var vec__6921_6940 = cljs.core.first.call(null,seq__6916_6934__$1);var key_6941 = cljs.core.nth.call(null,vec__6921_6940,0,null);var val_6942 = cljs.core.nth.call(null,vec__6921_6940,1,null);node.setAttribute(cljs.core.name.call(null,key_6941),val_6942);
{
var G__6943 = cljs.core.next.call(null,seq__6916_6934__$1);
var G__6944 = null;
var G__6945 = 0;
var G__6946 = 0;
seq__6916_6922 = G__6943;
chunk__6917_6923 = G__6944;
count__6918_6924 = G__6945;
i__6919_6925 = G__6946;
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
return (function (p1__6948_SHARP_,p2__6947_SHARP_){var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__6947_SHARP_));if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals)))
{return cljs.core.into.call(null,p1__6948_SHARP_,vals);
} else
{if(cljs.core.truth_(vals))
{return cljs.core.conj.call(null,p1__6948_SHARP_,vals);
} else
{return p1__6948_SHARP_;
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
});if(typeof enfocus.core.t6953 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6953 = (function (trans,read_form_input,meta6954){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta6954 = meta6954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6953.cljs$lang$type = true;
enfocus.core.t6953.cljs$lang$ctorStr = "enfocus.core/t6953";
enfocus.core.t6953.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t6953");
});
enfocus.core.t6953.prototype.call = (function() {
var G__6957 = null;
var G__6957__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6957__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6957 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6957__2.call(this,self__,nodes);
case 3:
return G__6957__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6957;
})()
;
enfocus.core.t6953.prototype.apply = (function (self__,args6956){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6956)));
});
enfocus.core.t6953.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6953.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6953.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6953.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6953.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6955){var self__ = this;
var _6955__$1 = this;return self__.meta6954;
});
enfocus.core.t6953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6955,meta6954__$1){var self__ = this;
var _6955__$1 = this;return (new enfocus.core.t6953(self__.trans,self__.read_form_input,meta6954__$1));
});
enfocus.core.__GT_t6953 = (function __GT_t6953(trans__$1,read_form_input__$1,meta6954){return (new enfocus.core.t6953(trans__$1,read_form_input__$1,meta6954));
});
}
return (new enfocus.core.t6953(trans,read_form_input,null));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__6959_SHARP_,p2__6958_SHARP_){if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__6958_SHARP_).name)))
{return enfocus.core.merge_form_val.call(null,p1__6959_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__6958_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__6958_SHARP_)));
} else
{return p1__6959_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__6960_SHARP_){if((p1__6960_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__6960_SHARP_);
} else
{if((p1__6960_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__6960_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__6960_SHARP_))
{return create_sel_str.call(null,p1__6960_SHARP_);
} else
{if(typeof p1__6960_SHARP_ === 'string')
{return p1__6960_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__6971 = node;if(G__6971)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6971.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__6971.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__6971);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__6971);
}
} else
{return and__3431__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__6972 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__6972,0,null);var trans__$1 = cljs.core.nth.call(null,vec__6972,1,null);var seq__6973 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__6974 = null;var count__6975 = 0;var i__6976 = 0;while(true){
if((i__6976 < count__6975))
{var vec__6977 = cljs.core._nth.call(null,chunk__6974,i__6976);var sel = cljs.core.nth.call(null,vec__6977,0,null);var t = cljs.core.nth.call(null,vec__6977,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__6979 = seq__6973;
var G__6980 = chunk__6974;
var G__6981 = count__6975;
var G__6982 = (i__6976 + 1);
seq__6973 = G__6979;
chunk__6974 = G__6980;
count__6975 = G__6981;
i__6976 = G__6982;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6973);if(temp__4092__auto__)
{var seq__6973__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6973__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6973__$1);{
var G__6983 = cljs.core.chunk_rest.call(null,seq__6973__$1);
var G__6984 = c__4191__auto__;
var G__6985 = cljs.core.count.call(null,c__4191__auto__);
var G__6986 = 0;
seq__6973 = G__6983;
chunk__6974 = G__6984;
count__6975 = G__6985;
i__6976 = G__6986;
continue;
}
} else
{var vec__6978 = cljs.core.first.call(null,seq__6973__$1);var sel = cljs.core.nth.call(null,vec__6978,0,null);var t = cljs.core.nth.call(null,vec__6978,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__6987 = cljs.core.next.call(null,seq__6973__$1);
var G__6988 = null;
var G__6989 = 0;
var G__6990 = 0;
seq__6973 = G__6987;
chunk__6974 = G__6988;
count__6975 = G__6989;
i__6976 = G__6990;
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
i_at.cljs$lang$applyTo = (function (arglist__6991){
var id_mask = cljs.core.first(arglist__6991);
arglist__6991 = cljs.core.next(arglist__6991);
var node = cljs.core.first(arglist__6991);
var trans = cljs.core.rest(arglist__6991);
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
at.cljs$lang$applyTo = (function (arglist__6992){
var node = cljs.core.first(arglist__6992);
var trans = cljs.core.rest(arglist__6992);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__6997 = node;if(G__6997)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6997.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__6997.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__6997);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__6997);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__6998 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__6998,0,null);var trans__$1 = cljs.core.nth.call(null,vec__6998,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__6999){var vec__7000 = p__6999;var ky = cljs.core.nth.call(null,vec__7000,0,null);var sel = cljs.core.nth.call(null,vec__7000,1,null);var ext = cljs.core.nth.call(null,vec__7000,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__7001){
var node = cljs.core.first(arglist__7001);
var trans = cljs.core.rest(arglist__7001);
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
var G__7002 = null;
var G__7002__1 = (function (this$){return cljs.core.List.EMPTY;
});
var G__7002__2 = (function (this$,root){return cljs.core.List.EMPTY;
});
var G__7002__3 = (function (this$,root,id_mask){return cljs.core.List.EMPTY;
});
G__7002 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__7002__1.call(this,this$);
case 2:
return G__7002__2.call(this,this$,root);
case 3:
return G__7002__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7002;
})()
);
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__7003 = null;
var G__7003__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__7003__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__7003__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__7003 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__7003__1.call(this,this$);
case 2:
return G__7003__2.call(this,this$,root);
case 3:
return G__7003__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7003;
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
var G__7004 = null;
var G__7004__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__7004__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__7004__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__7004 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__7004__1.call(this,this$);
case 2:
return G__7004__2.call(this,this$,root);
case 3:
return G__7004__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7004;
})()
);
(enfocus.core.ITransform["null"] = true);
(enfocus.core.apply_transform["null"] = (function() {
var G__7005 = null;
var G__7005__2 = (function (trans,nodes){return nodes;
});
var G__7005__3 = (function (trans,nodes,chain){return nodes;
});
G__7005 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__7005__2.call(this,trans,nodes);
case 3:
return G__7005__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7005;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__7006 = null;
var G__7006__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__7006__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__7006 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__7006__2.call(this,trans,nodes);
case 3:
return G__7006__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7006;
})()
);

//# sourceMappingURL=core.js.map