import Header from "@/app/components/Header";
import Image from "next/image";

const Fonts = () => {
  return (
    <>
      <Header />
      <div className="px-8">
        <div className="flex gap-4">
          <iframe src="/fonts/bad" className="w-1/2 h-[260px] border"
            title="badscript" />
          <iframe src="/fonts/good" className="w-1/2 h-[260px] border"
            title="goodscript" />
        </div>

        <div className="px-40 pb-12">
          <h2 className="text-3xl font-bold mt-24 mb-4">Results for Bebas Neue (Google Fonts)</h2>

          <Image
            src="/results/network-font.png"
            className="border-2 border-gray-300"
            alt=""
            width={800}
            height={600}
            priority
            fetchPriority="high"
          />

          <div className="flex gap-8 mt-8">
            <div className="w-1/2">
              <h3 className="text-red-600 font-bold text-2xl mb-2">Google Fonts</h3>
              <ul className="list-disc pl-6 space-y-3 text-xl font-semibold">
                <li><strong>13.8 kB font size</strong></li>
                <li><strong>~25 ms font load (+ extra CSS request)</strong></li>
                <li><strong>Slower render (font arrives later)</strong></li>
              </ul>

              <div className="mt-6 space-y-2 text-xl font-semibold">
                <div>Browser → <span className="text-red-600">requests CSS from Google</span></div>
                <div>↓</div>
                <div>CSS → <span className="text-red-600">requests font file</span></div>
                <div>↓</div>
                <div>Render text</div>
              </div>
            </div>

            <div className="w-1/2">
              <h3 className="text-green-600 font-bold text-2xl mb-2">Next/font</h3>
              <ul className="list-disc pl-6 space-y-3 text-xl font-semibold">
                <li><strong>8.9 kB font size</strong></li>
                <li><strong>~18 ms load</strong></li>
                <li><strong>Faster render (no extra roundtrip)</strong></li>
              </ul>

              <div className="mt-6 space-y-2 text-xl font-semibold">
                <div>Browser → <span className="text-green-600">font already defined at build time</span></div>
                <div>↓</div>
                <div>Render text</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Fonts