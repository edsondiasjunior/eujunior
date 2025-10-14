import Image from "next/image";
import Link from "next/link";
import {
  LinkedinLogo,
  BehanceLogo,
  DribbbleLogo,
  GithubLogo,
  DownloadSimple,
  ArrowUpRight,
} from "@phosphor-icons/react/ssr";
import VideoPage from "@/components/sections/VideoPage/"

export default function Cv() {
  return (
    <>
      <section className="flex flex-col lg:grid lg:grid-cols-12 bg-[#151515] p-8 gap-5 font-[nohemi]  ">
        <div className="flex flex-col lg:col-span-2 gap-8 items-center mb-8 lg:mb-0">
          <div className="col-span-1 lg:col-span-2 lg:w-full lg:h-full rounded-full lg:rounded-3xl overflow-hidden ">
            <Image
              className="h-full w-full object-cover hidden lg:block "
              src="/junior.webp"
              alt="Foto Edson Junior"
              height={387}
              width={210}
            />
            <Image
              className="h-full w-full object-cover lg:hidden "
              src="/junior_mobile.webp"
              alt="Foto Edson Junior"
              height={80}
              width={80}
            />
          </div>

          <p className="flex gap-2 text-[#D9D9D9] text-[1rem] lg:text-[1.2rem] lg:hidden border rounded-full px-8 py-3">
            Hello, eu sou o <strong>Junior</strong>{" "}
            <Image
              src="/hand-icon.webp"
              alt="mão acenando"
              height={15}
              width={15}
              className="h-[16px] w-[16px]"
            />{" "}
          </p>
        </div>

        <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center bg-[#191D20] rounded-3xl p-[1rem] lg:p-[3rem] ">
          <div className=" flex flex-col gap-4">
            <p className=" gap-2 text-[#D9D9D9] text-[1rem] hidden lg:flex w-fit border border-[#7a7a7a] rounded-full px-8 py-3 mb-[1rem]">
              Hello, eu sou o <strong>Junior</strong>{" "}
              <Image
                src="/hand-icon.webp"
                alt="mão acenando"
                height={15}
                width={15}
                className="h-[16px] w-[16px]"
              />
            </p>
            <h1 className="text-[#B2F10C] font-[nohemi] font-bold text-[2.5rem] text-center lg:text-start  lg:text-7xl ">
              UI/UX & Web Designer
            </h1>
            <p className="text-[#D9D9D9] font-[nohemi] text-center lg:text-start text-[1.2rem] font-light">
              Transformando designs em experiências digitais
            </p>
            <div className="flex flex-col lg:flex-row gap-8 items-center mt-6">
              <Link
                className="group flex gap-2 items-center justify-between bg-[#B2F10C] pl-4 pr-2 py-2 rounded-full text-[20px]"
                href="http://wa.me//+5511998343115"
                target="_blank"
              >
                <p>Contato</p>
                <span className="bg-black flex items-center justify-center rounded-full w-[2.5rem] h-[2.5rem]">
                  <ArrowUpRight size={24} color="#D9D9D9" />
                </span>
              </Link>
              <Link
                className="flex gap-4 items-center justify-center text-[#D9D9D9] rounded-full text-[20px]"
                href="/edson_junior_web_designer.pdf"
                target="_blank"
              >
                <p>Download CV</p>

                <DownloadSimple size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-12 rounded-3xl lg:hidden">
          <VideoPage/>
        </div>

        <div className="col-span-1 lg:col-span-4 bg-[#191D20] rounded-3xl flex flex-col items-center justify-center gap-8  p-[1rem] lg:p-[3rem]">
          <p className="text-[#D9D9D9] font-[nohemi] text-2xl text-center font-light">
            Em evolução para<strong className="text-[#B2F10C]"> Front-End</strong> Developer
          </p>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex gap-4">
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                HTML
              </span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                CSS
              </span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                Javascript
              </span>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                Sass
              </span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                Git
              </span>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                React
              </span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                Next.Js
              </span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                Typescript
              </span>
            </div>
          </div>
          <p className="text-[#D9D9D9] font-[nohemi] text-2xl text-center font-light">
            Do protótipo ao deploy, <br /> eu entrego!
          </p>
        </div>

        <div className=" grid grid-cols-2 lg:grid-cols-12 col-span-12 gap-4">
          <Link
            href="https://www.linkedin.com/in/edsondiasjunior/"
            target="_blank"
            className=" col-span-1 lg:col-span-3 flex items-center justify-center gap-4 p-6 rounded-2xl text-[#D9D9D9] bg-[#191D20]"
          >
            <LinkedinLogo size={32} />
            <p>Linkedin</p>
          </Link>
          <Link
            href="https://www.behance.net/edsondiasjunior"
            target="_blank"
            className="col-span-1 lg:col-span-3 flex items-center justify-center p-6 rounded-2xl gap-4 text-[#D9D9D9] bg-[#191D20]"
          >
            <BehanceLogo size={32} />
            <p>Behance</p>
          </Link>
          <Link
            href="https://dribbble.com/edsondiasjunior"
            target="_blank"
            className="lg:col-span-3 flex items-center justify-center gap-4 p-6 rounded-2xl text-[#D9D9D9] bg-[#191D20]"
          >
            <DribbbleLogo size={32} />
            <p>Dribbble</p>
          </Link>
          <Link
            href="https://github.com/edsondiasjunior"
            target="_blank"
            className="lg:col-span-3 flex items-center justify-center p-6 gap-4 rounded-2xl text-[#D9D9D9] bg-[#191D20]"
          >
            <GithubLogo size={32} />
            <p>Github</p>
          </Link>
        </div>

        <div className="col-span-12 hidden lg:block rounded-3xl">
          <VideoPage/>
        </div>

        <div className="col-span-4 lg:bg-[#191D20] rounded-3xl flex flex-col items-center justify-center gap-8 p-2">
          <span className="flex items-center gap-2 border-1 border-[#777777] text-[#D9D9D9] py-4 px-6 text-[1.2rem] rounded-full">
            <Image
              className="w-[14px] h-[14px]"
              src="/online.webp"
              alt="online"
              height={14}
              width={14}
            />
            Disponível para projetos
          </span>
        </div>

        <div className="col-span-8 flex flex-col items-center justify-center bg-[#191D20] rounded-3xl p-[1rem] lg:p-[3rem]">
          <div className="p-2 lg:p-8 flex flex-col gap-4 lg:gap-12">
            <h2 className="text-[#D9D9D9] font-[nohemi] text-[1.5rem] lg:text-5xl">
              Meu trabalho é guiado por princípios fundamentais que aplico em
              cada projeto
            </h2>
            <p className="text-[#D9D9D9] font-[nohemi] text-[1rem] lg:text-3xl font-light">
              Intencionalidade <span className="text-[#B2F10C]">/</span> Clareza 
              <span className="text-[#B2F10C]"> /</span> Fluidez 
              <span className="text-[#B2F10C]"> /</span> Impacto
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
