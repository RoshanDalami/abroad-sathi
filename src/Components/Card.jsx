import image1 from "@/Images/audit.png";
import Image from "next/image";
export default function Card({ image, title, description, title2 , buttonText }) {
  return (
    <div className="rounded-lg border-2 border-[#0149A5] w-[380px] flex flex-col gap-5 items-center">
      <section className="bg-[#0149A5] p-5 rounded-full mt-[-40px]">
        <Image src={image} alt="image1" />
      </section>
      <section>
        <h1 className=" text-[24px] md:text-[28px] text-[#3D3D3D] font-bold text-center mx-2 ">
          {title} <br></br>
          {title2}
        </h1>
      </section>
      <section>
        <p className="text-center text-[16px] md:text-[20px] font-light mx-6">
          {description}
        </p>
      </section>
      <section className="mb-8">
        <button className="px-3 py-1 rounded border-2 border-[#0149A5] text-[#0149A5] hover:scale-110 hover:bg-[#0149A5] hover:text-white transition ease-in-out duration-300">
          {buttonText}
        </button>
      </section>
    </div>
  );
}
