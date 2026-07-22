import {
  Crown,
  HeartHandshake,
  Briefcase,
  Users,
  Globe,
  Award,
} from "lucide-react";

import { benefits } from "@/content/join";
import Container from "../ui/Container";

const icons = {
  leadership: Crown,
  service: HeartHandshake,
  development: Briefcase,
  fellowship: Users,
  district: Globe,
  award: Award,
};

export default function Benefits() {
  return (
    <section>

      <Container>

        <div className="mb-16 text-center">

          <span className="text-sm font-bold uppercase tracking-[0.45em] text-yellow-500">
            MEMBERSHIP
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Why Join RCSC?
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item) => {

            const Icon =
              icons[item.icon as keyof typeof icons];

            return (

              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 transition group-hover:scale-110">

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}