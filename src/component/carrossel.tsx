import { useEffect, useRef } from "react";
import "../css/carrossel.css";

const Carrossel = () => {
  const isMouseDownRef = useRef<boolean>(false);
  const autoRotateRef = useRef<boolean>(true);
  const lastInteractionTimeRef = useRef<number>(0);

  useEffect(() => {
    const container = document.querySelector(
      ".container"
    ) as HTMLElement | null;
    if (!container) return;

    const containerCarrossel = container.querySelector(
      ".container-carrossel"
    ) as HTMLElement | null;
    const carrossel = container.querySelector(
      ".carrossel"
    ) as HTMLElement | null;
    const carrosselItems = carrossel?.querySelectorAll(
      ".carrossel-item"
    ) as NodeListOf<HTMLElement>;

    if (!containerCarrossel || !carrossel || carrosselItems.length === 0)
      return;

    let currentMousePos = 0;
    let lastMousePos = 0;
    let lastMoveTo = 0;
    let moveTo = 0;

    const lerp = (a: number, b: number, n: number): number => n * (a - b) + b;

    const distanceZ = (
      widthElement: number,
      length: number,
      gap: number
    ): number => {
      return widthElement / 2 / Math.tan(Math.PI / length) + gap;
    };

    const calculateHeight = (z: number): number => {
      const t = Math.atan((90 * Math.PI) / 180 / 2);
      return t * 2 * z;
    };

    const getPosX = (x: number): void => {
      currentMousePos = x;
      moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2;
      lastMousePos = currentMousePos;
      lastInteractionTimeRef.current = Date.now();
    };

    const update = (): void => {
      if (autoRotateRef.current && !isMouseDownRef.current) {
        moveTo += 0.5;
      }
      lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
      if (carrossel) {
        carrossel.style.setProperty("--rotatey", `${lastMoveTo}deg`);
      }

      if (
        !autoRotateRef.current &&
        Date.now() - lastInteractionTimeRef.current > 2000
      ) {
        autoRotateRef.current = true;
      }

      requestAnimationFrame(update);
    };

    const createCarrossel = (): void => {
      const carrosselProps = onResize();
      const length = carrosselItems.length;
      const degrees = 360 / length;
      const gap = 20;
      const tz = distanceZ(carrosselProps.w, length, gap);

      const height = calculateHeight(tz);

      container.style.width = `${tz * 0.8 + gap * length}px`;
      container.style.height = `${height}px`;

      carrosselItems.forEach((item, i) => {
        const degreesByItem = `${degrees * i}deg`;
        item.style.setProperty("--rotatey", degreesByItem);
        item.style.setProperty("--tz", `${tz}px`);
      });
    };

    const onResize = (): { w: number; h: number } => {
      const boundingCarrossel = containerCarrossel.getBoundingClientRect();
      return {
        w: boundingCarrossel.width,
        h: boundingCarrossel.height,
      };
    };

    const initEvents = (): void => {
      carrossel.addEventListener("mousedown", () => {
        isMouseDownRef.current = true;
        autoRotateRef.current = false;
        carrossel.style.cursor = "grabbing";
      });

      carrossel.addEventListener("mouseup", () => {
        isMouseDownRef.current = false;
        carrossel.style.cursor = "grab";
      });

      container.addEventListener("mouseleave", () => {
        isMouseDownRef.current = false;
      });

      carrossel.addEventListener("mousemove", (e: MouseEvent) => {
        if (isMouseDownRef.current) {
          getPosX(e.clientX);
          autoRotateRef.current = false;
        }
      });

      carrossel.addEventListener("touchstart", () => {
        isMouseDownRef.current = true;
        autoRotateRef.current = false;
        carrossel.style.cursor = "grabbing";
      });

      carrossel.addEventListener("touchend", () => {
        isMouseDownRef.current = false;
        carrossel.style.cursor = "grab";
      });

      container.addEventListener("touchmove", (e: TouchEvent) => {
        if (isMouseDownRef.current) {
          getPosX(e.touches[0].clientX);
          autoRotateRef.current = false;
        }
      });

      window.addEventListener("resize", createCarrossel);

      update();
      createCarrossel();
    };

    initEvents();
  }, []);

  return (
    <div className="conteudo__geral">
      <div className="container">
        <div className="container-carrossel">
          <div className="carrossel">
            <div className="carrossel-item">Front End Developer</div>
            <div className="carrossel-item">Back End Developer</div>
            <div className="carrossel-item">Full Stack Developer</div>
            <div className="carrossel-item">TypeScript</div>
            <div className="carrossel-item">Regular Expression</div>
            <div className="carrossel-item">Database</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
