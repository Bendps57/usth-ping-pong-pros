import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Handshake, Star, TrendingUp, Users } from "lucide-react";

const Sponsors = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Nos Sponsors & Partenaires</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Ils nous font confiance et nous soutiennent dans notre développement
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Partenaires Actuels</h2>
            <p className="text-lg text-muted-foreground">
              Un grand merci à nos sponsors qui permettent au club de se développer
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Premium Partners */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Partenaires Premium</h3>
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-12 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center h-32 bg-muted rounded-lg mb-4">
                    <span className="text-xl font-bold text-muted-foreground">Logo Sponsor 1</span>
                  </div>
                  <h4 className="font-semibold text-center text-lg">Entreprise Premium 1</h4>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Partenaire principal du club depuis 2020
                  </p>
                </Card>

                <Card className="p-12 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center h-32 bg-muted rounded-lg mb-4">
                    <span className="text-xl font-bold text-muted-foreground">Logo Sponsor 2</span>
                  </div>
                  <h4 className="font-semibold text-center text-lg">Entreprise Premium 2</h4>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Sponsor maillot depuis 2021
                  </p>
                </Card>
              </div>
            </div>

            {/* Gold Partners */}
            <div>
              <h3 className="text-xl font-bold text-primary text-center mb-6">Partenaires Gold</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center h-24 bg-muted rounded-lg mb-3">
                      <span className="text-lg font-bold text-muted-foreground">Logo {i}</span>
                    </div>
                    <h4 className="font-semibold text-center">Partenaire Gold {i}</h4>
                  </Card>
                ))}
              </div>
            </div>

            {/* Silver Partners */}
            <div>
              <h3 className="text-xl font-bold text-primary text-center mb-6">Partenaires Silver</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center h-16 bg-muted rounded-lg mb-2">
                      <span className="text-sm font-bold text-muted-foreground">Logo</span>
                    </div>
                    <p className="text-center text-sm font-medium">Partenaire {i}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become a Sponsor */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Pourquoi Devenir Sponsor ?</h2>
            <p className="text-lg text-muted-foreground">
              Les avantages d'un partenariat avec l'USTH Tennis de Table
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visibilité Locale</h3>
              <p className="text-muted-foreground">
                Votre logo sur nos maillots, affiches et site internet. Présence lors de tous nos événements.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Engagement Social</h3>
              <p className="text-muted-foreground">
                Soutenez le sport amateur et la jeunesse locale. Renforcez votre image d'entreprise citoyenne.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Réseau</h3>
              <p className="text-muted-foreground">
                Participez à nos événements networking et développez votre réseau professionnel local.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Formules de Partenariat</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Silver</h3>
                <p className="text-4xl font-bold text-primary mb-2">500€</p>
                <p className="text-muted-foreground text-sm">par an</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Logo sur le site internet</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Mention réseaux sociaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Affichage en salle</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:scale-105 border-primary border-2">
              <div className="text-center mb-6">
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold mb-2">
                  POPULAIRE
                </div>
                <h3 className="text-2xl font-bold mb-2">Gold</h3>
                <p className="text-4xl font-bold text-primary mb-2">1500€</p>
                <p className="text-muted-foreground text-sm">par an</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Tous les avantages Silver</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Logo sur les survêtements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Communication dédiée</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Invitations événements</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-4xl font-bold text-primary mb-2">3000€</p>
                <p className="text-muted-foreground text-sm">par an</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Tous les avantages Gold</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Logo principal sur maillots</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Bannière personnalisée</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Partenariat sur-mesure</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Intéressé par un Partenariat ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Contactez-nous pour discuter d'une collaboration qui valorisera votre entreprise
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Nous Contacter
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
