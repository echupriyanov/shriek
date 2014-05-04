// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_10019 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_10020 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_10021 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_10020,table_section_wrapper_10020,opt_wrapper_10019,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_10021,table_section_wrapper_10020,cell_wrapper_10021,opt_wrapper_10019,table_section_wrapper_10020,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_10020]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3431__auto__ = div.firstChild;if(cljs.core.truth_(and__3431__auto__))
{return div.firstChild.childNodes;
} else
{return and__3431__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__10026 = cljs.core.seq.call(null,tbody);var chunk__10027 = null;var count__10028 = 0;var i__10029 = 0;while(true){
if((i__10029 < count__10028))
{var child = cljs.core._nth.call(null,chunk__10027,i__10029);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10030 = seq__10026;
var G__10031 = chunk__10027;
var G__10032 = count__10028;
var G__10033 = (i__10029 + 1);
seq__10026 = G__10030;
chunk__10027 = G__10031;
count__10028 = G__10032;
i__10029 = G__10033;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10026);if(temp__4092__auto__)
{var seq__10026__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10026__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10026__$1);{
var G__10034 = cljs.core.chunk_rest.call(null,seq__10026__$1);
var G__10035 = c__4191__auto__;
var G__10036 = cljs.core.count.call(null,c__4191__auto__);
var G__10037 = 0;
seq__10026 = G__10034;
chunk__10027 = G__10035;
count__10028 = G__10036;
i__10029 = G__10037;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__10026__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10038 = cljs.core.next.call(null,seq__10026__$1);
var G__10039 = null;
var G__10040 = 0;
var G__10041 = 0;
seq__10026 = G__10038;
chunk__10027 = G__10039;
count__10028 = G__10040;
i__10029 = G__10041;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__10043 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__10043,0,null);var start_wrap = cljs.core.nth.call(null,vec__10043,1,null);var end_wrap = cljs.core.nth.call(null,vec__10043,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__10044 = wrapper.lastChild;
var G__10045 = (level - 1);
wrapper = G__10044;
level = G__10045;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3431__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3431__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj10047 = {};return obj10047;
})();
domina.nodes = (function nodes(content){if((function (){var and__3431__auto__ = content;if(and__3431__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3431__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4070__auto__ = (((content == null))?null:content);return (function (){var or__3443__auto__ = (domina.nodes[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.nodes["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3431__auto__ = nodeseq;if(and__3431__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3431__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4070__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3443__auto__ = (domina.single_node[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.single_node["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3431__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3431__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3431__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__10048){
var mesg = cljs.core.seq(arglist__10048);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__10049){
var mesg = cljs.core.seq(arglist__10049);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__10050){
var contents = cljs.core.seq(arglist__10050);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__10051_SHARP_){return p1__10051_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__10052_SHARP_,p2__10053_SHARP_){return goog.dom.insertChildAt(p1__10052_SHARP_,p2__10053_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__10055_SHARP_,p2__10054_SHARP_){return goog.dom.insertSiblingBefore(p2__10054_SHARP_,p1__10055_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__10057_SHARP_,p2__10056_SHARP_){return goog.dom.insertSiblingAfter(p2__10056_SHARP_,p1__10057_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__10059_SHARP_,p2__10058_SHARP_){return goog.dom.replaceNode(p2__10058_SHARP_,p1__10059_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__10064_10068 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10065_10069 = null;var count__10066_10070 = 0;var i__10067_10071 = 0;while(true){
if((i__10067_10071 < count__10066_10070))
{var n_10072 = cljs.core._nth.call(null,chunk__10065_10069,i__10067_10071);goog.style.setStyle(n_10072,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10073 = seq__10064_10068;
var G__10074 = chunk__10065_10069;
var G__10075 = count__10066_10070;
var G__10076 = (i__10067_10071 + 1);
seq__10064_10068 = G__10073;
chunk__10065_10069 = G__10074;
count__10066_10070 = G__10075;
i__10067_10071 = G__10076;
continue;
}
} else
{var temp__4092__auto___10077 = cljs.core.seq.call(null,seq__10064_10068);if(temp__4092__auto___10077)
{var seq__10064_10078__$1 = temp__4092__auto___10077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10064_10078__$1))
{var c__4191__auto___10079 = cljs.core.chunk_first.call(null,seq__10064_10078__$1);{
var G__10080 = cljs.core.chunk_rest.call(null,seq__10064_10078__$1);
var G__10081 = c__4191__auto___10079;
var G__10082 = cljs.core.count.call(null,c__4191__auto___10079);
var G__10083 = 0;
seq__10064_10068 = G__10080;
chunk__10065_10069 = G__10081;
count__10066_10070 = G__10082;
i__10067_10071 = G__10083;
continue;
}
} else
{var n_10084 = cljs.core.first.call(null,seq__10064_10078__$1);goog.style.setStyle(n_10084,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10085 = cljs.core.next.call(null,seq__10064_10078__$1);
var G__10086 = null;
var G__10087 = 0;
var G__10088 = 0;
seq__10064_10068 = G__10085;
chunk__10065_10069 = G__10086;
count__10066_10070 = G__10087;
i__10067_10071 = G__10088;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10089){
var content = cljs.core.first(arglist__10089);
arglist__10089 = cljs.core.next(arglist__10089);
var name = cljs.core.first(arglist__10089);
var value = cljs.core.rest(arglist__10089);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__10094_10098 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10095_10099 = null;var count__10096_10100 = 0;var i__10097_10101 = 0;while(true){
if((i__10097_10101 < count__10096_10100))
{var n_10102 = cljs.core._nth.call(null,chunk__10095_10099,i__10097_10101);n_10102.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10103 = seq__10094_10098;
var G__10104 = chunk__10095_10099;
var G__10105 = count__10096_10100;
var G__10106 = (i__10097_10101 + 1);
seq__10094_10098 = G__10103;
chunk__10095_10099 = G__10104;
count__10096_10100 = G__10105;
i__10097_10101 = G__10106;
continue;
}
} else
{var temp__4092__auto___10107 = cljs.core.seq.call(null,seq__10094_10098);if(temp__4092__auto___10107)
{var seq__10094_10108__$1 = temp__4092__auto___10107;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10094_10108__$1))
{var c__4191__auto___10109 = cljs.core.chunk_first.call(null,seq__10094_10108__$1);{
var G__10110 = cljs.core.chunk_rest.call(null,seq__10094_10108__$1);
var G__10111 = c__4191__auto___10109;
var G__10112 = cljs.core.count.call(null,c__4191__auto___10109);
var G__10113 = 0;
seq__10094_10098 = G__10110;
chunk__10095_10099 = G__10111;
count__10096_10100 = G__10112;
i__10097_10101 = G__10113;
continue;
}
} else
{var n_10114 = cljs.core.first.call(null,seq__10094_10108__$1);n_10114.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10115 = cljs.core.next.call(null,seq__10094_10108__$1);
var G__10116 = null;
var G__10117 = 0;
var G__10118 = 0;
seq__10094_10098 = G__10115;
chunk__10095_10099 = G__10116;
count__10096_10100 = G__10117;
i__10097_10101 = G__10118;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10119){
var content = cljs.core.first(arglist__10119);
arglist__10119 = cljs.core.next(arglist__10119);
var name = cljs.core.first(arglist__10119);
var value = cljs.core.rest(arglist__10119);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__10124_10128 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10125_10129 = null;var count__10126_10130 = 0;var i__10127_10131 = 0;while(true){
if((i__10127_10131 < count__10126_10130))
{var n_10132 = cljs.core._nth.call(null,chunk__10125_10129,i__10127_10131);n_10132.removeAttribute(cljs.core.name.call(null,name));
{
var G__10133 = seq__10124_10128;
var G__10134 = chunk__10125_10129;
var G__10135 = count__10126_10130;
var G__10136 = (i__10127_10131 + 1);
seq__10124_10128 = G__10133;
chunk__10125_10129 = G__10134;
count__10126_10130 = G__10135;
i__10127_10131 = G__10136;
continue;
}
} else
{var temp__4092__auto___10137 = cljs.core.seq.call(null,seq__10124_10128);if(temp__4092__auto___10137)
{var seq__10124_10138__$1 = temp__4092__auto___10137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10124_10138__$1))
{var c__4191__auto___10139 = cljs.core.chunk_first.call(null,seq__10124_10138__$1);{
var G__10140 = cljs.core.chunk_rest.call(null,seq__10124_10138__$1);
var G__10141 = c__4191__auto___10139;
var G__10142 = cljs.core.count.call(null,c__4191__auto___10139);
var G__10143 = 0;
seq__10124_10128 = G__10140;
chunk__10125_10129 = G__10141;
count__10126_10130 = G__10142;
i__10127_10131 = G__10143;
continue;
}
} else
{var n_10144 = cljs.core.first.call(null,seq__10124_10138__$1);n_10144.removeAttribute(cljs.core.name.call(null,name));
{
var G__10145 = cljs.core.next.call(null,seq__10124_10138__$1);
var G__10146 = null;
var G__10147 = 0;
var G__10148 = 0;
seq__10124_10128 = G__10145;
chunk__10125_10129 = G__10146;
count__10126_10130 = G__10147;
i__10127_10131 = G__10148;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__10150 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__10150,0,null);var v = cljs.core.nth.call(null,vec__10150,1,null);if(cljs.core.truth_((function (){var and__3431__auto__ = k;if(cljs.core.truth_(and__3431__auto__))
{return v;
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__10151_SHARP_){var attr = attrs__$1.item(p1__10151_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__10158_10164 = cljs.core.seq.call(null,styles);var chunk__10159_10165 = null;var count__10160_10166 = 0;var i__10161_10167 = 0;while(true){
if((i__10161_10167 < count__10160_10166))
{var vec__10162_10168 = cljs.core._nth.call(null,chunk__10159_10165,i__10161_10167);var name_10169 = cljs.core.nth.call(null,vec__10162_10168,0,null);var value_10170 = cljs.core.nth.call(null,vec__10162_10168,1,null);domina.set_style_BANG_.call(null,content,name_10169,value_10170);
{
var G__10171 = seq__10158_10164;
var G__10172 = chunk__10159_10165;
var G__10173 = count__10160_10166;
var G__10174 = (i__10161_10167 + 1);
seq__10158_10164 = G__10171;
chunk__10159_10165 = G__10172;
count__10160_10166 = G__10173;
i__10161_10167 = G__10174;
continue;
}
} else
{var temp__4092__auto___10175 = cljs.core.seq.call(null,seq__10158_10164);if(temp__4092__auto___10175)
{var seq__10158_10176__$1 = temp__4092__auto___10175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10158_10176__$1))
{var c__4191__auto___10177 = cljs.core.chunk_first.call(null,seq__10158_10176__$1);{
var G__10178 = cljs.core.chunk_rest.call(null,seq__10158_10176__$1);
var G__10179 = c__4191__auto___10177;
var G__10180 = cljs.core.count.call(null,c__4191__auto___10177);
var G__10181 = 0;
seq__10158_10164 = G__10178;
chunk__10159_10165 = G__10179;
count__10160_10166 = G__10180;
i__10161_10167 = G__10181;
continue;
}
} else
{var vec__10163_10182 = cljs.core.first.call(null,seq__10158_10176__$1);var name_10183 = cljs.core.nth.call(null,vec__10163_10182,0,null);var value_10184 = cljs.core.nth.call(null,vec__10163_10182,1,null);domina.set_style_BANG_.call(null,content,name_10183,value_10184);
{
var G__10185 = cljs.core.next.call(null,seq__10158_10176__$1);
var G__10186 = null;
var G__10187 = 0;
var G__10188 = 0;
seq__10158_10164 = G__10185;
chunk__10159_10165 = G__10186;
count__10160_10166 = G__10187;
i__10161_10167 = G__10188;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__10195_10201 = cljs.core.seq.call(null,attrs);var chunk__10196_10202 = null;var count__10197_10203 = 0;var i__10198_10204 = 0;while(true){
if((i__10198_10204 < count__10197_10203))
{var vec__10199_10205 = cljs.core._nth.call(null,chunk__10196_10202,i__10198_10204);var name_10206 = cljs.core.nth.call(null,vec__10199_10205,0,null);var value_10207 = cljs.core.nth.call(null,vec__10199_10205,1,null);domina.set_attr_BANG_.call(null,content,name_10206,value_10207);
{
var G__10208 = seq__10195_10201;
var G__10209 = chunk__10196_10202;
var G__10210 = count__10197_10203;
var G__10211 = (i__10198_10204 + 1);
seq__10195_10201 = G__10208;
chunk__10196_10202 = G__10209;
count__10197_10203 = G__10210;
i__10198_10204 = G__10211;
continue;
}
} else
{var temp__4092__auto___10212 = cljs.core.seq.call(null,seq__10195_10201);if(temp__4092__auto___10212)
{var seq__10195_10213__$1 = temp__4092__auto___10212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10195_10213__$1))
{var c__4191__auto___10214 = cljs.core.chunk_first.call(null,seq__10195_10213__$1);{
var G__10215 = cljs.core.chunk_rest.call(null,seq__10195_10213__$1);
var G__10216 = c__4191__auto___10214;
var G__10217 = cljs.core.count.call(null,c__4191__auto___10214);
var G__10218 = 0;
seq__10195_10201 = G__10215;
chunk__10196_10202 = G__10216;
count__10197_10203 = G__10217;
i__10198_10204 = G__10218;
continue;
}
} else
{var vec__10200_10219 = cljs.core.first.call(null,seq__10195_10213__$1);var name_10220 = cljs.core.nth.call(null,vec__10200_10219,0,null);var value_10221 = cljs.core.nth.call(null,vec__10200_10219,1,null);domina.set_attr_BANG_.call(null,content,name_10220,value_10221);
{
var G__10222 = cljs.core.next.call(null,seq__10195_10213__$1);
var G__10223 = null;
var G__10224 = 0;
var G__10225 = 0;
seq__10195_10201 = G__10222;
chunk__10196_10202 = G__10223;
count__10197_10203 = G__10224;
i__10198_10204 = G__10225;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__10230_10234 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10231_10235 = null;var count__10232_10236 = 0;var i__10233_10237 = 0;while(true){
if((i__10233_10237 < count__10232_10236))
{var node_10238 = cljs.core._nth.call(null,chunk__10231_10235,i__10233_10237);goog.dom.classes.add(node_10238,class$);
{
var G__10239 = seq__10230_10234;
var G__10240 = chunk__10231_10235;
var G__10241 = count__10232_10236;
var G__10242 = (i__10233_10237 + 1);
seq__10230_10234 = G__10239;
chunk__10231_10235 = G__10240;
count__10232_10236 = G__10241;
i__10233_10237 = G__10242;
continue;
}
} else
{var temp__4092__auto___10243 = cljs.core.seq.call(null,seq__10230_10234);if(temp__4092__auto___10243)
{var seq__10230_10244__$1 = temp__4092__auto___10243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10230_10244__$1))
{var c__4191__auto___10245 = cljs.core.chunk_first.call(null,seq__10230_10244__$1);{
var G__10246 = cljs.core.chunk_rest.call(null,seq__10230_10244__$1);
var G__10247 = c__4191__auto___10245;
var G__10248 = cljs.core.count.call(null,c__4191__auto___10245);
var G__10249 = 0;
seq__10230_10234 = G__10246;
chunk__10231_10235 = G__10247;
count__10232_10236 = G__10248;
i__10233_10237 = G__10249;
continue;
}
} else
{var node_10250 = cljs.core.first.call(null,seq__10230_10244__$1);goog.dom.classes.add(node_10250,class$);
{
var G__10251 = cljs.core.next.call(null,seq__10230_10244__$1);
var G__10252 = null;
var G__10253 = 0;
var G__10254 = 0;
seq__10230_10234 = G__10251;
chunk__10231_10235 = G__10252;
count__10232_10236 = G__10253;
i__10233_10237 = G__10254;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__10259_10263 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10260_10264 = null;var count__10261_10265 = 0;var i__10262_10266 = 0;while(true){
if((i__10262_10266 < count__10261_10265))
{var node_10267 = cljs.core._nth.call(null,chunk__10260_10264,i__10262_10266);goog.dom.classes.remove(node_10267,class$);
{
var G__10268 = seq__10259_10263;
var G__10269 = chunk__10260_10264;
var G__10270 = count__10261_10265;
var G__10271 = (i__10262_10266 + 1);
seq__10259_10263 = G__10268;
chunk__10260_10264 = G__10269;
count__10261_10265 = G__10270;
i__10262_10266 = G__10271;
continue;
}
} else
{var temp__4092__auto___10272 = cljs.core.seq.call(null,seq__10259_10263);if(temp__4092__auto___10272)
{var seq__10259_10273__$1 = temp__4092__auto___10272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10259_10273__$1))
{var c__4191__auto___10274 = cljs.core.chunk_first.call(null,seq__10259_10273__$1);{
var G__10275 = cljs.core.chunk_rest.call(null,seq__10259_10273__$1);
var G__10276 = c__4191__auto___10274;
var G__10277 = cljs.core.count.call(null,c__4191__auto___10274);
var G__10278 = 0;
seq__10259_10263 = G__10275;
chunk__10260_10264 = G__10276;
count__10261_10265 = G__10277;
i__10262_10266 = G__10278;
continue;
}
} else
{var node_10279 = cljs.core.first.call(null,seq__10259_10273__$1);goog.dom.classes.remove(node_10279,class$);
{
var G__10280 = cljs.core.next.call(null,seq__10259_10273__$1);
var G__10281 = null;
var G__10282 = 0;
var G__10283 = 0;
seq__10259_10263 = G__10280;
chunk__10260_10264 = G__10281;
count__10261_10265 = G__10282;
i__10262_10266 = G__10283;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__10288_10292 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10289_10293 = null;var count__10290_10294 = 0;var i__10291_10295 = 0;while(true){
if((i__10291_10295 < count__10290_10294))
{var node_10296 = cljs.core._nth.call(null,chunk__10289_10293,i__10291_10295);goog.dom.classes.toggle(node_10296,class$);
{
var G__10297 = seq__10288_10292;
var G__10298 = chunk__10289_10293;
var G__10299 = count__10290_10294;
var G__10300 = (i__10291_10295 + 1);
seq__10288_10292 = G__10297;
chunk__10289_10293 = G__10298;
count__10290_10294 = G__10299;
i__10291_10295 = G__10300;
continue;
}
} else
{var temp__4092__auto___10301 = cljs.core.seq.call(null,seq__10288_10292);if(temp__4092__auto___10301)
{var seq__10288_10302__$1 = temp__4092__auto___10301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10288_10302__$1))
{var c__4191__auto___10303 = cljs.core.chunk_first.call(null,seq__10288_10302__$1);{
var G__10304 = cljs.core.chunk_rest.call(null,seq__10288_10302__$1);
var G__10305 = c__4191__auto___10303;
var G__10306 = cljs.core.count.call(null,c__4191__auto___10303);
var G__10307 = 0;
seq__10288_10292 = G__10304;
chunk__10289_10293 = G__10305;
count__10290_10294 = G__10306;
i__10291_10295 = G__10307;
continue;
}
} else
{var node_10308 = cljs.core.first.call(null,seq__10288_10302__$1);goog.dom.classes.toggle(node_10308,class$);
{
var G__10309 = cljs.core.next.call(null,seq__10288_10302__$1);
var G__10310 = null;
var G__10311 = 0;
var G__10312 = 0;
seq__10288_10292 = G__10309;
chunk__10289_10293 = G__10310;
count__10290_10294 = G__10311;
i__10291_10295 = G__10312;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_10321__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__10317_10322 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10318_10323 = null;var count__10319_10324 = 0;var i__10320_10325 = 0;while(true){
if((i__10320_10325 < count__10319_10324))
{var node_10326 = cljs.core._nth.call(null,chunk__10318_10323,i__10320_10325);goog.dom.classes.set(node_10326,classes_10321__$1);
{
var G__10327 = seq__10317_10322;
var G__10328 = chunk__10318_10323;
var G__10329 = count__10319_10324;
var G__10330 = (i__10320_10325 + 1);
seq__10317_10322 = G__10327;
chunk__10318_10323 = G__10328;
count__10319_10324 = G__10329;
i__10320_10325 = G__10330;
continue;
}
} else
{var temp__4092__auto___10331 = cljs.core.seq.call(null,seq__10317_10322);if(temp__4092__auto___10331)
{var seq__10317_10332__$1 = temp__4092__auto___10331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10317_10332__$1))
{var c__4191__auto___10333 = cljs.core.chunk_first.call(null,seq__10317_10332__$1);{
var G__10334 = cljs.core.chunk_rest.call(null,seq__10317_10332__$1);
var G__10335 = c__4191__auto___10333;
var G__10336 = cljs.core.count.call(null,c__4191__auto___10333);
var G__10337 = 0;
seq__10317_10322 = G__10334;
chunk__10318_10323 = G__10335;
count__10319_10324 = G__10336;
i__10320_10325 = G__10337;
continue;
}
} else
{var node_10338 = cljs.core.first.call(null,seq__10317_10332__$1);goog.dom.classes.set(node_10338,classes_10321__$1);
{
var G__10339 = cljs.core.next.call(null,seq__10317_10332__$1);
var G__10340 = null;
var G__10341 = 0;
var G__10342 = 0;
seq__10317_10322 = G__10339;
chunk__10318_10323 = G__10340;
count__10319_10324 = G__10341;
i__10320_10325 = G__10342;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__10347_10351 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10348_10352 = null;var count__10349_10353 = 0;var i__10350_10354 = 0;while(true){
if((i__10350_10354 < count__10349_10353))
{var node_10355 = cljs.core._nth.call(null,chunk__10348_10352,i__10350_10354);goog.dom.setTextContent(node_10355,value);
{
var G__10356 = seq__10347_10351;
var G__10357 = chunk__10348_10352;
var G__10358 = count__10349_10353;
var G__10359 = (i__10350_10354 + 1);
seq__10347_10351 = G__10356;
chunk__10348_10352 = G__10357;
count__10349_10353 = G__10358;
i__10350_10354 = G__10359;
continue;
}
} else
{var temp__4092__auto___10360 = cljs.core.seq.call(null,seq__10347_10351);if(temp__4092__auto___10360)
{var seq__10347_10361__$1 = temp__4092__auto___10360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10347_10361__$1))
{var c__4191__auto___10362 = cljs.core.chunk_first.call(null,seq__10347_10361__$1);{
var G__10363 = cljs.core.chunk_rest.call(null,seq__10347_10361__$1);
var G__10364 = c__4191__auto___10362;
var G__10365 = cljs.core.count.call(null,c__4191__auto___10362);
var G__10366 = 0;
seq__10347_10351 = G__10363;
chunk__10348_10352 = G__10364;
count__10349_10353 = G__10365;
i__10350_10354 = G__10366;
continue;
}
} else
{var node_10367 = cljs.core.first.call(null,seq__10347_10361__$1);goog.dom.setTextContent(node_10367,value);
{
var G__10368 = cljs.core.next.call(null,seq__10347_10361__$1);
var G__10369 = null;
var G__10370 = 0;
var G__10371 = 0;
seq__10347_10351 = G__10368;
chunk__10348_10352 = G__10369;
count__10349_10353 = G__10370;
i__10350_10354 = G__10371;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__10376_10380 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10377_10381 = null;var count__10378_10382 = 0;var i__10379_10383 = 0;while(true){
if((i__10379_10383 < count__10378_10382))
{var node_10384 = cljs.core._nth.call(null,chunk__10377_10381,i__10379_10383);goog.dom.forms.setValue(node_10384,value);
{
var G__10385 = seq__10376_10380;
var G__10386 = chunk__10377_10381;
var G__10387 = count__10378_10382;
var G__10388 = (i__10379_10383 + 1);
seq__10376_10380 = G__10385;
chunk__10377_10381 = G__10386;
count__10378_10382 = G__10387;
i__10379_10383 = G__10388;
continue;
}
} else
{var temp__4092__auto___10389 = cljs.core.seq.call(null,seq__10376_10380);if(temp__4092__auto___10389)
{var seq__10376_10390__$1 = temp__4092__auto___10389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10376_10390__$1))
{var c__4191__auto___10391 = cljs.core.chunk_first.call(null,seq__10376_10390__$1);{
var G__10392 = cljs.core.chunk_rest.call(null,seq__10376_10390__$1);
var G__10393 = c__4191__auto___10391;
var G__10394 = cljs.core.count.call(null,c__4191__auto___10391);
var G__10395 = 0;
seq__10376_10380 = G__10392;
chunk__10377_10381 = G__10393;
count__10378_10382 = G__10394;
i__10379_10383 = G__10395;
continue;
}
} else
{var node_10396 = cljs.core.first.call(null,seq__10376_10390__$1);goog.dom.forms.setValue(node_10396,value);
{
var G__10397 = cljs.core.next.call(null,seq__10376_10390__$1);
var G__10398 = null;
var G__10399 = 0;
var G__10400 = 0;
seq__10376_10380 = G__10397;
chunk__10377_10381 = G__10398;
count__10378_10382 = G__10399;
i__10379_10383 = G__10400;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3431__auto__ = allows_inner_html_QMARK_;if(and__3431__auto__)
{var and__3431__auto____$1 = (function (){var or__3443__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3431__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
})()))
{var value_10411 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__10407_10412 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10408_10413 = null;var count__10409_10414 = 0;var i__10410_10415 = 0;while(true){
if((i__10410_10415 < count__10409_10414))
{var node_10416 = cljs.core._nth.call(null,chunk__10408_10413,i__10410_10415);node_10416.innerHTML = value_10411;
{
var G__10417 = seq__10407_10412;
var G__10418 = chunk__10408_10413;
var G__10419 = count__10409_10414;
var G__10420 = (i__10410_10415 + 1);
seq__10407_10412 = G__10417;
chunk__10408_10413 = G__10418;
count__10409_10414 = G__10419;
i__10410_10415 = G__10420;
continue;
}
} else
{var temp__4092__auto___10421 = cljs.core.seq.call(null,seq__10407_10412);if(temp__4092__auto___10421)
{var seq__10407_10422__$1 = temp__4092__auto___10421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10407_10422__$1))
{var c__4191__auto___10423 = cljs.core.chunk_first.call(null,seq__10407_10422__$1);{
var G__10424 = cljs.core.chunk_rest.call(null,seq__10407_10422__$1);
var G__10425 = c__4191__auto___10423;
var G__10426 = cljs.core.count.call(null,c__4191__auto___10423);
var G__10427 = 0;
seq__10407_10412 = G__10424;
chunk__10408_10413 = G__10425;
count__10409_10414 = G__10426;
i__10410_10415 = G__10427;
continue;
}
} else
{var node_10428 = cljs.core.first.call(null,seq__10407_10422__$1);node_10428.innerHTML = value_10411;
{
var G__10429 = cljs.core.next.call(null,seq__10407_10422__$1);
var G__10430 = null;
var G__10431 = 0;
var G__10432 = 0;
seq__10407_10412 = G__10429;
chunk__10408_10413 = G__10430;
count__10409_10414 = G__10431;
i__10410_10415 = G__10432;
continue;
}
}
} else
{}
}
break;
}
}catch (e10406){if((e10406 instanceof Error))
{var e_10433 = e10406;domina.replace_children_BANG_.call(null,content,value_10411);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10406;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3431__auto__ = bubble;if(cljs.core.truth_(and__3431__auto__))
{return (value == null);
} else
{return and__3431__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3443__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__10440_10444 = cljs.core.seq.call(null,children);var chunk__10441_10445 = null;var count__10442_10446 = 0;var i__10443_10447 = 0;while(true){
if((i__10443_10447 < count__10442_10446))
{var child_10448 = cljs.core._nth.call(null,chunk__10441_10445,i__10443_10447);frag.appendChild(child_10448);
{
var G__10449 = seq__10440_10444;
var G__10450 = chunk__10441_10445;
var G__10451 = count__10442_10446;
var G__10452 = (i__10443_10447 + 1);
seq__10440_10444 = G__10449;
chunk__10441_10445 = G__10450;
count__10442_10446 = G__10451;
i__10443_10447 = G__10452;
continue;
}
} else
{var temp__4092__auto___10453 = cljs.core.seq.call(null,seq__10440_10444);if(temp__4092__auto___10453)
{var seq__10440_10454__$1 = temp__4092__auto___10453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10440_10454__$1))
{var c__4191__auto___10455 = cljs.core.chunk_first.call(null,seq__10440_10454__$1);{
var G__10456 = cljs.core.chunk_rest.call(null,seq__10440_10454__$1);
var G__10457 = c__4191__auto___10455;
var G__10458 = cljs.core.count.call(null,c__4191__auto___10455);
var G__10459 = 0;
seq__10440_10444 = G__10456;
chunk__10441_10445 = G__10457;
count__10442_10446 = G__10458;
i__10443_10447 = G__10459;
continue;
}
} else
{var child_10460 = cljs.core.first.call(null,seq__10440_10454__$1);frag.appendChild(child_10460);
{
var G__10461 = cljs.core.next.call(null,seq__10440_10454__$1);
var G__10462 = null;
var G__10463 = 0;
var G__10464 = 0;
seq__10440_10444 = G__10461;
chunk__10441_10445 = G__10462;
count__10442_10446 = G__10463;
i__10443_10447 = G__10464;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10434_SHARP_,p2__10435_SHARP_){return f.call(null,p1__10434_SHARP_,p2__10435_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3431__auto__ = obj;if(cljs.core.truth_(and__3431__auto__))
{var and__3431__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3431__auto____$1)
{return obj.length;
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__10466 = list_thing;if(G__10466)
{var bit__4093__auto__ = (G__10466.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__10466.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10466.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10466);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10466);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__10467 = content;if(G__10467)
{var bit__4093__auto__ = (G__10467.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__10467.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10467.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10467);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10467);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__10468 = content;if(G__10468)
{var bit__4093__auto__ = (G__10468.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__10468.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10468.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10468);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10468);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map