// Compiled by ClojureScript 0.0-2173
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
chord.format.try_read = (function try_read(read_fn){return (function (p__21520){var map__21521 = p__21520;var map__21521__$1 = ((cljs.core.seq_QMARK_.call(null,map__21521))?cljs.core.apply.call(null,cljs.core.hash_map,map__21521):map__21521);var data = map__21521__$1;var message = cljs.core.get.call(null,map__21521__$1,new cljs.core.Keyword(null,"message","message",1968829305));var error = cljs.core.get.call(null,map__21521__$1,new cljs.core.Keyword(null,"error","error",1110689146));if(cljs.core.truth_(error))
{return data;
} else
{try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),read_fn.call(null,message)], null);
}catch (e21522){if((e21522 instanceof Error))
{var e = e21522;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"invalid-format","invalid-format",3340275711),new cljs.core.Keyword(null,"cause","cause",1108338651),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",4354551325),message], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21522;
} else
{return null;
}
}
}}
});
});
chord.format.wrap_format = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("wrap-format",(function (chs,format){return format;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"edn","edn",1014004513),(function (p__21523,_){var map__21524 = p__21523;var map__21524__$1 = ((cljs.core.seq_QMARK_.call(null,map__21524))?cljs.core.apply.call(null,cljs.core.hash_map,map__21524):map__21524);var write_ch = cljs.core.get.call(null,map__21524__$1,new cljs.core.Keyword(null,"write-ch","write-ch",3462353029));var read_ch = cljs.core.get.call(null,map__21524__$1,new cljs.core.Keyword(null,"read-ch","read-ch",2094260078));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",2094260078),cljs.core.async.map_LT_.call(null,chord.format.try_read.call(null,cljs.reader.read_string),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",3462353029),cljs.core.async.map_GT_.call(null,cljs.core.pr_str,write_ch)], null);
}));
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"json","json",1017176154),(function (p__21525,_){var map__21526 = p__21525;var map__21526__$1 = ((cljs.core.seq_QMARK_.call(null,map__21526))?cljs.core.apply.call(null,cljs.core.hash_map,map__21526):map__21526);var write_ch = cljs.core.get.call(null,map__21526__$1,new cljs.core.Keyword(null,"write-ch","write-ch",3462353029));var read_ch = cljs.core.get.call(null,map__21526__$1,new cljs.core.Keyword(null,"read-ch","read-ch",2094260078));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",2094260078),cljs.core.async.map_LT_.call(null,chord.format.try_read.call(null,cljs.core.comp.call(null,cljs.core.js__GT_clj,JSON.parse)),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",3462353029),cljs.core.async.map_GT_.call(null,cljs.core.comp.call(null,JSON.stringify,cljs.core.clj__GT_js),write_ch)], null);
}));
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"json-kw","json-kw",3998200803),(function (chs,_){return cljs.core.update_in.call(null,chord.format.wrap_format.call(null,chs,new cljs.core.Keyword(null,"json","json",1017176154)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read-ch","read-ch",2094260078)], null),(function (p1__21527_SHARP_){return cljs.core.async.map_LT_.call(null,clojure.walk.keywordize_keys,p1__21527_SHARP_);
}));
}));
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"str","str",1014018467),(function (chs,_){return chs;
}));
cljs.core._add_method.call(null,chord.format.wrap_format,null,(function (chs,_){return chord.format.wrap_format.call(null,chs,new cljs.core.Keyword(null,"edn","edn",1014004513));
}));
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"default","default",2558708147),(function (chs,format){throw [cljs.core.str("ERROR: Invalid Chord channel format: "),cljs.core.str(format)].join('');
}));

//# sourceMappingURL=format.js.map