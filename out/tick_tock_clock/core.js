// Compiled by ClojureScript 1.10.516 {}
goog.provide('tick_tock_clock.core');
goog.require('cljs.core');
tick_tock_clock.core.width = window.outerWidth;
tick_tock_clock.core.height = window.outerHeight;
tick_tock_clock.core.canvas = document.getElementById("clock");
tick_tock_clock.core.context = tick_tock_clock.core.canvas.getContext("2d");
tick_tock_clock.core.canvas.width = tick_tock_clock.core.width;
tick_tock_clock.core.canvas.height = tick_tock_clock.core.height;
tick_tock_clock.core.context.fillStyle = "#00f";
tick_tock_clock.core.drawCircle = (function tick_tock_clock$core$drawCircle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1028 = arguments.length;
var i__4731__auto___1029 = (0);
while(true){
if((i__4731__auto___1029 < len__4730__auto___1028)){
args__4736__auto__.push((arguments[i__4731__auto___1029]));

var G__1030 = (i__4731__auto___1029 + (1));
i__4731__auto___1029 = G__1030;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick_tock_clock.core.drawCircle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick_tock_clock.core.drawCircle.cljs$core$IFn$_invoke$arity$variadic = (function (p__1025){
var map__1026 = p__1025;
var map__1026__$1 = (((((!((map__1026 == null))))?(((((map__1026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1026):map__1026);
var x = cljs.core.get.call(null,map__1026__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1026__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.call(null,map__1026__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
tick_tock_clock.core.context.beginPath();

tick_tock_clock.core.context.arc(x,y,radius,(0),((2) * 3.14));

tick_tock_clock.core.context.closePath();

return tick_tock_clock.core.context.fill();
});

tick_tock_clock.core.drawCircle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick_tock_clock.core.drawCircle.cljs$lang$applyTo = (function (seq1024){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1024));
});

tick_tock_clock.core.drawCircle.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(tick_tock_clock.core.width / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(tick_tock_clock.core.height / (2)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(25));

//# sourceMappingURL=core.js.map
