import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-usth.png";

const navItems = [
  { path: "/club", label: "LE CLUB" },
  { path: "/equipes", label: "NOS JOUEURS" },
  { path: "/sponsors", label: "SPONSORS" },
  { path: "/articles", label: "ACTUALITÉS" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <img src={logo} alt="USTH Tennis de Table" className="h-20 w-auto" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-foreground tracking-tight">USTH</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Tennis de Table</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors"
            >
              INSCRIPTION
            </Link>
          </nav>

          {/* CTA Button and Social Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-6"
              >
                CONTACTEZ-NOUS
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary hover:bg-primary/90 rounded flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary-foreground" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary hover:bg-primary/90 rounded flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7 text-primary" />
            ) : (
              <Menu className="h-7 w-7 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors"
              >
                INSCRIPTION
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase"
                >
                  CONTACTEZ-NOUS
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
