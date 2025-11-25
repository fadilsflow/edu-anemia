// components/prevent-section.tsx
import { Leaf, Utensils, Zap, Sun, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Highlighter } from "./ui/highlighter";

const preventions = [
  {
    icon: Leaf,
    title: "Konsumsi Makanan Tinggi Zat Besi",
    details:
      "Daging ayam, sapi, hati, ikan, telur, sayuran hijau (bayam, kangkung), dan kacang-kacangan.",
  },
  {
    icon: Zap,
    title: "Makanan yang Membantu Penyerapan",
    details:
      "Vitamin C (jeruk, jambu, mangga, tomat) membantu penyerapan zat besi. Konsumsi bersamaan!",
  },
  {
    icon: Utensils,
    title: "Hindari Penghambat Penyerapan",
    details:
      "Teh, kopi, dan susu dalam jumlah besar dapat menghambat penyerapan zat besi. Jangan minum bersamaan!",
  },
  {
    icon: Sun,
    title: "Cukup Istirahat dan Tetap Aktif",
    details:
      "Tidur cukup 8–9 jam dan rutin berolahraga ringan untuk menjaga kebugaran tubuh.",
  },
];

export default function PreventSection() {
  return (
    <section id="prevent">
      <div className="py-24 mx-auto w-full max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-foreground mt-3 text-4xl font-medium">
            Cara Mencegah &{" "}
            <Highlighter action="highlight">Mengatasi</Highlighter> Anemia
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Aksi sederhana bisa membuat perbedaan besar. Jadikan ini kebiasaan
            sehat Anda!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {preventions.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-start space-x-4">
                <item.icon
                  fill="oklch(0.8148 0.0819 225.7537)"
                  className="h-8 w-8 text-primary shrink-0 mt-1"
                />
                <CardTitle className="text-2xl font-bold text-foreground">
                  <Highlighter
                    action="underline"
                    color="oklch(0.8148 0.0819 225.7537)"
                  >
                    {item.title}
                  </Highlighter>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-14 pt-0">
                <p className="text-muted-foreground">{item.details}</p>
              </CardContent>
            </Card>
          ))}
          <Card className="lg:col-span-2 bg-primary text-primary-foreground">
            <CardHeader className="flex flex-row items-center space-x-4">
              <AlertCircle
                fill="oklch(0.8677 0.0735 7.0855)"
                className="h-8 w-8 text-primary-foreground shrink-0"
              />
              <CardTitle className="text-2xl font-bold">
                Konsumsi Tablet Tambah Darah secara rutin!
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-14 pt-0">
              <p>
                Ini adalah kunci utama pencegahan, terutama untuk remaja putri.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
