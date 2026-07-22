export default function ContactForm() {
  return (
    <form className="rounded-3xl border bg-white p-8 shadow-sm dark:bg-slate-900">

      <h2 className="mb-8 text-3xl font-bold">
        Send us a Message
      </h2>

      <div className="space-y-6">

        <input
          placeholder="Your Name"
          className="w-full rounded-xl border px-5 py-4 outline-none focus:border-yellow-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border px-5 py-4 outline-none focus:border-yellow-400"
        />

        <input
          placeholder="Subject"
          className="w-full rounded-xl border px-5 py-4 outline-none focus:border-yellow-400"
        />

        <textarea
          rows={6}
          placeholder="Message"
          className="w-full rounded-xl border px-5 py-4 outline-none focus:border-yellow-400"
        />

        <button
          className="w-full rounded-xl bg-yellow-400 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
        >
          Send Message
        </button>

      </div>

    </form>
  );
}