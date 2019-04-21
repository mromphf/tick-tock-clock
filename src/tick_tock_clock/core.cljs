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

(defn drawHand [& {:keys [pos radius len wid]}]
  (set! (.-lineWidth context) wid)
  (set! (.-lineCap context) "round")
  (.beginPath context)
  (.moveTo context 0 0)
  (.rotate context pos)
  (.lineTo context 0 (- (* radius len)))
  (.stroke context)
  (.rotate context (- pos)))

(defn drawSingleHours [n radius]
  (def ang (* n (/ pi 6)))
  (.rotate context ang)
  (.beginPath context)
  (.moveTo context 0 (- (* radius 0.85)))
  (.lineTo context 0 (-  radius))
  (.stroke context)
  (.closePath context)
  (.rotate context (- ang)))

(defn drawHours [radius]
  (set! (.-lineWidth context) 10)
  (set! (.-lineCap context) "round")
  (set! (.-strokeStyle context) "#00f")
  (def nums (map inc (range 12)))
  (doseq [n nums] (drawSingleHours n radius)))

(defn drawClock []
  (def now (js.Date.))
  (def hours (.getHours now))
  (def minutes (.getMinutes now))
  (def seconds (.getSeconds now))

  (drawSolidCircle :radius rad :fill "#fff")
  (drawSolidCircle :radius (* 0.1 rad) :fill "#00f")
  (drawEmptyCircle :radius rad :fill "#00f")
  (drawHours rad)
  (drawHand :pos (mod (+ (* hours (/ pi 6)) 
                       (* minutes (/ pi (* 6 60)))
                       (* seconds (/ pi (* 360 60)))) 12) 
            :radius rad :len 0.6 :wid 10)
  (drawHand :pos (+ (* minutes (/ pi 30))
                    (* seconds (/ pi (* 60 30)))) 
            :radius rad :len 0.75 :wid 8)
  (drawHand :pos (* seconds (/ pi 30)) :radius rad :len 0.9 :wid 5))

(.translate context (/ width 2) (/ height 2))
(js/setInterval drawClock 1000)
