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
var opt_wrapper_7015 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7016 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_7017 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_7016,table_section_wrapper_7016,opt_wrapper_7015,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_7017,table_section_wrapper_7016,cell_wrapper_7017,opt_wrapper_7015,table_section_wrapper_7016,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_7016]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3431__auto__ = div.firstChild;if(cljs.core.truth_(and__3431__auto__))
{return div.firstChild.childNodes;
} else
{return and__3431__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__7022 = cljs.core.seq.call(null,tbody);var chunk__7023 = null;var count__7024 = 0;var i__7025 = 0;while(true){
if((i__7025 < count__7024))
{var child = cljs.core._nth.call(null,chunk__7023,i__7025);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7026 = seq__7022;
var G__7027 = chunk__7023;
var G__7028 = count__7024;
var G__7029 = (i__7025 + 1);
seq__7022 = G__7026;
chunk__7023 = G__7027;
count__7024 = G__7028;
i__7025 = G__7029;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7022);if(temp__4092__auto__)
{var seq__7022__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7022__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__7022__$1);{
var G__7030 = cljs.core.chunk_rest.call(null,seq__7022__$1);
var G__7031 = c__4191__auto__;
var G__7032 = cljs.core.count.call(null,c__4191__auto__);
var G__7033 = 0;
seq__7022 = G__7030;
chunk__7023 = G__7031;
count__7024 = G__7032;
i__7025 = G__7033;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__7022__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7034 = cljs.core.next.call(null,seq__7022__$1);
var G__7035 = null;
var G__7036 = 0;
var G__7037 = 0;
seq__7022 = G__7034;
chunk__7023 = G__7035;
count__7024 = G__7036;
i__7025 = G__7037;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__7039 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__7039,0,null);var start_wrap = cljs.core.nth.call(null,vec__7039,1,null);var end_wrap = cljs.core.nth.call(null,vec__7039,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__7040 = wrapper.lastChild;
var G__7041 = (level - 1);
wrapper = G__7040;
level = G__7041;
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
domina.DomContent = (function (){var obj7043 = {};return obj7043;
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
log_debug.cljs$lang$applyTo = (function (arglist__7044){
var mesg = cljs.core.seq(arglist__7044);
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
log.cljs$lang$applyTo = (function (arglist__7045){
var mesg = cljs.core.seq(arglist__7045);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__7046){
var contents = cljs.core.seq(arglist__7046);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__7047_SHARP_){return p1__7047_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__7048_SHARP_,p2__7049_SHARP_){return goog.dom.insertChildAt(p1__7048_SHARP_,p2__7049_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7051_SHARP_,p2__7050_SHARP_){return goog.dom.insertSiblingBefore(p2__7050_SHARP_,p1__7051_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7053_SHARP_,p2__7052_SHARP_){return goog.dom.insertSiblingAfter(p2__7052_SHARP_,p1__7053_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__7055_SHARP_,p2__7054_SHARP_){return goog.dom.replaceNode(p2__7054_SHARP_,p1__7055_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__7060_7064 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7061_7065 = null;var count__7062_7066 = 0;var i__7063_7067 = 0;while(true){
if((i__7063_7067 < count__7062_7066))
{var n_7068 = cljs.core._nth.call(null,chunk__7061_7065,i__7063_7067);goog.style.setStyle(n_7068,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7069 = seq__7060_7064;
var G__7070 = chunk__7061_7065;
var G__7071 = count__7062_7066;
var G__7072 = (i__7063_7067 + 1);
seq__7060_7064 = G__7069;
chunk__7061_7065 = G__7070;
count__7062_7066 = G__7071;
i__7063_7067 = G__7072;
continue;
}
} else
{var temp__4092__auto___7073 = cljs.core.seq.call(null,seq__7060_7064);if(temp__4092__auto___7073)
{var seq__7060_7074__$1 = temp__4092__auto___7073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7060_7074__$1))
{var c__4191__auto___7075 = cljs.core.chunk_first.call(null,seq__7060_7074__$1);{
var G__7076 = cljs.core.chunk_rest.call(null,seq__7060_7074__$1);
var G__7077 = c__4191__auto___7075;
var G__7078 = cljs.core.count.call(null,c__4191__auto___7075);
var G__7079 = 0;
seq__7060_7064 = G__7076;
chunk__7061_7065 = G__7077;
count__7062_7066 = G__7078;
i__7063_7067 = G__7079;
continue;
}
} else
{var n_7080 = cljs.core.first.call(null,seq__7060_7074__$1);goog.style.setStyle(n_7080,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7081 = cljs.core.next.call(null,seq__7060_7074__$1);
var G__7082 = null;
var G__7083 = 0;
var G__7084 = 0;
seq__7060_7064 = G__7081;
chunk__7061_7065 = G__7082;
count__7062_7066 = G__7083;
i__7063_7067 = G__7084;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7085){
var content = cljs.core.first(arglist__7085);
arglist__7085 = cljs.core.next(arglist__7085);
var name = cljs.core.first(arglist__7085);
var value = cljs.core.rest(arglist__7085);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__7090_7094 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7091_7095 = null;var count__7092_7096 = 0;var i__7093_7097 = 0;while(true){
if((i__7093_7097 < count__7092_7096))
{var n_7098 = cljs.core._nth.call(null,chunk__7091_7095,i__7093_7097);n_7098.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7099 = seq__7090_7094;
var G__7100 = chunk__7091_7095;
var G__7101 = count__7092_7096;
var G__7102 = (i__7093_7097 + 1);
seq__7090_7094 = G__7099;
chunk__7091_7095 = G__7100;
count__7092_7096 = G__7101;
i__7093_7097 = G__7102;
continue;
}
} else
{var temp__4092__auto___7103 = cljs.core.seq.call(null,seq__7090_7094);if(temp__4092__auto___7103)
{var seq__7090_7104__$1 = temp__4092__auto___7103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7090_7104__$1))
{var c__4191__auto___7105 = cljs.core.chunk_first.call(null,seq__7090_7104__$1);{
var G__7106 = cljs.core.chunk_rest.call(null,seq__7090_7104__$1);
var G__7107 = c__4191__auto___7105;
var G__7108 = cljs.core.count.call(null,c__4191__auto___7105);
var G__7109 = 0;
seq__7090_7094 = G__7106;
chunk__7091_7095 = G__7107;
count__7092_7096 = G__7108;
i__7093_7097 = G__7109;
continue;
}
} else
{var n_7110 = cljs.core.first.call(null,seq__7090_7104__$1);n_7110.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7111 = cljs.core.next.call(null,seq__7090_7104__$1);
var G__7112 = null;
var G__7113 = 0;
var G__7114 = 0;
seq__7090_7094 = G__7111;
chunk__7091_7095 = G__7112;
count__7092_7096 = G__7113;
i__7093_7097 = G__7114;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7115){
var content = cljs.core.first(arglist__7115);
arglist__7115 = cljs.core.next(arglist__7115);
var name = cljs.core.first(arglist__7115);
var value = cljs.core.rest(arglist__7115);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__7120_7124 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7121_7125 = null;var count__7122_7126 = 0;var i__7123_7127 = 0;while(true){
if((i__7123_7127 < count__7122_7126))
{var n_7128 = cljs.core._nth.call(null,chunk__7121_7125,i__7123_7127);n_7128.removeAttribute(cljs.core.name.call(null,name));
{
var G__7129 = seq__7120_7124;
var G__7130 = chunk__7121_7125;
var G__7131 = count__7122_7126;
var G__7132 = (i__7123_7127 + 1);
seq__7120_7124 = G__7129;
chunk__7121_7125 = G__7130;
count__7122_7126 = G__7131;
i__7123_7127 = G__7132;
continue;
}
} else
{var temp__4092__auto___7133 = cljs.core.seq.call(null,seq__7120_7124);if(temp__4092__auto___7133)
{var seq__7120_7134__$1 = temp__4092__auto___7133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7120_7134__$1))
{var c__4191__auto___7135 = cljs.core.chunk_first.call(null,seq__7120_7134__$1);{
var G__7136 = cljs.core.chunk_rest.call(null,seq__7120_7134__$1);
var G__7137 = c__4191__auto___7135;
var G__7138 = cljs.core.count.call(null,c__4191__auto___7135);
var G__7139 = 0;
seq__7120_7124 = G__7136;
chunk__7121_7125 = G__7137;
count__7122_7126 = G__7138;
i__7123_7127 = G__7139;
continue;
}
} else
{var n_7140 = cljs.core.first.call(null,seq__7120_7134__$1);n_7140.removeAttribute(cljs.core.name.call(null,name));
{
var G__7141 = cljs.core.next.call(null,seq__7120_7134__$1);
var G__7142 = null;
var G__7143 = 0;
var G__7144 = 0;
seq__7120_7124 = G__7141;
chunk__7121_7125 = G__7142;
count__7122_7126 = G__7143;
i__7123_7127 = G__7144;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__7146 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__7146,0,null);var v = cljs.core.nth.call(null,vec__7146,1,null);if(cljs.core.truth_((function (){var and__3431__auto__ = k;if(cljs.core.truth_(and__3431__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__7147_SHARP_){var attr = attrs__$1.item(p1__7147_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__7154_7160 = cljs.core.seq.call(null,styles);var chunk__7155_7161 = null;var count__7156_7162 = 0;var i__7157_7163 = 0;while(true){
if((i__7157_7163 < count__7156_7162))
{var vec__7158_7164 = cljs.core._nth.call(null,chunk__7155_7161,i__7157_7163);var name_7165 = cljs.core.nth.call(null,vec__7158_7164,0,null);var value_7166 = cljs.core.nth.call(null,vec__7158_7164,1,null);domina.set_style_BANG_.call(null,content,name_7165,value_7166);
{
var G__7167 = seq__7154_7160;
var G__7168 = chunk__7155_7161;
var G__7169 = count__7156_7162;
var G__7170 = (i__7157_7163 + 1);
seq__7154_7160 = G__7167;
chunk__7155_7161 = G__7168;
count__7156_7162 = G__7169;
i__7157_7163 = G__7170;
continue;
}
} else
{var temp__4092__auto___7171 = cljs.core.seq.call(null,seq__7154_7160);if(temp__4092__auto___7171)
{var seq__7154_7172__$1 = temp__4092__auto___7171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7154_7172__$1))
{var c__4191__auto___7173 = cljs.core.chunk_first.call(null,seq__7154_7172__$1);{
var G__7174 = cljs.core.chunk_rest.call(null,seq__7154_7172__$1);
var G__7175 = c__4191__auto___7173;
var G__7176 = cljs.core.count.call(null,c__4191__auto___7173);
var G__7177 = 0;
seq__7154_7160 = G__7174;
chunk__7155_7161 = G__7175;
count__7156_7162 = G__7176;
i__7157_7163 = G__7177;
continue;
}
} else
{var vec__7159_7178 = cljs.core.first.call(null,seq__7154_7172__$1);var name_7179 = cljs.core.nth.call(null,vec__7159_7178,0,null);var value_7180 = cljs.core.nth.call(null,vec__7159_7178,1,null);domina.set_style_BANG_.call(null,content,name_7179,value_7180);
{
var G__7181 = cljs.core.next.call(null,seq__7154_7172__$1);
var G__7182 = null;
var G__7183 = 0;
var G__7184 = 0;
seq__7154_7160 = G__7181;
chunk__7155_7161 = G__7182;
count__7156_7162 = G__7183;
i__7157_7163 = G__7184;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7191_7197 = cljs.core.seq.call(null,attrs);var chunk__7192_7198 = null;var count__7193_7199 = 0;var i__7194_7200 = 0;while(true){
if((i__7194_7200 < count__7193_7199))
{var vec__7195_7201 = cljs.core._nth.call(null,chunk__7192_7198,i__7194_7200);var name_7202 = cljs.core.nth.call(null,vec__7195_7201,0,null);var value_7203 = cljs.core.nth.call(null,vec__7195_7201,1,null);domina.set_attr_BANG_.call(null,content,name_7202,value_7203);
{
var G__7204 = seq__7191_7197;
var G__7205 = chunk__7192_7198;
var G__7206 = count__7193_7199;
var G__7207 = (i__7194_7200 + 1);
seq__7191_7197 = G__7204;
chunk__7192_7198 = G__7205;
count__7193_7199 = G__7206;
i__7194_7200 = G__7207;
continue;
}
} else
{var temp__4092__auto___7208 = cljs.core.seq.call(null,seq__7191_7197);if(temp__4092__auto___7208)
{var seq__7191_7209__$1 = temp__4092__auto___7208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7191_7209__$1))
{var c__4191__auto___7210 = cljs.core.chunk_first.call(null,seq__7191_7209__$1);{
var G__7211 = cljs.core.chunk_rest.call(null,seq__7191_7209__$1);
var G__7212 = c__4191__auto___7210;
var G__7213 = cljs.core.count.call(null,c__4191__auto___7210);
var G__7214 = 0;
seq__7191_7197 = G__7211;
chunk__7192_7198 = G__7212;
count__7193_7199 = G__7213;
i__7194_7200 = G__7214;
continue;
}
} else
{var vec__7196_7215 = cljs.core.first.call(null,seq__7191_7209__$1);var name_7216 = cljs.core.nth.call(null,vec__7196_7215,0,null);var value_7217 = cljs.core.nth.call(null,vec__7196_7215,1,null);domina.set_attr_BANG_.call(null,content,name_7216,value_7217);
{
var G__7218 = cljs.core.next.call(null,seq__7191_7209__$1);
var G__7219 = null;
var G__7220 = 0;
var G__7221 = 0;
seq__7191_7197 = G__7218;
chunk__7192_7198 = G__7219;
count__7193_7199 = G__7220;
i__7194_7200 = G__7221;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7226_7230 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7227_7231 = null;var count__7228_7232 = 0;var i__7229_7233 = 0;while(true){
if((i__7229_7233 < count__7228_7232))
{var node_7234 = cljs.core._nth.call(null,chunk__7227_7231,i__7229_7233);goog.dom.classes.add(node_7234,class$);
{
var G__7235 = seq__7226_7230;
var G__7236 = chunk__7227_7231;
var G__7237 = count__7228_7232;
var G__7238 = (i__7229_7233 + 1);
seq__7226_7230 = G__7235;
chunk__7227_7231 = G__7236;
count__7228_7232 = G__7237;
i__7229_7233 = G__7238;
continue;
}
} else
{var temp__4092__auto___7239 = cljs.core.seq.call(null,seq__7226_7230);if(temp__4092__auto___7239)
{var seq__7226_7240__$1 = temp__4092__auto___7239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7226_7240__$1))
{var c__4191__auto___7241 = cljs.core.chunk_first.call(null,seq__7226_7240__$1);{
var G__7242 = cljs.core.chunk_rest.call(null,seq__7226_7240__$1);
var G__7243 = c__4191__auto___7241;
var G__7244 = cljs.core.count.call(null,c__4191__auto___7241);
var G__7245 = 0;
seq__7226_7230 = G__7242;
chunk__7227_7231 = G__7243;
count__7228_7232 = G__7244;
i__7229_7233 = G__7245;
continue;
}
} else
{var node_7246 = cljs.core.first.call(null,seq__7226_7240__$1);goog.dom.classes.add(node_7246,class$);
{
var G__7247 = cljs.core.next.call(null,seq__7226_7240__$1);
var G__7248 = null;
var G__7249 = 0;
var G__7250 = 0;
seq__7226_7230 = G__7247;
chunk__7227_7231 = G__7248;
count__7228_7232 = G__7249;
i__7229_7233 = G__7250;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7255_7259 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7256_7260 = null;var count__7257_7261 = 0;var i__7258_7262 = 0;while(true){
if((i__7258_7262 < count__7257_7261))
{var node_7263 = cljs.core._nth.call(null,chunk__7256_7260,i__7258_7262);goog.dom.classes.remove(node_7263,class$);
{
var G__7264 = seq__7255_7259;
var G__7265 = chunk__7256_7260;
var G__7266 = count__7257_7261;
var G__7267 = (i__7258_7262 + 1);
seq__7255_7259 = G__7264;
chunk__7256_7260 = G__7265;
count__7257_7261 = G__7266;
i__7258_7262 = G__7267;
continue;
}
} else
{var temp__4092__auto___7268 = cljs.core.seq.call(null,seq__7255_7259);if(temp__4092__auto___7268)
{var seq__7255_7269__$1 = temp__4092__auto___7268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7255_7269__$1))
{var c__4191__auto___7270 = cljs.core.chunk_first.call(null,seq__7255_7269__$1);{
var G__7271 = cljs.core.chunk_rest.call(null,seq__7255_7269__$1);
var G__7272 = c__4191__auto___7270;
var G__7273 = cljs.core.count.call(null,c__4191__auto___7270);
var G__7274 = 0;
seq__7255_7259 = G__7271;
chunk__7256_7260 = G__7272;
count__7257_7261 = G__7273;
i__7258_7262 = G__7274;
continue;
}
} else
{var node_7275 = cljs.core.first.call(null,seq__7255_7269__$1);goog.dom.classes.remove(node_7275,class$);
{
var G__7276 = cljs.core.next.call(null,seq__7255_7269__$1);
var G__7277 = null;
var G__7278 = 0;
var G__7279 = 0;
seq__7255_7259 = G__7276;
chunk__7256_7260 = G__7277;
count__7257_7261 = G__7278;
i__7258_7262 = G__7279;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__7284_7288 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7285_7289 = null;var count__7286_7290 = 0;var i__7287_7291 = 0;while(true){
if((i__7287_7291 < count__7286_7290))
{var node_7292 = cljs.core._nth.call(null,chunk__7285_7289,i__7287_7291);goog.dom.classes.toggle(node_7292,class$);
{
var G__7293 = seq__7284_7288;
var G__7294 = chunk__7285_7289;
var G__7295 = count__7286_7290;
var G__7296 = (i__7287_7291 + 1);
seq__7284_7288 = G__7293;
chunk__7285_7289 = G__7294;
count__7286_7290 = G__7295;
i__7287_7291 = G__7296;
continue;
}
} else
{var temp__4092__auto___7297 = cljs.core.seq.call(null,seq__7284_7288);if(temp__4092__auto___7297)
{var seq__7284_7298__$1 = temp__4092__auto___7297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7284_7298__$1))
{var c__4191__auto___7299 = cljs.core.chunk_first.call(null,seq__7284_7298__$1);{
var G__7300 = cljs.core.chunk_rest.call(null,seq__7284_7298__$1);
var G__7301 = c__4191__auto___7299;
var G__7302 = cljs.core.count.call(null,c__4191__auto___7299);
var G__7303 = 0;
seq__7284_7288 = G__7300;
chunk__7285_7289 = G__7301;
count__7286_7290 = G__7302;
i__7287_7291 = G__7303;
continue;
}
} else
{var node_7304 = cljs.core.first.call(null,seq__7284_7298__$1);goog.dom.classes.toggle(node_7304,class$);
{
var G__7305 = cljs.core.next.call(null,seq__7284_7298__$1);
var G__7306 = null;
var G__7307 = 0;
var G__7308 = 0;
seq__7284_7288 = G__7305;
chunk__7285_7289 = G__7306;
count__7286_7290 = G__7307;
i__7287_7291 = G__7308;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_7317__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__7313_7318 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7314_7319 = null;var count__7315_7320 = 0;var i__7316_7321 = 0;while(true){
if((i__7316_7321 < count__7315_7320))
{var node_7322 = cljs.core._nth.call(null,chunk__7314_7319,i__7316_7321);goog.dom.classes.set(node_7322,classes_7317__$1);
{
var G__7323 = seq__7313_7318;
var G__7324 = chunk__7314_7319;
var G__7325 = count__7315_7320;
var G__7326 = (i__7316_7321 + 1);
seq__7313_7318 = G__7323;
chunk__7314_7319 = G__7324;
count__7315_7320 = G__7325;
i__7316_7321 = G__7326;
continue;
}
} else
{var temp__4092__auto___7327 = cljs.core.seq.call(null,seq__7313_7318);if(temp__4092__auto___7327)
{var seq__7313_7328__$1 = temp__4092__auto___7327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7313_7328__$1))
{var c__4191__auto___7329 = cljs.core.chunk_first.call(null,seq__7313_7328__$1);{
var G__7330 = cljs.core.chunk_rest.call(null,seq__7313_7328__$1);
var G__7331 = c__4191__auto___7329;
var G__7332 = cljs.core.count.call(null,c__4191__auto___7329);
var G__7333 = 0;
seq__7313_7318 = G__7330;
chunk__7314_7319 = G__7331;
count__7315_7320 = G__7332;
i__7316_7321 = G__7333;
continue;
}
} else
{var node_7334 = cljs.core.first.call(null,seq__7313_7328__$1);goog.dom.classes.set(node_7334,classes_7317__$1);
{
var G__7335 = cljs.core.next.call(null,seq__7313_7328__$1);
var G__7336 = null;
var G__7337 = 0;
var G__7338 = 0;
seq__7313_7318 = G__7335;
chunk__7314_7319 = G__7336;
count__7315_7320 = G__7337;
i__7316_7321 = G__7338;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7343_7347 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7344_7348 = null;var count__7345_7349 = 0;var i__7346_7350 = 0;while(true){
if((i__7346_7350 < count__7345_7349))
{var node_7351 = cljs.core._nth.call(null,chunk__7344_7348,i__7346_7350);goog.dom.setTextContent(node_7351,value);
{
var G__7352 = seq__7343_7347;
var G__7353 = chunk__7344_7348;
var G__7354 = count__7345_7349;
var G__7355 = (i__7346_7350 + 1);
seq__7343_7347 = G__7352;
chunk__7344_7348 = G__7353;
count__7345_7349 = G__7354;
i__7346_7350 = G__7355;
continue;
}
} else
{var temp__4092__auto___7356 = cljs.core.seq.call(null,seq__7343_7347);if(temp__4092__auto___7356)
{var seq__7343_7357__$1 = temp__4092__auto___7356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7343_7357__$1))
{var c__4191__auto___7358 = cljs.core.chunk_first.call(null,seq__7343_7357__$1);{
var G__7359 = cljs.core.chunk_rest.call(null,seq__7343_7357__$1);
var G__7360 = c__4191__auto___7358;
var G__7361 = cljs.core.count.call(null,c__4191__auto___7358);
var G__7362 = 0;
seq__7343_7347 = G__7359;
chunk__7344_7348 = G__7360;
count__7345_7349 = G__7361;
i__7346_7350 = G__7362;
continue;
}
} else
{var node_7363 = cljs.core.first.call(null,seq__7343_7357__$1);goog.dom.setTextContent(node_7363,value);
{
var G__7364 = cljs.core.next.call(null,seq__7343_7357__$1);
var G__7365 = null;
var G__7366 = 0;
var G__7367 = 0;
seq__7343_7347 = G__7364;
chunk__7344_7348 = G__7365;
count__7345_7349 = G__7366;
i__7346_7350 = G__7367;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7372_7376 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7373_7377 = null;var count__7374_7378 = 0;var i__7375_7379 = 0;while(true){
if((i__7375_7379 < count__7374_7378))
{var node_7380 = cljs.core._nth.call(null,chunk__7373_7377,i__7375_7379);goog.dom.forms.setValue(node_7380,value);
{
var G__7381 = seq__7372_7376;
var G__7382 = chunk__7373_7377;
var G__7383 = count__7374_7378;
var G__7384 = (i__7375_7379 + 1);
seq__7372_7376 = G__7381;
chunk__7373_7377 = G__7382;
count__7374_7378 = G__7383;
i__7375_7379 = G__7384;
continue;
}
} else
{var temp__4092__auto___7385 = cljs.core.seq.call(null,seq__7372_7376);if(temp__4092__auto___7385)
{var seq__7372_7386__$1 = temp__4092__auto___7385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7372_7386__$1))
{var c__4191__auto___7387 = cljs.core.chunk_first.call(null,seq__7372_7386__$1);{
var G__7388 = cljs.core.chunk_rest.call(null,seq__7372_7386__$1);
var G__7389 = c__4191__auto___7387;
var G__7390 = cljs.core.count.call(null,c__4191__auto___7387);
var G__7391 = 0;
seq__7372_7376 = G__7388;
chunk__7373_7377 = G__7389;
count__7374_7378 = G__7390;
i__7375_7379 = G__7391;
continue;
}
} else
{var node_7392 = cljs.core.first.call(null,seq__7372_7386__$1);goog.dom.forms.setValue(node_7392,value);
{
var G__7393 = cljs.core.next.call(null,seq__7372_7386__$1);
var G__7394 = null;
var G__7395 = 0;
var G__7396 = 0;
seq__7372_7376 = G__7393;
chunk__7373_7377 = G__7394;
count__7374_7378 = G__7395;
i__7375_7379 = G__7396;
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
{var value_7407 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__7403_7408 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7404_7409 = null;var count__7405_7410 = 0;var i__7406_7411 = 0;while(true){
if((i__7406_7411 < count__7405_7410))
{var node_7412 = cljs.core._nth.call(null,chunk__7404_7409,i__7406_7411);node_7412.innerHTML = value_7407;
{
var G__7413 = seq__7403_7408;
var G__7414 = chunk__7404_7409;
var G__7415 = count__7405_7410;
var G__7416 = (i__7406_7411 + 1);
seq__7403_7408 = G__7413;
chunk__7404_7409 = G__7414;
count__7405_7410 = G__7415;
i__7406_7411 = G__7416;
continue;
}
} else
{var temp__4092__auto___7417 = cljs.core.seq.call(null,seq__7403_7408);if(temp__4092__auto___7417)
{var seq__7403_7418__$1 = temp__4092__auto___7417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7403_7418__$1))
{var c__4191__auto___7419 = cljs.core.chunk_first.call(null,seq__7403_7418__$1);{
var G__7420 = cljs.core.chunk_rest.call(null,seq__7403_7418__$1);
var G__7421 = c__4191__auto___7419;
var G__7422 = cljs.core.count.call(null,c__4191__auto___7419);
var G__7423 = 0;
seq__7403_7408 = G__7420;
chunk__7404_7409 = G__7421;
count__7405_7410 = G__7422;
i__7406_7411 = G__7423;
continue;
}
} else
{var node_7424 = cljs.core.first.call(null,seq__7403_7418__$1);node_7424.innerHTML = value_7407;
{
var G__7425 = cljs.core.next.call(null,seq__7403_7418__$1);
var G__7426 = null;
var G__7427 = 0;
var G__7428 = 0;
seq__7403_7408 = G__7425;
chunk__7404_7409 = G__7426;
count__7405_7410 = G__7427;
i__7406_7411 = G__7428;
continue;
}
}
} else
{}
}
break;
}
}catch (e7402){if((e7402 instanceof Error))
{var e_7429 = e7402;domina.replace_children_BANG_.call(null,content,value_7407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7402;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__7436_7440 = cljs.core.seq.call(null,children);var chunk__7437_7441 = null;var count__7438_7442 = 0;var i__7439_7443 = 0;while(true){
if((i__7439_7443 < count__7438_7442))
{var child_7444 = cljs.core._nth.call(null,chunk__7437_7441,i__7439_7443);frag.appendChild(child_7444);
{
var G__7445 = seq__7436_7440;
var G__7446 = chunk__7437_7441;
var G__7447 = count__7438_7442;
var G__7448 = (i__7439_7443 + 1);
seq__7436_7440 = G__7445;
chunk__7437_7441 = G__7446;
count__7438_7442 = G__7447;
i__7439_7443 = G__7448;
continue;
}
} else
{var temp__4092__auto___7449 = cljs.core.seq.call(null,seq__7436_7440);if(temp__4092__auto___7449)
{var seq__7436_7450__$1 = temp__4092__auto___7449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7436_7450__$1))
{var c__4191__auto___7451 = cljs.core.chunk_first.call(null,seq__7436_7450__$1);{
var G__7452 = cljs.core.chunk_rest.call(null,seq__7436_7450__$1);
var G__7453 = c__4191__auto___7451;
var G__7454 = cljs.core.count.call(null,c__4191__auto___7451);
var G__7455 = 0;
seq__7436_7440 = G__7452;
chunk__7437_7441 = G__7453;
count__7438_7442 = G__7454;
i__7439_7443 = G__7455;
continue;
}
} else
{var child_7456 = cljs.core.first.call(null,seq__7436_7450__$1);frag.appendChild(child_7456);
{
var G__7457 = cljs.core.next.call(null,seq__7436_7450__$1);
var G__7458 = null;
var G__7459 = 0;
var G__7460 = 0;
seq__7436_7440 = G__7457;
chunk__7437_7441 = G__7458;
count__7438_7442 = G__7459;
i__7439_7443 = G__7460;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__7430_SHARP_,p2__7431_SHARP_){return f.call(null,p1__7430_SHARP_,p2__7431_SHARP_);
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
{if((function (){var G__7462 = list_thing;if(G__7462)
{var bit__4093__auto__ = (G__7462.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__7462.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7462.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7462);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7462);
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
{if((function (){var G__7463 = content;if(G__7463)
{var bit__4093__auto__ = (G__7463.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__7463.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7463.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7463);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7463);
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
{if((function (){var G__7464 = content;if(G__7464)
{var bit__4093__auto__ = (G__7464.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__7464.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7464.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7464);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7464);
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