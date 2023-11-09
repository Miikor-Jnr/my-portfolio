import Image from "next/image";
import "animate.css";
import { AboutPage } from "./components/About";
import Link from "next/link";
import { Education } from "./components/Education";

export default function Home() {
  return (
    <main>
      <header className="absolute w-full" style={{ zIndex: "30" }}>
        <nav className="px-[150px] py-[30px]">
          <ul className="flex items-center gap-x-[75px]">
            <li>
              <Link href={"/"} className="text-[18px]">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"/#about"} className="text-[18px]">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"/#resume"} className="text-[18px]">
                Resume
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"/#projects"} className="text-[18px]">
                Projects
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"/#contact"} className="text-[18px]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-[100vh] bg-blue-400 overflow-hidden grid place-items-center relative hover:bg-blue-200">
        <div
          className="h-[1200px] w-[1200px] bg-white main relative"
          style={{
            transform: "rotate(45deg)",
          }}
        >
          <div
            className="w-full h-full"
            style={{ background: "rgba(255,255,255, 0.85)" }}
          ></div>
        </div>
        <div
          className="animate__animated animate__backInDown absolute top-[25%] p-[3px] w-fit text-center bg-blue-700 overflow-hidden"
          style={{ transform: "translateY(-50%)" }}
        >
          <div
            className="bg-white p-[20px] w-full h-full"
            style={{ zIndex: 20 }}
          >
            <p className="font-bold text-[28px] text-blue-700">HEY, I AM</p>
            <h2 className="text-[72px] font-bold">
              Miikor <span className="">Barilelo</span>
            </h2>
            <p className="font-bold text-[28px]">
              I'm a <span className="text-blue-700">Web Developer</span>
            </p>
          </div>
          <div
            className="w-[150%] bg-white absolute h-[400px] left-[-20%] top-0 highlight"
            style={{ zIndex: -20 }}
          ></div>
        </div>
        <div className="w-[600px] top-[400px] bg-blue-800 absolute flex gap-x-[30px] justify-between p-[20px]">
          <div
            className="w-[150px] h-[150px] rounded-[50%] hover:bg-blue-400 bg-white cursor-pointer"
            style={{
              border: "1.5px solid white",
              transition: "all 0.5s ease-in",
            }}
          ></div>
          <div
            className="w-[150px] h-[150px] rounded-[50%] hover:bg-blue-400 bg-white cursor-pointer"
            style={{
              border: "1.5px solid white",
              transition: "all 0.5s ease-in",
            }}
          ></div>
          <div
            className="w-[150px] h-[150px] rounded-[50%] hover:bg-blue-400 bg-white cursor-pointer"
            style={{
              border: "1.5px solid white",
              transition: "all 0.5s ease-in",
            }}
          ></div>
        </div>
        <div className="absolute w-[500px] h-[100px] bg-blue-700 right-0 top-0"></div>
        <div className="absolute w-[350px] h-[100px] bg-blue-400 right-0 top-[100px]"></div>
      </div>
      <AboutPage />
      <Education />
    </main>
  );
}
