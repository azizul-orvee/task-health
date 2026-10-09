import type { Metadata } from "next";
import ConsultForm from "@/components/ConsultForm";
import HeroSlides from "@/components/home/HeroSlides";
import Link from "next/link";
import Proof from "@/components/Proof";
import QuickChips from "@/components/home/QuickChips";
import Rotator from "@/components/home/Rotator";

export const metadata: Metadata = {
  title: "Task Healthcare — Compassionate Home Care in Redbridge & London",
  description:
    "CQC-rated Good home care across Redbridge and London. Domiciliary, live-in, respite, dementia and end-of-life care from a team with 50+ years of NHS experience.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <HeroSlides />
        <div className="hero__shade"></div>
        <div className="wrap hero__in">
          <p className="hero__kicker">
            <span className="pill">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              CQC rated Good
            </span>{" "}
            Redbridge &amp; all over London
          </p>
          <h1 id="hero-title" className="hero__title">
            <span className="line">
              <span>Compassionate care</span>
            </span>
            <span className="line">
              <span>at home for</span>
            </span>
            <span className="line">
              <Rotator words={["your mum", "your dad", "your partner", "yourself", "the ones you love"]} />
            </span>
          </h1>
          <p className="hero__lead">
            Personalised home care from a team with{" "}
            <strong>50+ years of combined NHS nursing and community care experience</strong> — so the people you love
            can live safely and independently in the home they know best.
          </p>
          <div className="quick" role="group" aria-labelledby="quick-label">
            <p id="quick-label" className="quick__label">
              Who needs care? <span>Start here — it takes 1 minute</span>
            </p>
            <QuickChips />
          </div>
        </div>
        <a className="hero__scroll" href="#proof" aria-label="Scroll to learn more">
          <span></span>
        </a>
      </section>
      <Proof id="proof" />
      <section className="section about" id="about">
        <div className="wrap">
          <p className="eyebrow reveal">Welcome to Task Health Care</p>
          <h2 className="statement reveal">
            We realise families need issues dealt with <em>quickly</em> and <em>efficiently</em> — and loved ones need
            to be treated with <em>dignity</em>.
          </h2>
          <div className="about__grid">
            <div className="about__media reveal">
              <img
                className="about__img1"
                src="/assets/banner-2-800.webp"
                srcSet="/assets/banner-2-800.webp 800w, /assets/banner-2-1600.webp 1600w"
                sizes="(min-width:1024px) 40vw, 90vw"
                alt="A Task Healthcare carer helping a client walk with a frame at home"
                width={800}
                height={381}
                loading="lazy"
                decoding="async"
              />
              <img
                className="about__img2"
                src="/assets/hands-800.webp"
                alt="A carer gently holding a client's hands"
                width={800}
                height={417}
                loading="lazy"
                decoding="async"
              />
              <div className="about__badge">
                <img src="/assets/logo-icon.png" alt="" width={48} height={48} />
                <span>Our Care Coordinator started out as a carer — and climbed the ladder.</span>
              </div>
            </div>
            <div className="about__text reveal">
              <p className="lede">
                Task Healthcare is committed to providing the best health care possible for our clients.
              </p>
              <p>
                Our senior staff — experienced and qualified nurses and carers — have more than 50 years of combined NHS
                nursing and community care experience. They’ve seen first-hand what happens at every stage of the care
                journey, and they use that real-world experience to guide our carers and give you the best possible care
                and advice.
              </p>
              <p>
                Services are tailored to each client’s cultural and language needs. From daily or weekly visits through
                to the dedicated support of a live-in carer — even on a temporary basis — you can shape care around your
                life, not the other way round.
              </p>
              <ul className="ticks">
                <li>Personalised care plans</li>
                <li>Continuity — the same familiar faces</li>
                <li>Carers proactively monitored, supported &amp; trained</li>
              </ul>
              <Link className="link-arrow" href="/about/">
                More about us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section services" id="services">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow reveal">Our services</p>
              <h2 className="reveal">
                Care, shaped around <em>the person</em>
              </h2>
            </div>
            <p className="reveal">
              A comprehensive range of tailored care to support independence and well-being in the comfort of your own
              home.
            </p>
          </div>
          <div className="bento">
            <Link className="tile tile--xl reveal" href="/domiciliary-care/">
              <img
                src="/assets/banner-5-800.webp"
                srcSet="/assets/banner-5-800.webp 800w, /assets/banner-5-1600.webp 1600w"
                sizes="(min-width:1024px) 50vw, 100vw"
                alt=""
                width={800}
                height={381}
                loading="lazy"
                decoding="async"
              />
              <div className="tile__body">
                <span className="tile__tag">Most requested</span>
                <h3>Domiciliary Care</h3>
                <p>Daily or weekly visits for personal care, medication, meals, domestic help and companionship.</p>
              </div>
            </Link>
            <Link className="tile reveal" href="/live-in-care/">
              <img src="/assets/couple-800.webp" alt="" width={800} height={498} loading="lazy" decoding="async" />
              <div className="tile__body">
                <h3>Live-In Care</h3>
                <p>A dedicated carer at home — an alternative to a nursing or residential home.</p>
              </div>
            </Link>
            <Link className="tile reveal" href="/dementia-care/">
              <img src="/assets/banner-4-800.webp" alt="" width={800} height={381} loading="lazy" decoding="async" />
              <div className="tile__body">
                <h3>Dementia Care</h3>
                <p>Patient, familiar support that protects routine and dignity.</p>
              </div>
            </Link>
            <Link className="tile reveal" href="/respite-care/">
              <img
                src="/assets/meal-service-800.webp"
                alt=""
                width={800}
                height={533}
                loading="lazy"
                decoding="async"
              />
              <div className="tile__body">
                <h3>Respite Care</h3>
                <p>Short-term cover so family carers can rest.</p>
              </div>
            </Link>
            <Link className="tile reveal" href="/end-of-life-care/">
              <img src="/assets/hands-3-800.webp" alt="" width={800} height={533} loading="lazy" decoding="async" />
              <div className="tile__body">
                <h3>End-of-Life Care</h3>
                <p>Palliative care with comfort and compassion.</p>
              </div>
            </Link>
            <Link className="tile reveal" href="/supported-living/">
              <img
                src="/assets/care-provider-800.webp"
                alt=""
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
              />
              <div className="tile__body">
                <h3>Supported Living</h3>
                <p>Living independently, with the right support.</p>
              </div>
            </Link>
          </div>
          <div className="helps reveal">
            <h3>Everything we can help with</h3>
            <ul className="helps__list">
              <li>Call in Service</li>
              <li>Cancer Care</li>
              <li>Cleaning Service</li>
              <li>Companionship</li>
              <li>Dementia</li>
              <li>Domestic Service</li>
              <li>Food Preparation &amp; Serving</li>
              <li>High Dependency Care</li>
              <li>Laundry Service</li>
              <li>Learning Disability</li>
              <li>Medication Assistance</li>
              <li>Mental Health Conditions</li>
              <li>Older Person Care</li>
              <li>Palliative Care</li>
              <li>Personal Hygiene Care</li>
              <li>Physical Disability</li>
              <li>Sensory Impairment</li>
              <li>Shopping Services</li>
            </ul>
            <Link className="link-arrow" href="/services/">
              See full service details <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="urgent" aria-labelledby="urgent-title">
        <div className="wrap urgent__in reveal">
          <div className="urgent__pulse" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div>
            <p className="eyebrow eyebrow--light">Emergency 24 hours</p>
            <h2 id="urgent-title">
              Sudden events change lives. We can have a carer with you in <em>under 12 hours</em>.
            </h2>
            <p>We’re available day and night — and in a crisis, we can often turn it around even quicker.</p>
          </div>
          <a className="btn btn--white btn--lg" href="tel:02085947282">
            Call now — 020 8594 7282
          </a>
        </div>
      </section>
      <section className="section how" id="how">
        <div className="wrap">
          <div className="section__head section__head--center">
            <p className="eyebrow reveal">How it works</p>
            <h2 className="reveal">
              From first call to <em>first visit</em>
            </h2>
          </div>
          <ol className="steps-list">
            <li className="reveal">
              <span className="num">01</span>
              <h3>Tell us what’s needed</h3>
              <p>
                Call us any time or send a request below. We listen first — to the person, their routines and what
                matters to them.
              </p>
            </li>
            <li className="reveal">
              <span className="num">02</span>
              <h3>We build the care plan</h3>
              <p>
                Our experienced team designs a personalised plan around health needs, culture, language and preferences.
              </p>
            </li>
            <li className="reveal">
              <span className="num">03</span>
              <h3>Care begins — and adapts</h3>
              <p>
                Your carer starts, and we proactively monitor, support and adjust as needs change. If your carer is ever
                away, we provide a replacement.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="section promise">
        <div className="wrap promise__in">
          <div className="promise__head">
            <p className="eyebrow reveal">Our objectives</p>
            <h2 className="reveal">
              The standards we hold <em>ourselves</em> to
            </h2>
            <p className="reveal">
              At Task Health Care Limited, we will always do our very best — learning and innovating wherever we can to
              enhance our service.
            </p>
            <details className="aims reveal">
              <summary>Read all of our aims</summary>
              <ul>
                <li>Give our patients the best possible care, by understanding and exceeding their expectations.</li>
                <li>Help people when they need us, treating everyone with compassion, dignity and respect.</li>
                <li>Encourage all team members to participate in achieving our aims and objectives.</li>
                <li>Improve satisfaction and experience for all stakeholders.</li>
                <li>Provide service users with a friendly, quality service in their chosen environment.</li>
                <li>
                  Promote optimal health, independence and quality living irrespective of age, religion, race, gender,
                  disability, sexuality or belief.
                </li>
                <li>Integrate clients into social and recreational activities, fostering belonging and purpose.</li>
              </ul>
            </details>
          </div>
          <ol className="objectives">
            <li className="reveal">
              <span>01</span>
              <div>
                <h3>Development</h3>
                <p>Support our staff’s growth and development so they can exceed patient expectations.</p>
              </div>
            </li>
            <li className="reveal">
              <span>02</span>
              <div>
                <h3>Maintain</h3>
                <p>Maintain the highest professional and ethical standards.</p>
              </div>
            </li>
            <li className="reveal">
              <span>03</span>
              <div>
                <h3>Respond</h3>
                <p>Respond to the needs of our patients and our staff.</p>
              </div>
            </li>
            <li className="reveal">
              <span>04</span>
              <div>
                <h3>Encourage</h3>
                <p>Encourage innovation, ambition, enterprise and continuous improvement.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="section reviews" id="reviews">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow reveal">What families say</p>
              <h2 className="reveal">
                Trusted by families <em>for years</em>
              </h2>
            </div>
            <div className="badges reveal">
              <a href="https://www.cqc.org.uk/location/1-13376159979" target="_blank" rel="noopener">
                <img
                  src="/assets/cqc-good.webp"
                  alt="Regulated by the Care Quality Commission — rated Good. Read inspection report"
                  width={601}
                  height={455}
                  loading="lazy"
                />
              </a>
              <a href="https://www.homecare.co.uk/homecare/agency.cfm/id/65432240283" target="_blank" rel="noopener">
                <img
                  src="/assets/homecare-score.webp"
                  alt="homecare.co.uk review score 9.9 — read reviews"
                  width={615}
                  height={548}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <figure className="feature reveal">
            <svg className="feature__mark" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M20 12C11 15 6 22 6 31c0 5 3 8 7 8s7-3 7-7-3-7-7-7c0-5 3-9 9-11zm22 0c-9 3-14 10-14 19 0 5 3 8 7 8s7-3 7-7-3-7-7-7c0-5 3-9 9-11z" />
            </svg>
            <blockquote>
              All my needs are taken care of, and I am never left without a carer. My carers come to feel like members
              of my family. I have been using Task Health Care for the past <em>13 years</em>. Most important of all, I
              am treated with dignity.
            </blockquote>
            <figcaption>
              <strong>Pamela H.</strong> · client for 13 years
            </figcaption>
          </figure>
          <div className="quotes">
            <blockquote className="quote reveal">
              <div className="stars" aria-label="5 out of 5">
                ★★★★★
              </div>
              <p>
                “I am 90 and rely on carers for my everyday living, and Sharon is one of the best carers I have ever
                had. I have come to look on her as a friend, and feel I would be lost without her.”
              </p>
              <cite>Pamela Harris</cite>
            </blockquote>
            <blockquote className="quote reveal">
              <div className="stars" aria-label="5 out of 5">
                ★★★★★
              </div>
              <p>
                “Very caring, fantastic support, always arrives on time, no clock watching. My mother is treated with
                dignity… she goes far and beyond.”
              </p>
              <cite>Janine G · Sept 2024</cite>
            </blockquote>
            <blockquote className="quote reveal">
              <div className="stars" aria-label="5 out of 5">
                ★★★★★
              </div>
              <p>
                “Task Healthcare goes beyond mere professionalism. They create a sense of family — a bond that
                transcends the caregiver-patient relationship.”
              </p>
              <cite>Valerie, Felsted</cite>
            </blockquote>
            <blockquote className="quote reveal">
              <div className="stars" aria-label="5 out of 5">
                ★★★★★
              </div>
              <p>
                “Incredible care for my grandma. Not just professional but incredibly compassionate. I would definitely
                recommend Task Health Care.”
              </p>
              <cite>Kimberley K · Dec 2023</cite>
            </blockquote>
          </div>
          <div className="center reveal center--row">
            <a className="btn btn--primary btn--lg" href="#contact">
              Request a consultation
            </a>
            <Link className="link-arrow" href="/reviews/">
              Read more reviews <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section areas" id="areas">
        <div className="wrap areas__in">
          <div className="areas__media reveal">
            <img
              src="/assets/community-800.webp"
              srcSet="/assets/community-800.webp 800w, /assets/community-1600.webp 1600w"
              sizes="(min-width:1024px) 45vw, 100vw"
              alt="A carer walking with a client in a park at sunset"
              width={800}
              height={533}
              loading="lazy"
              decoding="async"
            />
            <div className="areas__card">
              <svg viewBox="0 0 24 24">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <strong>45 Forest Road, Ilford</strong>
                <span>London IG6 3HA</span>
              </div>
            </div>
          </div>
          <div className="reveal">
            <p className="eyebrow">Areas we cover</p>
            <h2>
              Rooted in Redbridge, caring <em>across London</em>
            </h2>
            <p>
              We specialise in quality, client-centred domiciliary, supported living, respite and live-in care — with
              strong connections in our local community.
            </p>
            <ul className="chips">
              <li>Ilford &amp; Barkingside</li>
              <li>Redbridge</li>
              <li>Barking &amp; Dagenham</li>
              <li>Tower Hamlets</li>
              <li>Newham</li>
              <li>Waltham Forest</li>
              <li>Richmond</li>
              <li>Croydon</li>
              <li>Harrow</li>
              <li>Wembley</li>
              <li>Essex</li>
              <li>All over London</li>
            </ul>
            <div className="community">
              <h3>Community &amp; companionship</h3>
              <p>
                We believe in the power of community, helping clients join social and recreational activities, see
                friends and get to appointments — fostering a sense of belonging and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="careers" id="careers">
        <div className="wrap careers__in">
          <div className="reveal">
            <p className="eyebrow eyebrow--light">Join our community</p>
            <h2>
              Where compassion <em>meets career</em>
            </h2>
            <p>
              Whether you’re a dedicated caregiver, a skilled nurse or an administrative professional, there’s a place
              for you to thrive in our Home Care family — with a supportive, inclusive environment and real
              opportunities for professional growth.
            </p>
            <div className="careers__cta">
              <Link className="btn btn--white btn--lg" href="/careers/">
                See openings &amp; apply
              </Link>
              <Link className="link-arrow link-arrow--light" href="/training/">
                Our training <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="careers__media reveal">
            <img
              src="/assets/banner-1-800.webp"
              srcSet="/assets/banner-1-800.webp 800w, /assets/banner-1-1600.webp 1600w"
              sizes="(min-width:1024px) 45vw, 100vw"
              alt="A Task Healthcare carer smiling with a client"
              width={800}
              height={381}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section className="section contact" id="contact">
        <div className="wrap contact__in">
          <div className="contact__side">
            <p className="eyebrow reveal">Request a consultation</p>
            <h2 className="reveal">
              Let’s talk about <em>the care you need</em>
            </h2>
            <p className="reveal">
              Three quick steps and our care team will be in touch. Prefer to talk? We’re available 24/7 by phone.
            </p>
            <ul className="contact__list reveal">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
                <div>
                  <a href="tel:02085947282">020 8594 7282</a>
                  <a href="tel:07498218177">07498 218177</a>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width={20} height={16} rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                <div>
                  <a href="mailto:enquiries@taskhealthcare.co.uk">enquiries@taskhealthcare.co.uk</a>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  Office Mon–Fri 9:00–18:00
                  <br />
                  Sat &amp; Sun on call
                </div>
              </li>
            </ul>
            <div className="faq reveal">
              <h3>Common questions</h3>
              <details>
                <summary>How quickly can care start?</summary>
                <p>
                  If you need us in a hurry, we can arrange a carer to start in less than 12 hours of you getting in
                  touch — in a crisis, often even quicker.
                </p>
              </details>
              <details>
                <summary>What if my regular carer is sick or on holiday?</summary>
                <p>
                  We provide continuity of care. If your carer takes holiday, falls ill — or you simply don’t get on —
                  we’ll provide a replacement.
                </p>
              </details>
              <details>
                <summary>Do you cover weekends and bank holidays?</summary>
                <p>
                  Yes. Our office is open Monday to Friday 9:00–18:00, we’re on call at weekends, and you can reach us
                  24/7 by phone.
                </p>
              </details>
              <details>
                <summary>Can care respect our culture and language?</summary>
                <p>
                  Absolutely. Services are tailored to each client’s cultural and language needs, and you can customise
                  care as needs change.
                </p>
              </details>
              <details>
                <summary>How is care funded?</summary>
                <p>
                  We can work with private (self-funded) clients, Direct Payments, and care arranged through the Local
                  Authority or NHS. Tell us your situation in the form and we’ll talk you through the options.
                </p>
              </details>
            </div>
          </div>
          <ConsultForm />
        </div>
      </section>
    </>
  );
}
