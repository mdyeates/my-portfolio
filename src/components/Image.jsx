import { useState } from "react";

/**
 * Represents an image component with loading spinner.
 *
 * @component
 * @param {string} src - The source URL of the image.
 * @param {string} height - The height of the image container.
 * @param {string} width - The width of the image container.
 * @param {string} size - The size of the loading spinner.
 * @param {string} alt - The alternative text for the image.
 * @param {string} opacity - The opacity of the image.
 */

export default function Image({ src, height, width, size, alt, opacity }) {
  // State to manage image loading status
  const [loading, setLoading] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width ? width : "100%",
        height: height ? height : "100%",
      }}
    >
      {/* Image */}
      <img
        src={src}
        className="fadeIn"
        style={{
          display: loading ? "none" : "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: opacity ? opacity : "1",
        }}
        onLoad={(e) => {
          setLoading(false); // Set loading to false when the image is loaded
        }}
        alt={alt} // Alt text for the image
      />
      {/* Loading spinner */}
      <div
        className="spinner"
        style={{
          display: loading ? "block" : "none",
          fontSize: size ? size : "24px",
        }}
      ></div>
    </div>
  );
}
