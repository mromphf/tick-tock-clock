// Compiled by ClojureScript 1.10.516 {}
goog.provide('tick_tock_clock.shapes');
goog.require('cljs.core');
tick_tock_clock.shapes.width = window.innerWidth;
tick_tock_clock.shapes.height = window.onnerHeight;
tick_tock_clock.shapes.doublePi = ((2) * Math.PI);
tick_tock_clock.shapes.canvas = document.getElementById("clock");
tick_tock_clock.shapes.context = tick_tock_clock.shapes.canvas.getContext("2d");
tick_tock_clock.shapes.canvas.wodth = tick_tock_clock.shapes.width;
tick_tock_clock.shapes.canvas.height = tick_tock_clock.shapes.height;
tick_tock_clock.shapes.context.lineWidth = (5);
tick_tock_clock.shapes.context.fillStyle = "#00f";
tick_tock_clock.shapes.context.strokeStyle = "#00f";
tick_tock_clock.shapes.drawSolidCircle = (function tick_tock_clock$shapes$drawSolidCircle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1183 = arguments.length;
var i__4731__auto___1184 = (0);
while(true){
if((i__4731__auto___1184 < len__4730__auto___1183)){
args__4736__auto__.push((arguments[i__4731__auto___1184]));

var G__1185 = (i__4731__auto___1184 + (1));
i__4731__auto___1184 = G__1185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick_tock_clock.shapes.drawSolidCircle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick_tock_clock.shapes.drawSolidCircle.cljs$core$IFn$_invoke$arity$variadic = (function (p__1180){
var map__1181 = p__1180;
var map__1181__$1 = (((((!((map__1181 == null))))?(((((map__1181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1181):map__1181);
var x = cljs.core.get.call(null,map__1181__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1181__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.call(null,map__1181__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
tick_tock_clock.shapes.context.beginPath();

tick_tock_clock.shapes.context.arc(x,y,radius,(0),tick_tock_clock.shapes.doublePi);

tick_tock_clock.shapes.context.closePath();

return tick_tock_clock.shapes.context.fill();
});

tick_tock_clock.shapes.drawSolidCircle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick_tock_clock.shapes.drawSolidCircle.cljs$lang$applyTo = (function (seq1179){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1179));
});

tick_tock_clock.shapes.drawEmptyCircle = (function tick_tock_clock$shapes$drawEmptyCircle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1190 = arguments.length;
var i__4731__auto___1191 = (0);
while(true){
if((i__4731__auto___1191 < len__4730__auto___1190)){
args__4736__auto__.push((arguments[i__4731__auto___1191]));

var G__1192 = (i__4731__auto___1191 + (1));
i__4731__auto___1191 = G__1192;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick_tock_clock.shapes.drawEmptyCircle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick_tock_clock.shapes.drawEmptyCircle.cljs$core$IFn$_invoke$arity$variadic = (function (p__1187){
var map__1188 = p__1187;
var map__1188__$1 = (((((!((map__1188 == null))))?(((((map__1188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1188):map__1188);
var x = cljs.core.get.call(null,map__1188__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1188__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.call(null,map__1188__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
tick_tock_clock.shapes.context.beginPath();

tick_tock_clock.shapes.context.arc(x,y,radius,(0),tick_tock_clock.shapes.doublePi);

tick_tock_clock.shapes.context.closePath();

return tick_tock_clock.shapes.context.stroke();
});

tick_tock_clock.shapes.drawEmptyCircle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick_tock_clock.shapes.drawEmptyCircle.cljs$lang$applyTo = (function (seq1186){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1186));
});


//# sourceMappingURL=shapes.js.map
