"use client";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 1, duration: 2, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
