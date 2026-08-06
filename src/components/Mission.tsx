import Link from "next/link";
import MissionPortraitPlaceholder from "./MissionPortraitPlaceholder";

export default function Mission() {
  return (
    <section className="bg-white py-6 lg:py-8">
      <div className="container-site grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-10">
        <div className="flex max-w-xl flex-col gap-3 sm:gap-4">
          <h2 className="heading-page text-[#111111]">MY MISSION</h2>

          <p className="text-[15px] leading-[1.75] text-[#444444] sm:text-[16px]">
            Turning my story into someone else&apos;s hope. From a life of crime, prison, and hopelessness to one of purpose,
            impact, and inspiration. I share my journey to encourage others that
            change is possible.
          </p>

          <Link href="/about" className="btn-primary w-fit">
            LEARN MORE ABOUT SCOTT
          </Link>
        </div>

        <MissionPortraitPlaceholder />
      </div>
    </section>
  );
}
