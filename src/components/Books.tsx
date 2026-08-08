import Image from "next/image";
import Link from "next/link";

const books = [
  {
    title: "No Reason To Live",
    coverSrc: "/images/books/no-reason-to-live.jpg",
    coverAlt: "No Reason To Live by Scott Mason book cover",
    description:
      "By twenty-one, Scott's world had collapsed under the weight of addiction. Two psychiatric hospitalizations, over twenty-five arrests, twice by SWAT, thirty-six felony convictions and nearly ten years spent in multiple Michigan prisons. This is the story of how a man reached the bottom most people never come back from—and how he found the strength to rise, rebuild, and reclaim his life.",
    orderUrl: "https://www.amazon.com/reason-live-Scott-Alan-Mason/dp/1460968980",
  },
  {
    title: "This Is What You Asked For",
    coverSrc: "/images/books/this-is-what-you-asked-for.jpg",
    coverAlt: "This Is What You Asked For by Scott Mason book cover",
    description:
      "Scott's life once spiraled through addiction, prison, and despair—but his story didn't end there. From dropout to author, inmate to chaplain, addict to advocate, Scott's journey is a testament to radical transformation and the power of grace. Now on the front lines of a community devastated by the heroin epidemic, he brings hope, healing, and hard-won wisdom to those who feel forgotten. Honest, raw, and full of miracles, this is the story of a man redeemed—and determined to help others find redemption too.",
    orderUrl: "https://www.amazon.com/This-What-Asked-Scott-Mason/dp/B0FL2V359Q",
  },
];

function BookCover({
  coverSrc,
  coverAlt,
}: {
  coverSrc: string;
  coverAlt: string;
}) {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-[190px] overflow-hidden bg-black shadow-[0_20px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition duration-300 group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:shadow-[0_28px_48px_rgba(0,0,0,0.55)] group-hover:ring-[var(--color-accent)]/45 sm:max-w-[260px]">
      <Image
        src={coverSrc}
        alt={coverAlt}
        fill
        unoptimized
        className="object-cover"
        sizes="(max-width: 640px) 190px, 260px"
      />
    </div>
  );
}

export default function Books() {
  return (
    <section
      className="page-section--scroll relative"
      style={{
        backgroundColor: "#141414",
        backgroundImage:
          "linear-gradient(rgba(20, 20, 20, 0.92), rgba(20, 20, 20, 0.92)), url(/images/section-texture.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <div className="grid items-stretch gap-8 md:grid-cols-2 md:max-w-4xl md:mx-auto xl:gap-10">
          {books.map((book) => (
            <article
              key={book.title}
              className="group animate-in flex h-full flex-col border border-white/10 bg-black/35 px-6 pb-6 pt-4 sm:px-7 sm:pb-7 sm:pt-5 lg:px-8 lg:pb-8 lg:pt-5"
            >
              <BookCover coverSrc={book.coverSrc} coverAlt={book.coverAlt} />

              <div className="mt-6 flex min-h-[2.75rem] items-center justify-center">
                <h2 className="text-center font-[family-name:var(--font-display)] text-[0.98rem] leading-none tracking-[0.05em] text-white uppercase sm:text-[1.05rem] sm:whitespace-nowrap lg:text-[1.1rem]">
                  {book.title}
                </h2>
              </div>

              <div
                className="mx-auto mt-4 h-[2px] w-[72px] rounded-full bg-[linear-gradient(90deg,transparent_0%,var(--color-accent)_15%,var(--color-accent)_85%,transparent_100%)]"
                aria-hidden="true"
              />

              <div className="mt-6 flex flex-1 flex-col">
                <p className="flex-1 text-left text-[15px] leading-[1.85] text-white/80 sm:text-[16px]">
                  {book.description}
                </p>

                <Link
                  href={book.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 w-fit self-center"
                >
                  CLICK TO ORDER
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
