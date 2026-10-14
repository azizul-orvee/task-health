import CountUp from "./CountUp";

export default function Proof({ id }: { id?: string }) {
  return (
    <section className="proof" id={id} aria-label="Why families trust us">
      <div className="wrap proof__in">
        <div className="stat reveal">
          <strong>
            <CountUp end={50} />+
          </strong>
          <span>years of combined NHS nursing &amp; community care experience</span>
        </div>
        <div className="stat reveal">
          <strong>9.9</strong>
          <span>review score on homecare.co.uk</span>
        </div>
        <div className="stat reveal">
          <strong>24/7</strong>
          <span>on-call support, every day of the year</span>
        </div>
        <div className="stat reveal">
          <strong>&lt;12h</strong>
          <span>to arrange an emergency carer</span>
        </div>
      </div>
    </section>
  );
}
