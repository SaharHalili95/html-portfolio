import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Lang = "he" | "en";
type Category = "all" | "harnesses" | "toys" | "food" | "beds" | "grooming" | "accessories";

interface Product {
  id: number;
  category: Category;
  icon: string;
  nameHe: string;
  nameEn: string;
  descHe: string;
  descEn: string;
  price: string;
  rating: number;
  amazonQuery: string;
}

const products: Product[] = [
  // Harnesses & Leashes
  { id: 1, category: "harnesses", icon: "fa-dog", nameHe: "רתמת נו-פול חזקה", nameEn: "Heavy Duty No-Pull Harness", descHe: "רתמה מחוזקת עם ריפוד נוח, מונעת משיכה ומתאימה לכלבים חזקים", descEn: "Reinforced padded harness, prevents pulling and perfect for strong dogs", price: "$25-45", rating: 5, amazonQuery: "pitbull+no+pull+harness+heavy+duty" },
  { id: 2, category: "harnesses", icon: "fa-link", nameHe: "רצועה בלתי נקרעת", nameEn: "Indestructible Leash", descHe: "רצועה מניילון כפול עם ידית מרופדת, עמידה במשיכות חזקות", descEn: "Double nylon leash with padded handle, withstands strong pulls", price: "$15-30", rating: 4, amazonQuery: "heavy+duty+dog+leash+large+breed" },
  { id: 3, category: "harnesses", icon: "fa-vest-patches", nameHe: "אפוד טקטי לכלבים", nameEn: "Tactical Dog Vest", descHe: "אפוד טקטי עם ידית אחיזה עליונה וכיסים, מושלם לטיולים", descEn: "Tactical vest with top handle and pockets, perfect for hikes", price: "$30-55", rating: 5, amazonQuery: "tactical+dog+harness+large+breed+pitbull" },

  // Toys & Chews
  { id: 4, category: "toys", icon: "fa-baseball-ball", nameHe: "כדור בלתי ניתן להרס", nameEn: "Indestructible Ball", descHe: "כדור גומי טבעי עמיד במיוחד, מושלם ללעיסנים חזקים", descEn: "Ultra-durable natural rubber ball, perfect for power chewers", price: "$10-20", rating: 5, amazonQuery: "indestructible+dog+ball+aggressive+chewers" },
  { id: 5, category: "toys", icon: "fa-bone", nameHe: "עצם לעיסה ארוכת טווח", nameEn: "Long-Lasting Chew Bone", descHe: "עצם ניילון בטעם בשר, מחזיקה מעמד שבועות ומנקה שיניים", descEn: "Meat-flavored nylon bone, lasts weeks and cleans teeth", price: "$12-25", rating: 4, amazonQuery: "durable+dog+chew+bone+large+breed" },
  { id: 6, category: "toys", icon: "fa-ring", nameHe: "טבעת משיכה עמידה", nameEn: "Heavy Duty Tug Ring", descHe: "טבעת משיכה מגומי טבעי, מושלמת למשחקי כוח עם הכלב", descEn: "Natural rubber tug ring, perfect for power play with your dog", price: "$15-25", rating: 5, amazonQuery: "dog+tug+toy+indestructible+large+breed" },
  { id: 7, category: "toys", icon: "fa-puzzle-piece", nameHe: "צעצוע חשיבה אינטראקטיבי", nameEn: "Interactive Puzzle Toy", descHe: "צעצוע חשיבה שמפעיל את המוח, מפחית שעמום ומשפר ריכוז", descEn: "Brain-stimulating puzzle toy, reduces boredom and improves focus", price: "$15-30", rating: 4, amazonQuery: "dog+puzzle+toy+large+breed+interactive" },

  // Food & Nutrition
  { id: 8, category: "food", icon: "fa-drumstick-bite", nameHe: "מזון יבש עשיר בחלבון", nameEn: "High-Protein Dry Food", descHe: "מזון פרימיום עם עוף אמיתי כמרכיב ראשון, עשיר באומגה 3", descEn: "Premium food with real chicken as first ingredient, rich in Omega-3", price: "$45-70", rating: 5, amazonQuery: "high+protein+dog+food+pitbull+large+breed" },
  { id: 9, category: "food", icon: "fa-fish", nameHe: "תוסף שמן סלמון", nameEn: "Salmon Oil Supplement", descHe: "שמן סלמון טהור לפרווה בריאה, עור חלק ומפרקים גמישים", descEn: "Pure salmon oil for healthy coat, smooth skin and flexible joints", price: "$15-25", rating: 5, amazonQuery: "salmon+oil+dogs+skin+coat+supplement" },
  { id: 10, category: "food", icon: "fa-cookie-bite", nameHe: "חטיפי אילוף טבעיים", nameEn: "Natural Training Treats", descHe: "חטיפים קטנים ובריאים מבשר אמיתי, מושלמים לאילוף חיובי", descEn: "Small healthy treats from real meat, perfect for positive training", price: "$8-18", rating: 4, amazonQuery: "natural+dog+training+treats+high+value" },

  // Beds & Comfort
  { id: 11, category: "beds", icon: "fa-bed", nameHe: "מיטה אורתופדית XL", nameEn: "Orthopedic XL Dog Bed", descHe: "מיטה מקצף זיכרון עם כיסוי עמיד בפני לעיסה, תמיכה למפרקים", descEn: "Memory foam bed with chew-resistant cover, joint support", price: "$50-90", rating: 5, amazonQuery: "orthopedic+dog+bed+large+breed+chew+resistant" },
  { id: 12, category: "beds", icon: "fa-snowflake", nameHe: "מזרון קירור לקיץ", nameEn: "Summer Cooling Mat", descHe: "מזרון ג'ל מקרר שמפחית חום גוף, מושלם לימים חמים", descEn: "Cooling gel mat that reduces body heat, perfect for hot days", price: "$20-40", rating: 4, amazonQuery: "dog+cooling+mat+large+breed" },
  { id: 13, category: "beds", icon: "fa-blanket", nameHe: "שמיכת פליז רכה", nameEn: "Soft Fleece Blanket", descHe: "שמיכה חמה ורכה עם הדפס כפות, ניתנת לכביסה במכונה", descEn: "Warm soft blanket with paw print, machine washable", price: "$15-25", rating: 4, amazonQuery: "dog+blanket+large+fleece+washable" },

  // Grooming & Care
  { id: 14, category: "grooming", icon: "fa-shower", nameHe: "שמפו טבעי לעור רגיש", nameEn: "Natural Sensitive Skin Shampoo", descHe: "שמפו עדין עם שיבולת שועל ואלוורה, מושלם לעור רגיש של פיטבולים", descEn: "Gentle oatmeal & aloe shampoo, perfect for pitbull sensitive skin", price: "$12-20", rating: 5, amazonQuery: "dog+shampoo+sensitive+skin+oatmeal+pitbull" },
  { id: 15, category: "grooming", icon: "fa-cut", nameHe: "מברשת דה-שדינג", nameEn: "De-Shedding Brush", descHe: "מברשת שמסירה שיער מת ביעילות, מפחיתה נשירה עד 90%", descEn: "Efficiently removes dead hair, reduces shedding up to 90%", price: "$10-25", rating: 4, amazonQuery: "deshedding+brush+short+hair+dog" },
  { id: 16, category: "grooming", icon: "fa-tooth", nameHe: "ערכת ניקוי שיניים", nameEn: "Dental Care Kit", descHe: "מברשת שיניים + משחה אנזימטית בטעם בשר, מונעת אבנית", descEn: "Toothbrush + enzymatic meat-flavored paste, prevents tartar", price: "$8-15", rating: 4, amazonQuery: "dog+dental+care+kit+toothbrush+toothpaste" },

  // Accessories
  { id: 17, category: "accessories", icon: "fa-id-badge", nameHe: "תג שם מותאם אישית", nameEn: "Custom Engraved ID Tag", descHe: "תג נירוסטה עם חריטת שם וטלפון, עמיד לשנים", descEn: "Stainless steel tag with name & phone engraving, lasts for years", price: "$8-15", rating: 5, amazonQuery: "custom+dog+id+tag+engraved+stainless+steel" },
  { id: 18, category: "accessories", icon: "fa-car", nameHe: "כיסוי מושב לרכב", nameEn: "Car Seat Cover", descHe: "כיסוי עמיד למים ושריטות, מגן על המושבים ונוח לכלב", descEn: "Waterproof & scratch-resistant cover, protects seats and comfy for dog", price: "$25-45", rating: 5, amazonQuery: "dog+car+seat+cover+large+breed+waterproof" },
  { id: 19, category: "accessories", icon: "fa-utensils", nameHe: "קערות אוכל מוגבהות", nameEn: "Elevated Food Bowls", descHe: "קערות נירוסטה מוגבהות עם מעמד נגד החלקה, בריא לעיכול", descEn: "Elevated stainless steel bowls with non-slip stand, better digestion", price: "$20-35", rating: 4, amazonQuery: "elevated+dog+bowls+large+breed+stainless+steel" },
  { id: 20, category: "accessories", icon: "fa-first-aid", nameHe: "ערכת עזרה ראשונה לכלבים", nameEn: "Dog First Aid Kit", descHe: "ערכה מקיפה עם תחבושות, חיטוי ומדריך, חובה לכל בעל כלב", descEn: "Complete kit with bandages, antiseptic & guide, a must for every dog owner", price: "$18-30", rating: 4, amazonQuery: "dog+first+aid+kit+emergency" },
];

const categories: { key: Category; labelHe: string; labelEn: string; icon: string }[] = [
  { key: "all", labelHe: "הכל", labelEn: "All", icon: "fa-th" },
  { key: "harnesses", labelHe: "רתמות ורצועות", labelEn: "Harnesses & Leashes", icon: "fa-dog" },
  { key: "toys", labelHe: "צעצועים", labelEn: "Toys & Chews", icon: "fa-baseball-ball" },
  { key: "food", labelHe: "מזון ותוספים", labelEn: "Food & Nutrition", icon: "fa-drumstick-bite" },
  { key: "beds", labelHe: "מיטות ונוחות", labelEn: "Beds & Comfort", icon: "fa-bed" },
  { key: "grooming", labelHe: "טיפוח", labelEn: "Grooming & Care", icon: "fa-shower" },
  { key: "accessories", labelHe: "אביזרים", labelEn: "Accessories", icon: "fa-bone" },
];

const translations = {
  he: {
    backBtn: "חזרה לרמבו",
    langToggle: "English",
    title: "מוצרים מומלצים לפיטבולים",
    subtitle: "מוצרים איכותיים שנבחרו במיוחד עבור גזע הפיטבול",
    buyNow: "קנה עכשיו באמזון",
    priceLabel: "טווח מחירים:",
    quote: "השקעה במוצרים איכותיים לכלב שלך היא השקעה באושר, בבריאות ובאיכות החיים של השותף הנאמן ביותר שלך.",
  },
  en: {
    backBtn: "Back to Rambo",
    langToggle: "עברית",
    title: "Recommended Products for Pit Bulls",
    subtitle: "Quality products specially selected for the Pit Bull breed",
    buyNow: "Buy Now on Amazon",
    priceLabel: "Price range:",
    quote: "Investing in quality products for your dog is an investment in the happiness, health, and quality of life of your most loyal partner.",
  },
};

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <i
      key={i}
      className={`fas fa-star ${i < rating ? "star-filled" : "star-empty"}`}
    />
  ));
};

export default function PitbullProducts() {
  const [lang, setLang] = useState<Lang>("he");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const t = translations[lang];
  const isRtl = lang === "he";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pitbull-products-page" dir={isRtl ? "rtl" : "ltr"}>
      <div className="rambo-hero">
        <div className="rambo-hero-inner">
          <Link to="/rambo" className="back-btn">
            <i className={`fas fa-arrow-${isRtl ? "right" : "left"}`}></i> {t.backBtn}
          </Link>
          <button
            className="lang-toggle-btn"
            onClick={() => setLang(lang === "he" ? "en" : "he")}
          >
            <i className="fas fa-language"></i> {t.langToggle}
          </button>
        </div>
      </div>

      <div className="products-container">
        <section className="products-header">
          <h1>{t.title}</h1>
          <p className="products-subtitle">{t.subtitle}</p>
        </section>

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
          {filtered.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon-area">
                <i className={`fas ${product.icon}`}></i>
              </div>
              <div className="product-info">
                <h3>{isRtl ? product.nameHe : product.nameEn}</h3>
                <p className="product-desc">
                  {isRtl ? product.descHe : product.descEn}
                </p>
                <div className="product-rating">{renderStars(product.rating)}</div>
                <div className="product-price">
                  <span className="price-label">{t.priceLabel}</span>{" "}
                  <span className="price-value">{product.price}</span>
                </div>
                <a
                  href={`https://www.amazon.com/s?k=${product.amazonQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-btn"
                >
                  <i className="fab fa-amazon"></i> {t.buyNow}
                </a>
              </div>
            </div>
          ))}
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
}
