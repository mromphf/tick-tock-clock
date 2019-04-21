// Compiled by ClojureScript 1.10.516 {}
goog.provide('tick_tock_clock.core');
goog.require('cljs.core');
tick_tock_clock.core.width = window.innerWidth;
tick_tock_clock.core.height = window.innerHeight;
tick_tock_clock.core.pi = Math.PI;
tick_tock_clock.core.doublePi = ((2) * tick_tock_clock.core.pi);
tick_tock_clock.core.rad = (tick_tock_clock.core.height * 0.25);
tick_tock_clock.core.fill = "#008B8B";
tick_tock_clock.core.white = "#fff";
tick_tock_clock.core.canvas = document.getElementById("clock");
tick_tock_clock.core.context = tick_tock_clock.core.canvas.getContext("2d");
tick_tock_clock.core.canvas.width = tick_tock_clock.core.width;
tick_tock_clock.core.canvas.height = tick_tock_clock.core.height;
tick_tock_clock.core.context.translate((tick_tock_clock.core.width / (2)),(tick_tock_clock.core.height / (2)));
tick_tock_clock.core.drawSolidCircle = (function tick_tock_clock$core$drawSolidCircle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1058 = arguments.length;
var i__4731__auto___1059 = (0);
while(true){
if((i__4731__auto___1059 < len__4730__auto___1058)){
args__4736__auto__.push((arguments[i__4731__auto___1059]));

var G__1060 = (i__4731__auto___1059 + (1));
i__4731__auto___1059 = G__1060;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick_tock_clock.core.drawSolidCircle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick_tock_clock.core.drawSolidCircle.cljs$core$IFn$_invoke$arity$variadic = (function (p__1055){
var map__1056 = p__1055;
var map__1056__$1 = (((((!((map__1056 == null))))?(((((map__1056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1056):map__1056);
var radius = cljs.core.get.call(null,map__1056__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var fill = cljs.core.get.call(null,map__1056__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
tick_tock_clock.core.context.lineWidth = (10);

tick_tock_clock.core.context.fillStyle = fill;

tick_tock_clock.core.context.beginPath();

tick_tock_clock.core.context.arc((0),(0),radius,(0),tick_tock_clock.core.doublePi);

tick_tock_clock.core.context.closePath();

return tick_tock_clock.core.context.fill();
});

tick_tock_clock.core.drawSolidCircle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick_tock_clock.core.drawSolidCircle.cljs$lang$applyTo = (function (seq1054){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1054));
});

tick_tock_clock.core.drawEmptyCircle = (function tick_tock_clock$core$drawEmptyCircle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1065 = arguments.length;
var i__4731__auto___1066 = (0);
while(true){
if((i__4731__auto___1066 < len__4730__auto___1065)){
args__4736__auto__.push((arguments[i__4731__auto___1066]));

var G__1067 = (i__4731__auto___1066 + (1));
i__4731__auto___1066 = G__1067;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick_tock_clock.core.drawEmptyCircle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick_tock_clock.core.drawEmptyCircle.cljs$core$IFn$_invoke$arity$variadic = (function (p__1062){
var map__1063 = p__1062;
var map__1063__$1 = (((((!((map__1063 == null))))?(((((map__1063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1063):map__1063);
var radius = cljs.core.get.call(null,map__1063__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var fill = cljs.core.get.call(null,map__1063__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
tick_tock_clock.core.context.strokeStyle = fill;

tick_tock_clock.core.context.beginPath();

tick_tock_clock.core.context.arc((0),(0),radius,(0),tick_tock_clock.core.doublePi);

tick_tock_clock.core.context.closePath();

return tick_tock_clock.core.context.stroke();
});

tick_tock_clock.core.drawEmptyCircle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick_tock_clock.core.drawEmptyCircle.cljs$lang$applyTo = (function (seq1061){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1061));
});

tick_tock_clock.core.drawHand = (function tick_tock_clock$core$drawHand(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1072 = arguments.length;
var i__4731__auto___1073 = (0);
while(true){
if((i__4731__auto___1073 < len__4730__auto___1072)){
args__4736__auto__.push((arguments[i__4731__auto___1073]));

var G__1074 = (i__4731__auto___1073 + (1));
i__4731__auto___1073 = G__1074;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick_tock_clock.core.drawHand.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick_tock_clock.core.drawHand.cljs$core$IFn$_invoke$arity$variadic = (function (p__1069){
var map__1070 = p__1069;
var map__1070__$1 = (((((!((map__1070 == null))))?(((((map__1070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1070):map__1070);
var pos = cljs.core.get.call(null,map__1070__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var radius = cljs.core.get.call(null,map__1070__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var len = cljs.core.get.call(null,map__1070__$1,new cljs.core.Keyword(null,"len","len",1423657078));
var wid = cljs.core.get.call(null,map__1070__$1,new cljs.core.Keyword(null,"wid","wid",-742032838));
tick_tock_clock.core.context.lineWidth = wid;

tick_tock_clock.core.context.lineCap = "round";

tick_tock_clock.core.context.beginPath();

tick_tock_clock.core.context.moveTo((0),(0));

tick_tock_clock.core.context.rotate(pos);

tick_tock_clock.core.context.lineTo((0),(- (radius * len)));

tick_tock_clock.core.context.stroke();

return tick_tock_clock.core.context.rotate((- pos));
});

tick_tock_clock.core.drawHand.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick_tock_clock.core.drawHand.cljs$lang$applyTo = (function (seq1068){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1068));
});

tick_tock_clock.core.drawSingleHours = (function tick_tock_clock$core$drawSingleHours(n,radius){
tick_tock_clock.core.ang = (n * (tick_tock_clock.core.pi / (6)));

tick_tock_clock.core.context.rotate(tick_tock_clock.core.ang);

tick_tock_clock.core.context.beginPath();

tick_tock_clock.core.context.moveTo((0),(- (radius * 0.85)));

tick_tock_clock.core.context.lineTo((0),(- radius));

tick_tock_clock.core.context.stroke();

tick_tock_clock.core.context.closePath();

return tick_tock_clock.core.context.rotate((- tick_tock_clock.core.ang));
});
tick_tock_clock.core.drawHours = (function tick_tock_clock$core$drawHours(radius){
tick_tock_clock.core.context.lineWidth = (10);

tick_tock_clock.core.context.lineCap = "round";

tick_tock_clock.core.context.strokeStyle = tick_tock_clock.core.fill;

tick_tock_clock.core.nums = cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,(12)));

var seq__1075 = cljs.core.seq.call(null,tick_tock_clock.core.nums);
var chunk__1076 = null;
var count__1077 = (0);
var i__1078 = (0);
while(true){
if((i__1078 < count__1077)){
var n = cljs.core._nth.call(null,chunk__1076,i__1078);
tick_tock_clock.core.drawSingleHours.call(null,n,radius);


var G__1079 = seq__1075;
var G__1080 = chunk__1076;
var G__1081 = count__1077;
var G__1082 = (i__1078 + (1));
seq__1075 = G__1079;
chunk__1076 = G__1080;
count__1077 = G__1081;
i__1078 = G__1082;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__1075);
if(temp__5720__auto__){
var seq__1075__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1075__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1075__$1);
var G__1083 = cljs.core.chunk_rest.call(null,seq__1075__$1);
var G__1084 = c__4550__auto__;
var G__1085 = cljs.core.count.call(null,c__4550__auto__);
var G__1086 = (0);
seq__1075 = G__1083;
chunk__1076 = G__1084;
count__1077 = G__1085;
i__1078 = G__1086;
continue;
} else {
var n = cljs.core.first.call(null,seq__1075__$1);
tick_tock_clock.core.drawSingleHours.call(null,n,radius);


var G__1087 = cljs.core.next.call(null,seq__1075__$1);
var G__1088 = null;
var G__1089 = (0);
var G__1090 = (0);
seq__1075 = G__1087;
chunk__1076 = G__1088;
count__1077 = G__1089;
i__1078 = G__1090;
continue;
}
} else {
return null;
}
}
break;
}
});
tick_tock_clock.core.drawClock = (function tick_tock_clock$core$drawClock(){
tick_tock_clock.core.now = (new Date());

tick_tock_clock.core.hours = tick_tock_clock.core.now.getHours();

tick_tock_clock.core.minutes = tick_tock_clock.core.now.getMinutes();

tick_tock_clock.core.seconds = tick_tock_clock.core.now.getSeconds();

tick_tock_clock.core.drawSolidCircle.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258),tick_tock_clock.core.rad,new cljs.core.Keyword(null,"fill","fill",883462889),tick_tock_clock.core.white);

tick_tock_clock.core.drawSolidCircle.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258),(0.1 * tick_tock_clock.core.rad),new cljs.core.Keyword(null,"fill","fill",883462889),tick_tock_clock.core.fill);

tick_tock_clock.core.drawEmptyCircle.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258),tick_tock_clock.core.rad,new cljs.core.Keyword(null,"fill","fill",883462889),tick_tock_clock.core.fill);

tick_tock_clock.core.drawHours.call(null,tick_tock_clock.core.rad);

tick_tock_clock.core.drawHand.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.mod.call(null,(((tick_tock_clock.core.hours * (tick_tock_clock.core.pi / (6))) + (tick_tock_clock.core.minutes * (tick_tock_clock.core.pi / ((6) * (60))))) + (tick_tock_clock.core.seconds * (tick_tock_clock.core.pi / ((360) * (60))))),(12)),new cljs.core.Keyword(null,"radius","radius",-2073122258),tick_tock_clock.core.rad,new cljs.core.Keyword(null,"len","len",1423657078),0.6,new cljs.core.Keyword(null,"wid","wid",-742032838),(10));

tick_tock_clock.core.drawHand.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),((tick_tock_clock.core.minutes * (tick_tock_clock.core.pi / (30))) + (tick_tock_clock.core.seconds * (tick_tock_clock.core.pi / ((60) * (30))))),new cljs.core.Keyword(null,"radius","radius",-2073122258),tick_tock_clock.core.rad,new cljs.core.Keyword(null,"len","len",1423657078),0.75,new cljs.core.Keyword(null,"wid","wid",-742032838),(8));

return tick_tock_clock.core.drawHand.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),(tick_tock_clock.core.seconds * (tick_tock_clock.core.pi / (30))),new cljs.core.Keyword(null,"radius","radius",-2073122258),tick_tock_clock.core.rad,new cljs.core.Keyword(null,"len","len",1423657078),0.9,new cljs.core.Keyword(null,"wid","wid",-742032838),(5));
});
setInterval(tick_tock_clock.core.drawClock,(1000));

//# sourceMappingURL=core.js.map
