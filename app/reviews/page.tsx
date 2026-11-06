import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import { longDate, reviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews | Task Healthcare — rated 9.9 on homecare.co.uk",
  description:
    "Read what clients and families say about Task Healthcare's home care in Redbridge and London. Rated 9.9 on homecare.co.uk and Good by the CQC.",
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="phero phero--center">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Reviews</span>
          </nav>
          <p className="eyebrow">Customer reviews</p>
          <h1>
            In their <em>own words</em>
          </h1>
          <p className="phero__lead">
            Don’t just take our word for it. Here’s what our clients and their families say about the care we provide.
          </p>
          <div className="badges badges--center">
            <a href="https://www.homecare.co.uk/homecare/agency.cfm/id/65432240283" target="_blank" rel="noopener">
              <img
                src="/assets/homecare-score.webp"
                alt="homecare.co.uk review score 9.9 — read reviews"
                width={615}
                height={548}
              />
            </a>
            <a href="https://www.cqc.org.uk/location/1-13376159979" target="_blank" rel="noopener">
              <img
                src="/assets/cqc-good.webp"
                alt="Regulated by the Care Quality Commission — rated Good. Read inspection report"
                width={601}
                height={455}
              />
            </a>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap">
          <figure className="feature reveal">
            <svg className="feature__mark" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M20 12C11 15 6 22 6 31c0 5 3 8 7 8s7-3 7-7-3-7-7-7c0-5 3-9 9-11zm22 0c-9 3-14 10-14 19 0 5 3 8 7 8s7-3 7-7-3-7-7-7c0-5 3-9 9-11z" />
            </svg>
            <blockquote>
              I am 90 and rely on carers for my everyday living, and Sharon is one of the best carers I have ever had.
              She is caring and hardworking, always ready to go the extra mile. I have come to look on her as a friend,
              and feel I would be <em>lost without her</em>.
            </blockquote>
            <figcaption>
              <strong>Pamela Harris</strong>
            </figcaption>
          </figure>
          <div className="masonry">
            {reviews.map((r) => (
              <blockquote key={`${r.name}-${r.date}`} className="quote reveal">
                <div className="stars" aria-label="5 out of 5">
                  ★★★★★
                </div>
                <p>“{r.text}”</p>
                <cite>
                  {r.name} · {longDate(r.date)}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <section className="section longread">
        <div className="wrap longread__in">
          <header className="longread__head reveal">
            <p className="eyebrow">A family’s story</p>
            <h2>
              “They didn’t merely provide a service — they created a legacy of <em>love and compassion</em>.”
            </h2>
            <p className="longread__by">Valerie, Felsted — on the care of her mother-in-law</p>
          </header>
          <div className="longread__body">
            <section className="reveal">
              <h3>A 24/7 lifeline</h3>
              <p>
                The tireless efforts of Task Healthcare’s carers extend beyond the confines of a clock. Their dedication
                knows no bounds. Through sleepless nights and challenging days, they have been there — attending to my
                mother-in-law’s needs with grace and patience. Their presence has been a lifeline, providing reassurance
                during moments of vulnerability.
              </p>
            </section>
            <section className="reveal">
              <h3>Compassion in the final moments</h3>
              <p>
                In the twilight of her life, as my mother-in-law faced her final moments, Task Healthcare’s carers
                exhibited unparalleled compassion. Their gentle touch, soothing words and unwavering support eased her
                transition. They didn’t merely care for her physical needs; they tended to her emotional well-being,
                ensuring she felt comforted and loved.
              </p>
            </section>
            <section className="reveal">
              <h3>Beyond professionalism</h3>
              <p>
                Task Healthcare goes beyond mere professionalism. They create a sense of family — a bond that transcends
                the caregiver-patient relationship. Their genuine interest in my mother-in-law’s life, her stories and
                her joys made her feel valued. It’s this human connection that sets them apart.
              </p>
            </section>
            <section className="reveal">
              <h3>A thousand words of gratitude</h3>
              <p>
                In a thousand words, I express my deepest gratitude to Task Healthcare. Their dedication, compassion and
                unwavering commitment have touched our hearts. They have not only cared for my mother-in-law but also
                become an integral part of our family’s journey.
              </p>
            </section>
            <section className="reveal">
              <h3>In conclusion</h3>
              <p>
                In an era where elderly care often feels clinical and detached, Task Healthcare stands as a shining
                example of what true caregiving should be. Their carers are not just professionals; they are angels who
                walk alongside those they care for, illuminating their path with kindness and compassion. If you seek
                exceptional care for your loved ones, look no further than Task Healthcare.
              </p>
            </section>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap doc-card reveal">
          <div className="doc-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2 2 9.3l6.9-1z" />
            </svg>
          </div>
          <div>
            <p className="eyebrow">Your review is precious to us</p>
            <h2 className="h3">Share your experience</h2>
            <p>
              Been cared for by Task Healthcare, or arranged care for someone you love? Your feedback helps other
              families — and helps us keep improving.
            </p>
          </div>
          <a
            className="btn btn--primary"
            href="https://www.homecare.co.uk/homecare/agency.cfm/id/65432240283"
            target="_blank"
            rel="noopener"
          >
            Leave a review on homecare.co.uk
          </a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
