"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  // once: false ensures that scrolling out of view and scrolling back in triggers the animation again
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    let active = true;
    if (isInView) {
      const numericValue = parseInt(value, 10) || 0;
      const controls = animate(0, numericValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (active) {
            setCount(Math.floor(latest));
          }
        },
      });
      return () => {
        active = false;
        controls.stop();
      };
    } else {
      setCount(0);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
