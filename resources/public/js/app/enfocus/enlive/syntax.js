// Compiled by ClojureScript 0.0-2173
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function sel_to_str(input){var item = cljs.core.first.call(null,input);var rest = cljs.core.rest.call(null,input);var end = ((cljs.core.empty_QMARK_.call(null,rest))?cljs.core.list(cljs.core.List.EMPTY):sel_to_str.call(null,rest));if((item instanceof cljs.core.Keyword))
{return cljs.core.map.call(null,(function (p1__10493_SHARP_){return cljs.core.conj.call(null,p1__10493_SHARP_,cljs.core.name.call(null,item));
}),end);
} else
{if(typeof item === 'string')
{return cljs.core.map.call(null,(function (p1__10494_SHARP_){return cljs.core.conj.call(null,p1__10494_SHARP_,item);
}),end);
} else
{if(cljs.core.set_QMARK_.call(null,item))
{return cljs.core.reduce.call(null,(function (r1,it){return cljs.core.concat.call(null,r1,cljs.core.map.call(null,(function (p1__10495_SHARP_){return cljs.core.conj.call(null,p1__10495_SHARP_,it);
}),end));
}),cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,sel_to_str.call(null,item)));
} else
{if(cljs.core.coll_QMARK_.call(null,item))
{var x1 = sel_to_str.call(null,item);var sub = cljs.core.map.call(null,((function (x1){
return (function (p1__10496_SHARP_){return cljs.core.apply.call(null,cljs.core.str,p1__10496_SHARP_);
});})(x1))
,sel_to_str.call(null,item));var iter__4160__auto__ = (function iter__10503(s__10504){return (new cljs.core.LazySeq(null,(function (){var s__10504__$1 = s__10504;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10504__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var s = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__10504__$1,s,xs__4579__auto__,temp__4092__auto__){
return (function iter__10505(s__10506){return (new cljs.core.LazySeq(null,((function (s__10504__$1,s,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__10506__$1 = s__10506;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10506__$1);if(temp__4092__auto____$1)
{var s__10506__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10506__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10506__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10508 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10507 = 0;while(true){
if((i__10507 < size__4159__auto__))
{var e = cljs.core._nth.call(null,c__4158__auto__,i__10507);cljs.core.chunk_append.call(null,b__10508,(function (){cljs.core.println.call(null,s,e);
return cljs.core.conj.call(null,e,s);
})());
{
var G__10509 = (i__10507 + 1);
i__10507 = G__10509;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10508),iter__10505.call(null,cljs.core.chunk_rest.call(null,s__10506__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10508),null);
}
} else
{var e = cljs.core.first.call(null,s__10506__$2);return cljs.core.cons.call(null,(function (){cljs.core.println.call(null,s,e);
return cljs.core.conj.call(null,e,s);
})(),iter__10505.call(null,cljs.core.rest.call(null,s__10506__$2)));
}
} else
{return null;
}
break;
}
});})(s__10504__$1,s,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__10504__$1,s,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,end));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__10503.call(null,cljs.core.rest.call(null,s__10504__$1)));
} else
{{
var G__10510 = cljs.core.rest.call(null,s__10504__$1);
s__10504__$1 = G__10510;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,sub);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return input;
} else
{return null;
}
}
}
}
}
});
enfocus.enlive.syntax.convert = (function convert(sel){if(typeof sel === 'string')
{return sel;
} else
{var temp__4090__auto__ = enfocus.enlive.syntax.sel_to_str.call(null,sel);if(cljs.core.truth_(temp__4090__auto__))
{var ors = temp__4090__auto__;return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.apply.call(null,cljs.core.concat,cljs.core.interpose.call(null,",",ors))));
} else
{return null;
}
}
});
enfocus.enlive.syntax.attr_pairs = (function attr_pairs(op,elms){var ts = (function (p__10513){var vec__10514 = p__10513;var x = cljs.core.nth.call(null,vec__10514,0,null);var y = cljs.core.nth.call(null,vec__10514,1,null);return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y),cljs.core.str("']")].join('');
});return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,cljs.core.partition.call(null,2,elms)));
});
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (elms){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__10515_SHARP_){return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,p1__10515_SHARP_)),cljs.core.str("]")].join('');
}),elms));
};
var attr_QMARK_ = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_QMARK___delegate.call(this,elms);};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__10516){
var elms = cljs.core.seq(arglist__10516);
return attr_QMARK___delegate(elms);
});
attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = attr_QMARK___delegate;
return attr_QMARK_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_EQ_ = (function() { 
var attr_EQ___delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"",elms);
};
var attr_EQ_ = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_EQ___delegate.call(this,elms);};
attr_EQ_.cljs$lang$maxFixedArity = 0;
attr_EQ_.cljs$lang$applyTo = (function (arglist__10517){
var elms = cljs.core.seq(arglist__10517);
return attr_EQ___delegate(elms);
});
attr_EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_EQ___delegate;
return attr_EQ_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_has = (function() { 
var attr_has__delegate = function (x,vals){var ts = (function (y){return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str("~='"),cljs.core.str(y),cljs.core.str("']")].join('');
});return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,vals));
};
var attr_has = function (x,var_args){
var vals = null;if (arguments.length > 1) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return attr_has__delegate.call(this,x,vals);};
attr_has.cljs$lang$maxFixedArity = 1;
attr_has.cljs$lang$applyTo = (function (arglist__10518){
var x = cljs.core.first(arglist__10518);
var vals = cljs.core.rest(arglist__10518);
return attr_has__delegate(x,vals);
});
attr_has.cljs$core$IFn$_invoke$arity$variadic = attr_has__delegate;
return attr_has;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_starts = (function() { 
var attr_starts__delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"^",elms);
};
var attr_starts = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_starts__delegate.call(this,elms);};
attr_starts.cljs$lang$maxFixedArity = 0;
attr_starts.cljs$lang$applyTo = (function (arglist__10519){
var elms = cljs.core.seq(arglist__10519);
return attr_starts__delegate(elms);
});
attr_starts.cljs$core$IFn$_invoke$arity$variadic = attr_starts__delegate;
return attr_starts;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_ends = (function() { 
var attr_ends__delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"$",elms);
};
var attr_ends = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_ends__delegate.call(this,elms);};
attr_ends.cljs$lang$maxFixedArity = 0;
attr_ends.cljs$lang$applyTo = (function (arglist__10520){
var elms = cljs.core.seq(arglist__10520);
return attr_ends__delegate(elms);
});
attr_ends.cljs$core$IFn$_invoke$arity$variadic = attr_ends__delegate;
return attr_ends;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_contains = (function() { 
var attr_contains__delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"*",elms);
};
var attr_contains = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_contains__delegate.call(this,elms);};
attr_contains.cljs$lang$maxFixedArity = 0;
attr_contains.cljs$lang$applyTo = (function (arglist__10521){
var elms = cljs.core.seq(arglist__10521);
return attr_contains__delegate(elms);
});
attr_contains.cljs$core$IFn$_invoke$arity$variadic = attr_contains__delegate;
return attr_contains;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_BAR__EQ_ = (function() { 
var attr_BAR__EQ___delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"|",elms);
};
var attr_BAR__EQ_ = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_BAR__EQ___delegate.call(this,elms);};
attr_BAR__EQ_.cljs$lang$maxFixedArity = 0;
attr_BAR__EQ_.cljs$lang$applyTo = (function (arglist__10522){
var elms = cljs.core.seq(arglist__10522);
return attr_BAR__EQ___delegate(elms);
});
attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_BAR__EQ___delegate;
return attr_BAR__EQ_;
})()
;
enfocus.enlive.syntax.nth_op = (function() {
var nth_op = null;
var nth_op__2 = (function (op,x){return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_op__3 = (function (op,x,y){return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str("n"),cljs.core.str((((y > 0))?"+":null)),cljs.core.str(y)].join('');
});
nth_op = function(op,x,y){
switch(arguments.length){
case 2:
return nth_op__2.call(this,op,x);
case 3:
return nth_op__3.call(this,op,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_op.cljs$core$IFn$_invoke$arity$2 = nth_op__2;
nth_op.cljs$core$IFn$_invoke$arity$3 = nth_op__3;
return nth_op;
})()
;
enfocus.enlive.syntax.nth_child = (function() {
var nth_child = null;
var nth_child__1 = (function (x){return enfocus.enlive.syntax.nth_op.call(null,"child",x);
});
var nth_child__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.call(null,"child",x,y);
});
nth_child = function(x,y){
switch(arguments.length){
case 1:
return nth_child__1.call(this,x);
case 2:
return nth_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_child.cljs$core$IFn$_invoke$arity$1 = nth_child__1;
nth_child.cljs$core$IFn$_invoke$arity$2 = nth_child__2;
return nth_child;
})()
;
enfocus.enlive.syntax.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__1 = (function (x){return enfocus.enlive.syntax.nth_op.call(null,"last-child",x);
});
var nth_last_child__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.call(null,"last-child",x,y);
});
nth_last_child = function(x,y){
switch(arguments.length){
case 1:
return nth_last_child__1.call(this,x);
case 2:
return nth_last_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_child.cljs$core$IFn$_invoke$arity$1 = nth_last_child__1;
nth_last_child.cljs$core$IFn$_invoke$arity$2 = nth_last_child__2;
return nth_last_child;
})()
;
enfocus.enlive.syntax.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__1 = (function (x){return enfocus.enlive.syntax.nth_op.call(null,"of-type",x);
});
var nth_of_type__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.call(null,"of-type",x,y);
});
nth_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_of_type__1.call(this,x);
case 2:
return nth_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_of_type.cljs$core$IFn$_invoke$arity$1 = nth_of_type__1;
nth_of_type.cljs$core$IFn$_invoke$arity$2 = nth_of_type__2;
return nth_of_type;
})()
;
enfocus.enlive.syntax.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__1 = (function (x){return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x);
});
var nth_last_of_type__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x,y);
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_last_of_type__1.call(this,x);
case 2:
return nth_last_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_of_type.cljs$core$IFn$_invoke$arity$1 = nth_last_of_type__1;
nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = nth_last_of_type__2;
return nth_last_of_type;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.but = (function() { 
var but__delegate = function (sel){return [cljs.core.str("not("),cljs.core.str(enfocus.enlive.syntax.convert.call(null,sel)),cljs.core.str(")")].join('');
};
var but = function (var_args){
var sel = null;if (arguments.length > 0) {
  sel = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return but__delegate.call(this,sel);};
but.cljs$lang$maxFixedArity = 0;
but.cljs$lang$applyTo = (function (arglist__10523){
var sel = cljs.core.seq(arglist__10523);
return but__delegate(sel);
});
but.cljs$core$IFn$_invoke$arity$variadic = but__delegate;
return but;
})()
;

//# sourceMappingURL=syntax.js.map