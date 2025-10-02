import Image from "next/image";
import Link from "next/link";

export default function Cv() {
  return (
    <>
      <section className="flex flex-col lg:grid lg:grid-cols-12 bg-[#151515] p-8 gap-5 font-[nohemi] lg:h-full ">
        <div className="flex flex-col lg:col-span-2 gap-8 items-center">
          <div className="col-span-1 lg:col-span-2 h-[100px] w-[100px] lg:w-full  rounded-full lg:rounded-3xl overflow-hidden ">
            <Image
              className="h-full w-full object-cover "
              src="/junior.webp"
              alt="Foto Edson Junior"
              height={387}
              width={210}
            />
          </div>

          <p className="flex gap-2 text-[#D9D9D9] text-[1.2rem] lg:hidden border rounded-full px-8 py-3">Hello, eu sou o <strong>Junior</strong> <Image src="/hand-icon.webp" alt="mão acenando" height={15} width={15} className="h-[16px] w-[16px]"/> </p>
        </div>
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center bg-[#191D20] rounded-3xl ">
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-[#B2F10C] font-[nohemi] font-bold text-7xl">
              UI/UX & <br />
              Web Designer
            </h1>
            <p className="text-[#D9D9D9] font-[nohemi] text-[20px] font-light">
              Transformando designs em experiências digitais
            </p>
            <div className="flex gap-8 items-center mt-6">
              <Link
                className="bg-[#B2F10C] py-2 px-8 rounded-full text-[20px]"
                href="#"
              >
                Vamos conversar
              </Link>
              <Link
                className="text-[#D9D9D9] rounded-full text-[20px]"
                href="#"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4 bg-[#191D20] rounded-3xl flex flex-col items-center justify-center gap-8 p-8">
          <p className="text-[#D9D9D9] font-[nohemi] text-2xl text-center font-light">
            Em evolução para <br/>
            <strong className="text-[#B2F10C]">Front-End</strong> Developer
          </p>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex gap-4">
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">HTML</span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">CSS</span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                Javascript
              </span>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">Sass</span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">Git</span>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#d9d9d93b] text-[#D9D9D9] py-2 px-3 rounded-full">React</span>
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

        <Link
          href="#"
          className=" lg:col-span-3 flex items-center justify-center p-6 rounded-2xl text-[#D9D9D9] bg-[#191D20]"
        >
          Linkedin
        </Link>
        <Link
          href="#"
          className=" col-span-3 flex items-center justify-center p-6 rounded-2xl text-[#D9D9D9] bg-[#191D20]"
        >
          Behance
        </Link>
        <Link
          href="#"
          className="col-span-3 flex items-center justify-center p-6 rounded-2xl text-[#D9D9D9] bg-[#191D20]"
        >
          Dribble
        </Link>
        <Link
          href="#"
          className="col-span-3 flex items-center justify-center p-6 rounded-2xl text-[#D9D9D9] bg-[#191D20]"
        >
          Github
        </Link>

        <div className="col-span-4 bg-[#191D20] rounded-3xl flex flex-col items-center justify-center gap-8 p-8">
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

        <div className="col-span-8 flex flex-col items-center justify-center bg-[#191D20] rounded-3xl ">
          <div className="p-8 flex flex-col gap-12">
            <h2 className="text-[#D9D9D9] font-[nohemi] text-5xl">
              Meu trabalho é guiado por princípios fundamentais que aplico em
              cada projeto
            </h2>
            <p className="text-[#D9D9D9] font-[nohemi] text-3xl font-light">
              Intencionalidade <span className="text-[#B2F10C]">/</span> Clareza
              <span className="text-[#B2F10C]">/</span> Fluidez{" "}
              <span className="text-[#B2F10C]">/</span> Impacto
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
