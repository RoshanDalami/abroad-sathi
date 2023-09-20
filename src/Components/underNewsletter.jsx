//module import
import Image from "next/image"

//images and comp. imports
import undernewsletter from '@/Images/undernewsletter.svg';
import underline from '@/Images/underline_two.svg';

export default function Undernewsletter(){
    return (
      <>
        <main className=" hidden md:block">
          <div className="flex items-center justify-between flex-wrap">
            <section className="w-[50%]">
              <h1 className="text-[40px] font-bold text-[#3D3D3D]">
                UNLEASHING YOUR POTENTIAL
              </h1>
              <Image
                src={underline}
                alt="underline svg"
                className="absolute ml-[480px] mt-[-20px]"
              />
              <p className="text-[28px] text-[#3D3D3D] font-semibold">
                Choose us for Unrivaled Expertise & Results
              </p>
              <p className="text-[20px] text-[#3D3D3D] py-2">
                When it comes to achieving lasting success, there&apos;s no
                better partner than our consultancy. With a legacy of excellence
                and an unwavering commitment to empowering individuals and
                businesses, we possess unmatched expertise that sets us apart
                from the rest. Our seasoned team of industry specialists
                understands the intricacies of diverse sectors, enabling us to
                offer tailored strategies that optimize performance, drive
                innovation, and fuel exponential growth. We pride ourselves on
                forging strong, long-lasting partnerships, standing
                shoulder-to-shoulder with our clients throughout their journey
                towards success.
              </p>
            </section>
            <section>
              <Image src={undernewsletter} alt="image of girl holding book" />
            </section>
          </div>
        </main>
        <main className="md:hidden">
          <div className="flex items-center justify-between flex-wrap gap-10">
            <section className="">
              <h1 className="text-[32px] font-bold text-[#3D3D3D]">
                UNLEASHING YOUR POTENTIAL
              </h1>
              <Image
                src={underline}
                alt="underline svg"
                className="absolute ml-[50px] mt-[-10px] "
              />
              <p className="text-[20px] text-[#3D3D3D] font-medium mb-2">
                Choose us for Unrivaled Expertise & Results
              </p>
              <p className="text-[20px] text-[#3D3D3D] ">
                When it comes to achieving lasting success, there&apos;s no
                better partner than our consultancy. With a legacy of excellence
                and an unwavering commitment to empowering individuals and
                businesses, we possess unmatched expertise that sets us apart
                from the rest. Our seasoned team of industry specialists
                understands the intricacies of diverse sectors, enabling us to
                offer tailored strategies that optimize performance, drive
                innovation, and fuel exponential growth. We pride ourselves on
                forging strong, long-lasting partnerships, standing
                shoulder-to-shoulder with our clients throughout their journey
                towards success.
              </p>
            </section>
            <section>
              <Image src={undernewsletter} alt="image of girl holding book" />
            </section>
          </div>
        </main>
      </>
    );
}