"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizHeader } from "@/components/header";
import { QuizOnboarding } from "@/components/quiz-onboarding";
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";
import AnimatedSection from "@/components/animate-section";
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Apa definisi anemia?",
    options: [
      "Kekurangan gula darah",
      "Kekurangan sel darah merah/hemoglobin",
      "Kelebihan kalsium",
      "Kekurangan cairan tubuh",
    ],
    correctAnswer: 1,
    explanation:
      "Anemia adalah kondisi ketika tubuh kekurangan sel darah merah atau hemoglobin.",
  },
  {
    id: 2,
    question: "Hemoglobin berfungsi untuk…",
    options: [
      "Mengangkut oksigen",
      "Menghambat infeksi",
      "Menguatkan tulang",
      "Mencerna makanan",
    ],
    correctAnswer: 0,
    explanation:
      "Hemoglobin adalah protein dalam sel darah merah yang berfungsi mengangkut oksigen.",
  },
  {
    id: 3,
    question: "Penyebab paling umum anemia pada remaja adalah…",
    options: [
      "Kurang tidur",
      "Kekurangan zat besi",
      "Kebanyakan olahraga",
      "Tidak sarapan",
    ],
    correctAnswer: 1,
    explanation:
      "Kekurangan zat besi adalah penyebab paling umum anemia pada remaja.",
  },
  {
    id: 4,
    question: "Makanan tinggi zat besi adalah…",
    options: ["Kerupuk", "Daging sapi", "Permen", "Teh manis"],
    correctAnswer: 1,
    explanation: "Daging sapi adalah sumber protein hewani yang kaya zat besi.",
  },
  {
    id: 5,
    question: "Vitamin yang membantu penyerapan zat besi adalah…",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: 1,
    explanation:
      "Vitamin C membantu tubuh menyerap zat besi dengan lebih baik.",
  },
  {
    id: 6,
    question: "Gejala anemia berikut ini benar, kecuali…",
    options: ["Mudah lelah", "Pusing", "Pucat", "Nafsu makan tinggi"],
    correctAnswer: 3,
    explanation:
      "Orang dengan anemia biasanya mengalami nafsu makan yang menurun, bukan meningkat.",
  },
  {
    id: 7,
    question: "Remaja putri berisiko anemia karena…",
    options: [
      "Jarang olahraga",
      "Menstruasi setiap bulan",
      "Bekerja terlalu keras",
      "Sering makan buah",
    ],
    correctAnswer: 1,
    explanation:
      "Menstruasi menyebabkan kehilangan darah setiap bulan, meningkatkan risiko anemia pada remaja putri.",
  },
  {
    id: 8,
    question: "Dampak anemia pada pelajar adalah…",
    options: [
      "Prestasi akademik meningkat",
      "Konsentrasi menurun",
      "Kekuatan otot meningkat",
      "Nafsu makan berkurang saja",
    ],
    correctAnswer: 1,
    explanation:
      "Anemia menyebabkan kesulitan konsentrasi dan prestasi akademik menurun.",
  },
  {
    id: 9,
    question: "Tablet Tambah Darah (TTD) mengandung…",
    options: [
      "Zat besi dan asam folat",
      "Kalsium",
      "Vitamin B12 saja",
      "Minyak ikan",
    ],
    correctAnswer: 0,
    explanation: "TTD adalah tablet berisi zat besi (Fe) dan asam folat.",
  },
  {
    id: 10,
    question: "Program TTD untuk remaja putri di Indonesia adalah…",
    options: [
      "1 tablet per hari",
      "1 tablet per minggu",
      "1 tablet per bulan",
      "Tidak perlu minum",
    ],
    correctAnswer: 1,
    explanation:
      "Remaja putri dianjurkan minum TTD 1 tablet per minggu sepanjang tahun.",
  },
  {
    id: 11,
    question: "TTD sebaiknya diminum dengan…",
    options: ["Air putih", "Teh", "Kopi", "Susu"],
    correctAnswer: 0,
    explanation:
      "TTD sebaiknya diminum dengan air putih untuk penyerapan optimal.",
  },
  {
    id: 12,
    question: "Mengapa tidak boleh minum TTD dengan teh/kopi?",
    options: [
      "Membuat pahit",
      "Menyebabkan kantuk",
      "Menghambat penyerapan zat besi",
      "Menurunkan nafsu makan",
    ],
    correctAnswer: 2,
    explanation:
      "Teh dan kopi mengandung zat yang menghambat penyerapan zat besi.",
  },
  {
    id: 13,
    question: "Efek samping ringan TTD yang normal adalah…",
    options: ["Demam tinggi", "BAB kehitaman", "Ruam berat", "Sesak napas"],
    correctAnswer: 1,
    explanation:
      "BAB kehitaman adalah efek samping ringan yang normal dari konsumsi TTD.",
  },
  {
    id: 14,
    question: "Apa manfaat TTD?",
    options: [
      "Membuat gemuk",
      "Mencegah anemia",
      "Membuat rambut cepat panjang",
      "Mengurangi keringatl",
    ],
    correctAnswer: 1,
    explanation:
      "Manfaat utama TTD adalah mencegah anemia dengan menjaga kadar hemoglobin.",
  },
  {
    id: 15,
    question: "Contoh sayuran tinggi zat besi adalah…",
    options: ["Bayam", "Sawi putih", "Mentimun", "Kol"],
    correctAnswer: 0,
    explanation: "Bayam adalah sayuran berdaun hijau yang kaya akan zat besi.",
  },
  {
    id: 16,
    question: "Anemia dapat menyebabkan…",
    options: [
      "Fokus belajar meningkat",
      "Mudah mengantuk",
      "Energi berlebih",
      "Berat badan naik cepat",
    ],
    correctAnswer: 1,
    explanation: "Anemia menyebabkan tubuh mudah lelah dan mengantuk.",
  },
  {
    id: 17,
    question: "Siapa yang boleh minum TTD?",
    options: [
      "Hanya laki-laki",
      "Hanya perempuan",
      "Remaja putri (program), remaja putra bila butuh",
      "Balita saja",
    ],
    correctAnswer: 2,
    explanation:
      "Remaja putri dianjurkan minum TTD, sementara remaja putra boleh minum jika ada indikasi.",
  },
  {
    id: 18,
    question: "Zat besi termasuk golongan…",
    options: ["Karbohidrat", "Mineral", "Lemak", "Air"],
    correctAnswer: 1,
    explanation:
      "Zat besi adalah mineral yang penting untuk pembentukan hemoglobin.",
  },
  {
    id: 19,
    question: "Zat yang menghambat penyerapan zat besi adalah…",
    options: ["Vitamin C", "Teh", "Buah segar", "Air putih"],
    correctAnswer: 1,
    explanation: "Teh mengandung tannin yang menghambat penyerapan zat besi.",
  },
  {
    id: 20,
    question: "Ketika anemia, tubuh kekurangan…",
    options: ["Oksigen", "Lemak", "Hormon", "Garam"],
    correctAnswer: 0,
    explanation:
      "Anemia menyebabkan tubuh kekurangan oksigen karena hemoglobin yang rendah.",
  },
  {
    id: 21,
    question: "Salah satu faktor risiko anemia pada remaja laki-laki adalah…",
    options: [
      "Masa pertumbuhan cepat",
      "Menstruasi",
      "Diet ekstrem",
      "A dan C benar",
    ],
    correctAnswer: 3,
    explanation:
      "Masa pertumbuhan cepat dan diet ekstrem adalah faktor risiko anemia pada remaja laki-laki.",
  },
  {
    id: 22,
    question: "Anemia dapat menurunkan imun karena…",
    options: [
      "Oksigen tidak cukup untuk sel tubuh",
      "Air minum kurang",
      "Sering marah",
      "Terlalu banyak tidur",
    ],
    correctAnswer: 0,
    explanation:
      "Kekurangan oksigen akibat anemia mengganggu fungsi sistem imun tubuh.",
  },
  {
    id: 23,
    question: "TTD paling baik diminum setelah…",
    options: ["Olahraga", "Tidur", "Makan", "Minum obat flu"],
    correctAnswer: 2,
    explanation:
      "TTD sebaiknya diminum setelah makan agar lebih nyaman di lambung.",
  },
  {
    id: 24,
    question: "Remaja putri dianjurkan minum TTD sepanjang tahun karena…",
    options: [
      "Untuk membuat kulit cerah",
      "Menggantikan zat besi yang hilang saat menstruasi",
      "Membuat rambut kuat",
      "Meningkatkan tinggi badan cepat",
    ],
    correctAnswer: 1,
    explanation:
      "TTD membantu menggantikan zat besi yang hilang selama menstruasi setiap bulan.",
  },
  {
    id: 25,
    question: "Sumber protein hewani yang mendukung pencegahan anemia adalah…",
    options: ["Kerupuk udang", "Telur", "Keripik singkong", "Mie instan"],
    correctAnswer: 1,
    explanation:
      "Telur adalah sumber protein hewani yang kaya akan zat besi dan nutrisi.",
  },
  {
    id: 26,
    question: "Bila anemia tidak ditangani, dampak jangka panjangnya adalah…",
    options: [
      "Pertumbuhan optimal",
      "Konsentrasi meningkat",
      "Kelelahan kronis",
      "Nafsu makan tinggi",
    ],
    correctAnswer: 2,
    explanation:
      "Anemia yang tidak ditangani dapat menyebabkan kelelahan kronis dan masalah kesehatan jangka panjang.",
  },
  {
    id: 27,
    question: "Warna feses kehitaman setelah minum TTD berarti…",
    options: [
      "Usus terluka",
      "Normal karena sisa zat besi",
      "Dehidrasi",
      "Keracunan",
    ],
    correctAnswer: 1,
    explanation:
      "BAB kehitaman adalah normal karena sisa zat besi yang belum terserap.",
  },
  {
    id: 28,
    question: "Zat besi berperan dalam pembentukan…",
    options: [
      "Hemoglobin",
      "Hormon estrogen",
      "Kolesterol",
      "Enzim pencernaan",
    ],
    correctAnswer: 0,
    explanation:
      "Zat besi adalah komponen penting dalam pembentukan hemoglobin.",
  },
  {
    id: 29,
    question: "Konsumsi buah vitamin C sebaiknya dilakukan…",
    options: [
      "Bersamaan dengan makanan tinggi zat besi",
      "Dengan teh",
      "Setelah minum kopi",
      "Saat perut kosong",
    ],
    correctAnswer: 0,
    explanation:
      "Vitamin C membantu penyerapan zat besi saat dikonsumsi bersamaan.",
  },
  {
    id: 30,
    question: "Salah satu alasan penting edukasi anemia di sekolah adalah…",
    options: [
      "Agar siswa tidak bermain",
      "Agar siswa tahu cara mencegah dan minum TTD",
      "Agar sekolah mendapat nilai akreditasi",
      "Agar kantin tambah ramai",
    ],
    correctAnswer: 1,
    explanation:
      "Edukasi anemia penting agar siswa memahami pencegahan dan pentingnya konsumsi TTD.",
  },
];

export default function QuizPage() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = questions[currentQuestion];

  if (showOnboarding) {
    return <QuizOnboarding onStart={() => setShowOnboarding(false)} />;
  }

  const handleAnswer = (optionIndex: number) => {
    if (showResult) return;

    setSelectedAnswer(optionIndex);
    setShowResult(true);

    if (optionIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizFinished(false);
  };

  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const feedback =
      percentage === 100
        ? "Sempurna! Kamu sudah menguasai semua materi tentang anemia! 🌟"
        : percentage >= 80
        ? "Bagus sekali! Pemahaman kamu sudah sangat baik. 👍"
        : percentage >= 60
        ? "Cukup baik! Tapi ada beberapa bagian yang perlu dipelajari lagi."
        : "Jangan putus asa! Kembali ke materi dan pelajari lagi.";

    return (
      <div className="max-w-2xl mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Image
            src="/quiz-complete.png"
            alt="Quiz Complete"
            width={150}
            height={150}
            className="mx-auto mb-8"
          />
          <h2 className="text-4xl font-medium  mb-4">Kuis Selesai!</h2>
          <div className="text-6xl font-medium  mb-4">
            <Highlighter>
              {score}/{questions.length}
            </Highlighter>
          </div>
          <div className="text-2xl font-semibold  mb-2">{percentage}%</div>
          <p className="text-lg  mb-8">{feedback}</p>
          <div className="flex justify-center items-center gap-4">
            <Button onClick={handleRestart} variant={"secondary"}>
              Mulai Ulang Kuis
            </Button>
            <Button onClick={handleRestart} asChild variant={"outline"}>
              <Link href="/">Keluar</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <QuizHeader />
      <AnimatedSection delay={0} className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex justify-end items-center mb-4">
            <div className="text-lg font-medium text-foreground/80">
              Soal {currentQuestion + 1} dari {questions.length}
            </div>
          </div>
          <div className="w-full bg-primary/20 rounded-full h-2">
            <div
              className="bg-secondary h-2 rounded-full transition-all"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <div className=" mb-8 ">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">
            {question.question}
          </h2>

          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg font-semibold transition-all border-2 ${
                    showCorrect
                      ? "bg-emerald-100 border-emerald-500 text-emerald-900"
                      : showIncorrect
                      ? "bg-red-100 border-red-500 text-red-900"
                      : isSelected
                      ? "bg-blue-100 border-blue-500 text-blue-900"
                      : "bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100 hover:border-blue-300 cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold ${
                        showCorrect
                          ? "bg-emerald-500 border-emerald-600 text-white"
                          : showIncorrect
                          ? "bg-red-500 border-red-600 text-white"
                          : isSelected
                          ? "bg-blue-500 border-blue-600 text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && (
            <div
              className={`rounded-lg p-4 mb-8 ${
                selectedAnswer === question.correctAnswer
                  ? "bg-emerald-50 border-2 border-emerald-300"
                  : "bg-red-50 border-2 border-red-300"
              }`}
            >
              <p
                className={`font-semibold ${
                  selectedAnswer === question.correctAnswer
                    ? "text-emerald-900"
                    : "text-red-900"
                }`}
              >
                {selectedAnswer === question.correctAnswer
                  ? "✓ Benar!"
                  : "✗ Salah"}
              </p>
              <p
                className={
                  selectedAnswer === question.correctAnswer
                    ? "text-emerald-800"
                    : "text-red-800"
                }
              >
                {question.explanation}
              </p>
            </div>
          )}

          {showResult && (
            <Button
              onClick={handleNext}
              className="w-full rounded-lg font-semibold transition-all"
              size={"lg"}
            >
              {currentQuestion === questions.length - 1
                ? "Lihat Hasil"
                : "Soal Berikutnya"}
            </Button>
          )}
        </div>

        <div className="bg-secondary/20 rounded-lg p-6 ">
          <p className="text-center text-blue-900">
            Skor: <span className="font-bold">{score}</span> dari{" "}
            {questions.length}
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
