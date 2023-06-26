import React from "react";
import { motion } from "framer-motion";
import { Arimo } from "next/font/google";
import Image from "next/image";
import { Inter } from "next/font/google";
import { fadeIn, staggerContainer } from "../utils/motion";

const inter = Inter({ weight: ["600"], subsets: ["latin"] });

const arimo = Arimo({ weight: ["400"], subsets: ["cyrillic"] });

type Props = {};

function About({}: Props) {
  return (
    <div className={inter.className}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-contain bg-center"
        style={{
          backgroundImage: "url('/bg3.png')",
          backgroundSize: "cover",
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className=" h-screen flex flex-col relative md:top-24  text-center md:text-left md:flex-row px-10 max-w-7xl justify-around mx-auto items-center"
        >
          <h3 className=" absolute top-10  uppercase md:tracking-[20px] tracking-wide  text-gray-500 md:text-2xl text:sm md:top-[-50px]">
            About
          </h3>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 1.2 }}
            className="relative flex h-20 w-20 object-cover -mb-32  rounded-full flex-shrink-0  md:rounded-xl md:w-64 md:h-96 xl:h-[430px] xl:w-[300px] md:mb-20 md:ml-0"
          >
            <Image
              src="/m.jpg"
              fill
              alt=""
              className="object-cover rounded-lg hidden sm:block"
            />
          </motion.div>
          <div className={arimo.className}>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className=" text-[20px] text-black md:text-[25px] space-y-1 mb-2 md:mb-20 mt-9 px-0 md:my-0 md:px-10"
            >
              Hello there! I am a passionate graphic designer and a sculptor with a love
              for creating visually stunning arts of various kinds. I am currently pursuing my
              degree in graphic design and have completed numerous projects both
              inside and outside of the classroom.I am proficient in various
              design software such as Adobe Photoshop, Illustrator, and
              InDesign, and I am always seeking to expand my skills and
              knowledge to stay current with the latest design trends and
              techniques. My design philosophy is centered around the idea that
              good design should not only look beautiful, but it should also
              communicate a message effectively. I believe that every design
              should tell a story and evoke emotion, creating a connection
              between the viewer and the brand.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
