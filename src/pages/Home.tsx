import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Target, Calendar, Award, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroImage from "@/assets/hero-table-tennis.jpg";
import teamImage from "@/assets/team-spirit.jpg";
import actionPlayer from "@/assets/action-player.jpg";
import heroNoel from "@/assets/hero-noel.jpg";
import { getLatestArticles } from "@/data/articles";

// Get the 3 latest articles automatically
const latestArticles = getLatestArticles(3);

const Home = () => {
  const presentationAnim = useScrollAnimation();
  const teamsAnim = useScrollAnimation();
  const newsAnim = useScrollAnimation();
  const heroAnim = useScrollAnimation();

  return (
    <div className="flex flex-col">
      {/* Hero Section - Style SLUC Nancy */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                <span className="block text-outline-primary">USTH</span>
                <span className="block text-outline-primary">TENNIS DE</span>
                <span className="block text-outline-primary">TABLE</span>
              </h1>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Là où le ping devient une passion.
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                L'USTH Tennis de Table est un des clubs incontournables de la région. 
                Que vous soyez débutant ou joueur confirmé, jeune ou adulte, le club vous accueille dans un environnement 
                adapté à votre niveau, où le plaisir de jouer est au cœur de la pratique.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/articles">
                  <Button 
                    variant="default" 
                    size="xl"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-8"
                  >
                    ACTUALITÉS
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-2 border-foreground text-foreground hover:bg-foreground/5 font-bold uppercase tracking-wide px-8"
                  >
                    CONTACT
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Content - Team Photo */}
            <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"></div>
              <img 
                src={heroNoel} 
                alt="Équipe USTH Tennis de Table - Joyeuses Fêtes" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
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
              Notre club fait partie de l'Union Sportive du Tournebride Hayange et incarne les valeurs de convivialité, 
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
                  Entraînements mardi et vendredi soir
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Match le week-end
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
                  Mardi et vendredi soir
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Sessions fun jeudi et samedi après-midi
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
            {latestArticles.map((article) => (
              <Link key={article.id} to={`/articles/${article.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                  <div className="relative aspect-video overflow-hidden bg-secondary/20">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {article.excerpt}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
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

    </div>
  );
};

export default Home;
