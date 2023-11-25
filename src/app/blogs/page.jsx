import BlogHero from "@/Components/BlogHero";
import BlogPara from "@/Components/BlogPara";
import GetInTouch from "@/Components/GetinTouch";
import LearnMore2 from "@/Components/LearnMore2";
import LearnMoreMobile from "@/Components/LearnMoreMobile";
import Image from "next/image";
import counselling from "@/Images/counselling.svg";
import LearnMoreCarousel from "@/Components/LearnMoreCarousel";
export default function BlogPage(){
    return(
    <>
        <main className="hidden md:block">
            <div className="flex items-center justify-center">
            <BlogHero/>
            </div>
            <div className="" >

            <BlogPara/>
            </div>
            <div className="mt-5 mb-20">
                <LearnMore2/>
            </div>
            {/* <div className="mx-10 mb-[30px] z-10">
                <GetInTouch/>
            </div> */}
            
        </main>
        <main className="md:hidden ">
            <div className="flex items-center justify-center">

            <Image src={counselling} alt="" className="px-8 pt-3" loading="lazy"  />
            </div>
            <BlogPara/>
            <div className="mx-4 my-3">

            <LearnMoreCarousel/>
            </div>
            
        </main>
    </>
    )
}