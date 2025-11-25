// components/tablet-section.tsx
import { Pill, Users, Clock, Lightbulb, AlertCircle } from "lucide-react";
import { Highlighter } from "./ui/highlighter";

export default function TabletSection() {
  const accentColor = "oklch(0.8148 0.0819 225.7537)";
  const secondaryColor = "oklch(0.8677 0.0735 7.0855)";

  return (
    <section id="tablet">
      <div className="mb-12 mx-auto w-full max-w-5xl px-6">
        <h2 className="text-foreground text-4xl font-medium">
          Tablet Tambah Darah{" "}
          <Highlighter action="highlight">(TTD)</Highlighter>
        </h2>
      </div>
      <div className="mx-auto w-full max-w-5xl px-6 flex flex-col divide-y divide-foreground/5">
        <div className="flex flex-col lg:flex-row justify-between gap-12 pt-8 first:pt-0 ">
          <div className="lg:w-1/2 pb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Pill
                fill={secondaryColor}
                className="h-10 w-10 text-secondary"
              />
              <h2 className="text-2xl font-medium text-foreground">
                Apa Itu ?
              </h2>
            </div>

            <p className="text-muted-foreground text-xl leading-relaxed">
              Tablet Tambah Darah (TTD) adalah tablet berisi{" "}
              <Highlighter action="underline" color={accentColor}>
                zat besi (Fe)
              </Highlighter>{" "}
              dan{" "}
              <Highlighter action="underline" color={accentColor}>
                asam folat
              </Highlighter>
              . TTD diberikan untuk mencegah anemia, terutama pada remaja putri,
              tetapi remaja putra juga boleh minum bila membutuhkan.
            </p>
          </div>

          {/* BLOK 2: Kenapa Remaja Harus Minum */}
          <div className="lg:w-1/2 lg:border-l lg:pl-12 border-foreground/10 pb-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle
                fill={accentColor}
                className="h-9 w-9 text-primary"
              />
              <h3 className="text-2xl font-medium text-foreground">
                Kenapa Harus Minum?
              </h3>
            </div>

            <ul className="space-y-3 text-muted-foreground text-lg">
              {[
                "Menjaga kadar hemoglobin tetap normal.",
                "Membantu konsentrasi belajar.",
                "Mencegah kelelahan berlebih.",
                "Meningkatkan kebugaran.",
                "Menunjang pertumbuhan saat pubertas.",
                "Remaja putri: mengganti zat besi pasca haid.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span
                    className="mr-3 text-primary font-bold text-xl leading-none"
                    style={{ color: accentColor }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === BARIS 2: BLOK 3 & 4 === */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* BLOK 3: Untuk Siapa (Styling disamakan dengan Blok 1) */}
          <div className="lg:w-1/2 py-8">
            <div className="flex items-center space-x-3 mb-6">
              <Users
                fill={secondaryColor}
                className="h-10 w-10 text-secondary"
              />
              <h3 className="text-2xl font-medium text-foreground">
                Untuk Siapa TTD?
              </h3>
            </div>

            <ul className="space-y-4 text-muted-foreground text-xl leading-relaxed">
              <li className="flex items-start">
                <span
                  className="mr-3 text-primary font-bold text-xl leading-none"
                  style={{ color: secondaryColor }}
                >
                  •
                </span>
                <span>
                  <strong className="text-foreground font-medium">
                    Remaja Putri:
                  </strong>{" "}
                  Pencegahan anemia dan mengganti zat besi yang hilang selama
                  menstruasi.
                </span>
              </li>
              <li className="flex items-start">
                <span
                  className="mr-3 text-primary font-bold text-xl leading-none"
                  style={{ color: secondaryColor }}
                >
                  •
                </span>
                <span>
                  <strong className="text-foreground font-medium">
                    Remaja Putra:
                  </strong>{" "}
                  Bila terindikasi kekurangan zat besi sesuai anjuran tenaga
                  kesehatan.
                </span>
              </li>
            </ul>
          </div>

          {/* BLOK 4: Aturan Minum (Styling disamakan dengan Blok 2) */}
          <div className="lg:w-1/2 lg:border-l lg:pl-12 border-foreground/10 py-8">
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb fill={accentColor} className="h-9 w-9 text-primary" />
              <h3 className="text-2xl font-medium text-foreground">
                Aturan Minum
              </h3>
            </div>

            <ul className="space-y-4 text-muted-foreground text-lg">
              <li className="flex items-start">
                <span
                  className="mr-3 font-bold text-xl leading-none"
                  style={{ color: accentColor }}
                >
                  •
                </span>
                <span>
                  <strong className="text-foreground">Remaja Putri:</strong> 1
                  tablet per minggu sepanjang tahun.
                </span>
              </li>
              <li className="flex items-start">
                <span
                  className="mr-3 font-bold text-xl leading-none"
                  style={{ color: accentColor }}
                >
                  •
                </span>
                <span>
                  <strong className="text-foreground">Remaja Putra:</strong>{" "}
                  Minum bila terindikasi kurang zat besi.
                </span>
              </li>
              <li className="flex items-start">
                <span
                  className="mr-3 font-bold text-xl leading-none"
                  style={{ color: accentColor }}
                >
                  •
                </span>
                <span>
                  <strong className="text-foreground">Cara Minum:</strong>{" "}
                  Setelah makan, dengan air putih (hindari teh/kopi).
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* === BARIS 3: BLOK 5 (Efek Samping) === */}
        <div className=" border-b py-8">
          <div className="flex items-center space-x-3 mb-6">
            <Pill
              className="h-9 w-9 text-primary"
              fill="oklch(0.8148 0.0819 225.7537)"
            />
            <h3 className="text-2xl font-medium text-foreground">
              Efek Samping
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex items-start ">
              <span className="mr-3 text-secondary font-bold text-2xl leading-none">
                •
              </span>
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground block mb-1">
                  Mual Ringan
                </strong>
                Ini adalah reaksi tubuh yang sangat normal saat menyesuaikan
                asupan zat besi.
              </p>
            </div>
            <div className="flex items-start ">
              <span className="mr-3 text-secondary font-bold text-2xl leading-none">
                •
              </span>
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground block mb-1">
                  Warna BAB Kehitaman
                </strong>
                Tanda bahwa zat besi terserap tubuh. Aman dan akan hilang jika
                rutin minum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
