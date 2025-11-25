"use client";
import Image from "next/image";
import { Highlighter } from "./ui/highlighter";

export default function WhySection() {
  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div>
            <h2
              className="
    flex items-center gap-2 text-foreground mt-4 font-semibold
    text-3xl sm:text-4xl
    flex-wrap
  "
            >
              Kenapa <Highlighter action="highlight">Anemia</Highlighter> Bisa
              Terjadi?
              <Image
                src="/why.png"
                alt="Explanation Image"
                width={50}
                height={50}
                className="w-10 h-auto sm:w-12"
              />
            </h2>

            <p className="text-muted-foreground mb-12 mt-4 text-lg">
              Faktor-faktor utama yang sering memicu anemia pada remaja
            </p>
          </div>

          <div className="border-foreground/5 space-y-6 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y">
            {/* Kekurangan Zat Besi */}
            <div className="grid sm:grid-cols-5">
              <div className="sm:col-span-2 flex items-center justify-center">
                <Image
                  src="/iron-deficiency.png"
                  alt="Ilustrasi Kekurangan Zat Besi"
                  width={160}
                  height={160}
                  className="inline-block"
                />
              </div>
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                <h3 className="text-foreground text-xl font-semibold">
                  Kekurangan Zat Besi
                </h3>
                <p className="text-muted-foreground mt-4 text-lg">
                  Zat besi dibutuhkan untuk pembentukan hemoglobin. Bila asupan
                  terlalu rendah, produksi hemoglobin ikut menurun dan tubuh
                  kesulitan membawa oksigen secara optimal.
                </p>
              </div>
            </div>

            {/* Pola Makan Tidak Seimbang */}
            <div className="grid sm:grid-cols-5">
              <div className="sm:col-span-2 flex items-center justify-center py-7">
                <Image
                  src="/unbalanced-diet.png"
                  alt="Ilustrasi Pola Makan Tidak Seimbang"
                  width={160}
                  height={160}
                  className="inline-block"
                />
              </div>
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12">
                <h3 className="text-foreground text-xl font-semibold">
                  Pola Makan Tidak Seimbang
                </h3>
                <p className="text-muted-foreground mt-4 text-lg">
                  Remaja sering kurang mengonsumsi protein hewani dan sayuran
                  berdaun hijau, dua sumber penting zat besi dan nutrisi
                  pendukung pembentukan darah.
                </p>
              </div>
            </div>

            {/* Pertumbuhan Pesat */}
            <div className="grid sm:grid-cols-5">
              <div className="sm:col-span-2 flex items-center justify-center py-7">
                <Image
                  src="/growth-spurt.png"
                  alt="Ilustrasi Pertumbuhan Pesat"
                  width={160}
                  height={160}
                  className="inline-block"
                />
              </div>
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12">
                <h3 className="text-foreground text-xl font-semibold">
                  Pertumbuhan Pesat
                </h3>
                <p className="text-muted-foreground mt-4 text-lg">
                  Masa pubertas membuat kebutuhan zat besi meningkat tajam. Jika
                  kebutuhan ini tidak terpenuhi melalui makanan, anemia mudah
                  terjadi.
                </p>
              </div>
            </div>

            {/* Menstruasi */}
            <div className="grid sm:grid-cols-5">
              <div className="sm:col-span-2 flex items-center justify-center py-7">
                <Image
                  src="/menstruation.png"
                  alt="Ilustrasi Menstruasi"
                  width={160}
                  height={160}
                  className="inline-block"
                />
              </div>
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12">
                <h3 className="text-foreground text-xl font-semibold">
                  Menstruasi (Remaja Putri)
                </h3>
                <p className="text-muted-foreground mt-4 text-lg">
                  Kehilangan darah setiap bulan meningkatkan kebutuhan zat besi.
                  Tanpa asupan yang cukup, kadar hemoglobin bisa turun lebih
                  cepat.
                </p>
              </div>
            </div>

            {/* Aktivitas Tinggi */}
            <div className="grid sm:grid-cols-5">
              <div className="sm:col-span-2 flex items-center justify-center py-7">
                <Image
                  src="/high-activity.png"
                  alt="Ilustrasi Aktivitas Tinggi"
                  width={160}
                  height={160}
                  className="inline-block"
                />
              </div>
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12">
                <h3 className="text-foreground text-xl font-semibold">
                  Aktivitas Tinggi
                </h3>
                <p className="text-muted-foreground mt-4 text-lg">
                  Aktivitas fisik intensif seperti olahraga berat meningkatkan
                  kebutuhan oksigen dan zat besi. Jika pemenuhannya kurang,
                  anemia dapat muncul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
