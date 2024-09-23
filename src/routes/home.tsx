import { useState } from "react";
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";

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
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full size-[64px] flex items-center justify-center"
        onClick={prevSlide}
      >
        <img src="/public/icons/chevron-left.png" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full size-[64px] flex items-center justify-center"
        onClick={nextSlide}
      >
        <img src="/public/icons/chevron-right.png" />
      </button>
      <div className="absolute inset-x-0 bottom-20 flex justify-center">
        <button className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition duration-300">
          KHÁM PHÁ NGAY
        </button>
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button className="bg-white rounded-full p-3">
          <img
            src="/public/icons/phone-flip.png"
            className="text-green-600 size-5"
          />
        </button>
        <button className="bg-white rounded-full p-3">
          <img
            src="/public/icons/message.png"
            className="text-green-600 size-5"
          />
        </button>
      </div>
    </div>
  );
};
