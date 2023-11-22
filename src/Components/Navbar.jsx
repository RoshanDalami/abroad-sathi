"use client";
//modules import
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { NavLink } from "./NavLink";


//component imports
import Button from "./Button";
import Logo from "@/Images/logo.png";
import { useState , useLayoutEffect  } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const onHomeClick = () => {
    router.push("/");
    setTimeout(() => {
      setIsMobile(false);
    }, 500);
  };
  const onAboutClick = () => {
    router.push("/about");
    setTimeout(() => {
      setIsMobile(false);
    }, 500);
  };
  const onServiceClick = () => {
    window.scrollTo({
      top: 3100,
      behavior: "smooth",
    });
    setTimeout(() => {
      setIsMobile(false);
    }, 500);
  };
  const onBlogClick = () => {
    router.push("/blogs");
    setTimeout(() => {
      setIsMobile(false);
    }, 500);
  };
  const toggle = () => {
    setIsMobile((prevState) => !prevState);
  };
  useLayoutEffect(() => {
    function updateScrollPosition() {
      setScrollPosition(window.pageYOffset);
    }
    // Add an event listener to update the scroll position on scroll
    window.addEventListener("scroll", updateScrollPosition);

    // Call the update function initially to get the initial scroll position
    updateScrollPosition();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
 
  const handleService = () => {
    window.scrollTo({
      top: 990,
      behavior: "smooth",
    });
  };
  

  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigation = [
    { name: "HOME", href: "/", },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/#services " },
    { name: "BLOGS", href: "/blogs"},
  ];
  return (
    <>
      <div>
        <nav className="flex items-center my-3 justify-between px-10">
          <section>
            <Link href={"/"}>
              <Image src={Logo} alt="abroad sathi" height={45} width={45} />
            </Link>
          </section>
          <section className="hidden md:block">
            <ul className="flex gap-7 text-[#0F42AB]">
              {navigation.map((item) => (
                <Link href={item.href} key={nanoid()}>
                  <li  className={clsx(" cursor-pointer",{'text-red-600':item.href === pathname})} onClick={item.onclick} >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </section>
          <section className="hidden md:block">
            <Link href={"/contact"}>
              <Button>CONTACT</Button>
            </Link>
          </section>

          <section className=" block md:hidden" onClick={toggle}>
            {!isMobile ? (
              <RxHamburgerMenu className="text-3xl text-[#F22D36] cursor-pointer font-bold" />
            ) : (
              <RxCross1 className="text-3xl text-[#F22D36] cursor-pointer font-bold " />
            )}
          </section>
        </nav>
        {isMobile ? (
          <div className="flex flex-col gap-4 items-end px-10 justify-center ">
            <ul className="flex flex-col gap-7 text-[#0F42AB]">
              {navigation.map((item) => (
                <Link href={item.href} key={nanoid()}>
                <li  key={nanoid()} className=" cursor-pointer">
                  {item.name}
                </li>
                </Link>
              ))}
            </ul>
            <section className="">
              <Link href={"/contact"}>
                <Button>CONTACT</Button>
              </Link>
            </section>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
