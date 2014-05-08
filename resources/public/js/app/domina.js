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
var opt_wrapper_10582 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_10583 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_10584 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_10583,table_section_wrapper_10583,opt_wrapper_10582,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_10584,table_section_wrapper_10583,cell_wrapper_10584,opt_wrapper_10582,table_section_wrapper_10583,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_10583]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3431__auto__ = div.firstChild;if(cljs.core.truth_(and__3431__auto__))
{return div.firstChild.childNodes;
} else
{return and__3431__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__10589 = cljs.core.seq.call(null,tbody);var chunk__10590 = null;var count__10591 = 0;var i__10592 = 0;while(true){
if((i__10592 < count__10591))
{var child = cljs.core._nth.call(null,chunk__10590,i__10592);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10593 = seq__10589;
var G__10594 = chunk__10590;
var G__10595 = count__10591;
var G__10596 = (i__10592 + 1);
seq__10589 = G__10593;
chunk__10590 = G__10594;
count__10591 = G__10595;
i__10592 = G__10596;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10589);if(temp__4092__auto__)
{var seq__10589__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10589__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__10589__$1);{
var G__10597 = cljs.core.chunk_rest.call(null,seq__10589__$1);
var G__10598 = c__4191__auto__;
var G__10599 = cljs.core.count.call(null,c__4191__auto__);
var G__10600 = 0;
seq__10589 = G__10597;
chunk__10590 = G__10598;
count__10591 = G__10599;
i__10592 = G__10600;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__10589__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10601 = cljs.core.next.call(null,seq__10589__$1);
var G__10602 = null;
var G__10603 = 0;
var G__10604 = 0;
seq__10589 = G__10601;
chunk__10590 = G__10602;
count__10591 = G__10603;
i__10592 = G__10604;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__10606 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__10606,0,null);var start_wrap = cljs.core.nth.call(null,vec__10606,1,null);var end_wrap = cljs.core.nth.call(null,vec__10606,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__10607 = wrapper.lastChild;
var G__10608 = (level - 1);
wrapper = G__10607;
level = G__10608;
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
domina.DomContent = (function (){var obj10610 = {};return obj10610;
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
log_debug.cljs$lang$applyTo = (function (arglist__10611){
var mesg = cljs.core.seq(arglist__10611);
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
log.cljs$lang$applyTo = (function (arglist__10612){
var mesg = cljs.core.seq(arglist__10612);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__10613){
var contents = cljs.core.seq(arglist__10613);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__10614_SHARP_){return p1__10614_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__10615_SHARP_,p2__10616_SHARP_){return goog.dom.insertChildAt(p1__10615_SHARP_,p2__10616_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__10618_SHARP_,p2__10617_SHARP_){return goog.dom.insertSiblingBefore(p2__10617_SHARP_,p1__10618_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__10620_SHARP_,p2__10619_SHARP_){return goog.dom.insertSiblingAfter(p2__10619_SHARP_,p1__10620_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__10622_SHARP_,p2__10621_SHARP_){return goog.dom.replaceNode(p2__10621_SHARP_,p1__10622_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__10627_10631 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10628_10632 = null;var count__10629_10633 = 0;var i__10630_10634 = 0;while(true){
if((i__10630_10634 < count__10629_10633))
{var n_10635 = cljs.core._nth.call(null,chunk__10628_10632,i__10630_10634);goog.style.setStyle(n_10635,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10636 = seq__10627_10631;
var G__10637 = chunk__10628_10632;
var G__10638 = count__10629_10633;
var G__10639 = (i__10630_10634 + 1);
seq__10627_10631 = G__10636;
chunk__10628_10632 = G__10637;
count__10629_10633 = G__10638;
i__10630_10634 = G__10639;
continue;
}
} else
{var temp__4092__auto___10640 = cljs.core.seq.call(null,seq__10627_10631);if(temp__4092__auto___10640)
{var seq__10627_10641__$1 = temp__4092__auto___10640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10627_10641__$1))
{var c__4191__auto___10642 = cljs.core.chunk_first.call(null,seq__10627_10641__$1);{
var G__10643 = cljs.core.chunk_rest.call(null,seq__10627_10641__$1);
var G__10644 = c__4191__auto___10642;
var G__10645 = cljs.core.count.call(null,c__4191__auto___10642);
var G__10646 = 0;
seq__10627_10631 = G__10643;
chunk__10628_10632 = G__10644;
count__10629_10633 = G__10645;
i__10630_10634 = G__10646;
continue;
}
} else
{var n_10647 = cljs.core.first.call(null,seq__10627_10641__$1);goog.style.setStyle(n_10647,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10648 = cljs.core.next.call(null,seq__10627_10641__$1);
var G__10649 = null;
var G__10650 = 0;
var G__10651 = 0;
seq__10627_10631 = G__10648;
chunk__10628_10632 = G__10649;
count__10629_10633 = G__10650;
i__10630_10634 = G__10651;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10652){
var content = cljs.core.first(arglist__10652);
arglist__10652 = cljs.core.next(arglist__10652);
var name = cljs.core.first(arglist__10652);
var value = cljs.core.rest(arglist__10652);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__10657_10661 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10658_10662 = null;var count__10659_10663 = 0;var i__10660_10664 = 0;while(true){
if((i__10660_10664 < count__10659_10663))
{var n_10665 = cljs.core._nth.call(null,chunk__10658_10662,i__10660_10664);n_10665.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10666 = seq__10657_10661;
var G__10667 = chunk__10658_10662;
var G__10668 = count__10659_10663;
var G__10669 = (i__10660_10664 + 1);
seq__10657_10661 = G__10666;
chunk__10658_10662 = G__10667;
count__10659_10663 = G__10668;
i__10660_10664 = G__10669;
continue;
}
} else
{var temp__4092__auto___10670 = cljs.core.seq.call(null,seq__10657_10661);if(temp__4092__auto___10670)
{var seq__10657_10671__$1 = temp__4092__auto___10670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10657_10671__$1))
{var c__4191__auto___10672 = cljs.core.chunk_first.call(null,seq__10657_10671__$1);{
var G__10673 = cljs.core.chunk_rest.call(null,seq__10657_10671__$1);
var G__10674 = c__4191__auto___10672;
var G__10675 = cljs.core.count.call(null,c__4191__auto___10672);
var G__10676 = 0;
seq__10657_10661 = G__10673;
chunk__10658_10662 = G__10674;
count__10659_10663 = G__10675;
i__10660_10664 = G__10676;
continue;
}
} else
{var n_10677 = cljs.core.first.call(null,seq__10657_10671__$1);n_10677.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10678 = cljs.core.next.call(null,seq__10657_10671__$1);
var G__10679 = null;
var G__10680 = 0;
var G__10681 = 0;
seq__10657_10661 = G__10678;
chunk__10658_10662 = G__10679;
count__10659_10663 = G__10680;
i__10660_10664 = G__10681;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10682){
var content = cljs.core.first(arglist__10682);
arglist__10682 = cljs.core.next(arglist__10682);
var name = cljs.core.first(arglist__10682);
var value = cljs.core.rest(arglist__10682);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__10687_10691 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10688_10692 = null;var count__10689_10693 = 0;var i__10690_10694 = 0;while(true){
if((i__10690_10694 < count__10689_10693))
{var n_10695 = cljs.core._nth.call(null,chunk__10688_10692,i__10690_10694);n_10695.removeAttribute(cljs.core.name.call(null,name));
{
var G__10696 = seq__10687_10691;
var G__10697 = chunk__10688_10692;
var G__10698 = count__10689_10693;
var G__10699 = (i__10690_10694 + 1);
seq__10687_10691 = G__10696;
chunk__10688_10692 = G__10697;
count__10689_10693 = G__10698;
i__10690_10694 = G__10699;
continue;
}
} else
{var temp__4092__auto___10700 = cljs.core.seq.call(null,seq__10687_10691);if(temp__4092__auto___10700)
{var seq__10687_10701__$1 = temp__4092__auto___10700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10687_10701__$1))
{var c__4191__auto___10702 = cljs.core.chunk_first.call(null,seq__10687_10701__$1);{
var G__10703 = cljs.core.chunk_rest.call(null,seq__10687_10701__$1);
var G__10704 = c__4191__auto___10702;
var G__10705 = cljs.core.count.call(null,c__4191__auto___10702);
var G__10706 = 0;
seq__10687_10691 = G__10703;
chunk__10688_10692 = G__10704;
count__10689_10693 = G__10705;
i__10690_10694 = G__10706;
continue;
}
} else
{var n_10707 = cljs.core.first.call(null,seq__10687_10701__$1);n_10707.removeAttribute(cljs.core.name.call(null,name));
{
var G__10708 = cljs.core.next.call(null,seq__10687_10701__$1);
var G__10709 = null;
var G__10710 = 0;
var G__10711 = 0;
seq__10687_10691 = G__10708;
chunk__10688_10692 = G__10709;
count__10689_10693 = G__10710;
i__10690_10694 = G__10711;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__10713 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__10713,0,null);var v = cljs.core.nth.call(null,vec__10713,1,null);if(cljs.core.truth_((function (){var and__3431__auto__ = k;if(cljs.core.truth_(and__3431__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__10714_SHARP_){var attr = attrs__$1.item(p1__10714_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__10721_10727 = cljs.core.seq.call(null,styles);var chunk__10722_10728 = null;var count__10723_10729 = 0;var i__10724_10730 = 0;while(true){
if((i__10724_10730 < count__10723_10729))
{var vec__10725_10731 = cljs.core._nth.call(null,chunk__10722_10728,i__10724_10730);var name_10732 = cljs.core.nth.call(null,vec__10725_10731,0,null);var value_10733 = cljs.core.nth.call(null,vec__10725_10731,1,null);domina.set_style_BANG_.call(null,content,name_10732,value_10733);
{
var G__10734 = seq__10721_10727;
var G__10735 = chunk__10722_10728;
var G__10736 = count__10723_10729;
var G__10737 = (i__10724_10730 + 1);
seq__10721_10727 = G__10734;
chunk__10722_10728 = G__10735;
count__10723_10729 = G__10736;
i__10724_10730 = G__10737;
continue;
}
} else
{var temp__4092__auto___10738 = cljs.core.seq.call(null,seq__10721_10727);if(temp__4092__auto___10738)
{var seq__10721_10739__$1 = temp__4092__auto___10738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10721_10739__$1))
{var c__4191__auto___10740 = cljs.core.chunk_first.call(null,seq__10721_10739__$1);{
var G__10741 = cljs.core.chunk_rest.call(null,seq__10721_10739__$1);
var G__10742 = c__4191__auto___10740;
var G__10743 = cljs.core.count.call(null,c__4191__auto___10740);
var G__10744 = 0;
seq__10721_10727 = G__10741;
chunk__10722_10728 = G__10742;
count__10723_10729 = G__10743;
i__10724_10730 = G__10744;
continue;
}
} else
{var vec__10726_10745 = cljs.core.first.call(null,seq__10721_10739__$1);var name_10746 = cljs.core.nth.call(null,vec__10726_10745,0,null);var value_10747 = cljs.core.nth.call(null,vec__10726_10745,1,null);domina.set_style_BANG_.call(null,content,name_10746,value_10747);
{
var G__10748 = cljs.core.next.call(null,seq__10721_10739__$1);
var G__10749 = null;
var G__10750 = 0;
var G__10751 = 0;
seq__10721_10727 = G__10748;
chunk__10722_10728 = G__10749;
count__10723_10729 = G__10750;
i__10724_10730 = G__10751;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__10758_10764 = cljs.core.seq.call(null,attrs);var chunk__10759_10765 = null;var count__10760_10766 = 0;var i__10761_10767 = 0;while(true){
if((i__10761_10767 < count__10760_10766))
{var vec__10762_10768 = cljs.core._nth.call(null,chunk__10759_10765,i__10761_10767);var name_10769 = cljs.core.nth.call(null,vec__10762_10768,0,null);var value_10770 = cljs.core.nth.call(null,vec__10762_10768,1,null);domina.set_attr_BANG_.call(null,content,name_10769,value_10770);
{
var G__10771 = seq__10758_10764;
var G__10772 = chunk__10759_10765;
var G__10773 = count__10760_10766;
var G__10774 = (i__10761_10767 + 1);
seq__10758_10764 = G__10771;
chunk__10759_10765 = G__10772;
count__10760_10766 = G__10773;
i__10761_10767 = G__10774;
continue;
}
} else
{var temp__4092__auto___10775 = cljs.core.seq.call(null,seq__10758_10764);if(temp__4092__auto___10775)
{var seq__10758_10776__$1 = temp__4092__auto___10775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10758_10776__$1))
{var c__4191__auto___10777 = cljs.core.chunk_first.call(null,seq__10758_10776__$1);{
var G__10778 = cljs.core.chunk_rest.call(null,seq__10758_10776__$1);
var G__10779 = c__4191__auto___10777;
var G__10780 = cljs.core.count.call(null,c__4191__auto___10777);
var G__10781 = 0;
seq__10758_10764 = G__10778;
chunk__10759_10765 = G__10779;
count__10760_10766 = G__10780;
i__10761_10767 = G__10781;
continue;
}
} else
{var vec__10763_10782 = cljs.core.first.call(null,seq__10758_10776__$1);var name_10783 = cljs.core.nth.call(null,vec__10763_10782,0,null);var value_10784 = cljs.core.nth.call(null,vec__10763_10782,1,null);domina.set_attr_BANG_.call(null,content,name_10783,value_10784);
{
var G__10785 = cljs.core.next.call(null,seq__10758_10776__$1);
var G__10786 = null;
var G__10787 = 0;
var G__10788 = 0;
seq__10758_10764 = G__10785;
chunk__10759_10765 = G__10786;
count__10760_10766 = G__10787;
i__10761_10767 = G__10788;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__10793_10797 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10794_10798 = null;var count__10795_10799 = 0;var i__10796_10800 = 0;while(true){
if((i__10796_10800 < count__10795_10799))
{var node_10801 = cljs.core._nth.call(null,chunk__10794_10798,i__10796_10800);goog.dom.classes.add(node_10801,class$);
{
var G__10802 = seq__10793_10797;
var G__10803 = chunk__10794_10798;
var G__10804 = count__10795_10799;
var G__10805 = (i__10796_10800 + 1);
seq__10793_10797 = G__10802;
chunk__10794_10798 = G__10803;
count__10795_10799 = G__10804;
i__10796_10800 = G__10805;
continue;
}
} else
{var temp__4092__auto___10806 = cljs.core.seq.call(null,seq__10793_10797);if(temp__4092__auto___10806)
{var seq__10793_10807__$1 = temp__4092__auto___10806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10793_10807__$1))
{var c__4191__auto___10808 = cljs.core.chunk_first.call(null,seq__10793_10807__$1);{
var G__10809 = cljs.core.chunk_rest.call(null,seq__10793_10807__$1);
var G__10810 = c__4191__auto___10808;
var G__10811 = cljs.core.count.call(null,c__4191__auto___10808);
var G__10812 = 0;
seq__10793_10797 = G__10809;
chunk__10794_10798 = G__10810;
count__10795_10799 = G__10811;
i__10796_10800 = G__10812;
continue;
}
} else
{var node_10813 = cljs.core.first.call(null,seq__10793_10807__$1);goog.dom.classes.add(node_10813,class$);
{
var G__10814 = cljs.core.next.call(null,seq__10793_10807__$1);
var G__10815 = null;
var G__10816 = 0;
var G__10817 = 0;
seq__10793_10797 = G__10814;
chunk__10794_10798 = G__10815;
count__10795_10799 = G__10816;
i__10796_10800 = G__10817;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__10822_10826 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10823_10827 = null;var count__10824_10828 = 0;var i__10825_10829 = 0;while(true){
if((i__10825_10829 < count__10824_10828))
{var node_10830 = cljs.core._nth.call(null,chunk__10823_10827,i__10825_10829);goog.dom.classes.remove(node_10830,class$);
{
var G__10831 = seq__10822_10826;
var G__10832 = chunk__10823_10827;
var G__10833 = count__10824_10828;
var G__10834 = (i__10825_10829 + 1);
seq__10822_10826 = G__10831;
chunk__10823_10827 = G__10832;
count__10824_10828 = G__10833;
i__10825_10829 = G__10834;
continue;
}
} else
{var temp__4092__auto___10835 = cljs.core.seq.call(null,seq__10822_10826);if(temp__4092__auto___10835)
{var seq__10822_10836__$1 = temp__4092__auto___10835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10822_10836__$1))
{var c__4191__auto___10837 = cljs.core.chunk_first.call(null,seq__10822_10836__$1);{
var G__10838 = cljs.core.chunk_rest.call(null,seq__10822_10836__$1);
var G__10839 = c__4191__auto___10837;
var G__10840 = cljs.core.count.call(null,c__4191__auto___10837);
var G__10841 = 0;
seq__10822_10826 = G__10838;
chunk__10823_10827 = G__10839;
count__10824_10828 = G__10840;
i__10825_10829 = G__10841;
continue;
}
} else
{var node_10842 = cljs.core.first.call(null,seq__10822_10836__$1);goog.dom.classes.remove(node_10842,class$);
{
var G__10843 = cljs.core.next.call(null,seq__10822_10836__$1);
var G__10844 = null;
var G__10845 = 0;
var G__10846 = 0;
seq__10822_10826 = G__10843;
chunk__10823_10827 = G__10844;
count__10824_10828 = G__10845;
i__10825_10829 = G__10846;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__10851_10855 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10852_10856 = null;var count__10853_10857 = 0;var i__10854_10858 = 0;while(true){
if((i__10854_10858 < count__10853_10857))
{var node_10859 = cljs.core._nth.call(null,chunk__10852_10856,i__10854_10858);goog.dom.classes.toggle(node_10859,class$);
{
var G__10860 = seq__10851_10855;
var G__10861 = chunk__10852_10856;
var G__10862 = count__10853_10857;
var G__10863 = (i__10854_10858 + 1);
seq__10851_10855 = G__10860;
chunk__10852_10856 = G__10861;
count__10853_10857 = G__10862;
i__10854_10858 = G__10863;
continue;
}
} else
{var temp__4092__auto___10864 = cljs.core.seq.call(null,seq__10851_10855);if(temp__4092__auto___10864)
{var seq__10851_10865__$1 = temp__4092__auto___10864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10851_10865__$1))
{var c__4191__auto___10866 = cljs.core.chunk_first.call(null,seq__10851_10865__$1);{
var G__10867 = cljs.core.chunk_rest.call(null,seq__10851_10865__$1);
var G__10868 = c__4191__auto___10866;
var G__10869 = cljs.core.count.call(null,c__4191__auto___10866);
var G__10870 = 0;
seq__10851_10855 = G__10867;
chunk__10852_10856 = G__10868;
count__10853_10857 = G__10869;
i__10854_10858 = G__10870;
continue;
}
} else
{var node_10871 = cljs.core.first.call(null,seq__10851_10865__$1);goog.dom.classes.toggle(node_10871,class$);
{
var G__10872 = cljs.core.next.call(null,seq__10851_10865__$1);
var G__10873 = null;
var G__10874 = 0;
var G__10875 = 0;
seq__10851_10855 = G__10872;
chunk__10852_10856 = G__10873;
count__10853_10857 = G__10874;
i__10854_10858 = G__10875;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_10884__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__10880_10885 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10881_10886 = null;var count__10882_10887 = 0;var i__10883_10888 = 0;while(true){
if((i__10883_10888 < count__10882_10887))
{var node_10889 = cljs.core._nth.call(null,chunk__10881_10886,i__10883_10888);goog.dom.classes.set(node_10889,classes_10884__$1);
{
var G__10890 = seq__10880_10885;
var G__10891 = chunk__10881_10886;
var G__10892 = count__10882_10887;
var G__10893 = (i__10883_10888 + 1);
seq__10880_10885 = G__10890;
chunk__10881_10886 = G__10891;
count__10882_10887 = G__10892;
i__10883_10888 = G__10893;
continue;
}
} else
{var temp__4092__auto___10894 = cljs.core.seq.call(null,seq__10880_10885);if(temp__4092__auto___10894)
{var seq__10880_10895__$1 = temp__4092__auto___10894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10880_10895__$1))
{var c__4191__auto___10896 = cljs.core.chunk_first.call(null,seq__10880_10895__$1);{
var G__10897 = cljs.core.chunk_rest.call(null,seq__10880_10895__$1);
var G__10898 = c__4191__auto___10896;
var G__10899 = cljs.core.count.call(null,c__4191__auto___10896);
var G__10900 = 0;
seq__10880_10885 = G__10897;
chunk__10881_10886 = G__10898;
count__10882_10887 = G__10899;
i__10883_10888 = G__10900;
continue;
}
} else
{var node_10901 = cljs.core.first.call(null,seq__10880_10895__$1);goog.dom.classes.set(node_10901,classes_10884__$1);
{
var G__10902 = cljs.core.next.call(null,seq__10880_10895__$1);
var G__10903 = null;
var G__10904 = 0;
var G__10905 = 0;
seq__10880_10885 = G__10902;
chunk__10881_10886 = G__10903;
count__10882_10887 = G__10904;
i__10883_10888 = G__10905;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__10910_10914 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10911_10915 = null;var count__10912_10916 = 0;var i__10913_10917 = 0;while(true){
if((i__10913_10917 < count__10912_10916))
{var node_10918 = cljs.core._nth.call(null,chunk__10911_10915,i__10913_10917);goog.dom.setTextContent(node_10918,value);
{
var G__10919 = seq__10910_10914;
var G__10920 = chunk__10911_10915;
var G__10921 = count__10912_10916;
var G__10922 = (i__10913_10917 + 1);
seq__10910_10914 = G__10919;
chunk__10911_10915 = G__10920;
count__10912_10916 = G__10921;
i__10913_10917 = G__10922;
continue;
}
} else
{var temp__4092__auto___10923 = cljs.core.seq.call(null,seq__10910_10914);if(temp__4092__auto___10923)
{var seq__10910_10924__$1 = temp__4092__auto___10923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10910_10924__$1))
{var c__4191__auto___10925 = cljs.core.chunk_first.call(null,seq__10910_10924__$1);{
var G__10926 = cljs.core.chunk_rest.call(null,seq__10910_10924__$1);
var G__10927 = c__4191__auto___10925;
var G__10928 = cljs.core.count.call(null,c__4191__auto___10925);
var G__10929 = 0;
seq__10910_10914 = G__10926;
chunk__10911_10915 = G__10927;
count__10912_10916 = G__10928;
i__10913_10917 = G__10929;
continue;
}
} else
{var node_10930 = cljs.core.first.call(null,seq__10910_10924__$1);goog.dom.setTextContent(node_10930,value);
{
var G__10931 = cljs.core.next.call(null,seq__10910_10924__$1);
var G__10932 = null;
var G__10933 = 0;
var G__10934 = 0;
seq__10910_10914 = G__10931;
chunk__10911_10915 = G__10932;
count__10912_10916 = G__10933;
i__10913_10917 = G__10934;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__10939_10943 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10940_10944 = null;var count__10941_10945 = 0;var i__10942_10946 = 0;while(true){
if((i__10942_10946 < count__10941_10945))
{var node_10947 = cljs.core._nth.call(null,chunk__10940_10944,i__10942_10946);goog.dom.forms.setValue(node_10947,value);
{
var G__10948 = seq__10939_10943;
var G__10949 = chunk__10940_10944;
var G__10950 = count__10941_10945;
var G__10951 = (i__10942_10946 + 1);
seq__10939_10943 = G__10948;
chunk__10940_10944 = G__10949;
count__10941_10945 = G__10950;
i__10942_10946 = G__10951;
continue;
}
} else
{var temp__4092__auto___10952 = cljs.core.seq.call(null,seq__10939_10943);if(temp__4092__auto___10952)
{var seq__10939_10953__$1 = temp__4092__auto___10952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10939_10953__$1))
{var c__4191__auto___10954 = cljs.core.chunk_first.call(null,seq__10939_10953__$1);{
var G__10955 = cljs.core.chunk_rest.call(null,seq__10939_10953__$1);
var G__10956 = c__4191__auto___10954;
var G__10957 = cljs.core.count.call(null,c__4191__auto___10954);
var G__10958 = 0;
seq__10939_10943 = G__10955;
chunk__10940_10944 = G__10956;
count__10941_10945 = G__10957;
i__10942_10946 = G__10958;
continue;
}
} else
{var node_10959 = cljs.core.first.call(null,seq__10939_10953__$1);goog.dom.forms.setValue(node_10959,value);
{
var G__10960 = cljs.core.next.call(null,seq__10939_10953__$1);
var G__10961 = null;
var G__10962 = 0;
var G__10963 = 0;
seq__10939_10943 = G__10960;
chunk__10940_10944 = G__10961;
count__10941_10945 = G__10962;
i__10942_10946 = G__10963;
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
{var value_10974 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__10970_10975 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10971_10976 = null;var count__10972_10977 = 0;var i__10973_10978 = 0;while(true){
if((i__10973_10978 < count__10972_10977))
{var node_10979 = cljs.core._nth.call(null,chunk__10971_10976,i__10973_10978);node_10979.innerHTML = value_10974;
{
var G__10980 = seq__10970_10975;
var G__10981 = chunk__10971_10976;
var G__10982 = count__10972_10977;
var G__10983 = (i__10973_10978 + 1);
seq__10970_10975 = G__10980;
chunk__10971_10976 = G__10981;
count__10972_10977 = G__10982;
i__10973_10978 = G__10983;
continue;
}
} else
{var temp__4092__auto___10984 = cljs.core.seq.call(null,seq__10970_10975);if(temp__4092__auto___10984)
{var seq__10970_10985__$1 = temp__4092__auto___10984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10970_10985__$1))
{var c__4191__auto___10986 = cljs.core.chunk_first.call(null,seq__10970_10985__$1);{
var G__10987 = cljs.core.chunk_rest.call(null,seq__10970_10985__$1);
var G__10988 = c__4191__auto___10986;
var G__10989 = cljs.core.count.call(null,c__4191__auto___10986);
var G__10990 = 0;
seq__10970_10975 = G__10987;
chunk__10971_10976 = G__10988;
count__10972_10977 = G__10989;
i__10973_10978 = G__10990;
continue;
}
} else
{var node_10991 = cljs.core.first.call(null,seq__10970_10985__$1);node_10991.innerHTML = value_10974;
{
var G__10992 = cljs.core.next.call(null,seq__10970_10985__$1);
var G__10993 = null;
var G__10994 = 0;
var G__10995 = 0;
seq__10970_10975 = G__10992;
chunk__10971_10976 = G__10993;
count__10972_10977 = G__10994;
i__10973_10978 = G__10995;
continue;
}
}
} else
{}
}
break;
}
}catch (e10969){if((e10969 instanceof Error))
{var e_10996 = e10969;domina.replace_children_BANG_.call(null,content,value_10974);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10969;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__11003_11007 = cljs.core.seq.call(null,children);var chunk__11004_11008 = null;var count__11005_11009 = 0;var i__11006_11010 = 0;while(true){
if((i__11006_11010 < count__11005_11009))
{var child_11011 = cljs.core._nth.call(null,chunk__11004_11008,i__11006_11010);frag.appendChild(child_11011);
{
var G__11012 = seq__11003_11007;
var G__11013 = chunk__11004_11008;
var G__11014 = count__11005_11009;
var G__11015 = (i__11006_11010 + 1);
seq__11003_11007 = G__11012;
chunk__11004_11008 = G__11013;
count__11005_11009 = G__11014;
i__11006_11010 = G__11015;
continue;
}
} else
{var temp__4092__auto___11016 = cljs.core.seq.call(null,seq__11003_11007);if(temp__4092__auto___11016)
{var seq__11003_11017__$1 = temp__4092__auto___11016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11003_11017__$1))
{var c__4191__auto___11018 = cljs.core.chunk_first.call(null,seq__11003_11017__$1);{
var G__11019 = cljs.core.chunk_rest.call(null,seq__11003_11017__$1);
var G__11020 = c__4191__auto___11018;
var G__11021 = cljs.core.count.call(null,c__4191__auto___11018);
var G__11022 = 0;
seq__11003_11007 = G__11019;
chunk__11004_11008 = G__11020;
count__11005_11009 = G__11021;
i__11006_11010 = G__11022;
continue;
}
} else
{var child_11023 = cljs.core.first.call(null,seq__11003_11017__$1);frag.appendChild(child_11023);
{
var G__11024 = cljs.core.next.call(null,seq__11003_11017__$1);
var G__11025 = null;
var G__11026 = 0;
var G__11027 = 0;
seq__11003_11007 = G__11024;
chunk__11004_11008 = G__11025;
count__11005_11009 = G__11026;
i__11006_11010 = G__11027;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10997_SHARP_,p2__10998_SHARP_){return f.call(null,p1__10997_SHARP_,p2__10998_SHARP_);
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
{if((function (){var G__11029 = list_thing;if(G__11029)
{var bit__4093__auto__ = (G__11029.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__11029.cljs$core$ISeqable$))
{return true;
} else
{if((!G__11029.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11029);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11029);
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
{if((function (){var G__11030 = content;if(G__11030)
{var bit__4093__auto__ = (G__11030.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__11030.cljs$core$ISeqable$))
{return true;
} else
{if((!G__11030.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11030);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11030);
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
{if((function (){var G__11031 = content;if(G__11031)
{var bit__4093__auto__ = (G__11031.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__11031.cljs$core$ISeqable$))
{return true;
} else
{if((!G__11031.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11031);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11031);
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