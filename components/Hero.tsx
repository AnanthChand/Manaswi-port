import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Sacramento } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: ["900", "700"],
  subsets: ["cyrillic", "latin"],
});
const sacramento = Sacramento({ weight: ["400"], subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
const inter = Inter({ weight: ["600"], subsets: ["latin"] });
const inter400 = Inter({ weight: ["400"], subsets: ["latin"] });

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [" An UX/UI Designer ", "A Sculptor", ],
    loop: true,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div
      className="bg-contain bg-center"
      style={{
        backgroundImage: "url('/mb.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Your content here */}

      <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-8 ">
        {/* <BackgroundCircles /> */}
        <div className="rounded-xl h-32 object-cover w-32 relative mx-auto">
          {/* <Image
            src="/m.jpg"
            alt=""
            className="rounded-xl h-32 object-cover w-32 relative mx-auto"
            fill
          /> */}
        </div>
        <div className="z-20">
          <div className={inter.className}>
            <h1 className=" text-6xl text-white shadow-blue-500 ">Manaswi Hegde</h1>
            <h1 className="mt-2 mb-2">
              <span className="{inter.className} bg-[#323231] text-white/90 p-1 border rounded-sm border-black/10 ">
                {text}
              </span>
              <span className="">
                <Cursor cursorColor="white" />
              </span>
            </h1>
          </div>
          <div className={inter400.className}>
            <Link href="#about">
              <button className="px-6 py-3 border border-transparent rounded-xl uppercase text-xs tracking-widest text-white transition-all hover:border-[#000000] hover:text-[#f7ab0a] ">
                About
              </button>
            </Link>
            <Link href="#shelf">
              <button className="px-6 py-3 border border-transparent rounded-xl uppercase text-xs tracking-widest textwhite0 transition-all hover:border-[#000000] hover:text-[#f7ab0a]">
              SculptureS
              </button>
            </Link>
            <Link href="#projects">
              <button className="px-6 py-3 border border-transparent rounded-xl uppercase text-xs tracking-widest text-white transition-all hover:border-[#000000] hover:text-[#f7ab0a]">
                UI-DESIGNS
              </button>
            </Link>
            <Link href="#skills">
              <button className="px-6 py-3 border border-transparent rounded-xl uppercase text-xs tracking-widest text-white transition-all hover:border-[#000000] hover:text-[#f7ab0a]">
                Skills
              </button>
            </Link>

            <Link href="#contact">
              <button className="px-6 py-3 border border-transparent rounded-xl uppercase text-xs tracking-widest text-white transition-all hover:border-[#000000] hover:text-[#f7ab0a]">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
