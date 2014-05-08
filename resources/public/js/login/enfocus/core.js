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
enfocus.core.ISelector = (function (){var obj6732 = {};return obj6732;
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
enfocus.core.ITransform = (function (){var obj6734 = {};return obj6734;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__6735_SHARP_){if(typeof p1__6735_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__6735_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__6735_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__6742_6748 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__6743_6749 = null;var count__6744_6750 = 0;var i__6745_6751 = 0;while(true){
if((i__6745_6751 < count__6744_6750))
{var vec__6746_6752 = cljs.core._nth.call(null,chunk__6743_6749,i__6745_6751);var attr_6753 = cljs.core.nth.call(null,vec__6746_6752,0,null);var value_6754 = cljs.core.nth.call(null,vec__6746_6752,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_6753),value_6754);
{
var G__6755 = seq__6742_6748;
var G__6756 = chunk__6743_6749;
var G__6757 = count__6744_6750;
var G__6758 = (i__6745_6751 + 1);
seq__6742_6748 = G__6755;
chunk__6743_6749 = G__6756;
count__6744_6750 = G__6757;
i__6745_6751 = G__6758;
continue;
}
} else
{var temp__4092__auto___6759 = cljs.core.seq.call(null,seq__6742_6748);if(temp__4092__auto___6759)
{var seq__6742_6760__$1 = temp__4092__auto___6759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6742_6760__$1))
{var c__4191__auto___6761 = cljs.core.chunk_first.call(null,seq__6742_6760__$1);{
var G__6762 = cljs.core.chunk_rest.call(null,seq__6742_6760__$1);
var G__6763 = c__4191__auto___6761;
var G__6764 = cljs.core.count.call(null,c__4191__auto___6761);
var G__6765 = 0;
seq__6742_6748 = G__6762;
chunk__6743_6749 = G__6763;
count__6744_6750 = G__6764;
i__6745_6751 = G__6765;
continue;
}
} else
{var vec__6747_6766 = cljs.core.first.call(null,seq__6742_6760__$1);var attr_6767 = cljs.core.nth.call(null,vec__6747_6766,0,null);var value_6768 = cljs.core.nth.call(null,vec__6747_6766,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_6767),value_6768);
{
var G__6769 = cljs.core.next.call(null,seq__6742_6760__$1);
var G__6770 = null;
var G__6771 = 0;
var G__6772 = 0;
seq__6742_6748 = G__6769;
chunk__6743_6749 = G__6770;
count__6744_6750 = G__6771;
i__6745_6751 = G__6772;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__6777 = cljs.core.seq.call(null,values);var chunk__6778 = null;var count__6779 = 0;var i__6780 = 0;while(true){
if((i__6780 < count__6779))
{var attr = cljs.core._nth.call(null,chunk__6778,i__6780);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__6781 = seq__6777;
var G__6782 = chunk__6778;
var G__6783 = count__6779;
var G__6784 = (i__6780 + 1);
seq__6777 = G__6781;
chunk__6778 = G__6782;
count__6779 = G__6783;
i__6780 = G__6784;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6777);if(temp__4092__auto__)
{var seq__6777__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6777__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6777__$1);{
var G__6785 = cljs.core.chunk_rest.call(null,seq__6777__$1);
var G__6786 = c__4191__auto__;
var G__6787 = cljs.core.count.call(null,c__4191__auto__);
var G__6788 = 0;
seq__6777 = G__6785;
chunk__6778 = G__6786;
count__6779 = G__6787;
i__6780 = G__6788;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__6777__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__6789 = cljs.core.next.call(null,seq__6777__$1);
var G__6790 = null;
var G__6791 = 0;
var G__6792 = 0;
seq__6777 = G__6789;
chunk__6778 = G__6790;
count__6779 = G__6791;
i__6780 = G__6792;
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
{var seq__6799_6805 = cljs.core.seq.call(null,ats);var chunk__6800_6806 = null;var count__6801_6807 = 0;var i__6802_6808 = 0;while(true){
if((i__6802_6808 < count__6801_6807))
{var vec__6803_6809 = cljs.core._nth.call(null,chunk__6800_6806,i__6802_6808);var k_6810 = cljs.core.nth.call(null,vec__6803_6809,0,null);var v_6811 = cljs.core.nth.call(null,vec__6803_6809,1,null);add_map_attrs.call(null,elem,k_6810,v_6811);
{
var G__6812 = seq__6799_6805;
var G__6813 = chunk__6800_6806;
var G__6814 = count__6801_6807;
var G__6815 = (i__6802_6808 + 1);
seq__6799_6805 = G__6812;
chunk__6800_6806 = G__6813;
count__6801_6807 = G__6814;
i__6802_6808 = G__6815;
continue;
}
} else
{var temp__4092__auto___6816 = cljs.core.seq.call(null,seq__6799_6805);if(temp__4092__auto___6816)
{var seq__6799_6817__$1 = temp__4092__auto___6816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6799_6817__$1))
{var c__4191__auto___6818 = cljs.core.chunk_first.call(null,seq__6799_6817__$1);{
var G__6819 = cljs.core.chunk_rest.call(null,seq__6799_6817__$1);
var G__6820 = c__4191__auto___6818;
var G__6821 = cljs.core.count.call(null,c__4191__auto___6818);
var G__6822 = 0;
seq__6799_6805 = G__6819;
chunk__6800_6806 = G__6820;
count__6801_6807 = G__6821;
i__6802_6808 = G__6822;
continue;
}
} else
{var vec__6804_6823 = cljs.core.first.call(null,seq__6799_6817__$1);var k_6824 = cljs.core.nth.call(null,vec__6804_6823,0,null);var v_6825 = cljs.core.nth.call(null,vec__6804_6823,1,null);add_map_attrs.call(null,elem,k_6824,v_6825);
{
var G__6826 = cljs.core.next.call(null,seq__6799_6817__$1);
var G__6827 = null;
var G__6828 = 0;
var G__6829 = 0;
seq__6799_6805 = G__6826;
chunk__6800_6806 = G__6827;
count__6801_6807 = G__6828;
i__6802_6808 = G__6829;
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
var seq__6834_6838 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__6835_6839 = null;var count__6836_6840 = 0;var i__6837_6841 = 0;while(true){
if((i__6837_6841 < count__6836_6840))
{var node_6842 = cljs.core._nth.call(null,chunk__6835_6839,i__6837_6841);goog.dom.appendChild(div,node_6842);
{
var G__6843 = seq__6834_6838;
var G__6844 = chunk__6835_6839;
var G__6845 = count__6836_6840;
var G__6846 = (i__6837_6841 + 1);
seq__6834_6838 = G__6843;
chunk__6835_6839 = G__6844;
count__6836_6840 = G__6845;
i__6837_6841 = G__6846;
continue;
}
} else
{var temp__4092__auto___6847 = cljs.core.seq.call(null,seq__6834_6838);if(temp__4092__auto___6847)
{var seq__6834_6848__$1 = temp__4092__auto___6847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6834_6848__$1))
{var c__4191__auto___6849 = cljs.core.chunk_first.call(null,seq__6834_6848__$1);{
var G__6850 = cljs.core.chunk_rest.call(null,seq__6834_6848__$1);
var G__6851 = c__4191__auto___6849;
var G__6852 = cljs.core.count.call(null,c__4191__auto___6849);
var G__6853 = 0;
seq__6834_6838 = G__6850;
chunk__6835_6839 = G__6851;
count__6836_6840 = G__6852;
i__6837_6841 = G__6853;
continue;
}
} else
{var node_6854 = cljs.core.first.call(null,seq__6834_6848__$1);goog.dom.appendChild(div,node_6854);
{
var G__6855 = cljs.core.next.call(null,seq__6834_6848__$1);
var G__6856 = null;
var G__6857 = 0;
var G__6858 = 0;
seq__6834_6838 = G__6855;
chunk__6835_6839 = G__6856;
count__6836_6840 = G__6857;
i__6837_6841 = G__6858;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6859_SHARP_){var id = p1__6859_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__6859_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__6861 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__6861,0,null);var txt = cljs.core.nth.call(null,vec__6861,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__6866_6870 = cljs.core.seq.call(null,dfa);var chunk__6867_6871 = null;var count__6868_6872 = 0;var i__6869_6873 = 0;while(true){
if((i__6869_6873 < count__6868_6872))
{var df_6874 = cljs.core._nth.call(null,chunk__6867_6871,i__6869_6873);goog.dom.append(frag,df_6874);
{
var G__6875 = seq__6866_6870;
var G__6876 = chunk__6867_6871;
var G__6877 = count__6868_6872;
var G__6878 = (i__6869_6873 + 1);
seq__6866_6870 = G__6875;
chunk__6867_6871 = G__6876;
count__6868_6872 = G__6877;
i__6869_6873 = G__6878;
continue;
}
} else
{var temp__4092__auto___6879 = cljs.core.seq.call(null,seq__6866_6870);if(temp__4092__auto___6879)
{var seq__6866_6880__$1 = temp__4092__auto___6879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6866_6880__$1))
{var c__4191__auto___6881 = cljs.core.chunk_first.call(null,seq__6866_6880__$1);{
var G__6882 = cljs.core.chunk_rest.call(null,seq__6866_6880__$1);
var G__6883 = c__4191__auto___6881;
var G__6884 = cljs.core.count.call(null,c__4191__auto___6881);
var G__6885 = 0;
seq__6866_6870 = G__6882;
chunk__6867_6871 = G__6883;
count__6868_6872 = G__6884;
i__6869_6873 = G__6885;
continue;
}
} else
{var df_6886 = cljs.core.first.call(null,seq__6866_6880__$1);goog.dom.append(frag,df_6886);
{
var G__6887 = cljs.core.next.call(null,seq__6866_6880__$1);
var G__6888 = null;
var G__6889 = 0;
var G__6890 = 0;
seq__6866_6870 = G__6887;
chunk__6867_6871 = G__6888;
count__6868_6872 = G__6889;
i__6869_6873 = G__6890;
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
{var vec__6893 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__6893,0,null);var tdom = cljs.core.nth.call(null,vec__6893,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__6893,sym,tdom,dom,tsnip){
return (function (p1__6891_SHARP_){return p1__6891_SHARP_.outerHTML;
});})(vec__6893,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t6898 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6898 = (function (trans,filt,func,extr_multi_node,meta6899){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta6899 = meta6899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6898.cljs$lang$type = true;
enfocus.core.t6898.cljs$lang$ctorStr = "enfocus.core/t6898";
enfocus.core.t6898.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t6898");
});
enfocus.core.t6898.prototype.call = (function() {
var G__6902 = null;
var G__6902__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6902__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6902 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6902__2.call(this,self__,nodes);
case 3:
return G__6902__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6902;
})()
;
enfocus.core.t6898.prototype.apply = (function (self__,args6901){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6901)));
});
enfocus.core.t6898.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6898.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6898.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6898.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6898.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6900){var self__ = this;
var _6900__$1 = this;return self__.meta6899;
});
enfocus.core.t6898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6900,meta6899__$1){var self__ = this;
var _6900__$1 = this;return (new enfocus.core.t6898(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta6899__$1));
});
enfocus.core.__GT_t6898 = (function __GT_t6898(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta6899){return (new enfocus.core.t6898(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta6899));
});
}
return (new enfocus.core.t6898(trans,filt,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t6912 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6912 = (function (trans,func,multi_node_chain,meta6913){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta6913 = meta6913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6912.cljs$lang$type = true;
enfocus.core.t6912.cljs$lang$ctorStr = "enfocus.core/t6912";
enfocus.core.t6912.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t6912");
});
enfocus.core.t6912.prototype.call = (function() {
var G__6920 = null;
var G__6920__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6920__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6920 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6920__2.call(this,self__,nodes);
case 3:
return G__6920__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6920;
})()
;
enfocus.core.t6912.prototype.apply = (function (self__,args6915){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6915)));
});
enfocus.core.t6912.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6912.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6912.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6912.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6912.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6914){var self__ = this;
var _6914__$1 = this;return self__.meta6913;
});
enfocus.core.t6912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6914,meta6913__$1){var self__ = this;
var _6914__$1 = this;return (new enfocus.core.t6912(self__.trans,self__.func,self__.multi_node_chain,meta6913__$1));
});
enfocus.core.__GT_t6912 = (function __GT_t6912(trans__$1,func__$1,multi_node_chain__$1,meta6913){return (new enfocus.core.t6912(trans__$1,func__$1,multi_node_chain__$1,meta6913));
});
}
return (new enfocus.core.t6912(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__6903_SHARP_){return domina.nodes.call(null,p1__6903_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t6916 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6916 = (function (trans,func,values,multi_node_chain,meta6917){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta6917 = meta6917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6916.cljs$lang$type = true;
enfocus.core.t6916.cljs$lang$ctorStr = "enfocus.core/t6916";
enfocus.core.t6916.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t6916");
});
enfocus.core.t6916.prototype.call = (function() {
var G__6921 = null;
var G__6921__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6921__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6921 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6921__2.call(this,self__,nodes);
case 3:
return G__6921__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6921;
})()
;
enfocus.core.t6916.prototype.apply = (function (self__,args6919){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6919)));
});
enfocus.core.t6916.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6916.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6916.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6916.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t6916.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t6916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6918){var self__ = this;
var _6918__$1 = this;return self__.meta6917;
});
enfocus.core.t6916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6918,meta6917__$1){var self__ = this;
var _6918__$1 = this;return (new enfocus.core.t6916(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta6917__$1));
});
enfocus.core.__GT_t6916 = (function __GT_t6916(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta6917){return (new enfocus.core.t6916(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta6917));
});
}
return (new enfocus.core.t6916(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6922_SHARP_,p2__6923_SHARP_){domina.destroy_children_BANG_.call(null,p1__6922_SHARP_);
return domina.append_BANG_.call(null,p1__6922_SHARP_,p2__6923_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__6924){
var values = cljs.core.seq(arglist__6924);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__6925_SHARP_){return domina.set_html_BANG_.call(null,p1__6925_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__6926_SHARP_){var seq__6933 = cljs.core.seq.call(null,pairs);var chunk__6934 = null;var count__6935 = 0;var i__6936 = 0;while(true){
if((i__6936 < count__6935))
{var vec__6937 = cljs.core._nth.call(null,chunk__6934,i__6936);var name = cljs.core.nth.call(null,vec__6937,0,null);var value = cljs.core.nth.call(null,vec__6937,1,null);domina.set_attr_BANG_.call(null,p1__6926_SHARP_,name,value);
{
var G__6939 = seq__6933;
var G__6940 = chunk__6934;
var G__6941 = count__6935;
var G__6942 = (i__6936 + 1);
seq__6933 = G__6939;
chunk__6934 = G__6940;
count__6935 = G__6941;
i__6936 = G__6942;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6933);if(temp__4092__auto__)
{var seq__6933__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6933__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6933__$1);{
var G__6943 = cljs.core.chunk_rest.call(null,seq__6933__$1);
var G__6944 = c__4191__auto__;
var G__6945 = cljs.core.count.call(null,c__4191__auto__);
var G__6946 = 0;
seq__6933 = G__6943;
chunk__6934 = G__6944;
count__6935 = G__6945;
i__6936 = G__6946;
continue;
}
} else
{var vec__6938 = cljs.core.first.call(null,seq__6933__$1);var name = cljs.core.nth.call(null,vec__6938,0,null);var value = cljs.core.nth.call(null,vec__6938,1,null);domina.set_attr_BANG_.call(null,p1__6926_SHARP_,name,value);
{
var G__6947 = cljs.core.next.call(null,seq__6933__$1);
var G__6948 = null;
var G__6949 = 0;
var G__6950 = 0;
seq__6933 = G__6947;
chunk__6934 = G__6948;
count__6935 = G__6949;
i__6936 = G__6950;
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
set_attr.cljs$lang$applyTo = (function (arglist__6951){
var values = cljs.core.seq(arglist__6951);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6952_SHARP_){var seq__6957 = cljs.core.seq.call(null,values);var chunk__6958 = null;var count__6959 = 0;var i__6960 = 0;while(true){
if((i__6960 < count__6959))
{var name = cljs.core._nth.call(null,chunk__6958,i__6960);domina.remove_attr_BANG_.call(null,p1__6952_SHARP_,name);
{
var G__6961 = seq__6957;
var G__6962 = chunk__6958;
var G__6963 = count__6959;
var G__6964 = (i__6960 + 1);
seq__6957 = G__6961;
chunk__6958 = G__6962;
count__6959 = G__6963;
i__6960 = G__6964;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6957);if(temp__4092__auto__)
{var seq__6957__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6957__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6957__$1);{
var G__6965 = cljs.core.chunk_rest.call(null,seq__6957__$1);
var G__6966 = c__4191__auto__;
var G__6967 = cljs.core.count.call(null,c__4191__auto__);
var G__6968 = 0;
seq__6957 = G__6965;
chunk__6958 = G__6966;
count__6959 = G__6967;
i__6960 = G__6968;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__6957__$1);domina.remove_attr_BANG_.call(null,p1__6952_SHARP_,name);
{
var G__6969 = cljs.core.next.call(null,seq__6957__$1);
var G__6970 = null;
var G__6971 = 0;
var G__6972 = 0;
seq__6957 = G__6969;
chunk__6958 = G__6970;
count__6959 = G__6971;
i__6960 = G__6972;
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
remove_attr.cljs$lang$applyTo = (function (arglist__6973){
var values = cljs.core.seq(arglist__6973);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__6976){var vec__6977 = p__6976;var n = cljs.core.nth.call(null,vec__6977,0,null);var v = cljs.core.nth.call(null,vec__6977,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__6978){
var forms = cljs.core.seq(arglist__6978);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6979_SHARP_){var seq__6984 = cljs.core.seq.call(null,values);var chunk__6985 = null;var count__6986 = 0;var i__6987 = 0;while(true){
if((i__6987 < count__6986))
{var val = cljs.core._nth.call(null,chunk__6985,i__6987);domina.add_class_BANG_.call(null,p1__6979_SHARP_,val);
{
var G__6988 = seq__6984;
var G__6989 = chunk__6985;
var G__6990 = count__6986;
var G__6991 = (i__6987 + 1);
seq__6984 = G__6988;
chunk__6985 = G__6989;
count__6986 = G__6990;
i__6987 = G__6991;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6984);if(temp__4092__auto__)
{var seq__6984__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6984__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__6984__$1);{
var G__6992 = cljs.core.chunk_rest.call(null,seq__6984__$1);
var G__6993 = c__4191__auto__;
var G__6994 = cljs.core.count.call(null,c__4191__auto__);
var G__6995 = 0;
seq__6984 = G__6992;
chunk__6985 = G__6993;
count__6986 = G__6994;
i__6987 = G__6995;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__6984__$1);domina.add_class_BANG_.call(null,p1__6979_SHARP_,val);
{
var G__6996 = cljs.core.next.call(null,seq__6984__$1);
var G__6997 = null;
var G__6998 = 0;
var G__6999 = 0;
seq__6984 = G__6996;
chunk__6985 = G__6997;
count__6986 = G__6998;
i__6987 = G__6999;
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
add_class.cljs$lang$applyTo = (function (arglist__7000){
var values = cljs.core.seq(arglist__7000);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__7001_SHARP_){var seq__7006 = cljs.core.seq.call(null,values);var chunk__7007 = null;var count__7008 = 0;var i__7009 = 0;while(true){
if((i__7009 < count__7008))
{var val = cljs.core._nth.call(null,chunk__7007,i__7009);domina.remove_class_BANG_.call(null,p1__7001_SHARP_,val);
{
var G__7010 = seq__7006;
var G__7011 = chunk__7007;
var G__7012 = count__7008;
var G__7013 = (i__7009 + 1);
seq__7006 = G__7010;
chunk__7007 = G__7011;
count__7008 = G__7012;
i__7009 = G__7013;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7006);if(temp__4092__auto__)
{var seq__7006__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7006__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__7006__$1);{
var G__7014 = cljs.core.chunk_rest.call(null,seq__7006__$1);
var G__7015 = c__4191__auto__;
var G__7016 = cljs.core.count.call(null,c__4191__auto__);
var G__7017 = 0;
seq__7006 = G__7014;
chunk__7007 = G__7015;
count__7008 = G__7016;
i__7009 = G__7017;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__7006__$1);domina.remove_class_BANG_.call(null,p1__7001_SHARP_,val);
{
var G__7018 = cljs.core.next.call(null,seq__7006__$1);
var G__7019 = null;
var G__7020 = 0;
var G__7021 = 0;
seq__7006 = G__7018;
chunk__7007 = G__7019;
count__7008 = G__7020;
i__7009 = G__7021;
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
remove_class.cljs$lang$applyTo = (function (arglist__7022){
var values = cljs.core.seq(arglist__7022);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__7023_SHARP_){return domina.set_classes_BANG_.call(null,p1__7023_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__7024){
var values = cljs.core.seq(arglist__7024);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__7029 = cljs.core.seq.call(null,forms);var chunk__7030 = null;var count__7031 = 0;var i__7032 = 0;while(true){
if((i__7032 < count__7031))
{var fun = cljs.core._nth.call(null,chunk__7030,i__7032);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__7033 = seq__7029;
var G__7034 = chunk__7030;
var G__7035 = count__7031;
var G__7036 = (i__7032 + 1);
seq__7029 = G__7033;
chunk__7030 = G__7034;
count__7031 = G__7035;
i__7032 = G__7036;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7029);if(temp__4092__auto__)
{var seq__7029__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7029__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__7029__$1);{
var G__7037 = cljs.core.chunk_rest.call(null,seq__7029__$1);
var G__7038 = c__4191__auto__;
var G__7039 = cljs.core.count.call(null,c__4191__auto__);
var G__7040 = 0;
seq__7029 = G__7037;
chunk__7030 = G__7038;
count__7031 = G__7039;
i__7032 = G__7040;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__7029__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__7041 = cljs.core.next.call(null,seq__7029__$1);
var G__7042 = null;
var G__7043 = 0;
var G__7044 = 0;
seq__7029 = G__7041;
chunk__7030 = G__7042;
count__7031 = G__7043;
i__7032 = G__7044;
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
do__GT_.cljs$lang$applyTo = (function (arglist__7045){
var forms = cljs.core.seq(arglist__7045);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__7046_SHARP_,p2__7047_SHARP_){return domina.append_BANG_.call(null,p1__7046_SHARP_,p2__7047_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__7048){
var values = cljs.core.seq(arglist__7048);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__7049_SHARP_,p2__7050_SHARP_){return domina.prepend_BANG_.call(null,p1__7049_SHARP_,p2__7050_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__7051){
var values = cljs.core.seq(arglist__7051);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__7052_SHARP_,p2__7053_SHARP_){return domina.insert_before_BANG_.call(null,p1__7052_SHARP_,p2__7053_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__7054){
var values = cljs.core.seq(arglist__7054);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__7055_SHARP_,p2__7056_SHARP_){return domina.insert_after_BANG_.call(null,p1__7055_SHARP_,p2__7056_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__7057){
var values = cljs.core.seq(arglist__7057);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__7058_SHARP_,p2__7059_SHARP_){return domina.swap_content_BANG_.call(null,p1__7058_SHARP_,p2__7059_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__7060){
var values = cljs.core.seq(arglist__7060);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__7061_SHARP_){return domina.detach_BANG_.call(null,p1__7061_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__7062_SHARP_){var seq__7069 = cljs.core.seq.call(null,pairs);var chunk__7070 = null;var count__7071 = 0;var i__7072 = 0;while(true){
if((i__7072 < count__7071))
{var vec__7073 = cljs.core._nth.call(null,chunk__7070,i__7072);var name = cljs.core.nth.call(null,vec__7073,0,null);var value = cljs.core.nth.call(null,vec__7073,1,null);domina.set_style_BANG_.call(null,p1__7062_SHARP_,name,value);
{
var G__7075 = seq__7069;
var G__7076 = chunk__7070;
var G__7077 = count__7071;
var G__7078 = (i__7072 + 1);
seq__7069 = G__7075;
chunk__7070 = G__7076;
count__7071 = G__7077;
i__7072 = G__7078;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7069);if(temp__4092__auto__)
{var seq__7069__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7069__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__7069__$1);{
var G__7079 = cljs.core.chunk_rest.call(null,seq__7069__$1);
var G__7080 = c__4191__auto__;
var G__7081 = cljs.core.count.call(null,c__4191__auto__);
var G__7082 = 0;
seq__7069 = G__7079;
chunk__7070 = G__7080;
count__7071 = G__7081;
i__7072 = G__7082;
continue;
}
} else
{var vec__7074 = cljs.core.first.call(null,seq__7069__$1);var name = cljs.core.nth.call(null,vec__7074,0,null);var value = cljs.core.nth.call(null,vec__7074,1,null);domina.set_style_BANG_.call(null,p1__7062_SHARP_,name,value);
{
var G__7083 = cljs.core.next.call(null,seq__7069__$1);
var G__7084 = null;
var G__7085 = 0;
var G__7086 = 0;
seq__7069 = G__7083;
chunk__7070 = G__7084;
count__7071 = G__7085;
i__7072 = G__7086;
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
set_style.cljs$lang$applyTo = (function (arglist__7087){
var values = cljs.core.seq(arglist__7087);
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
remove_style.cljs$lang$applyTo = (function (arglist__7088){
var values = cljs.core.seq(arglist__7088);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__7089_SHARP_){return domina.set_data_BANG_.call(null,p1__7089_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__7090){
var ttime = cljs.core.first(arglist__7090);
var funcs = cljs.core.rest(arglist__7090);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__7092_SHARP_,p2__7091_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__7091_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__7117_7125 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__7118_7126 = null;var count__7119_7127 = 0;var i__7120_7128 = 0;while(true){
if((i__7120_7128 < count__7119_7127))
{var idx_7129 = cljs.core._nth.call(null,chunk__7118_7126,i__7120_7128);var attr_7130 = pnod.attributes.item(idx_7129);if(cljs.core.truth_(attr_7130.specified))
{attr_7130.value = rep_str.call(null,attr_7130.value);
} else
{}
{
var G__7131 = seq__7117_7125;
var G__7132 = chunk__7118_7126;
var G__7133 = count__7119_7127;
var G__7134 = (i__7120_7128 + 1);
seq__7117_7125 = G__7131;
chunk__7118_7126 = G__7132;
count__7119_7127 = G__7133;
i__7120_7128 = G__7134;
continue;
}
} else
{var temp__4092__auto___7135 = cljs.core.seq.call(null,seq__7117_7125);if(temp__4092__auto___7135)
{var seq__7117_7136__$1 = temp__4092__auto___7135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7117_7136__$1))
{var c__4191__auto___7137 = cljs.core.chunk_first.call(null,seq__7117_7136__$1);{
var G__7138 = cljs.core.chunk_rest.call(null,seq__7117_7136__$1);
var G__7139 = c__4191__auto___7137;
var G__7140 = cljs.core.count.call(null,c__4191__auto___7137);
var G__7141 = 0;
seq__7117_7125 = G__7138;
chunk__7118_7126 = G__7139;
count__7119_7127 = G__7140;
i__7120_7128 = G__7141;
continue;
}
} else
{var idx_7142 = cljs.core.first.call(null,seq__7117_7136__$1);var attr_7143 = pnod.attributes.item(idx_7142);if(cljs.core.truth_(attr_7143.specified))
{attr_7143.value = rep_str.call(null,attr_7143.value);
} else
{}
{
var G__7144 = cljs.core.next.call(null,seq__7117_7136__$1);
var G__7145 = null;
var G__7146 = 0;
var G__7147 = 0;
seq__7117_7125 = G__7144;
chunk__7118_7126 = G__7145;
count__7119_7127 = G__7146;
i__7120_7128 = G__7147;
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
{var seq__7121 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__7122 = null;var count__7123 = 0;var i__7124 = 0;while(true){
if((i__7124 < count__7123))
{var cnode = cljs.core._nth.call(null,chunk__7122,i__7124);rep_node.call(null,cnode);
{
var G__7148 = seq__7121;
var G__7149 = chunk__7122;
var G__7150 = count__7123;
var G__7151 = (i__7124 + 1);
seq__7121 = G__7148;
chunk__7122 = G__7149;
count__7123 = G__7150;
i__7124 = G__7151;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7121);if(temp__4092__auto__)
{var seq__7121__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7121__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__7121__$1);{
var G__7152 = cljs.core.chunk_rest.call(null,seq__7121__$1);
var G__7153 = c__4191__auto__;
var G__7154 = cljs.core.count.call(null,c__4191__auto__);
var G__7155 = 0;
seq__7121 = G__7152;
chunk__7122 = G__7153;
count__7123 = G__7154;
i__7124 = G__7155;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__7121__$1);rep_node.call(null,cnode);
{
var G__7156 = cljs.core.next.call(null,seq__7121__$1);
var G__7157 = null;
var G__7158 = 0;
var G__7159 = 0;
seq__7121 = G__7156;
chunk__7122 = G__7157;
count__7123 = G__7158;
i__7124 = G__7159;
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
{var seq__7164 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));var chunk__7165 = null;var count__7166 = 0;var i__7167 = 0;while(true){
if((i__7167 < count__7166))
{var idx = cljs.core._nth.call(null,chunk__7165,i__7167);var el_7168 = (form_node.elements[idx]);var ky_7169 = cljs.core.keyword.call(null,el_7168.name);var val_7170 = ky_7169.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_7169))
{var val_7171__$1 = (cljs.core.truth_(val_7170)?val_7170:"");enfocus.core.set_form_input.call(null,val_7171__$1).call(null,el_7168);
} else
{}
{
var G__7172 = seq__7164;
var G__7173 = chunk__7165;
var G__7174 = count__7166;
var G__7175 = (i__7167 + 1);
seq__7164 = G__7172;
chunk__7165 = G__7173;
count__7166 = G__7174;
i__7167 = G__7175;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7164);if(temp__4092__auto__)
{var seq__7164__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7164__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__7164__$1);{
var G__7176 = cljs.core.chunk_rest.call(null,seq__7164__$1);
var G__7177 = c__4191__auto__;
var G__7178 = cljs.core.count.call(null,c__4191__auto__);
var G__7179 = 0;
seq__7164 = G__7176;
chunk__7165 = G__7177;
count__7166 = G__7178;
i__7167 = G__7179;
continue;
}
} else
{var idx = cljs.core.first.call(null,seq__7164__$1);var el_7180 = (form_node.elements[idx]);var ky_7181 = cljs.core.keyword.call(null,el_7180.name);var val_7182 = ky_7181.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_7181))
{var val_7183__$1 = (cljs.core.truth_(val_7182)?val_7182:"");enfocus.core.set_form_input.call(null,val_7183__$1).call(null,el_7180);
} else
{}
{
var G__7184 = cljs.core.next.call(null,seq__7164__$1);
var G__7185 = null;
var G__7186 = 0;
var G__7187 = 0;
seq__7164 = G__7184;
chunk__7165 = G__7185;
count__7166 = G__7186;
i__7167 = G__7187;
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
{var vec__7197 = node_spec;var tag = cljs.core.nth.call(null,vec__7197,0,null);var vec__7198 = cljs.core.nthnext.call(null,vec__7197,1);var m = cljs.core.nth.call(null,vec__7198,0,null);var ms = cljs.core.nthnext.call(null,vec__7198,1);var more = vec__7198;var vec__7199 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__7199,0,null);var segments = cljs.core.nthnext.call(null,vec__7199,1);var id = cljs.core.some.call(null,((function (vec__7197,tag,vec__7198,m,ms,more,vec__7199,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__7197,tag,vec__7198,m,ms,more,vec__7199,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__7197,tag,vec__7198,m,ms,more,vec__7199,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__7197,tag,vec__7198,m,ms,more,vec__7199,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__7200_7206 = cljs.core.seq.call(null,attrs__$2);var chunk__7201_7207 = null;var count__7202_7208 = 0;var i__7203_7209 = 0;while(true){
if((i__7203_7209 < count__7202_7208))
{var vec__7204_7210 = cljs.core._nth.call(null,chunk__7201_7207,i__7203_7209);var key_7211 = cljs.core.nth.call(null,vec__7204_7210,0,null);var val_7212 = cljs.core.nth.call(null,vec__7204_7210,1,null);node.setAttribute(cljs.core.name.call(null,key_7211),val_7212);
{
var G__7213 = seq__7200_7206;
var G__7214 = chunk__7201_7207;
var G__7215 = count__7202_7208;
var G__7216 = (i__7203_7209 + 1);
seq__7200_7206 = G__7213;
chunk__7201_7207 = G__7214;
count__7202_7208 = G__7215;
i__7203_7209 = G__7216;
continue;
}
} else
{var temp__4092__auto___7217 = cljs.core.seq.call(null,seq__7200_7206);if(temp__4092__auto___7217)
{var seq__7200_7218__$1 = temp__4092__auto___7217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7200_7218__$1))
{var c__4191__auto___7219 = cljs.core.chunk_first.call(null,seq__7200_7218__$1);{
var G__7220 = cljs.core.chunk_rest.call(null,seq__7200_7218__$1);
var G__7221 = c__4191__auto___7219;
var G__7222 = cljs.core.count.call(null,c__4191__auto___7219);
var G__7223 = 0;
seq__7200_7206 = G__7220;
chunk__7201_7207 = G__7221;
count__7202_7208 = G__7222;
i__7203_7209 = G__7223;
continue;
}
} else
{var vec__7205_7224 = cljs.core.first.call(null,seq__7200_7218__$1);var key_7225 = cljs.core.nth.call(null,vec__7205_7224,0,null);var val_7226 = cljs.core.nth.call(null,vec__7205_7224,1,null);node.setAttribute(cljs.core.name.call(null,key_7225),val_7226);
{
var G__7227 = cljs.core.next.call(null,seq__7200_7218__$1);
var G__7228 = null;
var G__7229 = 0;
var G__7230 = 0;
seq__7200_7206 = G__7227;
chunk__7201_7207 = G__7228;
count__7202_7208 = G__7229;
i__7203_7209 = G__7230;
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
return (function (p1__7232_SHARP_,p2__7231_SHARP_){var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__7231_SHARP_));if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals)))
{return cljs.core.into.call(null,p1__7232_SHARP_,vals);
} else
{if(cljs.core.truth_(vals))
{return cljs.core.conj.call(null,p1__7232_SHARP_,vals);
} else
{return p1__7232_SHARP_;
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
});if(typeof enfocus.core.t7237 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t7237 = (function (trans,read_form_input,meta7238){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta7238 = meta7238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t7237.cljs$lang$type = true;
enfocus.core.t7237.cljs$lang$ctorStr = "enfocus.core/t7237";
enfocus.core.t7237.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t7237");
});
enfocus.core.t7237.prototype.call = (function() {
var G__7241 = null;
var G__7241__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__7241__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__7241 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__7241__2.call(this,self__,nodes);
case 3:
return G__7241__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7241;
})()
;
enfocus.core.t7237.prototype.apply = (function (self__,args7240){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7240)));
});
enfocus.core.t7237.prototype.cljs$core$IFn$_invoke$arity$1 = (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t7237.prototype.cljs$core$IFn$_invoke$arity$2 = (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t7237.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t7237.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t7237.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t7237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7239){var self__ = this;
var _7239__$1 = this;return self__.meta7238;
});
enfocus.core.t7237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7239,meta7238__$1){var self__ = this;
var _7239__$1 = this;return (new enfocus.core.t7237(self__.trans,self__.read_form_input,meta7238__$1));
});
enfocus.core.__GT_t7237 = (function __GT_t7237(trans__$1,read_form_input__$1,meta7238){return (new enfocus.core.t7237(trans__$1,read_form_input__$1,meta7238));
});
}
return (new enfocus.core.t7237(trans,read_form_input,null));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__7243_SHARP_,p2__7242_SHARP_){if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__7242_SHARP_).name)))
{return enfocus.core.merge_form_val.call(null,p1__7243_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__7242_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__7242_SHARP_)));
} else
{return p1__7243_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__7244_SHARP_){if((p1__7244_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__7244_SHARP_);
} else
{if((p1__7244_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__7244_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__7244_SHARP_))
{return create_sel_str.call(null,p1__7244_SHARP_);
} else
{if(typeof p1__7244_SHARP_ === 'string')
{return p1__7244_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__7255 = node;if(G__7255)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__7255.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__7255.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__7255);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__7255);
}
} else
{return and__3431__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__7256 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__7256,0,null);var trans__$1 = cljs.core.nth.call(null,vec__7256,1,null);var seq__7257 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__7258 = null;var count__7259 = 0;var i__7260 = 0;while(true){
if((i__7260 < count__7259))
{var vec__7261 = cljs.core._nth.call(null,chunk__7258,i__7260);var sel = cljs.core.nth.call(null,vec__7261,0,null);var t = cljs.core.nth.call(null,vec__7261,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__7263 = seq__7257;
var G__7264 = chunk__7258;
var G__7265 = count__7259;
var G__7266 = (i__7260 + 1);
seq__7257 = G__7263;
chunk__7258 = G__7264;
count__7259 = G__7265;
i__7260 = G__7266;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7257);if(temp__4092__auto__)
{var seq__7257__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7257__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__7257__$1);{
var G__7267 = cljs.core.chunk_rest.call(null,seq__7257__$1);
var G__7268 = c__4191__auto__;
var G__7269 = cljs.core.count.call(null,c__4191__auto__);
var G__7270 = 0;
seq__7257 = G__7267;
chunk__7258 = G__7268;
count__7259 = G__7269;
i__7260 = G__7270;
continue;
}
} else
{var vec__7262 = cljs.core.first.call(null,seq__7257__$1);var sel = cljs.core.nth.call(null,vec__7262,0,null);var t = cljs.core.nth.call(null,vec__7262,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__7271 = cljs.core.next.call(null,seq__7257__$1);
var G__7272 = null;
var G__7273 = 0;
var G__7274 = 0;
seq__7257 = G__7271;
chunk__7258 = G__7272;
count__7259 = G__7273;
i__7260 = G__7274;
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
i_at.cljs$lang$applyTo = (function (arglist__7275){
var id_mask = cljs.core.first(arglist__7275);
arglist__7275 = cljs.core.next(arglist__7275);
var node = cljs.core.first(arglist__7275);
var trans = cljs.core.rest(arglist__7275);
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
at.cljs$lang$applyTo = (function (arglist__7276){
var node = cljs.core.first(arglist__7276);
var trans = cljs.core.rest(arglist__7276);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__7281 = node;if(G__7281)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__7281.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__7281.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__7281);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__7281);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__7282 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__7282,0,null);var trans__$1 = cljs.core.nth.call(null,vec__7282,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__7283){var vec__7284 = p__7283;var ky = cljs.core.nth.call(null,vec__7284,0,null);var sel = cljs.core.nth.call(null,vec__7284,1,null);var ext = cljs.core.nth.call(null,vec__7284,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__7285){
var node = cljs.core.first(arglist__7285);
var trans = cljs.core.rest(arglist__7285);
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
var G__7286 = null;
var G__7286__1 = (function (this$){return cljs.core.List.EMPTY;
});
var G__7286__2 = (function (this$,root){return cljs.core.List.EMPTY;
});
var G__7286__3 = (function (this$,root,id_mask){return cljs.core.List.EMPTY;
});
G__7286 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__7286__1.call(this,this$);
case 2:
return G__7286__2.call(this,this$,root);
case 3:
return G__7286__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7286;
})()
);
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__7287 = null;
var G__7287__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__7287__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__7287__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__7287 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__7287__1.call(this,this$);
case 2:
return G__7287__2.call(this,this$,root);
case 3:
return G__7287__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7287;
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
var G__7288 = null;
var G__7288__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__7288__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__7288__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__7288 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__7288__1.call(this,this$);
case 2:
return G__7288__2.call(this,this$,root);
case 3:
return G__7288__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7288;
})()
);
(enfocus.core.ITransform["null"] = true);
(enfocus.core.apply_transform["null"] = (function() {
var G__7289 = null;
var G__7289__2 = (function (trans,nodes){return nodes;
});
var G__7289__3 = (function (trans,nodes,chain){return nodes;
});
G__7289 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__7289__2.call(this,trans,nodes);
case 3:
return G__7289__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7289;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__7290 = null;
var G__7290__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__7290__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__7290 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__7290__2.call(this,trans,nodes);
case 3:
return G__7290__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7290;
})()
);

//# sourceMappingURL=core.js.map