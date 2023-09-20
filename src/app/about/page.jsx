import About from "@/Components/AboutUs";
import GetInTouch from "@/Components/GetinTouch";
import LearnMore from "@/Components/LearnMore";
import OurMission from "@/Components/OurMission";

export default function AboutPage() {
  return (
    <main className="">
      <About />

      <OurMission />
      <div className="mx-10">
      <LearnMore />
      </div>
      <div className=" md:px-14 md:py-10 mb-[-50px] md:mb-0  ">
        <GetInTouch />
      </div>
    </main>
  );
}
