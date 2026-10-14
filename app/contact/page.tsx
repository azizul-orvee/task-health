import type { Metadata } from "next";
import ConsultForm from "@/components/ConsultForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Task Healthcare | 45 Forest Road, Ilford IG6 3HA",
  description:
    "Call Task Healthcare on 020 8594 7282 (24/7), email enquiries@taskhealthcare.co.uk, or request a consultation online. 45 Forest Road, Ilford, London IG6 3HA.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="phero phero--center phero--tight">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <p className="eyebrow">Contact us</p>
          <h1>
            We’re here, <em>day and night</em>
          </h1>
          <p className="phero__lead">
            Call us any time, drop us an email, or request a consultation below — our care team will get back to you.
          </p>
        </div>
      </section>
      <section className="section section--tight">
        <div className="wrap cards-4">
          <a className="ccard reveal" href="tel:02085947282">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            <span className="ccard__label">Office · 24/7</span>
            <strong>020 8594 7282</strong>
          </a>
          <div className="ccard reveal">
            <svg viewBox="0 0 24 24">
              <rect x="5" y="2" width={14} height={20} rx="2" />
              <path d="M12 18h.01" />
            </svg>
            <span className="ccard__label">Mobile</span>
            <strong>
              <a href="tel:07498218177">07498 218177</a>
            </strong>
            <strong>
              <a href="tel:07816834903">07816 834903</a>
            </strong>
          </div>
          <a className="ccard reveal" href="mailto:enquiries@taskhealthcare.co.uk">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="4" width={20} height={16} rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            <span className="ccard__label">Email</span>
            <strong className="ccard__email">enquiries@taskhealthcare.co.uk</strong>
          </a>
          <a
            className="ccard reveal"
            href="https://www.google.com/maps/search/?api=1&query=45+Forest+Road+Ilford+IG6+3HA"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 24 24">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="ccard__label">Office</span>
            <strong>45 Forest Road, Ilford, London IG6 3HA</strong>
          </a>
        </div>
      </section>
      <section className="section contact" id="consult">
        <div className="wrap contact__in">
          <div className="contact__side">
            <p className="eyebrow reveal">Request a consultation</p>
            <h2 className="reveal">
              Let’s talk about <em>the care you need</em>
            </h2>
            <p className="reveal">
              Three quick steps and our care team will be in touch. If it’s urgent, please call — we can often arrange a
              carer in under 12 hours.
            </p>
            <table className="hours reveal">
              <caption>Office hours</caption>
              <tbody>
                <tr>
                  <th scope="row">Monday – Friday</th>
                  <td>9:00 – 18:00</td>
                </tr>
                <tr>
                  <th scope="row">Saturday</th>
                  <td>On call</td>
                </tr>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>On call</td>
                </tr>
                <tr>
                  <th scope="row">Phone</th>
                  <td>Available 24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ConsultForm />
          <div className="faq reveal">
            <h3>Common questions</h3>
            <details>
              <summary>How quickly can care start?</summary>
              <p>
                If you need us in a hurry, we can arrange a carer to start in less than 12 hours of you getting in touch
                — in a crisis, often even quicker.
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
              <summary>Which areas do you cover?</summary>
              <p>
                We’re based in Ilford and care for people across Redbridge, East London and Essex — including Barking
                &amp; Dagenham, Tower Hamlets, Newham, Waltham Forest, Enfield and Dartford — and all over London.
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
      </section>
      <section className="map">
        <iframe
          title="Map showing Task Healthcare, 45 Forest Road, Ilford IG6 3HA"
          src="https://maps.google.com/maps?q=45%20Forest%20Road%2C%20Ilford%20IG6%203HA&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
