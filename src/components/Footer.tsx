import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-usth.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="USTH TT" className="h-16 w-auto" />
              <div>
                <div className="text-xl font-bold">USTH</div>
                <div className="text-sm opacity-90">Tennis de Table</div>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Club amateur de tennis de table passionné et dynamique, ouvert à tous les niveaux.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:opacity-80 transition-opacity">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/club" className="text-sm hover:opacity-80 transition-opacity">
                  Le Club
                </Link>
              </li>
              <li>
                <Link to="/equipes" className="text-sm hover:opacity-80 transition-opacity">
                  Les Équipes
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-sm hover:opacity-80 transition-opacity">
                  Nos Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Gymnase Municipal, Thionville-Hayange</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@usth-tt.fr" className="opacity-90 hover:opacity-100 transition-opacity">
                  contact@usth-tt.fr
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+33612345678" className="opacity-90 hover:opacity-100 transition-opacity">
                  06 12 34 56 78
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <Link to="/contact">
              <button className="w-full bg-primary-foreground text-primary px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Nous Contacter
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} USTH Tennis de Table. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
