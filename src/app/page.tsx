import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="flex h-[80vh] items-center justify-center">
          <h1 className="text-5xl font-bold">
            Rotaract Club of Sydenham College
          </h1>
        </section>
      </main>

      <Footer />
    </>
  );
}