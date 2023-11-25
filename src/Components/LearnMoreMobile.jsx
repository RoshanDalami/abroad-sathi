//module imports
import Image from "next/image";

//comps and Images imports
import underline from "@/Images/underline_two.svg";
import counselling from "@/Images/counselling.svg";

export default function LearnMoreMobile() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <section className="flex flex-col my-10 gap-10">
        <section className="flex items-center justify-center ">
          <Image
            src={counselling}
            alt="counselling image"
            className=" relative"
            loading="lazy"
          />
          <button className="border-2 border-white text-white px-3 py-2 rounded absolute mt-[140px] hover:scale-110 transition ease-in-out duration-300">
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
          <button className="border-2 border-white text-white px-3 py-2 rounded absolute mt-[140px] hover:scale-110 transition ease-in-out duration-300">
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
          <button className="border-2 border-white text-white px-3 py-2 rounded absolute mt-[140px] hover:scale-110 transition ease-in-out duration-300">
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
          <button className="border-2 border-white text-white px-3 py-2 rounded absolute mt-[140px] hover:scale-110 transition ease-in-out duration-300">
            KNOW MORE
          </button>
        </section>
      </section>
    </div>
  );
}
