"use client";

import Btn from "@/components/ui/Btn/index";
// import { Player } from "@lottiefiles/react-lottie-player";
// import Lottie from "lottie-react";
// import animationDat from "@/components/lottie-hero.json";

import Image from "next/image";
import { gsap } from "gsap";

import heroAnimation from "@/components/animations/timelines/heroAnimation";
import Asterisc from "@/components/ui/icons/Asterisc";

export function Hero() {
  heroAnimation();
  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <section className="lg:grid lg:grid-cols-6 lg:gap-6 lg:p-8  bg-[var(--baseColor)] ">

        <div className="grid grid-cols-6 justify-between lg:col-span-6 lg:h-[80vh] lg:p-8 lg:rounded-3xl bg-[#CBEE87]">

          <p className=" lg:hidden  text-center max-w-[20rem] text-[#dfe830] uppercase text-[1rem] rounded-full  lg:text-[1.2rem] lg:text-start tagDisclamer ">
            Crio sites profissionais
          </p>

          <h1 className="lg:col-span-4 font-[nohemi] text-[var(--lightColor)] text-center lg:text-start  font-normal lg:text-[5rem] heroTitle">
            Se sua marca é <strong>profissional</strong>, seu site não pode
            parecer <strong>improvisado</strong>.
          </h1>

          <div className="col-start-5 col-span-2 flex items-center gap-6  self-end">
            <Asterisc />
            <p className="font-[nohemi] text-[var(--baseColor)] heroSubtitle ">
              Um site bem feito é a primeira impressão da sua marca.
            </p>
          </div>

          <div className="bg-[var(--baseColor)] lg:col-span-6 rounded-2xl flex justify-between p-8 h-fit self-end  ">
            <p className="hidden lg:block max-w-[35rem] text-[var(--lightColor)] text-[1.1rem] lg:text-[1.2rem] lg:text-start  btnDescription">
              Satisfação em ter você aqui! Eu sou o Junior, <strong>crio sites profissionais</strong> para marcas que querem ser levadas a
              sério.
            </p>
            <div className="btnDiv">
              <Btn />
            </div>
          </div>
        </div>

        
      </section>

      <section className="flex flex-col gap-8 overflow-hidden imgSection bg-[var(--baseColor)]">
        <div className="flex gap-8 w-[7000px] lg:w-[4000] overflow-x-visible imgDivUm bg-[var(--baseColor)]">
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
        <div className="flex gap-8 w-[7000px] lg:w-[4000] overflow-x-visible imgDivDois bg-[var(--baseColor)]">
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
