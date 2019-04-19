(ns tick-tock-clock.core)

(def width (.-innerWidth js/window))
(def height (.-innerHeight js/window))
(def doublePi (* 2 (.-PI js/Math)))

(def canvas (.getElementById js/document "clock"))
(def context (.getContext canvas "2d"))
(set! (.-width canvas) width)
(set! (.-height canvas) height)
(set! (.-lineWidth context) 5)
(set! (.-fillStyle context) "#00f")
(set! (.-strokeStyle context) "#00f")

(defn drawBigHand [& {:keys [x y]}]
  (.beginPath context)
  (.moveTo context x y)
  (.lineTo context x (- y 200))
  (.closePath context)
  (.stroke context))

(defn drawSolidCircle [& {:keys [x y radius]}]
  (.beginPath context)
  (.arc context x y radius 0 doublePi)
  (.closePath context)
  (.fill context))

(defn drawEmptyCircle [& {:keys [x y radius]}]
  (.beginPath context)
  (.arc context x y radius 0 doublePi)
  (.closePath context)
  (.stroke context))

(drawSolidCircle :x (/ width 2) :y (/ height 2) :radius 25)
(drawEmptyCircle :x (/ width 2) :y (/ height 2) :radius 250)
(drawBigHand :x (/ width 2) :y (/ height 2))
