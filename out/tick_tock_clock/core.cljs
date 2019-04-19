(ns tick-tock-clock.core)

(def width (.-outerWidth js/window))
(def height (.-outerHeight js/window))

(def canvas (.getElementById js/document "clock"))
(def context (.getContext canvas "2d"))
(set! (.-width canvas) width)
(set! (.-height canvas) height)
(set! (.-fillStyle context) "#00f")

(defn drawCircle [& {:keys [x y radius]}]
  (.beginPath context)
  (.arc context x y radius 0 (* 2 3.14))
  (.closePath context)
  (.fill context))

(drawCircle :x (/ width 2) :y (/ height 2) :radius 25)
