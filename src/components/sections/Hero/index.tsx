"use client";

import Btn from "@/components/ui/Btn/index";

import Image from "next/image";
import { gsap } from "gsap";

import heroAnimation from "@/components/animations/timelines/heroAnimation";

export function Hero() {
  heroAnimation();
  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <section className="flex justify-center h-[80vh] py-20 lg:py-28 px-8  heroSection ">
        <div className="flex lg:grid flex-col lg:grid-cols-4 gap-8 items-center lg:items-end lg:flex-row">
          <div className="col-span-3 flex flex-col items-center lg:items-start gap-8  ">
            <p className="lg:hidden text-center max-w-[20rem] text-[#dfe830] uppercase text-[1rem] rounded-full  lg:text-[1.2rem] lg:text-start tagDisclamer ">
              Crio sites profissionais
            </p>
            <h1 className=" font-[nohemi] text-[#FDF8DB] text-center lg:text-start font-normal lg:text-[5rem] heroTitle">
              Se sua marca é profissional, seu site não pode parecer
              improvisado.
            </h1>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-8 text-center items-center justify-start lg:flex lg:items-start lg:pl-8 lg:gap-4relative btnContainer ">
            <p className="font-[nohemi]  text-center text-[#f4f3ef]  lg:text-start  heroSubtitle">
              Um site bem feito é a primeira impressão da sua marca.
            </p>
            <p className="hidden lg:block max-w-[20rem] text-[#f4f3ef] text-[1.1rem] lg:text-[1.2rem] lg:text-start  btnDescription">
              Crio sites profissionais para marcas que querem ser levadas a
              sério.
            </p>
            <div className="btnDiv">
              <Btn />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 overflow-hidden imgSection">
        <div className="flex gap-8 w-[7000px] lg:w-[4000] overflow-x-visible imgDivUm ">
          <Image
            priority={true}
            src="/tela 18.png"
            className="rounded-3xl img1"
            width={1024}
            height={720}
            alt="ui/ux"
          />

          <Image
            priority={true}
            src="/tela 20.png"
            className="rounded-3xl img2"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            priority={true}
            src="/tela 2.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            priority={true}
            src="/tela 22.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            priority={true}
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            priority={true}
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            priority={true}
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            priority={true}
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
        </div>
        <div className="flex gap-8 w-[7000px] lg:w-[4000] overflow-x-visible imgDivDois">
          <Image
            src="/tela 20.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            src="/tela 22.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            src="/tela 23.png"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
        </div>
      </section>
    </>
  );
}
