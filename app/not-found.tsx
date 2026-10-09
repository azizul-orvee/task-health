import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Task Healthcare",
  description: "Sorry, we couldn't find that page.",
};

export default function NotFound() {
  return (
    <>
      <section className="phero phero--center notfound">
        <div className="wrap">
          <p className="notfound__code" aria-hidden="true">
            404
          </p>
          <h1>
            This page has <em>wandered off</em>
          </h1>
          <p className="phero__lead">
            Sorry — we couldn’t find the page you were looking for. Here are some helpful places to start instead.
          </p>
          <div className="phero__actions phero__actions--center">
            <Link className="btn btn--primary btn--lg" href="/">
              Back to home
            </Link>
            <Link className="btn btn--line btn--lg" href="/services/">
              Our services
            </Link>
            <Link className="btn btn--line btn--lg" href="/contact/">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
