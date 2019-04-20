(ns tick-tock-clock.core)

(def width (.-innerWidth js/window))
(def height (.-innerHeight js/window))
(def pi (.-PI js/Math))
(def doublePi (* 2 pi))

(def canvas (.getElementById js/document "clock"))
(def context (.getContext canvas "2d"))
(set! (.-width canvas) width)
(set! (.-height canvas) height)

(defn drawSolidCircle [& {:keys [x y radius fill]}]
  (set! (.-lineWidth context) 10)
  (set! (.-fillStyle context) fill)
  (.beginPath context)
  (.arc context x y radius 0 doublePi)
  (.closePath context)
  (.fill context))

(defn drawEmptyCircle [& {:keys [x y radius fill]}]
  (set! (.-strokeStyle context) "#00f")
  (.beginPath context)
  (.arc context x y radius 0 doublePi)
  (.closePath context)
  (.stroke context))

(defn drawHand [pos]
  (set! (.-lineWidth context) 5)
  (.beginPath context)
  (.moveTo context 0 0)
  (.rotate context pos)
  (.lineTo context 0 (- (* 250 0.9)))
  (.stroke context)
  (.rotate context (- pos)))

(defn drawClock []
  (def now (js.Date.))
  (def hours (.getHours now))
  (def minutes (.getMinutes now))
  (def seconds (.getSeconds now))

  (drawSolidCircle :x 0 :y 0 :radius 250 :fill "#fff")
  (drawSolidCircle :x 0 :y 0 :radius 25 :fill "#00f")
  (drawEmptyCircle :x 0 :y 0 :radius 250 :fill "#00f")
  (drawHand (* seconds (/ pi 30))))

(.translate context (/ width 2) (/ height 2))
(js/setInterval drawClock 1000)
