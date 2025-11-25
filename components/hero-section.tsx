// components/hero-section.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Highlighter } from "./ui/highlighter";

export default function HeroSection() {
  return (
    <section className="py-40 ">
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative text-center">
          <h1 className="mx-auto mt-16 max-w-2xl text-5xl font-medium text-center leading-tight">
            <span className="inline-flex items-center gap-3">
              Edukasi{" "}
              <span className="inline-flex items-center gap-2">
                <Highlighter action="highlight">Anemia</Highlighter>
                <Image
                  src="/icon0.svg"
                  alt="Icon Anemia"
                  width={64}
                  height={64}
                  className="inline-block"
                />
              </span>
            </span>

            <span className="block mt-1 text-5xl leading-none">
              untuk{" "}
              <Highlighter
                action="underline"
                color="oklch(0.8148 0.0819 225.7537)"
              >
                Remaja
              </Highlighter>
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto mb-6 mt-4 max-w-xl text-xl text-balance">
            Pelajari penyebab, gejala, pencegahan, dan cara menjaga kadar Hb
            tetap sehat.
          </p>

          <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
            <Button asChild variant="default">
              <Link href="#explanation">
                <span className="text-nowrap">Mulai Belajar</span>
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="#risiko">
                <span className="text-nowrap">Cek Resiko</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
