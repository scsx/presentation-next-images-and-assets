import Header from "@/app/components/pages/Header";
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

        <h2 className="text-3xl font-bold mt-12 mb-4">Results for Bebas Neue (Google Fonts)</h2>

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
          {/* BAD */}
          <ul className="w-1/2 list-disc pl-6 space-y-3 text-xl font-semibold">
            <li className="text-red-600 font-bold text-2xl">BAD (Google Fonts)</li>
            <li><strong>Loads CSS first, then font</strong></li>
            <li><strong>2 requests (CSS + font)</strong></li>
            <li><strong>External dependency (Google)</strong></li>
            <li><strong>13.8 kB font size</strong></li>
            <li><strong>~25 ms font load (+ extra CSS request)</strong></li>
            <li><strong>Slower render (font arrives later)</strong></li>
          </ul>

          {/* GOOD */}
          <ul className="w-1/2 list-disc pl-6 space-y-3 text-xl font-semibold">
            <li className="text-green-600 font-bold text-2xl">GOOD (Next/font)</li>
            <li><strong>Font loaded directly</strong></li>
            <li><strong>1 request only</strong></li>
            <li><strong>Served locally</strong></li>
            <li><strong>8.9 kB font size</strong></li>
            <li><strong>~18 ms load</strong></li>
            <li><strong>Faster render (no extra roundtrip)</strong></li>
          </ul>
        </div>

      </div>
    </>
  )
}
export default Fonts