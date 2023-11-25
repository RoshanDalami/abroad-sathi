//module imports
import Image from "next/image";

//images and comp imports
import newsletter from "@/Images/newsletter.svg";
import underline from "@/Images/underline_two.svg";

export default function Newsletter() {
  return (
    <>
      <main className="hidden md:block">
        <div className="border-2 border-[#0149A5] rounded flex items-center justify-between ">
          <section>
            <Image src={newsletter} alt="" width={600} height={300} loading="lazy" />
          </section>
          <section className=" px-16 max-w-5xl ">
            <div>
              <h1 className="text-[40px] font-bold text-[#3D3D3D]">
                SUBSCRIBE TO OUR NEWSLETTER
              </h1>
              <Image
                src={underline}
                className="absolute ml-[530px] mt-[-10px]"
                alt="underline "
                loading="lazy"
              />
            </div>
            <p className="text-[28px] text-[#3D3D3D]">
              By subscribing you can know about discouts and offers on date
              booking and online classes !
            </p>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-[20px] font-light">Email</label>
                <input
                  type="email"
                  className="border-2 border-black/30 rounded px-3 py-2 "
                  placeholder="Email"
                />
              </div>
              <button className="bg-[#0149A5] text-white font-normal py-[10px] rounded-md ">
                SUBSCRIBE
              </button>
            </form>
          </section>
        </div>
      </main>
      <main className="md:hidden">
        <div className="border-2 border-[#0149A5] rounded flex items-center justify-between flex-wrap gap-8">
          <section className="px-5">
            <div className="mb-[20px]">
              <h1 className="text-[28px] font-bold text-[#3D3D3D]">
                SUBSCRIBE TO OUR NEWSLETTER
              </h1>
              <Image
                src={underline}
                className="absolute ml-[50px] mt-[-10px] "
                alt="underline  "
                loading="lazy"
              />
            </div>
            <p className="text-[20px] text-[#3D3D3D] mb-6 text-left">
              By subscribing you can know about discouts and offers on date
              booking and online classes!
            </p>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-[16px] font-light ">Email</label>
                <input
                  type="email"
                  className="border-2 border-black/30 rounded px-3 py-2 "
                  placeholder="Email"
                />
              </div>
              <button className="bg-[#0149A5] text-white font-normal py-[10px] rounded-md ">
                SUBSCRIBE
              </button>
            </form>
          </section>
          <section>
            <Image src={newsletter} alt="" loading="lazy" />
          </section>
        </div>
      </main>
    </>
  );
}
