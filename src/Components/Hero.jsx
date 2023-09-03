//module imports
import Image from "next/image";
//comp import
import HerosectionImage from "@/Images/herosection.png";
import underline from '@/Images/underline.png'

export default function Hero() {
  return (
    <div className="flex items-center mt-16 px-10 mx-10">
      <section>
        <h1 className="text-[52px] font-light text-[#3D3D3D]">
          Your 
          <span className="">
            <Image src={underline} alt="underline" className="absolute ml-[300px] mt-[-20px]"/>
          </span>
          <span className="text-[#F22D36] font-bold">
            {''} Success Journey
          </span>{' '}
          start with us!
        </h1>
        <p className="text-[#3D3D3D] font-light py-5">We fulfill your dream to study at top universities abroad.</p>
        <button className="bg-[#0149A5] px-3 py-2 rounded text-white mt-5 hover:scale-110 transition ease-in-out duration-300">LEARN MORE</button>
      </section>
      <section>
        <Image src={HerosectionImage} alt="girl holding books"/>
      </section>
    </div>
  );
}
