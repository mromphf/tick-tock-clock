(ns tick-tock-clock.core)

(def width (.-innerWidth js/window))
(def height (.-innerHeight js/window))
(def pi (.-PI js/Math))
(def doublePi (* 2 pi))
(def rad (* height 0.25))

(def canvas (.getElementById js/document "clock"))
(def context (.getContext canvas "2d"))
(set! (.-width canvas) width)
(set! (.-height canvas) height)

(defn drawSolidCircle [& {:keys [radius fill]}]
  (set! (.-lineWidth context) 10)
  (set! (.-fillStyle context) fill)
  (.beginPath context)
  (.arc context 0 0 radius 0 doublePi)
  (.closePath context)
  (.fill context))

(defn drawEmptyCircle [& {:keys [radius fill]}]
  (set! (.-strokeStyle context) "#00f")
  (.beginPath context)
  (.arc context 0 0 radius 0 doublePi)
  (.closePath context)
  (.stroke context))

(defn drawHand [& {:keys [pos radius len]}]
  (set! (.-lineWidth context) 5)
  (.beginPath context)
  (.moveTo context 0 0)
  (.rotate context pos)
  (.lineTo context 0 (- (* radius len)))
  (.stroke context)
  (.rotate context (- pos)))

(defn drawClock []
  (def now (js.Date.))
  (def hours (.getHours now))
  (def minutes (.getMinutes now))
  (def seconds (.getSeconds now))

  (drawSolidCircle :radius rad :fill "#fff")
  (drawSolidCircle :radius (* 0.1 rad) :fill "#00f")
  (drawEmptyCircle :radius rad :fill "#00f")
  (drawHand :pos (* seconds (/ pi 30)) :radius rad :len 0.9))

(.translate context (/ width 2) (/ height 2))
(js/setInterval drawClock 1000)
