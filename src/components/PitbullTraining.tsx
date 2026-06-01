import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../utils/paths";

type Lang = "he" | "en";
type Tab = "principles" | "stages" | "commands" | "tips";

const translations = {
  he: {
    backBtn: "חזרה לרמבו",
    langToggle: "English",
    heroTitle: "מדריך אילוף",
    heroSubtitle: "שיטות מבוססות מחקר לאילוף פיטבולים",
    tabs: [
      { key: "principles" as Tab, label: "עקרונות", icon: "fa-crown" },
      { key: "stages" as Tab, label: "שלבי אילוף", icon: "fa-layer-group" },
      { key: "commands" as Tab, label: "פקודות", icon: "fa-hand-paper" },
      { key: "tips" as Tab, label: "טיפים", icon: "fa-lightbulb" },
    ],
    principlesTitle: "5 עקרונות הזהב",
    principlesSub: "הבסיס לאילוף מוצלח של כל פיטבול",
    stagesTitle: "שלבי אילוף לפי גיל",
    stagesSub: "כל שלב בחיי הכלב דורש גישה שונה",
    commandsTitle: "פקודות בסיסיות",
    commandsSub: "שמונה פקודות שכל פיטבול צריך לדעת",
    tipsTitle: "טיפים מהשטח",
    tipsSub: "מניסיון של מאלפים שעובדים עם הגזע",
    dosTitle: "מה כן לעשות",
    dontsTitle: "מה לא לעשות",
    fieldTipsTitle: "עצות מנסיון",
    quote: "פיטבול שמקבל אילוף נכון, גבולות ברורים ואהבה - הופך לאחד הכלבים הנאמנים והמצייתים שיש.",
    principles: [
      {
        icon: "fa-star",
        title: "חיזוק חיובי בלבד",
        desc: "פיטבולים מגיבים בצורה יוצאת דופן לחיזוק חיובי. תגמול מיידי בחטיף, שבח, או משחק מיד עם ביצוע הפקודה. עונשים גורמים לחרדה ולתוצאה הפוכה.",
        color: "#007acc",
      },
      {
        icon: "fa-redo",
        title: "עקביות מוחלטת",
        desc: "כל בני הבית חייבים להשתמש באותן פקודות ואותם חוקים. פיטבולים חכמים וינצלו כל חוסר עקביות. קבעו חוקים ברורים ואל תזוזו מהם.",
        color: "#16a34a",
      },
      {
        icon: "fa-users",
        title: "סוציאליזציה מוקדמת",
        desc: "חשיפה מבוקרת לאנשים, כלבים, רעשים וסביבות מגיל צעיר היא קריטית. פיטבול מסוציאל היטב הוא כלב בטוח ורגוע בכל סיטואציה.",
        color: "#9333ea",
      },
      {
        icon: "fa-bolt",
        title: "פעילות גופנית מספקת",
        desc: "כלב עייף הוא כלב טוב. פיטבולים צריכים 60-90 דקות פעילות ביום. כלב עם עודף אנרגיה יהיה קשה לאילוף - תשחקו לפני האימון.",
        color: "#e05a2b",
      },
      {
        icon: "fa-brain",
        title: "גירוי מנטלי",
        desc: "פיטבולים חכמים וזקוקים לאתגרים מנטליים כמו לפיזיים. צעצועי חשיבה, חיפוש חטיפים, ואימוני טריקים מפחיתים שעמום ומחזקים את הקשר.",
        color: "#0891b2",
      },
    ],
    stages: [
      {
        age: "8 שבועות - 4 חודשים",
        label: "גור",
        icon: "fa-baby",
        color: "#f59e0b",
        goals: [
          "הכרת שמו וקשר עין",
          "שב, שכב - פקודות ראשונות",
          "הרגל שירותים",
          "חשיפה ל-100 אנשים שונים",
          "טיפול: נגיעה באוזניים, רגליים, פה",
        ],
        tip: "גיל הגור הוא החלון החשוב ביותר לסוציאליזציה. כל חוויה חיובית עכשיו תקבע את אישיותו לכל חייו.",
      },
      {
        age: "4 חודשים - שנה",
        label: "גדלי סורר",
        icon: "fa-fire",
        color: "#e05a2b",
        goals: [
          "הליכה רגועה ברצועה",
          "שהייה (stay) עד דקה",
          "בוא - גם מרחק",
          "עזוב - שחרר כל עצם",
          "שב ברדיוס של 5 מטר מכלבים אחרים",
        ],
        tip: "גיל ההתבגרות הוא האתגר הגדול. הכלב ינסה את הגבולות. עקביות ושגרה יעברו את התקופה הזו בהצלחה.",
      },
      {
        age: "שנה ומעלה",
        label: "בוגר",
        icon: "fa-award",
        color: "#007acc",
        goals: [
          "פקודות מרחוק ללא ראייה",
          "שחרור רצועה בסביבה מבוקרת",
          "טריקים מתקדמים",
          "קנ\"ג / ספורט כלבים",
          "כלב טיפול (אם מתאים)",
        ],
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
      { text: "אמנו 2-3 פעמים ביום, כל אימון 5-10 דקות" },
      { text: "תגמלו מיידית - תוך שנייה מביצוע הפקודה" },
      { text: "הגמישו לפני אימון - כלב ממוקד לומד טוב יותר" },
      { text: "סיימו כל אימון בהצלחה - גם אם פשוטה" },
      { text: "שלבו אילוף בחיי יומיום - 'שב' לפני הקערה, 'שהה' לפני הדלת" },
      { text: "תעדו התקדמות - עוזר לזהות מה עובד" },
    ],
    donts: [
      { text: "אל תשתמשו בעונשים פיזיים - יוצרים חרדה ואגרסיביות" },
      { text: "אל תחזרו על פקודה 10 פעמים - אם לא מצייתים, חזרו לבסיסים" },
      { text: "אל תאמנו כלב עייף, חולה, או לאחר ארוחה כבדה" },
      { text: "אל תכעסו בזמן אימון - הכלב קולט את מצב רוחכם" },
      { text: "אל תדלגו על סוציאליזציה - זה הבסיס לכל השאר" },
      { text: "אל תחכו - התחילו אילוף מהיום הראשון בבית" },
    ],
    fieldTips: [
      {
        icon: "fa-lightbulb",
        title: "החטיף הנכון",
        text: "השתמשו בחטיפים קטנים וריחניים. פיטבולים מונעים מאוכל ויעשו כמעט הכל בשביל חטיף טוב. הפחיתו את גודל הארוחה ביום שמאמנים הרבה.",
      },
      {
        icon: "fa-clock",
        title: "תזמון מדויק",
        text: "הכלב מקשר את התגמול לפעולה האחרונה שעשה. תגמלו תוך פחות משנייה - או השתמשו ב-clicker כדי 'לסמן' את הרגע המדויק.",
      },
      {
        icon: "fa-heart",
        title: "קשר לפני פקודות",
        text: "10 דקות משחק חופשי לפני אימון יוצרות קשר ומוטיבציה. כלב שנהנה ממכם ילמד כפליים מהר. אילוף הוא הזמן ביחד, לא רק ביצועים.",
      },
      {
        icon: "fa-medal",
        title: "כיתות אילוף",
        text: "כיתה קבוצתית מוסיפה גם סוציאליזציה. חפשו מאלף שמשתמש אך ורק בחיזוק חיובי - אם רואים שרשרת מחנק, צאו מיד.",
      },
    ],
  },
  en: {
    backBtn: "Back to Rambo",
    langToggle: "עברית",
    heroTitle: "Training Guide",
    heroSubtitle: "Research-based methods for training Pit Bulls",
    tabs: [
      { key: "principles" as Tab, label: "Principles", icon: "fa-crown" },
      { key: "stages" as Tab, label: "Training Stages", icon: "fa-layer-group" },
      { key: "commands" as Tab, label: "Commands", icon: "fa-hand-paper" },
      { key: "tips" as Tab, label: "Tips", icon: "fa-lightbulb" },
    ],
    principlesTitle: "5 Golden Principles",
    principlesSub: "The foundation for successful training of any Pit Bull",
    stagesTitle: "Training Stages by Age",
    stagesSub: "Each stage of a dog's life requires a different approach",
    commandsTitle: "Essential Commands",
    commandsSub: "Eight commands every Pit Bull should know",
    tipsTitle: "Tips",
    tipsSub: "From the experience of trainers who work with the breed",
    dosTitle: "Do's",
    dontsTitle: "Don'ts",
    fieldTipsTitle: "Field Advice",
    quote: "A Pit Bull that receives proper training, clear boundaries, and love becomes one of the most loyal and obedient dogs there is.",
    principles: [
      {
        icon: "fa-star",
        title: "Positive Reinforcement Only",
        desc: "Pit Bulls respond exceptionally well to positive reinforcement. Reward immediately with a treat, praise, or play the moment a command is executed. Punishment causes anxiety and backfires.",
        color: "#007acc",
      },
      {
        icon: "fa-redo",
        title: "Absolute Consistency",
        desc: "Everyone in the household must use the same commands and the same rules. Pit Bulls are smart and will exploit any inconsistency. Set clear rules and never waver from them.",
        color: "#16a34a",
      },
      {
        icon: "fa-users",
        title: "Early Socialization",
        desc: "Controlled exposure to people, dogs, sounds, and environments from a young age is critical. A well-socialized Pit Bull is a safe, calm dog in any situation.",
        color: "#9333ea",
      },
      {
        icon: "fa-bolt",
        title: "Adequate Exercise",
        desc: "A tired dog is a good dog. Pit Bulls need 60-90 minutes of activity per day. A dog with excess energy will be difficult to train - play before the training session.",
        color: "#e05a2b",
      },
      {
        icon: "fa-brain",
        title: "Mental Stimulation",
        desc: "Pit Bulls are intelligent and need mental challenges as much as physical ones. Puzzle toys, scent games, and trick training reduce boredom and strengthen the bond.",
        color: "#0891b2",
      },
    ],
    stages: [
      {
        age: "8 weeks - 4 months",
        label: "Puppy",
        icon: "fa-baby",
        color: "#f59e0b",
        goals: [
          "Name recognition and eye contact",
          "Sit, Down - first commands",
          "Potty training",
          "Exposure to 100 different people",
          "Handling: ears, paws, mouth",
        ],
        tip: "The puppy period is the most important window for socialization. Every positive experience now shapes his personality for life.",
      },
      {
        age: "4 months - 1 year",
        label: "Adolescent",
        icon: "fa-fire",
        color: "#e05a2b",
        goals: [
          "Calm leash walking",
          "Stay up to one minute",
          "Come - from a distance",
          "Leave it - release any object",
          "Sit within 5 meters of other dogs",
        ],
        tip: "Adolescence is the big challenge. The dog will test the boundaries. Consistency and routine will get you through this period successfully.",
      },
      {
        age: "1 year and up",
        label: "Adult",
        icon: "fa-award",
        color: "#007acc",
        goals: [
          "Commands from a distance out of sight",
          "Off-leash in controlled environments",
          "Advanced tricks",
          "Dog sports / K9 work",
          "Therapy dog (if suitable)",
        ],
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
      { text: "Train 2-3 times a day, each session 5-10 minutes" },
      { text: "Reward immediately - within one second of the command being performed" },
      { text: "Exercise before training - a focused dog learns better" },
      { text: "End every session on a success - even a simple one" },
      { text: "Integrate training into daily life - 'Sit' before the bowl, 'Stay' before the door" },
      { text: "Track progress - helps identify what's working" },
    ],
    donts: [
      { text: "Never use physical punishment - creates anxiety and aggression" },
      { text: "Don't repeat a command 10 times - if not obeying, go back to basics" },
      { text: "Don't train a tired, sick, or recently fed dog" },
      { text: "Don't get angry during training - the dog reads your mood" },
      { text: "Don't skip socialization - it's the foundation of everything else" },
      { text: "Don't wait - start training from day one at home" },
    ],
    fieldTips: [
      {
        icon: "fa-lightbulb",
        title: "The Right Treat",
        text: "Use small, smelly treats. Pit Bulls are food-motivated and will do almost anything for a good treat. Reduce meal size on heavy training days.",
      },
      {
        icon: "fa-clock",
        title: "Precise Timing",
        text: "The dog links the reward to the last action he performed. Reward within less than one second - or use a clicker to mark the exact moment.",
      },
      {
        icon: "fa-heart",
        title: "Bond Before Commands",
        text: "10 minutes of free play before training creates connection and motivation. A dog that enjoys your company learns twice as fast. Training is bonding time, not just performance.",
      },
      {
        icon: "fa-medal",
        title: "Training Classes",
        text: "Group classes also add socialization. Look for a trainer who uses only positive reinforcement - if you see a choke chain, leave immediately.",
      },
    ],
  },
};

export default function PitbullTraining() {
  const [lang, setLang] = useState<Lang>("he");
  const [activeTab, setActiveTab] = useState<Tab>("principles");

  const tr = translations[lang];
  const isRtl = lang === "he";
  const heroImage = getImagePath("images/7FAC29F2-672D-495D-86A6-659A7C360362.jpg");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="rambo-page" dir={isRtl ? "rtl" : "ltr"}>

      {/* Hero */}
      <div
        className="rambo-hero-full"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(${heroImage})` }}
      >
        <div className="rambo-hero-nav">
          <Link to="/rambo" className="back-btn">
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

        {/* Principles Tab */}
        {activeTab === "principles" && (
          <div className="rambo-tab-content">
            <div className="stats-header">
              <h2>{tr.principlesTitle}</h2>
              <p>{tr.principlesSub}</p>
            </div>
            <div className="principles-grid">
              {tr.principles.map((p, i) => (
                <div key={i} className="principle-card" style={{ borderTopColor: p.color }}>
                  <div className="principle-icon" style={{ background: p.color }}>
                    <i className={`fas ${p.icon}`}></i>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>

            <section className="rambo-quote">
              <blockquote>
                <i className="fas fa-quote-right quote-icon"></i>
                <p>"{tr.quote}"</p>
              </blockquote>
            </section>
          </div>
        )}

        {/* Stages Tab */}
        {activeTab === "stages" && (
          <div className="rambo-tab-content">
            <div className="stats-header">
              <h2>{tr.stagesTitle}</h2>
              <p>{tr.stagesSub}</p>
            </div>
            <div className="stages-grid">
              {tr.stages.map((stage, i) => (
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
          </div>
        )}

        {/* Commands Tab */}
        {activeTab === "commands" && (
          <div className="rambo-tab-content">
            <div className="stats-header">
              <h2>{tr.commandsTitle}</h2>
              <p>{tr.commandsSub}</p>
            </div>
            <div className="commands-grid">
              {tr.commands.map((cmd, i) => (
                <div key={i} className="command-card">
                  <div className="command-icon"><i className={`fas ${cmd.icon}`}></i></div>
                  <div className="command-names">
                    <span className="command-he">{cmd.he}</span>
                    <span className="command-en">{cmd.en}</span>
                  </div>
                  <p className="command-tip">{cmd.tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Tab */}
        {activeTab === "tips" && (
          <div className="rambo-tab-content">
            <div className="dos-donts-grid">
              <div className="dos-card">
                <h2><i className="fas fa-check-circle"></i> {tr.dosTitle}</h2>
                <ul className="dos-list">
                  {tr.dos.map((d, i) => (
                    <li key={i}><i className="fas fa-check dos-icon"></i> {d.text}</li>
                  ))}
                </ul>
              </div>
              <div className="donts-card">
                <h2><i className="fas fa-times-circle"></i> {tr.dontsTitle}</h2>
                <ul className="donts-list">
                  {tr.donts.map((d, i) => (
                    <li key={i}><i className="fas fa-times donts-icon"></i> {d.text}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="stats-header" style={{ marginTop: "1.5rem" }}>
              <h2>{tr.fieldTipsTitle}</h2>
              <p>{tr.tipsSub}</p>
            </div>
            <div className="field-tips-grid">
              {tr.fieldTips.map((tip, i) => (
                <div key={i} className="field-tip-card">
                  <div className="field-tip-icon"><i className={`fas ${tip.icon}`}></i></div>
                  <div>
                    <h3>{tip.title}</h3>
                    <p>{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <footer className="rambo-footer">
        <p>&copy; 2025 Sahar Halili</p>
      </footer>
    </div>
  );
}
