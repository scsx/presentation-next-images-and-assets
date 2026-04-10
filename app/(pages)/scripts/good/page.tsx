"use client"

import Script from "next/script"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    THREE: any
  }
}

export default function GoodScript() {
  return (
    <>
      <div id="status">Loading UI...</div>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          document.getElementById('status')!.innerText = 'UI Ready'

          const scene = new window.THREE.Scene()
          const camera = new window.THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          )

          const renderer = new window.THREE.WebGLRenderer()
          renderer.setSize(window.innerWidth, window.innerHeight)
          document.body.appendChild(renderer.domElement)

          const geometry = new window.THREE.BoxGeometry(2, 2, 2)
          const material = new window.THREE.MeshBasicMaterial({ color: 0x00ff00 })
          const cube = new window.THREE.Mesh(geometry, material)
          scene.add(cube)

          camera.position.z = 5

          function animate() {
            requestAnimationFrame(animate)
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            renderer.render(scene, camera)
          }

          animate()
        }}
      />
    </>

  )
}