import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Home Care Services | Task Healthcare, Redbridge & London",
  description:
    "Domiciliary, live-in, dementia, respite, end-of-life care and supported living — plus 24-hour emergency care — across Redbridge and London.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="phero">
        <div className="wrap phero__in">
          <div className="phero__text">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span aria-current="page">Services</span>
            </nav>
            <p className="eyebrow">Our services</p>
            <h1>
              Care that fits <em>your life</em>
            </h1>
            <p className="phero__lead">
              From daily or weekly visits through to the dedicated support of a live-in carer — even on a temporary
              basis — you can customise your care to match your current needs.
            </p>
            <div className="phero__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/#consult">
                Request a consultation
              </Link>
              <a className="btn btn--line btn--lg" href="tel:02085947282">
                Call 020 8594 7282
              </a>
            </div>
          </div>
          <div className="phero__media">
            <img
              src="/assets/care-provider-800.webp"
              srcSet="/assets/care-provider-800.webp 800w, /assets/care-provider-1600.webp 1600w"
              sizes="(min-width:1024px) 45vw, 100vw"
              alt="A carer sitting with a client resting in bed"
              width={800}
              height={450}
              fetchPriority="high"
            />
            <p className="phero__tag">Visiting, live-in, sitting, overnight and hospital-visit carers.</p>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow reveal">Types of care</p>
              <h2 className="reveal">
                Choose the care <em>that fits</em>
              </h2>
            </div>
            <p className="reveal">
              Each service is tailored to the person, including their cultural and language needs.
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
              <img src="/assets/talking-800.webp" alt="" width={800} height={533} loading="lazy" decoding="async" />
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
              <img src="/assets/supported-800.webp" alt="" width={800} height={546} loading="lazy" decoding="async" />
              <div className="tile__body">
                <h3>Supported Living</h3>
                <p>Living independently, with the right support.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split-list">
          <div className="reveal">
            <p className="eyebrow">What we do</p>
            <h2>Our services</h2>
            <p className="muted-p">
              Practical, personal support — delivered by carers who are proactively monitored, supported and trained.
            </p>
          </div>
          <ul className="checklist checklist--2 reveal">
            <li>General care and personal hygiene</li>
            <li>24-hour care with live-in carers</li>
            <li>Washing, dressing and bathing</li>
            <li>Domestic assistance</li>
            <li>Laundry and shopping</li>
            <li>Cooking</li>
            <li>Accompaniment</li>
            <li>Rapid response / assessment</li>
            <li>Re-enablement</li>
            <li>Travelling care</li>
          </ul>
        </div>
      </section>
      <section className="section section--sand">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow reveal">Conditions &amp; requirements</p>
              <h2 className="reveal">
                Support for <em>every stage</em>
              </h2>
            </div>
            <p className="reveal">The services above are available for the following conditions and requirements.</p>
          </div>
          <ul className="chips chips--lg reveal">
            <li>Elderly care</li>
            <li>Dementia</li>
            <li>Advanced end-of-life care</li>
            <li>Post-operative rehabilitation</li>
            <li>Post-operation live-in care</li>
            <li>Physical &amp; sensory disabilities</li>
            <li>Learning disabilities</li>
            <li>Chronic illness</li>
            <li>Spinal injury</li>
            <li>Acquired brain injury (ABI)</li>
            <li>Companionship care</li>
            <li>Respite live-in care</li>
            <li>Short-term live-in care</li>
            <li>Long-term live-in care</li>
            <li>Immediate-notice live-in care</li>
            <li>Individual &amp; couples’ care</li>
          </ul>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap story">
          <div className="story__media reveal">
            <img
              src="/assets/wheelchair-800.webp"
              srcSet="/assets/wheelchair-800.webp 800w, /assets/wheelchair-1600.webp 1600w"
              sizes="(min-width:1024px) 40vw, 100vw"
              alt="A smiling carer holding hands with an older man at home"
              width={800}
              height={533}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">Live-in carers &amp; companionship care</p>
            <h2>
              An alternative to a <em>care home</em>
            </h2>
            <p>
              With a live-in carer you have your own dedicated worker living in your home — so you can stay with your
              familiar possessions and pets, keep the same daily routines, and friends and family can visit as they
              normally do.
            </p>
            <p>
              We provide continuity of care: should your carer take holiday, fall ill or you simply don’t get on, we’ll
              provide a replacement. We don’t wait for a problem before solving it — we proactively monitor our carers
              and give ongoing training.
            </p>
            <Link className="link-arrow" href="/live-in-care/">
              More about live-in care <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap two-col">
          <div className="panel reveal">
            <h2 className="h3">What a live-in carer can do</h2>
            <ul className="checklist">
              <li>Prepare nutritious homemade meals</li>
              <li>Supervise and prompt medication</li>
              <li>Wash and dry clothing, bedding and towels</li>
              <li>Collect prescriptions</li>
              <li>Housework, bed making and light gardening</li>
              <li>Collect and deliver allowances and pension benefits</li>
              <li>Accompany you to hospital and GP appointments</li>
              <li>Shopping trips, visits and errands</li>
              <li>Recreational support — social events, hobbies, seeing friends</li>
              <li>Help looking after pets</li>
              <li>Showering, bathing, washing, dressing, shaving and oral hygiene</li>
              <li>Help getting to and from the toilet</li>
              <li>Moving and transferring in and out of bed</li>
            </ul>
          </div>
          <div className="panel panel--ink reveal">
            <h2 className="h3">Advanced care</h2>
            <p>
              Clients with more specific needs are offered live-in, round-the-clock care at whatever level they require
              — for example if they:
            </p>
            <ul className="checklist checklist--light">
              <li>Aren’t mobile on their own and need supervision</li>
              <li>Need full help with showering, bathing, dressing and oral hygiene</li>
              <li>Are incontinent and need help maintaining toilet hygiene</li>
              <li>Are forgetful or repetitive and need constant supervision</li>
              <li>Need a commode, bottle or catheter bag emptied</li>
              <li>Cannot be left alone</li>
              <li>Need help to eat and drink</li>
              <li>Need prompting with medication or re-ordering prescriptions</li>
              <li>Live with dementia, Alzheimer’s, Parkinson’s or multiple sclerosis, or need hoisting</li>
            </ul>
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
          <a className="btn btn--primary btn--lg" href="tel:02085947282">
            Call now — 020 8594 7282
          </a>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap">
          <div className="helps reveal">
            <h2 className="h3">Everything we can help with</h2>
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
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
