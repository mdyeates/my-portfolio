import { useState } from "react";

export default function Image({ src, height, width, size, alt, opacity }) {
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
          setLoading(false);
        }}
        alt={alt}
      />
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
