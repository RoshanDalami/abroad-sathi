"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//module imports
import Image from "next/image";
//images and comp
import ausflag from "@/Images/ausflag.svg";
import usaflag from "@/Images/usaflag.svg";
import canadaflag from "@/Images/canadaflag.svg";
import ukflag from "@/Images/ukflag.svg";
import denmarkflag from "@/Images/denmarkflag.svg";

export default function FlagCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const data = [
    {
      id: 3,
      image: canadaflag,
      title: "CANADA",
    },
  ];
  return (
    <main className="mx-2 ">
      <div>
        <section className="">
       
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <section className="flex flex-col items-center">
                    <Image src={item.image} alt="austraila flag" />
                    <h1 className="text-[28px] text-center  mt-3 font-bold text-[#3D3D3D]">
                      {item.title}
                    </h1>
                  </section>
                </div>
              );
            })}
       
        </section>
      </div>
    </main>
  );
}
