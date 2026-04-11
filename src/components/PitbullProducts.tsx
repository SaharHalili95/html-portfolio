import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/pitbullProductsData";
import type { Category } from "../data/pitbullProductsData";

type Lang = "he" | "en";


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
              <div className="product-image-area">
                <img src={product.image} alt={isRtl ? product.nameHe : product.nameEn} loading="lazy" />
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
