"use client"

import { useEffect } from "react"
import Image from "next/image"

const start = performance.now()

function log(label: string) {
  const el = document.getElementById("timeline")
  const delta = (performance.now() - start).toFixed(1)

  if (el) {
    const item = document.createElement("div")
    item.innerText = `+${delta}ms — ${label}`

    // destaque UI ready
    if (label.includes("UI ready")) {
      item.style.background = "green"
      item.style.color = "white"
      item.style.fontWeight = "bold"
    }

    el.appendChild(item)
  }
}

export default function GoodImagesPage() {
  useEffect(() => {
    log("UI ready")
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1 className="font-bold mb-4 text-xl">Images GOOD</h1>

      {/* timeline */}
      <div id="timeline" className="h-[240px]" />

      {/* HERO (prioritário ✅) */}
      <h2 className="mt-8 font-bold text-xl">Hero</h2>
      <Image
        src="/images/bici.jpg"
        alt=""
        width={1200}
        height={600}
        priority
        fetchPriority="high"
        onLoad={() => log("hero loaded")}
      />

      {/* espaço para forçar scroll */}
      <div style={{ height: 400 }} />

      {/* GALLERY (lazy automático ✅) */}
      <h2 className="mt-8 font-bold text-xl">Gallery</h2>

      <Image
        src="/images/gal1.jpg"
        alt=""
        width={800}
        height={500}
        loading="lazy"
        onLoad={() => log("gal1 loaded")}
      />
      <Image
        src="/images/gal2.jpg"
        alt=""
        width={800}
        height={500}
        loading="lazy"
        onLoad={() => log("gal2 loaded")}
      />
      <Image
        src="/images/gal3.jpg"
        alt=""
        width={800}
        height={500}
        loading="lazy"
        onLoad={() => log("gal3 loaded")}
      />

      {/* RESPONSIVE ✅ */}
      <h2 className="mt-8 font-bold text-xl">Responsive (750x500px)</h2>
      <Image
        src="/images/bici.jpg"
        alt=""
        width={1200}
        height={600}
        sizes="(max-width: 768px) 100vw, 1200px"
        onLoad={() => log("responsive image loaded")}
      />
    </div>
  )
}