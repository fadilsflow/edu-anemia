// components/cta-section.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeartPulse, BookOpen } from "lucide-react";
import { Logo } from "./logo";

export default function CtaSection() {
  return (
    <section id="cta">
      <div className="mx-auto max-w-5xl px-6">
        <div className="bg-card p-10 rounded-t-2xl items-center flex flex-col text-center">
          <Logo className="mx-auto" />

          <h2 className="text-foreground text-balance text-3xl font-bold lg:text-4xl">
            Cek Risiko Anemia Kamu
          </h2>

          <p className="text-muted-foreground mx-auto mt-4 mb-8 max-w-xl text-lg">
            Kenali kondisi tubuhmu dengan menjawab beberapa pertanyaan
            sederhana. Hasilnya membantu kamu memahami apakah kamu berisiko
            mengalami anemia dan apa langkah yang bisa kamu ambil selanjutnya.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <Button asChild size="lg" className="text-lg h-12">
              <Link href="/risk-check">
                <HeartPulse
                  className="h-5 w-5 mr-2"
                  fill="oklch(0.8148 0.0819 225.7537)"
                />
                Cek Risiko Anemia
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg h-12"
            >
              <Link href="/quiz">
                <BookOpen
                  className="h-5 w-5 mr-2"
                  fill="oklch(0.8677 0.0735 7.0855)"
                />
                Mulai Kuis Anemia
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
