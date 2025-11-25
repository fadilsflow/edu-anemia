"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import Link from "next/link";
import { X } from "lucide-react";
import AnimatedSection from "./animate-section";

interface RiskOnboardingProps {
  onStart: () => void;
}

export function RiskOnboarding({ onStart }: RiskOnboardingProps) {
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
        <h1 className="text-3xl font-bold mb-2">Cek Risiko Anemia</h1>
        <p className="text-gray-700 mb-8">
          Pemeriksaan singkat untuk memperkirakan risiko anemia berdasarkan data
          dasar seperti usia, jenis kelamin, kondisi kehamilan, dan kadar
          hemoglobin.
        </p>

        <div className="space-y-3 mb-8 text-left">
          <div className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span className="text-gray-700">
              Pertanyaan sederhana dan cepat diisi.
            </span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span className="text-gray-700">
              Hasil langsung muncul setelah semua data lengkap.
            </span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span className="text-gray-700">
              Bukan diagnosis resmi, hanya gambaran risiko awal.
            </span>
          </div>
        </div>

        <Button onClick={onStart} className="w-full" variant={"secondary"}>
          Mulai Cek Risiko
        </Button>
      </div>
    </AnimatedSection>
  );
}
