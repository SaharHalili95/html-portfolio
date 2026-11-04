import { profile } from "../data/site";
import { useLang } from "./lang";

export default function Footer() {
  const { t, pick } = useLang();
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {t.rights} · {pick(profile.title)}
      </p>
    </footer>
  );
}
