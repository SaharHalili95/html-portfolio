import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../utils/paths";

type Lang = "he" | "en";

const translations = {
  he: {
    backBtn: "חזרה לפורטפוליו",
    langToggle: "English",
    title: "רמבו - שותף לחיים",
    subtitle: "מסע משותף של נאמנות ואהבה",
    gallery: "גלריית תמונות",
    aboutTitle: "על רמבו",
    aboutText:
      "רמבו הוא פיטבול אמריקאי שמהווה חלק בלתי נפרד מחיי. מעבר להיותו בעל חיים נאמן, הוא מדגים באופן יומיומי את התכונות החיוביות של גזע הפיטבול - אינטליגנציה, נאמנות, ויכולת התאמה גבוהה לסביבה משפחתית.",
    factsTitle: "מאפיינים חיוביים של גזע הפיטבול",
    breedTitle: "הכירו את גזע הפיטבול",
    quote:
      "הקשר עם בעל חיים נאמן הוא מסע של אחריות, מחויבות, ואהבה הדדית שמעשירה את חיי היום-יום.",
    slides: [
      "בן חודשיים - תחילת המסע המשותף",
      "אנרגיה וחיוניות - תכונות ייחודיות לגזע",
      "רגעי מנוחה והרפיה",
      "נאמנות בלתי מותנית",
      "פעילות גופנית ומשחק בחיק הטבע",
      "אופי ידידותי ופתוח",
      "חוזק ופאר - מאפיינים של הגזע",
      "חיי יומיום עם שותף נאמן",
      "ביטחון עצמי ונוכחות מרשימה",
      "קשר עמוק ובלתי נפרד",
    ],
    facts: [
      {
        icon: "fa-heart",
        title: "נאמנות גבוהה",
        description:
          "פיטבולים מפגינים רמת נאמנות יוצאת דופן כלפי בעליהם ובני משפחתם. הם יוצרים קשר רגשי עמוק ונחשבים לבעלי חיים מסורים במיוחד.",
      },
      {
        icon: "fa-smile",
        title: "התאמה לסביבה משפחתית",
        description:
          "היסטורית, פיטבולים שימשו ככלבי משפחה והוכיחו סבלנות וידידותיות כלפי ילדים. עם חינוך וסוציאליזציה נכונים, הם מתאימים היטב לחיים משפחתיים.",
      },
      {
        icon: "fa-brain",
        title: "אינטליגנציה ויכולת למידה",
        description:
          "פיטבולים בעלי יכולת למידה גבוהה ומוטיבציה חזקה. הם מגיבים היטב לאילוף חיובי ומפגינים נכונות לשיתוף פעולה עם בעליהם.",
      },
      {
        icon: "fa-running",
        title: "רמת אנרגיה גבוהה",
        description:
          "הגזע מתאפיין ברמת אנרגיה גבוהה ודורש פעילות גופנית סדירה. פיטבולים מהווים שותפים מצוינים לפעילויות ספורטיביות וטיולים.",
      },
      {
        icon: "fa-shield-alt",
        title: "אומץ ונאמנות",
        description:
          "פיטבולים ידועים באומץ ובנכונותם להגן על משפחתם. הם משלבים ערנות עם יכולת אבחנה ויחס ידידותי כלפי מכרי המשפחה.",
      },
      {
        icon: "fa-paw",
        title: "קרבה רגשית",
        description:
          "בניגוד למראה החיצוני החזק, פיטבולים נוטים ליצור קשר רגשי הדוק עם בעליהם ונהנים מקרבה פיזית ואינטראקציה חברתית.",
      },
    ],
    breedInfo: [
      {
        icon: "fa-globe",
        title: "מוצא והיסטוריה",
        description:
          "הפיטבול האמריקאי מקורו באנגליה במאה ה-19, שם הכליאו בין בולדוגים לטרירים. הגזע הגיע לארה\"ב והפך לכלב משק, שמירה ומשפחה. בתקופת מלחמת העולם הראשונה, הפיטבול שימש כקמע לאומי אמריקאי ונחשב לסמל של אומץ ונאמנות.",
      },
      {
        icon: "fa-ruler",
        title: "מבנה גוף ומאפיינים פיזיים",
        description:
          "משקל: 14-27 ק\"ג. גובה: 43-53 ס\"מ. מבנה שרירי וחזק עם ראש רחב ולסתות חזקות. פרווה קצרה וחלקה במגוון צבעים. תוחלת חיים: 12-16 שנים. הם כלבים אתלטיים עם יכולות פיזיות מרשימות.",
      },
      {
        icon: "fa-user-md",
        title: "בריאות וטיפול",
        description:
          "פיטבולים הם גזע בריא יחסית. נושאים נפוצים כוללים דיספלזיה של מפרק הירך, אלרגיות עור ובעיות לב. הם דורשים ביקורות וטרינריות שוטפות, תזונה מאוזנת ופעילות גופנית יומיומית של לפחות 30-60 דקות.",
      },
      {
        icon: "fa-graduation-cap",
        title: "אילוף וחינוך",
        description:
          "פיטבולים מגיבים מצוין לאילוף חיובי (חיזוק חיובי). סוציאליזציה מוקדמת חיונית - חשיפה לכלבים, אנשים וסביבות שונות מגיל צעיר. הם לומדים מהר ונהנים מאתגרים מנטליים. עקביות ומנהיגות רגועה הם המפתח להצלחה.",
      },
      {
        icon: "fa-ban",
        title: "מיתוסים vs מציאות",
        description:
          "מיתוס: \"לפיטבולים יש לסת נעילה\". מציאות: אין להם שום מנגנון נעילה ייחודי. מיתוס: \"הם אגרסיביים מטבעם\". מציאות: מחקרים מראים שהתנהגות תלויה בחינוך ולא בגזע. האגודה האמריקאית לבדיקות טמפרמנט מדרגת פיטבולים גבוה מגזעים רבים.",
      },
      {
        icon: "fa-hands-helping",
        title: "תרומה לקהילה",
        description:
          "פיטבולים משמשים ככלבי טיפול רגשי, כלבי חיפוש והצלה, וכלבי שירות. הם מצטיינים בזיהוי רגשות ומספקים תמיכה נפשית לאנשים. רבים מהם עובדים בבתי חולים ובמוסדות חינוך כחלק מתוכניות טיפול בבעלי חיים.",
      },
    ],
  },
  en: {
    backBtn: "Back to Portfolio",
    langToggle: "עברית",
    title: "Rambo - A Life Partner",
    subtitle: "A shared journey of loyalty and love",
    gallery: "Photo Gallery",
    aboutTitle: "About Rambo",
    aboutText:
      "Rambo is an American Pit Bull who is an inseparable part of my life. Beyond being a loyal companion, he demonstrates daily the positive traits of the Pit Bull breed — intelligence, loyalty, and a remarkable ability to adapt to family life.",
    factsTitle: "Positive Traits of the Pit Bull Breed",
    breedTitle: "Get to Know the Pit Bull Breed",
    quote:
      "The bond with a loyal pet is a journey of responsibility, commitment, and mutual love that enriches everyday life.",
    slides: [
      "Two months old - The beginning of our journey",
      "Energy and vitality - Unique breed traits",
      "Moments of rest and relaxation",
      "Unconditional loyalty",
      "Physical activity and play in nature",
      "Friendly and open personality",
      "Strength and grace - Breed characteristics",
      "Everyday life with a loyal partner",
      "Self-confidence and impressive presence",
      "A deep and inseparable bond",
    ],
    facts: [
      {
        icon: "fa-heart",
        title: "High Loyalty",
        description:
          "Pit Bulls display exceptional loyalty toward their owners and family members. They form deep emotional bonds and are considered especially devoted animals.",
      },
      {
        icon: "fa-smile",
        title: "Family-Friendly",
        description:
          "Historically, Pit Bulls served as family dogs and demonstrated patience and friendliness toward children. With proper training and socialization, they are well-suited for family life.",
      },
      {
        icon: "fa-brain",
        title: "Intelligence & Trainability",
        description:
          "Pit Bulls have high learning abilities and strong motivation. They respond well to positive reinforcement training and show eagerness to cooperate with their owners.",
      },
      {
        icon: "fa-running",
        title: "High Energy Level",
        description:
          "The breed is characterized by high energy levels and requires regular physical activity. Pit Bulls make excellent partners for sports activities and outdoor adventures.",
      },
      {
        icon: "fa-shield-alt",
        title: "Courage & Devotion",
        description:
          "Pit Bulls are known for their courage and willingness to protect their families. They combine alertness with discernment and a friendly attitude toward familiar people.",
      },
      {
        icon: "fa-paw",
        title: "Emotional Closeness",
        description:
          "Despite their strong exterior, Pit Bulls tend to form close emotional bonds with their owners and enjoy physical closeness and social interaction.",
      },
    ],
    breedInfo: [
      {
        icon: "fa-globe",
        title: "Origin & History",
        description:
          "The American Pit Bull originated in 19th-century England, where Bulldogs were crossed with Terriers. The breed arrived in the USA and became a farm, guard, and family dog. During World War I, the Pit Bull served as an American national mascot and was considered a symbol of courage and loyalty.",
      },
      {
        icon: "fa-ruler",
        title: "Physical Build & Characteristics",
        description:
          "Weight: 30-60 lbs. Height: 17-21 inches. Muscular and strong build with a broad head and powerful jaws. Short, smooth coat in various colors. Life expectancy: 12-16 years. They are athletic dogs with impressive physical abilities.",
      },
      {
        icon: "fa-user-md",
        title: "Health & Care",
        description:
          "Pit Bulls are a relatively healthy breed. Common concerns include hip dysplasia, skin allergies, and heart conditions. They require regular veterinary checkups, a balanced diet, and daily exercise of at least 30-60 minutes.",
      },
      {
        icon: "fa-graduation-cap",
        title: "Training & Education",
        description:
          "Pit Bulls respond excellently to positive reinforcement training. Early socialization is crucial — exposure to other dogs, people, and various environments from a young age. They learn quickly and enjoy mental challenges. Consistency and calm leadership are the keys to success.",
      },
      {
        icon: "fa-ban",
        title: "Myths vs Reality",
        description:
          "Myth: \"Pit Bulls have locking jaws.\" Reality: They have no unique locking mechanism. Myth: \"They are naturally aggressive.\" Reality: Studies show behavior depends on upbringing, not breed. The American Temperament Test Society rates Pit Bulls higher than many popular breeds.",
      },
      {
        icon: "fa-hands-helping",
        title: "Community Contribution",
        description:
          "Pit Bulls serve as therapy dogs, search and rescue dogs, and service animals. They excel at reading emotions and provide mental support to people. Many work in hospitals and educational institutions as part of animal-assisted therapy programs.",
      },
    ],
  },
};

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

const Rambo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lang, setLang] = useState<Lang>("he");

  const t = translations[lang];
  const isRtl = lang === "he";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") nextSlide();
      if (e.key === "ArrowRight") prevSlide();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="rambo-page" dir={isRtl ? "rtl" : "ltr"}>
      <div className="rambo-hero">
        <div className="rambo-hero-inner">
          <Link to="/" className="back-btn">
            <i className={`fas fa-arrow-${isRtl ? "right" : "left"}`}></i> {t.backBtn}
          </Link>
          <Link to="/pitbull-products" className="products-link-btn">
            <i className="fas fa-shopping-cart"></i>{" "}
            {lang === "he" ? "מוצרים מומלצים" : "Recommended Products"}
          </Link>
          <button
            className="lang-toggle-btn"
            onClick={() => setLang(lang === "he" ? "en" : "he")}
          >
            <i className="fas fa-language"></i> {t.langToggle}
          </button>
        </div>
      </div>

      <div className="rambo-container">
        <section className="rambo-header">
          <h1>{t.title}</h1>
          <p className="rambo-subtitle">{t.subtitle}</p>
        </section>

        <section className="rambo-gallery">
          <h2>{t.gallery}</h2>
          <div className="gallery-slider">
            <div className="slider-container">
              <button className="slider-btn prev-btn" onClick={prevSlide}>
                <i className={`fas fa-chevron-${isRtl ? "right" : "left"}`}></i>
              </button>

              <div className="slider-track">
                <div className="slide">
                  <img src={getImagePath(slideImages[currentSlide])} alt="Rambo" />
                  <p className="slide-caption">{t.slides[currentSlide]}</p>
                </div>
              </div>

              <button className="slider-btn next-btn" onClick={nextSlide}>
                <i className={`fas fa-chevron-${isRtl ? "left" : "right"}`}></i>
              </button>
            </div>

            <div className="slider-dots">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="rambo-story">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </section>

        <section className="pitbull-facts">
          <h2>{t.factsTitle}</h2>
          <div className="fact-grid">
            {t.facts.map((fact, index) => (
              <div key={index} className="fact-card">
                <i className={`fas ${fact.icon} fact-icon`}></i>
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="breed-info">
          <h2>{t.breedTitle}</h2>
          <div className="breed-grid">
            {t.breedInfo.map((item, index) => (
              <div key={index} className="breed-card">
                <div className="breed-card-header">
                  <i className={`fas ${item.icon} breed-icon`}></i>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rambo-quote">
          <blockquote>
            <i className="fas fa-quote-right quote-icon"></i>
            <p>"{t.quote}"</p>
          </blockquote>
        </section>
      </div>

      <footer className="rambo-footer">
        <p>&copy; 2025 Sahar Halili</p>
      </footer>
    </div>
  );
};

export default Rambo;
