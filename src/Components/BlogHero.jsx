import Image from "next/image"
import banner from '@/Images/blog_final.jpg';


export default function BlogHero(){
    return(
        <main >
            <div className="m-10 flex items-end " >
               
                <div className=" absolute text-white flex flex-col gap-3   justify-end  py-14 px-10   ">
                    <p className="text-[20px]">Abroad Sathi | 06-04-2023</p>
                    <h1 className="text-[28px]">How to Choose the Right College Major: Tips and Advice</h1>

                </div>
                <Image src={banner} alt="saminar" className=""   />
            </div>
        </main>
    )
}