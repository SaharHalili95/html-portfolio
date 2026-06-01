import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../utils/paths";
import { products, categories } from "../data/pitbullProductsData";
import type { Category } from "../data/pitbullProductsData";

type Lang = "he" | "en";
type Tab = "about" | "articles" | "stats" | "products" | "orgs" | "training";

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

const slideImages = [
  "images/baby Rambo.png",
  "images/IMG_0662.jpeg",
  "images/IMG_1651.jpeg",
  "images/IMG_4862.jpeg",
  "images/B73FD404-5C8B-4116-949B-35E2B3D4BD86.jpg",
  "images/A7DC8E4F-AF92-400A-80CB-EBBE413F8EAE.jpg",
  "images/4F8FFD3D-BA88-45CF-A1F4-43080E69E03F.jpg",
  "images/7FAC29F2-672D-495D-86A6-659A7C360362.jpg",
  "images/14AC457D-DDB4-4CD6-8EB8-76E16ADAEA47.jpg",
  "images/2A1D3833-0668-49C2-A912-49DC7BA7FC03.jpg",
];

const attsData = [
  { breed: "Labrador", breedHe: "לברדור", score: 91.8 },
  { breed: "Pit Bull", breedHe: "פיטבול", score: 87.4, highlight: true },
  { breed: "Golden Retriever", breedHe: "גולדן רטריבר", score: 85.6 },
  { breed: "German Shepherd", breedHe: "רועה גרמני", score: 85.3 },
  { breed: "Rottweiler", breedHe: "רוטוויילר", score: 84.7 },
  { breed: "Beagle", breedHe: "ביגל", score: 80.3 },
  { breed: "Doberman", breedHe: "דוברמן", score: 79.5 },
  { breed: "Chihuahua", breedHe: "צ'יוואווה", score: 69.6 },
  { breed: "Dachshund", breedHe: "דצ'שונד", score: 67.3 },
];

const articles = {
  he: [
    {
      icon: "fa-chart-bar",
      tag: "מחקר",
      title: "האמת על טמפרמנט הפיטבול: המספרים לא משקרים",
      summary: "בדיקות טמפרמנט של ארגון ATTS מראות שפיטבולים עוברים את הבחינה ב-87.4% - גבוה יותר מגזעי משפחה פופולריים רבים.",
      content: `הארגון האמריקאי לבדיקות טמפרמנט (American Temperament Test Society - ATTS) מבצע הערכות מדעיות מאז 1977. הבדיקה מדמה מצבים יומיומיים ובוחנת תגובת הכלב לגורמים שונים: זרים, רעשים פתאומיים, עצמים מאיימים וסיטואציות לחץ.

תוצאות 2024: פיטבול אמריקאי - 87.4%. גולדן רטריבר - 85.6%. רועה גרמני - 85.3%.

המסקנה של ATTS: אין קשר מובהק בין גזע לבין נטייה לאגרסיביות כלפי בני אדם. הגורמים המשמעותיים הם חינוך, סוציאליזציה וטיפול.`,
      sources: [
        { label: "ATTS - סטטיסטיקות גזע רשמיות", url: "https://atts.org/breed-statistics/" },
        { label: "ATTS - אודות הבדיקה", url: "https://atts.org/about-atts/" },
      ],
    },
    {
      icon: "fa-history",
      tag: "היסטוריה",
      title: "כלבי האמהות: ההיסטוריה האמיתית של הגזע",
      summary: "לפני שהמדיה שינתה את התדמית, פיטבולים היו מוכרים בתור 'כלבי המשפחה האמריקאיים' - ואפילו שימשו כסמל לאומי.",
      content: `במאה ה-19 ובתחילת המאה ה-20, פיטבולים היו ידועים בתור 'Nanny Dogs' - כלבים שנשארו עם ילדים קטנים בעוד ההורים עבדו בשדה.

סמל אמריקאי: Sergeant Stubby, פיטבול, היה כלב המלחמה המפורסם ביותר של מלחמת העולם הראשונה. הוא זכה בדרגת סמל, הציל חיים רבים ופגש שלושה נשיאים.

לוגו RCA Victor עם 'His Master's Voice' - הכלב ניפר שבתמונה האיקונית היה ככל הנראה פיטבול.

שינוי התדמית החל רק בשנות ה-80 בגלל כתבות מדיה סנסציוניות - לא בגלל שינוי בהתנהגות הגזע.`,
      sources: [
        { label: "Wikipedia - American Pit Bull Terrier", url: "https://en.wikipedia.org/wiki/American_Pit_Bull_Terrier" },
        { label: "Wikipedia - Sergeant Stubby", url: "https://en.wikipedia.org/wiki/Sergeant_Stubby" },
      ],
    },
    {
      icon: "fa-dna",
      tag: "מדע",
      title: "גנטיקה ומדע: למה 'גזע מסוכן' הוא מושג שגוי",
      summary: "הארגונים הווטרינריים והמדעיים הגדולים בעולם מסכימים: אין 'גן אגרסיביות' ספציפי לגזע. ההתנהגות נקבעת על ידי גידול, לא גזע.",
      content: `עמדת ה-CDC (המרכז לבקרת מחלות של ארה"ב): "גזע לבדו אינו מנבא סיכון." הסוכנות הפסיקה לעקוב אחר נשיכות לפי גזע ב-2011 כי הנתונים לא הצביעו על מתאם.

AVMA (איגוד הווטרינרים האמריקאי): "חקיקה הממוקדת בגזע ספציפי אינה יעילה ואינה מוצדקת מדעית."

מחקר של האוניברסיטה של Bristol (2019): 80% מהנשיכות הן תוצאה של חוסר סוציאליזציה, התעללות או הזנחה - ללא קשר לגזע.

המסקנה: כלב מסוכן נוצר על ידי בני אדם, לא על ידי גנטיקה.`,
      sources: [
        { label: "PubMed - מחקר על גורמי נשיכות כלבים", url: "https://pubmed.ncbi.nlm.nih.gov/10839846/" },
        { label: "CDC - מניעת נשיכות כלבים", url: "https://www.cdc.gov/injury/" },
        { label: "Frontiers in Veterinary Science (2019) - גורמי נשיכה", url: "https://www.frontiersin.org/articles/10.3389/fvets.2019.00235/full" },
      ],
    },
    {
      icon: "fa-heart",
      tag: "סיפורי הצלחה",
      title: "מהמקלט לתרפיה: פיטבולים שמשנים חיים",
      summary: "אלפי פיטבולים משרתים היום כלבי טיפול, כלבי שירות ושותפים לחיפוש והצלה - לאחר שניצלו ממקלטים.",
      content: `כלבי ה-Vicktory: ב-2007, 47 פיטבולים הוצלו מחוות של Michael Vick שהופעלה ללחימת כלבים. המומחים המליצו להמית את כולם. במקום, ארגונים הצילו אותם - ו-22 מתוכם הפכו לכלבי טיפול מוסמכים.

Dakota: פיטבול שניצל ממקלט ב-2015, מבקר היום ב-200+ בתי חולים ובתי ספר בשנה כחלק מתוכנית טיפול בבעלי חיים.

בישראל: עמותת 'כלב לחיים' ועמותת 'אהבה בין גזעים' מאמנות פיטבולים שניצלו להיות כלבי שירות לנכים ולניצולי טראומה.`,
      sources: [
        { label: "Wikipedia - פרשת מייקל ויק", url: "https://en.wikipedia.org/wiki/Michael_Vick" },
        { label: "Best Friends Animal Society", url: "https://bestfriends.org" },
        { label: "ASPCA - עמדה על פיטבולים", url: "https://www.aspca.org/about-us/aspca-policy-and-position-statements/position-statement-pit-bulls" },
      ],
    },
    {
      icon: "fa-gavel",
      tag: "חקיקה",
      title: "חקיקה ספציפית לגזע: למה היא לא עובדת",
      summary: "מדינות וערים שאסרו פיטבולים לא ראו ירידה בתאונות נשיכה. הולנד ביטלה את האיסור ב-2008 לאחר שהנתונים הוכיחו כישלון.",
      content: `הולנד: אסרה פיטבולים ב-1993. ב-2008 ביטלה את האיסור לאחר שנתוני נשיכות לא ירדו כלל. המדיניות הוחלפה בחינוך בעלים ואכיפת רווחת בעלי חיים.

קלגרי, קנדה: במקום לאסור גזעים, העיר השיקה תוכנית 'Responsible Pet Ownership'. ב-20 שנה ירדו תאונות הנשיכה ב-70%.

עמדת ה-ASPCA, AVMA ו-CDC: כולם מתנגדים לחקיקה ספציפית לגזע ומעדיפים מדיניות המתמקדת בהתנהגות הכלב והאחריות של הבעלים.`,
      sources: [
        { label: "ASPCA - עמדה על חקיקה ספציפית לגזע", url: "https://www.aspca.org/about-us/aspca-policy-and-position-statements/position-statement-breed-specific-legislation" },
        { label: "Wikipedia - חקיקה ספציפית לגזע", url: "https://en.wikipedia.org/wiki/Breed-specific_legislation" },
        { label: "PubMed - יעילות BSL: ניתוח מחקרי", url: "https://pubmed.ncbi.nlm.nih.gov/23948161/" },
      ],
    },
  ],
  en: [
    {
      icon: "fa-chart-bar",
      tag: "Research",
      title: "The Truth About Pit Bull Temperament: Numbers Don't Lie",
      summary: "ATTS temperament tests show Pit Bulls pass at 87.4% - higher than many popular family breeds.",
      content: `The American Temperament Test Society (ATTS) has conducted scientific evaluations since 1977. The test simulates everyday situations and assesses the dog's response to various stimuli: strangers, sudden noises, threatening objects, and stressful scenarios.

2024 results: American Pit Bull Terrier - 87.4%. Golden Retriever - 85.6%. German Shepherd - 85.3%.

ATTS conclusion: There is no significant correlation between breed and tendency toward human-directed aggression. The key factors are upbringing, socialization, and care.`,
      sources: [
        { label: "ATTS - Official Breed Statistics", url: "https://atts.org/breed-statistics/" },
        { label: "ATTS - About the Test", url: "https://atts.org/about-atts/" },
      ],
    },
    {
      icon: "fa-history",
      tag: "History",
      title: "The Nanny Dogs: The Real History of the Breed",
      summary: "Before media changed their image, Pit Bulls were known as 'America's Family Dog' and even served as a national symbol.",
      content: `In the 19th and early 20th century, Pit Bulls were known as 'Nanny Dogs' - kept with small children while parents worked in the fields.

American symbol: Sergeant Stubby, a Pit Bull, was the most decorated war dog of World War I. He earned the rank of Sergeant, saved many lives, and met three presidents.

The RCA Victor logo with 'His Master's Voice' - the iconic dog Nipper was most likely a Pit Bull.

The image change began only in the 1980s due to sensationalist media coverage - not because of any change in the breed's behavior.`,
      sources: [
        { label: "Wikipedia - American Pit Bull Terrier", url: "https://en.wikipedia.org/wiki/American_Pit_Bull_Terrier" },
        { label: "Wikipedia - Sergeant Stubby", url: "https://en.wikipedia.org/wiki/Sergeant_Stubby" },
      ],
    },
    {
      icon: "fa-dna",
      tag: "Science",
      title: "Genetics & Science: Why 'Dangerous Breed' Is a Flawed Concept",
      summary: "The world's leading veterinary and scientific organizations agree: there is no breed-specific 'aggression gene.' Behavior is determined by upbringing, not breed.",
      content: `CDC position: "Breed alone is not a reliable predictor of risk." The agency stopped tracking bites by breed in 2011 because data showed no meaningful correlation.

AVMA (American Veterinary Medical Association): "Breed-specific legislation is not scientifically justified or effective."

University of Bristol study (2019): 80% of bites result from lack of socialization, abuse, or neglect - regardless of breed.

Conclusion: A dangerous dog is created by humans, not genetics.`,
      sources: [
        { label: "PubMed - Study on Dog Bite Risk Factors", url: "https://pubmed.ncbi.nlm.nih.gov/10839846/" },
        { label: "CDC - Dog Bite Prevention", url: "https://www.cdc.gov/injury/" },
        { label: "Frontiers in Veterinary Science (2019) - Bite Risk Factors", url: "https://www.frontiersin.org/articles/10.3389/fvets.2019.00235/full" },
      ],
    },
    {
      icon: "fa-heart",
      tag: "Success Stories",
      title: "From Shelter to Therapy: Pit Bulls Changing Lives",
      summary: "Thousands of Pit Bulls serve today as therapy dogs, service animals, and search-and-rescue partners - after being rescued from shelters.",
      content: `The Vicktory Dogs: In 2007, 47 Pit Bulls were rescued from Michael Vick's dogfighting operation. Experts recommended euthanizing them all. Instead, rescue organizations saved them - and 22 became certified therapy dogs.

Dakota: A Pit Bull rescued from a shelter in 2015, now visits 200+ hospitals and schools per year as part of an animal-assisted therapy program.

In Israel: Organizations like 'Kelev L'Chaim' and 'Ahava Bein Geza'im' train rescued Pit Bulls to become service dogs for people with disabilities and trauma survivors.`,
      sources: [
        { label: "Wikipedia - Michael Vick dogfighting case", url: "https://en.wikipedia.org/wiki/Michael_Vick" },
        { label: "Best Friends Animal Society", url: "https://bestfriends.org" },
        { label: "ASPCA - Position Statement on Pit Bulls", url: "https://www.aspca.org/about-us/aspca-policy-and-position-statements/position-statement-pit-bulls" },
      ],
    },
    {
      icon: "fa-gavel",
      tag: "Legislation",
      title: "Breed-Specific Legislation: Why It Fails",
      summary: "Countries and cities that banned Pit Bulls saw no reduction in bite incidents. The Netherlands repealed its ban in 2008 after data proved it ineffective.",
      content: `Netherlands: Banned Pit Bulls in 1993. Repealed the ban in 2008 after bite statistics showed no improvement. Policy was replaced with owner education and animal welfare enforcement.

Calgary, Canada: Instead of banning breeds, the city launched a 'Responsible Pet Ownership' program. Over 20 years, bite incidents dropped by 70%.

ASPCA, AVMA, and CDC positions: All oppose breed-specific legislation and advocate for policies focused on dog behavior and owner responsibility.`,
      sources: [
        { label: "ASPCA - Position on Breed-Specific Legislation", url: "https://www.aspca.org/about-us/aspca-policy-and-position-statements/position-statement-breed-specific-legislation" },
        { label: "Wikipedia - Breed-Specific Legislation", url: "https://en.wikipedia.org/wiki/Breed-specific_legislation" },
        { label: "PubMed - BSL Effectiveness: Research Analysis", url: "https://pubmed.ncbi.nlm.nih.gov/23948161/" },
      ],
    },
  ],
};

const orgs = {
  he: {
    title: "עמותות ומאלפים",
    subtitle: "ארגונים, עמותות ומקצוענים שפועלים למען הגזע",
    israelTitle: "בישראל",
    rescueTitle: "עמותות הצלה ואדוקציה - עולמי",
    trainersTitle: "מאלפים ומומחים",
    resourcesTitle: "משאבים ומידע",
    israelOrgs: [
      { name: "צפ\"ח - איגוד צער בעלי חיים", desc: "הארגון הוותיק ביותר בישראל לרווחת בעלי חיים, פועל מול הממסד ומקדם חקיקה לטובת כלבים.", url: "https://www.spca.co.il", icon: "fa-shield-alt" },
      { name: "כלב לחיים", desc: "עמותה ישראלית שמאמנת כלבים שניצלו ממקלטים - ביניהם פיטבולים - לשמש ככלבי שירות וטיפול לנכים ולניצולי טראומה.", url: "https://www.facebook.com/kalbalachaim", icon: "fa-heart" },
      { name: "אהבה בין גזעים", desc: "קהילה ישראלית פעילה שמחנכת לגבי גזעים 'בעלי תדמית בעייתית' ומסייעת לבעלי פיטבולים בישראל.", url: "https://www.facebook.com/ahavabeingazaim", icon: "fa-users" },
    ],
    orgs: [
      { name: "Best Friends Animal Society", desc: "הארגון הגדול בארה\"ב להצלת בעלי חיים, מפעיל תוכנית ייעודית לפיטבולים.", url: "https://bestfriends.org", icon: "fa-paw" },
      { name: "Villalobos Rescue Center", desc: "המרכז הגדול בעולם לאימוץ פיטבולים, מוכר מתוכנית 'Pit Bulls & Parolees'.", url: "https://www.facebook.com/VillalobosRescueCenter", icon: "fa-home" },
      { name: "BAD RAP", desc: "ארגון חלוצי מסן פרנסיסקו שהוביל את שינוי החקיקה ואחראי לשחרור כלבי Vick.", url: "https://badrap.org", icon: "fa-fist-raised" },
      { name: "StubbyDog (Wikipedia)", desc: "פרויקט תקשורתי שמפרסם סיפורי הצלחה ומידע מדעי על הגזע.", url: "https://en.wikipedia.org/wiki/Pit_bull", icon: "fa-newspaper" },
      { name: "American Pit Bull Foundation", desc: "מקדם אחריות בעלים ומתנגד לחקיקה ספציפית לגזע.", url: "https://americanpitbullfoundation.com", icon: "fa-balance-scale" },
    ],
    trainers: [
      { name: "Victoria Stilwell", desc: "מאלפת בינלאומית ידועה, מחברת סדרת 'It's Me or the Dog'. תומכת נלהבת בשיטת חיזוק חיובי לפיטבולים.", icon: "fa-star" },
      { name: "IAABC", desc: "האיגוד הבינלאומי של יועצי התנהגות בעלי חיים. רשימת יועצים מוסמכים שמתמחים בגזעים עם 'תדמית בעייתית'.", icon: "fa-graduation-cap" },
      { name: "APDT", desc: "איגוד מאלפי הכלבים המקצועיים - ממליץ על שיטות אילוף ללא עונש לכל הגזעים.", icon: "fa-certificate" },
      { name: "Karen Pryor Academy", desc: "מוסד מוביל באילוף מבוסס חיזוק חיובי. מחקריהם הוכיחו שכלבים 'קשים' מגיבים טוב יותר לשיטה זו.", icon: "fa-book" },
    ],
    resources: [
      { label: "ATTS - נתוני טמפרמנט", url: "https://atts.org/breed-statistics/", icon: "fa-chart-bar" },
      { label: "Wikipedia - חקיקה ספציפית לגזע", url: "https://en.wikipedia.org/wiki/Breed-specific_legislation", icon: "fa-file-medical" },
      { label: "CDC - מניעת נשיכות", url: "https://www.cdc.gov/injury/", icon: "fa-shield-alt" },
      { label: "ASPCA - עמדה על פיטבולים", url: "https://www.aspca.org/about-us/aspca-policy-and-position-statements/position-statement-pit-bulls", icon: "fa-info-circle" },
    ],
  },
  en: {
    title: "Organizations & Trainers",
    subtitle: "Organizations, rescue groups, and professionals working for the breed",
    israelTitle: "In Israel",
    rescueTitle: "Rescue & Advocacy Organizations - Global",
    trainersTitle: "Trainers & Experts",
    resourcesTitle: "Resources & Information",
    israelOrgs: [
      { name: "SPCA Israel (צפ\"ח)", desc: "Israel's oldest animal welfare organization, advocates for animal protection legislation and works with the government on dog welfare.", url: "https://www.spca.co.il", icon: "fa-shield-alt" },
      { name: "Kelev L'Chaim (כלב לחיים)", desc: "Israeli nonprofit that trains rescued shelter dogs - including pit bulls - to become service and therapy dogs for people with disabilities and trauma survivors.", url: "https://www.facebook.com/kalbalachaim", icon: "fa-heart" },
      { name: "Ahava Bein Geza'im (אהבה בין גזעים)", desc: "Active Israeli community educating the public about misunderstood breeds and supporting Pit Bull owners across Israel.", url: "https://www.facebook.com/ahavabeingazaim", icon: "fa-users" },
    ],
    orgs: [
      { name: "Best Friends Animal Society", desc: "The largest no-kill animal rescue organization in the US, runs a dedicated Pit Bull program.", url: "https://bestfriends.org", icon: "fa-paw" },
      { name: "Villalobos Rescue Center", desc: "The world's largest Pit Bull rescue and adoption center, known from 'Pit Bulls & Parolees'.", url: "https://vrc.org", icon: "fa-home" },
      { name: "BAD RAP", desc: "Pioneering San Francisco organization that led legislative change and is responsible for freeing Vick's dogs.", url: "https://badrap.org", icon: "fa-fist-raised" },
      { name: "Pit Bull (Wikipedia)", desc: "A comprehensive, well-sourced article covering breed history, temperament research, and the public perception debate.", url: "https://en.wikipedia.org/wiki/Pit_bull", icon: "fa-newspaper" },
      { name: "American Pit Bull Foundation", desc: "Promotes responsible ownership and opposes breed-specific legislation.", url: "https://americanpitbullfoundation.com", icon: "fa-balance-scale" },
    ],
    trainers: [
      { name: "Victoria Stilwell", desc: "Internationally known trainer, host of 'It's Me or the Dog'. A passionate advocate for positive reinforcement with Pit Bulls.", icon: "fa-star" },
      { name: "IAABC", desc: "International Association of Animal Behavior Consultants. List of certified consultants specializing in breeds with a 'problematic image'.", icon: "fa-graduation-cap" },
      { name: "APDT", desc: "Association of Professional Dog Trainers - recommends punishment-free training methods for all breeds.", icon: "fa-certificate" },
      { name: "Karen Pryor Academy", desc: "Leading institution in positive reinforcement training. Research proved 'difficult' dogs respond better to this method.", icon: "fa-book" },
    ],
    resources: [
      { label: "ATTS - Temperament Statistics", url: "https://atts.org/breed-statistics/", icon: "fa-chart-bar" },
      { label: "Wikipedia - Breed-Specific Legislation", url: "https://en.wikipedia.org/wiki/Breed-specific_legislation", icon: "fa-file-medical" },
      { label: "CDC - Dog Bite Prevention", url: "https://www.cdc.gov/injury/", icon: "fa-shield-alt" },
      { label: "ASPCA - Pit Bull Position Statement", url: "https://www.aspca.org/about-us/aspca-policy-and-position-statements/position-statement-pit-bulls", icon: "fa-info-circle" },
    ],
  },
};

const t = {
  he: {
    backBtn: "חזרה לפורטפוליו",
    langToggle: "English",
    heroTitle: "רמבו",
    heroSubtitle: "פיטבול אמריקאי - שגריר הגזע",
    tabs: [
      { key: "about" as Tab, label: "על רמבו", icon: "fa-paw" },
      { key: "articles" as Tab, label: "מאמרים", icon: "fa-newspaper" },
      { key: "stats" as Tab, label: "נתונים", icon: "fa-chart-bar" },
      { key: "products" as Tab, label: "מוצרים", icon: "fa-shopping-bag" },
      { key: "orgs" as Tab, label: "עמותות ומאלפים", icon: "fa-hands-helping" },
      { key: "training" as Tab, label: "אילוף", icon: "fa-dog" },
    ],
    gallery: "גלריה",
    aboutTitle: "על רמבו",
    aboutText: "רמבו הוא פיטבול אמריקאי שמהווה חלק בלתי נפרד מחיי. מעבר להיותו בעל חיים נאמן, הוא מדגים באופן יומיומי את התכונות החיוביות של גזע הפיטבול - אינטליגנציה, נאמנות, ויכולת התאמה גבוהה לסביבה משפחתית.",
    factsTitle: "תכונות הגזע",
    quote: "הקשר עם בעל חיים נאמן הוא מסע של אחריות, מחויבות, ואהבה הדדית שמעשירה את חיי היום-יום.",
    statsTitle: "השוואת ציוני טמפרמנט - ATTS 2024",
    statsSubtitle: "אחוז כלבים שעברו בדיקת טמפרמנט מקצועית לפי גזע",
    statsNote: "מקור: American Temperament Test Society (atts.org) | ככל שהציון גבוה יותר - הטמפרמנט יציב יותר",
    statCards: [
      { number: "87.4%", label: "ציון ATTS של פיטבול", sub: "גבוה מגולדן רטריבר ורועה גרמני" },
      { number: "#2", label: "דירוג בטמפרמנט", sub: "מתוך 9 גזעים פופולריים נבדקו" },
      { number: "80%", label: "נשיכות מהזנחה ואלימות", sub: "ולא קשורות לגזע - לפי מחקר Bristol 2019" },
      { number: "70%", label: "ירידה בנשיכות בקלגרי", sub: "לאחר תוכנית בעלות אחראית ב-20 שנה" },
      { number: "22/47", label: "כלבי Vick לכלבי טיפול", sub: "לאחר שהומלץ להמית את כולם" },
      { number: "2008", label: "הולנד ביטלה האיסור", sub: "לאחר 15 שנה שבהן לא ירדו הנשיכות" },
    ],
    findingsTitle: "מה אומר המדע",
    findings: [
      { icon: "fa-microscope", text: "ה-CDC הפסיק לעקוב אחר נשיכות לפי גזע ב-2011 כי הנתונים לא הצביעו על קשר משמעותי בין גזע לסיכון." },
      { icon: "fa-university", text: "מחקרי אוניברסיטת Bristol (2019): הגורמים המרכזיים לנשיכות הם חוסר סוציאליזציה, התעללות, או הזנחה - ללא קשר לגזע." },
      { icon: "fa-globe", text: "ארגוני הבריאות הגדולים בעולם - CDC, ASPCA, ו-AKC - מתנגדים לחקיקה ספציפית לגזע ומעדיפים אכיפה המבוססת על התנהגות הכלב." },
      { icon: "fa-award", text: "פיטבולים שימשו ככלבי צבא, כלבי משטרה, כלבי חיפוש והצלה, וכלבי טיפול רגשי לאורך כל ההיסטוריה האמריקאית." },
    ],
    biteContextTitle: "הקשר הנשיכות - הסיפור שמאחורי המספרים",
    biteContextSub: "מחקרים מראים שנשיכות כלבים קשורות לנסיבות, לא לגזע",
    biteContext: [
      { label: "כלבים כבולים ומבודדים", pct: 25, note: "כלבים שנכבלו לאורך זמן מפגינים אגרסיביות גבוהה יותר" },
      { label: "התעללות או הזנחה", pct: 25, note: "כלב שסבל מאלימות מגיב באלימות" },
      { label: "הגנה על טריטוריה", pct: 20, note: "חדירה לשטח הכלב ללא הכנסת הכלב לחברה" },
      { label: "גירוי של זר לא מוכר", pct: 20, note: "ריצה לעבר הכלב, תנועות חדות, או אינטראקציה לא נכונה" },
      { label: "נסיבות לא ידועות", pct: 10, note: "מקרים שבהם הגורם לא תועד" },
    ],
    mythsTitle: "מיתוסים מול עובדות",
    myths: [
      {
        myth: "לפיטבולים יש 'לסת נועלת'",
        fact: "שקר. לפיטבול אין שום מבנה אנטומי מיוחד בלסת. עובדה שאושרה על ידי הרופא הווטרינרי המוביל ד\"ר I. Lehr Brisbin מאוניברסיטת Georgia.",
        icon: "fa-times-circle",
      },
      {
        myth: "פיטבולים אגרסיביים כלפי בני אדם מטבעם",
        fact: "ההפך הוא הנכון. גידול מסורתי דרש שפיטבולים יהיו ידידותיים לבני אדם. עד כה עוברים 87.4% מבחינות הטמפרמנט של ATTS.",
        icon: "fa-times-circle",
      },
      {
        myth: "איסור פיטבולים יפחית נשיכות",
        fact: "הולנד אסרה ב-1993, ביטלה ב-2008. קלגרי ללא איסור - 70% פחות נשיכות. האיסור לא עובד לפי הנתונים.",
        icon: "fa-times-circle",
      },
      {
        myth: "פיטבול שנחשף לאלימות לא ניתן לשיקום",
        fact: "מתוך 47 כלבי Michael Vick שהיו קורבנות לחימה, 22 הפכו לכלבי טיפול מוסמכים. שיקום אפשרי עם הטיפול הנכון.",
        icon: "fa-times-circle",
      },
    ],
    timelineTitle: "ציר זמן - מהכלב האמריקאי עד היום",
    timeline: [
      { year: "1900s", text: "פיטבולים ידועים ככלבי משפחה אמריקאיים - 'כלבי האמהות'. מוצגים בפרסומות, סרטים ועיתונים." },
      { year: "1914-1918", text: "מלחמת העולם הראשונה: Sergeant Stubby, פיטבול, הכלב הצבאי המעוטר ביותר בהיסטוריה האמריקאית." },
      { year: "1980s", text: "גל כתבות מדיה סנסציוניות משנה את תדמית הגזע. תחילת חקיקות ספציפיות לגזע בערים שונות." },
      { year: "1993", text: "הולנד אוסרת פיטבולים. ציפייה לירידה בנשיכות - שלא התממשה." },
      { year: "2007", text: "פרשת Michael Vick: 47 פיטבולים ניצלו, 22 הפכו לכלבי טיפול. שינוי תפיסתי בתקשורת." },
      { year: "2008", text: "הולנד מבטלת את האיסור לאחר 15 שנה. הנתונים הוכיחו: האיסור לא עובד." },
      { year: "2011", text: "ה-CDC מפסיק לעקוב אחר נשיכות לפי גזע - הנתונים לא תומכים בגישה הזו." },
      { year: "2019", text: "מחקר Bristol מוכיח: 80% מהנשיכות קשורות להזנחה ואלימות - לא לגזע." },
      { year: "2020s", text: "גל ביטולי BSL ברחבי ארה\"ב. ערים וולונטריות מחליפות איסורי גזע בתוכניות בעלות אחראית." },
    ],
    readMore: "קרא עוד",
    readLess: "סגור",
    buyNow: "קנה עכשיו באמזון",
    priceLabel: "טווח מחירים:",
    slides: [
      "בן חודשיים - תחילת המסע המשותף",
      "אנרגיה וחיוניות",
      "רגעי מנוחה",
      "נאמנות בלתי מותנית",
      "פעילות בחיק הטבע",
      "אופי ידידותי",
      "חוזק ופאר",
      "חיי יומיום",
      "ביטחון עצמי",
      "קשר עמוק",
    ],
    facts: [
      { icon: "fa-heart", title: "נאמנות גבוהה", description: "פיטבולים מפגינים רמת נאמנות יוצאת דופן. הם יוצרים קשר רגשי עמוק ונחשבים לבעלי חיים מסורים במיוחד." },
      { icon: "fa-smile", title: "כלבי משפחה", description: "היסטורית שימשו ככלבי משפחה והוכיחו סבלנות וידידותיות. עם חינוך נכון, הם מתאימים לחיים משפחתיים." },
      { icon: "fa-brain", title: "אינטליגנציה", description: "בעלי יכולת למידה גבוהה ומוטיבציה חזקה. מגיבים היטב לאילוף חיובי." },
      { icon: "fa-running", title: "אנרגטיים", description: "שותפים מצוינים לפעילות ספורטיבית וטיולים. דורשים פעילות יומיומית של 30-60 דקות." },
      { icon: "fa-hands-helping", title: "כלבי שירות", description: "משמשים כלבי טיפול רגשי, חיפוש והצלה, וכלבי שירות לנכים." },
      { icon: "fa-shield-alt", title: "מאמינים ונאמנים", description: "ידועים באומץ ובנכונותם להגן על משפחתם. משלבים ערנות עם יחס ידידותי." },
    ],
    training: {
      principlesTitle: "5 עקרונות הזהב",
      principlesSub: "הבסיס לאילוף מוצלח של כל פיטבול",
      stagesTitle: "שלבי אילוף לפי גיל",
      stagesSub: "כל שלב בחיי הכלב דורש גישה שונה",
      commandsTitle: "פקודות בסיסיות",
      commandsSub: "שמונה פקודות שכל פיטבול צריך לדעת",
      dosTitle: "מה כן לעשות",
      dontsTitle: "מה לא לעשות",
      fieldTipsTitle: "עצות מניסיון",
      fieldTipsSub: "מניסיון של מאלפים שעובדים עם הגזע",
      quote: "פיטבול שמקבל אילוף נכון, גבולות ברורים ואהבה - הופך לאחד הכלבים הנאמנים והמצייתים שיש.",
      principles: [
        { icon: "fa-star", title: "חיזוק חיובי בלבד", desc: "פיטבולים מגיבים בצורה יוצאת דופן לחיזוק חיובי. תגמול מיידי בחטיף, שבח, או משחק מיד עם ביצוע הפקודה. עונשים גורמים לחרדה ולתוצאה הפוכה.", color: "#007acc" },
        { icon: "fa-redo", title: "עקביות מוחלטת", desc: "כל בני הבית חייבים להשתמש באותן פקודות ואותם חוקים. פיטבולים חכמים וינצלו כל חוסר עקביות. קבעו חוקים ברורים ואל תזוזו מהם.", color: "#16a34a" },
        { icon: "fa-users", title: "סוציאליזציה מוקדמת", desc: "חשיפה מבוקרת לאנשים, כלבים, רעשים וסביבות מגיל צעיר היא קריטית. פיטבול מסוציאל היטב הוא כלב בטוח ורגוע בכל סיטואציה.", color: "#9333ea" },
        { icon: "fa-bolt", title: "פעילות גופנית מספקת", desc: "כלב עייף הוא כלב טוב. פיטבולים צריכים 60-90 דקות פעילות ביום. כלב עם עודף אנרגיה יהיה קשה לאילוף - תשחקו לפני האימון.", color: "#e05a2b" },
        { icon: "fa-brain", title: "גירוי מנטלי", desc: "פיטבולים חכמים וזקוקים לאתגרים מנטליים כמו לפיזיים. צעצועי חשיבה, חיפוש חטיפים, ואימוני טריקים מפחיתים שעמום ומחזקים את הקשר.", color: "#0891b2" },
      ],
      stages: [
        {
          age: "8 שבועות - 4 חודשים", label: "גור", icon: "fa-baby", color: "#f59e0b",
          goals: ["הכרת שמו וקשר עין", "שב, שכב - פקודות ראשונות", "הרגל שירותים", "חשיפה ל-100 אנשים שונים", "טיפול: נגיעה באוזניים, רגליים, פה"],
          tip: "גיל הגור הוא החלון החשוב ביותר לסוציאליזציה. כל חוויה חיובית עכשיו תקבע את אישיותו לכל חייו.",
        },
        {
          age: "4 חודשים - שנה", label: "גדלי סורר", icon: "fa-fire", color: "#e05a2b",
          goals: ["הליכה רגועה ברצועה", "שהייה (stay) עד דקה", "בוא - גם מרחק", "עזוב - שחרר כל עצם", "שב ברדיוס של 5 מטר מכלבים אחרים"],
          tip: "גיל ההתבגרות הוא האתגר הגדול. הכלב ינסה את הגבולות. עקביות ושגרה יעברו את התקופה הזו בהצלחה.",
        },
        {
          age: "שנה ומעלה", label: "בוגר", icon: "fa-award", color: "#007acc",
          goals: ["פקודות מרחוק ללא ראייה", "שחרור רצועה בסביבה מבוקרת", "טריקים מתקדמים", "קנ\"ג / ספורט כלבים", "כלב טיפול (אם מתאים)"],
          tip: "פיטבול בוגר שעבר אילוף נכון הוא אחד הכלבים הנוחים ביותר לחיות איתו - חכם, מציית ואוהב.",
        },
      ],
      commands: [
        { he: "שב", en: "Sit", icon: "fa-hand-point-down", tip: "בקש שישב לפני כל ארוחה ולפני שיוצאים לטיול" },
        { he: "שכב", en: "Down", icon: "fa-bed", tip: "פקודת רגיעה - שימושית מאוד כשיש אורחים" },
        { he: "עמוד", en: "Stand", icon: "fa-male", tip: "חיוני לבדיקות וטרינר ולסריקות גוף" },
        { he: "בוא", en: "Come", icon: "fa-running", tip: "אף פעם אל תענשו כלב שבא אליכם, אפילו אם לקח זמן" },
        { he: "שהה", en: "Stay", icon: "fa-hand-paper", tip: "התחילו עם 3 שניות ובנו בהדרגה עד דקות" },
        { he: "עזוב", en: "Leave it", icon: "fa-times", tip: "פקודת בטיחות - מלמדת לשחרר כל עצם בפה" },
        { he: "שקט", en: "Quiet", icon: "fa-volume-mute", tip: "לתגמל שקט, לא לצעוק על נביחה - זה מחמיר" },
        { he: "מקום", en: "Place", icon: "fa-map-marker-alt", tip: "הכלב הולך למקום קבוע (שטיח / מיטה) ונשאר שם" },
      ],
      dos: [
        "אמנו 2-3 פעמים ביום, כל אימון 5-10 דקות",
        "תגמלו מיידית - תוך שנייה מביצוע הפקודה",
        "הגמישו לפני אימון - כלב ממוקד לומד טוב יותר",
        "סיימו כל אימון בהצלחה - גם אם פשוטה",
        "שלבו אילוף בחיי יומיום - 'שב' לפני הקערה, 'שהה' לפני הדלת",
        "תעדו התקדמות - עוזר לזהות מה עובד",
      ],
      donts: [
        "אל תשתמשו בעונשים פיזיים - יוצרים חרדה ואגרסיביות",
        "אל תחזרו על פקודה 10 פעמים - אם לא מצייתים, חזרו לבסיסים",
        "אל תאמנו כלב עייף, חולה, או לאחר ארוחה כבדה",
        "אל תכעסו בזמן אימון - הכלב קולט את מצב רוחכם",
        "אל תדלגו על סוציאליזציה - זה הבסיס לכל השאר",
        "אל תחכו - התחילו אילוף מהיום הראשון בבית",
      ],
      fieldTips: [
        { icon: "fa-lightbulb", title: "החטיף הנכון", text: "השתמשו בחטיפים קטנים וריחניים. פיטבולים מונעים מאוכל ויעשו כמעט הכל בשביל חטיף טוב. הפחיתו את גודל הארוחה ביום שמאמנים הרבה." },
        { icon: "fa-clock", title: "תזמון מדויק", text: "הכלב מקשר את התגמול לפעולה האחרונה שעשה. תגמלו תוך פחות משנייה - או השתמשו ב-clicker כדי 'לסמן' את הרגע המדויק." },
        { icon: "fa-heart", title: "קשר לפני פקודות", text: "10 דקות משחק חופשי לפני אימון יוצרות קשר ומוטיבציה. כלב שנהנה ממכם ילמד כפליים מהר. אילוף הוא הזמן ביחד, לא רק ביצועים." },
        { icon: "fa-medal", title: "כיתות אילוף", text: "כיתה קבוצתית מוסיפה גם סוציאליזציה. חפשו מאלף שמשתמש אך ורק בחיזוק חיובי - אם רואים שרשרת מחנק, צאו מיד." },
      ],
    },
  },
  en: {
    backBtn: "Back to Portfolio",
    langToggle: "עברית",
    heroTitle: "Rambo",
    heroSubtitle: "American Pit Bull - Breed Ambassador",
    tabs: [
      { key: "about" as Tab, label: "About Rambo", icon: "fa-paw" },
      { key: "articles" as Tab, label: "Articles", icon: "fa-newspaper" },
      { key: "stats" as Tab, label: "Statistics", icon: "fa-chart-bar" },
      { key: "products" as Tab, label: "Products", icon: "fa-shopping-bag" },
      { key: "orgs" as Tab, label: "Organizations", icon: "fa-hands-helping" },
      { key: "training" as Tab, label: "Training", icon: "fa-dog" },
    ],
    gallery: "Gallery",
    aboutTitle: "About Rambo",
    aboutText: "Rambo is an American Pit Bull who is an inseparable part of my life. Beyond being a loyal companion, he demonstrates daily the positive traits of the Pit Bull breed - intelligence, loyalty, and a remarkable ability to adapt to family life.",
    factsTitle: "Breed Traits",
    quote: "The bond with a loyal pet is a journey of responsibility, commitment, and mutual love that enriches everyday life.",
    statsTitle: "Temperament Score Comparison - ATTS 2024",
    statsSubtitle: "Percentage of dogs that passed professional temperament testing by breed",
    statsNote: "Source: American Temperament Test Society (atts.org) | Higher score = more stable temperament",
    statCards: [
      { number: "87.4%", label: "Pit Bull ATTS Score", sub: "Higher than Golden Retriever & German Shepherd" },
      { number: "#2", label: "Temperament Ranking", sub: "Out of 9 popular breeds tested" },
      { number: "80%", label: "Bites from neglect & abuse", sub: "Not breed-related - Bristol University study 2019" },
      { number: "70%", label: "Bite reduction in Calgary", sub: "After responsible ownership program over 20 years" },
      { number: "22/47", label: "Vick dogs became therapy dogs", sub: "After experts recommended euthanizing all 47" },
      { number: "2008", label: "Netherlands repealed ban", sub: "After 15 years with no reduction in bite incidents" },
    ],
    findingsTitle: "What Science Says",
    findings: [
      { icon: "fa-microscope", text: "The CDC stopped tracking bites by breed in 2011 because data showed no meaningful correlation between breed and bite risk." },
      { icon: "fa-university", text: "University of Bristol study (2019): Key factors in bites are lack of socialization, abuse, or neglect - regardless of breed." },
      { icon: "fa-globe", text: "Major health organizations - CDC, ASPCA, and AKC - all oppose breed-specific legislation and prefer behavior-based enforcement." },
      { icon: "fa-award", text: "Pit Bulls have served as military dogs, police K9s, search-and-rescue animals, and emotional therapy dogs throughout American history." },
    ],
    biteContextTitle: "Bite Context - The Story Behind the Numbers",
    biteContextSub: "Research shows dog bites are linked to circumstances, not breed",
    biteContext: [
      { label: "Chained / isolated dogs", pct: 25, note: "Dogs kept on chains long-term show significantly higher aggression" },
      { label: "Abused or neglected dogs", pct: 25, note: "A dog that suffered violence responds with violence" },
      { label: "Territory protection", pct: 20, note: "Intruding into the dog's space without socialization" },
      { label: "Unfamiliar person stimulus", pct: 20, note: "Running toward the dog, sharp movements, or incorrect interaction" },
      { label: "Unknown circumstances", pct: 10, note: "Cases where the cause was not documented" },
    ],
    mythsTitle: "Myths vs. Facts",
    myths: [
      {
        myth: "Pit Bulls have a 'locking jaw'",
        fact: "False. Pit Bulls have no special anatomical jaw structure. Confirmed by leading veterinarian Dr. I. Lehr Brisbin of the University of Georgia.",
        icon: "fa-times-circle",
      },
      {
        myth: "Pit Bulls are naturally aggressive toward people",
        fact: "The opposite is true. Traditional breeding required Pit Bulls to be friendly toward humans. Today 87.4% pass ATTS temperament tests.",
        icon: "fa-times-circle",
      },
      {
        myth: "Banning Pit Bulls will reduce bite incidents",
        fact: "Netherlands banned in 1993, repealed in 2008. Calgary with no ban saw 70% fewer bites. The data shows bans don't work.",
        icon: "fa-times-circle",
      },
      {
        myth: "A Pit Bull exposed to violence cannot be rehabilitated",
        fact: "Of 47 of Michael Vick's fighting dogs, 22 became certified therapy dogs. Rehabilitation is possible with proper care.",
        icon: "fa-times-circle",
      },
    ],
    timelineTitle: "Timeline - From America's Dog to Today",
    timeline: [
      { year: "1900s", text: "Pit Bulls known as America's family dogs - 'Nanny Dogs'. Featured in advertisements, films, and newspapers." },
      { year: "1914-18", text: "World War I: Sergeant Stubby, a Pit Bull, became the most decorated war dog in American history." },
      { year: "1980s", text: "A wave of sensationalist media coverage shifts the breed's image. Breed-specific legislation begins in various cities." },
      { year: "1993", text: "Netherlands bans Pit Bulls. Expected reduction in bites never materialized." },
      { year: "2007", text: "Michael Vick case: 47 Pit Bulls rescued, 22 became therapy dogs. A turning point in media perception." },
      { year: "2008", text: "Netherlands repeals its ban after 15 years. Data proved: the ban didn't work." },
      { year: "2011", text: "CDC stops tracking bites by breed - the data does not support that approach." },
      { year: "2019", text: "Bristol study proves: 80% of bites linked to neglect and abuse - not breed." },
      { year: "2020s", text: "Wave of BSL repeals across the US. Cities replace breed bans with responsible ownership programs." },
    ],
    readMore: "Read more",
    readLess: "Close",
    buyNow: "Buy Now on Amazon",
    priceLabel: "Price range:",
    slides: [
      "Two months old - the beginning of our journey",
      "Energy and vitality",
      "Moments of rest",
      "Unconditional loyalty",
      "Activity in nature",
      "Friendly personality",
      "Strength and grace",
      "Everyday life",
      "Self-confidence",
      "A deep bond",
    ],
    facts: [
      { icon: "fa-heart", title: "High Loyalty", description: "Pit Bulls display exceptional loyalty. They form deep emotional bonds and are considered especially devoted animals." },
      { icon: "fa-smile", title: "Family Dogs", description: "Historically served as family dogs and demonstrated patience and friendliness. With proper training, they are well-suited for family life." },
      { icon: "fa-brain", title: "Intelligence", description: "High learning ability and strong motivation. They respond well to positive reinforcement training." },
      { icon: "fa-running", title: "Energetic", description: "Excellent partners for sports and hiking. Require 30-60 minutes of daily activity." },
      { icon: "fa-hands-helping", title: "Service Dogs", description: "Serve as therapy dogs, search-and-rescue animals, and service dogs for people with disabilities." },
      { icon: "fa-shield-alt", title: "Loyal & Brave", description: "Known for courage and willingness to protect their families. Combine alertness with a friendly attitude." },
    ],
    training: {
      principlesTitle: "5 Golden Principles",
      principlesSub: "The foundation for successful training of any Pit Bull",
      stagesTitle: "Training Stages by Age",
      stagesSub: "Each stage of a dog's life requires a different approach",
      commandsTitle: "Essential Commands",
      commandsSub: "Eight commands every Pit Bull should know",
      dosTitle: "Do's",
      dontsTitle: "Don'ts",
      fieldTipsTitle: "Field Advice",
      fieldTipsSub: "From the experience of trainers who work with the breed",
      quote: "A Pit Bull that receives proper training, clear boundaries, and love becomes one of the most loyal and obedient dogs there is.",
      principles: [
        { icon: "fa-star", title: "Positive Reinforcement Only", desc: "Pit Bulls respond exceptionally well to positive reinforcement. Reward immediately with a treat, praise, or play the moment a command is executed. Punishment causes anxiety and backfires.", color: "#007acc" },
        { icon: "fa-redo", title: "Absolute Consistency", desc: "Everyone in the household must use the same commands and the same rules. Pit Bulls are smart and will exploit any inconsistency. Set clear rules and never waver from them.", color: "#16a34a" },
        { icon: "fa-users", title: "Early Socialization", desc: "Controlled exposure to people, dogs, sounds, and environments from a young age is critical. A well-socialized Pit Bull is a safe, calm dog in any situation.", color: "#9333ea" },
        { icon: "fa-bolt", title: "Adequate Exercise", desc: "A tired dog is a good dog. Pit Bulls need 60-90 minutes of activity per day. A dog with excess energy will be difficult to train - play before the training session.", color: "#e05a2b" },
        { icon: "fa-brain", title: "Mental Stimulation", desc: "Pit Bulls are intelligent and need mental challenges as much as physical ones. Puzzle toys, scent games, and trick training reduce boredom and strengthen the bond.", color: "#0891b2" },
      ],
      stages: [
        {
          age: "8 weeks - 4 months", label: "Puppy", icon: "fa-baby", color: "#f59e0b",
          goals: ["Name recognition and eye contact", "Sit, Down - first commands", "Potty training", "Exposure to 100 different people", "Handling: ears, paws, mouth"],
          tip: "The puppy period is the most important window for socialization. Every positive experience now shapes his personality for life.",
        },
        {
          age: "4 months - 1 year", label: "Adolescent", icon: "fa-fire", color: "#e05a2b",
          goals: ["Calm leash walking", "Stay up to one minute", "Come - from a distance", "Leave it - release any object", "Sit within 5 meters of other dogs"],
          tip: "Adolescence is the big challenge. The dog will test the boundaries. Consistency and routine will get you through this period successfully.",
        },
        {
          age: "1 year and up", label: "Adult", icon: "fa-award", color: "#007acc",
          goals: ["Commands from a distance out of sight", "Off-leash in controlled environments", "Advanced tricks", "Dog sports / K9 work", "Therapy dog (if suitable)"],
          tip: "A well-trained adult Pit Bull is one of the easiest dogs to live with - smart, obedient, and loving.",
        },
      ],
      commands: [
        { he: "שב", en: "Sit", icon: "fa-hand-point-down", tip: "Ask for a Sit before every meal and before going out for a walk" },
        { he: "שכב", en: "Down", icon: "fa-bed", tip: "Calm command - very useful when guests arrive" },
        { he: "עמוד", en: "Stand", icon: "fa-male", tip: "Essential for vet checks and full body scans" },
        { he: "בוא", en: "Come", icon: "fa-running", tip: "Never punish a dog that comes to you, even if it took a while" },
        { he: "שהה", en: "Stay", icon: "fa-hand-paper", tip: "Start with 3 seconds and gradually build up to minutes" },
        { he: "עזוב", en: "Leave it", icon: "fa-times", tip: "Safety command - teaches to drop any object in the mouth" },
        { he: "שקט", en: "Quiet", icon: "fa-volume-mute", tip: "Reward silence, don't yell at barking - it makes it worse" },
        { he: "מקום", en: "Place", icon: "fa-map-marker-alt", tip: "Dog goes to a fixed spot (mat / bed) and stays there" },
      ],
      dos: [
        "Train 2-3 times a day, each session 5-10 minutes",
        "Reward immediately - within one second of the command being performed",
        "Exercise before training - a focused dog learns better",
        "End every session on a success - even a simple one",
        "Integrate training into daily life - 'Sit' before the bowl, 'Stay' before the door",
        "Track progress - helps identify what's working",
      ],
      donts: [
        "Never use physical punishment - creates anxiety and aggression",
        "Don't repeat a command 10 times - if not obeying, go back to basics",
        "Don't train a tired, sick, or recently fed dog",
        "Don't get angry during training - the dog reads your mood",
        "Don't skip socialization - it's the foundation of everything else",
        "Don't wait - start training from day one at home",
      ],
      fieldTips: [
        { icon: "fa-lightbulb", title: "The Right Treat", text: "Use small, smelly treats. Pit Bulls are food-motivated and will do almost anything for a good treat. Reduce meal size on heavy training days." },
        { icon: "fa-clock", title: "Precise Timing", text: "The dog links the reward to the last action he performed. Reward within less than one second - or use a clicker to mark the exact moment." },
        { icon: "fa-heart", title: "Bond Before Commands", text: "10 minutes of free play before training creates connection and motivation. A dog that enjoys your company learns twice as fast. Training is bonding time, not just performance." },
        { icon: "fa-medal", title: "Training Classes", text: "Group classes also add socialization. Look for a trainer who uses only positive reinforcement - if you see a choke chain, leave immediately." },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Rambo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lang, setLang] = useState<Lang>("he");
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const tr = t[lang];
  const isRtl = lang === "he";
  const heroImage = getImagePath("images/14AC457D-DDB4-4CD6-8EB8-76E16ADAEA47.jpg");

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slideImages.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slideImages.length) % slideImages.length);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    if (activeTab !== "about") return;
    const iv = setInterval(nextSlide, 5000);
    return () => clearInterval(iv);
  }, [activeTab]);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") nextSlide();
      if (e.key === "ArrowRight") prevSlide();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? "star-filled" : "star-empty"}`} />
    ));

  const chartData = attsData.map((d) => ({
    ...d,
    name: isRtl ? d.breedHe : d.breed,
  }));
  // bar fill: scale score from 60-95 range to 0-100%
  const barPct = (score: number) => `${Math.round(((score - 60) / 35) * 100)}%`;

  return (
    <div className="rambo-page" dir={isRtl ? "rtl" : "ltr"}>

      {/* Hero */}
      <div
        className="rambo-hero-full"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(${heroImage})` }}
      >
        <div className="rambo-hero-nav">
          <Link to="/" className="back-btn">
            <i className={`fas fa-arrow-${isRtl ? "right" : "left"}`}></i> {tr.backBtn}
          </Link>
          <button className="lang-toggle-btn" onClick={() => setLang(lang === "he" ? "en" : "he")}>
            <i className="fas fa-language"></i> {tr.langToggle}
          </button>
        </div>
        <div className="rambo-hero-content">
          <h1>{tr.heroTitle}</h1>
          <p>{tr.heroSubtitle}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="rambo-tabs-bar">
        <div className="rambo-tabs-inner">
          {tr.tabs.map((tab) => (
            <button
              key={tab.key}
              className={`rambo-tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <i className={`fas ${tab.icon}`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="rambo-content-area">

        {/* About Tab */}
        {activeTab === "about" && (
          <div className="rambo-tab-content">
            <section className="rambo-gallery">
              <h2><i className="fas fa-images"></i> {tr.gallery}</h2>
              <div className="gallery-slider">
                <div className="slider-container">
                  <button className="slider-btn prev-btn" onClick={prevSlide}>
                    <i className={`fas fa-chevron-${isRtl ? "right" : "left"}`}></i>
                  </button>
                  <div className="slider-track">
                    <div className="slide">
                      <img src={getImagePath(slideImages[currentSlide])} alt="Rambo" />
                      <p className="slide-caption">{tr.slides[currentSlide]}</p>
                    </div>
                  </div>
                  <button className="slider-btn next-btn" onClick={nextSlide}>
                    <i className={`fas fa-chevron-${isRtl ? "left" : "right"}`}></i>
                  </button>
                </div>
                <div className="slider-dots">
                  {slideImages.map((_, i) => (
                    <button key={i} className={`dot ${i === currentSlide ? "active" : ""}`} onClick={() => setCurrentSlide(i)} />
                  ))}
                </div>
              </div>
            </section>

            <section className="rambo-story">
              <h2><i className="fas fa-paw"></i> {tr.aboutTitle}</h2>
              <p>{tr.aboutText}</p>
            </section>

            <section className="pitbull-facts">
              <h2><i className="fas fa-star"></i> {tr.factsTitle}</h2>
              <div className="fact-grid">
                {tr.facts.map((fact, i) => (
                  <div key={i} className="fact-card">
                    <i className={`fas ${fact.icon} fact-icon`}></i>
                    <h3>{fact.title}</h3>
                    <p>{fact.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rambo-quote">
              <blockquote>
                <i className="fas fa-quote-right quote-icon"></i>
                <p>"{tr.quote}"</p>
              </blockquote>
            </section>

          </div>
        )}

        {/* Articles Tab */}
        {activeTab === "articles" && (
          <div className="rambo-tab-content">
            <div className="articles-grid">
              {articles[lang].map((article, i) => (
                <div key={i} className={`article-card ${expandedArticle === i ? "expanded" : ""}`}>
                  <div className="article-header">
                    <div className="article-meta">
                      <span className="article-tag"><i className={`fas ${article.icon}`}></i> {article.tag}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p className="article-summary">{article.summary}</p>
                  </div>
                  {expandedArticle === i && (
                    <div className="article-body">
                      {article.content.split("\n\n").map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                      {article.sources.length > 0 && (
                        <div className="article-sources">
                          <span className="sources-label"><i className="fas fa-link"></i> {isRtl ? "מקורות:" : "Sources:"}</span>
                          {article.sources.map((src, k) => (
                            <a key={k} href={src.url} target="_blank" rel="noopener noreferrer" className="source-link">
                              {src.label} <i className="fas fa-external-link-alt"></i>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  <button
                    className="article-toggle-btn"
                    onClick={() => setExpandedArticle(expandedArticle === i ? null : i)}
                  >
                    {expandedArticle === i ? tr.readLess : tr.readMore}
                    <i className={`fas fa-chevron-${expandedArticle === i ? "up" : "down"}`}></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === "stats" && (
          <div className="rambo-tab-content">
            <div className="stat-cards-grid">
              {tr.statCards.map((card, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-number">{card.number}</div>
                  <div className="stat-card-label">{card.label}</div>
                  <div className="stat-card-sub">{card.sub}</div>
                </div>
              ))}
            </div>

            <div className="stats-header">
              <h2>{tr.statsTitle}</h2>
              <p>{tr.statsSubtitle}</p>
            </div>
            <div className="atts-chart">
              {chartData.map((breed, i) => (
                <div key={i} className={`breed-row ${breed.highlight ? "breed-highlight" : ""}`}>
                  <div className="breed-rank">#{i + 1}</div>
                  <div className="breed-name-label">{breed.name}</div>
                  <div className="breed-bar-track">
                    <div className="breed-bar-fill" style={{ width: barPct(breed.score) }} />
                  </div>
                  <div className="breed-score-label">{breed.score}%</div>
                </div>
              ))}
            </div>
            <p className="stats-note"><i className="fas fa-info-circle"></i> {tr.statsNote}</p>

            <div className="findings-section">
              <h2><i className="fas fa-flask"></i> {tr.findingsTitle}</h2>
              <div className="findings-grid">
                {tr.findings.map((f, i) => (
                  <div key={i} className="finding-card">
                    <i className={`fas ${f.icon} finding-icon`}></i>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bite-context-section">
              <div className="stats-header">
                <h2>{tr.biteContextTitle}</h2>
                <p>{tr.biteContextSub}</p>
              </div>
              <div className="bite-context-chart">
                {tr.biteContext.map((item, i) => (
                  <div key={i} className="bite-row">
                    <div className="bite-label">{item.label}</div>
                    <div className="bite-bar-track">
                      <div className="bite-bar-fill" style={{ width: `${item.pct * 4}%` }} />
                      <span className="bite-pct">{item.pct}%</span>
                    </div>
                    <div className="bite-note">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="myths-section">
              <div className="stats-header">
                <h2>{tr.mythsTitle}</h2>
              </div>
              <div className="myths-grid">
                {tr.myths.map((m, i) => (
                  <div key={i} className="myth-card">
                    <div className="myth-row">
                      <i className="fas fa-times-circle myth-x"></i>
                      <div>
                        <div className="myth-label">{isRtl ? "מיתוס" : "Myth"}</div>
                        <p className="myth-text">{m.myth}</p>
                      </div>
                    </div>
                    <div className="fact-row">
                      <i className="fas fa-check-circle fact-check"></i>
                      <div>
                        <div className="fact-label">{isRtl ? "עובדה" : "Fact"}</div>
                        <p className="fact-text">{m.fact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="timeline-section">
              <div className="stats-header">
                <h2>{tr.timelineTitle}</h2>
              </div>
              <div className="timeline">
                {tr.timeline.map((ev, i) => (
                  <div key={i} className="timeline-event">
                    <div className="timeline-year">{ev.year}</div>
                    <div className="timeline-dot" />
                    <div className="timeline-text">{ev.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="rambo-tab-content">
            <section className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`category-btn ${activeCategory === cat.key ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  <i className={`fas ${cat.icon}`}></i>
                  <span>{isRtl ? cat.labelHe : cat.labelEn}</span>
                </button>
              ))}
            </section>
            <section className="product-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-area">
                    <img src={product.image} alt={isRtl ? product.nameHe : product.nameEn} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <h3>{isRtl ? product.nameHe : product.nameEn}</h3>
                    <p className="product-desc">{isRtl ? product.descHe : product.descEn}</p>
                    <div className="product-rating">{renderStars(product.rating)}</div>
                    <div className="product-price">
                      <span className="price-label">{tr.priceLabel}</span>{" "}
                      <span className="price-value">{product.price}</span>
                    </div>
                    <a
                      href={`https://www.amazon.com/s?k=${product.amazonQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-btn"
                    >
                      <i className="fab fa-amazon"></i> {tr.buyNow}
                    </a>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}

        {/* Organizations Tab */}
        {activeTab === "orgs" && (
          <div className="rambo-tab-content">
            {(() => {
              const o = orgs[lang];
              return (
                <>
                  <div className="orgs-section">
                    <h2><i className="fas fa-star-of-david"></i> {o.israelTitle}</h2>
                    <div className="orgs-grid">
                      {o.israelOrgs.map((org, i) => (
                        <a key={i} href={org.url} target="_blank" rel="noopener noreferrer" className="org-card israel-org">
                          <div className="org-icon"><i className={`fas ${org.icon}`}></i></div>
                          <div className="org-info">
                            <h3>{org.name}</h3>
                            <p>{org.desc}</p>
                          </div>
                          <i className="fas fa-external-link-alt org-link-icon"></i>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="orgs-section">
                    <h2><i className="fas fa-paw"></i> {o.rescueTitle}</h2>
                    <div className="orgs-grid">
                      {o.orgs.map((org, i) => (
                        <a key={i} href={org.url} target="_blank" rel="noopener noreferrer" className="org-card">
                          <div className="org-icon"><i className={`fas ${org.icon}`}></i></div>
                          <div className="org-info">
                            <h3>{org.name}</h3>
                            <p>{org.desc}</p>
                          </div>
                          <i className="fas fa-external-link-alt org-link-icon"></i>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="orgs-section">
                    <h2><i className="fas fa-graduation-cap"></i> {o.trainersTitle}</h2>
                    <div className="trainers-grid">
                      {o.trainers.map((trainer, i) => (
                        <div key={i} className="trainer-card">
                          <i className={`fas ${trainer.icon} trainer-icon`}></i>
                          <h3>{trainer.name}</h3>
                          <p>{trainer.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="orgs-section">
                    <h2><i className="fas fa-link"></i> {o.resourcesTitle}</h2>
                    <div className="resources-list">
                      {o.resources.map((res, i) => (
                        <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                          <i className={`fas ${res.icon}`}></i>
                          <span>{res.label}</span>
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* Training Tab */}
        {activeTab === "training" && (() => {
          const tr2 = tr.training;
          return (
            <div className="rambo-tab-content">
              <div className="stats-header">
                <h2>{tr2.principlesTitle}</h2>
                <p>{tr2.principlesSub}</p>
              </div>
              <div className="principles-grid">
                {tr2.principles.map((p, i) => (
                  <div key={i} className="principle-card" style={{ borderTopColor: p.color }}>
                    <div className="principle-icon" style={{ background: p.color }}>
                      <i className={`fas ${p.icon}`}></i>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="stats-header" style={{ marginTop: "1.5rem" }}>
                <h2>{tr2.stagesTitle}</h2>
                <p>{tr2.stagesSub}</p>
              </div>
              <div className="stages-grid">
                {tr2.stages.map((stage, i) => (
                  <div key={i} className="stage-card">
                    <div className="stage-header" style={{ background: stage.color }}>
                      <i className={`fas ${stage.icon}`}></i>
                      <div>
                        <div className="stage-label">{stage.label}</div>
                        <div className="stage-age">{stage.age}</div>
                      </div>
                    </div>
                    <ul className="stage-goals">
                      {stage.goals.map((g, j) => (
                        <li key={j}><i className="fas fa-check-circle"></i> {g}</li>
                      ))}
                    </ul>
                    <div className="stage-tip">
                      <i className="fas fa-lightbulb"></i> {stage.tip}
                    </div>
                  </div>
                ))}
              </div>

              <div className="stats-header" style={{ marginTop: "1.5rem" }}>
                <h2>{tr2.commandsTitle}</h2>
                <p>{tr2.commandsSub}</p>
              </div>
              <div className="commands-grid">
                {tr2.commands.map((cmd, i) => (
                  <div key={i} className="command-card">
                    <div className="command-icon"><i className={`fas ${cmd.icon}`}></i></div>
                    <div className="command-names">
                      <span className="command-he">{cmd.he}</span>
                      <span className="command-en">{cmd.en}</span>
                    </div>
                    <p className="command-tip">{isRtl ? cmd.tip : cmd.tip}</p>
                  </div>
                ))}
              </div>

              <div className="dos-donts-grid" style={{ marginTop: "1.5rem" }}>
                <div className="dos-card">
                  <h2><i className="fas fa-check-circle"></i> {tr2.dosTitle}</h2>
                  <ul className="dos-list">
                    {tr2.dos.map((d, i) => (
                      <li key={i}><i className="fas fa-check dos-icon"></i> {d}</li>
                    ))}
                  </ul>
                </div>
                <div className="donts-card">
                  <h2><i className="fas fa-times-circle"></i> {tr2.dontsTitle}</h2>
                  <ul className="donts-list">
                    {tr2.donts.map((d, i) => (
                      <li key={i}><i className="fas fa-times donts-icon"></i> {d}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="stats-header" style={{ marginTop: "1.5rem" }}>
                <h2>{tr2.fieldTipsTitle}</h2>
                <p>{tr2.fieldTipsSub}</p>
              </div>
              <div className="field-tips-grid">
                {tr2.fieldTips.map((tip, i) => (
                  <div key={i} className="field-tip-card">
                    <div className="field-tip-icon"><i className={`fas ${tip.icon}`}></i></div>
                    <div>
                      <h3>{tip.title}</h3>
                      <p>{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <section className="rambo-quote" style={{ marginTop: "1.5rem" }}>
                <blockquote>
                  <i className="fas fa-quote-right quote-icon"></i>
                  <p>"{tr2.quote}"</p>
                </blockquote>
              </section>
            </div>
          );
        })()}

      </div>

      <footer className="rambo-footer">
        <p>&copy; 2025 Sahar Halili</p>
      </footer>
    </div>
  );
}
