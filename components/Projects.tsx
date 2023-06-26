import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";

function App() {
  const slides = [
    {
      url: "/temple.png",
      title: "Temple website",
      description: "Our village temple website, built with NextJs, framer motion etc.",
      link: "https://shambhulingeshwara.vercel.app/",
    },
    {
      url: "/games.png",
      title: "Games website",
      description: "3 games built with JS, HTML, CSS",
      link: "https://github.com/AnanthChand/games"
    },

    {
      url: "/port.png",
      title: "Portfolio",
      description: "This is a simple portfolio built using React and vite.",
      link: "https://github.com/AnanthChand/Minimalistic-Portfolio"

    },
    {
      url: "/sum-it.png",
      title: "Sum-it",
      description: "My personal blog site built with ReactJS, MongoDb, expressJS framer-motion etc.",
      link: "https://github.com/AnanthChand/games"

    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: "url('/bg3.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat",
      }}
    >

    <div className="h-screen w-full flex flex-col justify-center items-center relative m-0">
      <div className="text-black absolute md:top-10 top-16 uppercase md:tracking-[10px] text-2xl ">UI-DESIGNS</div>
    <div className='max-w-[1100px] h-[600px] w-full m-auto py-16 px-4 relative group'>
    <Link href={slides[currentIndex].link} ><div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full rounded-2xl bg-center flex flex-col justify-center items-center bg-cover duration-500'
    >
    </div></Link>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col justify-center items-center absolute md:bottom-10 bottom-10">
    <h1 className="md:text-2xl uppercase  text-xl font-bold text-black">{slides[currentIndex].title}</h1>
    <p className="md:text-xl text-sm text-black">{slides[currentIndex].description}</p>
    </div>
    </div>
    </div>
  );
}

export default App;
