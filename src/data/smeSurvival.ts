export const survivalStats = [
  { value: '55%', label: 'of US small businesses used AI in 2025, up from 39% in 2024', source: 'Thryv AI & Small Business survey 2025', url: 'https://www.nasdaq.com/press-release/ai-adoption-among-small-businesses-surges-41-2025-according-new-survey-thryv-2025-07' },
  { value: '80%', label: 'of small-business AI users say AI is essential to reaching new customers', source: 'Thryv AI & Small Business survey 2025', url: 'https://www.nasdaq.com/press-release/ai-adoption-among-small-businesses-surges-41-2025-according-new-survey-thryv-2025-07' },
  { value: '1 in 4', label: 'small businesses use AI in day-to-day operations; 51% are still “exploring”', source: 'Reimagine Main Street / NSBA survey 2025', url: 'https://nsbaadvocate.org/post/news-nsba-highlights-new-data-on-ai-adoption-trends-in-small-businesses' },
  { value: '~60%', label: 'of small businesses use AI for operations, more than double 2023', source: 'U.S. Chamber of Commerce, Empowering Small Business 2025', url: 'https://www.uschamber.com/technology/empowering-small-business-the-impact-of-technology-on-u-s-small-business' },
];

export const guidelines = [
  { title: 'Answer every enquiry in minutes, not days', body: 'Buyers now expect fast, personal responses. Most SMEs lose opportunities in the gap between an enquiry arriving and someone replying. Automate capture, acknowledgement and qualification first.', action: 'Route every form, email and DM into one place with an instant reply and a next step.' },
  { title: 'Be findable where buyers now ask questions', body: 'Discovery is spreading from search results into AI answers. Pages that are crawlable, specific and corroborated elsewhere are more likely to be used as sources.', action: 'Fix crawlability, publish clear service pages and earn genuine third-party mentions.' },
  { title: 'Automate admin before you hire for it', body: 'Repetitive tasks — data entry, follow-ups, reports, scheduling — are where no-code AI workflows deliver the clearest savings for small teams.', action: 'List your 10 most repeated weekly tasks and automate the top three.' },
  { title: 'Build a company brain', body: 'AI is only as useful as the information it can use. Approved prices, policies, FAQs and past proposals turn generic tools into reliable assistants.', action: 'Collect your core documents into one maintained knowledge base.' },
  { title: 'Keep humans on consequential decisions', body: 'Agents still make mistakes and can be manipulated by untrusted input. Supervision protects reputation, clients and data.', action: 'Add approval steps for anything sent to clients, involving money or personal data.' },
  { title: 'Compete on proof, not claims', body: 'As AI makes generic content cheap, verifiable evidence — case studies, reviews, named experts — becomes the differentiator for buyers and machines alike.', action: 'Publish two honest case studies and ask five clients for reviews this quarter.' },
  { title: 'Measure leads, not vanity metrics', body: 'Clicks may fall as answers move into AI interfaces. What matters is whether enquiries and revenue grow.', action: 'Track enquiries by source and ask every new lead how they found you.' },
];

export const quiz = [
  { q: 'How quickly do you typically reply to a new enquiry?', options: ['Within 5 minutes', 'Same day', 'Within 1–2 days', 'Longer / not sure'] },
  { q: 'Where do your enquiries arrive?', options: ['One central system', 'Two or three places', 'Scattered across email, phone and DMs', 'We don’t track them'] },
  { q: 'How much repetitive admin does your team do each week?', options: ['Under 2 hours', '2–5 hours', '5–15 hours', 'More than 15 hours'] },
  { q: 'Do you use AI tools in daily work?', options: ['Yes, inside defined workflows', 'Yes, ad hoc (e.g. ChatGPT)', 'Tried but stopped', 'No'] },
  { q: 'Is your core business knowledge written down?', options: ['Yes, maintained and central', 'Partly, in various files', 'Mostly in people’s heads', 'Not at all'] },
  { q: 'Can people and AI tools find you online?', options: ['Yes, we appear in searches and AI answers', 'We rank for our brand name only', 'Rarely', 'Don’t know'] },
  { q: 'Do you have published proof (case studies, reviews)?', options: ['Several, recent', 'A few', 'Old or informal', 'None'] },
  { q: 'Do you know how many leads each channel brings?', options: ['Yes, tracked monthly', 'Roughly', 'Only total numbers', 'No'] },
];

/** Each answer index scores 3,2,1,0. Returns 0–100. */
export function readinessScore(answers: number[]): number {
  if (answers.length !== quiz.length || answers.some(a => a < 0 || a > 3)) throw new Error('Invalid answers');
  const points = answers.reduce((sum, a) => sum + (3 - a), 0);
  return Math.round((points / (quiz.length * 3)) * 100);
}

export function readinessBand(score: number) {
  if (score >= 75) return { label: 'Ahead of the curve', text: 'Your foundations are strong. The next gains come from connecting systems and supervised AI agents.' };
  if (score >= 45) return { label: 'Exposed in places', text: 'You have some foundations, but gaps in response speed, knowledge or visibility are likely costing you opportunities.' };
  return { label: 'At risk', text: 'Competitors that respond faster and appear in AI answers are likely winning customers you never see. Start with enquiry capture and follow-up.' };
}

export const survivalPath = '/resources/sme-ai-survival-guide';
