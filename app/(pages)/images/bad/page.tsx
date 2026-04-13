"use client"

import { useEffect, useState } from "react"

const start = performance.now()

function log(label: string) {
  const el = document.getElementById("timeline")
  const delta = (performance.now() - start).toFixed(1)

  if (el) {
    const item = document.createElement("div")
    item.innerText = `+${delta}ms — ${label}`
    el.appendChild(item)
  }
}

export default function BadImagesPage() {
  const [cacheBust, setCacheBust] = useState("")

  useEffect(() => {
    setCacheBust(`?v=${Math.random()}`)
  }, [])

  useEffect(() => {
    log("UI ready")
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1 className="font-bold mb-4 text-xl">Images BAD</h1>

      {/* timeline */}
      <div id="timeline" className="h-[240px]" />

      {/* HERO (acima do fold) */}
      <h2>Hero</h2>
      <img
        src={`/images/bici.jpg?v=${cacheBust}`}
        width={1200}
        height={600}
        onLoad={() => log("hero loaded")}
      />

      {/* espaço para forçar scroll */}
      <div style={{ height: 800 }} />

      {/* GALLERY (tudo carrega logo ❌) */}
      <h2>Gallery</h2>

      <img
        src={`/images/gal1.jpg?v=${cacheBust}`}
        width={800}
        height={500}
        onLoad={() => log("gal1 loaded")}
      />
      <img
        src={`/images/gal2.jpg?v=${cacheBust}`}
        width={800}
        height={500}
        onLoad={() => log("gal2 loaded")}
      />
      <img
        src={`/images/gal3.jpg?v=${cacheBust}`}
        width={800}
        height={500}
        onLoad={() => log("gal3 loaded")}
      />

      {/* RESPONSIVE FAIL ❌ */}
      <h2>Responsive (fail)</h2>
      <img
        src={`/images/hero.jpg?v=${cacheBust}`}
        onLoad={() => log("responsive image loaded")}
      />
    </div>
  )
}