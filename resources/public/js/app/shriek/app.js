// Compiled by ClojureScript 0.0-2173
goog.provide('shriek.app');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('enfocus.core');
goog.require('enfocus.core');
shriek.app.logout_ok = (function logout_ok(r){return (window.location["href"] = "/login");
});
goog.exportSymbol('shriek.app.logout_ok', shriek.app.logout_ok);
shriek.app.logout_not_ok = (function logout_not_ok(p__5687){var map__5689 = p__5687;var map__5689__$1 = ((cljs.core.seq_QMARK_.call(null,map__5689))?cljs.core.apply.call(null,cljs.core.hash_map,map__5689):map__5689);var r = map__5689__$1;var status_text = cljs.core.get.call(null,map__5689__$1,new cljs.core.Keyword(null,"status-text","status-text",4371493274));var status = cljs.core.get.call(null,map__5689__$1,new cljs.core.Keyword(null,"status","status",4416389988));return console.log([cljs.core.str("Logout failed: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text),cljs.core.str("reponse"),cljs.core.str(cljs.core.pr_str.call(null,r))].join(''));
});
goog.exportSymbol('shriek.app.logout_not_ok', shriek.app.logout_not_ok);
shriek.app.try_process_logout = (function try_process_logout(){console.log("logout pressed!");
return ajax.core.GET.call(null,[cljs.core.str("/logout")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",1706707644),shriek.app.logout_ok,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),shriek.app.logout_not_ok], null));
});
goog.exportSymbol('shriek.app.try_process_logout', shriek.app.try_process_logout);
shriek.app.start = (function start(){return enfocus.core.at.call(null,"#main-content",enfocus.core.content.call(null,"\u0410 \u0442\u0443\u0442 \u0436\u0438\u0432\u0443\u0442 \u0434\u0440\u0430\u043A\u043E\u043D\u044B!"));
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