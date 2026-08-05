import Link from "next/link";
import MissionPortraitPlaceholder from "./MissionPortraitPlaceholder";

export default function Mission() {
  return (
    <section id="about" className="bg-white py-12 lg:py-16">
      <div className="container-site grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">
        <div className="flex max-w-xl flex-col gap-4 sm:gap-5 lg:h-full lg:justify-between lg:gap-0">
          <p className="section-label">MY MISSION</p>

          <h2 className="heading-section text-[#111111]">
            TURNING MY STORY INTO SOMEONE ELSE&apos;S HOPE
          </h2>

          <p className="text-[15px] leading-[1.75] text-[#444444] sm:text-[16px]">
            From a life of crime, prison, and hopelessness to one of purpose,
            impact, and inspiration. I share my journey to encourage others that
            change is possible.
          </p>

          <Link href="#about" className="btn-primary w-fit">
            LEARN MORE ABOUT SCOTT
          </Link>
        </div>

        <MissionPortraitPlaceholder />
      </div>
    </section>
  );
}
