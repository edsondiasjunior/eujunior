"use client";

// import BulletIcon from "@/components/ui/icons/BulletIcon";

export function Bullets() {
  return (
    <section className="grid grid-cols-1 lg:grid-col-3 py-28 px-8  bulletsSection ">
      <div className=" lg:h-screen lg:py-4 col-span-3 lg:col-span-3 grid grid-col-3 gap-8">
        <div className="grid grid-cols-3 gap-16 h-fit border-b-1 pb-8 border-black">
          <h2 className="col-span-2 font-[nohemi] text-[#000000] text-start font-normal titleSize titleBullet  ">
            Seu site pode ser uma ferramenta que gera resultados constantes.
          </h2>

          <p className=" col-span-3 lg:col-span-1 lg:self-end lg:justify-self-end font-[nohemi] font-normal text-[#5a5a5af2] text-[1.1rem] lg:text-[1.5rem] text-start textSize bulletsTitleDescription">
            Isso acontece quando cada detalhe trabalha a seu favor
          </p>
        </div>

        {/* CARDS */}
        <div className=" lg:self-end ">
         
          <div className="grid grid-cols-4 gap-8 h-fit lg:self-end ">
            <article className="flex self-center justify-self-end lg:justify-self-start lg:self-start lg:col-span-1 gap-5 ">
              {/* <BulletIcon /> */}

              <div className="flex flex-col gap-8">
                <div className="flex">
                  <h3 className="font-[nohemi] font-normal text-4xl max-w-[500px] bulletItemTitle">
                    Informações claras e rápidas
                  </h3>
                </div>
                <p className="text-[1.5rem] leading-7 text-[#5a5a5af2] max-w-[300px]   bulletItemDescription">
                  Seu cliente entende sua proposta em segundos.
                </p>
              </div>
            </article>

            <article className="flex self-center justify-self-end lg:justify-self-start lg:self-start lg:col-span-1 gap-5 ">
              {/* <BulletIcon /> */}
              <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                  <h3 className="font-[nohemi] font-normal text-4xl max-w-[300px] bulletItemTitle">
                    Design intuitivo
                  </h3>
                </div>
                <p className="text-[1.5rem] max-w-[300px] leading-7 text-[#5a5a5af2] bulletItemDescription">
                  Ele navega com facilidade, sem perder tempo.
                </p>
              </div>
            </article>

            <article className="flex self-center justify-self-end lg:justify-self-start lg:self-start lg:col-span-1 gap-5 ">
              {/* <BulletIcon /> */}
              <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                  <h3 className="font-[nohemi] font-normal text-4xl  bulletItemTitle">
                    Conteúdo bem estruturado
                  </h3>
                </div>
                <p className="text-[1.5rem] max-w-[300px] leading-7 text-[#5a5a5af2] bulletItemDescription">
                  Ele encontra o que procura, quando precisa.
                </p>
              </div>
            </article>

            <article className="flex self-center justify-self-end lg:justify-self-start lg:self-start lg:col-span-1 gap-5 ">
              {/* <BulletIcon /> */}
              <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                  <h3 className="font-[nohemi] font-normal text-4xl  bulletItemTitle">
                    Identidade visual consitente
                  </h3>
                </div>
                <p className="text-[1.5rem] max-w-[300px] leading-7 text-[#5a5a5af2] bulletItemDescription">
                  Garante sua imagem profissional.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* 
      <divs className="grid grid-cols-1 lg:grid-cols-3 gap-y-28 items-center lg:items-end ">

        <div className="grid grid-cols-3 col-span-3 ">

          <div className="hidden lg:col-span-1"></div>
        </div>

        <div className="grid-cols-1 lg:col-span-3 flex flex-col gap-24">

          <div className="grid grid-cols-1 lg:grid-cols-3">

            <div className="hidden col-span-1 lg:flex  flex-col gap-8"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 gap-y-12 ">
               
              <article className="flex self-center justify-self-end lg:justify-self-start lg:col-span-1 gap-5 ">
                <BulletIcon />

                <div className="flex flex-col gap-8">
                  <div className="flex">
                    <h3 className="font-[nohemi] font-normal text-4xl max-w-[500px] bulletItemTitle">
                      Informações claras e rápidas
                    </h3>
                  </div>
                  <p className="text-[1.5rem]  leading-7 text-[#5a5a5af2] max-w-[300px]  bulletItemDescription">
                    Seu cliente entende sua proposta em segundos.
                  </p>
                </div>
              </article>

              <div className="flex h-[1px] w-full bg-[#afafaf] lg:hidden "></div>

              <article className=" flex self-center justify-self-end lg:justify-self-start lg:col-span-1 gap-5">
                <BulletIcon />
                <div className="flex flex-col gap-8">
                  <div className="flex gap-2">
                    <h3 className="font-[nohemi] font-normal text-4xl max-w-[300px] bulletItemTitle">
                      Design intuitivo
                    </h3>
                  </div>
                  <p className="text-[1.5rem] max-w-[300px] leading-7 text-[#5a5a5af2] bulletItemDescription">
                    Ele navega com facilidade, sem perder tempo.
                  </p>
                </div>
              </article>

              <div className="flex h-[1px] w-full bg-[#afafaf] lg:hidden "></div>

              <article className=" flex self-center justify-self-end lg:justify-self-start lg:col-span-1 gap-5">
                <BulletIcon />
                <div className="flex flex-col gap-8">
                  <div className="flex gap-2">
                    <h3 className="font-[nohemi] font-normal text-4xl  bulletItemTitle">
                      Conteúdo bem estruturado
                    </h3>
                  </div>
                  <p className="text-[1.5rem] max-w-[300px] leading-7 text-[#5a5a5af2] bulletItemDescription">
                    Ele encontra o que procura, quando precisa.
                  </p>
                </div>
              </article>

              <div className="flex h-[1px] w-full bg-[#afafaf] lg:hidden "></div>

              <article className="flex self-end justify-self-end lg:justify-self-start lg:col-span-1 gap-5">
                <BulletIcon />
                <div className="flex flex-col gap-8">
                  <div className="flex gap-2">
                    <h3 className="font-[nohemi] font-normal text-4xl  bulletItemTitle">
                      Identidade visual consitente
                    </h3>
                  </div>
                  <p className="text-[1.5rem] max-w-[300px] leading-7 text-[#5a5a5af2] bulletItemDescription">
                    Garante sua imagem profissional.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </divs>
 */}
    </section>
  );
}

/*
    <section className="grid grid-cols-1 py-28 px-8 h-screens stiky-top bulletsSection ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-28 items-center lg:items-end ">

        <div className="grid grid-cols-3 col-span-3 ">

          <div className="col-span-3 lg:col-span-2 grid grid-col-3 gap-16">
            <h2 className=" col-span-3 font-[nohemi] text-[#000000] text-start font-normal titleSize titleBullet  ">
              Seu site pode ser uma ferramenta que gera resultados constantes.
            </h2>
            
            <p className=" col-span-3 lg:col-span-1 font-[nohemi] font-normal text-[#5a5a5af2] text-[1.1rem] lg:text-[1.5rem] text-start textSize bulletsTitleDescription">
              Isso acontece quando cada detalhe trabalha a seu favor
            </p>
           
          </div>

          <div className="hidden lg:col-span-1"></div>
        </div>

        <div className="grid-cols-1 lg:col-span-3 flex flex-col gap-24">

          <div className="grid grid-cols-1 lg:grid-cols-3">

            <div className="hidden col-span-1 lg:flex  flex-col gap-8"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 gap-y-12 ">
               
              <article className="flex self-center justify-self-end lg:justify-self-start lg:col-span-1 gap-5 ">
                <BulletIcon />

                <div className="flex flex-col gap-8">
                  <div className="flex">
                    <h3 className="font-[nohemi] font-normal text-4xl max-w-[500px] bulletItemTitle">
                      Informações claras e rápidas
                    </h3>
                  </div>
                  <p className="text-[1.5rem]  leading-7 text-[#5a5a5af2] max-w-[300px]  bulletItemDescription">
                    Seu cliente entende sua proposta em segundos.
                  </p>
                </div>
              </article>

              <div className="flex h-[1px] w-full bg-[#afafaf] lg:hidden "></div>

              <article className=" flex self-center justify-self-end lg:justify-self-start lg:col-span-1 gap-5">
                <BulletIcon />
                <div className="flex flex-col gap-8">
                  <div className="flex gap-2">
                    <h3 className="font-[nohemi] font-normal text-4xl max-w-[300px] bulletItemTitle">
                      Design intuitivo
                    </h3>
                  </div>
                  <p className="text-[1.5rem] max-w-[300px] leading-7 text-[#5a5a5af2] bulletItemDescription">
                    Ele navega com facilidade, sem perder tempo.
                  </p>
                </div>
              </article>

              <div className="flex h-[1px] w-full bg-[#afafaf] lg:hidden "></div>

              <article className=" flex self-center justify-self-end lg:justify-self-start lg:col-span-1 gap-5">
                <BulletIcon />
                <div className="flex flex-col gap-8">
                  <div className="flex gap-2">
                    <h3 className="font-[nohemi] font-normal text-4xl  bulletItemTitle">
                      Conteúdo bem estruturado
                    </h3>
                  </div>
                  <p className="text-[1.5rem] max-w-[300px] leading-7 text-[#5a5a5af2] bulletItemDescription">
                    Ele encontra o que procura, quando precisa.
                  </p>
                </div>
              </article>

              <div className="flex h-[1px] w-full bg-[#afafaf] lg:hidden "></div>

              <article className="flex self-end justify-self-end lg:justify-self-start lg:col-span-1 gap-5">
                <BulletIcon />
                <div className="flex flex-col gap-8">
                  <div className="flex gap-2">
                    <h3 className="font-[nohemi] font-normal text-4xl  bulletItemTitle">
                      Identidade visual consitente
                    </h3>
                  </div>
                  <p className="text-[1.5rem] max-w-[300px] leading-7 text-[#5a5a5af2] bulletItemDescription">
                    Garante sua imagem profissional.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
*/
