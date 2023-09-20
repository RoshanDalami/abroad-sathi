import BlogHero from "@/Components/BlogHero";
import GetInTouch from "@/Components/GetinTouch";
import LearnMore2 from "@/Components/LearnMore2";
import LearnMoreMobile from "@/Components/LearnMoreMobile";

export default function BlogPage(){
    return(
    <>
        <main className="hidden md:block">
            <div className="flex items-center justify-center">
            <BlogHero/>
            </div>
            <div className="mt-5 mb-20">
                <LearnMore2/>
            </div>
            <div className="mx-10 mb-[30px] z-10">
                <GetInTouch/>
            </div>
            
        </main>
        <main className="md:hidden ">
            <div className="mx-10">
                <LearnMoreMobile/>
            </div>
            <div className="mb-[-50px] md:mb-0">
                <GetInTouch/>
            </div>
        </main>
    </>
    )
}