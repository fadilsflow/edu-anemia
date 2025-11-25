// components/impact-section.tsx
import { Gauge, GraduationCap, Heart, Droplet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Highlighter } from "./ui/highlighter";

const impacts = [
  {
    icon: GraduationCap,
    title: "Prestasi Belajar Menurun",
    description:
      "Sulit konsentrasi, mudah mengantuk, dan daya ingat terganggu.",
  },
  {
    icon: Heart,
    title: "Daya Tahan Tubuh Rendah",
    description: "Mudah sakit karena sistem imun tidak bekerja optimal.",
  },
  {
    icon: Gauge,
    title: "Penurunan Kebugaran Fisik",
    description: "Cepat lelah saat beraktivitas fisik atau berolahraga.",
  },
  {
    icon: Droplet,
    title: "Gangguan Menstruasi (Putri)",
    description: "Siklus haid bisa menjadi tidak teratur atau lebih berat.",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact">
      <div className="py-24 mx-auto w-full max-w-5xl px-6">
        <div className="mb-12">
          <h2 className="text-foreground text-4xl font-medium">
            Dampak <Highlighter action="highlight">Anemia</Highlighter> pada
            Remaja
          </h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Anemia bukan hanya sekadar "capek" biasa. Ini dapat memengaruhi masa
            depan Anda!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, index) => (
            <Card key={index} className="bg-accent/20">
              <CardHeader className="space-y-0">
                <impact.icon
                  fill="oklch(0.8677 0.0735 7.0855)"
                  className="h-10 w-10 text-secondary mb-3"
                />
                <CardTitle className="text-xl font-bold ">
                  <Highlighter action="underline">{impact.title}</Highlighter>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mt-2">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <blockquote className="mt-12 border-l-4 border-destructive pl-4 text-lg italic text-muted-foreground">
          &quot;Pada masa panjang: pertumbuhan dan perkembangan tidak
          optimal.&quot;
        </blockquote>
      </div>
    </section>
  );
}
