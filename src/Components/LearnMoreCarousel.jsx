"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import counselling from "@/Images/counselling.svg";
export default function LearnMoreCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      id: 1,
      butttonTitle: "KNOW MORE",
      image: counselling,
    },
    {
      id: 2,
      butttonTitle: "KNOW MORE",
      image: counselling,
    },
    {
      id: 3,
      butttonTitle: "KNOW MORE",
      image: counselling,
    },
  ];
  return (
    <div className="mx-1 ">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <section key={item.id}>
              <Image src={item.image} alt="counselling image" className=" " loading="lazy" />
              <button className="text-white border-2 border-white px-5 py-2 rounded-md absolute mt-[-80px] ml-[80px] ">
                {item.butttonTitle}
              </button>
            </section>
          );
        })}
      </Slider>
    </div>
  );
}
