import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training & Development | Task Healthcare",
  description:
    "Every Task Healthcare carer completes an intensive induction and practical training in safeguarding, moving and handling, hoisting, medication and First Aid.",
  alternates: { canonical: "/training/" },
};

export default function TrainingPage() {
  return (
    <>
      <section className="phero">
        <div className="wrap phero__in">
          <div className="phero__text">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span aria-current="page">Training</span>
            </nav>
            <p className="eyebrow">Training &amp; development</p>
            <h1>
              Skilled hands, <em>caring hearts</em>
            </h1>
            <p className="phero__lead">
              We invest in our staff through ongoing training and professional development — and we only employ
              dedicated people with a passion for care.
            </p>
            <div className="phero__actions">
              <Link className="btn btn--primary btn--lg" href="/careers/">
                Join our team
              </Link>
              <Link className="btn btn--line btn--lg" href="/contact/#consult">
                Request a consultation
              </Link>
            </div>
          </div>
          <div className="phero__media">
            <img
              src="/assets/training-800.webp"
              srcSet="/assets/training-800.webp 800w, /assets/training-1600.webp 1600w"
              sizes="(min-width:1024px) 45vw, 100vw"
              alt="Carers practising safe hoisting with a client during training"
              width={800}
              height={600}
              fetchPriority="high"
            />
            <p className="phero__tag">Hands-on, practical training — before day one.</p>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap story">
          <div className="reveal">
            <p className="eyebrow">Before they start</p>
            <h2>
              An intensive induction <em>for every carer</em>
            </h2>
            <p>
              Each member of staff completes an intensive induction and training programme before they begin working
              with clients. Our practical sessions cover safeguarding, moving and handling, hoisting equipment and First
              Aid.
            </p>
            <p>
              Our team is made up of registered nurses (RGN) and NVQ-trained carers, all taken through theory and
              practical training in safeguarding, medication, lifting and handling, and using hoisting equipment.
            </p>
          </div>
          <ul className="skill-grid reveal">
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Safeguarding
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z" />
              </svg>
              Moving &amp; handling
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M12 2v8M8 6l4 4 4-4M4 14h16l-2 8H6z" />
              </svg>
              Hoisting equipment
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7zM8.5 8.5l7 7" />
              </svg>
              Medication
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />
              </svg>
              First Aid
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M22 10 12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Annual refreshers
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap three-col">
          <article className="reveal">
            <span className="num">RGN</span>
            <h2 className="h3">Registered nurses</h2>
            <p>Qualified nurses bring clinical knowledge and decades of NHS experience to every care plan.</p>
          </article>
          <article className="reveal">
            <span className="num">NVQ</span>
            <h2 className="h3">NVQ-trained carers</h2>
            <p>
              Carers with recognised qualifications, supported with free Care Certificate training and annual mandatory
              training.
            </p>
          </article>
          <article className="reveal">
            <span className="num">1:1</span>
            <h2 className="h3">Ongoing support</h2>
            <p>
              Regular support and mentoring, with carers proactively monitored and supported so standards stay high.
            </p>
          </article>
        </div>
        <p className="wrap fine reveal">All our staff are fully vaccinated against COVID-19.</p>
      </section>
      <section className="careers">
        <div className="wrap careers__in">
          <div className="reveal">
            <p className="eyebrow eyebrow--light">Grow with us</p>
            <h2>
              Start a rewarding career <em>in care</em>
            </h2>
            <p>
              Free Care Certificate training and sign-off, free annual mandatory training with top-ups, and regular
              mentoring — whether you’re new to care or an experienced nurse.
            </p>
            <div className="careers__cta">
              <Link className="btn btn--white btn--lg" href="/careers/">
                See careers &amp; apply
              </Link>
            </div>
          </div>
          <div className="careers__media reveal">
            <img
              src="/assets/nurse-portrait-800.webp"
              srcSet="/assets/nurse-portrait-800.webp 800w, /assets/nurse-portrait-1600.webp 1600w"
              sizes="(min-width:1024px) 45vw, 100vw"
              alt="A smiling carer in uniform"
              width={800}
              height={533}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
