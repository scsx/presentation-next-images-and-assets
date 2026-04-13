"use client"

import { useState } from "react"

export default function ScriptsClient() {
  const [load, setLoad] = useState(false)
  const [openCodeModal, setOpenCodeModal] = useState(false)
  const [openStrategyModal, setOpenStrategyModal] = useState(false)

  return (
    <div
      className={`flex flex-col items-center gap-6 ${load ? "" : "min-h-screen justify-center"}`}
    >

      {/* button */}
      {!load && <button
        onClick={() => setLoad(true)}
        className="largebtn"
      >
        Load demos
      </button>}

      {/* content */}
      {load && (
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
            <div className="flex mx-auto gap-4 mt-8">
              <button
                onClick={() => setOpenCodeModal(true)}
                className="largebtn w-[200px]"
              >
                Code
              </button>
              <button
                onClick={() => setOpenStrategyModal(true)}
                className="largebtn w-[200px]"
              >
                Strategies
              </button>
            </div>
          </div>
        </>
      )}

      {openCodeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-none shadow-none p-8 w-[80%] h-[80%] relative overflow-auto">

            {/* close */}
            <button
              onClick={() => setOpenCodeModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* content */}
            <div className="flex gap-8 mb-20">
              <div className="w-1/2">
                <pre className="bg-gray-900 text-white p-4 rounded text-lg overflow-auto">
                  {`<script src="three.js"></script>
<script src="plotly.js"></script>

<script>
  // runs immediately → blocks rendering
  initThree()
  initPlotly()
</script>`}
                </pre>
              </div>

              <div className="w-1/2">
                <pre className="bg-gray-900 text-white p-4 rounded text-lg overflow-auto">
                  {`import Script from "next/script"
                  
<Script src="three.js" strategy="afterInteractive" />
<Script src="plotly.js" strategy="afterInteractive" />

// runs later → doesn't block UI
onLoad(() => {
  initThree()
  initPlotly()
})`}
                </pre>
              </div>
            </div>

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
        </div>
      )}

      {openStrategyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-none shadow-none p-8 w-[80%] h-[90%] relative overflow-auto">

            {/* close */}
            <button
              onClick={() => setOpenStrategyModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* content */}
            <h2 className="text-3xl font-bold mb-8">Script loading strategies using <code className="p-2 bg-blue-100 rounded">import Script from &quot;next/script&quot;</code></h2>

            <div className="flex flex-col gap-6">
              <div className="border-2 border-gray-300 p-6 rounded">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">beforeInteractive</h3>
                <ul className="space-y-2 text-xl font-semibold">
                  <li>Runs before hydration</li>
                  <li>❌ Blocks rendering</li>
                  <li>🐌 Slower first paint</li>
                  <li>⚠️ Only for critical scripts, like Analytics (e.g. Blog)</li>
                </ul>
              </div>

              <div className="border-2 border-green-500 bg-green-50 p-6 rounded">
                <h3 className="text-2xl font-bold mb-4 text-green-700">afterInteractive</h3>
                <ul className="space-y-2 text-xl font-semibold">
                  <li>Runs after hydration</li>
                  <li>⚡ UI first, non-blocking</li>
                  <li>📦 Loads in parallel</li>
                  <li>✅ Default choice</li>
                </ul>
              </div>

              <div className="border-2 border-purple-300 p-6 rounded">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">lazyOnload</h3>
                <ul className="space-y-2 text-xl font-semibold">
                  <li>Runs when idle</li>
                  <li>🐢 Lowest priority</li>
                  <li>⏳ Loaded last</li>
                  <li>✅ Non-critical scripts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}