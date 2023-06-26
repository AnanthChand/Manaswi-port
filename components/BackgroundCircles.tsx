import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [.1,0,.3, 0,.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#ffffff]/40 rounded-xl h-[200px] w-[200px] mt-48 animate-ping " />
      <div className="absolute border border-[#ffffff] rounded-xl h-40 w-40 mt-48  animate-pulse " />
      <div  className="absolute border border-[#ffffff]/60 rounded-xl h-[250px] w-[250px] mt-48 animate-ping " />

      {/* <div className="absolute border border-[#4a4646] rounded-xl h-[400px] w-[400px] mt-52 animate-pulse " />
      <div className="absolute border border-[#4a4646] rounded-xl h-[800px] w-[800px] mt-52 " /> */}
    </motion.div>
  );
}
