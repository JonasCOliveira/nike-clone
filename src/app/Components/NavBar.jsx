"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import NikeLogo from "../../assets/nike-logo.png";

const navLinks = [
  {
    id: "",
    title: "Tendências",
  },
  {
    id: "work",
    title: "Dia de jogo",
  },
  {
    id: "contact",
    title: "Linha Kids",
  },
  {
    id: "contact",
    title: "Conheça mais",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 bg-indigo-700`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={NikeLogo}
            height={32}
            width={32}
            className="w-9 h-9 object-contain"
          ></Image>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* <Image
            src={toggle ? close : menu}
            width={32}
            height={32}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          /> */}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
