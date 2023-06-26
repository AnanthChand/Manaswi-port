import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky flex p-5 justify-between max-w-5xl items-start top-0 mx-auto z-20 xl:items-center">
      <div className="flex">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.instagram.com/ananth_chandra_/"
            fgColor="grey"
            bgColor="transparent"
            className="scale-75"
          />
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://github.com/AnanthChand"
            fgColor="grey"
            bgColor="transparent"
            className="scale-75"
          />
        </motion.div>
      </div>

      <Link href="#contact" className="flex items-center justify-center">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col jus items-center"
        >
          <SocialIcon
            url="https://email.com/"
            fgColor="grey"
            bgColor="transparent"
            className="cursor-pointer scale-75"
          />
        </motion.div>
        
      </Link>
    </header>
  );
}
