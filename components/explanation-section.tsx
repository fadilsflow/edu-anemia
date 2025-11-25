// components/explanation-section.tsx
import { Highlighter } from "./ui/highlighter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ExplanationSection() {
  return (
    <section id="explanation">
      <div>
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="mx-auto max-w-5xl">
            <div>
              <h2 className="text-foreground mt-4 text-4xl font-semibold">
                Apa itu <Highlighter>Anemia?</Highlighter>
              </h2>

              <p className="text-muted-foreground mt-4 text-xl">
                Anemia adalah kondisi ketika tubuh kekurangan{" "}
                <Highlighter
                  action="underline"
                  color="oklch(0.8148 0.0819 225.7537)"
                >
                  {" "}
                  sel darah merah{" "}
                </Highlighter>{" "}
                atau{" "}
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

            <div className="mt-5 overflow-hidden">
              <div className="border-b ">
                <p className="text-sm text-muted-foreground">
                  Acuan Kadar Hemoglobin untuk diagnosis anemia (mg/l)
                  berdasarkan populasi:
                </p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      rowSpan={2}
                      className="bg-primary/40 font-bold text-center align-middle border-r"
                    >
                      Populasi
                    </TableHead>
                    <TableHead
                      rowSpan={2}
                      className="bg-primary/40 font-bold text-center align-middle border-r"
                    >
                      Non anemia
                    </TableHead>
                    <TableHead
                      colSpan={3}
                      className="bg-primary/40 font-bold text-center border-b"
                    >
                      Anemia
                    </TableHead>
                  </TableRow>
                  <TableRow className="bg-secondary/40">
                    <TableHead className="font-semibold text-center">
                      Ringan
                    </TableHead>
                    <TableHead className="font-semibold text-center">
                      Sedang
                    </TableHead>
                    <TableHead className="font-semibold text-center">
                      Berat
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      populasi: "Anak usia 6-59 bulan",
                      non: "≥ 11.0",
                      ringan: "10.0-10.9",
                      sedang: "7.0-9.9",
                      berat: "< 7.0",
                    },
                    {
                      populasi: "Anak usia 5-11 tahun",
                      non: "≥ 11.5",
                      ringan: "11.0-11.4",
                      sedang: "8.0-10.9",
                      berat: "< 8.0",
                    },
                    {
                      populasi: "Anak usia 12-14 tahun",
                      non: "≥ 12.0",
                      ringan: "11.0-11.4",
                      sedang: "8.0-10.9",
                      berat: "< 8.0",
                    },
                    {
                      populasi: "Wanita usia ≥ 15 tahun (tidak hamil)",
                      non: "≥ 12.0",
                      ringan: "11.0-11.9",
                      sedang: "8.0-10.9",
                      berat: "< 8.0",
                    },
                    {
                      populasi: "Wanita hamil",
                      non: "≥ 11.0",
                      ringan: "10.0-10.9",
                      sedang: "7.0-9.9",
                      berat: "< 7.0",
                    },
                    {
                      populasi: "Laki-laki usia ≥ 15 tahun",
                      non: "≥ 13.0",
                      ringan: "11.0-12.9",
                      sedang: "8.0-10.9",
                      berat: "< 8.0",
                    },
                  ].map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-center">
                        {row.populasi}
                      </TableCell>
                      <TableCell className="text-center ">{row.non}</TableCell>
                      <TableCell className="text-center">
                        {row.ringan}
                      </TableCell>
                      <TableCell className="text-center">
                        {row.sedang}
                      </TableCell>
                      <TableCell className="text-center">{row.berat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
