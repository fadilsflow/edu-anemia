"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { X } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./animate-section";

interface QuizOnboardingProps {
  onStart: () => void;
}

export function QuizOnboarding({ onStart }: QuizOnboardingProps) {
  return (
    <AnimatedSection
      delay={0}
      className="relative max-w-md mx-auto px-4 py-16 min-h-screen flex items-center justify-center"
    >
      <Button
        asChild
        variant={"outline"}
        size={"icon"}
        className="absolute top-4 right-4"
      >
        <Link href="/" className="absolute top-10 right-4">
          <X className="w-6 h-6" />
        </Link>
      </Button>
      <div className="text-center items-center flex flex-col">
        <Logo />
        <h1 className="text-3xl font-bold mb-2">Kuis Anemia</h1>
        <p className="text-gray-700 mb-8">
          Kuis ini terdiri dari sejumlah soal pilihan ganda yang dirancang untuk
          mengukur pemahaman dasar mengenai anemia.
        </p>

        <div className="space-y-3 mb-8 text-left">
          <div className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span className="text-gray-700">Tidak ada batasan waktu.</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span className="text-gray-700">
              Setiap pertanyaan akan langsung menunjukkan apakah jawaban benar
              atau salah.
            </span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span className="text-gray-700">
              Di akhir, kamu akan melihat total skor dari keseluruhan soal.
            </span>
          </div>
        </div>

        <Button onClick={onStart} className="w-full" variant={"secondary"}>
          Mulai Kuis
        </Button>
      </div>
    </AnimatedSection>
  );
}
