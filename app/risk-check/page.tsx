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
    let riskLevel = "Normal";
    let riskScore = 0;
    let recommendations: string[] = [];
    let classification = {
      non: 0,
      ringan: [0, 0],
      sedang: [0, 0],
      berat: 0,
    };
    let populationName = "";

    const { age, gender, pregnant, hemoglobin } = formData;

    // Determine population and thresholds
    if (pregnant === "yes") {
      populationName = "Ibu Hamil";
      classification = {
        non: 11.0,
        ringan: [10.0, 10.9],
        sedang: [7.0, 9.9],
        berat: 7.0,
      };
    } else if (age < 5) {
      populationName = "Anak (6-59 bulan)";
      classification = {
        non: 11.0,
        ringan: [10.0, 10.9],
        sedang: [7.0, 9.9],
        berat: 7.0,
      };
    } else if (age >= 5 && age <= 11) {
      populationName = "Anak (5-11 tahun)";
      classification = {
        non: 11.5,
        ringan: [11.0, 11.4],
        sedang: [8.0, 10.9],
        berat: 8.0,
      };
    } else if (age >= 12 && age <= 14) {
      populationName = "Anak (12-14 tahun)";
      classification = {
        non: 12.0,
        ringan: [11.0, 11.4],
        sedang: [8.0, 10.9],
        berat: 8.0,
      };
    } else if (age >= 15) {
      if (gender === "perempuan") {
        populationName = "Wanita (≥ 15 tahun)";
        classification = {
          non: 12.0,
          ringan: [11.0, 11.9],
          sedang: [8.0, 10.9],
          berat: 8.0,
        };
      } else {
        populationName = "Laki-laki (≥ 15 tahun)";
        classification = {
          non: 13.0,
          ringan: [11.0, 12.9],
          sedang: [8.0, 10.9],
          berat: 8.0,
        };
      }
    }

    // Determine Risk Level
    if (hemoglobin >= classification.non) {
      riskLevel = "Normal";
      recommendations = [
        "Pertahankan pola hidup sehat dan konsumsi nutrisi seimbang",
        "Terus jaga asupan zat besi dari makanan bergizi",
        "Tidur cukup dan olahraga teratur",
      ];
    } else if (
      hemoglobin >= classification.ringan[0] &&
      hemoglobin <= classification.ringan[1]
    ) {
      riskLevel = "Anemia Ringan";
      riskScore = 20;
    } else if (
      hemoglobin >= classification.sedang[0] &&
      hemoglobin <= classification.sedang[1]
    ) {
      riskLevel = "Anemia Sedang";
      riskScore = 50;
    } else {
      riskLevel = "Anemia Berat";
      riskScore = 80;
    }

    // Additional Recommendations based on specific conditions
    if (riskLevel !== "Normal") {
      recommendations.push(
        "Segera konsultasikan dengan petugas kesehatan atau dokter",
      );
      recommendations.push("Tingkatkan konsumsi makanan tinggi zat besi");
      recommendations.push("Konsumsi TTD (Tablet Tambah Darah) sesuai anjuran");
      recommendations.push("Hindari minum teh/kopi bersamaan dengan zat besi");
    }

    if (age >= 10 && age <= 19) {
      recommendations.push(
        "Masa remaja memerlukan perhatian khusus karena pertumbuhan pesat",
      );
    }

    if (gender === "perempuan" && pregnant === "no" && age >= 12) {
      recommendations.push(
        "Sebagai wanita usia subur, disarankan konsumsi TTD secara berkala (1 tablet per minggu)",
      );
    }

    if (pregnant === "yes") {
      recommendations.push(
        "Ibu hamil sangat disarankan rutin memeriksakan kehamilan (ANC)",
      );
    }

    setResult({
      riskLevel,
      riskScore,
      hemoglobin: formData.hemoglobin,
      populationName,
      threshold: classification.non,
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
      case "Anemia Berat":
        return "from-risk-very-high to-risk-very-high";
      case "Anemia Sedang":
        return "from-risk-high to-risk-high";
      case "Anemia Ringan":
        return "from-risk-evaluation to-risk-evaluation";
      case "Normal":
        return "from-risk-normal to-risk-normal";
      default:
        return "from-primary to-primary";
    }
  };

  const getRiskBg = (level: string) => {
    switch (level) {
      case "Anemia Berat":
        return "bg-risk-very-high-light border-risk-very-high";
      case "Anemia Sedang":
        return "bg-risk-high-light border-risk-high";
      case "Anemia Ringan":
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
            )} rounded-lg p-8 text-white text-center mb-8 shadow-lg`}
          >
            <p className="text-sm font-semibold opacity-90 mb-2">
              Kategori: {result.populationName}
            </p>

            <p className="text-4xl font-bold mb-2">
              <Highlighter action="box">{result.riskLevel}</Highlighter>
            </p>
            <p className="text-lg mt-4">
              Kadar Hb Anda: {result.hemoglobin} g/dL
            </p>
            <p className="text-sm opacity-90 mt-1">
              Batas Normal: ≥ {result.threshold} g/dL
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
                <NativeSelect
                  name="pregnant"
                  value={formData.pregnant}
                  onChange={handleChange}
                >
                  <NativeSelectOptGroup label="Sedang Hamil?">
                    <NativeSelectOption value="no">Tidak</NativeSelectOption>
                    <NativeSelectOption value="yes">Ya</NativeSelectOption>
                  </NativeSelectOptGroup>
                </NativeSelect>
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
                Kadar normal bervariasi (contoh: Laki-laki dewasa ≥ 13.0, Wanita
                dewasa ≥ 12.0, Ibu Hamil ≥ 11.0)
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
