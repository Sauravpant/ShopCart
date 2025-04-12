import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import banner1 from "../../assets/images/banner1.png"
import banner2  from "../../assets/images/banner2.png"
import banner3 from "../../assets/images/banner3.png"

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Exclusive Collection",
      tagline: "Limited Edition Designs",
      image: banner1,
      cta: "Shop Now",
      textPosition: "right" // 'left' or 'right'
    },
    {
      title: "Summer Sale",
      tagline: "Up to 60% Off Selected Items",
      image: banner2,
      cta: "Discover Deals",
      textPosition: "left"
    },
    {
      title: "New Arrivals",
      tagline: "Fresh Styles Just Landed",
      image: banner3,
      cta: "Explore",
      textPosition: "right"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen max-h-[700px] overflow-hidden">
      {/* Slides */}
      <div className="flex h-full transition-transform duration-500 ease-in-out" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            {/* Full-width background image */}
            <div className="absolute inset-0 bg-black/30"></div>
            <img 
              src={slide.image} 
              alt=""
              className="w-full h-full object-cover object-center"
            />
            
            {/* Text overlay - positioned left/right alternatively */}
            <div className={`absolute inset-0 flex items-center ${slide.textPosition === 'left' ? 'justify-start pl-20' : 'justify-end pr-20'}`}>
              <div className={`max-w-md text-white ${slide.textPosition === 'left' ? 'text-left' : 'text-right'}`}>
                <span className="text-lg font-medium tracking-widest">NEW COLLECTION</span>
                <h1 className="text-5xl font-bold mt-2 mb-4 leading-tight">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.tagline}</p>
                <button className="px-8 py-3 bg-white text-black font-medium hover:bg-opacity-90 transition-all">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Outside text area */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all"
      >
        <FiChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all"
      >
        <FiChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;