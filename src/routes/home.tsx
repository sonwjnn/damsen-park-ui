import { useState } from "react";

export const Component = function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/home-slide1.png",
    "/home-slide1.png",
    "/home-slide1.png",
    "/home-slide1.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-full">
      <div className="absolute inset-0">
        <img
          src={`/public/${slides[currentSlide]}`}
          alt="Dam Sen Park"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-x-0 bottom-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-[#259E58] border border-white"
                : "bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full size-[64px] flex items-center justify-center"
        onClick={prevSlide}
      >
        <img src="/icons/chevron-left.png" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full size-[64px] flex items-center justify-center"
        onClick={nextSlide}
      >
        <img src="/icons/chevron-right.png" />
      </button>
      <div className="absolute inset-x-0 bottom-20 flex justify-center">
        <button className="bg-[#259e58] text-white px-6 py-3 rounded-md font-bold text-lg hover:brightness-110 transition duration-300">
          KHÁM PHÁ NGAY
        </button>
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col space-y-4">
        <button className="bg-white rounded-full p-3">
          <img src="/icons/phone-flip.png" className="text-green-600 size-5" />
        </button>
        <button className="bg-white rounded-full p-3">
          <img src="/icons/message.png" className="text-green-600 size-5" />
        </button>
      </div>
    </div>
  );
};
