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
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
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
                  href="https://www.instagram.com/imjosiel"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contato
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          voluptatem, excepturi autem eum fugit, aliquam accusamus itaque
          facilis quae quis omnis magnam. Ex quisquam voluptate, aliquid dolores
          ipsam sequi totam! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Non voluptatem, excepturi autem eum fugit, aliquam accusamus
          itaque facilis quae quis omnis magnam. Ex quisquam voluptate, aliquid
          dolores ipsam sequi totam!
        </h2>
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/next.svg"
            alt=" "
            width={180}
            height={37}
            priority
          />
        </div>
      </div>
      <Carousel />
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src="/Photoroom.webp"
        alt=" "
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
