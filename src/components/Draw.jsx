import { useRef, useEffect } from "react";

const Draw = () => {
  const canvasRef = useRef(null);
  const lastPositionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.addEventListener("mousemove", (e) => {
      ctx.lineWidth = 0.1;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#ffffff";
      ctx.globalAlpha = 0.1;

      const { pageX, pageY } = e;

      if (lastPositionRef.current) {
        const { x, y } = lastPositionRef.current;
        ctx.moveTo(x - canvas.offsetLeft, y - canvas.offsetTop);
        ctx.lineTo(pageX - canvas.offsetLeft, pageY - canvas.offsetTop);
        ctx.stroke();
      }

      lastPositionRef.current = { x: pageX, y: pageY };
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 100, left: 0 }}
      width={window.innerWidth}
      height={window.innerHeight - 100}
    />
  );
};

export default Draw;
