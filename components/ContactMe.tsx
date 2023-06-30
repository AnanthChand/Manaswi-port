import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const mailtoLink = `mailto:manaswiphegde@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      style={{
        backgroundImage: "url('/bg3.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen  flex relative flex-col text-center md:text-left mx-auto items-center md:flex-row max-w-7xl px-10 justify-evenly "
    >
      <motion.h3 initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }} className=" absolute top-24 uppercase tracking-[10px] text-gray-900 text-4xl flex justify-center items-center md:left-59 animate-pulse animate-ping">
        Contact me 
      </motion.h3>
      <div className="flex flex-col space-y-10 text-black absolute top-44  ">
        <div>
          
          <div className="flex items-center space-x-5 justify-center animate-pulse">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p>manaswiphegde@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center animate-pulse">
          </div>
          <div className="flex items-center space-x-5 justify-center animate-pulse">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p>+91 79754 44273</p>
          </div>
        </div>
<div className="w-96 md:w-max   ">
        <motion.form initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          onSubmit={handleSubmit(onSubmit)}
          action="post"
          className="flex flex-col  space-y-4 mx-auto"
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="E-mail"
              className="contactInput w-full overflow-scroll"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md font-extrabold uppercase hover:rounded-lg hover:bg-[#ffd579] text-black"
          >
            Submit
          </button>
        </motion.form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
