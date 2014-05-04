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
enfocus.core.ISelector = (function (){var obj9452 = {};return obj9452;
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
enfocus.core.ITransform = (function (){var obj9454 = {};return obj9454;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__9455_SHARP_){if(typeof p1__9455_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__9455_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__9455_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__9462_9468 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__9463_9469 = null;var count__9464_9470 = 0;var i__9465_9471 = 0;while(true){
if((i__9465_9471 < count__9464_9470))
{var vec__9466_9472 = cljs.core._nth.call(null,chunk__9463_9469,i__9465_9471);var attr_9473 = cljs.core.nth.call(null,vec__9466_9472,0,null);var value_9474 = cljs.core.nth.call(null,vec__9466_9472,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_9473),value_9474);
{
var G__9475 = seq__9462_9468;
var G__9476 = chunk__9463_9469;
var G__9477 = count__9464_9470;
var G__9478 = (i__9465_9471 + 1);
seq__9462_9468 = G__9475;
chunk__9463_9469 = G__9476;
count__9464_9470 = G__9477;
i__9465_9471 = G__9478;
continue;
}
} else
{var temp__4092__auto___9479 = cljs.core.seq.call(null,seq__9462_9468);if(temp__4092__auto___9479)
{var seq__9462_9480__$1 = temp__4092__auto___9479;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9462_9480__$1))
{var c__4191__auto___9481 = cljs.core.chunk_first.call(null,seq__9462_9480__$1);{
var G__9482 = cljs.core.chunk_rest.call(null,seq__9462_9480__$1);
var G__9483 = c__4191__auto___9481;
var G__9484 = cljs.core.count.call(null,c__4191__auto___9481);
var G__9485 = 0;
seq__9462_9468 = G__9482;
chunk__9463_9469 = G__9483;
count__9464_9470 = G__9484;
i__9465_9471 = G__9485;
continue;
}
} else
{var vec__9467_9486 = cljs.core.first.call(null,seq__9462_9480__$1);var attr_9487 = cljs.core.nth.call(null,vec__9467_9486,0,null);var value_9488 = cljs.core.nth.call(null,vec__9467_9486,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_9487),value_9488);
{
var G__9489 = cljs.core.next.call(null,seq__9462_9480__$1);
var G__9490 = null;
var G__9491 = 0;
var G__9492 = 0;
seq__9462_9468 = G__9489;
chunk__9463_9469 = G__9490;
count__9464_9470 = G__9491;
i__9465_9471 = G__9492;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__9497 = cljs.core.seq.call(null,values);var chunk__9498 = null;var count__9499 = 0;var i__9500 = 0;while(true){
if((i__9500 < count__9499))
{var attr = cljs.core._nth.call(null,chunk__9498,i__9500);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__9501 = seq__9497;
var G__9502 = chunk__9498;
var G__9503 = count__9499;
var G__9504 = (i__9500 + 1);
seq__9497 = G__9501;
chunk__9498 = G__9502;
count__9499 = G__9503;
i__9500 = G__9504;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9497);if(temp__4092__auto__)
{var seq__9497__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9497__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9497__$1);{
var G__9505 = cljs.core.chunk_rest.call(null,seq__9497__$1);
var G__9506 = c__4191__auto__;
var G__9507 = cljs.core.count.call(null,c__4191__auto__);
var G__9508 = 0;
seq__9497 = G__9505;
chunk__9498 = G__9506;
count__9499 = G__9507;
i__9500 = G__9508;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__9497__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__9509 = cljs.core.next.call(null,seq__9497__$1);
var G__9510 = null;
var G__9511 = 0;
var G__9512 = 0;
seq__9497 = G__9509;
chunk__9498 = G__9510;
count__9499 = G__9511;
i__9500 = G__9512;
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
{var seq__9519_9525 = cljs.core.seq.call(null,ats);var chunk__9520_9526 = null;var count__9521_9527 = 0;var i__9522_9528 = 0;while(true){
if((i__9522_9528 < count__9521_9527))
{var vec__9523_9529 = cljs.core._nth.call(null,chunk__9520_9526,i__9522_9528);var k_9530 = cljs.core.nth.call(null,vec__9523_9529,0,null);var v_9531 = cljs.core.nth.call(null,vec__9523_9529,1,null);add_map_attrs.call(null,elem,k_9530,v_9531);
{
var G__9532 = seq__9519_9525;
var G__9533 = chunk__9520_9526;
var G__9534 = count__9521_9527;
var G__9535 = (i__9522_9528 + 1);
seq__9519_9525 = G__9532;
chunk__9520_9526 = G__9533;
count__9521_9527 = G__9534;
i__9522_9528 = G__9535;
continue;
}
} else
{var temp__4092__auto___9536 = cljs.core.seq.call(null,seq__9519_9525);if(temp__4092__auto___9536)
{var seq__9519_9537__$1 = temp__4092__auto___9536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9519_9537__$1))
{var c__4191__auto___9538 = cljs.core.chunk_first.call(null,seq__9519_9537__$1);{
var G__9539 = cljs.core.chunk_rest.call(null,seq__9519_9537__$1);
var G__9540 = c__4191__auto___9538;
var G__9541 = cljs.core.count.call(null,c__4191__auto___9538);
var G__9542 = 0;
seq__9519_9525 = G__9539;
chunk__9520_9526 = G__9540;
count__9521_9527 = G__9541;
i__9522_9528 = G__9542;
continue;
}
} else
{var vec__9524_9543 = cljs.core.first.call(null,seq__9519_9537__$1);var k_9544 = cljs.core.nth.call(null,vec__9524_9543,0,null);var v_9545 = cljs.core.nth.call(null,vec__9524_9543,1,null);add_map_attrs.call(null,elem,k_9544,v_9545);
{
var G__9546 = cljs.core.next.call(null,seq__9519_9537__$1);
var G__9547 = null;
var G__9548 = 0;
var G__9549 = 0;
seq__9519_9525 = G__9546;
chunk__9520_9526 = G__9547;
count__9521_9527 = G__9548;
i__9522_9528 = G__9549;
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
var seq__9554_9558 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__9555_9559 = null;var count__9556_9560 = 0;var i__9557_9561 = 0;while(true){
if((i__9557_9561 < count__9556_9560))
{var node_9562 = cljs.core._nth.call(null,chunk__9555_9559,i__9557_9561);goog.dom.appendChild(div,node_9562);
{
var G__9563 = seq__9554_9558;
var G__9564 = chunk__9555_9559;
var G__9565 = count__9556_9560;
var G__9566 = (i__9557_9561 + 1);
seq__9554_9558 = G__9563;
chunk__9555_9559 = G__9564;
count__9556_9560 = G__9565;
i__9557_9561 = G__9566;
continue;
}
} else
{var temp__4092__auto___9567 = cljs.core.seq.call(null,seq__9554_9558);if(temp__4092__auto___9567)
{var seq__9554_9568__$1 = temp__4092__auto___9567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9554_9568__$1))
{var c__4191__auto___9569 = cljs.core.chunk_first.call(null,seq__9554_9568__$1);{
var G__9570 = cljs.core.chunk_rest.call(null,seq__9554_9568__$1);
var G__9571 = c__4191__auto___9569;
var G__9572 = cljs.core.count.call(null,c__4191__auto___9569);
var G__9573 = 0;
seq__9554_9558 = G__9570;
chunk__9555_9559 = G__9571;
count__9556_9560 = G__9572;
i__9557_9561 = G__9573;
continue;
}
} else
{var node_9574 = cljs.core.first.call(null,seq__9554_9568__$1);goog.dom.appendChild(div,node_9574);
{
var G__9575 = cljs.core.next.call(null,seq__9554_9568__$1);
var G__9576 = null;
var G__9577 = 0;
var G__9578 = 0;
seq__9554_9558 = G__9575;
chunk__9555_9559 = G__9576;
count__9556_9560 = G__9577;
i__9557_9561 = G__9578;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__9579_SHARP_){var id = p1__9579_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__9579_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__9581 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__9581,0,null);var txt = cljs.core.nth.call(null,vec__9581,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__9586_9590 = cljs.core.seq.call(null,dfa);var chunk__9587_9591 = null;var count__9588_9592 = 0;var i__9589_9593 = 0;while(true){
if((i__9589_9593 < count__9588_9592))
{var df_9594 = cljs.core._nth.call(null,chunk__9587_9591,i__9589_9593);goog.dom.append(frag,df_9594);
{
var G__9595 = seq__9586_9590;
var G__9596 = chunk__9587_9591;
var G__9597 = count__9588_9592;
var G__9598 = (i__9589_9593 + 1);
seq__9586_9590 = G__9595;
chunk__9587_9591 = G__9596;
count__9588_9592 = G__9597;
i__9589_9593 = G__9598;
continue;
}
} else
{var temp__4092__auto___9599 = cljs.core.seq.call(null,seq__9586_9590);if(temp__4092__auto___9599)
{var seq__9586_9600__$1 = temp__4092__auto___9599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9586_9600__$1))
{var c__4191__auto___9601 = cljs.core.chunk_first.call(null,seq__9586_9600__$1);{
var G__9602 = cljs.core.chunk_rest.call(null,seq__9586_9600__$1);
var G__9603 = c__4191__auto___9601;
var G__9604 = cljs.core.count.call(null,c__4191__auto___9601);
var G__9605 = 0;
seq__9586_9590 = G__9602;
chunk__9587_9591 = G__9603;
count__9588_9592 = G__9604;
i__9589_9593 = G__9605;
continue;
}
} else
{var df_9606 = cljs.core.first.call(null,seq__9586_9600__$1);goog.dom.append(frag,df_9606);
{
var G__9607 = cljs.core.next.call(null,seq__9586_9600__$1);
var G__9608 = null;
var G__9609 = 0;
var G__9610 = 0;
seq__9586_9590 = G__9607;
chunk__9587_9591 = G__9608;
count__9588_9592 = G__9609;
i__9589_9593 = G__9610;
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
{var vec__9613 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__9613,0,null);var tdom = cljs.core.nth.call(null,vec__9613,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__9613,sym,tdom,dom,tsnip){
return (function (p1__9611_SHARP_){return p1__9611_SHARP_.outerHTML;
});})(vec__9613,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t9618 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t9618 = (function (trans,filt,func,extr_multi_node,meta9619){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta9619 = meta9619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t9618.cljs$lang$type = true;
enfocus.core.t9618.cljs$lang$ctorStr = "enfocus.core/t9618";
enfocus.core.t9618.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t9618");
});
enfocus.core.t9618.prototype.call = (function() {
var G__9622 = null;
var G__9622__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__9622__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__9622 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__9622__2.call(this,self__,nodes);
case 3:
return G__9622__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9622;
})()
;
enfocus.core.t9618.prototype.apply = (function (self__,args9621){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9621)));
});
enfocus.core.t9618.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t9618.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t9618.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t9618.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t9618.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t9618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9620){var self__ = this;
var _9620__$1 = this;return self__.meta9619;
});
enfocus.core.t9618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9620,meta9619__$1){var self__ = this;
var _9620__$1 = this;return (new enfocus.core.t9618(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta9619__$1));
});
enfocus.core.__GT_t9618 = (function __GT_t9618(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta9619){return (new enfocus.core.t9618(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta9619));
});
}
return (new enfocus.core.t9618(trans,filt,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t9632 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t9632 = (function (trans,func,multi_node_chain,meta9633){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta9633 = meta9633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t9632.cljs$lang$type = true;
enfocus.core.t9632.cljs$lang$ctorStr = "enfocus.core/t9632";
enfocus.core.t9632.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t9632");
});
enfocus.core.t9632.prototype.call = (function() {
var G__9640 = null;
var G__9640__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__9640__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__9640 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__9640__2.call(this,self__,nodes);
case 3:
return G__9640__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9640;
})()
;
enfocus.core.t9632.prototype.apply = (function (self__,args9635){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9635)));
});
enfocus.core.t9632.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t9632.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t9632.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t9632.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t9632.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t9632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9634){var self__ = this;
var _9634__$1 = this;return self__.meta9633;
});
enfocus.core.t9632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9634,meta9633__$1){var self__ = this;
var _9634__$1 = this;return (new enfocus.core.t9632(self__.trans,self__.func,self__.multi_node_chain,meta9633__$1));
});
enfocus.core.__GT_t9632 = (function __GT_t9632(trans__$1,func__$1,multi_node_chain__$1,meta9633){return (new enfocus.core.t9632(trans__$1,func__$1,multi_node_chain__$1,meta9633));
});
}
return (new enfocus.core.t9632(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__9623_SHARP_){return domina.nodes.call(null,p1__9623_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t9636 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t9636 = (function (trans,func,values,multi_node_chain,meta9637){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta9637 = meta9637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t9636.cljs$lang$type = true;
enfocus.core.t9636.cljs$lang$ctorStr = "enfocus.core/t9636";
enfocus.core.t9636.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t9636");
});
enfocus.core.t9636.prototype.call = (function() {
var G__9641 = null;
var G__9641__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__9641__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__9641 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__9641__2.call(this,self__,nodes);
case 3:
return G__9641__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9641;
})()
;
enfocus.core.t9636.prototype.apply = (function (self__,args9639){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9639)));
});
enfocus.core.t9636.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t9636.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t9636.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t9636.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t9636.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t9636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9638){var self__ = this;
var _9638__$1 = this;return self__.meta9637;
});
enfocus.core.t9636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9638,meta9637__$1){var self__ = this;
var _9638__$1 = this;return (new enfocus.core.t9636(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta9637__$1));
});
enfocus.core.__GT_t9636 = (function __GT_t9636(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta9637){return (new enfocus.core.t9636(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta9637));
});
}
return (new enfocus.core.t9636(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__9642_SHARP_,p2__9643_SHARP_){domina.destroy_children_BANG_.call(null,p1__9642_SHARP_);
return domina.append_BANG_.call(null,p1__9642_SHARP_,p2__9643_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__9644){
var values = cljs.core.seq(arglist__9644);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__9645_SHARP_){return domina.set_html_BANG_.call(null,p1__9645_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__9646_SHARP_){var seq__9653 = cljs.core.seq.call(null,pairs);var chunk__9654 = null;var count__9655 = 0;var i__9656 = 0;while(true){
if((i__9656 < count__9655))
{var vec__9657 = cljs.core._nth.call(null,chunk__9654,i__9656);var name = cljs.core.nth.call(null,vec__9657,0,null);var value = cljs.core.nth.call(null,vec__9657,1,null);domina.set_attr_BANG_.call(null,p1__9646_SHARP_,name,value);
{
var G__9659 = seq__9653;
var G__9660 = chunk__9654;
var G__9661 = count__9655;
var G__9662 = (i__9656 + 1);
seq__9653 = G__9659;
chunk__9654 = G__9660;
count__9655 = G__9661;
i__9656 = G__9662;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9653);if(temp__4092__auto__)
{var seq__9653__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9653__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9653__$1);{
var G__9663 = cljs.core.chunk_rest.call(null,seq__9653__$1);
var G__9664 = c__4191__auto__;
var G__9665 = cljs.core.count.call(null,c__4191__auto__);
var G__9666 = 0;
seq__9653 = G__9663;
chunk__9654 = G__9664;
count__9655 = G__9665;
i__9656 = G__9666;
continue;
}
} else
{var vec__9658 = cljs.core.first.call(null,seq__9653__$1);var name = cljs.core.nth.call(null,vec__9658,0,null);var value = cljs.core.nth.call(null,vec__9658,1,null);domina.set_attr_BANG_.call(null,p1__9646_SHARP_,name,value);
{
var G__9667 = cljs.core.next.call(null,seq__9653__$1);
var G__9668 = null;
var G__9669 = 0;
var G__9670 = 0;
seq__9653 = G__9667;
chunk__9654 = G__9668;
count__9655 = G__9669;
i__9656 = G__9670;
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
set_attr.cljs$lang$applyTo = (function (arglist__9671){
var values = cljs.core.seq(arglist__9671);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__9672_SHARP_){var seq__9677 = cljs.core.seq.call(null,values);var chunk__9678 = null;var count__9679 = 0;var i__9680 = 0;while(true){
if((i__9680 < count__9679))
{var name = cljs.core._nth.call(null,chunk__9678,i__9680);domina.remove_attr_BANG_.call(null,p1__9672_SHARP_,name);
{
var G__9681 = seq__9677;
var G__9682 = chunk__9678;
var G__9683 = count__9679;
var G__9684 = (i__9680 + 1);
seq__9677 = G__9681;
chunk__9678 = G__9682;
count__9679 = G__9683;
i__9680 = G__9684;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9677);if(temp__4092__auto__)
{var seq__9677__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9677__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9677__$1);{
var G__9685 = cljs.core.chunk_rest.call(null,seq__9677__$1);
var G__9686 = c__4191__auto__;
var G__9687 = cljs.core.count.call(null,c__4191__auto__);
var G__9688 = 0;
seq__9677 = G__9685;
chunk__9678 = G__9686;
count__9679 = G__9687;
i__9680 = G__9688;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__9677__$1);domina.remove_attr_BANG_.call(null,p1__9672_SHARP_,name);
{
var G__9689 = cljs.core.next.call(null,seq__9677__$1);
var G__9690 = null;
var G__9691 = 0;
var G__9692 = 0;
seq__9677 = G__9689;
chunk__9678 = G__9690;
count__9679 = G__9691;
i__9680 = G__9692;
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
remove_attr.cljs$lang$applyTo = (function (arglist__9693){
var values = cljs.core.seq(arglist__9693);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__9696){var vec__9697 = p__9696;var n = cljs.core.nth.call(null,vec__9697,0,null);var v = cljs.core.nth.call(null,vec__9697,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__9698){
var forms = cljs.core.seq(arglist__9698);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__9699_SHARP_){var seq__9704 = cljs.core.seq.call(null,values);var chunk__9705 = null;var count__9706 = 0;var i__9707 = 0;while(true){
if((i__9707 < count__9706))
{var val = cljs.core._nth.call(null,chunk__9705,i__9707);domina.add_class_BANG_.call(null,p1__9699_SHARP_,val);
{
var G__9708 = seq__9704;
var G__9709 = chunk__9705;
var G__9710 = count__9706;
var G__9711 = (i__9707 + 1);
seq__9704 = G__9708;
chunk__9705 = G__9709;
count__9706 = G__9710;
i__9707 = G__9711;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9704);if(temp__4092__auto__)
{var seq__9704__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9704__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9704__$1);{
var G__9712 = cljs.core.chunk_rest.call(null,seq__9704__$1);
var G__9713 = c__4191__auto__;
var G__9714 = cljs.core.count.call(null,c__4191__auto__);
var G__9715 = 0;
seq__9704 = G__9712;
chunk__9705 = G__9713;
count__9706 = G__9714;
i__9707 = G__9715;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__9704__$1);domina.add_class_BANG_.call(null,p1__9699_SHARP_,val);
{
var G__9716 = cljs.core.next.call(null,seq__9704__$1);
var G__9717 = null;
var G__9718 = 0;
var G__9719 = 0;
seq__9704 = G__9716;
chunk__9705 = G__9717;
count__9706 = G__9718;
i__9707 = G__9719;
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
add_class.cljs$lang$applyTo = (function (arglist__9720){
var values = cljs.core.seq(arglist__9720);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__9721_SHARP_){var seq__9726 = cljs.core.seq.call(null,values);var chunk__9727 = null;var count__9728 = 0;var i__9729 = 0;while(true){
if((i__9729 < count__9728))
{var val = cljs.core._nth.call(null,chunk__9727,i__9729);domina.remove_class_BANG_.call(null,p1__9721_SHARP_,val);
{
var G__9730 = seq__9726;
var G__9731 = chunk__9727;
var G__9732 = count__9728;
var G__9733 = (i__9729 + 1);
seq__9726 = G__9730;
chunk__9727 = G__9731;
count__9728 = G__9732;
i__9729 = G__9733;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9726);if(temp__4092__auto__)
{var seq__9726__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9726__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9726__$1);{
var G__9734 = cljs.core.chunk_rest.call(null,seq__9726__$1);
var G__9735 = c__4191__auto__;
var G__9736 = cljs.core.count.call(null,c__4191__auto__);
var G__9737 = 0;
seq__9726 = G__9734;
chunk__9727 = G__9735;
count__9728 = G__9736;
i__9729 = G__9737;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__9726__$1);domina.remove_class_BANG_.call(null,p1__9721_SHARP_,val);
{
var G__9738 = cljs.core.next.call(null,seq__9726__$1);
var G__9739 = null;
var G__9740 = 0;
var G__9741 = 0;
seq__9726 = G__9738;
chunk__9727 = G__9739;
count__9728 = G__9740;
i__9729 = G__9741;
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
remove_class.cljs$lang$applyTo = (function (arglist__9742){
var values = cljs.core.seq(arglist__9742);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__9743_SHARP_){return domina.set_classes_BANG_.call(null,p1__9743_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__9744){
var values = cljs.core.seq(arglist__9744);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__9749 = cljs.core.seq.call(null,forms);var chunk__9750 = null;var count__9751 = 0;var i__9752 = 0;while(true){
if((i__9752 < count__9751))
{var fun = cljs.core._nth.call(null,chunk__9750,i__9752);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__9753 = seq__9749;
var G__9754 = chunk__9750;
var G__9755 = count__9751;
var G__9756 = (i__9752 + 1);
seq__9749 = G__9753;
chunk__9750 = G__9754;
count__9751 = G__9755;
i__9752 = G__9756;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9749);if(temp__4092__auto__)
{var seq__9749__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9749__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9749__$1);{
var G__9757 = cljs.core.chunk_rest.call(null,seq__9749__$1);
var G__9758 = c__4191__auto__;
var G__9759 = cljs.core.count.call(null,c__4191__auto__);
var G__9760 = 0;
seq__9749 = G__9757;
chunk__9750 = G__9758;
count__9751 = G__9759;
i__9752 = G__9760;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__9749__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__9761 = cljs.core.next.call(null,seq__9749__$1);
var G__9762 = null;
var G__9763 = 0;
var G__9764 = 0;
seq__9749 = G__9761;
chunk__9750 = G__9762;
count__9751 = G__9763;
i__9752 = G__9764;
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
do__GT_.cljs$lang$applyTo = (function (arglist__9765){
var forms = cljs.core.seq(arglist__9765);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__9766_SHARP_,p2__9767_SHARP_){return domina.append_BANG_.call(null,p1__9766_SHARP_,p2__9767_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__9768){
var values = cljs.core.seq(arglist__9768);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__9769_SHARP_,p2__9770_SHARP_){return domina.prepend_BANG_.call(null,p1__9769_SHARP_,p2__9770_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__9771){
var values = cljs.core.seq(arglist__9771);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__9772_SHARP_,p2__9773_SHARP_){return domina.insert_before_BANG_.call(null,p1__9772_SHARP_,p2__9773_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__9774){
var values = cljs.core.seq(arglist__9774);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__9775_SHARP_,p2__9776_SHARP_){return domina.insert_after_BANG_.call(null,p1__9775_SHARP_,p2__9776_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__9777){
var values = cljs.core.seq(arglist__9777);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__9778_SHARP_,p2__9779_SHARP_){return domina.swap_content_BANG_.call(null,p1__9778_SHARP_,p2__9779_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__9780){
var values = cljs.core.seq(arglist__9780);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__9781_SHARP_){return domina.detach_BANG_.call(null,p1__9781_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__9782_SHARP_){var seq__9789 = cljs.core.seq.call(null,pairs);var chunk__9790 = null;var count__9791 = 0;var i__9792 = 0;while(true){
if((i__9792 < count__9791))
{var vec__9793 = cljs.core._nth.call(null,chunk__9790,i__9792);var name = cljs.core.nth.call(null,vec__9793,0,null);var value = cljs.core.nth.call(null,vec__9793,1,null);domina.set_style_BANG_.call(null,p1__9782_SHARP_,name,value);
{
var G__9795 = seq__9789;
var G__9796 = chunk__9790;
var G__9797 = count__9791;
var G__9798 = (i__9792 + 1);
seq__9789 = G__9795;
chunk__9790 = G__9796;
count__9791 = G__9797;
i__9792 = G__9798;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9789);if(temp__4092__auto__)
{var seq__9789__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9789__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9789__$1);{
var G__9799 = cljs.core.chunk_rest.call(null,seq__9789__$1);
var G__9800 = c__4191__auto__;
var G__9801 = cljs.core.count.call(null,c__4191__auto__);
var G__9802 = 0;
seq__9789 = G__9799;
chunk__9790 = G__9800;
count__9791 = G__9801;
i__9792 = G__9802;
continue;
}
} else
{var vec__9794 = cljs.core.first.call(null,seq__9789__$1);var name = cljs.core.nth.call(null,vec__9794,0,null);var value = cljs.core.nth.call(null,vec__9794,1,null);domina.set_style_BANG_.call(null,p1__9782_SHARP_,name,value);
{
var G__9803 = cljs.core.next.call(null,seq__9789__$1);
var G__9804 = null;
var G__9805 = 0;
var G__9806 = 0;
seq__9789 = G__9803;
chunk__9790 = G__9804;
count__9791 = G__9805;
i__9792 = G__9806;
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
set_style.cljs$lang$applyTo = (function (arglist__9807){
var values = cljs.core.seq(arglist__9807);
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
remove_style.cljs$lang$applyTo = (function (arglist__9808){
var values = cljs.core.seq(arglist__9808);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__9809_SHARP_){return domina.set_data_BANG_.call(null,p1__9809_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__9810){
var ttime = cljs.core.first(arglist__9810);
var funcs = cljs.core.rest(arglist__9810);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__9812_SHARP_,p2__9811_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__9811_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__9837_9845 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__9838_9846 = null;var count__9839_9847 = 0;var i__9840_9848 = 0;while(true){
if((i__9840_9848 < count__9839_9847))
{var idx_9849 = cljs.core._nth.call(null,chunk__9838_9846,i__9840_9848);var attr_9850 = pnod.attributes.item(idx_9849);if(cljs.core.truth_(attr_9850.specified))
{attr_9850.value = rep_str.call(null,attr_9850.value);
} else
{}
{
var G__9851 = seq__9837_9845;
var G__9852 = chunk__9838_9846;
var G__9853 = count__9839_9847;
var G__9854 = (i__9840_9848 + 1);
seq__9837_9845 = G__9851;
chunk__9838_9846 = G__9852;
count__9839_9847 = G__9853;
i__9840_9848 = G__9854;
continue;
}
} else
{var temp__4092__auto___9855 = cljs.core.seq.call(null,seq__9837_9845);if(temp__4092__auto___9855)
{var seq__9837_9856__$1 = temp__4092__auto___9855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9837_9856__$1))
{var c__4191__auto___9857 = cljs.core.chunk_first.call(null,seq__9837_9856__$1);{
var G__9858 = cljs.core.chunk_rest.call(null,seq__9837_9856__$1);
var G__9859 = c__4191__auto___9857;
var G__9860 = cljs.core.count.call(null,c__4191__auto___9857);
var G__9861 = 0;
seq__9837_9845 = G__9858;
chunk__9838_9846 = G__9859;
count__9839_9847 = G__9860;
i__9840_9848 = G__9861;
continue;
}
} else
{var idx_9862 = cljs.core.first.call(null,seq__9837_9856__$1);var attr_9863 = pnod.attributes.item(idx_9862);if(cljs.core.truth_(attr_9863.specified))
{attr_9863.value = rep_str.call(null,attr_9863.value);
} else
{}
{
var G__9864 = cljs.core.next.call(null,seq__9837_9856__$1);
var G__9865 = null;
var G__9866 = 0;
var G__9867 = 0;
seq__9837_9845 = G__9864;
chunk__9838_9846 = G__9865;
count__9839_9847 = G__9866;
i__9840_9848 = G__9867;
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
{var seq__9841 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__9842 = null;var count__9843 = 0;var i__9844 = 0;while(true){
if((i__9844 < count__9843))
{var cnode = cljs.core._nth.call(null,chunk__9842,i__9844);rep_node.call(null,cnode);
{
var G__9868 = seq__9841;
var G__9869 = chunk__9842;
var G__9870 = count__9843;
var G__9871 = (i__9844 + 1);
seq__9841 = G__9868;
chunk__9842 = G__9869;
count__9843 = G__9870;
i__9844 = G__9871;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9841);if(temp__4092__auto__)
{var seq__9841__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9841__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9841__$1);{
var G__9872 = cljs.core.chunk_rest.call(null,seq__9841__$1);
var G__9873 = c__4191__auto__;
var G__9874 = cljs.core.count.call(null,c__4191__auto__);
var G__9875 = 0;
seq__9841 = G__9872;
chunk__9842 = G__9873;
count__9843 = G__9874;
i__9844 = G__9875;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__9841__$1);rep_node.call(null,cnode);
{
var G__9876 = cljs.core.next.call(null,seq__9841__$1);
var G__9877 = null;
var G__9878 = 0;
var G__9879 = 0;
seq__9841 = G__9876;
chunk__9842 = G__9877;
count__9843 = G__9878;
i__9844 = G__9879;
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
{var seq__9884 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));var chunk__9885 = null;var count__9886 = 0;var i__9887 = 0;while(true){
if((i__9887 < count__9886))
{var idx = cljs.core._nth.call(null,chunk__9885,i__9887);var el_9888 = (form_node.elements[idx]);var ky_9889 = cljs.core.keyword.call(null,el_9888.name);var val_9890 = ky_9889.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_9889))
{var val_9891__$1 = (cljs.core.truth_(val_9890)?val_9890:"");enfocus.core.set_form_input.call(null,val_9891__$1).call(null,el_9888);
} else
{}
{
var G__9892 = seq__9884;
var G__9893 = chunk__9885;
var G__9894 = count__9886;
var G__9895 = (i__9887 + 1);
seq__9884 = G__9892;
chunk__9885 = G__9893;
count__9886 = G__9894;
i__9887 = G__9895;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9884);if(temp__4092__auto__)
{var seq__9884__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9884__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9884__$1);{
var G__9896 = cljs.core.chunk_rest.call(null,seq__9884__$1);
var G__9897 = c__4191__auto__;
var G__9898 = cljs.core.count.call(null,c__4191__auto__);
var G__9899 = 0;
seq__9884 = G__9896;
chunk__9885 = G__9897;
count__9886 = G__9898;
i__9887 = G__9899;
continue;
}
} else
{var idx = cljs.core.first.call(null,seq__9884__$1);var el_9900 = (form_node.elements[idx]);var ky_9901 = cljs.core.keyword.call(null,el_9900.name);var val_9902 = ky_9901.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_9901))
{var val_9903__$1 = (cljs.core.truth_(val_9902)?val_9902:"");enfocus.core.set_form_input.call(null,val_9903__$1).call(null,el_9900);
} else
{}
{
var G__9904 = cljs.core.next.call(null,seq__9884__$1);
var G__9905 = null;
var G__9906 = 0;
var G__9907 = 0;
seq__9884 = G__9904;
chunk__9885 = G__9905;
count__9886 = G__9906;
i__9887 = G__9907;
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
{var vec__9917 = node_spec;var tag = cljs.core.nth.call(null,vec__9917,0,null);var vec__9918 = cljs.core.nthnext.call(null,vec__9917,1);var m = cljs.core.nth.call(null,vec__9918,0,null);var ms = cljs.core.nthnext.call(null,vec__9918,1);var more = vec__9918;var vec__9919 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__9919,0,null);var segments = cljs.core.nthnext.call(null,vec__9919,1);var id = cljs.core.some.call(null,((function (vec__9917,tag,vec__9918,m,ms,more,vec__9919,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__9917,tag,vec__9918,m,ms,more,vec__9919,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__9917,tag,vec__9918,m,ms,more,vec__9919,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__9917,tag,vec__9918,m,ms,more,vec__9919,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__9920_9926 = cljs.core.seq.call(null,attrs__$2);var chunk__9921_9927 = null;var count__9922_9928 = 0;var i__9923_9929 = 0;while(true){
if((i__9923_9929 < count__9922_9928))
{var vec__9924_9930 = cljs.core._nth.call(null,chunk__9921_9927,i__9923_9929);var key_9931 = cljs.core.nth.call(null,vec__9924_9930,0,null);var val_9932 = cljs.core.nth.call(null,vec__9924_9930,1,null);node.setAttribute(cljs.core.name.call(null,key_9931),val_9932);
{
var G__9933 = seq__9920_9926;
var G__9934 = chunk__9921_9927;
var G__9935 = count__9922_9928;
var G__9936 = (i__9923_9929 + 1);
seq__9920_9926 = G__9933;
chunk__9921_9927 = G__9934;
count__9922_9928 = G__9935;
i__9923_9929 = G__9936;
continue;
}
} else
{var temp__4092__auto___9937 = cljs.core.seq.call(null,seq__9920_9926);if(temp__4092__auto___9937)
{var seq__9920_9938__$1 = temp__4092__auto___9937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9920_9938__$1))
{var c__4191__auto___9939 = cljs.core.chunk_first.call(null,seq__9920_9938__$1);{
var G__9940 = cljs.core.chunk_rest.call(null,seq__9920_9938__$1);
var G__9941 = c__4191__auto___9939;
var G__9942 = cljs.core.count.call(null,c__4191__auto___9939);
var G__9943 = 0;
seq__9920_9926 = G__9940;
chunk__9921_9927 = G__9941;
count__9922_9928 = G__9942;
i__9923_9929 = G__9943;
continue;
}
} else
{var vec__9925_9944 = cljs.core.first.call(null,seq__9920_9938__$1);var key_9945 = cljs.core.nth.call(null,vec__9925_9944,0,null);var val_9946 = cljs.core.nth.call(null,vec__9925_9944,1,null);node.setAttribute(cljs.core.name.call(null,key_9945),val_9946);
{
var G__9947 = cljs.core.next.call(null,seq__9920_9938__$1);
var G__9948 = null;
var G__9949 = 0;
var G__9950 = 0;
seq__9920_9926 = G__9947;
chunk__9921_9927 = G__9948;
count__9922_9928 = G__9949;
i__9923_9929 = G__9950;
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
return (function (p1__9952_SHARP_,p2__9951_SHARP_){var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__9951_SHARP_));if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals)))
{return cljs.core.into.call(null,p1__9952_SHARP_,vals);
} else
{if(cljs.core.truth_(vals))
{return cljs.core.conj.call(null,p1__9952_SHARP_,vals);
} else
{return p1__9952_SHARP_;
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
});if(typeof enfocus.core.t9957 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t9957 = (function (trans,read_form_input,meta9958){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta9958 = meta9958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t9957.cljs$lang$type = true;
enfocus.core.t9957.cljs$lang$ctorStr = "enfocus.core/t9957";
enfocus.core.t9957.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t9957");
});
enfocus.core.t9957.prototype.call = (function() {
var G__9961 = null;
var G__9961__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__9961__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__9961 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__9961__2.call(this,self__,nodes);
case 3:
return G__9961__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9961;
})()
;
enfocus.core.t9957.prototype.apply = (function (self__,args9960){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9960)));
});
enfocus.core.t9957.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t9957.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t9957.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t9957.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t9957.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t9957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9959){var self__ = this;
var _9959__$1 = this;return self__.meta9958;
});
enfocus.core.t9957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9959,meta9958__$1){var self__ = this;
var _9959__$1 = this;return (new enfocus.core.t9957(self__.trans,self__.read_form_input,meta9958__$1));
});
enfocus.core.__GT_t9957 = (function __GT_t9957(trans__$1,read_form_input__$1,meta9958){return (new enfocus.core.t9957(trans__$1,read_form_input__$1,meta9958));
});
}
return (new enfocus.core.t9957(trans,read_form_input,null));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__9963_SHARP_,p2__9962_SHARP_){if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__9962_SHARP_).name)))
{return enfocus.core.merge_form_val.call(null,p1__9963_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__9962_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__9962_SHARP_)));
} else
{return p1__9963_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__9964_SHARP_){if((p1__9964_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__9964_SHARP_);
} else
{if((p1__9964_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__9964_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__9964_SHARP_))
{return create_sel_str.call(null,p1__9964_SHARP_);
} else
{if(typeof p1__9964_SHARP_ === 'string')
{return p1__9964_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__9975 = node;if(G__9975)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__9975.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__9975.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__9975);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__9975);
}
} else
{return and__3431__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__9976 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__9976,0,null);var trans__$1 = cljs.core.nth.call(null,vec__9976,1,null);var seq__9977 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__9978 = null;var count__9979 = 0;var i__9980 = 0;while(true){
if((i__9980 < count__9979))
{var vec__9981 = cljs.core._nth.call(null,chunk__9978,i__9980);var sel = cljs.core.nth.call(null,vec__9981,0,null);var t = cljs.core.nth.call(null,vec__9981,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__9983 = seq__9977;
var G__9984 = chunk__9978;
var G__9985 = count__9979;
var G__9986 = (i__9980 + 1);
seq__9977 = G__9983;
chunk__9978 = G__9984;
count__9979 = G__9985;
i__9980 = G__9986;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9977);if(temp__4092__auto__)
{var seq__9977__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9977__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9977__$1);{
var G__9987 = cljs.core.chunk_rest.call(null,seq__9977__$1);
var G__9988 = c__4191__auto__;
var G__9989 = cljs.core.count.call(null,c__4191__auto__);
var G__9990 = 0;
seq__9977 = G__9987;
chunk__9978 = G__9988;
count__9979 = G__9989;
i__9980 = G__9990;
continue;
}
} else
{var vec__9982 = cljs.core.first.call(null,seq__9977__$1);var sel = cljs.core.nth.call(null,vec__9982,0,null);var t = cljs.core.nth.call(null,vec__9982,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__9991 = cljs.core.next.call(null,seq__9977__$1);
var G__9992 = null;
var G__9993 = 0;
var G__9994 = 0;
seq__9977 = G__9991;
chunk__9978 = G__9992;
count__9979 = G__9993;
i__9980 = G__9994;
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
i_at.cljs$lang$applyTo = (function (arglist__9995){
var id_mask = cljs.core.first(arglist__9995);
arglist__9995 = cljs.core.next(arglist__9995);
var node = cljs.core.first(arglist__9995);
var trans = cljs.core.rest(arglist__9995);
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
at.cljs$lang$applyTo = (function (arglist__9996){
var node = cljs.core.first(arglist__9996);
var trans = cljs.core.rest(arglist__9996);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__10001 = node;if(G__10001)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10001.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__10001.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10001);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__10001);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__10002 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__10002,0,null);var trans__$1 = cljs.core.nth.call(null,vec__10002,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__10003){var vec__10004 = p__10003;var ky = cljs.core.nth.call(null,vec__10004,0,null);var sel = cljs.core.nth.call(null,vec__10004,1,null);var ext = cljs.core.nth.call(null,vec__10004,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__10005){
var node = cljs.core.first(arglist__10005);
var trans = cljs.core.rest(arglist__10005);
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
var G__10006 = null;
var G__10006__1 = (function (this$){return cljs.core.List.EMPTY;
});
var G__10006__2 = (function (this$,root){return cljs.core.List.EMPTY;
});
var G__10006__3 = (function (this$,root,id_mask){return cljs.core.List.EMPTY;
});
G__10006 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10006__1.call(this,this$);
case 2:
return G__10006__2.call(this,this$,root);
case 3:
return G__10006__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10006;
})()
);
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__10007 = null;
var G__10007__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__10007__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__10007__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__10007 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10007__1.call(this,this$);
case 2:
return G__10007__2.call(this,this$,root);
case 3:
return G__10007__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10007;
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
var G__10008 = null;
var G__10008__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__10008__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__10008__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__10008 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__10008__1.call(this,this$);
case 2:
return G__10008__2.call(this,this$,root);
case 3:
return G__10008__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10008;
})()
);
(enfocus.core.ITransform["null"] = true);
(enfocus.core.apply_transform["null"] = (function() {
var G__10009 = null;
var G__10009__2 = (function (trans,nodes){return nodes;
});
var G__10009__3 = (function (trans,nodes,chain){return nodes;
});
G__10009 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__10009__2.call(this,trans,nodes);
case 3:
return G__10009__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10009;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__10010 = null;
var G__10010__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__10010__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__10010 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__10010__2.call(this,trans,nodes);
case 3:
return G__10010__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10010;
})()
);

//# sourceMappingURL=core.js.map