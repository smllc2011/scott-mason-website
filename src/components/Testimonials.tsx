type TestimonialEntry = {
  author: string;
  role?: string;
  date?: string;
  quote?: string;
  quotes?: { text: string; author: string }[];
};

const testimonials: TestimonialEntry[] = [
  {
    author: "MCCC Corrections Officer",
    date: "Feb 10, 2016",
    quote:
      "One night while making rounds I came up to a cell where a girl was talking to her cellmate. Lights were out and it was 2am which meant that there could be no talking. Just when I was about to tell them to cut out the talking I realized what they were doing. The one girl who was doing all the talking was actually reading your book (No Reason To Live) out loud. The girl that she was reading it to didn't know how to read, and she wanted desperately to know what it was saying. As I walked away from that cell that night I knew that this book was something special.",
  },
  {
    author: "LeAnne Kelley",
    role: "Principal, Southern Indiana School District",
    quote:
      "In 30 years of education, I have never seen one individual impact so many students.",
  },
  {
    author: "Jessica, Alleigh, Kenzie, Cameron & Kota",
    role: "Students",
    date: "Oct 16, 2015",
    quotes: [
      {
        text: "Once I could see that you wanted to help my brother get off heroin I had that sigh of relief, the sigh of my brother is going to be ok. Fast forward two years, my brother is still clean and now you are helping me achieve my goals in life by helping others. I cannot repay you for all the things you are teaching me and the help you gave my brother. One day I plan to be viewed in Marion like you are.",
        author: "Jessica R.",
      },
      {
        text: "Thank you Scott for coming & speaking at our school! It meant a lot to all of us. You were one of the best speakers we have had. And I hope to see you again.",
        author: "Alleigh D.",
      },
      {
        text: "Thank you so much for coming to speak to us! It was extremely touching and eye opening! Of all the speakers we've ever had, I think you honestly hit home the best. It was wonderful, thank you!",
        author: "Kenzie L.",
      },
      {
        text: "There's never been a speaker come in and completely silence our auditorium. You moved a lot of us today with your story. Thank you for your time and please come back again sometime!",
        author: "Cameron M.",
      },
      {
        text: "Absolutely everything you said to us was worth going into that auditorium for. You don't have to have a high education in order to speak the truth and make sense to other people. I thought you did a really great job out of anyone that ever came to speak and we've had a lot of people. Never going to forget it.",
        author: "Kota J.",
      },
    ],
  },
  {
    author: "Jennifer M.",
    role: "Chief Probation Officer",
    date: "May 6, 2015",
    quote:
      "\"No Reason To Live\" is a book of hope for those who struggle to escape the world of incarceration and its many \"revolving doors.\" The story speaks straight to the experience of how many Americans can get sucked into the cesspool of incarceration no matter your family's economic status. I met Scott back in 2011 while working as a Probation Officer in Marion County, Ohio through an offender he had worked with at our local jail. At first, I have to be honest in saying I was very skeptical; however, as years have passed my skepticism quickly diminished. Scott has been instrumental in working as an advocate for many of the offenders I have served and we share the same mission in helping offenders become successful, productive, law-abiding citizens. I would recommend Scott's book, not only to offenders and/or ex-offenders but to many criminal justice professionals to never give up hope for those individuals we serve.",
  },
  {
    author: "Central Ohio Common Pleas Judge",
    date: "Oct 6, 2014",
    quote:
      "Scott — wanted to thank you for your book and also let you know that I read the book. Your story is consistent with much of what we see with many offenders — stealing from family, lying to cover up criminal and/or drug activity, and barriers faced by those who want to make a change upon release from incarceration. Your story also affirms that people can mature and change, as well as the value of positive encouragement. I particularly appreciated your mention of the corrections officer who affirmed that he believed in you. Thanks for sharing your life experience. Your book provides us with additional insight and understanding as we work with offenders. Thanks also for your good work with your ministry, your sober living housing, and all that you are doing to help make a difference.",
  },
];

function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: TestimonialEntry;
  className?: string;
}) {
  const isLongForm = Boolean(
    testimonial.quote && testimonial.quote.length > 180,
  );

  return (
    <li
      className={`h-full border border-white/10 bg-black/35 px-6 py-8 lg:px-8 lg:py-10 ${className}`}
    >
      <blockquote className="flex h-full flex-col">
        <header className="mb-6 border-b border-white/10 pb-5">
          <cite className="not-italic">
            <span className="block text-[14px] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
              {testimonial.author}
            </span>
            {testimonial.role ? (
              <span className="mt-1 block text-[12px] uppercase tracking-[0.08em] text-white/55">
                {testimonial.role}
              </span>
            ) : null}
            {testimonial.date ? (
              <span className="mt-1 block text-[12px] text-white/40">
                {testimonial.date}
              </span>
            ) : null}
          </cite>
        </header>

        {testimonial.quotes ? (
          <ul className="space-y-6">
            {testimonial.quotes.map((entry) => (
              <li key={entry.author}>
                <p className="text-[15px] leading-[1.8] text-white/85 italic sm:text-[16px]">
                  &ldquo;{entry.text}&rdquo;
                </p>
                <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/50">
                  {entry.author}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p
            className={`leading-[1.8] text-white/85 italic ${
              isLongForm
                ? "text-[15px] sm:text-[16px]"
                : "flex flex-1 items-center text-[18px] sm:text-[20px] lg:text-[22px]"
            }`}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        )}
      </blockquote>
    </li>
  );
}

export default function Testimonials() {
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
        <ul className="animate-stagger mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              className={testimonial.quotes ? "lg:col-span-2" : undefined}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
