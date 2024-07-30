"use client";
import { useEffect, useRef } from "react";
import EcosystemIcon from "../../KENZI-MCGREEN/public/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const MissionT = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px,black, transparent)`;
  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div
      key={title}
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
    >
      <motion.div
        className="absolute inset-0 border-2 border-orange-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div
        className="inline-flex h-14 w-14 justify-center items-center rounded-lg roup/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};
