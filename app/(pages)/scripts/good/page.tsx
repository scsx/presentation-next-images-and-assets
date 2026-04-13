"use client"

import Script from "next/script"
import { logScriptTime } from "@/app/utils/logScriptTime"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    THREE: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Plotly: any
  }
}

const cacheBust =
  typeof window !== "undefined" ? Date.now() : "0"

export default function GoodScript() {
  if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", () => {
      logScriptTime("DOM ready")
    })
  }

  return (
    <div className="bg-white">
      {/* Plotly */}
      <Script
        src={`https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js?v=${cacheBust}`}
        strategy="afterInteractive"
        onLoad={() => {
          logScriptTime("plotly script loaded")
        }}
      />

      {/* Three + lógica */}
      <Script
        src={`https://cdn.plot.ly/plotly-2.26.0.min.js?v=${cacheBust}`}
        strategy="afterInteractive"
        onLoad={() => {
          logScriptTime("three script loaded")

          logScriptTime("UI ready")

          // 🔒 garantir que Plotly já existe
          const waitForPlotly = () => {
            if (!window.Plotly) {
              requestAnimationFrame(waitForPlotly)
              return
            }

            logScriptTime("plotly start")

            // ✅ PLOTLY
            const plotData = [
              {
                x: [1, 2, 3, 4, 5],
                y: [1, 4, 9, 16, 25],
                type: 'scatter',
                mode: 'lines+markers'
              }
            ]

            window.Plotly.newPlot('plotly-chart', plotData)

            logScriptTime("plotly done")
          }

          waitForPlotly()

          logScriptTime("three start")

          // ✅ THREE
          const scene = new window.THREE.Scene()
          const camera = new window.THREE.PerspectiveCamera(
            75,
            300 / 200,
            0.1,
            1000
          )

          const renderer = new window.THREE.WebGLRenderer()
          renderer.setSize(300, 200)

          document
            .getElementById('three-container')!
            .appendChild(renderer.domElement)

          const geometry = new window.THREE.BoxGeometry(2, 2, 2)
          const material = new window.THREE.MeshBasicMaterial({
            color: 0x00ff00
          })
          const cube = new window.THREE.Mesh(geometry, material)

          scene.add(cube)
          camera.position.z = 5

          const animate = () => {
            requestAnimationFrame(animate)
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            renderer.render(scene, camera)
          }

          animate()

          logScriptTime("three running")
        }}
      />

      {/* UI */}
      <div className="flex gap-5 p-5">
        <div id="plotly-chart" className="flex-1" />
        <div id="three-container" className="w-80 h-52" />
      </div>

      <div id="timeline" className="font-mono p-8" />
    </div>
  )
}