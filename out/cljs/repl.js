// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1673){
var map__1674 = p__1673;
var map__1674__$1 = (((((!((map__1674 == null))))?(((((map__1674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1674):map__1674);
var m = map__1674__$1;
var n = cljs.core.get.call(null,map__1674__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1674__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1676_1708 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1677_1709 = null;
var count__1678_1710 = (0);
var i__1679_1711 = (0);
while(true){
if((i__1679_1711 < count__1678_1710)){
var f_1712 = cljs.core._nth.call(null,chunk__1677_1709,i__1679_1711);
cljs.core.println.call(null,"  ",f_1712);


var G__1713 = seq__1676_1708;
var G__1714 = chunk__1677_1709;
var G__1715 = count__1678_1710;
var G__1716 = (i__1679_1711 + (1));
seq__1676_1708 = G__1713;
chunk__1677_1709 = G__1714;
count__1678_1710 = G__1715;
i__1679_1711 = G__1716;
continue;
} else {
var temp__5720__auto___1717 = cljs.core.seq.call(null,seq__1676_1708);
if(temp__5720__auto___1717){
var seq__1676_1718__$1 = temp__5720__auto___1717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1676_1718__$1)){
var c__4550__auto___1719 = cljs.core.chunk_first.call(null,seq__1676_1718__$1);
var G__1720 = cljs.core.chunk_rest.call(null,seq__1676_1718__$1);
var G__1721 = c__4550__auto___1719;
var G__1722 = cljs.core.count.call(null,c__4550__auto___1719);
var G__1723 = (0);
seq__1676_1708 = G__1720;
chunk__1677_1709 = G__1721;
count__1678_1710 = G__1722;
i__1679_1711 = G__1723;
continue;
} else {
var f_1724 = cljs.core.first.call(null,seq__1676_1718__$1);
cljs.core.println.call(null,"  ",f_1724);


var G__1725 = cljs.core.next.call(null,seq__1676_1718__$1);
var G__1726 = null;
var G__1727 = (0);
var G__1728 = (0);
seq__1676_1708 = G__1725;
chunk__1677_1709 = G__1726;
count__1678_1710 = G__1727;
i__1679_1711 = G__1728;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1729 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1729);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1729)))?cljs.core.second.call(null,arglists_1729):arglists_1729));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1680_1730 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1681_1731 = null;
var count__1682_1732 = (0);
var i__1683_1733 = (0);
while(true){
if((i__1683_1733 < count__1682_1732)){
var vec__1694_1734 = cljs.core._nth.call(null,chunk__1681_1731,i__1683_1733);
var name_1735 = cljs.core.nth.call(null,vec__1694_1734,(0),null);
var map__1697_1736 = cljs.core.nth.call(null,vec__1694_1734,(1),null);
var map__1697_1737__$1 = (((((!((map__1697_1736 == null))))?(((((map__1697_1736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1697_1736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1697_1736):map__1697_1736);
var doc_1738 = cljs.core.get.call(null,map__1697_1737__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1739 = cljs.core.get.call(null,map__1697_1737__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1735);

cljs.core.println.call(null," ",arglists_1739);

if(cljs.core.truth_(doc_1738)){
cljs.core.println.call(null," ",doc_1738);
} else {
}


var G__1740 = seq__1680_1730;
var G__1741 = chunk__1681_1731;
var G__1742 = count__1682_1732;
var G__1743 = (i__1683_1733 + (1));
seq__1680_1730 = G__1740;
chunk__1681_1731 = G__1741;
count__1682_1732 = G__1742;
i__1683_1733 = G__1743;
continue;
} else {
var temp__5720__auto___1744 = cljs.core.seq.call(null,seq__1680_1730);
if(temp__5720__auto___1744){
var seq__1680_1745__$1 = temp__5720__auto___1744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1680_1745__$1)){
var c__4550__auto___1746 = cljs.core.chunk_first.call(null,seq__1680_1745__$1);
var G__1747 = cljs.core.chunk_rest.call(null,seq__1680_1745__$1);
var G__1748 = c__4550__auto___1746;
var G__1749 = cljs.core.count.call(null,c__4550__auto___1746);
var G__1750 = (0);
seq__1680_1730 = G__1747;
chunk__1681_1731 = G__1748;
count__1682_1732 = G__1749;
i__1683_1733 = G__1750;
continue;
} else {
var vec__1699_1751 = cljs.core.first.call(null,seq__1680_1745__$1);
var name_1752 = cljs.core.nth.call(null,vec__1699_1751,(0),null);
var map__1702_1753 = cljs.core.nth.call(null,vec__1699_1751,(1),null);
var map__1702_1754__$1 = (((((!((map__1702_1753 == null))))?(((((map__1702_1753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1702_1753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1702_1753):map__1702_1753);
var doc_1755 = cljs.core.get.call(null,map__1702_1754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1756 = cljs.core.get.call(null,map__1702_1754__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1752);

cljs.core.println.call(null," ",arglists_1756);

if(cljs.core.truth_(doc_1755)){
cljs.core.println.call(null," ",doc_1755);
} else {
}


var G__1757 = cljs.core.next.call(null,seq__1680_1745__$1);
var G__1758 = null;
var G__1759 = (0);
var G__1760 = (0);
seq__1680_1730 = G__1757;
chunk__1681_1731 = G__1758;
count__1682_1732 = G__1759;
i__1683_1733 = G__1760;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__1704 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1705 = null;
var count__1706 = (0);
var i__1707 = (0);
while(true){
if((i__1707 < count__1706)){
var role = cljs.core._nth.call(null,chunk__1705,i__1707);
var temp__5720__auto___1761__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1761__$1)){
var spec_1762 = temp__5720__auto___1761__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1762));
} else {
}


var G__1763 = seq__1704;
var G__1764 = chunk__1705;
var G__1765 = count__1706;
var G__1766 = (i__1707 + (1));
seq__1704 = G__1763;
chunk__1705 = G__1764;
count__1706 = G__1765;
i__1707 = G__1766;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__1704);
if(temp__5720__auto____$1){
var seq__1704__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1704__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1704__$1);
var G__1767 = cljs.core.chunk_rest.call(null,seq__1704__$1);
var G__1768 = c__4550__auto__;
var G__1769 = cljs.core.count.call(null,c__4550__auto__);
var G__1770 = (0);
seq__1704 = G__1767;
chunk__1705 = G__1768;
count__1706 = G__1769;
i__1707 = G__1770;
continue;
} else {
var role = cljs.core.first.call(null,seq__1704__$1);
var temp__5720__auto___1771__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1771__$2)){
var spec_1772 = temp__5720__auto___1771__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1772));
} else {
}


var G__1773 = cljs.core.next.call(null,seq__1704__$1);
var G__1774 = null;
var G__1775 = (0);
var G__1776 = (0);
seq__1704 = G__1773;
chunk__1705 = G__1774;
count__1706 = G__1775;
i__1707 = G__1776;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1777 = cljs.core.conj.call(null,via,t);
var G__1778 = cljs.core.ex_cause.call(null,t);
via = G__1777;
t = G__1778;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1781 = datafied_throwable;
var map__1781__$1 = (((((!((map__1781 == null))))?(((((map__1781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1781):map__1781);
var via = cljs.core.get.call(null,map__1781__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1781__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1781__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1782 = cljs.core.last.call(null,via);
var map__1782__$1 = (((((!((map__1782 == null))))?(((((map__1782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1782):map__1782);
var type = cljs.core.get.call(null,map__1782__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1782__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1782__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1783 = data;
var map__1783__$1 = (((((!((map__1783 == null))))?(((((map__1783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1783):map__1783);
var problems = cljs.core.get.call(null,map__1783__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1783__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1783__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1784 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1784__$1 = (((((!((map__1784 == null))))?(((((map__1784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1784):map__1784);
var top_data = map__1784__$1;
var source = cljs.core.get.call(null,map__1784__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1789 = phase;
var G__1789__$1 = (((G__1789 instanceof cljs.core.Keyword))?G__1789.fqn:null);
switch (G__1789__$1) {
case "read-source":
var map__1790 = data;
var map__1790__$1 = (((((!((map__1790 == null))))?(((((map__1790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1790):map__1790);
var line = cljs.core.get.call(null,map__1790__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1790__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1792 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1792__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1792,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1792);
var G__1792__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1792__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1792__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1792__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1792__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1793 = top_data;
var G__1793__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1793,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1793);
var G__1793__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1793__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1793__$1);
var G__1793__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1793__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1793__$2);
var G__1793__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1793__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1793__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1793__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1793__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1794 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1794,(0),null);
var method = cljs.core.nth.call(null,vec__1794,(1),null);
var file = cljs.core.nth.call(null,vec__1794,(2),null);
var line = cljs.core.nth.call(null,vec__1794,(3),null);
var G__1797 = top_data;
var G__1797__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1797,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1797);
var G__1797__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1797__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1797__$1);
var G__1797__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__1797__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1797__$2);
var G__1797__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1797__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1797__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1797__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1797__$4;
}

break;
case "execution":
var vec__1798 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1798,(0),null);
var method = cljs.core.nth.call(null,vec__1798,(1),null);
var file = cljs.core.nth.call(null,vec__1798,(2),null);
var line = cljs.core.nth.call(null,vec__1798,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__1798,source__$1,method,file,line,G__1789,G__1789__$1,map__1781,map__1781__$1,via,trace,phase,map__1782,map__1782__$1,type,message,data,map__1783,map__1783__$1,problems,fn,caller,map__1784,map__1784__$1,top_data,source){
return (function (p1__1780_SHARP_){
var or__4131__auto__ = (p1__1780_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1780_SHARP_);
}
});})(vec__1798,source__$1,method,file,line,G__1789,G__1789__$1,map__1781,map__1781__$1,via,trace,phase,map__1782,map__1782__$1,type,message,data,map__1783,map__1783__$1,problems,fn,caller,map__1784,map__1784__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__1801 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1801__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1801,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1801);
var G__1801__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1801__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1801__$1);
var G__1801__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1801__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1801__$2);
var G__1801__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1801__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1801__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1801__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1801__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1789__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1805){
var map__1806 = p__1805;
var map__1806__$1 = (((((!((map__1806 == null))))?(((((map__1806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1806):map__1806);
var triage_data = map__1806__$1;
var phase = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1808 = phase;
var G__1808__$1 = (((G__1808 instanceof cljs.core.Keyword))?G__1808.fqn:null);
switch (G__1808__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1809_1818 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1810_1819 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1811_1820 = true;
var _STAR_print_fn_STAR__temp_val__1812_1821 = ((function (_STAR_print_newline_STAR__orig_val__1809_1818,_STAR_print_fn_STAR__orig_val__1810_1819,_STAR_print_newline_STAR__temp_val__1811_1820,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1809_1818,_STAR_print_fn_STAR__orig_val__1810_1819,_STAR_print_newline_STAR__temp_val__1811_1820,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1811_1820;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1812_1821;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1809_1818,_STAR_print_fn_STAR__orig_val__1810_1819,_STAR_print_newline_STAR__temp_val__1811_1820,_STAR_print_fn_STAR__temp_val__1812_1821,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1809_1818,_STAR_print_fn_STAR__orig_val__1810_1819,_STAR_print_newline_STAR__temp_val__1811_1820,_STAR_print_fn_STAR__temp_val__1812_1821,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1803_SHARP_){
return cljs.core.dissoc.call(null,p1__1803_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1809_1818,_STAR_print_fn_STAR__orig_val__1810_1819,_STAR_print_newline_STAR__temp_val__1811_1820,_STAR_print_fn_STAR__temp_val__1812_1821,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1809_1818,_STAR_print_fn_STAR__orig_val__1810_1819,_STAR_print_newline_STAR__temp_val__1811_1820,_STAR_print_fn_STAR__temp_val__1812_1821,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1810_1819;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1809_1818;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1813_1822 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1814_1823 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1815_1824 = true;
var _STAR_print_fn_STAR__temp_val__1816_1825 = ((function (_STAR_print_newline_STAR__orig_val__1813_1822,_STAR_print_fn_STAR__orig_val__1814_1823,_STAR_print_newline_STAR__temp_val__1815_1824,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1813_1822,_STAR_print_fn_STAR__orig_val__1814_1823,_STAR_print_newline_STAR__temp_val__1815_1824,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1815_1824;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1816_1825;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1813_1822,_STAR_print_fn_STAR__orig_val__1814_1823,_STAR_print_newline_STAR__temp_val__1815_1824,_STAR_print_fn_STAR__temp_val__1816_1825,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1813_1822,_STAR_print_fn_STAR__orig_val__1814_1823,_STAR_print_newline_STAR__temp_val__1815_1824,_STAR_print_fn_STAR__temp_val__1816_1825,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1804_SHARP_){
return cljs.core.dissoc.call(null,p1__1804_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1813_1822,_STAR_print_fn_STAR__orig_val__1814_1823,_STAR_print_newline_STAR__temp_val__1815_1824,_STAR_print_fn_STAR__temp_val__1816_1825,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1813_1822,_STAR_print_fn_STAR__orig_val__1814_1823,_STAR_print_newline_STAR__temp_val__1815_1824,_STAR_print_fn_STAR__temp_val__1816_1825,sb__4661__auto__,G__1808,G__1808__$1,loc,class_name,simple_class,cause_type,format,map__1806,map__1806__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1814_1823;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1813_1822;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1808__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
