"use client";
import Image from "next/image";

export function Bullets() {
  return (
    <section className="grid grid-cols-6 py-28 px-8  gap-y-24 bg-[var(--baseColor)] ">
      <h2 className=" col-span-4 col-start-2  font-[nohemi] text-[var(--lightColor)] text-center font-normal titleSize  sticky top-[5rem] ">
        Seu site pode ser uma ferramenta que gera resultados constantes.
      </h2>

      <div className="col-span-4 col-start-2 flex flex-col gap-40 items-center ">
        <article className="grid grid-cols-4 gap-8 w-full h-[350px] bg-[#DFDA95] rounded-3xl pr-4 sticky top-[20rem]">
          <div className="col-span-2 justify-self-center self-end">
            <Image
              src="/icon_card_1.webp"
              alt="Icone"
              width={363}
              height={206}
            />
          </div>

          <div className="col-span-2 flex flex-col gap-4 self-center">
            <div className="flex">
              <h3 className="font-[nohemi] font-medium text-[var(--baseColor)] text-5xl ">
                Com as Informações claras e rápidas,
              </h3>
            </div>
            <p className="text-3xl leading-7 text-[var(--baseColor)] max-w-[360px]">
              seu cliente entende sua proposta em segundos.
            </p>
          </div>
        </article>

        <article className="grid grid-cols-4 gap-8 w-full h-[350px] bg-[#CBEE87] rounded-3xl z-1 pr-4 sticky top-[22rem]">
          <div className="col-span-2 justify-self-center self-end">
            <Image
              src="/icon_card_2.webp"
              alt="Icone"
              width={363}
              height={206}
            />
          </div>

          <div className="col-span-2 flex flex-col gap-4  self-center">
            <div className="flex">
              <h3 className="font-[nohemi] font-medium text-[var(--baseColor)] text-5xl ">
                O Design intuitivo,
              </h3>
            </div>
            <p className="text-3xl leading-7 text-[var(--baseColor)] max-w-[360px]">
              ele navega com facilidade, sem perder tempo.
            </p>
          </div>
        </article>

        <article className="grid grid-cols-4 gap-8 w-full h-[350px] bg-[#84CCA4] rounded-3xl z-2 pr-4 sticky top-[24rem]">
          <div className="col-span-2 justify-self-center self-end">
            <Image
              src="/icon_card_3.webp"
              alt="Icone"
              width={363}
              height={206}
            />
          </div>

          <div className="col-span-2 flex flex-col gap-4  self-center ">
            <div className="flex">
              <h3 className="font-[nohemi] font-medium text-[var(--baseColor)] text-5xl ">
                O Conteúdo bem estruturado,
              </h3>
            </div>
            <p className="text-3xl leading-7 text-[var(--baseColor)] max-w-[360px]">
              ele encontra o que procura, quando precisa.
            </p>
          </div>
        </article>

        <article className="grid grid-cols-4 gap-8 w-full h-[350px] bg-[#57B17F] rounded-3xl z-3 pr-4 sticky top-[26rem]">
          <div className="col-span-2 justify-self-center self-end">
            <Image
              src="/icon_card_4.webp"
              alt="Icone"
              width={363}
              height={206}
            />
          </div>

          <div className="col-span-2 flex flex-col gap-4 self-center ">
            <div className="flex">
              <h3 className="font-[nohemi] font-medium text-[var(--baseColor)] text-5xl ">
                E a Identidade visual consitente,
              </h3>
            </div>
            <p className="text-3xl leading-7 text-[var(--baseColor)] max-w-[360px]">
              que garante sua imagem profissional.
            </p>
          </div>
        </article>
      <div className="z-4 sticky top-0 h-[100vh]">
        <h2 className="font-[nohemi] text-[var(--lightColor)] text-center font-normal titleSize">Você pode ter um site que realmente trabalha por você.</h2>
        <p className="text-center text-3xl text-[var(--lightColor)]">
          Com tudo isso funcionando junto, fica muito mais fácil conquistar a
          confiança de quem visita e transformar esse interesse em novos
          clientes todos os dias.
        </p>
      </div>
      </div>

    </section>
  );
}
