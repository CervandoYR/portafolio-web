import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 30 },
          color: { value: "#00D1FF" },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
          links: { enable: true, distance: 150, color: "#00D1FF", opacity: 0.2 },
          move: { enable: true, speed: 0.8 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}