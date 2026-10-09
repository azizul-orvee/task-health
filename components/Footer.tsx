import Link from "next/link";
import { consultHref, site } from "@/lib/site";
import { services } from "@/lib/services";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cta">
          <h2>
            Your quality of care is <em>our priority.</em>
          </h2>
          <Link className="btn btn--white btn--lg" href={consultHref()}>
            Request a consultation
          </Link>
        </div>
        <div className="footer__grid">
          <div>
            <Link href="/" aria-label="Task Healthcare home">
              <img
                className="footer__logo"
                src="/assets/logo-white.png"
                alt="Task Healthcare"
                width={564}
                height={174}
                loading="lazy"
              />
            </Link>
            <p>
              Task Health Care is your perfect care at home companion, providing care and support for your family. With
              kindness and compassion, our highly-trained and trusted team deliver tailored programmes for ALL needs.
            </p>
            <div className="social">
              <a href={site.links.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={site.links.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={site.links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <nav aria-label="Care services">
            <h4>Care services</h4>
            {services.map((s) => (
              <Link key={s.slug} href={`/${s.slug}/`}>
                {s.name}
              </Link>
            ))}
            <Link href="/services/">All services</Link>
          </nav>
          <nav aria-label="Company">
            <h4>Company</h4>
            <Link href="/about/">About</Link>
            <Link href="/training/">Training</Link>
            <Link href="/careers/">Recruitment</Link>
            <Link href="/reviews/">Customer reviews</Link>
            <Link href="/contact/">Contact</Link>
            <a href={site.links.cqc} target="_blank" rel="noopener">
              CQC report ↗
            </a>
          </nav>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            <a href={`tel:${site.mobiles[0].tel}`}>{site.mobiles[0].display}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <p className="muted">
              Mon–Fri 9:00–18:00 · Sat &amp; Sun on call
              <br />
              Available 24/7 via phone
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.legalName}
          </span>
          <span>Regulated by the Care Quality Commission</span>
        </div>
      </div>
    </footer>
  );
}
