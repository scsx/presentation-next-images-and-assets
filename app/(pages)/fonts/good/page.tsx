import { Bebas_Neue } from "next/font/google"

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
})

export default function GoodFonts() {
  return (
    <div className={`${bebas.className} p-8`}>
      <h1 className="text-6xl font-bold mb-12 text-green-700">Fonts GOOD</h1>
      <p className="text-4xl">Optimized font loading with next/font</p>
    </div>
  )
}