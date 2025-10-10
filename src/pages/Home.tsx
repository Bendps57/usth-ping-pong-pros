import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Target, Calendar, Award, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroImage from "@/assets/hero-table-tennis.jpg";
import teamImage from "@/assets/team-spirit.jpg";
import actionPlayer from "@/assets/action-player.jpg";
import ballPaddle from "@/assets/ball-paddle.jpg";
import trainingHall from "@/assets/training-hall.jpg";

const Home = () => {
  const presentationAnim = useScrollAnimation();
  const teamsAnim = useScrollAnimation();
  const newsAnim = useScrollAnimation();
  const heroAnim = useScrollAnimation();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        
        {/* Éléments animés */}
        <div className="absolute top-20 left-10 text-7xl animate-spin-slow opacity-20">🏓</div>
        <div className="absolute bottom-20 right-20 text-6xl animate-bounce-slow opacity-25">🏓</div>
        <div className="absolute top-1/3 right-10 text-5xl animate-float opacity-20">⚡</div>
        <div className="absolute bottom-1/3 left-20 text-8xl animate-paddle-swing opacity-15">🏓</div>
        
        <div 
          ref={heroAnim.ref}
          className={`relative z-10 container mx-auto px-4 text-center text-primary-foreground transition-all duration-1000 ${
            heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-2xl">
            Rejoignez l'aventure<br />
            <span className="text-white drop-shadow-lg">USTH Tennis de Table</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-95 drop-shadow-lg">
            Un club passionné, dynamique et ouvert à tous les niveaux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 animate-pulse-glow">
                Nous Rejoindre
              </Button>
            </Link>
            <Link to="/club">
              <Button variant="outline" size="xl" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                Découvrir le Club
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div 
            ref={presentationAnim.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              presentationAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Bienvenue à l'USTH Tennis de Table</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Notre club fait partie de l'Union Sportive Thionville Hayange et incarne les valeurs de convivialité, 
              d'engagement et de progression sportive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Esprit d'Équipe</h3>
              <p className="text-muted-foreground">
                Une ambiance chaleureuse et familiale où chacun trouve sa place
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progression</h3>
              <p className="text-muted-foreground">
                Des entraînements adaptés à tous les niveaux, du loisir à la compétition
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ambition</h3>
              <p className="text-muted-foreground">
                Des équipes engagées en championnat départemental et régional
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div 
          className="absolute right-0 top-1/4 w-1/3 h-96 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${actionPlayer})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={teamsAnim.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              teamsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Équipes</h2>
            <p className="text-lg text-muted-foreground">
              Découvrez nos différentes équipes et trouvez celle qui vous correspond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 group">
              <Award className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Équipe Compétition</h3>
              <p className="text-muted-foreground mb-4">
                Championnat régional et départemental
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Entraînements 3 fois par semaine
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Matches le week-end
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Encadrement professionnel
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 group">
              <Heart className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Équipe Loisir</h3>
              <p className="text-muted-foreground mb-4">
                Pour le plaisir et la convivialité
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Créneaux flexibles
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Ambiance détendue
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Tous niveaux bienvenus
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/equipes">
              <Button variant="hero" size="lg">
                Voir Toutes les Équipes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News/Results Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div 
            ref={newsAnim.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              newsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Actualités & Résultats</h2>
            <p className="text-lg text-muted-foreground">
              Suivez les dernières nouvelles du club
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div 
                className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: `url(${ballPaddle})` }}
              ></div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>15 Mars 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Belle victoire en championnat</h3>
                <p className="text-muted-foreground text-sm">
                  Notre équipe 1 s'impose 12-6 face à l'équipe de Nancy...
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div 
                className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: `url(${trainingHall})` }}
              ></div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>10 Mars 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Portes ouvertes du club</h3>
                <p className="text-muted-foreground text-sm">
                  Venez nous rencontrer et tester le tennis de table gratuitement...
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div 
                className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: `url(${actionPlayer})` }}
              ></div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>5 Mars 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Nouveau partenariat</h3>
                <p className="text-muted-foreground text-sm">
                  Le club est fier d'annoncer un nouveau partenariat avec...
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        
        {/* Animations */}
        <div className="absolute top-10 right-10 text-6xl animate-float opacity-20">🏓</div>
        <div className="absolute bottom-10 left-10 text-5xl animate-bounce-slow opacity-25">🏆</div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Prêt à Rejoindre l'Aventure ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95 drop-shadow-md">
            Que vous soyez débutant ou confirmé, notre club vous accueille à bras ouverts
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 animate-pulse-glow">
              Devenir Membre
            </Button>
          </Link>
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Nos Partenaires</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="w-32 h-16 bg-muted rounded flex items-center justify-center text-xs font-semibold">
              Partenaire 1
            </div>
            <div className="w-32 h-16 bg-muted rounded flex items-center justify-center text-xs font-semibold">
              Partenaire 2
            </div>
            <div className="w-32 h-16 bg-muted rounded flex items-center justify-center text-xs font-semibold">
              Partenaire 3
            </div>
            <div className="w-32 h-16 bg-muted rounded flex items-center justify-center text-xs font-semibold">
              Partenaire 4
            </div>
          </div>
          <div className="mt-8">
            <Link to="/sponsors">
              <Button variant="outline">Découvrir Tous Nos Sponsors</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
