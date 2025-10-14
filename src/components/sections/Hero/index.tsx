"use client";

import Btn from "@/components/ui/Btn/index";
// import { Player } from "@lottiefiles/react-lottie-player";
// import Lottie from "lottie-react";
// import animationDat from "@/components/lottie-hero.json";

import Image from "next/image";
import { gsap } from "gsap";

import heroAnimation from "@/components/animations/timelines/heroAnimation";
// import Asterisc from "@/components/ui/icons/Asterisc";

export function Hero() {
  heroAnimation();
  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <section className="py-16 lg:grid lg:grid-cols-6 lg:gap-6 lg:p-8  bg-black  ">
        <div className="flex flex-col gap-8 justify-between items-center lg:col-span-6 lg:h-[80vh] lg:p-8 lg:rounded-3xl ">
          <div className="flex flex-col items-center justify-center text-[var(--baseColor)]">
            <p className="flex gap-2 font-[nohemi] text-center text-[1rem] tagDisclamer ">
              Hello, eu sou o <strong> Junior</strong>
              <Image src="/hand.webp" alt="Hand" width={22} height={22} />
            </p>
            <p className="font-[nohemi] text-[var(--baseColor)] tagDisclamer">
              Web designer & Desenvolvedor FronEnd
            </p>
          </div>

          <h1 className="lg:col-span-4 font-[nohemi] text-[var(--baseColor)] text-center lg:text-start  font-normal lg:text-[5rem] heroTitle">
            Crio sites que impucionam negócios para gerar mais resultados.
          </h1>

          <Btn />
        </div>
      </section>

      <section className="flex flex-col gap-8 pb-16 overflow-hidden imgSection bg-black">
        <div className="flex gap-8 w-[1000px] lg:w-[4000] overflow-x-visible imgDivUm bg-black">
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
            src="/tela00.webp"
            className="rounded-3xl"
            width={1024}
            height={720}
            alt="ui/ux"
          />
          <Image
            priority={true}
            src="/tela14.webp"
            className="rounded-3xl img2"
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
        <div className="flex gap-8 w-[1000px] lg:w-[4000] overflow-x-visible imgDivDois bg-black">
          <Image
            src="/tela14.webp"
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

      <section className="flex flex-col gap-16 py-16 font-[nohemi] p-4 relative   ">
        <div className="flex flex-col gap-8 pl-8">
          <p className="text-[1.8rem] text-[#535353]">
            Ter um site profissional é essencial para que você exista na
            internet.
          </p>
          <p className="text-[1.8rem] text-[#535353]">
            Eu crio sites profissionais para que sua presença digital tenha
            muito mais credibilidade e autoridade convertendo e gerando
            resultados cada vez mais.
          </p>
        </div>
        <article className="flex flex-col gap-4 bg-[#073034] p-12 text-[#ffff] rounded-2xl ">
          <div className="flex flex-col gap-8">
            <h3 className="text-[#A4E004] text-6xl ">Mais de 89% das pessoas</h3>
            <div className="flex flex-col gap-4">
              <p className="text-[1.2rem]">
                Pesquisam no Google antes de contratar algum serviço.{" "}
              </p>
              <p className="text-[1.2rem]">
                E você pode estar perdendo muitas oportunidades por não aparecer
                quando alguém pesquisa pelo serviço que você oferece.
              </p>
            </div>
            <div className="flex items-end justify-end">
              <svg
                width="107"
                height="85"
                viewBox="0 0 107 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M104.197 51.4502L84.0617 5.2393C83.9167 4.90614 83.7114 4.60312 83.4563 4.34575C80.7313 1.59959 77.0359 0.056885 73.1827 0.056885C69.3295 0.056885 65.6341 1.59959 62.9091 4.34575C62.3651 4.89345 62.0586 5.63613 62.0566 6.41118V19.5948H44.6191V6.41118C44.6194 6.02575 44.5442 5.64405 44.398 5.28795C44.2517 4.93185 44.0371 4.60835 43.7666 4.33598C41.0416 1.58982 37.3462 0.0471191 33.493 0.0471191C29.6398 0.0471191 25.9444 1.58982 23.2194 4.33598C22.9643 4.59335 22.759 4.89637 22.6139 5.22954L2.47847 51.4502C0.950608 54.478 0.123905 57.8156 0.0605761 61.2119C-0.00275245 64.6083 0.698943 67.9749 2.11285 71.0583C3.52676 74.1418 5.61605 76.8618 8.22349 79.0137C10.8309 81.1655 13.8886 82.6932 17.1663 83.4816C20.4441 84.2701 23.8565 84.2988 27.1469 83.5656C30.4372 82.8324 33.5198 81.3565 36.1625 79.2488C38.8052 77.1412 40.9392 74.4567 42.404 71.3975C43.8688 68.3382 44.6262 64.9839 44.6191 61.587V25.4541H62.0566V61.587C62.0495 64.9839 62.8069 68.3382 64.2717 71.3975C65.7365 74.4567 67.8705 77.1412 70.5132 79.2488C73.1559 81.3565 76.2385 82.8324 79.5288 83.5656C82.8192 84.2988 86.2316 84.2701 89.5094 83.4816C92.7871 82.6932 95.8448 81.1655 98.4522 79.0137C101.06 76.8618 103.149 74.1418 104.563 71.0583C105.977 67.9749 106.678 64.6083 106.615 61.2119C106.552 57.8156 105.725 54.478 104.197 51.4502ZM22.3378 78.1885C19.0806 78.1885 15.8966 77.2149 13.1883 75.3907C10.48 73.5665 8.36918 70.9736 7.1227 67.9401C5.87622 64.9066 5.55009 61.5685 6.18554 58.3482C6.82099 55.1278 8.38948 52.1697 10.6927 49.8479C12.9959 47.5261 15.9303 45.945 19.1249 45.3044C22.3196 44.6638 25.6309 44.9926 28.6402 46.2491C31.6494 47.5056 34.2215 49.6335 36.0311 52.3636C37.8407 55.0937 38.8066 58.3035 38.8066 61.587C38.8066 65.99 37.0715 70.2126 33.983 73.326C30.8945 76.4394 26.7056 78.1885 22.3378 78.1885ZM22.3378 39.126C19.2431 39.1249 16.1824 39.7769 13.3527 41.0401L27.695 8.13969C29.2108 6.77889 31.15 5.99382 33.1784 5.91984C35.2068 5.84586 37.1973 6.48759 38.8066 7.73442V46.4502C36.7199 44.1393 34.1768 42.2938 31.3406 41.0325C28.5044 39.7711 25.4378 39.1217 22.3378 39.126ZM67.8691 7.7393C69.4784 6.49248 71.4689 5.85074 73.4973 5.92472C75.5257 5.9987 77.4649 6.78377 78.9807 8.14458L93.323 41.0401C89.0541 39.1332 84.298 38.6296 79.7292 39.6007C75.1604 40.5718 71.0109 42.9683 67.8691 46.4502V7.7393ZM84.3378 78.1885C81.0806 78.1885 77.8966 77.2149 75.1883 75.3907C72.48 73.5665 70.3692 70.9736 69.1227 67.9401C67.8762 64.9066 67.5501 61.5685 68.1855 58.3482C68.821 55.1278 70.3895 52.1697 72.6927 49.8479C74.9959 47.5261 77.9303 45.945 81.1249 45.3044C84.3196 44.6638 87.6309 44.9926 90.6402 46.2491C93.6494 47.5056 96.2215 49.6335 98.0311 52.3636C99.8407 55.0937 100.807 58.3035 100.807 61.587C100.807 65.99 99.0715 70.2126 95.983 73.326C92.8945 76.4394 88.7056 78.1885 84.3378 78.1885Z"
                  fill="#B2F10C"
                />
              </svg>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
