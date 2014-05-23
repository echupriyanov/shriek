// Compiled by ClojureScript 0.0-2173
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('chord.format');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
goog.require('chord.channels');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* @param {...*} var_args
*/
chord.client.on_close = (function() { 
var on_close__delegate = function (ws,read_ch,write_ch,p__21022){var vec__21095 = p__21022;var err_meta_channel = cljs.core.nth.call(null,vec__21095,0,null);return ws.onclose = (function (ev){var c__9013__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9014__auto__ = (function (){var switch__8998__auto__ = (function (state_21134){var state_val_21135 = (state_21134[1]);if((state_val_21135 === 1))
{var inst_21096 = (state_21134[7]);var inst_21096__$1 = ws.error_seen;var state_21134__$1 = (function (){var statearr_21136 = state_21134;(statearr_21136[7] = inst_21096__$1);
return statearr_21136;
})();if(cljs.core.truth_(inst_21096__$1))
{var statearr_21137_21167 = state_21134__$1;(statearr_21137_21167[1] = 2);
} else
{var statearr_21138_21168 = state_21134__$1;(statearr_21138_21168[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21135 === 2))
{var inst_21096 = (state_21134[7]);var state_21134__$1 = state_21134;var statearr_21139_21169 = state_21134__$1;(statearr_21139_21169[2] = inst_21096);
(statearr_21139_21169[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21135 === 3))
{var inst_21099 = ev.wasClean;var inst_21100 = cljs.core.not.call(null,inst_21099);var state_21134__$1 = state_21134;var statearr_21140_21170 = state_21134__$1;(statearr_21140_21170[2] = inst_21100);
(statearr_21140_21170[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21135 === 4))
{var inst_21102 = (state_21134[2]);var state_21134__$1 = state_21134;if(cljs.core.truth_(inst_21102))
{var statearr_21141_21171 = state_21134__$1;(statearr_21141_21171[1] = 5);
} else
{var statearr_21142_21172 = state_21134__$1;(statearr_21142_21172[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21135 === 5))
{var inst_21104 = [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"wasClean","wasClean",1500993618)];var inst_21105 = ev.reason;var inst_21106 = ev.code;var inst_21107 = ev.wasClean;var inst_21108 = [inst_21105,inst_21106,inst_21107];var inst_21109 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21104,inst_21108);var state_21134__$1 = (function (){var statearr_21143 = state_21134;(statearr_21143[8] = inst_21109);
return statearr_21143;
})();if(cljs.core.truth_(err_meta_channel))
{var statearr_21144_21173 = state_21134__$1;(statearr_21144_21173[1] = 8);
} else
{var statearr_21145_21174 = state_21134__$1;(statearr_21145_21174[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21135 === 6))
{var state_21134__$1 = state_21134;var statearr_21146_21175 = state_21134__$1;(statearr_21146_21175[2] = null);
(statearr_21146_21175[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21135 === 7))
{var inst_21130 = (state_21134[2]);var inst_21131 = cljs.core.async.close_BANG_.call(null,read_ch);var inst_21132 = cljs.core.async.close_BANG_.call(null,write_ch);var state_21134__$1 = (function (){var statearr_21147 = state_21134;(statearr_21147[9] = inst_21130);
(statearr_21147[10] = inst_21131);
return statearr_21147;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21134__$1,inst_21132);
} else
{if((state_val_21135 === 8))
{var inst_21109 = (state_21134[8]);var inst_21096 = (state_21134[7]);var inst_21114 = cljs.core.async.chan.call(null,1);var inst_21115 = (function (){var c__9013__auto____$1 = inst_21114;var error_desc = inst_21109;var error_seen_QMARK_ = inst_21096;return ((function (c__9013__auto____$1,error_desc,error_seen_QMARK_,inst_21109,inst_21096,inst_21114,state_val_21135){
return (function (){var f__9014__auto__ = (function (){var switch__8998__auto__ = ((function (c__9013__auto____$1,error_desc,error_seen_QMARK_,inst_21109,inst_21096,inst_21114,state_val_21135){
return (function (state_21112){var state_val_21113 = (state_21112[1]);if((state_val_21113 === 1))
{var state_21112__$1 = state_21112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21112__$1,error_desc);
} else
{return null;
}
});})(c__9013__auto____$1,error_desc,error_seen_QMARK_,inst_21109,inst_21096,inst_21114,state_val_21135))
;return ((function (switch__8998__auto__,c__9013__auto____$1,error_desc,error_seen_QMARK_,inst_21109,inst_21096,inst_21114,state_val_21135){
return (function() {
var state_machine__8999__auto__ = null;
var state_machine__8999__auto____0 = (function (){var statearr_21151 = [null,null,null,null,null,null,null];(statearr_21151[0] = state_machine__8999__auto__);
(statearr_21151[1] = 1);
return statearr_21151;
});
var state_machine__8999__auto____1 = (function (state_21112){while(true){
var ret_value__9000__auto__ = (function (){try{while(true){
var result__9001__auto__ = switch__8998__auto__.call(null,state_21112);if(cljs.core.keyword_identical_QMARK_.call(null,result__9001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9001__auto__;
}
break;
}
}catch (e21152){if((e21152 instanceof Object))
{var ex__9002__auto__ = e21152;var statearr_21153_21176 = state_21112;(statearr_21153_21176[5] = ex__9002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21112);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21152;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21177 = state_21112;
state_21112 = G__21177;
continue;
}
} else
{return ret_value__9000__auto__;
}
break;
}
});
state_machine__8999__auto__ = function(state_21112){
switch(arguments.length){
case 0:
return state_machine__8999__auto____0.call(this);
case 1:
return state_machine__8999__auto____1.call(this,state_21112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8999__auto____0;
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8999__auto____1;
return state_machine__8999__auto__;
})()
;})(switch__8998__auto__,c__9013__auto____$1,error_desc,error_seen_QMARK_,inst_21109,inst_21096,inst_21114,state_val_21135))
})();var state__9015__auto__ = (function (){var statearr_21154 = f__9014__auto__.call(null);(statearr_21154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9013__auto____$1);
return statearr_21154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9015__auto__);
});
;})(c__9013__auto____$1,error_desc,error_seen_QMARK_,inst_21109,inst_21096,inst_21114,state_val_21135))
})();var inst_21116 = cljs.core.async.impl.dispatch.run.call(null,inst_21115);var inst_21118 = cljs.core.async.chan.call(null);var inst_21119 = cljs.core.async.close_BANG_.call(null,inst_21118);var inst_21120 = chord.channels.bidi_ch.call(null,inst_21114,inst_21118);var state_21134__$1 = (function (){var statearr_21155 = state_21134;(statearr_21155[11] = inst_21119);
(statearr_21155[12] = inst_21116);
return statearr_21155;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21134__$1,11,err_meta_channel,inst_21120);
} else
{if((state_val_21135 === 9))
{var state_21134__$1 = state_21134;var statearr_21156_21178 = state_21134__$1;(statearr_21156_21178[2] = null);
(statearr_21156_21178[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21135 === 10))
{var inst_21109 = (state_21134[8]);var inst_21125 = (state_21134[2]);var state_21134__$1 = (function (){var statearr_21157 = state_21134;(statearr_21157[13] = inst_21125);
return statearr_21157;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21134__$1,12,read_ch,inst_21109);
} else
{if((state_val_21135 === 11))
{var inst_21122 = (state_21134[2]);var state_21134__$1 = state_21134;var statearr_21158_21179 = state_21134__$1;(statearr_21158_21179[2] = inst_21122);
(statearr_21158_21179[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21135 === 12))
{var inst_21127 = (state_21134[2]);var state_21134__$1 = state_21134;var statearr_21159_21180 = state_21134__$1;(statearr_21159_21180[2] = inst_21127);
(statearr_21159_21180[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8998__auto__){
return (function() {
var state_machine__8999__auto__ = null;
var state_machine__8999__auto____0 = (function (){var statearr_21163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21163[0] = state_machine__8999__auto__);
(statearr_21163[1] = 1);
return statearr_21163;
});
var state_machine__8999__auto____1 = (function (state_21134){while(true){
var ret_value__9000__auto__ = (function (){try{while(true){
var result__9001__auto__ = switch__8998__auto__.call(null,state_21134);if(cljs.core.keyword_identical_QMARK_.call(null,result__9001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9001__auto__;
}
break;
}
}catch (e21164){if((e21164 instanceof Object))
{var ex__9002__auto__ = e21164;var statearr_21165_21181 = state_21134;(statearr_21165_21181[5] = ex__9002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21134);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21182 = state_21134;
state_21134 = G__21182;
continue;
}
} else
{return ret_value__9000__auto__;
}
break;
}
});
state_machine__8999__auto__ = function(state_21134){
switch(arguments.length){
case 0:
return state_machine__8999__auto____0.call(this);
case 1:
return state_machine__8999__auto____1.call(this,state_21134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8999__auto____0;
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8999__auto____1;
return state_machine__8999__auto__;
})()
;})(switch__8998__auto__))
})();var state__9015__auto__ = (function (){var statearr_21166 = f__9014__auto__.call(null);(statearr_21166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9013__auto__);
return statearr_21166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9015__auto__);
}));
return c__9013__auto__;
});
};
var on_close = function (ws,read_ch,write_ch,var_args){
var p__21022 = null;if (arguments.length > 3) {
  p__21022 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return on_close__delegate.call(this,ws,read_ch,write_ch,p__21022);};
on_close.cljs$lang$maxFixedArity = 3;
on_close.cljs$lang$applyTo = (function (arglist__21183){
var ws = cljs.core.first(arglist__21183);
arglist__21183 = cljs.core.next(arglist__21183);
var read_ch = cljs.core.first(arglist__21183);
arglist__21183 = cljs.core.next(arglist__21183);
var write_ch = cljs.core.first(arglist__21183);
var p__21022 = cljs.core.rest(arglist__21183);
return on_close__delegate(ws,read_ch,write_ch,p__21022);
});
on_close.cljs$core$IFn$_invoke$arity$variadic = on_close__delegate;
return on_close;
})()
;
chord.client.make_open_ch = (function make_open_ch(ws,read_ch,write_ch,v){var ch = cljs.core.async.chan.call(null);chord.client.on_close.call(null,ws,read_ch,write_ch,ch);
ws.onopen = (function (){var c__9013__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9014__auto__ = (function (){var switch__8998__auto__ = (function (state_21202){var state_val_21203 = (state_21202[1]);if((state_val_21203 === 2))
{var inst_21199 = (state_21202[2]);var inst_21200 = cljs.core.async.close_BANG_.call(null,ch);var state_21202__$1 = (function (){var statearr_21204 = state_21202;(statearr_21204[7] = inst_21199);
return statearr_21204;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21202__$1,inst_21200);
} else
{if((state_val_21203 === 1))
{var state_21202__$1 = state_21202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21202__$1,2,ch,v);
} else
{return null;
}
}
});return ((function (switch__8998__auto__){
return (function() {
var state_machine__8999__auto__ = null;
var state_machine__8999__auto____0 = (function (){var statearr_21208 = [null,null,null,null,null,null,null,null];(statearr_21208[0] = state_machine__8999__auto__);
(statearr_21208[1] = 1);
return statearr_21208;
});
var state_machine__8999__auto____1 = (function (state_21202){while(true){
var ret_value__9000__auto__ = (function (){try{while(true){
var result__9001__auto__ = switch__8998__auto__.call(null,state_21202);if(cljs.core.keyword_identical_QMARK_.call(null,result__9001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9001__auto__;
}
break;
}
}catch (e21209){if((e21209 instanceof Object))
{var ex__9002__auto__ = e21209;var statearr_21210_21212 = state_21202;(statearr_21210_21212[5] = ex__9002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21202);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21213 = state_21202;
state_21202 = G__21213;
continue;
}
} else
{return ret_value__9000__auto__;
}
break;
}
});
state_machine__8999__auto__ = function(state_21202){
switch(arguments.length){
case 0:
return state_machine__8999__auto____0.call(this);
case 1:
return state_machine__8999__auto____1.call(this,state_21202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8999__auto____0;
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8999__auto____1;
return state_machine__8999__auto__;
})()
;})(switch__8998__auto__))
})();var state__9015__auto__ = (function (){var statearr_21211 = f__9014__auto__.call(null);(statearr_21211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9013__auto__);
return statearr_21211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9015__auto__);
}));
return c__9013__auto__;
});
return ch;
});
chord.client.close_event__GT_maybe_error = (function close_event__GT_maybe_error(ev){if(cljs.core.truth_(ev.wasClean))
{return null;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",4373906870),ev.reason,new cljs.core.Keyword(null,"code","code",1016963423),ev.code], null);
}
});
/**
* Creates websockets connection and returns a 2-sided channel when the websocket is opened.
* Arguments:
* ws-url           - (required) link to websocket service
* opts             - (optional) map to configure reading/writing channels
* :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
* :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
* :format        - (optional) data format to use on the channel, (at the moment)
* either :edn (default), :json, :json-kw or :str.
* 
* Usage:
* (:require [cljs.core.async :as a])
* 
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437"))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
* :write-ch (a/chan (a/dropping-buffer 10))}))
* @param {...*} var_args
*/
chord.client.ws_ch = (function() { 
var ws_ch__delegate = function (ws_url,p__21216){var vec__21315 = p__21216;var map__21316 = cljs.core.nth.call(null,vec__21315,0,null);var map__21316__$1 = ((cljs.core.seq_QMARK_.call(null,map__21316))?cljs.core.apply.call(null,cljs.core.hash_map,map__21316):map__21316);var format = cljs.core.get.call(null,map__21316__$1,new cljs.core.Keyword(null,"format","format",4040092521));var write_ch = cljs.core.get.call(null,map__21316__$1,new cljs.core.Keyword(null,"write-ch","write-ch",3462353029));var read_ch = cljs.core.get.call(null,map__21316__$1,new cljs.core.Keyword(null,"read-ch","read-ch",2094260078));var web_socket = (new WebSocket(ws_url));var map__21317 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",2094260078),(function (){var or__3443__auto__ = read_ch;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",3462353029),(function (){var or__3443__auto__ = write_ch;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})()], null),format);var map__21317__$1 = ((cljs.core.seq_QMARK_.call(null,map__21317))?cljs.core.apply.call(null,cljs.core.hash_map,map__21317):map__21317);var write_ch__$1 = cljs.core.get.call(null,map__21317__$1,new cljs.core.Keyword(null,"write-ch","write-ch",3462353029));var read_ch__$1 = cljs.core.get.call(null,map__21317__$1,new cljs.core.Keyword(null,"read-ch","read-ch",2094260078));var open_ch = cljs.core.async.chan.call(null);var close_ch = cljs.core.async.chan.call(null);chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);
chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);
web_socket.onopen = (function (p1__21214_SHARP_){return cljs.core.async.put_BANG_.call(null,open_ch,p1__21214_SHARP_);
});
web_socket.onclose = (function (p1__21215_SHARP_){return cljs.core.async.put_BANG_.call(null,close_ch,p1__21215_SHARP_);
});
var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",1416548348),(function (){return web_socket.close();
})], null));var initial_ch = cljs.core.async.chan.call(null);var c__9013__auto___21413 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9014__auto__ = (function (){var switch__8998__auto__ = (function (state_21376){var state_val_21377 = (state_21376[1]);if((state_val_21377 === 1))
{var inst_21318 = false;var state_21376__$1 = (function (){var statearr_21378 = state_21376;(statearr_21378[7] = inst_21318);
return statearr_21378;
})();var statearr_21379_21414 = state_21376__$1;(statearr_21379_21414[2] = null);
(statearr_21379_21414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 2))
{var inst_21325 = [open_ch,close_ch];var inst_21326 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21325,null));var state_21376__$1 = state_21376;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21376__$1,4,inst_21326);
} else
{if((state_val_21377 === 3))
{var inst_21374 = (state_21376[2]);var state_21376__$1 = state_21376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21376__$1,inst_21374);
} else
{if((state_val_21377 === 4))
{var inst_21330 = (state_21376[8]);var inst_21328 = (state_21376[9]);var inst_21328__$1 = (state_21376[2]);var inst_21329 = cljs.core.nth.call(null,inst_21328__$1,0,null);var inst_21330__$1 = cljs.core.nth.call(null,inst_21328__$1,1,null);var inst_21331 = cljs.core._EQ_.call(null,inst_21330__$1,open_ch);var state_21376__$1 = (function (){var statearr_21380 = state_21376;(statearr_21380[8] = inst_21330__$1);
(statearr_21380[9] = inst_21328__$1);
(statearr_21380[10] = inst_21329);
return statearr_21380;
})();if(inst_21331)
{var statearr_21381_21415 = state_21376__$1;(statearr_21381_21415[1] = 5);
} else
{var statearr_21382_21416 = state_21376__$1;(statearr_21382_21416[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 5))
{var inst_21328 = (state_21376[9]);var inst_21334 = cljs.core.nth.call(null,inst_21328,0,null);var inst_21335 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",3555772036)];var inst_21336 = [ws_chan];var inst_21337 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21335,inst_21336);var state_21376__$1 = (function (){var statearr_21383 = state_21376;(statearr_21383[11] = inst_21334);
return statearr_21383;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21376__$1,8,initial_ch,inst_21337);
} else
{if((state_val_21377 === 6))
{var inst_21330 = (state_21376[8]);var inst_21343 = cljs.core._EQ_.call(null,inst_21330,close_ch);var state_21376__$1 = state_21376;if(inst_21343)
{var statearr_21384_21417 = state_21376__$1;(statearr_21384_21417[1] = 9);
} else
{var statearr_21385_21418 = state_21376__$1;(statearr_21385_21418[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 7))
{var inst_21372 = (state_21376[2]);var state_21376__$1 = state_21376;var statearr_21386_21419 = state_21376__$1;(statearr_21386_21419[2] = inst_21372);
(statearr_21386_21419[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 8))
{var inst_21339 = (state_21376[2]);var inst_21340 = cljs.core.async.close_BANG_.call(null,initial_ch);var inst_21318 = true;var state_21376__$1 = (function (){var statearr_21387 = state_21376;(statearr_21387[12] = inst_21340);
(statearr_21387[7] = inst_21318);
(statearr_21387[13] = inst_21339);
return statearr_21387;
})();var statearr_21388_21420 = state_21376__$1;(statearr_21388_21420[2] = null);
(statearr_21388_21420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 9))
{var inst_21328 = (state_21376[9]);var inst_21347 = (state_21376[14]);var inst_21346 = cljs.core.nth.call(null,inst_21328,0,null);var inst_21347__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_21346);var state_21376__$1 = (function (){var statearr_21389 = state_21376;(statearr_21389[14] = inst_21347__$1);
return statearr_21389;
})();if(cljs.core.truth_(inst_21347__$1))
{var statearr_21390_21421 = state_21376__$1;(statearr_21390_21421[1] = 12);
} else
{var statearr_21391_21422 = state_21376__$1;(statearr_21391_21422[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 10))
{var inst_21330 = (state_21376[8]);var inst_21364 = cljs.core._EQ_.call(null,inst_21330,new cljs.core.Keyword(null,"default","default",2558708147));var state_21376__$1 = state_21376;if(inst_21364)
{var statearr_21392_21423 = state_21376__$1;(statearr_21392_21423[1] = 19);
} else
{var statearr_21393_21424 = state_21376__$1;(statearr_21393_21424[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 11))
{var inst_21370 = (state_21376[2]);var state_21376__$1 = state_21376;var statearr_21394_21425 = state_21376__$1;(statearr_21394_21425[2] = inst_21370);
(statearr_21394_21425[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 12))
{var inst_21318 = (state_21376[7]);var state_21376__$1 = state_21376;if(cljs.core.truth_(inst_21318))
{var statearr_21395_21426 = state_21376__$1;(statearr_21395_21426[1] = 16);
} else
{var statearr_21396_21427 = state_21376__$1;(statearr_21396_21427[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 13))
{var state_21376__$1 = state_21376;var statearr_21397_21428 = state_21376__$1;(statearr_21397_21428[2] = null);
(statearr_21397_21428[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 14))
{var inst_21360 = (state_21376[2]);var inst_21361 = cljs.core.async.close_BANG_.call(null,ws_chan);var inst_21362 = cljs.core.async.close_BANG_.call(null,initial_ch);var state_21376__$1 = (function (){var statearr_21398 = state_21376;(statearr_21398[15] = inst_21361);
(statearr_21398[16] = inst_21360);
return statearr_21398;
})();var statearr_21399_21429 = state_21376__$1;(statearr_21399_21429[2] = inst_21362);
(statearr_21399_21429[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 15))
{var inst_21357 = (state_21376[2]);var state_21376__$1 = state_21376;var statearr_21400_21430 = state_21376__$1;(statearr_21400_21430[2] = inst_21357);
(statearr_21400_21430[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 16))
{var state_21376__$1 = state_21376;var statearr_21401_21431 = state_21376__$1;(statearr_21401_21431[2] = read_ch__$1);
(statearr_21401_21431[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 17))
{var state_21376__$1 = state_21376;var statearr_21402_21432 = state_21376__$1;(statearr_21402_21432[2] = initial_ch);
(statearr_21402_21432[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 18))
{var inst_21347 = (state_21376[14]);var inst_21352 = (state_21376[2]);var inst_21353 = [new cljs.core.Keyword(null,"error","error",1110689146)];var inst_21354 = [inst_21347];var inst_21355 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21353,inst_21354);var state_21376__$1 = state_21376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21376__$1,15,inst_21352,inst_21355);
} else
{if((state_val_21377 === 19))
{var inst_21329 = (state_21376[10]);var state_21376__$1 = state_21376;var statearr_21403_21433 = state_21376__$1;(statearr_21403_21433[2] = inst_21329);
(statearr_21403_21433[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 20))
{var state_21376__$1 = state_21376;var statearr_21404_21434 = state_21376__$1;(statearr_21404_21434[2] = null);
(statearr_21404_21434[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21377 === 21))
{var inst_21368 = (state_21376[2]);var state_21376__$1 = state_21376;var statearr_21405_21435 = state_21376__$1;(statearr_21405_21435[2] = inst_21368);
(statearr_21405_21435[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8998__auto__){
return (function() {
var state_machine__8999__auto__ = null;
var state_machine__8999__auto____0 = (function (){var statearr_21409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21409[0] = state_machine__8999__auto__);
(statearr_21409[1] = 1);
return statearr_21409;
});
var state_machine__8999__auto____1 = (function (state_21376){while(true){
var ret_value__9000__auto__ = (function (){try{while(true){
var result__9001__auto__ = switch__8998__auto__.call(null,state_21376);if(cljs.core.keyword_identical_QMARK_.call(null,result__9001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9001__auto__;
}
break;
}
}catch (e21410){if((e21410 instanceof Object))
{var ex__9002__auto__ = e21410;var statearr_21411_21436 = state_21376;(statearr_21411_21436[5] = ex__9002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21376);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21410;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21437 = state_21376;
state_21376 = G__21437;
continue;
}
} else
{return ret_value__9000__auto__;
}
break;
}
});
state_machine__8999__auto__ = function(state_21376){
switch(arguments.length){
case 0:
return state_machine__8999__auto____0.call(this);
case 1:
return state_machine__8999__auto____1.call(this,state_21376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8999__auto____0;
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8999__auto____1;
return state_machine__8999__auto__;
})()
;})(switch__8998__auto__))
})();var state__9015__auto__ = (function (){var statearr_21412 = f__9014__auto__.call(null);(statearr_21412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9013__auto___21413);
return statearr_21412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9015__auto__);
}));
return initial_ch;
};
var ws_ch = function (ws_url,var_args){
var p__21216 = null;if (arguments.length > 1) {
  p__21216 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ws_ch__delegate.call(this,ws_url,p__21216);};
ws_ch.cljs$lang$maxFixedArity = 1;
ws_ch.cljs$lang$applyTo = (function (arglist__21438){
var ws_url = cljs.core.first(arglist__21438);
var p__21216 = cljs.core.rest(arglist__21438);
return ws_ch__delegate(ws_url,p__21216);
});
ws_ch.cljs$core$IFn$_invoke$arity$variadic = ws_ch__delegate;
return ws_ch;
})()
;

//# sourceMappingURL=client.js.map