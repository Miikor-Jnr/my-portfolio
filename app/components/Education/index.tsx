import Link from "next/link";
import React from "react";
import { LuSchool } from "react-icons/lu";
export function Education() {
  return (
    <div className="grid grid-cols-6 px-[150px] mt-[200px]">
      <div className="col-span-2 sticky top-0">
        <ul className="flex flex-col gap-y-[15px] h-full">
          <li>
            <Link href={"#"} className="text-[18px] font-semibold">
              Education
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-[18px] font-semibold">
              Experience
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-[18px] font-semibold">
              Skills
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-[18px] font-semibold">
              Awards
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-4">
        <h4 className="font-bold text-[38px] text-blue-700" id="resume">
          Education
        </h4>
        <div className="flex gap-x-[15px] mt-[30px]">
          <div className="grid place-items-center p-[15px] bg-blue-700 rounded-[50%] w-fit h-fit">
            <LuSchool style={{ fontSize: "24px", color: "white" }} />
          </div>
          <div>
            <p className="font-bold text-[18px] text-blue-700">2017-2022</p>
            <p className="font-bold text-[24px]">
              Bachelor of Engineering in Petroleum and Gas Engineering
              (Petroleum)
            </p>
            <p className="font-bold text-[18px] mt-[10px]">
              University of Port Harcourt, Port Harcourt.
            </p>
            <p></p>
          </div>
        </div>
        <h4 className="font-bold text-[38px] text-blue-700 mt-[50px]">
          Experience
        </h4>
        <div className="flex gap-x-[15px] mt-[30px]">
          <div className="grid place-items-center p-[15px] bg-blue-700 rounded-[50%] w-fit h-fit">
            <LuSchool style={{ fontSize: "24px", color: "white" }} />
          </div>
          <div>
            <p className="font-bold text-[18px] text-blue-700">2022-2023</p>
            <p className="font-bold text-[24px]">Full Stack Developer</p>
            <p className="font-bold text-[24px] mt-[10px]">DivineAssistants</p>
            <p className="text-[18px] gray">
              A Digital business management and general process automation
              company.{" "}
            </p>
            <p className="font-bold text-[24px] mt-[20px]">Achievements</p>
            <ul className="flex flex-col gap-y-[15px]">
              <li className="gray bullet relative">
                Gathered and evaluated technical requirements for each project,
                ensuring a comprehensive understanding of project goals and
                objectives.{" "}
              </li>
              <li className="gray bullet relative">
                Collaborated with cross-functional development teams to deliver
                a range of software projects, contributing to both frontend
                development and{" "}
              </li>
              <li className="gray bullet relative">
                Translated UI/UX designs into fully responsive websites and web
                applications, utilizing a range of technologies to develop
                robust and scalable solutions, focusing on delivering
                exceptional user experiences.{" "}
              </li>
              <li className="gray bullet relative">
                Utilized Nodejs/Express to design and implement a comprehensive
                set of RESTful APIs for global logistics web application
                facilitating seamless package delivery worldwide.{" "}
              </li>
              <li className="gray bullet relative">
                Conducted thorough testing and debugging to identify and resolve
                issues, ensuring optimal performance and functionality.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-x-[15px] mt-[30px]">
          <div className="grid place-items-center p-[15px] bg-blue-700 rounded-[50%] w-fit h-fit">
            <LuSchool style={{ fontSize: "24px", color: "white" }} />
          </div>
          <div>
            <p className="font-bold text-[18px] text-blue-700">
              2022 (July - October)
            </p>
            <p className="font-bold text-[24px]">FullStack Developer Intern</p>
            <p className="font-bold text-[24px] mt-[10px]">UContest</p>
            <p className="text-[18px] gray">
              Nigeria-based web and mobile application development company
              delivering innovative solutions for clients.
            </p>
            <p className="font-bold text-[24px] mt-[20px]">Achievements</p>
            <ul className="flex flex-col gap-y-[15px]">
              <li className="gray bullet relative">
                Successfully converted UI/UX designs into fully responsive
                websites as a Frontend Web Developer at UContest.
              </li>
              <li className="gray bullet relative">
                Integrated backend functionality into websites using RESTful
                APIs, ensuring seamless functionality and optimum performance.
              </li>
              <li className="gray bullet relative">
                Collaborated with cross-functional teams to deliver high-quality
                web and mobile applications that met client requirements and
                exceeded expectations at UContest.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-x-[15px] mt-[30px]">
          <div className="grid place-items-center p-[15px] bg-blue-700 rounded-[50%] w-fit h-fit">
            <LuSchool style={{ fontSize: "24px", color: "white" }} />
          </div>
          <div>
            <p className="font-bold text-[18px] text-blue-700">
              2022 (July - October)
            </p>
            <p className="font-bold text-[24px]">FullStack Developer Intern</p>
            <p className="font-bold text-[24px] mt-[10px]">UContest</p>
            <p className="text-[18px] gray">
              Nigeria-based web and mobile application development company
              delivering innovative solutions for clients.
            </p>
            <p className="font-bold text-[24px] mt-[20px]">Achievements</p>
            <ul className="flex flex-col gap-y-[15px]">
              <li className="gray bullet relative">
                Successfully converted UI/UX designs into fully responsive
                websites as a Frontend Web Developer at UContest.
              </li>
              <li className="gray bullet relative">
                Integrated backend functionality into websites using RESTful
                APIs, ensuring seamless functionality and optimum performance.
              </li>
              <li className="gray bullet relative">
                Collaborated with cross-functional teams to deliver high-quality
                web and mobile applications that met client requirements and
                exceeded expectations at UContest.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-x-[15px] mt-[30px]">
          <div className="grid place-items-center p-[15px] bg-blue-700 rounded-[50%] w-fit h-fit">
            <LuSchool style={{ fontSize: "24px", color: "white" }} />
          </div>
          <div>
            <p className="font-bold text-[18px] text-blue-700">
              2021 (June - August)
            </p>
            <p className="font-bold text-[24px]">Machine Learning Intern</p>
            <p className="font-bold text-[24px] mt-[10px]">
              CypherCrescent Limited
            </p>
            <p className="text-[18px] gray">
              A leading research & development company rendering innovative
              business-intelligence solutions to oil and gas exploration and
              production companies
            </p>
            <p className="font-bold text-[24px] mt-[20px]">Achievements</p>
            <ul className="flex flex-col gap-y-[15px]">
              <li className="gray bullet relative">
                Successfully converted UI/UX designs into fully responsive
                websites as a Frontend Web Developer at UContest.
              </li>
              <li className="gray bullet relative">
                Integrated backend functionality into websites using RESTful
                APIs, ensuring seamless functionality and optimum performance.
              </li>
              <li className="gray bullet relative">
                Collaborated with cross-functional teams to deliver high-quality
                web and mobile applications that met client requirements and
                exceeded expectations at UContest.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
