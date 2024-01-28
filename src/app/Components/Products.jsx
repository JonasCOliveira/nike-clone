"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import NikeLogo from "../../assets/nike-logo.png";
import airForceMidReact from "../../assets/Nike air force 1 Mid React.jpg";
import airForceNextNature from "../../assets/Nike air force 1 Next Nature.jpg";
import airMaxINTRLK from "../../assets/Nike air max INTRLK.jpg";
import courtRoyale from "../../assets/Nike court royale 2.jpg";

import SectionWrapper from "../../hoc/SectionWrapper";

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

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const products = [
  {
    name: "Nike Court Royale 2 Next Nature",
    price: "R$ 499,90",
    image: courtRoyale,
  },
  {
    name: "Nike Air Force 1 Mid React",
    price: "R$ 719,99",
    image: airForceMidReact,
  },
  {
    name: 'Nike Air Force 1 "07 Next Nature',
    price: "R$ 799,99",
    image: airForceNextNature,
  },
  {
    name: "Nike Air Max INTRLK Lite",
    price: "R$ 399,99",
    image: airMaxINTRLK,
  },
  {
    name: 'Nike Air Force 1 "07 Next Nature',
    price: "R$ 799,99",
    image: airForceNextNature,
  },
  {
    name: "Nike Air Max INTRLK Lite",
    price: "R$ 399,99",
    image: airMaxINTRLK,
  },
];

// const StyledRating = styled(Rating)({
//   "& .MuiRating-iconFilled": {
//     color: "#ff6d75",
//   },
//   "& .MuiRating-iconHover": {
//     color: "#ff3d47",
//   },
// });

const ProductCard = ({ index, name, image, price }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        delay: index * 0.5,
        duration: 0.75,
        ease: "easeOut",
      }}
      className="flex flex-col items-center justify-center"
    >
      <div className="relative w-[230px] h-[230px] shadow-2xl rounded-xl bg-white overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="w-full h-full objct-cover rounded-2xl"
        />

        {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"></div>
        </div> */}
        <div
          className="bg-gray-700  absolute bottom-2 right-2 h-2 w-2 z-10 rounded-full"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {" "}
        </div>

        <motion.div
          className="bg-gray-100/[.15] backdrop-blur-sm absolute top-0 left-0"
          initial={{
            width: 0,
            height: 0,
            opacity: 1,
          }}
          animate={{
            height: open ? "100%" : 0,
            width: open ? "100%" : 0,
            opacity: open ? 1 : 0,
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div>
              <p className="text-gray-700">Conforto</p>
              {/* <Rating value={4} readonly></Rating> */}
              <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
            </div>
            <div>
              <p className="text-gray-700">Conforto</p>
              {/* <Rating value={4} readonly></Rating> */}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{price}</p>
      </div>
    </motion.div>
  );
};

function Products() {
  return (
    <div className="bg-[#d0d0d0]">
      {/* w-full absolute top-[100vh] px-10 py-10 */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 0,
        }}
      >
        <h1 className="text-4xl text-secondary uppercase tracking-wider">
          Produtos
        </h1>
      </motion.div>

      <div className="mt-20 flex flex-row flex-wrap gap-7 justify-between">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={`product-${index}`}
              index={index}
              {...product}
            ></ProductCard>
          );
        })}
      </div>
    </div>
  );
}

export default SectionWrapper(Products, "");
