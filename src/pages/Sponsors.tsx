import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Handshake, TrendingUp, Users, Target, Award, Heart } from "lucide-react";

const Sponsors = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase">Nos Sponsors</h1>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Soutenez le tennis de table et développez votre visibilité
          </p>
        </div>
      </section>

      {/* Nos Sponsors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase">Nos Sponsors</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-center justify-center h-32 bg-muted rounded-lg mb-4">
                      <span className="text-lg font-bold text-muted-foreground">Logo Sponsor {i}</span>
                    </div>
                    <h4 className="font-semibold text-center text-lg">Entreprise {i}</h4>
                    <p className="text-center text-sm text-muted-foreground mt-2">
                      Partenaire du club
                    </p>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase">Pourquoi Sponsoriser un Club Sportif ?</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Une entreprise souhaitant développer sa notoriété peut recourir à des opérations de sponsoring sportif, 
              même si son domaine d'activité n'a aucun rapport avec le sport. Sponsoriser un club sportif doit permettre 
              à une entreprise d'obtenir des retombées de diverses natures (économiques, sociales, etc.), en plus de 
              contreparties concrètes à la hauteur du partenariat.
            </p>
          </div>

          {/* What is Sports Sponsoring */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase">À quoi correspond le sponsoring sportif ?</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le sponsoring ou parrainage sportif correspond à un contrat liant une association ou un club sportif à un annonceur. 
                  Il consiste en l'apport, par une entreprise, d'un soutien financier, en nature (des biens) ou sous forme de services, 
                  en échange d'une ou plusieurs contreparties équitables, du ressort de l'association sportive.
                </p>
                <p>
                  Les apports de part et d'autre doivent clairement figurer au sein d'un contrat de sponsoring. Le sponsoring n'est pas 
                  une action synonyme de donation désintéressée, ce qui est le principe du mécénat. Il équivaut à des prestations 
                  publicitaires servant à mettre en avant une entreprise, dans un but précis.
                </p>
                <div className="mt-6 p-6 bg-primary/5 rounded-lg">
                  <h4 className="font-bold text-foreground mb-3">Les principales formes du sponsoring sportif :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span><strong>Sponsoring financier :</strong> La forme la plus courante. Le contrat définit le montant apporté 
                      et la fréquence de versement selon le projet sponsorisé.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span><strong>Sponsoring technique :</strong> L'entreprise apporte son savoir-faire en mettant à disposition 
                      ses produits ou services pour structurer le club.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2 uppercase">Les Avantages du Sponsoring</h3>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Développer sa Visibilité</h4>
              <p className="text-muted-foreground">
                Votre logo sur les tenues, panneaux publicitaires, site internet et campagnes promotionnelles. 
                Exposition accrue lors de tous nos événements.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Améliorer son Image</h4>
              <p className="text-muted-foreground">
                Partagez les valeurs positives du sport : solidarité, ténacité, audace, engagement, respect et performance.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Motiver ses Salariés</h4>
              <p className="text-muted-foreground">
                Renforcez la cohésion d'équipe et fédérez vos collaborateurs autour d'un projet sportif commun et motivant.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Fidéliser ses Clients</h4>
              <p className="text-muted-foreground">
                Offrez un accès privilégié aux loges et billets VIP pour récompenser vos meilleurs clients et partenaires.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Élargir son Réseau</h4>
              <p className="text-muted-foreground">
                Excellent outil pour les relations publiques. Rencontrez sponsors, médias et invités influents lors des événements.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Avantages Fiscaux</h4>
              <p className="text-muted-foreground">
                Bénéficiez de réductions d'impôts et récupération de TVA sur vos dépenses de sponsoring selon le CGI.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase">Fiscalité & Réduction d'Impôt</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">La Réduction d'Impôt grâce au Sponsoring</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  D'après l'article 39-1-7° du Code général des impôts, les dépenses de sponsoring peuvent être déduites 
                  des résultats imposables de l'entreprise lorsqu'elles sont considérées comme <strong>« exposées dans 
                  l'intérêt direct de l'exploitation »</strong>.
                </p>
                <div className="p-6 bg-primary/5 rounded-lg mt-4">
                  <h4 className="font-bold text-foreground mb-3">Conditions d'éligibilité :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Bonne identification de l'entreprise sur les supports promotionnels (affiches, interventions médiatiques, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Dépenses proportionnelles aux retombées publicitaires attendues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Récupération de la TVA possible sur les dépenses de sponsoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Intéressé par un Partenariat ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter d'une collaboration qui valorisera votre entreprise
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold uppercase px-8">
              Nous Contacter
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
