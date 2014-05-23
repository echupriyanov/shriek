// Compiled by ClojureScript 0.0-2173
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
chord.channels.read_from_ws_BANG_ = (function read_from_ws_BANG_(ws,ch){return ws.onmessage = (function (ev){var message = ev.data;return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function write_to_ws_BANG_(ws,ch){var c__9013__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9014__auto__ = (function (){var switch__8998__auto__ = (function (state_21480){var state_val_21481 = (state_21480[1]);if((state_val_21481 === 7))
{var inst_21476 = (state_21480[2]);var state_21480__$1 = state_21480;var statearr_21482_21497 = state_21480__$1;(statearr_21482_21497[2] = inst_21476);
(statearr_21482_21497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21481 === 6))
{var state_21480__$1 = state_21480;var statearr_21483_21498 = state_21480__$1;(statearr_21483_21498[2] = null);
(statearr_21483_21498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21481 === 5))
{var inst_21470 = (state_21480[7]);var inst_21472 = ws.send(inst_21470);var state_21480__$1 = (function (){var statearr_21484 = state_21480;(statearr_21484[8] = inst_21472);
return statearr_21484;
})();var statearr_21485_21499 = state_21480__$1;(statearr_21485_21499[2] = null);
(statearr_21485_21499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21481 === 4))
{var inst_21470 = (state_21480[7]);var inst_21470__$1 = (state_21480[2]);var state_21480__$1 = (function (){var statearr_21486 = state_21480;(statearr_21486[7] = inst_21470__$1);
return statearr_21486;
})();if(cljs.core.truth_(inst_21470__$1))
{var statearr_21487_21500 = state_21480__$1;(statearr_21487_21500[1] = 5);
} else
{var statearr_21488_21501 = state_21480__$1;(statearr_21488_21501[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21481 === 3))
{var inst_21478 = (state_21480[2]);var state_21480__$1 = state_21480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21480__$1,inst_21478);
} else
{if((state_val_21481 === 2))
{var state_21480__$1 = state_21480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21480__$1,4,ch);
} else
{if((state_val_21481 === 1))
{var state_21480__$1 = state_21480;var statearr_21489_21502 = state_21480__$1;(statearr_21489_21502[2] = null);
(statearr_21489_21502[1] = 2);
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
});return ((function (switch__8998__auto__){
return (function() {
var state_machine__8999__auto__ = null;
var state_machine__8999__auto____0 = (function (){var statearr_21493 = [null,null,null,null,null,null,null,null,null];(statearr_21493[0] = state_machine__8999__auto__);
(statearr_21493[1] = 1);
return statearr_21493;
});
var state_machine__8999__auto____1 = (function (state_21480){while(true){
var ret_value__9000__auto__ = (function (){try{while(true){
var result__9001__auto__ = switch__8998__auto__.call(null,state_21480);if(cljs.core.keyword_identical_QMARK_.call(null,result__9001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9001__auto__;
}
break;
}
}catch (e21494){if((e21494 instanceof Object))
{var ex__9002__auto__ = e21494;var statearr_21495_21503 = state_21480;(statearr_21495_21503[5] = ex__9002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21480);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21504 = state_21480;
state_21480 = G__21504;
continue;
}
} else
{return ret_value__9000__auto__;
}
break;
}
});
state_machine__8999__auto__ = function(state_21480){
switch(arguments.length){
case 0:
return state_machine__8999__auto____0.call(this);
case 1:
return state_machine__8999__auto____1.call(this,state_21480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8999__auto____0;
state_machine__8999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8999__auto____1;
return state_machine__8999__auto__;
})()
;})(switch__8998__auto__))
})();var state__9015__auto__ = (function (){var statearr_21496 = f__9014__auto__.call(null);(statearr_21496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9013__auto__);
return statearr_21496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9015__auto__);
}));
return c__9013__auto__;
});
/**
* @param {...*} var_args
*/
chord.channels.bidi_ch = (function() { 
var bidi_ch__delegate = function (read_ch,write_ch,p__21505){var vec__21511 = p__21505;var map__21512 = cljs.core.nth.call(null,vec__21511,0,null);var map__21512__$1 = ((cljs.core.seq_QMARK_.call(null,map__21512))?cljs.core.apply.call(null,cljs.core.hash_map,map__21512):map__21512);var on_close = cljs.core.get.call(null,map__21512__$1,new cljs.core.Keyword(null,"on-close","on-close",1416548348));if(typeof chord.channels.t21513 !== 'undefined')
{} else
{
/**
* @constructor
*/
chord.channels.t21513 = (function (on_close,map__21512,vec__21511,p__21505,write_ch,read_ch,bidi_ch,meta21514){
this.on_close = on_close;
this.map__21512 = map__21512;
this.vec__21511 = vec__21511;
this.p__21505 = p__21505;
this.write_ch = write_ch;
this.read_ch = read_ch;
this.bidi_ch = bidi_ch;
this.meta21514 = meta21514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.channels.t21513.cljs$lang$type = true;
chord.channels.t21513.cljs$lang$ctorStr = "chord.channels/t21513";
chord.channels.t21513.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"chord.channels/t21513");
});
chord.channels.t21513.prototype.cljs$core$async$impl$protocols$Channel$ = true;
chord.channels.t21513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);
if(cljs.core.truth_(self__.on_close))
{return self__.on_close.call(null);
} else
{return null;
}
});
chord.channels.t21513.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
chord.channels.t21513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});
chord.channels.t21513.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
chord.channels.t21513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});
chord.channels.t21513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21515){var self__ = this;
var _21515__$1 = this;return self__.meta21514;
});
chord.channels.t21513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21515,meta21514__$1){var self__ = this;
var _21515__$1 = this;return (new chord.channels.t21513(self__.on_close,self__.map__21512,self__.vec__21511,self__.p__21505,self__.write_ch,self__.read_ch,self__.bidi_ch,meta21514__$1));
});
chord.channels.__GT_t21513 = (function __GT_t21513(on_close__$1,map__21512__$2,vec__21511__$1,p__21505__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta21514){return (new chord.channels.t21513(on_close__$1,map__21512__$2,vec__21511__$1,p__21505__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta21514));
});
}
return (new chord.channels.t21513(on_close,map__21512__$1,vec__21511,p__21505,write_ch,read_ch,bidi_ch,null));
};
var bidi_ch = function (read_ch,write_ch,var_args){
var p__21505 = null;if (arguments.length > 2) {
  p__21505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return bidi_ch__delegate.call(this,read_ch,write_ch,p__21505);};
bidi_ch.cljs$lang$maxFixedArity = 2;
bidi_ch.cljs$lang$applyTo = (function (arglist__21516){
var read_ch = cljs.core.first(arglist__21516);
arglist__21516 = cljs.core.next(arglist__21516);
var write_ch = cljs.core.first(arglist__21516);
var p__21505 = cljs.core.rest(arglist__21516);
return bidi_ch__delegate(read_ch,write_ch,p__21505);
});
bidi_ch.cljs$core$IFn$_invoke$arity$variadic = bidi_ch__delegate;
return bidi_ch;
})()
;

//# sourceMappingURL=channels.js.map