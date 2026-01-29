import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  { image: "/images/baby Rambo.png", caption: "בן חודשיים - תחילת המסע המשותף" },
  { image: "/images/IMG_0662.jpeg", caption: "אנרגיה וחיוניות - תכונות ייחודיות לגזע" },
  { image: "/images/IMG_1651.jpeg", caption: "רגעי מנוחה והרפיה" },
  { image: "/images/IMG_4862.jpeg", caption: "נאמנות בלתי מותנית" },
  { image: "/images/B73FD404-5C8B-4116-949B-35E2B3D4BD86.jpg", caption: "פעילות גופנית ומשחק בחיק הטבע" },
  { image: "/images/A7DC8E4F-AF92-400A-80CB-EBBE413F8EAE.jpg", caption: "אופי ידידותי ופתוח" },
  { image: "/images/4F8FFD3D-BA88-45CF-A1F4-43080E69E03F.jpg", caption: "חוזק ופאר - מאפיינים של הגזע" },
  { image: "/images/7FAC29F2-672D-495D-86A6-659A7C360362.jpg", caption: "חיי יומיום עם שותף נאמן" },
  { image: "/images/14AC457D-DDB4-4CD6-8EB8-76E16ADAEA47.jpg", caption: "ביטחון עצמי ונוכחות מרשימה" },
  { image: "/images/2A1D3833-0668-49C2-A912-49DC7BA7FC03.jpg", caption: "קשר עמוק ובלתי נפרד" },
];

const facts = [
  {
    icon: "fa-heart",
    title: "נאמנות גבוהה",
    description: "פיטבולים מפגינים רמת נאמנות יוצאת דופן כלפי בעליהם ובני משפחתם. הם יוצרים קשר רגשי עמוק ונחשבים לבעלי חיים מסורים במיוחד.",
  },
  {
    icon: "fa-smile",
    title: "התאמה לסביבה משפחתית",
    description: "היסטורית, פיטבולים שימשו ככלבי משפחה והוכיחו סבלנות וידידותיות כלפי ילדים. עם חינוך וסוציאליזציה נכונים, הם מתאימים היטב לחיים משפחתיים.",
  },
  {
    icon: "fa-brain",
    title: "אינטליגנציה ויכולת למידה",
    description: "פיטבולים בעלי יכולת למידה גבוהה ומוטיבציה חזקה. הם מגיבים היטב לאילוף חיובי ומפגינים נכונות לשיתוף פעולה עם בעליהם.",
  },
  {
    icon: "fa-running",
    title: "רמת אנרגיה גבוהה",
    description: "הגזע מתאפיין ברמת אנרגיה גבוהה ודורש פעילות גופנית סדירה. פיטבולים מהווים שותפים מצוינים לפעילויות ספורטיביות וטיולים.",
  },
  {
    icon: "fa-shield-alt",
    title: "אומץ ונאמנות",
    description: "פיטבולים ידועים באומץ ובנכונותם להגן על משפחתם. הם משלבים ערנות עם יכולת אבחנה ויחס ידידותי כלפי מכרי המשפחה.",
  },
  {
    icon: "fa-paw",
    title: "קרבה רגשית",
    description: "בניגוד למראה החיצוני החזק, פיטבולים נוטים ליצור קשר רגשי הדוק עם בעליהם ונהנים מקרבה פיזית ואינטראקציה חברתית.",
  },
];

const Rambo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") nextSlide();
      if (e.key === "ArrowRight") prevSlide();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="rambo-page" dir="rtl">
      <motion.div
        className="rambo-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="back-btn">
          <i className="fas fa-arrow-right"></i> חזרה לפורטפוליו
        </Link>
      </motion.div>

      <div className="rambo-container">
        <motion.section
          className="rambo-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1>רמבו - שותף לחיים</h1>
          <p className="rambo-subtitle">מסע משותף של נאמנות ואהבה</p>
        </motion.section>

        <motion.section
          className="rambo-gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>גלריית תמונות</h2>
          <div className="gallery-slider">
            <div className="slider-container">
              <button className="slider-btn prev-btn" onClick={prevSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>

              <div className="slider-track">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="slide"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={slides[currentSlide].image} alt="Rambo" />
                    <p className="slide-caption">{slides[currentSlide].caption}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button className="slider-btn next-btn" onClick={nextSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
            </div>

            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="rambo-story"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>על רמבו</h2>
          <p>
            רמבו הוא פיטבול אמריקאי שמהווה חלק בלתי נפרד מחיי. מעבר להיותו בעל חיים נאמן,
            הוא מדגים באופן יומיומי את התכונות החיוביות של גזע הפיטבול - אינטליגנציה,
            נאמנות, ויכולת התאמה גבוהה לסביבה משפחתית.
          </p>
        </motion.section>

        <motion.section
          className="pitbull-facts"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>מאפיינים חיוביים של גזע הפיטבול</h2>
          <div className="fact-grid">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                className="fact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <i className={`fas ${fact.icon} fact-icon`}></i>
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="rambo-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <blockquote>
            <i className="fas fa-quote-right quote-icon"></i>
            <p>"הקשר עם בעל חיים נאמן הוא מסע של אחריות, מחויבות, ואהבה הדדית שמעשירה את חיי היום-יום."</p>
          </blockquote>
        </motion.section>
      </div>

      <footer className="rambo-footer">
        <p>&copy; 2025 Sahar Halili</p>
      </footer>
    </div>
  );
};

export default Rambo;
