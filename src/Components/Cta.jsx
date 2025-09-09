import React from "react";

function Cta() {
  return (
    <div className="relative bg-black py-16 px-6 text-center text-white rounded-2xl max-w-6xl mx-auto my-16">
      {/* Overlay for glassy effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Make Memories at Eva’s Garden?
        </h2>
        <p className="text-lg mb-8 leading-relaxed">
          Whether it’s a dream wedding, a milestone birthday, or an inspiring
          corporate retreat, our garden is the perfect place to bring your
          vision to life. Let’s make your event unforgettable. 🌸
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-amber-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Book a Visit
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
