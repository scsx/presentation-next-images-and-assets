"use client"

import { useState } from "react"

export default function ScriptsClient() {
  const [show, setShow] = useState(false)

  return (
    <div
      className={`flex flex-col items-center gap-6 ${show ? "" : "min-h-screen justify-center"
        }`}
    >

      {/* button */}
      {!show && <button
        onClick={() => setShow(true)}
        className="px-4 py-2 border"
      >
        Load demos
      </button>}

      {/* content */}
      {show && (
        <>
          <h2 className="text-xl font-bold">Scripts</h2>
          <ul className="flex space-x-4">
            <li className="bg-blue-200 font-bold py-1 px-4 rounded">plotly.js → ~3.5 MB</li>
            <li className="bg-blue-200 font-bold py-1 px-4 rounded">three.js → ~600 KB</li>
          </ul>
          <div className="w-full flex flex-col gap-4">

            {/* iframes side by side */}
            <div className="flex gap-4">
              <iframe
                src="/scripts/bad"
                className="w-1/2 h-[600px] border"
                title="badscript"
              />
              <iframe
                src="/scripts/good"
                className="w-1/2 h-[600px] border"
                title="goodscript"
              />
            </div>

            {/* info */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="pl-8">
                  <h2 className="text-3xl font-bold mb-2 text-red-700">Bad (blocking)</h2>
                  <ul className="list-disc list-inside space-y-1 text-xl font-bold uppercase">
                    <li>blocks rendering</li>
                    <li>UI only at the end</li>
                    <li>scripts first</li>
                    <li>worse perceived speed</li>
                    <li>main thread busy</li>
                  </ul>
                </div>
              </div>
              <div className="w-1/2">
                <div className="pl-8">
                  <h2 className="text-3xl font-bold mb-2 text-green-700">Good (non-blocking)</h2>
                  <ul className="list-disc list-inside space-y-1 text-xl font-bold uppercase">
                    <li>doesn’t block rendering</li>
                    <li>UI appears immediately</li>
                    <li>scripts load in parallel</li>
                    <li>better perceived speed</li>
                    <li>smoother UX</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  )
}