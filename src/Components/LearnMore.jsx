//module imports
import Image from "next/image";

//comps and Images imports
import underline from "@/Images/underline_two.svg";
import counselling from "@/Images/counselling.svg";
import LearnMoreCarousel from "./LearnMoreCarousel";

export default function LearnMore() {
  return (
    <>
    <main className="hidden md:block">
    <div className="flex flex-col gap-10 items-center justify-center">
      <section>
        <h1 className="text-[40px] text-[#3D3D3D] font-bold">
          LEARN MORE ABOUT US
        </h1>
        <Image
          src={underline}
          alt="underline "
          className="absolute ml-[330px] mt-[-20px] "
          loading="lazy"
        />
      </section>
      <section className="flex gap-10">
        <section className="flex items-center justify-center ">
          <Image
            src={counselling}
            alt="counselling image"
            className=" relative"
            loading="lazy"
          />
          <button className="border-2 border-white text-white px-3 py-2 rounded absolute mt-[170px] hover:scale-110 transition ease-in-out duration-300">
            KNOW MORE
          </button>
        </section>
        <section className="flex items-center justify-center  ">
          <Image
            src={counselling}
            alt="counselling image"
            className=" relative"
            loading="lazy"
          />
          <button className="border-2 border-white text-white px-3 py-2 rounded absolute mt-[170px] hover:scale-110 transition ease-in-out duration-300">
            KNOW MORE
          </button>
        </section>
        <section className="flex items-center justify-center ">
          <Image
            src={counselling}
            alt="counselling image"
            className=" relative"
            loading="lazy"
          />
          <button className="border-2 border-white text-white px-3 py-2 rounded absolute mt-[170px] hover:scale-110 transition ease-in-out duration-300">
            KNOW MORE
          </button>
        </section>
      </section>
    </div>
    </main>
    <main className="md:hidden" >
    <div className="flex flex-col gap-10 items-center justify-center">
      <section>
        <h1 className="text-[32px] text-[#3D3D3D] font-bold">
          LEARN MORE ABOUT US
        </h1>
        <Image
          src={underline}
          alt="underline "
          className="absolute ml-[30px] mt-[-12px]  "
          loading="lazy"
        />
      </section>
    </div>
      <section className="my-10">
       <LearnMoreCarousel/>
      </section>
    </main>
    </>
  );
}
