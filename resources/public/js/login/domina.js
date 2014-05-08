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
var opt_wrapper_7299 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7300 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_7301 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_7300,table_section_wrapper_7300,opt_wrapper_7299,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_7301,table_section_wrapper_7300,cell_wrapper_7301,opt_wrapper_7299,table_section_wrapper_7300,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_7300]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3431__auto__ = div.firstChild;if(cljs.core.truth_(and__3431__auto__))
{return div.firstChild.childNodes;
} else
{return and__3431__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__7306 = cljs.core.seq.call(null,tbody);var chunk__7307 = null;var count__7308 = 0;var i__7309 = 0;while(true){
if((i__7309 < count__7308))
{var child = cljs.core._nth.call(null,chunk__7307,i__7309);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7310 = seq__7306;
var G__7311 = chunk__7307;
var G__7312 = count__7308;
var G__7313 = (i__7309 + 1);
seq__7306 = G__7310;
chunk__7307 = G__7311;
count__7308 = G__7312;
i__7309 = G__7313;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7306);if(temp__4092__auto__)
{var seq__7306__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7306__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__7306__$1);{
var G__7314 = cljs.core.chunk_rest.call(null,seq__7306__$1);
var G__7315 = c__4191__auto__;
var G__7316 = cljs.core.count.call(null,c__4191__auto__);
var G__7317 = 0;
seq__7306 = G__7314;
chunk__7307 = G__7315;
count__7308 = G__7316;
i__7309 = G__7317;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__7306__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7318 = cljs.core.next.call(null,seq__7306__$1);
var G__7319 = null;
var G__7320 = 0;
var G__7321 = 0;
seq__7306 = G__7318;
chunk__7307 = G__7319;
count__7308 = G__7320;
i__7309 = G__7321;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__7323 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__7323,0,null);var start_wrap = cljs.core.nth.call(null,vec__7323,1,null);var end_wrap = cljs.core.nth.call(null,vec__7323,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__7324 = wrapper.lastChild;
var G__7325 = (level - 1);
wrapper = G__7324;
level = G__7325;
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
domina.DomContent = (function (){var obj7327 = {};return obj7327;
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
log_debug.cljs$lang$applyTo = (function (arglist__7328){
var mesg = cljs.core.seq(arglist__7328);
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
log.cljs$lang$applyTo = (function (arglist__7329){
var mesg = cljs.core.seq(arglist__7329);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__7330){
var contents = cljs.core.seq(arglist__7330);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__7331_SHARP_){return p1__7331_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__7332_SHARP_,p2__7333_SHARP_){return goog.dom.insertChildAt(p1__7332_SHARP_,p2__7333_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7335_SHARP_,p2__7334_SHARP_){return goog.dom.insertSiblingBefore(p2__7334_SHARP_,p1__7335_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7337_SHARP_,p2__7336_SHARP_){return goog.dom.insertSiblingAfter(p2__7336_SHARP_,p1__7337_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__7339_SHARP_,p2__7338_SHARP_){return goog.dom.replaceNode(p2__7338_SHARP_,p1__7339_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__7344_7348 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7345_7349 = null;var count__7346_7350 = 0;var i__7347_7351 = 0;while(true){
if((i__7347_7351 < count__7346_7350))
{var n_7352 = cljs.core._nth.call(null,chunk__7345_7349,i__7347_7351);goog.style.setStyle(n_7352,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7353 = seq__7344_7348;
var G__7354 = chunk__7345_7349;
var G__7355 = count__7346_7350;
var G__7356 = (i__7347_7351 + 1);
seq__7344_7348 = G__7353;
chunk__7345_7349 = G__7354;
count__7346_7350 = G__7355;
i__7347_7351 = G__7356;
continue;
}
} else
{var temp__4092__auto___7357 = cljs.core.seq.call(null,seq__7344_7348);if(temp__4092__auto___7357)
{var seq__7344_7358__$1 = temp__4092__auto___7357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7344_7358__$1))
{var c__4191__auto___7359 = cljs.core.chunk_first.call(null,seq__7344_7358__$1);{
var G__7360 = cljs.core.chunk_rest.call(null,seq__7344_7358__$1);
var G__7361 = c__4191__auto___7359;
var G__7362 = cljs.core.count.call(null,c__4191__auto___7359);
var G__7363 = 0;
seq__7344_7348 = G__7360;
chunk__7345_7349 = G__7361;
count__7346_7350 = G__7362;
i__7347_7351 = G__7363;
continue;
}
} else
{var n_7364 = cljs.core.first.call(null,seq__7344_7358__$1);goog.style.setStyle(n_7364,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7365 = cljs.core.next.call(null,seq__7344_7358__$1);
var G__7366 = null;
var G__7367 = 0;
var G__7368 = 0;
seq__7344_7348 = G__7365;
chunk__7345_7349 = G__7366;
count__7346_7350 = G__7367;
i__7347_7351 = G__7368;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7369){
var content = cljs.core.first(arglist__7369);
arglist__7369 = cljs.core.next(arglist__7369);
var name = cljs.core.first(arglist__7369);
var value = cljs.core.rest(arglist__7369);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__7374_7378 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7375_7379 = null;var count__7376_7380 = 0;var i__7377_7381 = 0;while(true){
if((i__7377_7381 < count__7376_7380))
{var n_7382 = cljs.core._nth.call(null,chunk__7375_7379,i__7377_7381);n_7382.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7383 = seq__7374_7378;
var G__7384 = chunk__7375_7379;
var G__7385 = count__7376_7380;
var G__7386 = (i__7377_7381 + 1);
seq__7374_7378 = G__7383;
chunk__7375_7379 = G__7384;
count__7376_7380 = G__7385;
i__7377_7381 = G__7386;
continue;
}
} else
{var temp__4092__auto___7387 = cljs.core.seq.call(null,seq__7374_7378);if(temp__4092__auto___7387)
{var seq__7374_7388__$1 = temp__4092__auto___7387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7374_7388__$1))
{var c__4191__auto___7389 = cljs.core.chunk_first.call(null,seq__7374_7388__$1);{
var G__7390 = cljs.core.chunk_rest.call(null,seq__7374_7388__$1);
var G__7391 = c__4191__auto___7389;
var G__7392 = cljs.core.count.call(null,c__4191__auto___7389);
var G__7393 = 0;
seq__7374_7378 = G__7390;
chunk__7375_7379 = G__7391;
count__7376_7380 = G__7392;
i__7377_7381 = G__7393;
continue;
}
} else
{var n_7394 = cljs.core.first.call(null,seq__7374_7388__$1);n_7394.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7395 = cljs.core.next.call(null,seq__7374_7388__$1);
var G__7396 = null;
var G__7397 = 0;
var G__7398 = 0;
seq__7374_7378 = G__7395;
chunk__7375_7379 = G__7396;
count__7376_7380 = G__7397;
i__7377_7381 = G__7398;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7399){
var content = cljs.core.first(arglist__7399);
arglist__7399 = cljs.core.next(arglist__7399);
var name = cljs.core.first(arglist__7399);
var value = cljs.core.rest(arglist__7399);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__7404_7408 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7405_7409 = null;var count__7406_7410 = 0;var i__7407_7411 = 0;while(true){
if((i__7407_7411 < count__7406_7410))
{var n_7412 = cljs.core._nth.call(null,chunk__7405_7409,i__7407_7411);n_7412.removeAttribute(cljs.core.name.call(null,name));
{
var G__7413 = seq__7404_7408;
var G__7414 = chunk__7405_7409;
var G__7415 = count__7406_7410;
var G__7416 = (i__7407_7411 + 1);
seq__7404_7408 = G__7413;
chunk__7405_7409 = G__7414;
count__7406_7410 = G__7415;
i__7407_7411 = G__7416;
continue;
}
} else
{var temp__4092__auto___7417 = cljs.core.seq.call(null,seq__7404_7408);if(temp__4092__auto___7417)
{var seq__7404_7418__$1 = temp__4092__auto___7417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7404_7418__$1))
{var c__4191__auto___7419 = cljs.core.chunk_first.call(null,seq__7404_7418__$1);{
var G__7420 = cljs.core.chunk_rest.call(null,seq__7404_7418__$1);
var G__7421 = c__4191__auto___7419;
var G__7422 = cljs.core.count.call(null,c__4191__auto___7419);
var G__7423 = 0;
seq__7404_7408 = G__7420;
chunk__7405_7409 = G__7421;
count__7406_7410 = G__7422;
i__7407_7411 = G__7423;
continue;
}
} else
{var n_7424 = cljs.core.first.call(null,seq__7404_7418__$1);n_7424.removeAttribute(cljs.core.name.call(null,name));
{
var G__7425 = cljs.core.next.call(null,seq__7404_7418__$1);
var G__7426 = null;
var G__7427 = 0;
var G__7428 = 0;
seq__7404_7408 = G__7425;
chunk__7405_7409 = G__7426;
count__7406_7410 = G__7427;
i__7407_7411 = G__7428;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__7430 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__7430,0,null);var v = cljs.core.nth.call(null,vec__7430,1,null);if(cljs.core.truth_((function (){var and__3431__auto__ = k;if(cljs.core.truth_(and__3431__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__7431_SHARP_){var attr = attrs__$1.item(p1__7431_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__7438_7444 = cljs.core.seq.call(null,styles);var chunk__7439_7445 = null;var count__7440_7446 = 0;var i__7441_7447 = 0;while(true){
if((i__7441_7447 < count__7440_7446))
{var vec__7442_7448 = cljs.core._nth.call(null,chunk__7439_7445,i__7441_7447);var name_7449 = cljs.core.nth.call(null,vec__7442_7448,0,null);var value_7450 = cljs.core.nth.call(null,vec__7442_7448,1,null);domina.set_style_BANG_.call(null,content,name_7449,value_7450);
{
var G__7451 = seq__7438_7444;
var G__7452 = chunk__7439_7445;
var G__7453 = count__7440_7446;
var G__7454 = (i__7441_7447 + 1);
seq__7438_7444 = G__7451;
chunk__7439_7445 = G__7452;
count__7440_7446 = G__7453;
i__7441_7447 = G__7454;
continue;
}
} else
{var temp__4092__auto___7455 = cljs.core.seq.call(null,seq__7438_7444);if(temp__4092__auto___7455)
{var seq__7438_7456__$1 = temp__4092__auto___7455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7438_7456__$1))
{var c__4191__auto___7457 = cljs.core.chunk_first.call(null,seq__7438_7456__$1);{
var G__7458 = cljs.core.chunk_rest.call(null,seq__7438_7456__$1);
var G__7459 = c__4191__auto___7457;
var G__7460 = cljs.core.count.call(null,c__4191__auto___7457);
var G__7461 = 0;
seq__7438_7444 = G__7458;
chunk__7439_7445 = G__7459;
count__7440_7446 = G__7460;
i__7441_7447 = G__7461;
continue;
}
} else
{var vec__7443_7462 = cljs.core.first.call(null,seq__7438_7456__$1);var name_7463 = cljs.core.nth.call(null,vec__7443_7462,0,null);var value_7464 = cljs.core.nth.call(null,vec__7443_7462,1,null);domina.set_style_BANG_.call(null,content,name_7463,value_7464);
{
var G__7465 = cljs.core.next.call(null,seq__7438_7456__$1);
var G__7466 = null;
var G__7467 = 0;
var G__7468 = 0;
seq__7438_7444 = G__7465;
chunk__7439_7445 = G__7466;
count__7440_7446 = G__7467;
i__7441_7447 = G__7468;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7475_7481 = cljs.core.seq.call(null,attrs);var chunk__7476_7482 = null;var count__7477_7483 = 0;var i__7478_7484 = 0;while(true){
if((i__7478_7484 < count__7477_7483))
{var vec__7479_7485 = cljs.core._nth.call(null,chunk__7476_7482,i__7478_7484);var name_7486 = cljs.core.nth.call(null,vec__7479_7485,0,null);var value_7487 = cljs.core.nth.call(null,vec__7479_7485,1,null);domina.set_attr_BANG_.call(null,content,name_7486,value_7487);
{
var G__7488 = seq__7475_7481;
var G__7489 = chunk__7476_7482;
var G__7490 = count__7477_7483;
var G__7491 = (i__7478_7484 + 1);
seq__7475_7481 = G__7488;
chunk__7476_7482 = G__7489;
count__7477_7483 = G__7490;
i__7478_7484 = G__7491;
continue;
}
} else
{var temp__4092__auto___7492 = cljs.core.seq.call(null,seq__7475_7481);if(temp__4092__auto___7492)
{var seq__7475_7493__$1 = temp__4092__auto___7492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7475_7493__$1))
{var c__4191__auto___7494 = cljs.core.chunk_first.call(null,seq__7475_7493__$1);{
var G__7495 = cljs.core.chunk_rest.call(null,seq__7475_7493__$1);
var G__7496 = c__4191__auto___7494;
var G__7497 = cljs.core.count.call(null,c__4191__auto___7494);
var G__7498 = 0;
seq__7475_7481 = G__7495;
chunk__7476_7482 = G__7496;
count__7477_7483 = G__7497;
i__7478_7484 = G__7498;
continue;
}
} else
{var vec__7480_7499 = cljs.core.first.call(null,seq__7475_7493__$1);var name_7500 = cljs.core.nth.call(null,vec__7480_7499,0,null);var value_7501 = cljs.core.nth.call(null,vec__7480_7499,1,null);domina.set_attr_BANG_.call(null,content,name_7500,value_7501);
{
var G__7502 = cljs.core.next.call(null,seq__7475_7493__$1);
var G__7503 = null;
var G__7504 = 0;
var G__7505 = 0;
seq__7475_7481 = G__7502;
chunk__7476_7482 = G__7503;
count__7477_7483 = G__7504;
i__7478_7484 = G__7505;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7510_7514 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7511_7515 = null;var count__7512_7516 = 0;var i__7513_7517 = 0;while(true){
if((i__7513_7517 < count__7512_7516))
{var node_7518 = cljs.core._nth.call(null,chunk__7511_7515,i__7513_7517);goog.dom.classes.add(node_7518,class$);
{
var G__7519 = seq__7510_7514;
var G__7520 = chunk__7511_7515;
var G__7521 = count__7512_7516;
var G__7522 = (i__7513_7517 + 1);
seq__7510_7514 = G__7519;
chunk__7511_7515 = G__7520;
count__7512_7516 = G__7521;
i__7513_7517 = G__7522;
continue;
}
} else
{var temp__4092__auto___7523 = cljs.core.seq.call(null,seq__7510_7514);if(temp__4092__auto___7523)
{var seq__7510_7524__$1 = temp__4092__auto___7523;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7510_7524__$1))
{var c__4191__auto___7525 = cljs.core.chunk_first.call(null,seq__7510_7524__$1);{
var G__7526 = cljs.core.chunk_rest.call(null,seq__7510_7524__$1);
var G__7527 = c__4191__auto___7525;
var G__7528 = cljs.core.count.call(null,c__4191__auto___7525);
var G__7529 = 0;
seq__7510_7514 = G__7526;
chunk__7511_7515 = G__7527;
count__7512_7516 = G__7528;
i__7513_7517 = G__7529;
continue;
}
} else
{var node_7530 = cljs.core.first.call(null,seq__7510_7524__$1);goog.dom.classes.add(node_7530,class$);
{
var G__7531 = cljs.core.next.call(null,seq__7510_7524__$1);
var G__7532 = null;
var G__7533 = 0;
var G__7534 = 0;
seq__7510_7514 = G__7531;
chunk__7511_7515 = G__7532;
count__7512_7516 = G__7533;
i__7513_7517 = G__7534;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7539_7543 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7540_7544 = null;var count__7541_7545 = 0;var i__7542_7546 = 0;while(true){
if((i__7542_7546 < count__7541_7545))
{var node_7547 = cljs.core._nth.call(null,chunk__7540_7544,i__7542_7546);goog.dom.classes.remove(node_7547,class$);
{
var G__7548 = seq__7539_7543;
var G__7549 = chunk__7540_7544;
var G__7550 = count__7541_7545;
var G__7551 = (i__7542_7546 + 1);
seq__7539_7543 = G__7548;
chunk__7540_7544 = G__7549;
count__7541_7545 = G__7550;
i__7542_7546 = G__7551;
continue;
}
} else
{var temp__4092__auto___7552 = cljs.core.seq.call(null,seq__7539_7543);if(temp__4092__auto___7552)
{var seq__7539_7553__$1 = temp__4092__auto___7552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7539_7553__$1))
{var c__4191__auto___7554 = cljs.core.chunk_first.call(null,seq__7539_7553__$1);{
var G__7555 = cljs.core.chunk_rest.call(null,seq__7539_7553__$1);
var G__7556 = c__4191__auto___7554;
var G__7557 = cljs.core.count.call(null,c__4191__auto___7554);
var G__7558 = 0;
seq__7539_7543 = G__7555;
chunk__7540_7544 = G__7556;
count__7541_7545 = G__7557;
i__7542_7546 = G__7558;
continue;
}
} else
{var node_7559 = cljs.core.first.call(null,seq__7539_7553__$1);goog.dom.classes.remove(node_7559,class$);
{
var G__7560 = cljs.core.next.call(null,seq__7539_7553__$1);
var G__7561 = null;
var G__7562 = 0;
var G__7563 = 0;
seq__7539_7543 = G__7560;
chunk__7540_7544 = G__7561;
count__7541_7545 = G__7562;
i__7542_7546 = G__7563;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__7568_7572 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7569_7573 = null;var count__7570_7574 = 0;var i__7571_7575 = 0;while(true){
if((i__7571_7575 < count__7570_7574))
{var node_7576 = cljs.core._nth.call(null,chunk__7569_7573,i__7571_7575);goog.dom.classes.toggle(node_7576,class$);
{
var G__7577 = seq__7568_7572;
var G__7578 = chunk__7569_7573;
var G__7579 = count__7570_7574;
var G__7580 = (i__7571_7575 + 1);
seq__7568_7572 = G__7577;
chunk__7569_7573 = G__7578;
count__7570_7574 = G__7579;
i__7571_7575 = G__7580;
continue;
}
} else
{var temp__4092__auto___7581 = cljs.core.seq.call(null,seq__7568_7572);if(temp__4092__auto___7581)
{var seq__7568_7582__$1 = temp__4092__auto___7581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7568_7582__$1))
{var c__4191__auto___7583 = cljs.core.chunk_first.call(null,seq__7568_7582__$1);{
var G__7584 = cljs.core.chunk_rest.call(null,seq__7568_7582__$1);
var G__7585 = c__4191__auto___7583;
var G__7586 = cljs.core.count.call(null,c__4191__auto___7583);
var G__7587 = 0;
seq__7568_7572 = G__7584;
chunk__7569_7573 = G__7585;
count__7570_7574 = G__7586;
i__7571_7575 = G__7587;
continue;
}
} else
{var node_7588 = cljs.core.first.call(null,seq__7568_7582__$1);goog.dom.classes.toggle(node_7588,class$);
{
var G__7589 = cljs.core.next.call(null,seq__7568_7582__$1);
var G__7590 = null;
var G__7591 = 0;
var G__7592 = 0;
seq__7568_7572 = G__7589;
chunk__7569_7573 = G__7590;
count__7570_7574 = G__7591;
i__7571_7575 = G__7592;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_7601__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__7597_7602 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7598_7603 = null;var count__7599_7604 = 0;var i__7600_7605 = 0;while(true){
if((i__7600_7605 < count__7599_7604))
{var node_7606 = cljs.core._nth.call(null,chunk__7598_7603,i__7600_7605);goog.dom.classes.set(node_7606,classes_7601__$1);
{
var G__7607 = seq__7597_7602;
var G__7608 = chunk__7598_7603;
var G__7609 = count__7599_7604;
var G__7610 = (i__7600_7605 + 1);
seq__7597_7602 = G__7607;
chunk__7598_7603 = G__7608;
count__7599_7604 = G__7609;
i__7600_7605 = G__7610;
continue;
}
} else
{var temp__4092__auto___7611 = cljs.core.seq.call(null,seq__7597_7602);if(temp__4092__auto___7611)
{var seq__7597_7612__$1 = temp__4092__auto___7611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7597_7612__$1))
{var c__4191__auto___7613 = cljs.core.chunk_first.call(null,seq__7597_7612__$1);{
var G__7614 = cljs.core.chunk_rest.call(null,seq__7597_7612__$1);
var G__7615 = c__4191__auto___7613;
var G__7616 = cljs.core.count.call(null,c__4191__auto___7613);
var G__7617 = 0;
seq__7597_7602 = G__7614;
chunk__7598_7603 = G__7615;
count__7599_7604 = G__7616;
i__7600_7605 = G__7617;
continue;
}
} else
{var node_7618 = cljs.core.first.call(null,seq__7597_7612__$1);goog.dom.classes.set(node_7618,classes_7601__$1);
{
var G__7619 = cljs.core.next.call(null,seq__7597_7612__$1);
var G__7620 = null;
var G__7621 = 0;
var G__7622 = 0;
seq__7597_7602 = G__7619;
chunk__7598_7603 = G__7620;
count__7599_7604 = G__7621;
i__7600_7605 = G__7622;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7627_7631 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7628_7632 = null;var count__7629_7633 = 0;var i__7630_7634 = 0;while(true){
if((i__7630_7634 < count__7629_7633))
{var node_7635 = cljs.core._nth.call(null,chunk__7628_7632,i__7630_7634);goog.dom.setTextContent(node_7635,value);
{
var G__7636 = seq__7627_7631;
var G__7637 = chunk__7628_7632;
var G__7638 = count__7629_7633;
var G__7639 = (i__7630_7634 + 1);
seq__7627_7631 = G__7636;
chunk__7628_7632 = G__7637;
count__7629_7633 = G__7638;
i__7630_7634 = G__7639;
continue;
}
} else
{var temp__4092__auto___7640 = cljs.core.seq.call(null,seq__7627_7631);if(temp__4092__auto___7640)
{var seq__7627_7641__$1 = temp__4092__auto___7640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7627_7641__$1))
{var c__4191__auto___7642 = cljs.core.chunk_first.call(null,seq__7627_7641__$1);{
var G__7643 = cljs.core.chunk_rest.call(null,seq__7627_7641__$1);
var G__7644 = c__4191__auto___7642;
var G__7645 = cljs.core.count.call(null,c__4191__auto___7642);
var G__7646 = 0;
seq__7627_7631 = G__7643;
chunk__7628_7632 = G__7644;
count__7629_7633 = G__7645;
i__7630_7634 = G__7646;
continue;
}
} else
{var node_7647 = cljs.core.first.call(null,seq__7627_7641__$1);goog.dom.setTextContent(node_7647,value);
{
var G__7648 = cljs.core.next.call(null,seq__7627_7641__$1);
var G__7649 = null;
var G__7650 = 0;
var G__7651 = 0;
seq__7627_7631 = G__7648;
chunk__7628_7632 = G__7649;
count__7629_7633 = G__7650;
i__7630_7634 = G__7651;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7656_7660 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7657_7661 = null;var count__7658_7662 = 0;var i__7659_7663 = 0;while(true){
if((i__7659_7663 < count__7658_7662))
{var node_7664 = cljs.core._nth.call(null,chunk__7657_7661,i__7659_7663);goog.dom.forms.setValue(node_7664,value);
{
var G__7665 = seq__7656_7660;
var G__7666 = chunk__7657_7661;
var G__7667 = count__7658_7662;
var G__7668 = (i__7659_7663 + 1);
seq__7656_7660 = G__7665;
chunk__7657_7661 = G__7666;
count__7658_7662 = G__7667;
i__7659_7663 = G__7668;
continue;
}
} else
{var temp__4092__auto___7669 = cljs.core.seq.call(null,seq__7656_7660);if(temp__4092__auto___7669)
{var seq__7656_7670__$1 = temp__4092__auto___7669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7656_7670__$1))
{var c__4191__auto___7671 = cljs.core.chunk_first.call(null,seq__7656_7670__$1);{
var G__7672 = cljs.core.chunk_rest.call(null,seq__7656_7670__$1);
var G__7673 = c__4191__auto___7671;
var G__7674 = cljs.core.count.call(null,c__4191__auto___7671);
var G__7675 = 0;
seq__7656_7660 = G__7672;
chunk__7657_7661 = G__7673;
count__7658_7662 = G__7674;
i__7659_7663 = G__7675;
continue;
}
} else
{var node_7676 = cljs.core.first.call(null,seq__7656_7670__$1);goog.dom.forms.setValue(node_7676,value);
{
var G__7677 = cljs.core.next.call(null,seq__7656_7670__$1);
var G__7678 = null;
var G__7679 = 0;
var G__7680 = 0;
seq__7656_7660 = G__7677;
chunk__7657_7661 = G__7678;
count__7658_7662 = G__7679;
i__7659_7663 = G__7680;
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
{var value_7691 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__7687_7692 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7688_7693 = null;var count__7689_7694 = 0;var i__7690_7695 = 0;while(true){
if((i__7690_7695 < count__7689_7694))
{var node_7696 = cljs.core._nth.call(null,chunk__7688_7693,i__7690_7695);node_7696.innerHTML = value_7691;
{
var G__7697 = seq__7687_7692;
var G__7698 = chunk__7688_7693;
var G__7699 = count__7689_7694;
var G__7700 = (i__7690_7695 + 1);
seq__7687_7692 = G__7697;
chunk__7688_7693 = G__7698;
count__7689_7694 = G__7699;
i__7690_7695 = G__7700;
continue;
}
} else
{var temp__4092__auto___7701 = cljs.core.seq.call(null,seq__7687_7692);if(temp__4092__auto___7701)
{var seq__7687_7702__$1 = temp__4092__auto___7701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7687_7702__$1))
{var c__4191__auto___7703 = cljs.core.chunk_first.call(null,seq__7687_7702__$1);{
var G__7704 = cljs.core.chunk_rest.call(null,seq__7687_7702__$1);
var G__7705 = c__4191__auto___7703;
var G__7706 = cljs.core.count.call(null,c__4191__auto___7703);
var G__7707 = 0;
seq__7687_7692 = G__7704;
chunk__7688_7693 = G__7705;
count__7689_7694 = G__7706;
i__7690_7695 = G__7707;
continue;
}
} else
{var node_7708 = cljs.core.first.call(null,seq__7687_7702__$1);node_7708.innerHTML = value_7691;
{
var G__7709 = cljs.core.next.call(null,seq__7687_7702__$1);
var G__7710 = null;
var G__7711 = 0;
var G__7712 = 0;
seq__7687_7692 = G__7709;
chunk__7688_7693 = G__7710;
count__7689_7694 = G__7711;
i__7690_7695 = G__7712;
continue;
}
}
} else
{}
}
break;
}
}catch (e7686){if((e7686 instanceof Error))
{var e_7713 = e7686;domina.replace_children_BANG_.call(null,content,value_7691);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7686;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__7720_7724 = cljs.core.seq.call(null,children);var chunk__7721_7725 = null;var count__7722_7726 = 0;var i__7723_7727 = 0;while(true){
if((i__7723_7727 < count__7722_7726))
{var child_7728 = cljs.core._nth.call(null,chunk__7721_7725,i__7723_7727);frag.appendChild(child_7728);
{
var G__7729 = seq__7720_7724;
var G__7730 = chunk__7721_7725;
var G__7731 = count__7722_7726;
var G__7732 = (i__7723_7727 + 1);
seq__7720_7724 = G__7729;
chunk__7721_7725 = G__7730;
count__7722_7726 = G__7731;
i__7723_7727 = G__7732;
continue;
}
} else
{var temp__4092__auto___7733 = cljs.core.seq.call(null,seq__7720_7724);if(temp__4092__auto___7733)
{var seq__7720_7734__$1 = temp__4092__auto___7733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7720_7734__$1))
{var c__4191__auto___7735 = cljs.core.chunk_first.call(null,seq__7720_7734__$1);{
var G__7736 = cljs.core.chunk_rest.call(null,seq__7720_7734__$1);
var G__7737 = c__4191__auto___7735;
var G__7738 = cljs.core.count.call(null,c__4191__auto___7735);
var G__7739 = 0;
seq__7720_7724 = G__7736;
chunk__7721_7725 = G__7737;
count__7722_7726 = G__7738;
i__7723_7727 = G__7739;
continue;
}
} else
{var child_7740 = cljs.core.first.call(null,seq__7720_7734__$1);frag.appendChild(child_7740);
{
var G__7741 = cljs.core.next.call(null,seq__7720_7734__$1);
var G__7742 = null;
var G__7743 = 0;
var G__7744 = 0;
seq__7720_7724 = G__7741;
chunk__7721_7725 = G__7742;
count__7722_7726 = G__7743;
i__7723_7727 = G__7744;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__7714_SHARP_,p2__7715_SHARP_){return f.call(null,p1__7714_SHARP_,p2__7715_SHARP_);
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
{if((function (){var G__7746 = list_thing;if(G__7746)
{var bit__4093__auto__ = (G__7746.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__7746.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7746.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7746);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7746);
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
{if((function (){var G__7747 = content;if(G__7747)
{var bit__4093__auto__ = (G__7747.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__7747.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7747.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7747);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7747);
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
{if((function (){var G__7748 = content;if(G__7748)
{var bit__4093__auto__ = (G__7748.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__7748.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7748.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7748);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7748);
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