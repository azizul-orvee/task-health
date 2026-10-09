import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Care Jobs in Redbridge & London | Careers at Task Healthcare",
  description:
    "Join Task Healthcare: flexible rotas, free DBS check, free Care Certificate training, company pension and referral bonus. Download the application form.",
  alternates: { canonical: "/careers/" },
};

export default function CareersPage() {
  return (
    <>
      <section className="phero">
        <div className="wrap phero__in">
          <div className="phero__text">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span aria-current="page">Careers</span>
            </nav>
            <p className="eyebrow">Join our community</p>
            <h1>
              Where compassion <em>meets career</em>
            </h1>
            <p className="phero__lead">
              Whether you’re a dedicated caregiver, a skilled nurse or an administrative professional, there’s a place
              for you to thrive in our Home Care family.
            </p>
            <div className="phero__actions">
              <a className="btn btn--primary btn--lg" href="#apply">
                How to apply
              </a>
              <Link className="btn btn--line btn--lg" href="/training/">
                Our training
              </Link>
            </div>
          </div>
          <div className="phero__media">
            <img
              src="/assets/nurse-portrait-800.webp"
              srcSet="/assets/nurse-portrait-800.webp 800w, /assets/nurse-portrait-1600.webp 1600w"
              sizes="(min-width:1024px) 45vw, 100vw"
              alt="A smiling carer in uniform with clients in the background"
              width={800}
              height={533}
              fetchPriority="high"
            />
            <p className="phero__tag">Make a positive impact, every single day.</p>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap story">
          <div className="reveal">
            <p className="eyebrow">Why work with us</p>
            <h2>
              Your skills are <em>celebrated</em> here
            </h2>
            <p>
              We prioritise a supportive and inclusive work environment. Join a team that values your contributions and
              gives you ample opportunities for professional growth.
            </p>
            <p>
              Embark on a fulfilling career where every day brings a chance to make a positive impact on the lives of
              those we serve. Your skills and dedication aren’t just valued — they’re celebrated in our Home Care
              community.
            </p>
          </div>
          <div className="story__media reveal">
            <img
              src="/assets/talking-800.webp"
              srcSet="/assets/talking-800.webp 800w, /assets/talking-1600.webp 1600w"
              sizes="(min-width:1024px) 40vw, 100vw"
              alt="A carer laughing with an older man by a window"
              width={800}
              height={533}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow reveal">Benefits</p>
              <h2 className="reveal">
                What you’ll <em>get</em>
              </h2>
            </div>
            <p className="reveal">Real support, from your first day onwards.</p>
          </div>
          <ul className="perks">
            <li className="reveal">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width={18} height={18} rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <strong>Flexible working</strong>
              <span>Varied rotas built around your availability</span>
            </li>
            <li className="reveal">
              <svg viewBox="0 0 24 24">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <strong>Choose where you work</strong>
              <span>Choice of working area and locations</span>
            </li>
            <li className="reveal">
              <svg viewBox="0 0 24 24">
                <path d="M22 10 12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <strong>Free training</strong>
              <span>Care Certificate training &amp; sign-off, plus annual mandatory training and top-ups</span>
            </li>
            <li className="reveal">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <strong>Free DBS check</strong>
              <span>We cover the cost of your DBS</span>
            </li>
            <li className="reveal">
              <svg viewBox="0 0 24 24">
                <path d="M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.2a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.4-2.2z" />
              </svg>
              <strong>Free uniform</strong>
              <span>Provided from day one</span>
            </li>
            <li className="reveal">
              <svg viewBox="0 0 24 24">
                <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM3 10h18" />
              </svg>
              <strong>Company pension</strong>
              <span>A company pension scheme</span>
            </li>
            <li className="reveal">
              <svg viewBox="0 0 24 24">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z" />
                <path d="M14 2v6h6" />
              </svg>
              <strong>Electronic payslips</strong>
              <span>Monthly, straight to you</span>
            </li>
            <li className="reveal">
              <svg viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M19 8v6M22 11h-6" />
              </svg>
              <strong>Referral bonus</strong>
              <span>Excellent sign-up and friend referral bonus</span>
            </li>
            <li className="reveal">
              <svg viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <strong>Support &amp; mentoring</strong>
              <span>Regular support and mentoring from experienced staff</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--sand">
        <div className="wrap split-list">
          <div className="reveal">
            <p className="eyebrow">The work</p>
            <h2>Roles &amp; types of care</h2>
            <p className="muted-p">Varied, meaningful work across the care we provide.</p>
          </div>
          <ul className="chips chips--lg reveal">
            <li>Domiciliary care visits</li>
            <li>Live-in care</li>
            <li>High dependency care (double-up)</li>
            <li>Mental health conditions</li>
            <li>Respite cover</li>
            <li>Sit-in service</li>
            <li>Attending appointments</li>
            <li>Errands &amp; shopping</li>
            <li>Dementia care</li>
            <li>End-of-life care</li>
          </ul>
        </div>
      </section>
      <section className="section section--white" id="apply">
        <div className="wrap">
          <div className="section__head section__head--center">
            <p className="eyebrow reveal">How to apply</p>
            <h2 className="reveal">
              Three simple <em>steps</em>
            </h2>
          </div>
          <ol className="steps-list">
            <li className="reveal">
              <span className="num">01</span>
              <h3>Read the job description</h3>
              <p>See what the carer role involves.</p>
              <a className="link-arrow" href="/assets/docs/job-description-carer.docx" download>
                Download job description <span aria-hidden="true">↓</span>
              </a>
            </li>
            <li className="reveal">
              <span className="num">02</span>
              <h3>Fill in the application form</h3>
              <p>Download the form and complete it.</p>
              <a className="link-arrow" href="/assets/docs/application-form.docx" download>
                Download application form <span aria-hidden="true">↓</span>
              </a>
            </li>
            <li className="reveal">
              <span className="num">03</span>
              <h3>Send it to us</h3>
              <p>Email your completed form, or call us for a chat about opportunities.</p>
              <a className="link-arrow" href="mailto:enquiries@taskhealthcare.co.uk?subject=Job%20application">
                enquiries@taskhealthcare.co.uk <span aria-hidden="true">→</span>
              </a>
            </li>
          </ol>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap cta-band__in reveal">
          <div>
            <p className="eyebrow eyebrow--light">Questions?</p>
            <h2>
              Talk to us about <em>a career in care</em>
            </h2>
            <p>We’re happy to chat about roles, training and working hours before you apply.</p>
          </div>
          <div className="cta-band__actions">
            <a className="btn btn--white btn--lg" href="tel:02085947282">
              Call 020 8594 7282
            </a>
            <a
              className="btn btn--outline-light btn--lg"
              href="mailto:enquiries@taskhealthcare.co.uk?subject=Careers%20enquiry"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
