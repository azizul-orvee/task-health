import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import Proof from "@/components/Proof";

export const metadata: Metadata = {
  title: "About Task Healthcare | Home Care Agency in Ilford, Redbridge",
  description:
    "Task Healthcare is a home care agency in Ilford providing personalised care for adults and older people. Senior staff with 50+ years of NHS nursing experience.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section className="phero">
        <div className="wrap phero__in">
          <div className="phero__text">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span aria-current="page">About</span>
            </nav>
            <p className="eyebrow">About us</p>
            <h1>
              Passion <em>led us here</em>
            </h1>
            <p className="phero__lead">
              Task Healthcare is a home care agency providing personalised care for adults and older people in their own
              homes — tailored to each client’s cultural and language needs.
            </p>
            <div className="phero__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/#consult">
                Request a consultation
              </Link>
              <a className="btn btn--line btn--lg" href="#purpose">
                Our Statement of Purpose
              </a>
            </div>
          </div>
          <div className="phero__media">
            <img
              src="/assets/banner-5-800.webp"
              srcSet="/assets/banner-5-800.webp 800w, /assets/banner-5-1600.webp 1600w"
              sizes="(min-width:1024px) 45vw, 100vw"
              alt="A Task Healthcare carer with an older couple at home"
              width={800}
              height={381}
              fetchPriority="high"
            />
            <p className="phero__tag">Based in Ilford — caring across London.</p>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap story">
          <div className="reveal">
            <p className="eyebrow">Who we are</p>
            <h2>
              Home care that puts <em>you</em> in control
            </h2>
            <p>
              The flexibility of home care lets you live safely and comfortably in the home you know best. From daily
              and weekly care visits right through to the dedicated support of a live-in carer, there are plenty of
              services available — even on a temporary basis.
            </p>
            <p>
              You can have a visiting carer, a live-in carer, a sitting carer, a carer to take you shopping, hospital
              visits, an overnight carer, or a dedicated carer to support all your caring needs and put your mind at
              ease.
            </p>
          </div>
          <div className="story__media reveal">
            <img
              src="/assets/couple-800.webp"
              srcSet="/assets/couple-800.webp 800w, /assets/couple-1600.webp 1600w"
              sizes="(min-width:1024px) 40vw, 100vw"
              alt="A carer chatting with an older couple on their sofa"
              width={800}
              height={498}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section className="pull">
        <div className="wrap reveal">
          <p className="pull__quote">
            “Task Healthcare supports people to <em>live independently</em>.”
          </p>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap three-col">
          <article className="reveal">
            <span className="num">01</span>
            <h2 className="h3">Palliative &amp; reablement care</h2>
            <p>
              We provide palliative care across London for people living with life-threatening illnesses, and Reablement
              Care — intensive short-term support to help people relearn daily skills and regain the confidence to live
              independently.
            </p>
          </article>
          <article className="reveal">
            <span className="num">02</span>
            <h2 className="h3">Rooted in our community</h2>
            <p>
              We’re based in and around East London and Essex for the most part, and also support clients in Enfield and
              Dartford. We have strong connections within the local community.
            </p>
          </article>
          <article className="reveal">
            <span className="num">03</span>
            <h2 className="h3">Led by experience</h2>
            <p>
              Our senior staff are experienced, qualified nurses and carers with 50+ years of combined NHS and community
              care experience. They’ve seen first-hand every stage of the care journey — and guide our managers and
              carers every day.
            </p>
          </article>
        </div>
      </section>
      <Proof />
      <section className="section promise">
        <div className="wrap promise__in">
          <div className="promise__head">
            <p className="eyebrow reveal">Our aims</p>
            <h2 className="reveal">
              What we <em>set out</em> to do
            </h2>
            <ul className="aims-list reveal">
              <li>Give our patients the best possible care, by understanding and exceeding their expectations.</li>
              <li>
                Help people when they need us — treating everyone with compassion, dignity and respect, and taking pride
                in our work and our organisation.
              </li>
              <li>Encourage all team members to take part in achieving our aims and objectives.</li>
              <li>
                Always do our very best — learning and innovating wherever we can, and embracing change to enhance our
                service.
              </li>
              <li>Improve satisfaction and experience for all stakeholders.</li>
              <li>Provide service users with a friendly, quality service in their chosen environment.</li>
              <li>
                Promote optimal health, independence and quality living irrespective of age, religion, race, gender,
                disability, sexuality or belief.
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow reveal">Our objectives</p>
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
        </div>
      </section>
      <section className="section section--white" id="purpose">
        <div className="wrap doc-card reveal">
          <div className="doc-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z" />
              <path d="M14 2v6h6M8 13h8M8 17h5" />
            </svg>
          </div>
          <div>
            <p className="eyebrow">Strategy &amp; vision</p>
            <h2 className="h3">Statement of Purpose</h2>
            <p>
              This document reflects Task Health Care’s strategy and vision — who we are, the services we provide and
              how we deliver them.
            </p>
          </div>
          <a className="btn btn--primary" href="/assets/docs/statement-of-purpose.docx" download>
            Download (.docx)
          </a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
