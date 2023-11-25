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
import underline from "@/Images/underline_two.svg";
import FlagCarousel from "./flagCarousel";

export default function Topdestination() {
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
      image: ausflag,
      title: "AUSTRALIA",
    },
    {
      id: 2,
      image: usaflag,
      title: "USA",
    },
    {
      id: 3,
      image: canadaflag,
      title: "CANADA",
    },
    {
      id: 4,
      image: ukflag,
      title: "UK",
    },
    {
      id: 5,
      image: denmarkflag,
      title: "DENMARK",
    },
  ];
  return (
    <>
      <main className="hidden md:block">
        <div className="flex flex-col items-center justify-center gap-10 my-10 flex-wrap  ">
          <section>
            <Image
              src={underline}
              alt="underline"
              className="absolute md:ml-[245px] mt-[45px]"
            />
            <h1 className=" text-[32px] md:text-[40px] font-bold  text-[#3D3D3D]">
              TOP DESTINATION
            </h1>
          </section>
          <section className="flex items-center justify-center gap-24 flex-wrap ">
           
            <section>
              <Image src={canadaflag} alt="Canada flag" />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                CANADA
              </h1>
            </section>
           
           
          </section>
        </div>
      </main>
      <main className="md:hidden">
        <div className="flex flex-col items-center justify-center gap-10 my-10  ">
          <section>
            <Image
              src={underline}
              alt="underline"
              className="absolute ml-[170px] mt-[40px]"
            />
            <h1 className=" text-[32px] font-bold  text-[#3D3D3D]">
              TOP DESTINATION
            </h1>
          </section>
        </div>
          <section className=" space-x-10">
            <FlagCarousel/>
          </section>
      </main>
    </>
  );
}
