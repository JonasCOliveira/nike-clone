"use client";
import { React, useEffect } from "react";
import { useStore } from "../Store";
import { motion } from "framer-motion";

export default function Overlay() {
  const store = useStore();

  const show = { opacity: 1 };
  const hidden = { opacity: 0 };

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={store.open ? show : hidden}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="absolute h-screen w-full flex justify-center items-center top-0 left-0"
      > */}

      <div className="absolute h-screen w-full flex justify-center items-center top-0 left-0">
        <div>
          <p className="text-9xl uppercase text-gray-400 drop-shadow-sm italic">
            JUST DO <span className="text-indigo-800">IT</span>.
          </p>

          <p className="text-9xl uppercase p-1 drop-shadow-lg italic">
            JUST DO <span className="text-indigo-800">IT</span>
          </p>
        </div>

        <div>
          <p className="text-9xl uppercase text-gray-400 drop-shadow-sm italic">
            JUST DO <span className="text-indigo-800">IT</span>.
          </p>

          <p className="text-9xl uppercase p-1 drop-shadow-lg italic">
            JUST DO <span className="text-indigo-800">IT</span>
          </p>
        </div>

        <div>
          <p className="text-9xl uppercase text-gray-400 drop-shadow-sm italic">
            JUST DO <span className="text-indigo-800">IT</span>.
          </p>

          <p className="text-9xl uppercase p-1 drop-shadow-lg italic">
            JUST DO <span className="text-indigo-800">IT</span>
          </p>
        </div>

        <div>
          <p className="text-9xl uppercase text-gray-400 drop-shadow-sm italic">
            JUST DO <span className="text-indigo-800">IT</span>.
          </p>

          <p className="text-9xl uppercase p-1 drop-shadow-lg italic">
            JUST DO <span className="text-indigo-800">IT</span>
          </p>
        </div>

        <div>
          <p className="text-9xl uppercase text-gray-400 drop-shadow-sm italic">
            JUST DO <span className="text-indigo-800">IT</span>.
          </p>

          <p className="text-9xl uppercase p-1 drop-shadow-lg italic">
            JUST DO <span className="text-indigo-800">IT</span>
          </p>
        </div>

        {/* <div className="absolute mx-auto top-[120px] flex flex-col"></div>
        <div className="absolute mx-auto top-[140px] flex flex-col "></div> */}
      </div>

      {/* </motion.div> */}
    </>
  );
}
