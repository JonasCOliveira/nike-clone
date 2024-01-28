"use client";

import NikeCanvas from "./Canvas/NikeCanvas";
import Overlay from "./Overlay";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="z-10 h-screen w-full">
        {/* absolute z-1 h-screen w-full bg-[#d0d0d0] */}
        <NikeCanvas></NikeCanvas>

        <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2">
              <motion.div
                initial={{ y: 0 }}
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-gray-400 mb-1"
              />
            </div>
          </a>
        </div>
      </div>
      <Overlay />
    </>
  );
}
