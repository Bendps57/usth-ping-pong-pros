import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import actu1 from "@/assets/actu1.jpg";
import actu2 from "@/assets/actu2.jpg";
import actu3 from "@/assets/actu3.jpg";
import championnatJ6 from "@/assets/championnat-j6.jpg";

// Articles data
const articlesData: Record<string, {
  title: string;
  date: string;
  image: string;
  content: string;
}> = {
  "championnat-j6": {
    title: "Championnat J6 : Dernière Ligne Droite Avant la Trêve !",
    date: "lundi 9 décembre 2025",
    image: championnatJ6,
    content: `🏓 CHAMPIONNAT J6 : DERNIÈRE LIGNE DROITE AVANT LA TRÊVE !

Chers supporters, amis du club et passionnés de la petite balle blanche,

Le compte à rebours est lancé ! Ce Dimanche 14 Décembre 2025, le HAYANGE USTH aborde le 6ème tour du championnat par équipes. Une journée cruciale pour le classement général alors que la mi-saison approche à grands pas. Nos joueurs ont affûté leurs raquettes et comptent sur votre soutien, que ce soit à domicile ou à distance ! 💪

🧐 ZOOM SUR LES RENCONTRES :

L'Équipe Première en déplacement commando
Nos fers de lance de l'équipe 1 se rendent chez nos voisins de Roussy TT. Un match à l'extérieur n'est jamais simple, mais nos joueurs sont déterminés à ramener la victoire pour consolider leur position. Il faudra être solide mentalement !
👉 ROUSSY TT 2 🆚 HAYANGE USTH 1

L'Équipe 2 reçoit Terville Tennis de Table
Un match qui promet de belles étincelles. L'objectif est clair : imposer notre jeu et ne laisser aucune chance à l'adversaire.
👉 HAYANGE USTH 2 🆚 TERVILLE TT 9

L'Équipe 3 affronte Tennis de Table Maizières-Lès-Metz
Chaque point va compter et nos joueurs auront besoin de vos encouragements pour faire la différence dans les moments chauds.
👉 HAYANGE USTH 3 🆚 MAIZIERES 12

On ne lâche rien, on se bat sur chaque balle ! Allez Hayange ! 🍀💚`
  },
  "bilan-coupe-mirabelle": {
    title: "Bilan du 1er Tour de la Coupe Mirabelle",
    date: "dimanche 7 décembre 2025",
    image: actu3,
    content: `🏓 BILAN DU 1ER TOUR DE LA COUPE MIRABELLE !

Retour sur les rencontres du 05/12/2025 face à Clouange 😭.

Un bilan contrasté pour nos équipes du Hayange USTH :

🔵 MATCH 1 : L'ÉQUIPE 1 IMPÉRIALE !
CLOUANGE TT (1) 0️⃣ - 9️⃣ HAYANGE USTH (1)
Carton plein pour notre équipe première ! Une victoire parfaite et sans appel.

Un grand bravo à nos joueurs pour cette démonstration de force ! 🔥🍀

🟢 MATCH 2 : SOIRÉE DIFFICILE POUR LA 2
CLOUANGE TT (2) 8️⃣ - 1️⃣ HAYANGE USTH (2)
Notre équipe 2 s'incline lourdement face à une équipe de Clouange très en forme.

Courage pour la suite ! 💪`
  },
  "coupe-mirabelle-annonce": {
    title: "Coup de Projecteur sur la Coupe Mirabelle",
    date: "mardi 2 décembre 2025",
    image: actu2,
    content: `🏓 COUP DE PROJECTEUR SUR LA COUPE MIRABELLE DE TENNIS DE TABLE ! 🏓

Préparez-vous pour des matchs intenses et des échanges palpitants ! La prochaine journée de la Coupe Mirabelle approche à grands pas et nous vous donnons rendez-vous le 05 Décembre 2025 pour des rencontres explosives !

Nous mettons à l'honneur les équipes qui s'affronteront :
⚔️ TT Clouange (1) vs Hayange USTH (1)
⚔️ TT Clouange (2) vs Hayange USTH (2)

Venez nombreux encourager vos équipes favorites et vibrer au rythme du tennis de table !`
  },
  "recrutement-usth": {
    title: "USTH TT Recrute !",
    date: "lundi 1 décembre 2025",
    image: actu1,
    content: `🏓 USTH TT RECRUTE !

VIENS T'ESSAYER AU TENNIS DE TABLE AVEC NOUS !

Le club Hayange USTH TT ouvre ses portes et recrute de nouveaux joueurs !

Que tu sois passionné de compétition ou simplement à la recherche d'une activité fun et conviviale, notre club t'accueille à bras ouverts.

🎯 RECRUTEMENT JOUEURS COMPÉTITION
Tu veux te challenger et représenter notre club en championnat ? Rejoins nos équipes et vis l'adrénaline des matchs officiels !

🎉 JOUEURS LOISIR / FUN
Envie de te détendre, de rigoler et de taper la balle entre amis ? Notre section loisir est faite pour toi !

N'hésite pas à venir faire un essai gratuit lors de nos créneaux d'entraînement. Contacte-nous pour plus d'informations !`
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
              <p key={index} className="text-foreground mb-6 leading-relaxed whitespace-pre-line">
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
