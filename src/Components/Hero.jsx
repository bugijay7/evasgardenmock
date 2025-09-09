import React from 'react'
import heroImg from "../assets/fg.jpg"

function Hero() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glass Overlay (centered & responsive) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-11/12 sm:w-3/4 md:w-1/2 h-1/2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"></div>
      </div>

      {/* Content */}
      <div className="absolute z-10 text-center text-white px-4 sm:px-6 md:px-10 max-w-2xl">
        <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Welcome to Eva’s Garden
        </h1>
        <p className="mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
          A gem hidden in the highlands of Redhill, Kenya — your one stop garden venue.  
          Perfect for <span className="italic">destination weddings</span>, unforgettable events,  
          and breathtakingly beautiful moments. 🌸
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 border-none text-white px-6 py-3 rounded-md sm:w-auto w-fit mx-auto">
            Book a Visit
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-md sm:w-auto w-fit mx-auto">
            Explore Gallery
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
