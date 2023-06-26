import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

type Props = {};

function Shelf({}: Props) {
  return (
    <div
      className="h-screen relative md:w-max w-full flex flex-col justify-center items-center "
      style={{
        backgroundImage: "url('/bg6.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-16 xl:top-10 md:top-14 titlecard flex flex-col justify-center items-center ">
        <h1 className="ml-5 uppercase md:tracking-[20px] tracking-[10px] text-gray-100 md:text-2xl text:sm md:top-[-50px] ">
          Sculptures
        </h1>
        <p className="text-sm ">These are my few sculptures.</p>
      </div>
      <div className="flex h-max flex-col md:flex-row overflow-x-scroll w-max gap-10  mt-36">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="w-[400px] h-[500px] md:h-max border border-black border-e-8 bg-gray-700 hover:bg-gray-900 rounded-lg p-1 hover:z-50 "
        >
          <div className="relative w-full h-56">
            <Image
              fill
              src="/deer.jpeg"
              alt="book"
              className=" object-cover     "
            />
          </div>
          <div className="">
            <h1 className="text-3xl font-extrabold hover:text-[#f7ab0a] mb-3 mt-3">
              Maaricha
            </h1>
            <p>
              A black sculpture of Maricha, the deer rakshasa from the Ramayana,
              emanates an eerie aura. Its intricate design captures the
              malevolent gaze and mystical essence of the beast. Adorned in
              obsidian, the sculpture embodies the treacherous temptations faced
              by Rama and the heroes, leaving viewers captivated by its
              enigmatic presence.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="w-[400px]   h-[475px] md:h-max border border-black border-e-8 border-s-8 bg-gray-700 hover:bg-gray-900 rounded-lg p-1 hover:z-50"
        >
          <div className="relative w-full h-56">
            <Image fill src="/prg.jpeg" alt="book" className=" object-cover" />
          </div>
          <div className="">
            <h1 className="text-3xl font-extrabold hover:text-[#f7ab0a] mb-3 mt-3">
              Garbhadharini
            </h1>
            <p>
              A captivating ebony sculpture portrays the divine beauty of a
              pregnant woman. Smooth curves embrace her burgeoning belly, an
              embodiment of strength and creation. In its obsidian essence, it
              evokes the awe-inspiring journey of motherhood, celebrating the
              universal power of life, love, and the eternal bond between mother
              and child.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="w-[400px]   h-[450px] md:h-max border border-black border-e-8 bg-gray-700 hover:bg-gray-900 rounded-lg p-1 hover:z-50"
        >
          <div className="relative w-full h-56">
            <Image fill src="/seed.jpeg" alt="book" className=" object-cover" />
          </div>
          <div className="">
            <h1 className="text-3xl font-extrabold hover:text-[#f7ab0a] mb-3 mt-3">
              Dhaare
            </h1>
            <p>
              black sculpture depicts a wild fruit, its form captivatingly
              captured in ebony tones. Its curves and textures intricately
              carved, this sculpture emanates the essence of bounty of nature. An
              enigmatic object of artistic allure, it entices viewers to ponder
              the mysteries and flavors concealed within its dark allure.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Shelf;
