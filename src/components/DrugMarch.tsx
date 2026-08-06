import Image from "next/image";

type ArticleSection = {
  type: "paragraph" | "quote";
  text: string;
  attribution?: string;
};

type DrugMarchArticle = {
  title: string;
  subtitle?: string;
  published: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  sections: ArticleSection[];
};

const articles: DrugMarchArticle[] = [
  {
    title: "Columbus 10 TV and Attorney General Mike DeWine's Office",
    published: "September 23, 2013",
    location: "Marion, Ohio",
    imageSrc: "/images/drug-march/freedom-march-2013.png",
    imageAlt: "Freedom March coverage from Columbus 10 TV",
    sections: [
      {
        type: "paragraph",
        text: "Drug abuse and addiction and the crimes that go with them are becoming a growing problem in many central Ohio communities.",
      },
      {
        type: "paragraph",
        text: "Sunday, the city of Marion took a stand to send a message to drug dealers and to give hope to people living in their neighborhoods.",
      },
      {
        type: "paragraph",
        text: "About 500 people attended the Freedom March in Marion Sunday. Many of those who participated said it's a wake-up call.",
      },
      {
        type: "quote",
        text: "We're losing our generation. We're losing our generation to heroin. We have 15-16-year-old kids that are shooting up heroin, we have so much crime in this town, we just decided to come together as a community and say, you know what, we are done, we've had enough.",
        attribution: "Scott Mason, organizer",
      },
      {
        type: "paragraph",
        text: "Just three weeks ago, authorities arrested dozens of people in a huge drug sweep across the city, the result of a 6-month undercover investigation.",
      },
      {
        type: "quote",
        text: "It's not just a police problem, it's an entire problem for the city of Marion, and these people realize that — they know they can't just call 911 and the problem goes away, so they're here today to show their support.",
        attribution: "Marion Police Chief Tom Bell",
      },
      {
        type: "paragraph",
        text: "Though a levy passed by voters last year helped the community hire back some laid-off officers, authorities say they still need help to crack down on the drug trade at the state and even the federal level to really tackle this problem.",
      },
      {
        type: "quote",
        text: "I want to see Marion become like Mayberry, what it used to be... I want to see people be able to not have to worry about going out of their house and getting robbed, I want to see kids playing in a park like this, in Garfield Park, and not having to pick up heroin needles and crack pipes.",
        attribution: "Scott Mason",
      },
      {
        type: "paragraph",
        text: "The people say it starts with everyone believing and working together for the common good in getting rid of drugs.",
      },
    ],
  },
  {
    title: "Michelle Rotuno-Johnson — Marion Star",
    subtitle: "Attorney General Mike DeWine's Office",
    published: "September 16, 2014",
    location: "Marion, Ohio",
    imageSrc: "/images/drug-march/marion-star-2014.png",
    imageAlt: "Marion Star coverage of the Steps Toward Healing rally",
    sections: [
      {
        type: "paragraph",
        text: "It's been a year since hundreds of people marched down the middle of Center Street to rally in the community's fight against illicit drugs.",
      },
      {
        type: "paragraph",
        text: "Since last year, some local leaders say they have seen a change — but there still is work to be done.",
      },
      {
        type: "paragraph",
        text: "So, the community will march again. The second annual Steps Toward Healing rally begins at 2:30 p.m. Sunday at the Marion County Courthouse, and ends at Garfield Park with a rally. Participants will move down Center Street and over to the park for speeches and discussion with law enforcement officers and church leaders.",
      },
      {
        type: "paragraph",
        text: "Dale Osborn, warden at Multi-County Correctional Center, and Scott Mason, chaplain at MCCC, again are helping head up the effort this year.",
      },
      {
        type: "quote",
        text: "Drug dealers just aren't welcome. Law enforcement agencies are trying to rid the community of those.",
        attribution: "Dale Osborn, MCCC Warden",
      },
      {
        type: "paragraph",
        text: "Mason said he has noticed more people get involved and has noticed the state and federal governments helping local law enforcement.",
      },
      {
        type: "paragraph",
        text: "Ohio Attorney General Mike DeWine has been in Marion several times this year to talk about the county drug problem. In April, he announced 39 people were indicted on a total of 125 felony and misdemeanor charges, mostly surrounding drug sales and possession. The charges followed the February indictments of 19 others who are facing federal charges in connection with the investigation.",
      },
      {
        type: "paragraph",
        text: "This was one of several drug busts this year.",
      },
      {
        type: "paragraph",
        text: "Mason also said he has noticed local churches meet up and lend their support to the cause. In the past, he said, they didn't work together as often.",
      },
      {
        type: "quote",
        text: "People are not giving up. People are still pushing forward.",
        attribution: "Scott Mason",
      },
      {
        type: "quote",
        text: "It's going to take years to clean up this town, to get it to where people want it. It's taken years to get it this way.",
        attribution: "Scott Mason",
      },
    ],
  },
];

function ArticleBlock({ article }: { article: DrugMarchArticle }) {
  return (
    <article className="border border-white/10 bg-black/35">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
        <Image
          src={article.imageSrc}
          alt={article.imageAlt}
          fill
          unoptimized
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 960px"
        />
      </div>

      <div className="px-6 py-8 lg:px-10 lg:py-10">
        <header className="border-b border-white/10 pb-6">
          <h2 className="font-[family-name:var(--font-display)] text-[1.75rem] leading-none tracking-wide text-white uppercase sm:text-[2rem]">
            {article.title}
          </h2>
          {article.subtitle ? (
            <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]">
              {article.subtitle}
            </p>
          ) : null}
          <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-white/50">
            Published {article.published} · {article.location}
          </p>
        </header>

        <div className="mt-8 space-y-6">
          {article.sections.map((section, index) =>
            section.type === "quote" ? (
              <blockquote
                key={`${section.attribution}-${index}`}
                className="border-l-2 border-[var(--color-accent)] pl-5"
              >
                <p className="text-[16px] leading-[1.85] text-white/90 italic sm:text-[17px]">
                  &ldquo;{section.text}&rdquo;
                </p>
                {section.attribution ? (
                  <footer className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/50">
                    {section.attribution}
                  </footer>
                ) : null}
              </blockquote>
            ) : (
              <p
                key={index}
                className="text-[15px] leading-[1.85] text-white/80 sm:text-[16px]"
              >
                {section.text}
              </p>
            ),
          )}
        </div>
      </div>
    </article>
  );
}

export default function DrugMarch() {
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
          <h1 className="heading-page text-white">DRUG MARCH</h1>
          <p className="mt-5 text-[15px] leading-[1.75] text-white/75 sm:text-[16px]">
            Marion, Ohio rallies against addiction — bringing the community
            together to send a message to drug dealers and give hope to
            neighborhoods fighting back.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-10 lg:mt-16 lg:gap-12">
          {articles.map((article) => (
            <ArticleBlock key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
