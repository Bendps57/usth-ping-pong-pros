import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import actionPlayer from "@/assets/action-player.jpg";
import ballPaddle from "@/assets/ball-paddle.jpg";
import equipment from "@/assets/equipment.jpg";
import teamSpirit from "@/assets/team-spirit.jpg";
import trainingHall from "@/assets/training-hall.jpg";

// Sample articles data (same as Articles page)
const articlesData: Record<string, {
  title: string;
  date: string;
  image: string;
  content: string;
}> = {
  "rentree-2025-2026": {
    title: "Rentrée 2025-2026 : Une Saison Prometteuse",
    date: "mercredi 15 janvier 2025",
    image: actionPlayer,
    content: `Après une superbe saison passée ensemble, cette rentrée 2025-2026 démarre sur les chapeaux de roues et dépasse une nouvelle fois toutes les attentes avec déjà plus de 100 licenciés !

Les entraînements sont bien remplis et toujours dans la bonne humeur avec des retrouvailles entre les joueurs et la rencontre de nouvelles recrues motivées.

Merci à vous pour votre (ré)engagement et bienvenue aux nouveaux, cette nouvelle saison s'annonce pleine de rebonds !

Pour celles et ceux qui ne nous ont pas encore rejoints, les inscriptions sont toujours ouvertes et nous nous ferions un plaisir de vous accueillir !

Bonne saison à tous et à très vite à la table 🏓 !`
  },
  "championnat-regional": {
    title: "Victoire au Championnat Régional",
    date: "lundi 20 décembre 2024",
    image: teamSpirit,
    content: `Une belle performance de nos équipes lors du championnat régional !

Notre équipe première s'est particulièrement illustrée en remportant plusieurs matchs décisifs. Les jeunes de notre école de tennis de table ont également brillé par leur engagement et leur progression.

Cette victoire est le fruit d'un travail d'équipe remarquable et de nombreuses heures d'entraînement. Félicitations à tous les joueurs et aux entraîneurs pour leur implication !

La prochaine étape sera le championnat interdépartemental où nous espérons confirmer ces excellents résultats.`
  },
  "nouveau-materiel": {
    title: "Renouvellement du Matériel",
    date: "jeudi 5 décembre 2024",
    image: equipment,
    content: `Le club investit dans du nouveau matériel pour améliorer les conditions d'entraînement de tous nos licenciés.

Nous avons fait l'acquisition de :
- 5 nouvelles tables de compétition homologuées FFTT
- 20 nouvelles raquettes de différents niveaux
- Un robot lance-balles pour l'entraînement technique
- Du matériel pédagogique pour l'école de tennis de table

Cet investissement conséquent témoigne de notre volonté d'offrir les meilleures conditions possibles à nos adhérents, qu'ils soient débutants ou compétiteurs confirmés.

Le nouveau matériel est d'ores et déjà disponible dans notre salle d'entraînement !`
  },
  "stage-vacances": {
    title: "Stage de Perfectionnement",
    date: "jeudi 28 novembre 2024",
    image: ballPaddle,
    content: `Un stage intensif de perfectionnement sera organisé pendant les vacances scolaires !

Au programme :
- Entraînement technique et tactique
- Travail physique et mental
- Matchs et tournois internes
- Conseils personnalisés des entraîneurs

Le stage est ouvert aux jeunes de 10 à 17 ans, tous niveaux. C'est l'occasion idéale de progresser rapidement dans une ambiance conviviale.

Durée : 5 jours (du lundi au vendredi)
Horaires : 9h - 17h
Tarif adhérents : 120€ / Tarif non-adhérents : 150€

Inscriptions ouvertes dès maintenant auprès du secrétariat ou par email. Places limitées !`
  },
  "nouveaux-horaires": {
    title: "Nouveaux Horaires d'Entraînement",
    date: "mardi 12 novembre 2024",
    image: trainingHall,
    content: `Les horaires d'entraînement ont été réorganisés pour mieux répondre aux besoins de tous nos adhérents.

LUNDI :
- 18h-19h30 : École de tennis de table (débutants)
- 19h30-21h : Équipe loisir

MERCREDI :
- 14h-16h : École de tennis de table (tous niveaux)
- 18h-20h : Entraînement compétition

VENDREDI :
- 18h-19h30 : École de tennis de table (intermédiaires)
- 19h30-22h : Entraînement libre / Compétition

SAMEDI :
- 14h-16h : Entraînement jeunes compétiteurs
- 16h-18h : Jeu libre (tous niveaux)

N'hésitez pas à contacter le club pour plus d'informations ou pour toute demande particulière concernant les créneaux.`
  }
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? articlesData[id] : null;

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <Link to="/articles">
            <Button variant="ghost" className="mb-6 hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tous les articles
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase text-foreground">
            {article.title}
          </h1>
          <p className="text-muted-foreground">{article.date}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link to="/articles">
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Tous les articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
