import Link from "next/link";
import { consultHref, site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-band__in reveal">
        <div>
          <p className="eyebrow eyebrow--light">Talk to our team</p>
          <h2>
            Let’s find the right care, <em>together</em>.
          </h2>
          <p>
            Tell us a little about your situation and we’ll guide you through the options — no obligation. In an
            emergency we can often arrange a carer in under 12 hours.
          </p>
        </div>
        <div className="cta-band__actions">
          <Link className="btn btn--white btn--lg" href={consultHref()}>
            Request a consultation
          </Link>
          <a className="btn btn--outline-light btn--lg" href={`tel:${site.phone.tel}`}>
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
