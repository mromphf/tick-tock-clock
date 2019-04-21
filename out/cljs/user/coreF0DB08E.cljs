(ns tick-tock-clock.core)
(require '[tick-tock-clock.shapes :as shp])

(shp/drawSolidCircle :x (/ shp/width 2) :y (/ shp/height 2) :radius 25)
(shp/drawEmptyCircle :x (/ shp/width 2) :y (/ shp/height 2) :radius 250)
