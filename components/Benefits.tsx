import { ChatIcon, ClockIcon, PackageIcon, PinIcon, SparkleIcon } from "@/components/Icons";

const benefits = [
  { title: "Same-Day Delivery Available", icon: ClockIcon },
  { title: "Premium Quality Products", icon: SparkleIcon },
  { title: "Discreet Packaging", icon: PackageIcon },
  { title: "Consultation Available", icon: ChatIcon },
  { title: "Bali-Wide Coverage", icon: PinIcon },
];

export default function Benefits() {
  return (
    <section aria-label="Key benefits" className="border-b border-line bg-white">
      <ul className="container-page grid grid-cols-2 gap-x-5 gap-y-7 py-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:py-9">
        {benefits.map((benefit) => (
          <li
            key={benefit.title}
            className="flex flex-col items-start gap-2.5 last:col-span-2 sm:flex-row sm:items-center sm:gap-3.5 sm:last:col-span-1 lg:justify-center lg:border-l lg:border-line lg:px-4 lg:first:border-l-0"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-primary-dark">
              <benefit.icon className="size-5" />
            </span>
            <span className="font-label text-[15px] leading-snug font-semibold text-heading">
              {benefit.title}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
