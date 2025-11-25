import Image from "next/image";
import { Highlighter } from "./ui/highlighter";
import { Cpu, Zap } from "lucide-react";

export default function ExplanationSection() {
  return (
    <section id="explanation">
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="mx-auto max-w-2xl">
            <div>
              <Image
                src="/explanation.png"
                alt="Explanation Image"
                width={120}
                height={120}
                className="w-24 h-auto"
              />

              <h2 className="text-foreground mt-4 text-4xl font-semibold">
                Apa itu <Highlighter>Anemia?</Highlighter>
              </h2>

              <p className="text-muted-foreground mb-12 mt-4 text-xl">
                Anemia adalah kondisi ketika tubuh kekurangan{" "}
                <Highlighter
                  action="underline"
                  color="oklch(0.8148 0.0819 225.7537)"
                >
                  {" "}
                  sel darah merah{" "}
                </Highlighter>{" "}
                atau
                <Highlighter
                  action="underline"
                  color="oklch(0.8148 0.0819 225.7537)"
                >
                  {" "}
                  hemoglobin{" "}
                </Highlighter>{" "}
                sehingga tidak mampu membawa{" "}
                <Highlighter
                  action="underline"
                  color="oklch(0.8148 0.0819 225.7537)"
                >
                  {" "}
                  oksigen{" "}
                </Highlighter>{" "}
                dengan cukup ke seluruh tubuh. Akibatnya, seseorang menjadi
                lemas, cepat capek, dan sulit berkonsentrasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
