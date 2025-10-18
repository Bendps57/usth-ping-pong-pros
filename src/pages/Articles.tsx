import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import actionPlayer from "@/assets/action-player.jpg";
import ballPaddle from "@/assets/ball-paddle.jpg";
import equipment from "@/assets/equipment.jpg";
import teamSpirit from "@/assets/team-spirit.jpg";
import trainingHall from "@/assets/training-hall.jpg";

// Sample articles data
const articles = [
  {
    id: "rentree-2025-2026",
    title: "Rentrée 2025-2026 : Une Saison Prometteuse",
    date: "mercredi 15 janvier 2025",
    image: actionPlayer,
    excerpt: "Découvrez les nouveautés et les objectifs pour cette nouvelle saison sportive..."
  },
  {
    id: "championnat-regional",
    title: "Victoire au Championnat Régional",
    date: "lundi 20 décembre 2024",
    image: teamSpirit,
    excerpt: "Notre équipe première s'est illustrée lors du championnat régional..."
  },
  {
    id: "nouveau-materiel",
    title: "Renouvellement du Matériel",
    date: "jeudi 5 décembre 2024",
    image: equipment,
    excerpt: "Le club investit dans du nouveau matériel pour améliorer les conditions d'entraînement..."
  },
  {
    id: "stage-vacances",
    title: "Stage de Perfectionnement",
    date: "jeudi 28 novembre 2024",
    image: ballPaddle,
    excerpt: "Un stage intensif pendant les vacances pour progresser rapidement..."
  },
  {
    id: "nouveaux-horaires",
    title: "Nouveaux Horaires d'Entraînement",
    date: "mardi 12 novembre 2024",
    image: trainingHall,
    excerpt: "Consultez les nouveaux créneaux horaires pour la saison en cours..."
  }
];

const Articles = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase text-foreground">
            ----- Actualités -----
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-12">
            1 - {articles.length} sur {articles.length} articles
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article) => (
              <Link 
                key={article.id} 
                to={`/articles/${article.id}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-3">{article.date}</p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
