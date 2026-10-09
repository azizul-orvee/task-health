import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Img from "@/components/Img";
import Proof from "@/components/Proof";
import { consultHref, site } from "@/lib/site";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ service: string }> };

// Only the six care types exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).service);
  if (!s) return {};
  return {
    title: `${s.name} in Redbridge & London | Task Healthcare`,
    description: s.meta,
    alternates: { canonical: `/${s.slug}/` },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).service);
  if (!s) notFound();
  const consult = consultHref(s.careQuery);

  return (
    <>
      <section className="phero">
        <div className="wrap phero__in">
          <div className="phero__text">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services/">Services</Link>
              <span>/</span>
              <span aria-current="page">{s.name}</span>
            </nav>
            <p className="eyebrow">{s.name}</p>
            <h1>
              {s.title.before}
              <em>{s.title.em}</em>
              {s.title.after}
            </h1>
            <p className="phero__lead">{s.intro}</p>
            <div className="phero__actions">
              <Link className="btn btn--primary btn--lg" href={consult}>
                Request a consultation
              </Link>
              <a className="btn btn--line btn--lg" href={`tel:${site.phone.tel}`}>
                Call {site.phone.display}
              </a>
            </div>
            <ul className="phero__trust">
              <li>CQC rated Good</li>
              <li>Personalised care plan</li>
              <li>Available 24/7</li>
            </ul>
          </div>
          <div className="phero__media">
            <Img name={s.heroImage} alt={s.heroAlt} sizes="(min-width:1024px) 45vw, 100vw" priority />
            <p className="phero__tag">{s.tagline}</p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap overview">
          <div className="overview__text reveal">
            <p className="eyebrow">Overview</p>
            <p className="lede lede--lg">{s.lede}</p>
          </div>
          <aside className="overview__card reveal">
            <h2 className="h3">Is {s.name} right for you?</h2>
            <p>
              Every situation is different. Talk to our experienced team — we’ll listen first, then suggest the support
              that fits.
            </p>
            <Link className="btn btn--primary" href={consult}>
              Ask our team
            </Link>
            <a className="overview__phone" href={`tel:${site.phone.tel}`}>
              or call <strong>{site.phone.display}</strong> — 24/7
            </a>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow reveal">What’s included</p>
              <h2 className="reveal">{s.featuresTitle}</h2>
            </div>
            <p className="reveal">
              Every care plan is built around the person — choose the support that matters, and change it as needs
              change.
            </p>
          </div>
          <ol className="feat">
            {s.features.map((f, i) => (
              <li className="reveal" key={f.title}>
                <span className="feat__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap story">
          <div className="story__media reveal">
            <Img name={s.sideImage} alt={s.sideAlt} sizes="(min-width:1024px) 40vw, 100vw" />
          </div>
          <div className="reveal">
            <p className="eyebrow">Our promise</p>
            <p className="story__text">{s.outro}</p>
            <figure className="story__quote">
              <div className="stars" aria-label="5 out of 5">
                ★★★★★
              </div>
              <blockquote>“{s.quote.text}”</blockquote>
              <figcaption>{s.quote.by}</figcaption>
            </figure>
            <Link className="link-arrow" href="/reviews/">
              Read more reviews <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Proof />

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow reveal">Explore</p>
              <h2 className="reveal">
                Other ways <em>we can help</em>
              </h2>
            </div>
            <Link className="link-arrow reveal" href="/services/">
              See all services <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="related">
            {services
              .filter((o) => o.slug !== s.slug)
              .map((o) => (
                <Link className="tile reveal" href={`/${o.slug}/`} key={o.slug}>
                  <Img name={o.cardImage} sizes="(min-width:1024px) 20vw, 50vw" />
                  <div className="tile__body">
                    <h3>{o.name}</h3>
                    <p>{o.card}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
