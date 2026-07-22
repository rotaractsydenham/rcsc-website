import PageHero from "@/components/shared/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import SocialLinks from "@/components/contact/SocialLinks";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's Connect"
        subtitle="Whether you're a student, alumnus, sponsor or collaborator, we'd love to hear."
        image="/images/banners/contact.jpg"
      />

      <main className="pt-20 pb-40">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <ContactInfo />

            <ContactForm />

          </div>

          <section className="mt-24">

            <h2 className="mb-8 text-center text-3xl font-bold">
              Follow Us
            </h2>

            <SocialLinks />

          </section>

          <section className="mt-24 rounded-3xl border bg-slate-100 p-16 text-center dark:bg-slate-900">

            <h2 className="text-3xl font-bold">
              Visit Us
            </h2>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Sydenham College of Commerce & Economics
              <br />
              Churchgate, Mumbai
            </p>

            <button className="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300">
              View on Google Maps
            </button>

          </section>

        </div>

      </main>
    </>
  );
}