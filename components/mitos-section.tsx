// components/mitos-section.tsx
import { CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Highlighter } from "./ui/highlighter";
import { cn } from "@/lib/utils";

const mythsFacts = [
  {
    type: "Mitos",
    icon: XCircle,
    color: "text-red-500",
    statement: "TTD bikin gemuk.",
    fact: "Tidak. TTD hanya menambah zat besi, bukan kalori, dan tidak ada hubungan langsung dengan penambahan berat badan.",
  },
  {
    type: "Mitos",
    icon: XCircle,
    color: "text-red-500",
    statement: "TTD hanya untuk anak perempuan.",
    fact: "Fakta: Remaja putra juga bisa mengonsumsi bila terindikasi kekurangan zat besi sesuai anjuran petugas kesehatan.",
  },
  {
    type: "Fakta",
    icon: CheckCircle,
    color: "text-green-500",
    statement: "BAB hitam berarti berbahaya.",
    fact: "BAB kehitaman adalah normal karena besi yang belum terserap sempurna keluar melalui feses. Ini aman!",
  },
];

export default function MitosSection() {
  return (
    <section id="mitos">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium sm:text-5xl">
            <Highlighter action="highlight">Mitos</Highlighter> vs{" "}
            <Highlighter
              action="underline"
              color="oklch(0.8148 0.0819 225.7537)"
            >
              Fakta
            </Highlighter>{" "}
            TTD
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Jangan sampai salah kaprah! Kenali kebenaran tentang Tablet Tambah
            Darah.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {mythsFacts.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "transition-transform duration-300 hover:scale-[1.03]",
                item.type === "Mitos" ? "bg-primary/50" : "bg-secondary/50"
              )}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <item.icon className={`h-8 w-8 ${item.color} shrink-0`} />
                  <CardTitle className="text-2xl font-semibold">
                    {item.type}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold italic ">
                  &quot;{item.statement}&quot;
                </p>
                <div className="mt-4 border-l-2 border-foreground pl-3">
                  <p className="font-medium text-sm 400">FAKTA:</p>
                  <p className="text-">{item.fact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
