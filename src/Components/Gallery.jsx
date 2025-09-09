import React from "react";

// Import your images
import img1 from "../assets/gallery/img1.jpeg";
import img2 from "../assets/gallery/img2.jpeg";
import img3 from "../assets/gallery/img3.jpeg";
import img4 from "../assets/gallery/img4.jpeg";
import img5 from "../assets/gallery/img5.jpeg";
import img6 from "../assets/gallery/img6.jpeg";
import img7 from "../assets/gallery/img7.jpeg";
import img8 from "../assets/gallery/img8.jpeg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={src}
              alt={`gallery-${index}`}
              className="h-90 w-full object-cover object-center rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
