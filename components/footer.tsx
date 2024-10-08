import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon, HexagonIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          {/* <HexagonIcon className="sm:block hidden w-5 h-5 text-muted-foreground fill-current" /> */}
          <p className="text-center">
            NLPDFR is niet aansprakelijk voor (gevolg)schade die voortkomt uit
            het gebruik van deze site, dan wel uit fouten of ontbrekende
            functionaliteiten op deze site. <br></br>NLPDFR is een product van{""}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://creativecrows.net/"
            >
              Creative Crows.
            </Link>
            <br></br>
            Copyright © 2024{""} <Link
              className="px-1 underline underline-offset-2"
              href="https://creativecrows.net/"
            >
              Creative Crows
            </Link>- Alle rechten voorbehouden.
            <br></br>
            Deze website / handboek word onderhouden door{""} <Link className="px-1 underline underline-offset-2" href="https://github.com/AntonNLPDFR">Anton</Link>. 
            {/* Build by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/nisabmohd"
            >
              nisabmohd
            </Link>
            . The source code is available on{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/nisabmohd/Docs-Stater-Template"
            >
              GitHub
            </Link>
            . */}
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      {/* <Link
        href="https://vercel.com/templates/next.js/documentation-template"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Deploy
      </Link>
      <Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link> */}
    </>
  );
}
