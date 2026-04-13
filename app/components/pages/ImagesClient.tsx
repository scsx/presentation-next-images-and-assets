"use client"

import Image from "next/image"
import { useState } from "react"

const ImagesClient = () => {
  const [openResultsModal, setOpenResultsModal] = useState(false)

  return (
    <div className="w-full flex flex-col gap-4">

      {/* iframes side by side */}
      <div className="flex gap-4">
        <iframe
          src="/images/bad?1"
          className="w-1/2 h-[3300px] border"
          title="badscript"
        />
        <iframe
          src="/images/good?2"
          className="w-1/2 h-[3300px] border"
          title="goodscript"
        />
      </div>
      <div className="flex mx-auto mt-8">
        <button
          onClick={() => setOpenResultsModal(true)}
          className="largebtn w-[200px]"
        >
          Results
        </button>
      </div>

      {openResultsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 w-[94%] h-[90%] relative overflow-auto">

            {/* close */}
            <button
              onClick={() => setOpenResultsModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* content */}
            <div className="flex gap-8">

              {/* BAD */}
              <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-red-700">BAD (JPEG, MB)</h2>
                <div className="flex">

                  <pre className="w-2/3 bg-blue-950 text-white p-4">
                    {`<img src="/images/bici.jpg" />

<img src="/images/gal1.jpg" />
<img src="/images/gal2.jpg" />
<img src="/images/gal3.jpg" />

<img src="/images/hero.jpg" />
`}

                  </pre>
                  <ul className="space-y-2 text-lg font-semibold w-1/3 pl-4">
                    <li>UI slower</li>
                    <li>Hero loads late</li>
                    <li>All images load at once</li>
                    <li>Wastes bandwidth</li>
                    <li>No prioritization</li>
                  </ul>
                </div>
              </div>

              {/* GOOD */}
              <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-green-700">GOOD (WebP, KB)</h2>
                <div className="flex">

                  <pre className="w-2/3 bg-blue-950 text-white p-4">
                    {`<Image
  src="/images/bici.jpg"
  width={1200}
  height={600}
  priority
/>

<Image
  src="/images/gal1.jpg"
  width={800}
  height={500}
  loading="lazy"
/>

<Image
  src="/images/gal2.jpg"
  width={800}
  height={500}
  loading="lazy"
/>

<Image
  src="/images/gal3.jpg"
  width={800}
  height={500}
  loading="lazy"
/>

<Image
  src="/images/bici.jpg"
  width={1200}
  height={600}
  sizes="(max-width: 768px) 100vw, 1200px"
/>
`}

                  </pre>
                  <ul className="space-y-2 text-lg font-semibold w-1/3 pl-4">
                    <li>UI faster</li>
                    <li>Hero loads first</li>
                    <li>Lazy loading gallery</li>
                    <li>Better perceived speed</li>
                    <li>Optimized delivery</li>
                  </ul>
                </div>
              </div>

            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Network</h2>
            <div className="flex">
              <Image
                src="/results/network.png"
                alt=""
                width={800}
                height={600}
                priority
                fetchPriority="high"
              />
              <div className="flex flex-col justify-center pl-8">
                <h3 className="text-2xl font-bold mb-4">Impact - shocking results!</h3>

                <ul className="space-y-3 text-lg font-semibold">
                  <li>
                    <span className="text-red-600">BAD:</span> ~10 MB total
                  </li>
                  <li>
                    <span className="text-green-600">GOOD:</span> ~150 KB total
                  </li>

                  <li className="pt-4">
                    ↓ <span className="font-bold text-green-700">~98% less data</span>
                  </li>

                  <li>
                    ↓ <span className="font-bold text-green-700">~80x smaller images</span>
                  </li>

                  <li className="pt-4">
                    ⚡ Largest Contentful Paint (LCP): ~1.3s → ~0.3s
                  </li>

                  <li>
                    📶 Less bandwidth usage
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">FAQs</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImagesClient