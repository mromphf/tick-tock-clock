// Compiled by ClojureScript 1.10.516 {}
goog.provide('tick_tock_clock.core');
goog.require('cljs.core');
tick_tock_clock.core.width = window.outerWidth;
tick_tock_clock.core.height = window.outerHeight;
tick_tock_clock.core.canvas = document.getElementById("clock");
tick_tock_clock.core.context = tick_tock_clock.core.canvas.getContext("2d");
tick_tock_clock.core.canvas.height = tick_tock_clock.core.height;
tick_tock_clock.core.canvas.width = tick_tock_clock.core.width;
tick_tock_clock.core.context.fillStyle = "#00f";
tick_tock_clock.core.context.beginPath();
tick_tock_clock.core.context.arc((tick_tock_clock.core.width / (2)),(tick_tock_clock.core.height / (2)),(25),(0),((2) * 3.14));
tick_tock_clock.core.context.closePath();
tick_tock_clock.core.context.fill();

//# sourceMappingURL=core.js.map
