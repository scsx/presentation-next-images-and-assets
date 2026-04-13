export default function BadFonts() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      <div style={{ fontFamily: "Bebas Neue, sans-serif" }} className="p-8">
        <h1 className="text-6xl font-bold mb-12 text-red-700">Fonts BAD</h1>
        <p className="text-4xl">Loading font the traditional way...</p>
      </div>
    </>
  )
}