import React from 'react'

function Featured() {
  return (
    <section className="py-12 sm:py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Intro Lines */}
        <h2 className="text-xs sm:text-sm mb-4 sm:mb-6 text-emerald-800 uppercase tracking-wide">
          Why Choose Eva’s Garden?
        </h2>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 mb-8 sm:mb-10">
          <div>
            <p className="text-gray-600 text-lg sm:text-xl italic">
              Surrounded by lush greenery and breathtaking landscapes.
            </p>
          </div>
          <div>
            <p className="text-black text-2xl sm:text-4xl font-semibold">
              In the heart of Limuru
            </p>
          </div>
        </div>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic font-mono text-justify sm:text-center">
          Eva’s Garden, hidden in the highlands of Redhill, Kenya, is more than just a venue — it’s an experience.
          From the moment you step into our lush green spaces, you are welcomed by a sense of serenity and timeless beauty.  
          Whether you’re celebrating love, hosting a business retreat, or gathering with family and friends, 
          our garden provides the perfect backdrop for elegance, joy, and memories that last a lifetime. 
          With breathtaking views, carefully curated landscapes, and a touch of luxury, Eva’s Garden transforms 
          ordinary events into extraordinary experiences. Every corner tells a story, every pathway leads to 
          a moment of wonder, and every celebration becomes a cherished milestone in this hidden gem of Redhill.
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <p className="text-black italic text-sm sm:text-base">
          See our Gallery <span className="text-emerald-700">→</span>
        </p>
      </div>
    </section>
  )
}

export default Featured
