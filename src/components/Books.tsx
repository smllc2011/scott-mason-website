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
        <div className="animate-stagger grid items-stretch gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {books.map((book) => (
            <article
              key={book.title}
              className="flex h-full flex-col items-center"
            >
              <BookCover coverSrc={book.coverSrc} coverAlt={book.coverAlt} />

              <div className="mt-8 flex w-full max-w-xl flex-1 flex-col xl:max-w-none">
                <p className="flex-1 text-left text-[15px] leading-[1.85] text-white/80 sm:text-[16px]">
                  {book.description}
                </p>

                <Link
                  href={book.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 w-fit self-center xl:mt-10"
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
