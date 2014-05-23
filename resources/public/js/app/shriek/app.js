// Compiled by ClojureScript 0.0-2173
goog.provide('shriek.app');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('ajax.core');
goog.require('chord.client');
goog.require('enfocus.core');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('taoensso.sente');
goog.require('enfocus.core');
goog.require('taoensso.encore');
goog.require('cljs.core.match');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('chord.client');
shriek.app.userinfo = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
shriek.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword(null,"top","top",1014019271)], null));
shriek.app.boardmap = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
shriek.app.boarddata = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
shriek.app.stackmap = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
shriek.app.cardmap = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
shriek.app.errors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
shriek.app.initialized_QMARK_ = cljs.core.atom.call(null,false);
shriek.app.show_error = (function show_error(){return enfocus.core.at.call(null,"#sh-errors",enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,enfocus.core.html.call(null,cljs.core.map.call(null,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),x], null);
}),cljs.core.deref.call(null,shriek.app.errors)))),enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"style","style",1123684643),"display: block;")));
});
shriek.app.log_error = (function log_error(e){cljs.core.swap_BANG_.call(null,shriek.app.errors,(function (p1__16812_SHARP_){return cljs.core.conj.call(null,p1__16812_SHARP_,cljs.core.pr_str.call(null,e));
}));
return shriek.app.show_error.call(null);
});
shriek.app.process_event = (function process_event(p__16813){var vec__16818 = p__16813;var id = cljs.core.nth.call(null,vec__16818,0,null);var data = cljs.core.nth.call(null,vec__16818,1,null);var payload = vec__16818;try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("shriek","userinfo","shriek/userinfo",1611593813)))
{var m = data;return shriek.app.update_userinfo.call(null,m);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("shriek","boards","shriek/boards",2712431337)))
{var m = data;cljs.core.reset_BANG_.call(null,shriek.app.boardmap,m);
return shriek.app.refresh_page.call(null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("shriek","boards-data","shriek/boards-data",3232043046)))
{var m = data;cljs.core.reset_BANG_.call(null,shriek.app.boarddata,m);
return shriek.app.refresh_page.call(null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("shriek","stacks","shriek/stacks",3401878603)))
{var m = data;cljs.core.reset_BANG_.call(null,shriek.app.stackmap,m);
shriek.app.refresh_page.call(null);
return taoensso.encore.logf.call(null,"New stacks: %s",cljs.core.deref.call(null,shriek.app.stackmap));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e16821){if((e16821 instanceof Error))
{var e__6096__auto__ = e16821;if((e__6096__auto__ === cljs.core.match.backtrack))
{return taoensso.encore.logf.call(null,"Unknown data from server: %s",cljs.core.pr_str.call(null,payload));
} else
{throw e__6096__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16821;
} else
{return null;
}
}
}});
shriek.app.event_handler = (function event_handler(p__16822,_){var vec__16834 = p__16822;var id = cljs.core.nth.call(null,vec__16834,0,null);var data = cljs.core.nth.call(null,vec__16834,1,null);var ev = vec__16834;taoensso.encore.logf.call(null,"Event: %s",ev);
shriek.app.log_error.call(null,ev);
try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{try{if((function (){var G__16843 = data;if(G__16843)
{var bit__4093__auto__ = (G__16843.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4093__auto__) || (G__16843.cljs$core$ILookup$))
{return true;
} else
{if((!G__16843.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__16843);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__16843);
}
})())
{try{var data_first_open_QMARK___16839 = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"first-open?","first-open?",3183196490),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((data_first_open_QMARK___16839 === true))
{taoensso.encore.logf.call(null,"Channel socket successfully established!");
return shriek.app.start.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e16844){if((e16844 instanceof Error))
{var e__6096__auto__ = e16844;if((e__6096__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6096__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16844;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e16842){if((e16842 instanceof Error))
{var e__6096__auto__ = e16842;if((e__6096__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6096__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16842;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e16840){if((e16840 instanceof Error))
{var e__6096__auto__ = e16840;if((e__6096__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{var new_state = data;return taoensso.encore.logf.call(null,"Chsk state change: %s",new_state);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{var payload = data;taoensso.encore.logf.call(null,"Push event from server: %s",payload);
return shriek.app.process_event.call(null,payload);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e16841){if((e16841 instanceof Error))
{var e__6096__auto____$1 = e16841;if((e__6096__auto____$1 === cljs.core.match.backtrack))
{return taoensso.encore.logf.call(null,"Unmatched event: %s",ev);
} else
{throw e__6096__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16841;
} else
{return null;
}
}
}} else
{throw e__6096__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16840;
} else
{return null;
}
}
}});
shriek.app.init = (function init(){taoensso.encore.logf.call(null,"Init called!");
var map__16846_16847 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"ws","ws",1013908046)], null));var map__16846_16848__$1 = ((cljs.core.seq_QMARK_.call(null,map__16846_16847))?cljs.core.apply.call(null,cljs.core.hash_map,map__16846_16847):map__16846_16847);var state_16849 = cljs.core.get.call(null,map__16846_16848__$1,new cljs.core.Keyword(null,"state","state",1123661827));var send_fn_16850 = cljs.core.get.call(null,map__16846_16848__$1,new cljs.core.Keyword(null,"send-fn","send-fn",2993769631));var ch_recv_16851 = cljs.core.get.call(null,map__16846_16848__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",1704942016));var chsk_16852 = cljs.core.get.call(null,map__16846_16848__$1,new cljs.core.Keyword(null,"chsk","chsk",1016957167));shriek.app.chsk = chsk_16852;
shriek.app.ch_chsk = ch_recv_16851;
shriek.app.chsk_send_BANG_ = send_fn_16850;
shriek.app.chsk_state = state_16849;
if(typeof shriek.app.chsk_router !== 'undefined')
{} else
{shriek.app.chsk_router = taoensso.sente.start_chsk_router_loop_BANG_.call(null,shriek.app.event_handler,shriek.app.ch_chsk);
}
return cljs.core.reset_BANG_.call(null,shriek.app.initialized_QMARK_,true);
});
shriek.app.logout_ok = (function logout_ok(r){return (window.location["href"] = "/login");
});
goog.exportSymbol('shriek.app.logout_ok', shriek.app.logout_ok);
shriek.app.logout_not_ok = (function logout_not_ok(p__16853){var map__16855 = p__16853;var map__16855__$1 = ((cljs.core.seq_QMARK_.call(null,map__16855))?cljs.core.apply.call(null,cljs.core.hash_map,map__16855):map__16855);var r = map__16855__$1;var status_text = cljs.core.get.call(null,map__16855__$1,new cljs.core.Keyword(null,"status-text","status-text",4371493274));var status = cljs.core.get.call(null,map__16855__$1,new cljs.core.Keyword(null,"status","status",4416389988));return console.log([cljs.core.str("Logout failed: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text),cljs.core.str("response"),cljs.core.str(cljs.core.pr_str.call(null,r))].join(''));
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
shriek.app.err_handler = (function err_handler(resp){return console.log([cljs.core.str("Shit happend! reply: "),cljs.core.str(cljs.core.pr_str.call(null,resp))].join(''));
});
shriek.app.update_userinfo = (function update_userinfo(resp){cljs.core.reset_BANG_.call(null,shriek.app.userinfo,resp);
return enfocus.core.at.call(null,"#username",enfocus.core.content.call(null,new cljs.core.Keyword(null,"fullname","fullname",2345709836).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shriek.app.userinfo))));
});
shriek.app.try_get_userinfo = (function try_get_userinfo(){return ajax.core.GET.call(null,"/app/user/info",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),shriek.app.update_userinfo,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),shriek.app.err_handler], null));
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en11854_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.card_element = (function card_element(p__16858){var map__16861 = p__16858;var map__16861__$1 = ((cljs.core.seq_QMARK_.call(null,map__16861))?cljs.core.apply.call(null,cljs.core.hash_map,map__16861):map__16861);var title = cljs.core.get.call(null,map__16861__$1,new cljs.core.Keyword(null,"title","title",1124275658));var vec__16862 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html","#card");
}).call(null);var id_sym16856 = cljs.core.nth.call(null,vec__16862,0,null);var pnod16857 = cljs.core.nth.call(null,vec__16862,1,null);var pnod16857__$1 = enfocus.core.create_hidden_dom.call(null,pnod16857);enfocus.core.i_at.call(null,id_sym16856,pnod16857__$1,"#card",enfocus.core.content.call(null,enfocus.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),title], null))));
enfocus.core.reset_ids.call(null,id_sym16856,pnod16857__$1);
return enfocus.core.remove_node_return_child.call(null,pnod16857__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en11854_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.board_add_form = (function board_add_form(){var vec__16866 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html",".board-add-form");
}).call(null);var id_sym16863 = cljs.core.nth.call(null,vec__16866,0,null);var pnod16864 = cljs.core.nth.call(null,vec__16866,1,null);var pnod16864__$1 = enfocus.core.create_hidden_dom.call(null,pnod16864);enfocus.core.i_at.call(null,id_sym16863,pnod16864__$1);
enfocus.core.reset_ids.call(null,id_sym16863,pnod16864__$1);
return enfocus.core.remove_node_return_child.call(null,pnod16864__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en11854_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.board_element = (function board_element(p__16869){var map__16872 = p__16869;var map__16872__$1 = ((cljs.core.seq_QMARK_.call(null,map__16872))?cljs.core.apply.call(null,cljs.core.hash_map,map__16872):map__16872);var v = map__16872__$1;var description = cljs.core.get.call(null,map__16872__$1,new cljs.core.Keyword(null,"description","description",3584325486));var name = cljs.core.get.call(null,map__16872__$1,new cljs.core.Keyword(null,"name","name",1017277949));var vec__16873 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html","#board");
}).call(null);var id_sym16867 = cljs.core.nth.call(null,vec__16873,0,null);var pnod16868 = cljs.core.nth.call(null,vec__16873,1,null);var pnod16868__$1 = enfocus.core.create_hidden_dom.call(null,pnod16868);enfocus.core.i_at.call(null,id_sym16867,pnod16868__$1,"#name",enfocus.core.content.call(null,name),"#description",enfocus.core.content.call(null,description),"#board",enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"onclick","onclick",3986521723),[cljs.core.str("shriek.app.stack_view('"),cljs.core.str(cljs.core.pr_str.call(null,v)),cljs.core.str("')")].join('')));
enfocus.core.reset_ids.call(null,id_sym16867,pnod16868__$1);
return enfocus.core.remove_node_return_child.call(null,pnod16868__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en11854_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.blist_header = (function blist_header(){var vec__16877 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html",".blist-header");
}).call(null);var id_sym16874 = cljs.core.nth.call(null,vec__16877,0,null);var pnod16875 = cljs.core.nth.call(null,vec__16877,1,null);var pnod16875__$1 = enfocus.core.create_hidden_dom.call(null,pnod16875);enfocus.core.i_at.call(null,id_sym16874,pnod16875__$1);
enfocus.core.reset_ids.call(null,id_sym16874,pnod16875__$1);
return enfocus.core.remove_node_return_child.call(null,pnod16875__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en11854_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.board_list = (function board_list(){var vec__16881 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html","#board-list");
}).call(null);var id_sym16878 = cljs.core.nth.call(null,vec__16881,0,null);var pnod16879 = cljs.core.nth.call(null,vec__16881,1,null);var pnod16879__$1 = enfocus.core.create_hidden_dom.call(null,pnod16879);enfocus.core.i_at.call(null,id_sym16878,pnod16879__$1);
enfocus.core.reset_ids.call(null,id_sym16878,pnod16879__$1);
return enfocus.core.remove_node_return_child.call(null,pnod16879__$1);
});
enfocus.core.load_remote_dom.call(null,"html/site.html","remotehtml/site.html","en11881_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remotehtml/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remotehtml/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.board_new = (function board_new(){var vec__16885 = (function (){return enfocus.core.get_cached_snippet.call(null,"remotehtml/site.html","#board-new");
}).call(null);var id_sym16882 = cljs.core.nth.call(null,vec__16885,0,null);var pnod16883 = cljs.core.nth.call(null,vec__16885,1,null);var pnod16883__$1 = enfocus.core.create_hidden_dom.call(null,pnod16883);enfocus.core.i_at.call(null,id_sym16882,pnod16883__$1);
enfocus.core.reset_ids.call(null,id_sym16882,pnod16883__$1);
return enfocus.core.remove_node_return_child.call(null,pnod16883__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en11854_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.slist_header = (function slist_header(p__16888){var map__16891 = p__16888;var map__16891__$1 = ((cljs.core.seq_QMARK_.call(null,map__16891))?cljs.core.apply.call(null,cljs.core.hash_map,map__16891):map__16891);var b = map__16891__$1;var description = cljs.core.get.call(null,map__16891__$1,new cljs.core.Keyword(null,"description","description",3584325486));var name = cljs.core.get.call(null,map__16891__$1,new cljs.core.Keyword(null,"name","name",1017277949));var vec__16892 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html",".slist-header");
}).call(null);var id_sym16886 = cljs.core.nth.call(null,vec__16892,0,null);var pnod16887 = cljs.core.nth.call(null,vec__16892,1,null);var pnod16887__$1 = enfocus.core.create_hidden_dom.call(null,pnod16887);enfocus.core.i_at.call(null,id_sym16886,pnod16887__$1,".slist-title",enfocus.core.content.call(null,name),"#refresh",enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"onclick","onclick",3986521723),[cljs.core.str("shriek.app.stack_view('"),cljs.core.str(cljs.core.pr_str.call(null,b)),cljs.core.str("')")].join('')),".slist-desc",enfocus.core.content.call(null,description));
enfocus.core.reset_ids.call(null,id_sym16886,pnod16887__$1);
return enfocus.core.remove_node_return_child.call(null,pnod16887__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en11854_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.stack_element = (function stack_element(p__16895){var map__16898 = p__16895;var map__16898__$1 = ((cljs.core.seq_QMARK_.call(null,map__16898))?cljs.core.apply.call(null,cljs.core.hash_map,map__16898):map__16898);var cards = cljs.core.get.call(null,map__16898__$1,new cljs.core.Keyword(null,"cards","cards",1108335317));var id = cljs.core.get.call(null,map__16898__$1,new cljs.core.Keyword(null,"id","id",1013907597));var name = cljs.core.get.call(null,map__16898__$1,new cljs.core.Keyword(null,"name","name",1017277949));var vec__16899 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html","#stack");
}).call(null);var id_sym16893 = cljs.core.nth.call(null,vec__16899,0,null);var pnod16894 = cljs.core.nth.call(null,vec__16899,1,null);var pnod16894__$1 = enfocus.core.create_hidden_dom.call(null,pnod16894);enfocus.core.i_at.call(null,id_sym16893,pnod16894__$1,"#title",enfocus.core.content.call(null,name),"#cards",enfocus.core.content.call(null,cljs.core.map.call(null,shriek.app.card_element,cljs.core.vals.call(null,cards))));
enfocus.core.reset_ids.call(null,id_sym16893,pnod16894__$1);
return enfocus.core.remove_node_return_child.call(null,pnod16894__$1);
});
enfocus.core.load_remote_dom.call(null,"/html/site.html","remote/html/site.html","en11854_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remote/html/site.html") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remote/html/site.html",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
shriek.app.stack_list = (function stack_list(){var vec__16903 = (function (){return enfocus.core.get_cached_snippet.call(null,"remote/html/site.html","#stack-list");
}).call(null);var id_sym16900 = cljs.core.nth.call(null,vec__16903,0,null);var pnod16901 = cljs.core.nth.call(null,vec__16903,1,null);var pnod16901__$1 = enfocus.core.create_hidden_dom.call(null,pnod16901);enfocus.core.i_at.call(null,id_sym16900,pnod16901__$1);
enfocus.core.reset_ids.call(null,id_sym16900,pnod16901__$1);
return enfocus.core.remove_node_return_child.call(null,pnod16901__$1);
});
shriek.app.board_add = (function board_add(){return enfocus.core.at.call(null,"#main-content",enfocus.core.content.call(null,shriek.app.board_add_form.call(null)));
});
goog.exportSymbol('shriek.app.board_add', shriek.app.board_add);
shriek.app.board_created = (function board_created(){return shriek.app.start.call(null);
});
shriek.app.try_create_board = (function try_create_board(){console.log(enfocus.core.from.call(null,"#board-add-name",enfocus.core.read_form_input.call(null)));
console.log(enfocus.core.from.call(null,"#board-add-description",enfocus.core.read_form_input.call(null)));
return ajax.core.POST.call(null,"/app/board/add",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),enfocus.core.from.call(null,"#board-add-name",enfocus.core.read_form_input.call(null)),new cljs.core.Keyword(null,"description","description",3584325486),enfocus.core.from.call(null,"#board-add-description",enfocus.core.read_form_input.call(null))], null),new cljs.core.Keyword(null,"handler","handler",1706707644),shriek.app.board_created,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),shriek.app.err_handler], null));
});
goog.exportSymbol('shriek.app.try_create_board', shriek.app.try_create_board);
shriek.app.boards = (function boards(data){return enfocus.core.at.call(null,"#board-list",enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,cljs.core.map.call(null,shriek.app.board_element,data)),enfocus.core.append.call(null,shriek.app.board_new.call(null))));
});
shriek.app.stacks = (function stacks(data){taoensso.encore.logf.call(null,"Adding stacks %s",cljs.core.pr_str.call(null,data));
return enfocus.core.at.call(null,"#stack-list",enfocus.core.content.call(null,cljs.core.map.call(null,shriek.app.stack_element,data)));
});
shriek.app.snt_get_user_info = (function snt_get_user_info(){return shriek.app.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shriek","users","shriek/users",2257423176),new cljs.core.Keyword(null,"getinfo","getinfo",939412598)], null));
});
shriek.app.snt_get_board_list = (function snt_get_board_list(){return shriek.app.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shriek","boards","shriek/boards",2712431337),new cljs.core.Keyword(null,"list","list",1017226256)], null));
});
shriek.app.snt_get_stack_list = (function snt_get_stack_list(id){return shriek.app.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shriek","boards","shriek/boards",2712431337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"getdata","getdata",939251570),id], null)], null));
});
shriek.app.stack_view = (function stack_view(board_edn){var board = cljs.reader.read_string.call(null,board_edn);enfocus.core.at.call(null,"#main-content",enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,shriek.app.slist_header.call(null,board)),enfocus.core.append.call(null,shriek.app.stack_list.call(null))));
cljs.core.reset_BANG_.call(null,shriek.app.state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword(null,"board","board",1107812952),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(board)], null));
return shriek.app.snt_get_stack_list.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(board));
});
goog.exportSymbol('shriek.app.stack_view', shriek.app.stack_view);
shriek.app.board_view = (function board_view(){enfocus.core.at.call(null,"#main-content",enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,shriek.app.blist_header.call(null)),enfocus.core.append.call(null,shriek.app.board_list.call(null))));
return shriek.app.snt_get_board_list.call(null);
});
goog.exportSymbol('shriek.app.board_view', shriek.app.board_view);
shriek.app.refresh_page = (function refresh_page(){if(cljs.core.not.call(null,cljs.core.deref.call(null,shriek.app.initialized_QMARK_)))
{shriek.app.init.call(null);
} else
{}
enfocus.core.at.call(null,"#main-content",enfocus.core.content.call(null,"Hi!"));
var ocr_16915 = cljs.core.deref.call(null,shriek.app.state);try{if((function (){var G__16923 = ocr_16915;if(G__16923)
{var bit__4093__auto__ = (G__16923.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4093__auto__) || (G__16923.cljs$core$ILookup$))
{return true;
} else
{if((!G__16923.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__16923);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__16923);
}
})())
{try{var ocr_16915_pos__16920 = cljs.core.get.call(null,ocr_16915,new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16915_pos__16920,new cljs.core.Keyword(null,"top","top",1014019271)))
{taoensso.encore.logf.call(null,"trying to render %s ",cljs.core.pr_str.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,shriek.app.boardmap))));
return shriek.app.boards.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,shriek.app.boardmap)));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16915_pos__16920,new cljs.core.Keyword(null,"board","board",1107812952)))
{try{var ocr_16915_id__16921 = cljs.core.get.call(null,ocr_16915,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,ocr_16915_id__16921,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var board_id = cljs.core.get.call(null,ocr_16915,new cljs.core.Keyword(null,"id","id",1013907597));return shriek.app.stacks.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shriek.app.boarddata))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e16925){if((e16925 instanceof Error))
{var e__6096__auto__ = e16925;if((e__6096__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6096__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16925;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e16924){if((e16924 instanceof Error))
{var e__6096__auto__ = e16924;if((e__6096__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6096__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16924;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e16922){if((e16922 instanceof Error))
{var e__6096__auto__ = e16922;if((e__6096__auto__ === cljs.core.match.backtrack))
{return taoensso.encore.logf.call(null,"Unknown state: %s",cljs.core.pr_str.call(null,cljs.core.deref.call(null,shriek.app.state)));
} else
{throw e__6096__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16922;
} else
{return null;
}
}
}});
shriek.app.start = (function start(){shriek.app.snt_get_user_info.call(null);
cljs.core.reset_BANG_.call(null,shriek.app.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword(null,"top","top",1014019271)], null));
return shriek.app.board_view.call(null);
});
goog.exportSymbol('shriek.app.start', shriek.app.start);
window.onload = (function (){return enfocus.core.setTimeout.call(null,(function check__6950__auto__(){if((cljs.core.deref.call(null,enfocus.core.tpl_load_cnt) === 0))
{return shriek.app.refresh_page.call(null);
} else
{return enfocus.core.setTimeout.call(null,(function (){return check__6950__auto__.call(null);
}),10);
}
}),0);
});

//# sourceMappingURL=app.js.map