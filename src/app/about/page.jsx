import About from "@/Components/AboutUs";
import GetInTouch from "@/Components/GetinTouch";
import LearnMore from "@/Components/LearnMore";
import OurMission from "@/Components/OurMission";

export default function AboutPage() {
  return (
    <main className="">
      <About />
      <OurMission />
      <div className="hidden md:block">

      <LearnMore />
      </div>
      <div className=" px-14 py-10  ">
        <GetInTouch />
      </div>
    </main>
  );
}
