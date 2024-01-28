"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import store from "../../assets/store.jpg";

import SectionWrapper from "../../hoc/SectionWrapper";

import "./Mais.css";

function MemberShip() {
  return (
    <>
      <div>
        <motion.div>
          <h1 className="text-4xl text-white uppercase tracking-wider">
            Conheça também
          </h1>
        </motion.div>

        <div className="mt-3">
          <div className="px-10 flex gap-10">

            <div className="relative w-[300px] h-[500px]">
              <Image src={store} className="object-cover w-full h-full" />
              <div className="absolute img flex items-end">
                <p className="text-white m-4">Conheça uma de nossas lojas</p>
              </div>
            </div>

            <div className="relative w-[300px] h-[500px]">
              <Image src={store} className="object-cover w-full h-full" />
              <div className="absolute img flex items-end">
                <p className="text-white m-4">Conheça uma de nossas lojas</p>
              </div>
            </div>

            <div className="relative w-[300px] h-[500px]">
              <Image src={store} className="object-cover w-full h-full" />
              <div className="absolute img flex items-end">
                <p className="text-white m-4">Conheça uma de nossas lojas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default SectionWrapper(MemberShip, "");
