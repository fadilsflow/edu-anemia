// components/symptoms-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Highlighter } from "./ui/highlighter";

const symptomsList = [
  "Mudah lelah, lemas",
  "Wajah pucat",
  "Pusing, mata berkunang-kunang",
  "Napas cepat atau pendek",
  "Sulit fokus saat belajar",
  "Lesu dan mengantuk di kelas",
  "Kuku pucat atau rapuh",
  "Badan terasa dingin",
];

export default function SymptomsSection() {
  return (
    <section id="symptoms" className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-foreground mt-3 text-4xl font-medium">
            Tanda dan{" "}
            <Highlighter action="highlight">Gejala Anemia</Highlighter>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Kenali sinyal dari tubuh Anda. Jangan abaikan tanda-tanda berikut!
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {symptomsList.map((symptom, index) => (
            <Card
              key={index}
              className="bg-secondary/20"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <span className="bg-primary p-1 rounded-full">{index + 1}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold leading-relaxed text-foreground">
                  <Highlighter action="underline">
                  {symptom}
                  </Highlighter>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
