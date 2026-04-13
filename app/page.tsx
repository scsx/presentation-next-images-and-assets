import Header from "@/app/components/pages/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="px-8 pt-40 pb-12 max-w-[50%] mx-auto">
        {/* title */}
        <h1 className="text-6xl font-bold mb-12">
          Next.js optimization of images and assets
        </h1>

        {/* split */}
        <div className="flex items-center gap-8">
          {/* left */}
          <div className="w-1/2 border p-8 bg-zinc-200 h-52">
            <h2 className="text-3xl font-bold mb-4 text-red-600">
              Traditional way
            </h2>
            <p className="text-lg">
              Basic asset loading without optimization.
            </p>
          </div>
          <p className="font-bold text-2xl">VS</p>
          {/* right */}
          <div className="w-1/2 border p-8 bg-zinc-200 h-52">
            <h2 className="text-3xl font-bold mb-4 text-green-600">
              Next.js way
            </h2>
            <p className="text-lg">
              Optimized images, scripts, and fonts with better performance.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}