import Link from "next/link";
import { BookLink } from "@/components/book-link";
import { MobileBar } from "@/components/mobile-bar";
import {
  cases,
  clients,
  faqs,
  fit,
  notes,
  offers,
  projects,
  quotes,
  roles,
  steps,
  tools,
} from "@/lib/content";

function Label({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.22em] text-muted">
      <span className="text-foreground">{index}</span>
      <span className="mx-2">/</span>
      {children}
    </p>
  );
}

export function HomePage() {
  const loop = [...clients, ...clients];

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-6 pt-8 lg:min-h-[calc(100svh-4rem)] lg:grid-rows-[auto_1fr] lg:gap-6 lg:pb-8 lg:pt-10">
        <div className="max-w-4xl">
          <h1 className="max-w-4xl font-serif text-[2.55rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.15rem]">
            GTM systems that turn spend into pipeline and profitable orders.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I work with early-stage teams on two tracks: D2C performance that
            protects margin, and B2B pipeline a founder can hand off. Chief of
            Staff at Webless. Growth partnerships through 47 Creations.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <BookLink />
            <a
              href="#work"
              className="inline-flex items-center px-4 py-3 text-sm text-muted hover:text-foreground"
            >
              See the work
            </a>
          </div>
        </div>

        <div id="offers" className="grid gap-4 md:grid-cols-2">
          {offers.map((offer) => (
            <article
              id={offer.id}
              key={offer.id}
              className="flex flex-col border border-line bg-surface p-5 sm:p-6"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                {offer.kicker}
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight">
                {offer.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {offer.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/90">
                {offer.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted">{offer.note}</p>
              <div className="mt-5">
                <BookLink track={offer.track}>Book a 30-min call</BookLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div
        className="group overflow-hidden border-y border-line"
        aria-label="Clients"
      >
        <ul className="marquee-track flex w-max items-center gap-16 py-7 pr-16 group-hover:[animation-play-state:paused]">
          {loop.map((name, index) => (
            <li
              key={`${name}-${index}`}
              aria-hidden={index >= clients.length}
              className="font-serif text-[1.65rem] leading-none tracking-tight whitespace-nowrap text-foreground/80"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Label index="01">Fit</Label>
        <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight">
          Built for founders who will run the system after the call.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-line p-6">
            <h3 className="text-sm uppercase tracking-[0.18em] text-accent">
              This is for you
            </h3>
            <ul className="mt-4 space-y-3 text-muted">
              {fit.for.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-line p-6">
            <h3 className="text-sm uppercase tracking-[0.18em] text-muted">
              This is not
            </h3>
            <ul className="mt-4 space-y-3 text-muted">
              {fit.not.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted">
          Tools in the work: {tools.join(" · ")}
        </p>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Label index="02">The call</Label>
          <h2 className="mt-4 font-serif text-4xl leading-tight">
            What the 30 minutes covers.
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="border border-line p-6">
                <p className="font-serif text-3xl text-accent">0{index + 1}</p>
                <h3 className="mt-3 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Label index="03">Selected work</Label>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight">
            D2C growth, lead engines, and product signups.
          </h2>
          <div className="mt-10 space-y-10">
            {cases.map((item, index) => (
              <article
                key={item.label}
                className="grid gap-6 border-t border-line pt-8 md:grid-cols-[16rem_1fr]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-lg">{item.label}</h3>
                  <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl leading-snug sm:text-3xl">
                    {item.headline}
                  </h4>
                  <p className="mt-3 text-muted">{item.context}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                    {item.moves.map((move) => (
                      <li key={move} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                        <span>{move}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-foreground">{item.outcome}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <BookLink />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Label index="04">What founders say</Label>
          <h2 className="mt-4 font-serif text-4xl leading-tight">
            From the teams, and from people who have built with me.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {quotes.map((item) => (
              <figure key={item.company} className="border border-line p-6">
                <blockquote className="text-lg leading-relaxed">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-accent">
                  {item.company}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Label index="05">Operator</Label>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight">
            Currently at Webless. The partnerships run through 47 Creations.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Postgraduate study in data science at IIT Guwahati. A computer
            science degree before that, and best outgoing student in 2019.
          </p>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {roles.map((role) => (
              <li
                key={`${role.company}-${role.time}`}
                className="grid gap-2 py-5 md:grid-cols-[14rem_1fr] md:gap-8"
              >
                <div>
                  <p className="text-sm text-muted">{role.time}</p>
                  <p className="text-sm text-muted">{role.place}</p>
                </div>
                <div>
                  <h3 className="text-lg">
                    {role.role}
                    <span className="text-muted"> · {role.company}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {role.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Label index="06">Before you book</Label>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight">
            Three things I keep telling early teams.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {notes.map((note) => (
              <article key={note.title} className="border border-line p-6">
                <h3 className="font-serif text-2xl leading-snug">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{note.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Longer versions of the D2C work live in{" "}
            <Link
              href="/blog"
              className="text-foreground underline decoration-line underline-offset-4 hover:decoration-accent"
            >
              Writing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Label index="07">Questions</Label>
          <h2 className="mt-4 font-serif text-4xl leading-tight">
            Before you put it on the calendar.
          </h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-lg">
                  {item.q}
                  <span className="text-muted group-open:hidden" aria-hidden="true">
                    +
                  </span>
                  <span className="hidden text-muted group-open:inline" aria-hidden="true">
                    –
                  </span>
                </summary>
                <p className="max-w-3xl pb-5 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
            Growth partnerships are limited. The call is 30 minutes.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            If you are serious about launch and scale, book the time. I read
            every note before we talk.
          </p>
          <div className="mt-8">
            <BookLink />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <Label index="08">Also shipped</Label>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-line p-4 hover:border-foreground"
                >
                  <span className="block text-sm">{project.name}</span>
                  <span className="mt-1 block text-xs text-muted">{project.detail}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <MobileBar />
    </>
  );
}
