import { useEffect, useRef } from "react";

const GraphYEqualsX2 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const scale = 100; // Controls zoom level
    const originX = width / 2;
    const originY = height / 2;

    let x = -width / 2; // Start from the left

    function drawFrame() {
      if (x >= width / 2) return; // Stop when the curve is fully drawn

      let xVal = x / scale;
      let yVal = xVal * xVal; // y = x^2

      let canvasX = originX + x;
      let canvasY = originY - yVal * scale;

      ctx.fillStyle = "blue";
      ctx.fillRect(canvasX, canvasY, 2, 2);

      x += 1;
      requestAnimationFrame(drawFrame);
    }

    function drawAxes() {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.moveTo(0, originY);
      ctx.lineTo(width, originY);
      ctx.moveTo(originX, 0);
      ctx.lineTo(originX, height);
      ctx.stroke();
    }

    drawAxes();
    drawFrame(); // Start animation
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={900}
      className="border border-gray-400"
      style={{ background: "white" }}
    />
  );
};

export default GraphYEqualsX2;
