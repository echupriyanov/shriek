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
var opt_wrapper_17436 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17437 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17438 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17437,table_section_wrapper_17437,opt_wrapper_17436,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17438,table_section_wrapper_17437,cell_wrapper_17438,opt_wrapper_17436,table_section_wrapper_17437,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17437]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3431__auto__ = div.firstChild;if(cljs.core.truth_(and__3431__auto__))
{return div.firstChild.childNodes;
} else
{return and__3431__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17443 = cljs.core.seq.call(null,tbody);var chunk__17444 = null;var count__17445 = 0;var i__17446 = 0;while(true){
if((i__17446 < count__17445))
{var child = cljs.core._nth.call(null,chunk__17444,i__17446);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17447 = seq__17443;
var G__17448 = chunk__17444;
var G__17449 = count__17445;
var G__17450 = (i__17446 + 1);
seq__17443 = G__17447;
chunk__17444 = G__17448;
count__17445 = G__17449;
i__17446 = G__17450;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17443);if(temp__4092__auto__)
{var seq__17443__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17443__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17443__$1);{
var G__17451 = cljs.core.chunk_rest.call(null,seq__17443__$1);
var G__17452 = c__4191__auto__;
var G__17453 = cljs.core.count.call(null,c__4191__auto__);
var G__17454 = 0;
seq__17443 = G__17451;
chunk__17444 = G__17452;
count__17445 = G__17453;
i__17446 = G__17454;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17443__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17455 = cljs.core.next.call(null,seq__17443__$1);
var G__17456 = null;
var G__17457 = 0;
var G__17458 = 0;
seq__17443 = G__17455;
chunk__17444 = G__17456;
count__17445 = G__17457;
i__17446 = G__17458;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17460 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17460,0,null);var start_wrap = cljs.core.nth.call(null,vec__17460,1,null);var end_wrap = cljs.core.nth.call(null,vec__17460,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17461 = wrapper.lastChild;
var G__17462 = (level - 1);
wrapper = G__17461;
level = G__17462;
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
domina.DomContent = (function (){var obj17464 = {};return obj17464;
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
log_debug.cljs$lang$applyTo = (function (arglist__17465){
var mesg = cljs.core.seq(arglist__17465);
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
log.cljs$lang$applyTo = (function (arglist__17466){
var mesg = cljs.core.seq(arglist__17466);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17467){
var contents = cljs.core.seq(arglist__17467);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17468_SHARP_){return p1__17468_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17469_SHARP_,p2__17470_SHARP_){return goog.dom.insertChildAt(p1__17469_SHARP_,p2__17470_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17472_SHARP_,p2__17471_SHARP_){return goog.dom.insertSiblingBefore(p2__17471_SHARP_,p1__17472_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17474_SHARP_,p2__17473_SHARP_){return goog.dom.insertSiblingAfter(p2__17473_SHARP_,p1__17474_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17476_SHARP_,p2__17475_SHARP_){return goog.dom.replaceNode(p2__17475_SHARP_,p1__17476_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17481_17485 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17482_17486 = null;var count__17483_17487 = 0;var i__17484_17488 = 0;while(true){
if((i__17484_17488 < count__17483_17487))
{var n_17489 = cljs.core._nth.call(null,chunk__17482_17486,i__17484_17488);goog.style.setStyle(n_17489,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17490 = seq__17481_17485;
var G__17491 = chunk__17482_17486;
var G__17492 = count__17483_17487;
var G__17493 = (i__17484_17488 + 1);
seq__17481_17485 = G__17490;
chunk__17482_17486 = G__17491;
count__17483_17487 = G__17492;
i__17484_17488 = G__17493;
continue;
}
} else
{var temp__4092__auto___17494 = cljs.core.seq.call(null,seq__17481_17485);if(temp__4092__auto___17494)
{var seq__17481_17495__$1 = temp__4092__auto___17494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17481_17495__$1))
{var c__4191__auto___17496 = cljs.core.chunk_first.call(null,seq__17481_17495__$1);{
var G__17497 = cljs.core.chunk_rest.call(null,seq__17481_17495__$1);
var G__17498 = c__4191__auto___17496;
var G__17499 = cljs.core.count.call(null,c__4191__auto___17496);
var G__17500 = 0;
seq__17481_17485 = G__17497;
chunk__17482_17486 = G__17498;
count__17483_17487 = G__17499;
i__17484_17488 = G__17500;
continue;
}
} else
{var n_17501 = cljs.core.first.call(null,seq__17481_17495__$1);goog.style.setStyle(n_17501,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17502 = cljs.core.next.call(null,seq__17481_17495__$1);
var G__17503 = null;
var G__17504 = 0;
var G__17505 = 0;
seq__17481_17485 = G__17502;
chunk__17482_17486 = G__17503;
count__17483_17487 = G__17504;
i__17484_17488 = G__17505;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17506){
var content = cljs.core.first(arglist__17506);
arglist__17506 = cljs.core.next(arglist__17506);
var name = cljs.core.first(arglist__17506);
var value = cljs.core.rest(arglist__17506);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17511_17515 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17512_17516 = null;var count__17513_17517 = 0;var i__17514_17518 = 0;while(true){
if((i__17514_17518 < count__17513_17517))
{var n_17519 = cljs.core._nth.call(null,chunk__17512_17516,i__17514_17518);n_17519.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17520 = seq__17511_17515;
var G__17521 = chunk__17512_17516;
var G__17522 = count__17513_17517;
var G__17523 = (i__17514_17518 + 1);
seq__17511_17515 = G__17520;
chunk__17512_17516 = G__17521;
count__17513_17517 = G__17522;
i__17514_17518 = G__17523;
continue;
}
} else
{var temp__4092__auto___17524 = cljs.core.seq.call(null,seq__17511_17515);if(temp__4092__auto___17524)
{var seq__17511_17525__$1 = temp__4092__auto___17524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17511_17525__$1))
{var c__4191__auto___17526 = cljs.core.chunk_first.call(null,seq__17511_17525__$1);{
var G__17527 = cljs.core.chunk_rest.call(null,seq__17511_17525__$1);
var G__17528 = c__4191__auto___17526;
var G__17529 = cljs.core.count.call(null,c__4191__auto___17526);
var G__17530 = 0;
seq__17511_17515 = G__17527;
chunk__17512_17516 = G__17528;
count__17513_17517 = G__17529;
i__17514_17518 = G__17530;
continue;
}
} else
{var n_17531 = cljs.core.first.call(null,seq__17511_17525__$1);n_17531.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17532 = cljs.core.next.call(null,seq__17511_17525__$1);
var G__17533 = null;
var G__17534 = 0;
var G__17535 = 0;
seq__17511_17515 = G__17532;
chunk__17512_17516 = G__17533;
count__17513_17517 = G__17534;
i__17514_17518 = G__17535;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17536){
var content = cljs.core.first(arglist__17536);
arglist__17536 = cljs.core.next(arglist__17536);
var name = cljs.core.first(arglist__17536);
var value = cljs.core.rest(arglist__17536);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17541_17545 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17542_17546 = null;var count__17543_17547 = 0;var i__17544_17548 = 0;while(true){
if((i__17544_17548 < count__17543_17547))
{var n_17549 = cljs.core._nth.call(null,chunk__17542_17546,i__17544_17548);n_17549.removeAttribute(cljs.core.name.call(null,name));
{
var G__17550 = seq__17541_17545;
var G__17551 = chunk__17542_17546;
var G__17552 = count__17543_17547;
var G__17553 = (i__17544_17548 + 1);
seq__17541_17545 = G__17550;
chunk__17542_17546 = G__17551;
count__17543_17547 = G__17552;
i__17544_17548 = G__17553;
continue;
}
} else
{var temp__4092__auto___17554 = cljs.core.seq.call(null,seq__17541_17545);if(temp__4092__auto___17554)
{var seq__17541_17555__$1 = temp__4092__auto___17554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17541_17555__$1))
{var c__4191__auto___17556 = cljs.core.chunk_first.call(null,seq__17541_17555__$1);{
var G__17557 = cljs.core.chunk_rest.call(null,seq__17541_17555__$1);
var G__17558 = c__4191__auto___17556;
var G__17559 = cljs.core.count.call(null,c__4191__auto___17556);
var G__17560 = 0;
seq__17541_17545 = G__17557;
chunk__17542_17546 = G__17558;
count__17543_17547 = G__17559;
i__17544_17548 = G__17560;
continue;
}
} else
{var n_17561 = cljs.core.first.call(null,seq__17541_17555__$1);n_17561.removeAttribute(cljs.core.name.call(null,name));
{
var G__17562 = cljs.core.next.call(null,seq__17541_17555__$1);
var G__17563 = null;
var G__17564 = 0;
var G__17565 = 0;
seq__17541_17545 = G__17562;
chunk__17542_17546 = G__17563;
count__17543_17547 = G__17564;
i__17544_17548 = G__17565;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17567 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17567,0,null);var v = cljs.core.nth.call(null,vec__17567,1,null);if(cljs.core.truth_((function (){var and__3431__auto__ = k;if(cljs.core.truth_(and__3431__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17568_SHARP_){var attr = attrs__$1.item(p1__17568_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17575_17581 = cljs.core.seq.call(null,styles);var chunk__17576_17582 = null;var count__17577_17583 = 0;var i__17578_17584 = 0;while(true){
if((i__17578_17584 < count__17577_17583))
{var vec__17579_17585 = cljs.core._nth.call(null,chunk__17576_17582,i__17578_17584);var name_17586 = cljs.core.nth.call(null,vec__17579_17585,0,null);var value_17587 = cljs.core.nth.call(null,vec__17579_17585,1,null);domina.set_style_BANG_.call(null,content,name_17586,value_17587);
{
var G__17588 = seq__17575_17581;
var G__17589 = chunk__17576_17582;
var G__17590 = count__17577_17583;
var G__17591 = (i__17578_17584 + 1);
seq__17575_17581 = G__17588;
chunk__17576_17582 = G__17589;
count__17577_17583 = G__17590;
i__17578_17584 = G__17591;
continue;
}
} else
{var temp__4092__auto___17592 = cljs.core.seq.call(null,seq__17575_17581);if(temp__4092__auto___17592)
{var seq__17575_17593__$1 = temp__4092__auto___17592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17575_17593__$1))
{var c__4191__auto___17594 = cljs.core.chunk_first.call(null,seq__17575_17593__$1);{
var G__17595 = cljs.core.chunk_rest.call(null,seq__17575_17593__$1);
var G__17596 = c__4191__auto___17594;
var G__17597 = cljs.core.count.call(null,c__4191__auto___17594);
var G__17598 = 0;
seq__17575_17581 = G__17595;
chunk__17576_17582 = G__17596;
count__17577_17583 = G__17597;
i__17578_17584 = G__17598;
continue;
}
} else
{var vec__17580_17599 = cljs.core.first.call(null,seq__17575_17593__$1);var name_17600 = cljs.core.nth.call(null,vec__17580_17599,0,null);var value_17601 = cljs.core.nth.call(null,vec__17580_17599,1,null);domina.set_style_BANG_.call(null,content,name_17600,value_17601);
{
var G__17602 = cljs.core.next.call(null,seq__17575_17593__$1);
var G__17603 = null;
var G__17604 = 0;
var G__17605 = 0;
seq__17575_17581 = G__17602;
chunk__17576_17582 = G__17603;
count__17577_17583 = G__17604;
i__17578_17584 = G__17605;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17612_17618 = cljs.core.seq.call(null,attrs);var chunk__17613_17619 = null;var count__17614_17620 = 0;var i__17615_17621 = 0;while(true){
if((i__17615_17621 < count__17614_17620))
{var vec__17616_17622 = cljs.core._nth.call(null,chunk__17613_17619,i__17615_17621);var name_17623 = cljs.core.nth.call(null,vec__17616_17622,0,null);var value_17624 = cljs.core.nth.call(null,vec__17616_17622,1,null);domina.set_attr_BANG_.call(null,content,name_17623,value_17624);
{
var G__17625 = seq__17612_17618;
var G__17626 = chunk__17613_17619;
var G__17627 = count__17614_17620;
var G__17628 = (i__17615_17621 + 1);
seq__17612_17618 = G__17625;
chunk__17613_17619 = G__17626;
count__17614_17620 = G__17627;
i__17615_17621 = G__17628;
continue;
}
} else
{var temp__4092__auto___17629 = cljs.core.seq.call(null,seq__17612_17618);if(temp__4092__auto___17629)
{var seq__17612_17630__$1 = temp__4092__auto___17629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17612_17630__$1))
{var c__4191__auto___17631 = cljs.core.chunk_first.call(null,seq__17612_17630__$1);{
var G__17632 = cljs.core.chunk_rest.call(null,seq__17612_17630__$1);
var G__17633 = c__4191__auto___17631;
var G__17634 = cljs.core.count.call(null,c__4191__auto___17631);
var G__17635 = 0;
seq__17612_17618 = G__17632;
chunk__17613_17619 = G__17633;
count__17614_17620 = G__17634;
i__17615_17621 = G__17635;
continue;
}
} else
{var vec__17617_17636 = cljs.core.first.call(null,seq__17612_17630__$1);var name_17637 = cljs.core.nth.call(null,vec__17617_17636,0,null);var value_17638 = cljs.core.nth.call(null,vec__17617_17636,1,null);domina.set_attr_BANG_.call(null,content,name_17637,value_17638);
{
var G__17639 = cljs.core.next.call(null,seq__17612_17630__$1);
var G__17640 = null;
var G__17641 = 0;
var G__17642 = 0;
seq__17612_17618 = G__17639;
chunk__17613_17619 = G__17640;
count__17614_17620 = G__17641;
i__17615_17621 = G__17642;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17647_17651 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17648_17652 = null;var count__17649_17653 = 0;var i__17650_17654 = 0;while(true){
if((i__17650_17654 < count__17649_17653))
{var node_17655 = cljs.core._nth.call(null,chunk__17648_17652,i__17650_17654);goog.dom.classes.add(node_17655,class$);
{
var G__17656 = seq__17647_17651;
var G__17657 = chunk__17648_17652;
var G__17658 = count__17649_17653;
var G__17659 = (i__17650_17654 + 1);
seq__17647_17651 = G__17656;
chunk__17648_17652 = G__17657;
count__17649_17653 = G__17658;
i__17650_17654 = G__17659;
continue;
}
} else
{var temp__4092__auto___17660 = cljs.core.seq.call(null,seq__17647_17651);if(temp__4092__auto___17660)
{var seq__17647_17661__$1 = temp__4092__auto___17660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17647_17661__$1))
{var c__4191__auto___17662 = cljs.core.chunk_first.call(null,seq__17647_17661__$1);{
var G__17663 = cljs.core.chunk_rest.call(null,seq__17647_17661__$1);
var G__17664 = c__4191__auto___17662;
var G__17665 = cljs.core.count.call(null,c__4191__auto___17662);
var G__17666 = 0;
seq__17647_17651 = G__17663;
chunk__17648_17652 = G__17664;
count__17649_17653 = G__17665;
i__17650_17654 = G__17666;
continue;
}
} else
{var node_17667 = cljs.core.first.call(null,seq__17647_17661__$1);goog.dom.classes.add(node_17667,class$);
{
var G__17668 = cljs.core.next.call(null,seq__17647_17661__$1);
var G__17669 = null;
var G__17670 = 0;
var G__17671 = 0;
seq__17647_17651 = G__17668;
chunk__17648_17652 = G__17669;
count__17649_17653 = G__17670;
i__17650_17654 = G__17671;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17676_17680 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17677_17681 = null;var count__17678_17682 = 0;var i__17679_17683 = 0;while(true){
if((i__17679_17683 < count__17678_17682))
{var node_17684 = cljs.core._nth.call(null,chunk__17677_17681,i__17679_17683);goog.dom.classes.remove(node_17684,class$);
{
var G__17685 = seq__17676_17680;
var G__17686 = chunk__17677_17681;
var G__17687 = count__17678_17682;
var G__17688 = (i__17679_17683 + 1);
seq__17676_17680 = G__17685;
chunk__17677_17681 = G__17686;
count__17678_17682 = G__17687;
i__17679_17683 = G__17688;
continue;
}
} else
{var temp__4092__auto___17689 = cljs.core.seq.call(null,seq__17676_17680);if(temp__4092__auto___17689)
{var seq__17676_17690__$1 = temp__4092__auto___17689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17676_17690__$1))
{var c__4191__auto___17691 = cljs.core.chunk_first.call(null,seq__17676_17690__$1);{
var G__17692 = cljs.core.chunk_rest.call(null,seq__17676_17690__$1);
var G__17693 = c__4191__auto___17691;
var G__17694 = cljs.core.count.call(null,c__4191__auto___17691);
var G__17695 = 0;
seq__17676_17680 = G__17692;
chunk__17677_17681 = G__17693;
count__17678_17682 = G__17694;
i__17679_17683 = G__17695;
continue;
}
} else
{var node_17696 = cljs.core.first.call(null,seq__17676_17690__$1);goog.dom.classes.remove(node_17696,class$);
{
var G__17697 = cljs.core.next.call(null,seq__17676_17690__$1);
var G__17698 = null;
var G__17699 = 0;
var G__17700 = 0;
seq__17676_17680 = G__17697;
chunk__17677_17681 = G__17698;
count__17678_17682 = G__17699;
i__17679_17683 = G__17700;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17705_17709 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17706_17710 = null;var count__17707_17711 = 0;var i__17708_17712 = 0;while(true){
if((i__17708_17712 < count__17707_17711))
{var node_17713 = cljs.core._nth.call(null,chunk__17706_17710,i__17708_17712);goog.dom.classes.toggle(node_17713,class$);
{
var G__17714 = seq__17705_17709;
var G__17715 = chunk__17706_17710;
var G__17716 = count__17707_17711;
var G__17717 = (i__17708_17712 + 1);
seq__17705_17709 = G__17714;
chunk__17706_17710 = G__17715;
count__17707_17711 = G__17716;
i__17708_17712 = G__17717;
continue;
}
} else
{var temp__4092__auto___17718 = cljs.core.seq.call(null,seq__17705_17709);if(temp__4092__auto___17718)
{var seq__17705_17719__$1 = temp__4092__auto___17718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17705_17719__$1))
{var c__4191__auto___17720 = cljs.core.chunk_first.call(null,seq__17705_17719__$1);{
var G__17721 = cljs.core.chunk_rest.call(null,seq__17705_17719__$1);
var G__17722 = c__4191__auto___17720;
var G__17723 = cljs.core.count.call(null,c__4191__auto___17720);
var G__17724 = 0;
seq__17705_17709 = G__17721;
chunk__17706_17710 = G__17722;
count__17707_17711 = G__17723;
i__17708_17712 = G__17724;
continue;
}
} else
{var node_17725 = cljs.core.first.call(null,seq__17705_17719__$1);goog.dom.classes.toggle(node_17725,class$);
{
var G__17726 = cljs.core.next.call(null,seq__17705_17719__$1);
var G__17727 = null;
var G__17728 = 0;
var G__17729 = 0;
seq__17705_17709 = G__17726;
chunk__17706_17710 = G__17727;
count__17707_17711 = G__17728;
i__17708_17712 = G__17729;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17738__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17734_17739 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17735_17740 = null;var count__17736_17741 = 0;var i__17737_17742 = 0;while(true){
if((i__17737_17742 < count__17736_17741))
{var node_17743 = cljs.core._nth.call(null,chunk__17735_17740,i__17737_17742);goog.dom.classes.set(node_17743,classes_17738__$1);
{
var G__17744 = seq__17734_17739;
var G__17745 = chunk__17735_17740;
var G__17746 = count__17736_17741;
var G__17747 = (i__17737_17742 + 1);
seq__17734_17739 = G__17744;
chunk__17735_17740 = G__17745;
count__17736_17741 = G__17746;
i__17737_17742 = G__17747;
continue;
}
} else
{var temp__4092__auto___17748 = cljs.core.seq.call(null,seq__17734_17739);if(temp__4092__auto___17748)
{var seq__17734_17749__$1 = temp__4092__auto___17748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17734_17749__$1))
{var c__4191__auto___17750 = cljs.core.chunk_first.call(null,seq__17734_17749__$1);{
var G__17751 = cljs.core.chunk_rest.call(null,seq__17734_17749__$1);
var G__17752 = c__4191__auto___17750;
var G__17753 = cljs.core.count.call(null,c__4191__auto___17750);
var G__17754 = 0;
seq__17734_17739 = G__17751;
chunk__17735_17740 = G__17752;
count__17736_17741 = G__17753;
i__17737_17742 = G__17754;
continue;
}
} else
{var node_17755 = cljs.core.first.call(null,seq__17734_17749__$1);goog.dom.classes.set(node_17755,classes_17738__$1);
{
var G__17756 = cljs.core.next.call(null,seq__17734_17749__$1);
var G__17757 = null;
var G__17758 = 0;
var G__17759 = 0;
seq__17734_17739 = G__17756;
chunk__17735_17740 = G__17757;
count__17736_17741 = G__17758;
i__17737_17742 = G__17759;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17764_17768 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17765_17769 = null;var count__17766_17770 = 0;var i__17767_17771 = 0;while(true){
if((i__17767_17771 < count__17766_17770))
{var node_17772 = cljs.core._nth.call(null,chunk__17765_17769,i__17767_17771);goog.dom.setTextContent(node_17772,value);
{
var G__17773 = seq__17764_17768;
var G__17774 = chunk__17765_17769;
var G__17775 = count__17766_17770;
var G__17776 = (i__17767_17771 + 1);
seq__17764_17768 = G__17773;
chunk__17765_17769 = G__17774;
count__17766_17770 = G__17775;
i__17767_17771 = G__17776;
continue;
}
} else
{var temp__4092__auto___17777 = cljs.core.seq.call(null,seq__17764_17768);if(temp__4092__auto___17777)
{var seq__17764_17778__$1 = temp__4092__auto___17777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17764_17778__$1))
{var c__4191__auto___17779 = cljs.core.chunk_first.call(null,seq__17764_17778__$1);{
var G__17780 = cljs.core.chunk_rest.call(null,seq__17764_17778__$1);
var G__17781 = c__4191__auto___17779;
var G__17782 = cljs.core.count.call(null,c__4191__auto___17779);
var G__17783 = 0;
seq__17764_17768 = G__17780;
chunk__17765_17769 = G__17781;
count__17766_17770 = G__17782;
i__17767_17771 = G__17783;
continue;
}
} else
{var node_17784 = cljs.core.first.call(null,seq__17764_17778__$1);goog.dom.setTextContent(node_17784,value);
{
var G__17785 = cljs.core.next.call(null,seq__17764_17778__$1);
var G__17786 = null;
var G__17787 = 0;
var G__17788 = 0;
seq__17764_17768 = G__17785;
chunk__17765_17769 = G__17786;
count__17766_17770 = G__17787;
i__17767_17771 = G__17788;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17793_17797 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17794_17798 = null;var count__17795_17799 = 0;var i__17796_17800 = 0;while(true){
if((i__17796_17800 < count__17795_17799))
{var node_17801 = cljs.core._nth.call(null,chunk__17794_17798,i__17796_17800);goog.dom.forms.setValue(node_17801,value);
{
var G__17802 = seq__17793_17797;
var G__17803 = chunk__17794_17798;
var G__17804 = count__17795_17799;
var G__17805 = (i__17796_17800 + 1);
seq__17793_17797 = G__17802;
chunk__17794_17798 = G__17803;
count__17795_17799 = G__17804;
i__17796_17800 = G__17805;
continue;
}
} else
{var temp__4092__auto___17806 = cljs.core.seq.call(null,seq__17793_17797);if(temp__4092__auto___17806)
{var seq__17793_17807__$1 = temp__4092__auto___17806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17793_17807__$1))
{var c__4191__auto___17808 = cljs.core.chunk_first.call(null,seq__17793_17807__$1);{
var G__17809 = cljs.core.chunk_rest.call(null,seq__17793_17807__$1);
var G__17810 = c__4191__auto___17808;
var G__17811 = cljs.core.count.call(null,c__4191__auto___17808);
var G__17812 = 0;
seq__17793_17797 = G__17809;
chunk__17794_17798 = G__17810;
count__17795_17799 = G__17811;
i__17796_17800 = G__17812;
continue;
}
} else
{var node_17813 = cljs.core.first.call(null,seq__17793_17807__$1);goog.dom.forms.setValue(node_17813,value);
{
var G__17814 = cljs.core.next.call(null,seq__17793_17807__$1);
var G__17815 = null;
var G__17816 = 0;
var G__17817 = 0;
seq__17793_17797 = G__17814;
chunk__17794_17798 = G__17815;
count__17795_17799 = G__17816;
i__17796_17800 = G__17817;
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
{var value_17828 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17824_17829 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17825_17830 = null;var count__17826_17831 = 0;var i__17827_17832 = 0;while(true){
if((i__17827_17832 < count__17826_17831))
{var node_17833 = cljs.core._nth.call(null,chunk__17825_17830,i__17827_17832);node_17833.innerHTML = value_17828;
{
var G__17834 = seq__17824_17829;
var G__17835 = chunk__17825_17830;
var G__17836 = count__17826_17831;
var G__17837 = (i__17827_17832 + 1);
seq__17824_17829 = G__17834;
chunk__17825_17830 = G__17835;
count__17826_17831 = G__17836;
i__17827_17832 = G__17837;
continue;
}
} else
{var temp__4092__auto___17838 = cljs.core.seq.call(null,seq__17824_17829);if(temp__4092__auto___17838)
{var seq__17824_17839__$1 = temp__4092__auto___17838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17824_17839__$1))
{var c__4191__auto___17840 = cljs.core.chunk_first.call(null,seq__17824_17839__$1);{
var G__17841 = cljs.core.chunk_rest.call(null,seq__17824_17839__$1);
var G__17842 = c__4191__auto___17840;
var G__17843 = cljs.core.count.call(null,c__4191__auto___17840);
var G__17844 = 0;
seq__17824_17829 = G__17841;
chunk__17825_17830 = G__17842;
count__17826_17831 = G__17843;
i__17827_17832 = G__17844;
continue;
}
} else
{var node_17845 = cljs.core.first.call(null,seq__17824_17839__$1);node_17845.innerHTML = value_17828;
{
var G__17846 = cljs.core.next.call(null,seq__17824_17839__$1);
var G__17847 = null;
var G__17848 = 0;
var G__17849 = 0;
seq__17824_17829 = G__17846;
chunk__17825_17830 = G__17847;
count__17826_17831 = G__17848;
i__17827_17832 = G__17849;
continue;
}
}
} else
{}
}
break;
}
}catch (e17823){if((e17823 instanceof Error))
{var e_17850 = e17823;domina.replace_children_BANG_.call(null,content,value_17828);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17823;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17857_17861 = cljs.core.seq.call(null,children);var chunk__17858_17862 = null;var count__17859_17863 = 0;var i__17860_17864 = 0;while(true){
if((i__17860_17864 < count__17859_17863))
{var child_17865 = cljs.core._nth.call(null,chunk__17858_17862,i__17860_17864);frag.appendChild(child_17865);
{
var G__17866 = seq__17857_17861;
var G__17867 = chunk__17858_17862;
var G__17868 = count__17859_17863;
var G__17869 = (i__17860_17864 + 1);
seq__17857_17861 = G__17866;
chunk__17858_17862 = G__17867;
count__17859_17863 = G__17868;
i__17860_17864 = G__17869;
continue;
}
} else
{var temp__4092__auto___17870 = cljs.core.seq.call(null,seq__17857_17861);if(temp__4092__auto___17870)
{var seq__17857_17871__$1 = temp__4092__auto___17870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17857_17871__$1))
{var c__4191__auto___17872 = cljs.core.chunk_first.call(null,seq__17857_17871__$1);{
var G__17873 = cljs.core.chunk_rest.call(null,seq__17857_17871__$1);
var G__17874 = c__4191__auto___17872;
var G__17875 = cljs.core.count.call(null,c__4191__auto___17872);
var G__17876 = 0;
seq__17857_17861 = G__17873;
chunk__17858_17862 = G__17874;
count__17859_17863 = G__17875;
i__17860_17864 = G__17876;
continue;
}
} else
{var child_17877 = cljs.core.first.call(null,seq__17857_17871__$1);frag.appendChild(child_17877);
{
var G__17878 = cljs.core.next.call(null,seq__17857_17871__$1);
var G__17879 = null;
var G__17880 = 0;
var G__17881 = 0;
seq__17857_17861 = G__17878;
chunk__17858_17862 = G__17879;
count__17859_17863 = G__17880;
i__17860_17864 = G__17881;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17851_SHARP_,p2__17852_SHARP_){return f.call(null,p1__17851_SHARP_,p2__17852_SHARP_);
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
{if((function (){var G__17883 = list_thing;if(G__17883)
{var bit__4093__auto__ = (G__17883.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__17883.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17883.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17883);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17883);
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
{if((function (){var G__17884 = content;if(G__17884)
{var bit__4093__auto__ = (G__17884.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__17884.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17884.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17884);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17884);
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
{if((function (){var G__17885 = content;if(G__17885)
{var bit__4093__auto__ = (G__17885.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__17885.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17885.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17885);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17885);
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