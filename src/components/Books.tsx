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
  {
    title: "Beauty & Disgrace",
    subtitle: "Co-authored with Lex Anderson",
    coverSrc: "/images/books/beauty-and-disgrace.jpg",
    coverAlt: "Beauty & Disgrace by Lex Anderson and Scott Mason book cover",
    description:
      "There's not much that Lex Anderson and Scott Mason have in common, except their love for Christ and for this generation. In Beauty & Disgrace, you will get a glimpse into what life was like for each of them growing up. Lex grew up in a strong Christian home while Scott spent ten years in sixteen different prisons. Through their stories, you will see how God crafted together their lives—and how He brought them to one common goal: to help a broken world understand that they too have a God-written story waiting to unfold.",
    orderUrl: "https://www.amazon.com/Beauty-Disgrace-Scott-Mason/dp/1466289635",
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
    <div className="relative mx-auto aspect-[2/3] w-full max-w-[280px] overflow-hidden bg-black shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
      <Image
        src={coverSrc}
        alt={coverAlt}
        fill
        unoptimized
        className="object-cover"
        sizes="(max-width: 768px) 70vw, 280px"
      />
    </div>
  );
}

export default function Books() {
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
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-page text-white">SCOTT&apos;S BOOKS</h1>
          <p className="mt-5 text-[15px] leading-[1.75] text-white/75 sm:text-[16px]">
            Raw, honest accounts of addiction, prison, and the hope found on
            the other side—written to inspire anyone who needs proof that change
            is possible.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-12 md:grid-cols-2 lg:mt-16 xl:grid-cols-3 xl:gap-10">
          {books.map((book) => (
            <article
              key={book.title}
              className="flex h-full flex-col items-center text-center xl:items-stretch xl:text-left"
            >
              <BookCover coverSrc={book.coverSrc} coverAlt={book.coverAlt} />

              <div className="mt-8 flex w-full max-w-xl flex-1 flex-col xl:max-w-none">
                <h2 className="font-[family-name:var(--font-display)] text-[2rem] leading-none tracking-wide text-white uppercase">
                  {book.title}
                </h2>
                {book.subtitle ? (
                  <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                    {book.subtitle}
                  </p>
                ) : null}

                <p className="mt-5 text-[15px] leading-[1.85] text-white/80 sm:text-[16px]">
                  {book.description}
                </p>

                <Link
                  href={book.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-auto w-fit self-center pt-8 xl:self-start"
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
