"use client";
import DesignIcon from "@/components/ui/icons/DesignIcon";
import DevIcon from "@/components/ui/icons/DevIcon";
import OptimizationIcon from "@/components/ui/icons/OptimizationIcon";
import SuportenIcon from "@/components/ui/icons/SuportenIco";

// import { gsap } from "gsap";

import CardsAnimation from "@/components/animations/timelines/CardsAnimation";

export default function Services() {
  CardsAnimation();
  // gsap.ticker.lagSmoothing(0);
  return (
    <>
    <section className=" flex flex-col w-full relative top-0 h-min-[100vh] py-20 lg:py-28 px-8  bg-[var(--bgDrkColor)] servicesSection">
      <article className="col-span-1 grid grid-cols-1 p-8 justify-between bg-[var(--lightColor)] cardService cardDesign">
        <div className="">
          <DesignIcon />
        </div>

        <div className="flex flex-col gap-8 self-end ">
          <div className="flex justify-between">
            <h3 className="font-[nohemi] text-[var(--baseColor)] bulletItemTitle">
              Design
            </h3>
            <p className="font-[nohemi]">01</p>
          </div>
          <p className="text-[var(--baseColor)] textCardSize">
            Criação de sites sob medida, com visual autêntico e profissional.
            Cada detalhe é pensado para fortalecer sua marca, transmitir
            confiança e guiar o usuário até a conversão.
          </p>
        </div>
      </article>

      <article className="col-span-1 grid grid-cols-1 p-8 justify-between bg-[var(--lightColor)] cardService cardDev">
        <div>
          <DevIcon />
        </div>

        <div className="flex flex-col gap-8 self-end ">
          <div className="flex justify-between">
            <h3 className="font-[nohemi] text-[var(--baseColor)] bulletItemTitle">
              Desenvolvimento
            </h3>
            <p className="font-[nohemi]">02</p>
          </div>
          <p className="text-[var(--baseColor)] textCardSize">
            Desenvolvimento focado em performance, estabilidade e usabilidade.
            Tudo pensado para transformar visitantes em clientes, com navegação
            fluida e experiência sem falhas.
          </p>
        </div>
      </article>

      <article className="col-span-1 grid grid-cols-1 p-8 justify-between bg-[var(--lightColor)] cardService cardOptimization">
        <div>
          <OptimizationIcon />
        </div>

        <div className="flex flex-col gap-8 self-end ">
          <div className="flex justify-between">
            <h3 className="font-[nohemi] text-[var(--baseColor)] bulletItemTitle">
              Otimização
            </h3>
            <p className="font-[nohemi]">03</p>
          </div>
          <p className="text-[var(--baseColor)] textCardSize">
            Melhorias técnicas que aumentam a velocidade, posicionamento no
            Google e conversões. Um site leve, rápido e pronto para converter
            mais.
          </p>
        </div>
      </article>

      <article className="col-span-1 grid grid-cols-1 p-8 justify-between bg-[var(--lightColor)] cardService cardSuport">
        <div>
          <SuportenIcon />
        </div>

        <div className="flex flex-col gap-8 self-end ">
          <div className="flex justify-between">
            <h3 className="font-[nohemi] text-[var(--baseColor)] bulletItemTitle">
              Suporte
            </h3>
            <p className="font-[nohemi]">04</p>
          </div>
          <p className="text-[var(--baseColor)] textCardSize">
            Manutenção contínua focada em estabilidade, segurança e desempenho.
            Garante que seu site continue gerando resultados, sem interrupções.
          </p>
        </div>
      </article>
    </section>

    <section className="h-screen"></section>
    </>
  );
}
