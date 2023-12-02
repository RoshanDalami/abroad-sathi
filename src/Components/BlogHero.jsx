import Image from "next/image"
import banner from '@/Images/blog_final.jpg';


export default function BlogHero(){
    const date = new Date()
    const Day = date.getDate()

    const Month = date.getMonth() + 1
    const Year = date.getFullYear()
    return(
        <main >
            <div className="m-10 flex items-end " >
               
                <div className=" absolute text-white flex flex-col gap-3   justify-end  py-14 px-10   ">
                    <p className="text-[20px]">Abroad Sathi | {`${Day}-${Month}-${Year}`} </p>
                    <h1 className="text-[28px]">How to Choose the Right College Major: Tips and Advice</h1>

                </div>
                <Image src={banner} alt="saminar" className="" loading="lazy"   />
            </div>
        </main>
    )
}