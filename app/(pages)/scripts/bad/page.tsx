"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    THREE: any
    Plotly: any
  }
}

export default function BadScript() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const loadScripts = async () => {
      await Promise.all([
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"),
        loadScript("https://cdn.plot.ly/plotly-2.26.0.min.js")
      ])

      document.getElementById('status')!.innerText = 'UI Ready'

      // PLOTLY
      const plotData = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 4, 9, 16, 25],
        type: 'scatter',
        mode: 'lines+markers'
      }]

      window.Plotly.newPlot('plotly-chart', plotData)

      // THREE
      const scene = new window.THREE.Scene()
      const camera = new window.THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)
      const renderer = new window.THREE.WebGLRenderer()

      renderer.setSize(300, 200)
      document.getElementById('three-container')!.appendChild(renderer.domElement)

      const geometry = new window.THREE.BoxGeometry(2, 2, 2)
      const material = new window.THREE.MeshBasicMaterial({ color: 0xff0000 })
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
    }

    loadScripts()
  }, [])

  return (
    <>
      <div id="status">Loading UI...</div>

      {/* 🚨 evita hydration mismatch */}
      {mounted && (
        <div className="flex gap-5 p-5">
          <div id="plotly-chart" className="flex-1" />
          <div id="three-container" className="w-80 h-52" />
        </div>
      )}
    </>
  )
}

function loadScript(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement("script")
    s.src = src
    s.onload = () => resolve()
    document.body.appendChild(s)
  })
}