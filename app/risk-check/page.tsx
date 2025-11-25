"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RiskOnboarding } from "@/components/risk-check-onboarding";
import { RiskCheckHeader } from "@/components/header";
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import FooterSection from "@/components/footer";
import AnimatedSection from "@/components/animate-section";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  gender: string;
  age: number;
  pregnant: string;
  hemoglobin: number;
}

export default function RiskCheckerPage() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    age: 0,
    pregnant: "no",
    hemoglobin: 0,
  });

  const [result, setResult] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  if (showOnboarding) {
    return <RiskOnboarding onStart={() => setShowOnboarding(false)} />;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "age" || name === "hemoglobin"
          ? Number.parseFloat(value)
          : value,
    });
  };

  const calculateRisk = () => {
    let riskLevel = "Rendah";
    let riskScore = 0;
    let recommendations: string[] = [];

    // Hemoglobin normal ranges
    const normalRanges: { [key: string]: [number, number] } = {
      "laki-laki": [13.5, 17.5],
      "perempuan-tidak-hamil": [12.0, 15.5],
      "perempuan-hamil": [11.0, 14.0],
    };

    let targetRange = normalRanges["laki-laki"];
    if (formData.gender === "perempuan") {
      if (formData.pregnant === "yes") {
        targetRange = normalRanges["perempuan-hamil"];
      } else {
        targetRange = normalRanges["perempuan-tidak-hamil"];
      }
    }

    // Check hemoglobin levels
    if (formData.hemoglobin < targetRange[0]) {
      const deficiency = targetRange[0] - formData.hemoglobin;
      riskScore += deficiency > 2 ? 30 : 20;
      if (formData.hemoglobin < 11) {
        riskLevel = "Sangat Tinggi";
      } else if (formData.hemoglobin < targetRange[0]) {
        riskLevel = "Tinggi";
      }
    } else if (formData.hemoglobin > targetRange[1]) {
      riskScore += 10;
      riskLevel = "Perlu Evaluasi";
    } else {
      riskScore += 5;
    }

    // Age factor for remaja
    if (formData.age >= 10 && formData.age <= 19) {
      riskScore += 5;
      recommendations.push(
        "Masa remaja memerlukan perhatian khusus karena pertumbuhan pesat",
      );
    }

    // Gender-specific factors
    if (
      formData.gender === "perempuan" &&
      formData.pregnant === "no" &&
      formData.age >= 12
    ) {
      riskScore += 5;
      recommendations.push(
        "Sebagai remaja putri, konsumsi TTD sangat penting (1 tablet per minggu)",
      );
    }

    if (formData.pregnant === "yes") {
      riskScore += 10;
      recommendations.push(
        "Sebagai ibu hamil, konsultasi dengan dokter sangat diperlukan",
      );
    }

    // Determine risk level based on score
    if (formData.hemoglobin < 11) {
      riskLevel = "Sangat Tinggi";
    } else if (formData.hemoglobin < targetRange[0]) {
      riskLevel = "Tinggi";
    } else if (formData.hemoglobin <= targetRange[1]) {
      riskLevel = "Normal";
      recommendations = [
        "Pertahankan pola hidup sehat dan konsumsi nutrisi seimbang",
      ];
    } else {
      riskLevel = "Perlu Evaluasi";
    }

    // Add recommendations
    if (riskLevel === "Normal") {
      recommendations.push("Terus jaga asupan zat besi dari makanan bergizi");
      recommendations.push("Lanjutkan konsumsi TTD sesuai program kesehatan");
      recommendations.push("Tidur cukup dan olahraga teratur");
    } else if (riskLevel === "Tinggi" || riskLevel === "Sangat Tinggi") {
      recommendations.push(
        "Segera konsultasikan dengan petugas kesehatan atau dokter",
      );
      recommendations.push("Tingkatkan konsumsi makanan tinggi zat besi");
      recommendations.push("Konsumsi TTD secara rutin sesuai anjuran");
      recommendations.push("Hindari minum teh/kopi bersamaan dengan zat besi");
    }

    setResult({
      riskLevel,
      riskScore,
      hemoglobin: formData.hemoglobin,
      normalRange: targetRange,
      recommendations,
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      gender: "",
      age: 0,
      pregnant: "no",
      hemoglobin: 0,
    });
    setResult(null);
    setSubmitted(false);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Sangat Tinggi":
        return "from-risk-very-high to-risk-very-high";
      case "Tinggi":
        return "from-risk-high to-risk-high";
      case "Perlu Evaluasi":
        return "from-risk-evaluation to-risk-evaluation";
      case "Normal":
        return "from-risk-normal to-risk-normal";
      default:
        return "from-primary to-primary";
    }
  };

  const getRiskBg = (level: string) => {
    switch (level) {
      case "Sangat Tinggi":
        return "bg-risk-very-high-light border-risk-very-high";
      case "Tinggi":
        return "bg-risk-high-light border-risk-high";
      case "Perlu Evaluasi":
        return "bg-risk-evaluation-light border-risk-evaluation";
      case "Normal":
        return "bg-risk-normal-light border-risk-normal";
      default:
        return "bg-muted border-border";
    }
  };

  if (submitted && result) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div>
          <Image
            src="/risk-check-complete.png"
            alt="Risk Check Complete"
            width={100}
            height={100}
            className={`mx-auto mb-6 ${getRiskBg(
              result.riskLevel,
            )} rounded-full p-4`}
          />
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            <Highlighter action="underline">
              Hasil Evaluasi Risiko Anemia
            </Highlighter>
          </h2>

          <div
            className={`bg-linear-to-r ${getRiskColor(
              result.riskLevel,
            )} rounded-lg p-8 text-white text-center mb-8`}
          >
            <p className="text-sm font-semibold opacity-90 mb-2">
              Tingkat Risiko
            </p>

            <p className="text-4xl font-bold">
              <Highlighter>{result.riskLevel}</Highlighter>
            </p>
            <p className="text-lg mt-4">Kadar Hb: {result.hemoglobin} g/dL</p>
            <p className="text-sm opacity-90">
              Normal: {result.normalRange[0]} - {result.normalRange[1]} g/dL
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-foreground">
              Rekomendasi untuk Anda:
            </h3>
            {result.recommendations.map((rec: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-card p-4 rounded-lg "
              >
                <span className="text-xl">✓</span>
                <p className="text-card-foreground">{rec}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-6 mb-8">
            <h4 className="font-bold text-foreground mb-3">
              Informasi Tambahan:
            </h4>
            <ul className="space-y-2 text-card-foreground text-sm">
              <li>• Hasil ini berdasarkan data yang Anda masukkan</li>
              <li>
                • Untuk diagnosis akurat, konsultasi dengan dokter atau petugas
                kesehatan
              </li>
              <li>• Kadar hemoglobin dapat berubah seiring waktu</li>
              <li>• Periksakan kesehatan secara berkala</li>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-4">
            <Button onClick={handleReset}>Cek Lagi</Button>
            <Link href="/#explanation">
              <Button
                variant={"outline"}
                className="w-full py-3 rounded-lg font-semibold transition-all"
              >
                Keluar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <RiskCheckHeader />
      <AnimatedSection delay={0} className="max-w-2xl mx-auto px-4 pb-12">
        <div>
          <p className="text-muted-foreground mb-8 pt-20">
            Isi data kesehatan Anda untuk evaluasi risiko anemia. Data ini hanya
            untuk edukasi dan bukan pengganti konsultasi medis.
          </p>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              calculateRisk();
            }}
          >
            <div className="w-full mx-auto">
              <Label className="block text-foreground font-semibold mb-2">
                Jenis Kelamin *
              </Label>
              <NativeSelect
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full"
              >
                <NativeSelectOptGroup label="Jenis Kelamin">
                  <NativeSelectOption value="">
                    Pilih jenis kelamin
                  </NativeSelectOption>
                  <NativeSelectOption value="laki-laki">
                    Laki-laki
                  </NativeSelectOption>
                  <NativeSelectOption value="perempuan">
                    Perempuan
                  </NativeSelectOption>
                </NativeSelectOptGroup>
              </NativeSelect>
            </div>

            <div>
              <Label className="block text-foreground font-semibold mb-2">
                Umur (tahun) *
              </Label>
              <Input
                type="number"
                name="age"
                value={formData.age || ""}
                onChange={handleChange}
                required
                min="1"
                max="100"
                placeholder="Masukkan umur Anda"
              />
            </div>

            {formData.gender === "perempuan" && (
              <div>
                <Label className="block text-foreground font-semibold mb-2">
                  Sedang Hamil?
                </Label>
                <select
                  name="pregnant"
                  value={formData.pregnant}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:border-secondary focus:outline-none text-foreground"
                >
                  <option value="no">Tidak</option>
                  <option value="yes">Ya</option>
                </select>
              </div>
            )}

            <div>
              <Label className="block text-foreground font-semibold mb-2">
                Kadar Hemoglobin (g/dL) *
              </Label>
              <Input
                type="number"
                name="hemoglobin"
                value={formData.hemoglobin || ""}
                onChange={handleChange}
                required
                step="0.1"
                min="0"
                max="20"
                placeholder="Masukkan kadar Hb (contoh: 13.5)"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Kadar normal: Laki-laki 13.5-17.5, Perempuan 12.0-15.5 (hamil
                11.0-14.0)
              </p>
            </div>

            <Button type="submit" className="w-full">
              Cek Risiko
            </Button>
          </form>

          <div className="mt-8 bg-accent/20 rounded-lg p-6 border-2 border-accent">
            <h3 className="font-bold text-accent-foreground mb-3">
              ⚠️ Penting!
            </h3>
            <p className="text-accent-foreground text-sm leading-relaxed">
              Alat ini hanya untuk tujuan edukasi dan screening awal. Hasil ini
              BUKAN diagnosis medis. Jika Anda khawatir tentang risiko anemia,
              segera konsultasikan dengan dokter atau petugas kesehatan untuk
              pemeriksaan lebih lanjut.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <FooterSection />
    </>
  );
}
