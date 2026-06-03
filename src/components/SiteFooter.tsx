import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="foot-mark fr">
        La Casa <span className="it">de Anna</span>
        <span className="reg">®</span>
      </div>
      <div className="foot-grid">
        <div>
          <h5>Studio</h5>
          <p>
            Studio de design d&apos;intérieur clé-en-main, lac d&apos;Annecy.
            Veyrier-du-Lac · Haute-Savoie.
          </p>
        </div>
        <div>
          <h5>Navigation</h5>
          <ul>
            <li>
              <Link href="/#studio">Le studio</Link>
            </li>
            <li>
              <Link href="/#valeurs">Approche</Link>
            </li>
            <li>
              <Link href="/#realisations">Réalisations</Link>
            </li>
            <li>
              <Link href="/#presse">Presse</Link>
            </li>
            <li>
              <Link href="/#faq">Questions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>
              <a href={`tel:${site.phone}`}>06 61 24 30 36</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>Lun-Ven · 9h-18h</li>
          </ul>
        </div>
        <div>
          <h5>Réseaux</h5>
          <ul>
            <li>
              <a href={site.sameAs[0]}>Instagram</a>
            </li>
            <li>
              <a href={site.sameAs[1]}>Pinterest</a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=La+Casa+de+Anna+Veyrier-du-Lac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Business
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <span>© 2026 La Casa de Anna ® — SARL · Veyrier-du-Lac</span>
        <span>Mentions légales · Politique de confidentialité</span>
      </div>
    </footer>
  );
}
