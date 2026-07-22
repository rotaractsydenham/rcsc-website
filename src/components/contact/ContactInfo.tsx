import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Building2,
  Calendar,
} from "lucide-react";

import { contact } from "@/content/contact";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <InfoCard
        icon={<Mail size={22} />}
        title="Email"
        value={contact.email}
      />

      <InfoCard
        icon={<Phone size={22} />}
        title="Phone"
        value={contact.phone}
      />

      <InfoCard
        icon={<Globe size={22} />}
        title="Website"
        value="rotaractsydenham.in"
      />

      <InfoCard
        icon={<Building2 size={22} />}
        title="District"
        value={contact.district}
      />

      <InfoCard
        icon={<Calendar size={22} />}
        title="Meetings"
        value={contact.meeting}
      />

      <InfoCard
        icon={<MapPin size={22} />}
        title="Address"
        value={contact.address.join(", ")}
      />

    </div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoCard({
  icon,
  title,
  value,
}: CardProps) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg dark:bg-slate-900">

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-slate-900">
        {icon}
      </div>

      <h3 className="font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
        {value}
      </p>

    </div>
  );
}