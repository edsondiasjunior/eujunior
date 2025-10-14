"use client";

import { Medal, Rocket, LaptopMinimalCheck, ChartArea } from "lucide-react";
import Btn from "@/components/ui/Btn/index";
import VideoPage from "@/components/sections/VideoPage"

export function Bullets() {
  return (
    <section className="flex flex-col grid-cols-6 py-16 px-4  gap-y-24 bg-[#000000] sticky top-0">
      <div className="flex flex-col gap-8 sticky top-[4rem] ">
        <h2 className=" col-span-4 col-start-2  font-[nohemi] text-[#A4E004] text-center font-normal text-[2.7rem] leading-[3rem] sticky ">
          Provavelmente, você quer fazer parte dos que aparecem na pesquisa do
          Google, certo?
        </h2>
        <p className="font-[nohemi] text-white text-center text-[1.3rem]">
          Trabalho com 4 pilares essenciais para você ter uma presença digital
          que gera resultados
        </p>
      </div>

      <div className="col-span-4 col-start-2 flex flex-col gap-40 items-center ">
        <article className="flex flex-col items-center justify-between p-8 w-full h-[350px] bg-[#A4E004] rounded-3xl sticky top-[24rem]">
          <div className=" flex justify-end w-full">
            <Medal size={48} />
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-[nohemi] font-medium text-[#022124] text-5xl ">
                Presença Profissional
              </h3>
              <p className="text-[1rem] leading-7 text-[#022124] max-w-[360px]">
                Site institucional com design exclusivo, estratégia de conteúdo
                e desenvolvimento focado em transmitir credibilidade e gerar
                conversões
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col justify-between p-8 w-full h-[350px] bg-[#FCFFF8] rounded-3xl sticky top-[26rem]">
          <div className=" flex justify-end w-full">
            <Rocket size={48} />
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-[nohemi] font-medium text-[#022124] text-5xl ">
                Alcance Total
              </h3>
              <p className="text-[1rem] leading-7 text-[#022124] max-w-[360px]">
                Design responsivo com abordagem mobile-first e código otimizado
                para performance impecável em desktop, tablet e smartphone
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col items-center justify-between p-8 w-full h-[350px] bg-[#A4E004] rounded-3xl sticky top-[28rem]">
          <div className=" flex justify-end w-full">
            <LaptopMinimalCheck size={48} />
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-[nohemi] font-medium text-[#022124] text-5xl ">
                Performance Otimizada
              </h3>
              <p className="text-[1rem] leading-7 text-[#022124] max-w-[360px]">
                Velocidade de carregamento rápida, código limpo e otimizado para
                garantir a melhor experiência do usuário e retenção de
                visitantes
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col justify-between p-8 w-full h-[350px] bg-[#FCFFF8] rounded-3xl sticky top-[30rem]">
          <div className=" flex justify-end w-full">
            <ChartArea size={48} />
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-[nohemi] font-medium text-[#022124] text-5xl ">
                SEO 
              </h3>
              <p className="text-[1rem] leading-7 text-[#022124] max-w-[360px]">
                SEO técnico com estrutura semântica, meta tags e boas práticas
                para seu site estar otimizado para mecanismos de busca
              </p>
            </div>
          </div>
        </article>

        <div className="flex flex-col gap-8 items-center justify-between pb-[2rem] z-4 bg-amber-50 sticky top-[5%] h-[90vh] rounded-3xl">
          <div className="col-span-12 ">
        <VideoPage />
      </div>
          <h2 className="font-[nohemi] text-[#022124] text-center font-normal titleSize">
            Pronto para ter um site que trabalha por você?
          </h2>
          <p className="text-center text-3xl text-[#022124]">
            Chama no WhatsApp e vamos bater um papo sobre seu projeto.
          </p>
          <Btn />
        </div>
      </div>
    </section>
  );
}
