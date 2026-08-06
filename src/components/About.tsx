import Image from "next/image";

const PORTRAIT_SRC = "/images/scott-avatar.png";

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Amazon", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function About() {
  return (
    <section
      className="relative section-padding pt-[calc(var(--site-header-height)+2.5rem)] lg:pt-[calc(var(--site-header-height)+3rem)]"
      style={{
        backgroundColor: "#141414",
        backgroundImage:
          "linear-gradient(rgba(20, 20, 20, 0.92), rgba(20, 20, 20, 0.92)), url(/images/section-texture.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16 lg:items-start">
          <div
            className="relative flex w-full items-center justify-center overflow-hidden bg-black aspect-[3/4] lg:sticky lg:top-[calc(var(--site-header-height)+2rem)]"
            aria-label="Scott Mason portrait"
            role="img"
          >
            <Image
              src={PORTRAIT_SRC}
              alt="Scott Mason"
              width={480}
              height={640}
              unoptimized
              className="h-[68%] w-auto max-w-[78%] object-contain"
            />
            <span className="absolute inset-x-0 bottom-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3eb4c1]/75">
              Photo coming soon
            </span>
          </div>

          <div className="min-w-0">
            <p className="section-label">ABOUT SCOTT</p>

            <h2 className="heading-section mt-4 text-white">
              SCOTT&apos;S STORY DOESN&apos;T BEGIN WITH SUCCESS.
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-[1.85] text-white/80 sm:text-[16px]">
              <p>
                Scott was raised in a city that borders Detroit, Michigan. Scott
                was influenced early on by a mother who modeled perseverance,
                discipline, and the value of education while raising him largely
                on her own. But despite that foundation, by the age of 21,
                addiction had taken control of his life. His twenties were marked
                by chaos—more than two dozen arrests, 36 felony convictions,
                repeated prison incarcerations, and multiple psychiatric
                hospitalizations for suicide attempts. He was trapped in a cycle
                of addiction, anger, and instability, convinced there was no way
                out.
              </p>

              <p className="border-l-2 border-[var(--color-accent)] pl-5 text-[17px] font-semibold leading-snug text-white sm:text-[18px]">
                Until there was—
              </p>

              <p>
                During a prison church service, Scott experienced a moment that
                would redefine the trajectory of his life. In the middle of
                hopelessness, something shifted—bringing clarity, direction, and
                a new foundation to build on.
              </p>

              <p>
                Today, Scott Mason speaks from the other side of that
                transformation. With over a decade of experience in recovery,
                reentry, and leadership, Scott has worked alongside state and
                federal agencies in central Ohio to address addiction and
                prevention. He helped establish a nonprofit organization providing
                sober living, drug education, and early intervention programs for
                teens. His impact extends into education, where he has trained
                and mentored educators in Ohio and Indiana to better reach
                at-risk youth and create structured, accountable environments.
              </p>

              <p>
                Scott has also served on the front lines of crisis and
                correctional work—as a Chaplain and volunteer Outreach Officer
                for a police department, and later as the full-time Chaplain at
                the Multi-County Correctional Center, where he provided guidance
                and support to inmates and staff alike. He has consulted with
                courts, probation and parole departments, and law enforcement
                units, bringing practical insight shaped by experience few can
                speak from. Scott&apos;s message is real, direct, and deeply
                impactful. He speaks on addiction, recovery, resilience,
                leadership, and transformation—connecting with audiences ranging
                from students and educators to law enforcement, faith
                communities, and recovery groups.
              </p>
            </div>

            <ul
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2"
              aria-label="Scott Mason social media"
            >
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-[var(--color-accent)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
