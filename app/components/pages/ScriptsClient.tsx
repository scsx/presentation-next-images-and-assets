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
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 border"
      >
        Load demos
      </button>

      {/* content */}
      {show && (
        <div className="w-full flex flex-col gap-4">

          {/* iframes side by side */}
          <div className="flex gap-4">
            <iframe
              src="/scripts/bad"
              className="w-1/2 h-[400px] border"
              title="badscript"
            />
            <iframe
              src="/scripts/good"
              className="w-1/2 h-[400px] border"
              title="goodscript"
            />
          </div>

          {/* info */}
          <div className="flex gap-4">
            <div className="w-1/2">
              BAD: blocking script
            </div>
            <div className="w-1/2">
              GOOD: non-blocking script
            </div>
          </div>

        </div>
      )}
    </div>
  )
}