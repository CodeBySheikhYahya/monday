export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white p-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse">
          Welcome Techmiles Solution
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl mx-auto leading-relaxed">
          Innovating your digital future with elegance, speed, and hot designs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 text-lg rounded-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all shadow-lg shadow-pink-500/30"
          >
            Explore Now
          </a>
          <a
            href="#"
            className="px-6 py-3 text-lg rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
