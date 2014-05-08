// Compiled by ClojureScript 0.0-2173
goog.provide('shriek.app');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('enfocus.core');
goog.require('enfocus.core');
shriek.app.logout_ok = (function logout_ok(r){return (window.location["href"] = "/login");
});
goog.exportSymbol('shriek.app.logout_ok', shriek.app.logout_ok);
shriek.app.logout_not_ok = (function logout_not_ok(p__12115){var map__12117 = p__12115;var map__12117__$1 = ((cljs.core.seq_QMARK_.call(null,map__12117))?cljs.core.apply.call(null,cljs.core.hash_map,map__12117):map__12117);var r = map__12117__$1;var status_text = cljs.core.get.call(null,map__12117__$1,new cljs.core.Keyword(null,"status-text","status-text",4371493274));var status = cljs.core.get.call(null,map__12117__$1,new cljs.core.Keyword(null,"status","status",4416389988));return console.log([cljs.core.str("Logout failed: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text),cljs.core.str("reponse"),cljs.core.str(cljs.core.pr_str.call(null,r))].join(''));
});
goog.exportSymbol('shriek.app.logout_not_ok', shriek.app.logout_not_ok);
shriek.app.try_process_logout = (function try_process_logout(){console.log("logout pressed!");
return ajax.core.GET.call(null,[cljs.core.str("/logout")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",1706707644),shriek.app.logout_ok,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),shriek.app.logout_not_ok], null));
});
goog.exportSymbol('shriek.app.try_process_logout', shriek.app.try_process_logout);
shriek.app.error_denied = (function error_denied(resp){console.log([cljs.core.str("Got respnose "),cljs.core.str(cljs.core.pr_str.call(null,resp))].join(''));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(resp),401))
{return (window.location["href"] = "/login");
} else
{return null;
}
});
goog.exportSymbol('shriek.app.error_denied', shriek.app.error_denied);
shriek.app.try_denied = (function try_denied(){return ajax.core.POST.call(null,"/app/bad",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",1706707644),shriek.app.error_denied,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),shriek.app.error_denied], null));
});
goog.exportSymbol('shriek.app.try_denied', shriek.app.try_denied);
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en8773_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.board_element = (function board_element(p__12120){var map__12123 = p__12120;var map__12123__$1 = ((cljs.core.seq_QMARK_.call(null,map__12123))?cljs.core.apply.call(null,cljs.core.hash_map,map__12123):map__12123);var v = map__12123__$1;var title = cljs.core.get.call(null,map__12123__$1,new cljs.core.Keyword(null,"title","title",1124275658));var name = cljs.core.get.call(null,map__12123__$1,new cljs.core.Keyword(null,"name","name",1017277949));var vec__12124 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html","#board");
}).call(null);var id_sym12118 = cljs.core.nth.call(null,vec__12124,0,null);var pnod12119 = cljs.core.nth.call(null,vec__12124,1,null);var pnod12119__$1 = enfocus.core.create_hidden_dom.call(null,pnod12119);enfocus.core.i_at.call(null,id_sym12118,pnod12119__$1,"#name",enfocus.core.content.call(null,name),"#title",enfocus.core.content.call(null,title),"#board",enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"onclick","onclick",3986521723),[cljs.core.str("shriek.app.stack_view('"),cljs.core.str(cljs.core.pr_str.call(null,v)),cljs.core.str("')")].join('')));
enfocus.core.reset_ids.call(null,id_sym12118,pnod12119__$1);
return enfocus.core.remove_node_return_child.call(null,pnod12119__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en8773_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.blist_header = (function blist_header(){var vec__12128 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html",".blist-header");
}).call(null);var id_sym12125 = cljs.core.nth.call(null,vec__12128,0,null);var pnod12126 = cljs.core.nth.call(null,vec__12128,1,null);var pnod12126__$1 = enfocus.core.create_hidden_dom.call(null,pnod12126);enfocus.core.i_at.call(null,id_sym12125,pnod12126__$1);
enfocus.core.reset_ids.call(null,id_sym12125,pnod12126__$1);
return enfocus.core.remove_node_return_child.call(null,pnod12126__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en8773_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.board_list = (function board_list(){var vec__12132 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html","#board-list");
}).call(null);var id_sym12129 = cljs.core.nth.call(null,vec__12132,0,null);var pnod12130 = cljs.core.nth.call(null,vec__12132,1,null);var pnod12130__$1 = enfocus.core.create_hidden_dom.call(null,pnod12130);enfocus.core.i_at.call(null,id_sym12129,pnod12130__$1);
enfocus.core.reset_ids.call(null,id_sym12129,pnod12130__$1);
return enfocus.core.remove_node_return_child.call(null,pnod12130__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en8773_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.slist_header = (function slist_header(p__12135){var map__12138 = p__12135;var map__12138__$1 = ((cljs.core.seq_QMARK_.call(null,map__12138))?cljs.core.apply.call(null,cljs.core.hash_map,map__12138):map__12138);var title = cljs.core.get.call(null,map__12138__$1,new cljs.core.Keyword(null,"title","title",1124275658));var name = cljs.core.get.call(null,map__12138__$1,new cljs.core.Keyword(null,"name","name",1017277949));var vec__12139 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html",".slist-header");
}).call(null);var id_sym12133 = cljs.core.nth.call(null,vec__12139,0,null);var pnod12134 = cljs.core.nth.call(null,vec__12139,1,null);var pnod12134__$1 = enfocus.core.create_hidden_dom.call(null,pnod12134);enfocus.core.i_at.call(null,id_sym12133,pnod12134__$1,".slist-title",enfocus.core.content.call(null,name),".slist-desc",enfocus.core.content.call(null,title));
enfocus.core.reset_ids.call(null,id_sym12133,pnod12134__$1);
return enfocus.core.remove_node_return_child.call(null,pnod12134__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en8773_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.stack_element = (function stack_element(p__12142){var map__12145 = p__12142;var map__12145__$1 = ((cljs.core.seq_QMARK_.call(null,map__12145))?cljs.core.apply.call(null,cljs.core.hash_map,map__12145):map__12145);var id = cljs.core.get.call(null,map__12145__$1,new cljs.core.Keyword(null,"id","id",1013907597));var title = cljs.core.get.call(null,map__12145__$1,new cljs.core.Keyword(null,"title","title",1124275658));var vec__12146 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html","#stack");
}).call(null);var id_sym12140 = cljs.core.nth.call(null,vec__12146,0,null);var pnod12141 = cljs.core.nth.call(null,vec__12146,1,null);var pnod12141__$1 = enfocus.core.create_hidden_dom.call(null,pnod12141);enfocus.core.i_at.call(null,id_sym12140,pnod12141__$1,"#stack-title",enfocus.core.content.call(null,title));
enfocus.core.reset_ids.call(null,id_sym12140,pnod12141__$1);
return enfocus.core.remove_node_return_child.call(null,pnod12141__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en8773_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.stack_list = (function stack_list(){var vec__12150 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html","#stack-list");
}).call(null);var id_sym12147 = cljs.core.nth.call(null,vec__12150,0,null);var pnod12148 = cljs.core.nth.call(null,vec__12150,1,null);var pnod12148__$1 = enfocus.core.create_hidden_dom.call(null,pnod12148);enfocus.core.i_at.call(null,id_sym12147,pnod12148__$1);
enfocus.core.reset_ids.call(null,id_sym12147,pnod12148__$1);
return enfocus.core.remove_node_return_child.call(null,pnod12148__$1);
});
shriek.app.err_handler = (function err_handler(resp){return console.log([cljs.core.str("Shit happend! reply: ".call(null,cljs.core.pr_str.call(null,resp)))].join(''));
});
shriek.app.boards = (function boards(data){return enfocus.core.at.call(null,"#board-list",enfocus.core.content.call(null,cljs.core.map.call(null,shriek.app.board_element,data)));
});
shriek.app.stacks = (function stacks(data){return enfocus.core.at.call(null,"#stack-list",enfocus.core.content.call(null,cljs.core.map.call(null,shriek.app.stack_element,data)));
});
shriek.app.try_board_list = (function try_board_list(){return ajax.core.GET.call(null,"/app/board/list",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param","param",1120340991),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",1706707644),shriek.app.boards,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),shriek.app.err_handler], null));
});
shriek.app.try_stack_list = (function try_stack_list(id){return ajax.core.GET.call(null,[cljs.core.str("/app/board/"),cljs.core.str(id),cljs.core.str("list")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param","param",1120340991),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",1706707644),shriek.app.stacks,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),shriek.app.err_handler], null));
});
shriek.app.board_view = (function board_view(){return enfocus.core.at.call(null,"#main-content",enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,shriek.app.blist_header.call(null)),enfocus.core.append.call(null,shriek.app.board_list.call(null))),shriek.app.try_board_list.call(null));
});
goog.exportSymbol('shriek.app.board_view', shriek.app.board_view);
shriek.app.stack_view = (function stack_view(board_edn){var board = cljs.reader.read_string.call(null,board_edn);return enfocus.core.at.call(null,"#main-content",enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,shriek.app.slist_header.call(null,board)),enfocus.core.append.call(null,shriek.app.stack_list.call(null))),shriek.app.try_stack_list.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(board)));
});
goog.exportSymbol('shriek.app.stack_view', shriek.app.stack_view);
shriek.app.start = (function start(){return shriek.app.board_view.call(null);
});
window.onload = (function (){return enfocus.core.setTimeout.call(null,(function check__4486__auto__(){if((cljs.core.deref.call(null,enfocus.core.tpl_load_cnt) === 0))
{return shriek.app.start.call(null);
} else
{return enfocus.core.setTimeout.call(null,(function (){return check__4486__auto__.call(null);
}),10);
}
}),0);
});

//# sourceMappingURL=app.js.map