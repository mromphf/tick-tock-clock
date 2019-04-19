(ns tick-tock-clock.core)

(def width (.-outerWidth js/window))
(def height (.-outerHeight js/window))

(def canvas (.getElementById js/document "clock"))
(def context (.getContext canvas "2d"))
(set! (.-height canvas) height)
(set! (.-width canvas) width)
(set! (.-fillStyle context) "#00f")

(.beginPath context)
(.arc context (/ width 2) (/ height 2) 25 0 (* 2 3.14))
(.closePath context)
(.fill context)
