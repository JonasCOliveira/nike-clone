import Image from "next/image";

import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Overlay from "./Components/Overlay";
import Products from "./Components/Products";
import Membership from "./Components/Membership";
import Mais from "./Components/Mais";

export default function Home() {
  return (
    <div className="bg-[#d0d0d0]  w-full mx-auto z-1 flex flex-col flex-1">
      {/* relative */}
      <NavBar />
      <Hero />
      <Overlay />
      <Products />
      <Membership />
      <Mais />
    </div>
  );
}
