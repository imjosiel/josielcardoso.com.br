"use client";
import { Carousel } from "@/app/_components/Carousel";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/app/_components/ui/navigation-menu";
import DownloadPage from "./_components/DownloadPage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div
        id="home"
        className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"
      >
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Não coloque o mouse aqui
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        Mas como tu é teimoso
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="https://www.linkedin.com/in/imjosiel/"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contato
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={(e) => {
                      e.preventDefault(); // Previne o comportamento padrão do link
                      const target = document.getElementById("about");
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" }); // Rolagem suave
                      }
                    }}
                  >
                    Sobre
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <DownloadPage />
        </div>
      </div>
      <div className="flex display-between gap-x-[256px]">
        <h2 className="w-[360px] h-[74px] font-semibold text-lg mt-16">
          Desenvolvedor fullstack com especialização em backend e experiência no
          desenvolvimento de APIs e segurança de sistemas. Possui habilidades em
          tecnologias como Spring Boot, Node.js e MuleSoft, além de bancos de
          dados como MySQL e MongoDB. Embora o foco principal esteja no backend,
          também tem conhecimentos avançados e experiência comprovada com em
          frontend com React.js e Next.js, permitindo uma atuação integrada em
          projetos. Alguns projetos fullstack desenvolvidos podem ser vistos
          abaixo.
        </h2>
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/Photoroom.webp"
            alt=" "
            width={360}
            height={74}
            priority
          />
        </div>
      </div>
      <div className="mt-16 p-4">
        <Carousel />
      </div>

      {/* Nova seção adicionada aqui */}
      <div
        id="about"
        className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-16 p-4"
      >
        <div className="flex gap-x-[256px]">
          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/Photoroom.webp"
              alt=" "
              width={360}
              height={74}
              priority
            />
          </div>
          <h2 className="w-[560px] h-[74px] font-semibold text-lg mt-0">
            Sou desenvolvedor fullstack com foco em backend, iniciando minha
            trajetória aos 15 anos ao criar meus próprios mods para jogos
            online. Aos 18 anos, entrei para a faculdade de Ciência da
            Computação onde fiquei até minha formação completa como Bacharel.
            Desde então, tenho me aprofundado no desenvolvimento de APIs e
            segurança de sistemas, com experiências significativas, como a
            implementação da segurança em uma instituição financeira. Atuo com
            tecnologias como Spring Boot, Node.js e MuleSoft, além de bancos de
            dados como MySQL e MongoDB. Embora meu foco principal seja backend,
            também possuo conhecimentos em frontend com React.js e Next.js, o
            que me permite colaborar de forma eficaz em projetos integrados.
          </h2>
        </div>
      </div>
    </div>
  );
}
