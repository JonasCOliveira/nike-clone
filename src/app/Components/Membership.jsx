"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import inglaterraFrente from "../../assets/inglaterra_frente.png";
import inglaterraCostas from "../../assets/inglaterra_costas.png";

import nigeriaFrente from "../../assets/nigeria_frente.png";
import nigeriaCostas from "../../assets/nigeria_costas.png";

import francaFrente from "../../assets/franca_frente.png";
import francaCostas from "../../assets/franca_costas.png";

import euaFrente from "../../assets/eua_frente.png";
import euaCostas from "../../assets/eua_costas.png";

import portugalFrente from "../../assets/portugal_frente.png";
import portugalCostas from "../../assets/portugal_costas.png";


import SectionWrapper from "../../hoc/SectionWrapper";

// import { Navigation } from "swiper";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const selecoes = [
  {
    nome: "Inglaterra",
    imgFrente: inglaterraFrente,
    imgCostas: inglaterraCostas,
  },

  {
    nome: "Portugal",
    imgFrente: portugalFrente,
    imgCostas: portugalCostas,
  },
  {
    nome: "França",
    imgFrente: francaFrente,
    imgCostas: francaCostas,
  },

  {
    nome: "Nigéria",
    imgFrente: nigeriaFrente,
    imgCostas: nigeriaCostas,
  },

  {
    nome: "Estados Unidos",
    imgFrente: euaFrente,
    imgCostas: euaCostas,
  },
];

function SliderImage(props) {
  const [frontView, setFrontView] = useState(true);

  console.log(props.imgFrente);
  return (
    <div
      onMouseEnter={() => setFrontView(false)}
      onMouseLeave={() => setFrontView(true)}
    >
      <Image
        alt={""}
        src={frontView ? props.imgFrente : props.imgCostas}
        className="object-contain"
      ></Image>
    </div>
  );
}

function MemberShip() {
  return (
    <>
      {/* <div className="absolute z-1 h-screen w-full bg-[#d0d0d0] top-[200vh]"> */}
      <div>
        <motion.div variants={textVariant()}>
          <h1 className="text-4xl text-secondary uppercase tracking-wider">
            Membership
          </h1>
        </motion.div>

        <div className="mt-3">
          <div className="relative px-10">
            <Swiper
              className="w-full"
              slidesPerView={4}
              spaceBetween={10}
              navigation={{
                prevEl: ".swiper-left-leg",
                nextEl: ".swiper-right-leg",
              }}
              modules={[Navigation]}
              breakpoints={
                {
                  // 640: {
                  //   slidesPerView: 1,
                  // },
                  // 1000: {
                  //   slidesPerView: 2,
                  // },
                  // 1300: {
                  //   slidesPerView: 3,
                  // },
                  // 1800: {
                  //   slidesPerView: 6,
                  // },
                }
              }
            >
              {selecoes.map((el) => {
                return (
                  <SwiperSlide>
                    <SliderImage
                      imgFrente={el.imgFrente}
                      imgCostas={el.imgCostas}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="swiper-left-leg absolute top-1/2 bottom-0 -left-10 right-auto cursor-pointer">
              {/* <ChevronLeftIcon style={{ height: "30px" }} /> */}
              <div className="w-[30px] h-[30px] bg-gray"></div>
            </div>
            <div className="swiper-right-leg absolute top-1/2 bottom-0 left-auto -right-10 cursor-pointer">
              {/* <ChevronRightIcon style={{ height: "30px" }} /> */}
              <div className="w-[30px] h-[30px] bg-gray"></div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default SectionWrapper(MemberShip, "");
