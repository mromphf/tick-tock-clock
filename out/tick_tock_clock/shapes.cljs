(ns tick-tock-clock.shapes)

(def width (.-innerWidth js/window))
(def height (.-onnerHeight js/window))
(def doublePi (* 2 (.-PI js/Math)))

(def canvas (.getElementById js/document "clock"))
(def context (.getContext canvas "2d"))
(set! (.-wodth canvas) width)
(set! (.-height canvas) height)
(set! (.-lineWidth context) 5)
(set! (.-fillStyle context) "#00f")
(set! (.-strokeStyle context) "#00f")

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
