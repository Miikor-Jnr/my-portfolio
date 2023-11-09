import Link from "next/link";
import React from "react";
import { TiTick } from "react-icons/ti";

export function AboutPage() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <img src="/images/mine.jpg" alt="cover" />
      </div>
      <div className="px-[30px] py-[50px]">
        <h3
          className="text-[48px] font-bold animate__animated animate__fadeInUp"
          id="about"
        >
          About Me
        </h3>
        <p className="text-[18px] animate__animated animate__fadeInUp gray mt-[20px]">
          An adept full stack developer with experience translating UI/UX
          designs into responsive and scalable websites and web applications.
          Proficient in gathering and evaluating technical requirements to
          deliver high-quality solutions. Strong team player and collaborator
          with a passion for creating exceptional user experiences.{" "}
        </p>
        <table className="mt-[30px]">
          <tbody>
            <tr>
              <td className="p-[10px] text-[18px] font-semibold">Name</td>
              <td className="p-[10px] text-[18px] gray">Miikor Barilelo</td>
            </tr>
            <tr>
              <td className="p-[10px] text-[18px] font-semibold">Address</td>
              <td className="p-[10px] text-[18px] gray">
                Port Harcourt, Nigeria
              </td>
            </tr>
            <tr>
              <td className="p-[10px] text-[18px] font-semibold">Zip Code</td>
              <td className="p-[10px] text-[18px] gray">500004</td>
            </tr>
            <tr>
              <td className="p-[10px] text-[18px] font-semibold">Email</td>
              <td className="p-[10px] text-[18px] gray">
                miikorbarilelo@gmail.com
              </td>
            </tr>
            <tr>
              <td className="p-[10px] text-[18px] font-semibold">Phone</td>
              <td className="p-[10px] text-[18px] gray">
                +234 9061310424 | +234 9024892998
              </td>
            </tr>
            <tr>
              <td className="p-[10px] text-[18px] font-semibold">LinkedIn</td>
              <td className="p-[10px] text-[18px] gray">
                <Link href={" https://www.linkedin.com/in/barilelo-miikor"}>
                  {" "}
                  https://www.linkedin.com/in/barilelo-miikor
                </Link>
              </td>
            </tr>
            <tr>
              <td className="p-[10px] text-[18px] font-semibold">Github</td>
              <td className="p-[10px] text-[18px] gray">
                <Link href={"https://github.com/Miikor-Jnr"}>
                  https://github.com/Miikor-Jnr
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-[50px] w-fit">
          <div className="flex items-center gap-x-[10px]">
            <p className="text-[24px]">
              <span className="text-blue-700 font-semibold">20+</span> Projects
              Completed
            </p>
            <div className="rounded-[50%] p-[8px] bg-blue-700 grid place-items-center">
              <TiTick style={{ fontSize: "30px", color: "white" }} />
            </div>
          </div>
          <button
            className="px-[50px] py-[18px] bg-blue-700 text-white rounded-[15px] w-full text-[18px] font-semibold hover:bg-white hover:text-blue-700 mt-[50px]"
            style={{
              border: "1.5px solid rgb(59 130 246)",
              transition: "all 0.3s linear",
            }}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
