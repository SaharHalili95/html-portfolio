import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine,
} from "recharts";
import { getImagePath } from "../utils/paths";
import { products, categories } from "../data/pitbullProductsData";
import type { Category } from "../data/pitbullProductsData";

type Lang = "he" | "en";
type Tab = "about" | "articles" | "stats" | "products" | "orgs";

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
        { label: "Smithsonian - Sergeant Stubby: כלב המלחמה המקורי", url: "https://www.smithsonianmag.com/history/sergeant-stubby-original-war-dog-180960576/" },
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
        { label: "AVMA - כלבים מסוכנים ו-BSL", url: "https://www.avma.org/resources/animal-health-welfare/dangerous-dogs" },
        { label: "CDC - מניעת נשיכות כלבים", url: "https://www.cdc.gov/niosh/topics/emres/dog.html" },
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
        { label: "BAD RAP - סיפור כלבי Vick", url: "https://badrap.org/vicktory-dogs" },
        { label: "Best Friends - כלבי Vick היום", url: "https://bestfriends.org/sanctuary/vick-dogs" },
        { label: "ASPCA - טיפול בבעלי חיים", url: "https://www.aspca.org/animal-homelessness/shelter-intake-and-surrender/pit-bulls" },
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
        { label: "ASPCA - עמדה על חקיקה ספציפית לגזע", url: "https://www.aspca.org/animal-protection/public-policy/breed-specific-legislation" },
        { label: "AVMA - BSL ומדיניות חלופית", url: "https://www.avma.org/resources/animal-health-welfare/dangerous-dogs" },
        { label: "Journal of Vet Behavior - יעילות BSL", url: "https://www.sciencedirect.com/science/article/pii/S1558787813001482" },
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
        { label: "Smithsonian - Sergeant Stubby: The Original War Dog", url: "https://www.smithsonianmag.com/history/sergeant-stubby-original-war-dog-180960576/" },
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
        { label: "AVMA - Dangerous Dogs & BSL", url: "https://www.avma.org/resources/animal-health-welfare/dangerous-dogs" },
        { label: "CDC - Dog Bite Prevention", url: "https://www.cdc.gov/niosh/topics/emres/dog.html" },
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
        { label: "BAD RAP - The Vicktory Dogs Story", url: "https://badrap.org/vicktory-dogs" },
        { label: "Best Friends - Vick Dogs Today", url: "https://bestfriends.org/sanctuary/vick-dogs" },
        { label: "ASPCA - Pit Bull Info", url: "https://www.aspca.org/animal-homelessness/shelter-intake-and-surrender/pit-bulls" },
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
        { label: "ASPCA - Position on Breed-Specific Legislation", url: "https://www.aspca.org/animal-protection/public-policy/breed-specific-legislation" },
        { label: "AVMA - BSL & Alternative Policies", url: "https://www.avma.org/resources/animal-health-welfare/dangerous-dogs" },
        { label: "Journal of Vet Behavior - BSL Effectiveness", url: "https://www.sciencedirect.com/science/article/pii/S1558787813001482" },
      ],
    },
  ],
};

const orgs = {
  he: {
    title: "עמותות ומאלפים",
    subtitle: "ארגונים, עמותות ומקצוענים שפועלים למען הגזע",
    rescueTitle: "עמותות הצלה ואדוקציה",
    trainersTitle: "מאלפים ומומחים",
    resourcesTitle: "משאבים ומידע",
    orgs: [
      { name: "Best Friends Animal Society", desc: "הארגון הגדול בארה\"ב להצלת בעלי חיים, מפעיל תוכנית ייעודית לפיטבולים.", url: "https://bestfriends.org", icon: "fa-paw" },
      { name: "Villalobos Rescue Center", desc: "המרכז הגדול בעולם לאימוץ פיטבולים, מוכר מתוכנית 'Pit Bulls & Parolees'.", url: "https://vrc.org", icon: "fa-home" },
      { name: "BAD RAP", desc: "ארגון חלוצי מסן פרנסיסקו שהוביל את שינוי החקיקה ואחראי לשחרור כלבי Vick.", url: "https://badrap.org", icon: "fa-fist-raised" },
      { name: "StubbyDog", desc: "פרויקט תקשורתי שמפרסם סיפורי הצלחה ומידע מדעי על הגזע.", url: "https://stubbydog.org", icon: "fa-newspaper" },
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
      { label: "AVMA - עמדה על BSL", url: "https://www.avma.org/resources/animal-health-welfare/dangerous-dogs", icon: "fa-file-medical" },
      { label: "CDC - מניעת נשיכות", url: "https://www.cdc.gov/niosh/topics/emres/dog.html", icon: "fa-shield-alt" },
      { label: "ASPCA - Pit Bull מידע", url: "https://www.aspca.org/animal-homelessness/shelter-intake-and-surrender/pit-bulls", icon: "fa-info-circle" },
    ],
  },
  en: {
    title: "Organizations & Trainers",
    subtitle: "Organizations, rescue groups, and professionals working for the breed",
    rescueTitle: "Rescue & Advocacy Organizations",
    trainersTitle: "Trainers & Experts",
    resourcesTitle: "Resources & Information",
    orgs: [
      { name: "Best Friends Animal Society", desc: "The largest no-kill animal rescue organization in the US, runs a dedicated Pit Bull program.", url: "https://bestfriends.org", icon: "fa-paw" },
      { name: "Villalobos Rescue Center", desc: "The world's largest Pit Bull rescue and adoption center, known from 'Pit Bulls & Parolees'.", url: "https://vrc.org", icon: "fa-home" },
      { name: "BAD RAP", desc: "Pioneering San Francisco organization that led legislative change and is responsible for freeing Vick's dogs.", url: "https://badrap.org", icon: "fa-fist-raised" },
      { name: "StubbyDog", desc: "A media project publishing success stories and scientific information about the breed.", url: "https://stubbydog.org", icon: "fa-newspaper" },
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
      { label: "AVMA - Position on BSL", url: "https://www.avma.org/resources/animal-health-welfare/dangerous-dogs", icon: "fa-file-medical" },
      { label: "CDC - Dog Bite Prevention", url: "https://www.cdc.gov/niosh/topics/emres/dog.html", icon: "fa-shield-alt" },
      { label: "ASPCA - Pit Bull Info", url: "https://www.aspca.org/animal-homelessness/shelter-intake-and-surrender/pit-bulls", icon: "fa-info-circle" },
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
    ],
    gallery: "גלריה",
    aboutTitle: "על רמבו",
    aboutText: "רמבו הוא פיטבול אמריקאי שמהווה חלק בלתי נפרד מחיי. מעבר להיותו בעל חיים נאמן, הוא מדגים באופן יומיומי את התכונות החיוביות של גזע הפיטבול - אינטליגנציה, נאמנות, ויכולת התאמה גבוהה לסביבה משפחתית.",
    factsTitle: "תכונות הגזע",
    quote: "הקשר עם בעל חיים נאמן הוא מסע של אחריות, מחויבות, ואהבה הדדית שמעשירה את חיי היום-יום.",
    statsTitle: "השוואת ציוני טמפרמנט - ATTS 2024",
    statsSubtitle: "אחוז כלבים שעברו בדיקת טמפרמנט מקצועית לפי גזע",
    statsNote: "מקור: American Temperament Test Society (atts.org) | ככל שהציון גבוה יותר - הטמפרמנט יציב יותר",
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
    ],
    gallery: "Gallery",
    aboutTitle: "About Rambo",
    aboutText: "Rambo is an American Pit Bull who is an inseparable part of my life. Beyond being a loyal companion, he demonstrates daily the positive traits of the Pit Bull breed - intelligence, loyalty, and a remarkable ability to adapt to family life.",
    factsTitle: "Breed Traits",
    quote: "The bond with a loyal pet is a journey of responsibility, commitment, and mutual love that enriches everyday life.",
    statsTitle: "Temperament Score Comparison - ATTS 2024",
    statsSubtitle: "Percentage of dogs that passed professional temperament testing by breed",
    statsNote: "Source: American Temperament Test Society (atts.org) | Higher score = more stable temperament",
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
            <div className="stats-header">
              <h2>{tr.statsTitle}</h2>
              <p>{tr.statsSubtitle}</p>
            </div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 30, right: 60, left: 10, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[60, 95]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12 }} />
                  <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 13 }} />
                  <Tooltip formatter={(v) => [`${v}%`, isRtl ? "ציון" : "Score"]} />
                  <ReferenceLine x={87.4} stroke="#007acc" strokeDasharray="4 4" label={{ value: isRtl ? "פיטבול 87.4%" : "Pit Bull 87.4%", position: "insideTopRight", fontSize: 11, fill: "#007acc" }} />
                  <Bar dataKey="score" radius={[0, 6, 6, 0]}>
                    {chartData.map((entry, i) => (
                      <Cell key={i} fill={entry.highlight ? "#007acc" : "#94a3b8"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="stats-note"><i className="fas fa-info-circle"></i> {tr.statsNote}</p>
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

      </div>

      <footer className="rambo-footer">
        <p>&copy; 2025 Sahar Halili</p>
      </footer>
    </div>
  );
}
