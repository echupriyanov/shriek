// Compiled by ClojureScript 0.0-2173
goog.provide('shriek.login');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('enfocus.core');
goog.require('enfocus.core');
shriek.login.error_handler = (function error_handler(p__5496){var map__5498 = p__5496;var map__5498__$1 = ((cljs.core.seq_QMARK_.call(null,map__5498))?cljs.core.apply.call(null,cljs.core.hash_map,map__5498):map__5498);var status_text = cljs.core.get.call(null,map__5498__$1,new cljs.core.Keyword(null,"status-text","status-text",4371493274));var status = cljs.core.get.call(null,map__5498__$1,new cljs.core.Keyword(null,"status","status",4416389988));return console.log([cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
shriek.login.login_ok = (function login_ok(r){console.log([cljs.core.str("Login ok reponse "),cljs.core.str(cljs.core.pr_str.call(null,r))].join(''));
return (window.location["href"] = "/app");
});
goog.exportSymbol('shriek.login.login_ok', shriek.login.login_ok);
shriek.login.login_not_ok = (function login_not_ok(p__5499){var map__5501 = p__5499;var map__5501__$1 = ((cljs.core.seq_QMARK_.call(null,map__5501))?cljs.core.apply.call(null,cljs.core.hash_map,map__5501):map__5501);var r = map__5501__$1;var status_text = cljs.core.get.call(null,map__5501__$1,new cljs.core.Keyword(null,"status-text","status-text",4371493274));var status = cljs.core.get.call(null,map__5501__$1,new cljs.core.Keyword(null,"status","status",4416389988));return console.log([cljs.core.str("Login not ok: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text),cljs.core.str("reponse"),cljs.core.str(cljs.core.pr_str.call(null,r))].join(''));
});
goog.exportSymbol('shriek.login.login_not_ok', shriek.login.login_not_ok);
shriek.login.try_process_login = (function try_process_login(){console.log("signup pressed!");
return ajax.core.POST.call(null,[cljs.core.str("/login")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1017503549),enfocus.core.from.call(null,"#email",enfocus.core.read_form_input.call(null)),new cljs.core.Keyword(null,"pass","pass",1017337731),enfocus.core.from.call(null,"#password",enfocus.core.read_form_input.call(null))], null),new cljs.core.Keyword(null,"handler","handler",1706707644),shriek.login.login_ok,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),shriek.login.login_not_ok], null));
});
goog.exportSymbol('shriek.login.try_process_login', shriek.login.try_process_login);
shriek.login.start = (function start(){return enfocus.core.at.call(null,"#main-content",enfocus.core.content.call(null,"\u0421\u0442\u0440\u0430\u043D\u0438\u0447\u043A\u0430 \u0432\u0445\u043E\u0434\u0430!"));
});
window.onload = (function (){return enfocus.core.setTimeout.call(null,(function check__4486__auto__(){if((cljs.core.deref.call(null,enfocus.core.tpl_load_cnt) === 0))
{return shriek.login.start.call(null);
} else
{return enfocus.core.setTimeout.call(null,(function (){return check__4486__auto__.call(null);
}),10);
}
}),0);
});

//# sourceMappingURL=login.js.map