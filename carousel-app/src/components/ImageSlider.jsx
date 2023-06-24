import { useState } from "react";
import ImageData from "../data/ImageData";

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => { 
    current === 0 ? setCurrent(ImageData.length - 1) : setCurrent(current - 1);
  }

  const nextSlide = () => {
    current === ImageData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  }

  return (
    <section className="relative flex h-screen justify-center items-center bg-gray-950">
      <p onClick={prevSlide} className="absolute top-1/2 left-10 z-10 text-3xl font-bold text-white cursor-pointer">Previous</p>
      <p onClick={nextSlide} className="absolute top-1/2 right-10 z-10 text-3xl font-bold text-white cursor-pointer">Next</p>
      {ImageData.map((data, index) => {
        return (
          <div className={index === current ? "opacity-100 ease-linear duration-300" : "opacity-0"} key={index}>
            {index === current && (
              <div className="justify-center items-center flex flex-col">
                <img
                  src={data.image}
                  alt={data.title}
                  width="50%"
                  className="rounded-xl drop-shadow-[0_0_1.5rem_rgba(150,150,255,.25)]"
                />
                <p className="text-teal-400 mt-10 font-semibold text-2xl">{data.title}</p>
              </div>              
            )}
          </div>
        );
      })}
    </section>
  );
}