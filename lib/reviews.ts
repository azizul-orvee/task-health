import type { Review, VerifiedReview } from "./types";

/**
 * Every review from the homecare.co.uk profile
 * (https://www.homecare.co.uk/homecare/agency.cfm/id/65432240283), newest first.
 * Real client data: wording is as published (light spelling/punctuation fixes only).
 * `excerpt` is the shortened version shown on the home page marquee, trimmed with ellipses, never reworded.
 *
 * Not listed: Louise F (9 Apr 2024). Her review is the "Valerie, Felsted" long read on /reviews
 * (the live site's attribution).
 */
export const reviews: VerifiedReview[] = [
  {
    name: "Janine G",
    date: "2025-09-19",
    text: "Very caring, fantastic support, always arrives on time, no clock watching, my mother is treated with dignity, patience and has all the time in the world for my mother. Whatever my mother asks of she is greeted with all the help she needs in a very kind and gentle way. Cannot ask for anything more, she goes far and beyond.",
    excerpt:
      "Very caring, fantastic support, always arrives on time, no clock watching. My mother is treated with dignity… she goes far and beyond.",
  },
  {
    name: "C P",
    date: "2025-09-04",
    text: "We as a family are very happy with the care that she receives, thank you.",
  },
  {
    name: "G V",
    date: "2025-09-03",
    text: "I am happy with all the team, all of the girls are lovely. I am grateful for everything they do. The service has been excellent, I have my regular carers who come to see me. I would highly recommend Task Health Care to everyone.",
    excerpt:
      "I am happy with all the team, all of the girls are lovely. I am grateful for everything they do… I would highly recommend Task Health Care to everyone.",
  },
  {
    name: "N S",
    date: "2025-08-25",
    text: "I am very satisfied with the services provided together with the knowledge and experience of the carer.",
  },
  {
    name: "J M",
    date: "2025-08-25",
    text: "All the carers are very kind to my friend. They treat her with respect and she indicates her approval. The carers always arrive on time. They are always cheerful and uplifting. Thank you.",
  },
  {
    name: "Pamela H",
    date: "2025-06-25",
    text: "All my needs are taken care of, and I am never left without a carer. My carers come to feel like members of my family. I have been using Task Health Care Agency for the past 13 years. Most important of all, I am treated with dignity and not as an old person with dementia.",
    // Already the large feature quote directly above the marquee.
    inMarquee: false,
  },
  {
    name: "Jen H",
    date: "2025-01-17",
    text: "I’ve had an excellent experience with Task Health Care. I needed a carer because I’d broken my wrist and had many pulled muscles, following a fall. This meant I couldn’t bath etc., or do very much at all without help. My son found Task Health Care Ltd, and was able to set up a meeting straightaway in my flat with a manager and my carer-to-be. So I had a contract more or less as soon as I knew I’d need care help. Straight away I could be helped to a medical appointment and back home. And my contract ensured I had care, could keep appointments, and have help of various sorts. My carer was flexible about visits, always efficient, and willing and able to give help of many sorts. The range of services that Task Health Care provides is impressive.",
    excerpt:
      "I’ve had an excellent experience with Task Health Care… My carer was flexible about visits, always efficient, and willing and able to give help of many sorts.",
  },
  {
    name: "Kimberley K",
    date: "2024-12-12",
    text: "I can’t express enough gratitude for the incredible care my grandma received from Task Health Care. They go above and beyond to ensure she was comfortable and well looked after. Not just professional but incredibly compassionate. No problems at all, I would definitely recommend Task Health Care Ltd. Amazing.",
    excerpt:
      "Incredible care for my grandma. Not just professional but incredibly compassionate. I would definitely recommend Task Health Care.",
  },
  {
    name: "Nathan J",
    date: "2024-12-12",
    text: "I recently had the opportunity to witness the care and support provided by Task Health Care for my relative. I am incredibly grateful for their professionalism, compassion, and attention to detail.",
  },
  {
    name: "S M",
    date: "2024-10-08",
    text: "We have been using Task Health Care for over 2 years now, speaking and dealing with the manager and meeting her on many occasions. She is really professional, helpful, kind and everything she should be in this profession, and all the carers she has provided have been very kind and caring with my 92-year-old mother.",
    excerpt:
      "We have been using Task Health Care for over 2 years now… all the carers she has provided have been very kind and caring with my 92-year-old mother.",
  },
  {
    name: "Shirley S",
    date: "2024-09-18",
    text: "Task Health Care Ltd is an excellent company, providing great care and kindness and always treating you with support and maintaining your dignity. Highly recommend them to anyone who needs carers at home.",
  },
  {
    name: "Y J",
    date: "2024-09-13",
    text: "I cannot express how happy, contented and in safe hands I am. They will go out of their way to make me happy, even staying a bit over their time. I would 100% refer Task Health Care Ltd to anyone who needs care, as they go above and beyond to make you happy and comfortable.",
    excerpt:
      "I cannot express how happy, contented and in safe hands I am. They will go out of their way to make me happy, even staying a bit over their time.",
  },
  {
    name: "John F",
    date: "2024-09-13",
    text: "The lovely folk at Task Health Care looked after Mum in her house until her last days, it was important for her to stay at home, it was one of her last wishes, they did care plans and hospital visits and also helped with getting Mum’s benefits – absolutely recommended.",
    excerpt:
      "The lovely folk at Task Health Care looked after Mum in her house until her last days… they did care plans and hospital visits and also helped with getting Mum’s benefits – absolutely recommended.",
  },
  {
    name: "H V",
    date: "2024-04-11",
    text: "We were recommended Task Health Care by a friend who employed them to care for her mother. The manager visited us to get to know Mum. She sourced a couple of carers with whom we met. All those put forward have been very caring, polite and friendly. They have coped well with Mum’s changeable moods. When required the manager has found cover at short notice and tries to ensure there is continuity of service and care and that we and, in particular, Mum meets the carer before they are engaged.",
    excerpt:
      "All those put forward have been very caring, polite and friendly. They have coped well with Mum’s changeable moods. When required the manager has found cover at short notice…",
  },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

// Parsed by hand (not Date/Intl) so server and client always render the same string.
const parts = (iso: string) => iso.split("-").map(Number) as [number, number, number];

/** "2025-09-19" → "19 September 2025" */
export const longDate = (iso: string) => {
  const [y, m, d] = parts(iso);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

/** "2025-09-19" → "Sept 2025" */
export const shortDate = (iso: string) => {
  const [y, m] = parts(iso);
  return `${SHORT_MONTHS[m - 1]} ${y}`;
};

/** Home page marquee: two quotes from the live site first, then the homecare.co.uk reviews. */
export const homeReviews: Review[] = [
  {
    text: "I am 90 and rely on carers for my everyday living, and Sharon is one of the best carers I have ever had. I have come to look on her as a friend, and feel I would be lost without her.",
    by: "Pamela Harris",
  },
  {
    text: "Task Healthcare goes beyond mere professionalism. They create a sense of family — a bond that transcends the caregiver-patient relationship.",
    by: "Valerie, Felsted",
  },
  ...reviews
    .filter((r) => r.inMarquee !== false)
    .map((r) => ({ text: r.excerpt ?? r.text, by: `${r.name} · ${shortDate(r.date)}` })),
];
