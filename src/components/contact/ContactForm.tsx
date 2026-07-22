"use client";

export default function ContactForm() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <h2 className="text-3xl font-bold">
        Send us a Message
      </h2>

      <p className="mt-3 text-slate-500 dark:text-slate-400">
        We'd love to hear from you. Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      <form className="mt-10 space-y-6">

        {/* Name */}

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-300 bg-transparent px-5 py-4 transition focus:border-yellow-400 focus:outline-none dark:border-slate-700"
          />
        </div>

        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-300 bg-transparent px-5 py-4 transition focus:border-yellow-400 focus:outline-none dark:border-slate-700"
          />
        </div>

        {/* Phone */}

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold"
          >
            Phone Number
            <span className="ml-2 text-xs text-slate-400">
              (Optional)
            </span>
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-xl border border-slate-300 bg-transparent px-5 py-4 transition focus:border-yellow-400 focus:outline-none dark:border-slate-700"
          />
        </div>

        {/* Subject */}

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            placeholder="How can we help?"
            className="w-full rounded-xl border border-slate-300 bg-transparent px-5 py-4 transition focus:border-yellow-400 focus:outline-none dark:border-slate-700"
          />
        </div>

        {/* Message */}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={7}
            placeholder="Write your message here..."
            className="w-full resize-none rounded-xl border border-slate-300 bg-transparent px-5 py-4 transition focus:border-yellow-400 focus:outline-none dark:border-slate-700"
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-semibold text-slate-900 transition duration-300 hover:bg-yellow-300"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}