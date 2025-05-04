import React, { useState } from "react";

type ProductImagesProps = {
  images: string[];
};

/* This code snippet defines a React functional component named `ProductImages`. It takes in a prop
object `images` which is an array of strings representing image URLs. */
export const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = (id: string) => {
    const image = document.getElementById(id);
    if (!image) return; // Ensure the image element exists

    const scale =
      parseFloat(
        image.style.transform.replace("scale(", "").replace(")", "")
      ) || 1;

    // Toggle between zoom in and zoom out
    if (scale < 2 && !isZoomed) {
      image.style.transform = `scale(${scale + 1})`; // Zoom in by increasing scale
      setIsZoomed(true);
    } else {
      image.style.transform = `scale(${scale - 1})`; // Reset scale to 1 for zooming out
      setIsZoomed(false);
    }
  };

  const [state, setState] = React.useState(images[0]);
  return (
    <div className="grid gap-4">
      <div
        className={`relative w-600 h-600 overflow-hidden ${isZoomed ? "zoomed" : ""}`}
      >
        <img
          alt="Product Image"
          className={`
        ${isZoomed ? "w-auto h-auto max-w-full max-h-full" : "w-full h-full"}
        aspect-square object-cover border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800`}
          src={state}
          id="zoomable-image"
          onClick={() => handleZoom("zoomable-image")}
          style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
        />
      </div>
      <div className="hidden md:flex gap-4 items-start">
        {images.map((src) => (
          <button
            key={src}
            onClick={() => setState(src)}
            className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
          >
            <img
              alt="Preview thumbnail"
              className="aspect-square object-cover"
              height={100}
              src={src}
              width={100}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
