//module imports
import Image from "next/image"

//images and comp imports
import newsletter from '@/Images/newsletter.svg';
import underline from '@/Images/underline_two.svg'

export default function Newsletter(){
    return(
        <div className="border-2 border-[#0149A5] rounded flex items-center justify-between flex-wrap">
            <section>
                <Image src={newsletter} alt=""/>
            </section>
            <section className=" px-16">
                <div>
                <h1 className="text-[40px] font-bold text-[#3D3D3D]" >SUBSCRIBE TO OUR NEWSLETTER
                </h1>
                    <Image src={underline} className="absolute ml-[530px] mt-[-10px]" alt="underline "/>
                </div>
                <p className="text-[28px] text-[#3D3D3D]">
                Subscribe to our newsletter and stay updated!
                </p>
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <label className="text-[20px] font-light">
                            Email
                        </label>
                        <input type='email' className="border-2 border-black/30 rounded px-3 py-2 " placeholder="Email"/>
                    </div>
                    <button className="bg-[#0149A5] text-white font-normal py-[10px] rounded-md ">SUBSCRIBE</button>
                </form>


            </section>
        </div>
    )
}