export type Feature = { title: string; text: string };

export type Review = { text: string; by: string };

/** A review from the homecare.co.uk profile (see lib/reviews.ts). */
export type VerifiedReview = {
  name: string;
  /** Publication date, ISO "YYYY-MM-DD". */
  date: string;
  /** Full text, shown on /reviews. */
  text: string;
  /** Shortened text for the home marquee; falls back to `text`. */
  excerpt?: string;
  /** Set false to keep it out of the home marquee. */
  inMarquee?: boolean;
};

export type Service = {
  slug: string;
  name: string;
  /** Headline split around its italic accent: before <em>em</em> after. */
  title: { before: string; em: string; after: string };
  tagline: string;
  meta: string;
  intro: string;
  lede: string;
  featuresTitle: string;
  features: Feature[];
  outro: string;
  heroImage: string;
  heroAlt: string;
  sideImage: string;
  sideAlt: string;
  cardImage: string;
  card: string;
  /** Matched against the contact form's "Type of care" options. */
  careQuery: string;
  quote: { text: string; by: string };
};
