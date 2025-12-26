import actu1 from "@/assets/actu1.jpg";
import actu2 from "@/assets/actu2.jpg";
import actu3 from "@/assets/actu3.jpg";
import championnatJ6 from "@/assets/championnat-j6.jpg";
import championnatJ6Resultats from "@/assets/championnat-j6-resultats.jpg";
import interviewPresident from "@/assets/interview-president.jpg";
import noelUsth from "@/assets/noel-usth.jpg";
import coupeMirabelle2Tour from "@/assets/coupe-mirabelle-2tour.jpg";

export interface Article {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

// Articles data - centralized source of truth
// Add new articles at the TOP of this array (most recent first)
export const articles: Article[] = [
  {
    id: "coupe-mirabelle-2tour",
    title: "Coupe Mirabelle : Un 2ème Tour Riche en Émotions !",
    date: "jeudi 26 décembre 2025",
    image: coupeMirabelle2Tour,
    excerpt: "Nos deux équipes étaient sur le pont pour ce 2ème tour de la Coupe Mirabelle. Victoire au bout du suspense pour l'équipe 1 !",
    content: `🏆 COUPE MIRABELLE : UN 2ÈME TOUR RICHE EN ÉMOTIONS ! 🏓

Nos deux équipes étaient sur le pont pour ce 2ème tour de la Coupe Mirabelle. Voici les résultats !

👉 MATCH 1 : VICTOIRE AU BOUT DU SUSPENSE !
Bravo à notre équipe Hayange USTH 1 qui s'impose sur le fil, sur le score très serré de 5 à 4, face à une belle équipe de ESH Tennis de Table ! Une superbe performance collective ! 💪

👉 MATCH 2 : SOIRÉE PLUS DIFFICILE...
Moins de réussite pour notre équipe Hayange USTH 2 qui s'incline 2 à 7 contre le Konacker Hayange SLTT.

On ne lâche rien, l'expérience rentre et on se concentre sur les prochains défis !

Un grand bravo à tous nos joueurs pour avoir représenté les couleurs du club ! 👏💚🤍`
  },
  {
    id: "noel-usth-2025",
    title: "L'Esprit de Noël s'Empare de l'USTH Hayange !",
    date: "vendredi 20 décembre 2025",
    image: noelUsth,
    excerpt: "Après une première partie de saison 2025 intense, il est temps pour nos guerriers du ping de poser les raquettes. Toute l'équipe vous souhaite de très joyeuses fêtes !",
    content: `🎄 L'ESPRIT DE NOËL S'EMPARE DE L'USTH HAYANGE !

Après une première partie de saison 2025 intense, riche en émotions, en belles victoires (et quelques défaites formatrices !), il est temps pour nos guerriers du ping de poser les raquettes quelques jours.

Au nom de tout le club – notre Président Gilbert Nadalin, le comité directeur, les bénévoles de l'ombre et tous les joueurs – nous tenons à vous souhaiter, à vous, vos familles et vos proches, de TRÈS JOYEUSES FÊTES DE FIN D'ANNÉE ! 🎁

Que cette période soit synonyme de chaleur, de partage, de rires... et de bons repas ! (C'est important pour la "prise de masse" avant la reprise, n'est-ce pas ? 😉).


🚀 CAP SUR 2026 !

Profitez bien de cette pause bien méritée pour recharger les batteries à 100%.

Nous vous donnons rendez-vous très vite pour une année 2026 qui s'annonce passionnante ! La deuxième phase du championnat arrive avec de grands objectifs sportifs pour nos équipes. Nous aurons besoin de toute votre énergie au bord des tables !

Prenez soin de vous et... à l'année prochaine !

🎄🏓 Joyeuses Fêtes de la part de toute l'équipe USTH Tennis de Table ! 🏓🎄`
  },
  {
    id: "championnat-j6-resultats",
    title: "Championnat J6 : Un Week-End Victorieux Pour l'USTH !",
    date: "dimanche 14 décembre 2025",
    image: championnatJ6Resultats,
    excerpt: "Ce dimanche 14 décembre se jouait le 6ème avant-dernier tour de la phase 1 du championnat. Bilan du week-end : 2 belles victoires et de l'expérience engrangée !",
    content: `🏓 CHAMPIONNAT J6 : UN WEEK-END VICTORIEUX POUR L'USTH !

Ce dimanche 14 décembre se jouait le 6ème avant-dernier tour de la phase 1 du championnat. Nos trois équipes étaient sur le pont pour défendre les couleurs de Hayange.


📊 BILAN DU WEEK-END : 2 belles victoires et de l'expérience engrangée !

Voici le détail des rencontres :


🏆 ÉQUIPE 1 : Victoire solide à l'extérieur !

Roussy TT 2 [ 5 - 9 ] Hayange USTH 1

En déplacement, notre équipe fanion a fait le travail avec sérieux. Une rencontre maîtrisée qui permet de ramener des points précieux pour l'objectif de montée en fin de saison. Bravo messieurs pour cette constance !


🏆 ÉQUIPE 2 : Intraitables à domicile !

Hayange USTH 2 [ 9 - 1 ] Terville TT 9

Quelle démonstration ! À la salle Régine Cavagnoud, l'équipe 2 n'a laissé aucune chance à ses voisins de Terville. Un score sans appel qui confirme la très bonne dynamique du groupe.


💪 ÉQUIPE 3 : L'apprentissage continue

Hayange USTH 3 [ 0 - 10 ] Maizières 12

Un dimanche matin compliqué pour notre équipe 3 qui est tombée sur un os face à une équipe de Maizières très supérieure sur le papier. On ne lâche rien ! C'est dans ce genre de matchs difficiles qu'on progresse le plus. Courage à toute l'équipe, on est ensemble !


🙏 MERCI !

Un grand bravo à tous nos joueurs pour leur combativité et leur état d'esprit irréprochable. Merci également aux supporters et bénévoles présents pour encourager les équipes.

On retourne à l'entraînement dès mardi pour préparer le dernier tour de cette phase !

Allez l'USTH ! 🍀💚`
  },
  {
    id: "interview-president",
    title: "L'Interview du Président : Gilbert Nadalin",
    date: "mercredi 18 décembre 2025",
    image: interviewPresident,
    excerpt: "Aujourd'hui, nous donnons la parole à celui qui dirige la section Tennis de Table de l'USTH depuis plus de 20 ans. Découvrez sa vision, ses anecdotes et ses ambitions pour le club !",
    content: `🏓 L'INTERVIEW DU PRÉSIDENT : GILBERT NADALIN

Aujourd'hui, nous donnons la parole à celui qui dirige la section Tennis de Table de l'USTH depuis plus de 20 ans. Découvrez sa vision, ses anecdotes et ses ambitions pour le club !


👤 PRÉSENTATION

1. Pouvez-vous vous présenter et nous rappeler depuis quand vous êtes président de l'USTH Tennis de Table ?

« Je me présente Nadalin Gilbert, Président de la section tennis de table de Hayange depuis 2002. »

2. Qu'est-ce qui vous a motivé à vous engager dans ce rôle ?

« Il n'y avait pas de désir particulier à devenir président du club; l'ancien président, trop âgé, cherchait désespérément un remplaçant, sinon la section disparaissait. J'étais pongiste dans le club depuis quelques années déjà avec mon fils et beaucoup de ses amis, raison pour laquelle, j'ai accepté. »


🏓 LE CLUB AUJOURD'HUI

3. Comment décririez-vous l'ambiance et l'esprit du club ?

« L'ambiance est très amicale, mais il y a cependant un esprit de compétition pour les adhérents qui participent en championnat départemental. Il y a également un esprit d'entraide et de bienveillance envers les nouveaux venus. C'est primordial ! »

4. Combien de licenciés compte actuellement l'USTH TT ?

« Le nombre de licenciés est de 25. »

5. Qu'est-ce qui différencie notre club des autres clubs de la région ?

« Je ne pense pas qu'il y ait des différences d'un club à l'autre, peut-être les liens qui se sont formés avec le temps. »

6. Quelles sont les équipes engagées en championnat cette saison ?

« 3 équipes engagées en championnat :

Équipe 1 en Grand Est 6 (ancienne division départementale 2)

Équipe 2 en Grand Est 7 (ancienne division départementale 3)

Équipe 3 en Grand Est 7 (ancienne division départementale 3) »


🎯 OBJECTIFS & PROJETS

7. Quels sont les grands objectifs sportifs du club cette année ?

« Les objectifs du club cette saison sont la montée des équipes engagées en division supérieure, c'est-à-dire : l'équipe 1 passe en Grand Est 5 et les équipes 2 et 3 passent en Grand Est 6. »

8. Avez-vous des projets en cours pour développer le club ?

« Comme pour les années précédentes, à la demande de l'ACSH (association culturelle de Hayange) en lien avec la municipalité, nous organisons un W.E récréatif pendant les grandes vacances scolaires pour initier des enfants à la pratique du tennis de table et peut-être pourquoi pas, ouvrir des voies. C'est un W.E encadré par moi-même qui permet aux enfants qui ne peuvent pas partir en vacances, de se divertir dans une bonne ambiance. »

9. Comment souhaitez-vous attirer de nouveaux joueurs ?

« J'espère grâce aux réseaux sociaux et le bouche à oreilles que des personnes seront attirées par cette discipline. Il faut préciser que les vendredis soir, il y a la présence d'un entraîneur pour perfectionner les joueurs. Il est disponible tant pour les confirmés que pour les novices qui souhaiteraient tester la pratique du ping pong.

J'accepte que des personnes viennent d'abord taper la balle une à deux fois et si cela leur convient, elles peuvent ensuite prendre une licence qui vaut pour la saison 72€ (+ de 18 ans) et 62€ (- de 18 ans). »


🤝 BÉNÉVOLES & COMMUNAUTÉ

10. Quel message pour les bénévoles ?

« Le message que je souhaite adresser à tous les bénévoles qui aident à la bonne marche du club est avant mes sincères remerciements. Sans eux, le travail serait bien plus conséquent. Leurs investissements sont une aide précieuse pour moi-même et pour tout le groupe. Chacun à sa façon, contribue au bon déroulement des séances d'entraînements. »

11. Qu'attendez-vous de la communauté locale ?

« La mairie de Hayange nous aide financièrement et c'est fort appréciable. Nous faisons partie de l'USTH (union sportive du Tournebride Hayange) qui regroupe 8 disciplines et qui œuvrent au sein de la commune. »


💚 VALEURS & SOUVENIRS

12. Quelles valeurs souhaitez-vous transmettre ?

« Les valeurs que je souhaite véhiculer avec tous les pongistes sont la bienveillance, le respect, l'entraide, l'esprit d'équipe et de compétition. De plus, n'oubliez pas que la pratique d'un sport est salutaire pour la santé. Notre activité se déroule dans une ambiance sympathique et amicale où des liens forts se tissent. »

13. Un souvenir marquant ?

« Plutôt qu'un moment fort, j'ai le souvenir d'une anecdote lors d'une compétition à Amnéville : un pongiste venait d'acquérir une nouvelle raquette, qui devait selon ses dires, être ultra performante. Seulement dès le premier échange de balle, sa raquette s'est désolidarisée de son manche et il ne tenait plus que le manche en main. Hilarité de tout le monde en voyant la scène et surtout devant l'air complètement médusé et dépité du pongiste. »


🚀 L'AVENIR

14. Où voyez-vous l'USTH TT dans 3 ou 5 ans ?

« J'espère que le club sera encore et toujours actif, que de nouvelles recrues viendront nous rejoindre pour apporter un souffle de jeunesse. »

15. Un rêve pour le club ?

« Mon souhait serait que notre activité ouvre la voie à des jeunes pour assurer la relève. En effet, la moyenne d'âge se situe entre 50 et 60 ans. »

16. Un dernier mot pour ceux qui hésitent ?

« Je préciserai aux personnes qui hésitent à intégrer notre club de tennis de table qu'aucune compétence particulière n'est demandée à la base et qu'il n'y a pas de limite d'âge. Je laisse les nouveaux arrivants venir s'entraîner pendant 2 - 3 séances gracieusement pour voir si l'activité leur convient. »


« Pour clore cet entretien, je tiens à remercier le comité, une équipe dynamique qui œuvre à mes côtés: Janice (secrétaire), Didier (correspondant), Julien (trésorier). Sans leur aide précieuse, rien ne serait possible. Je remercie également Lucas (entraîneur) et tous les pongistes pour leur assiduité aux entraînements et qui font vivre le tennis de table. Et j'ai le plaisir d'annoncer que de nouvelles recrues vont intégrer le club et gonfler les effectifs.

Enfin, j'adresse toute ma pleine gratitude à Benoît, un de nos joueurs qui est à l'origine de ce site Internet et qui a mené cet entretien brillamment. Un grand merci à lui par sa détermination à faire connaître encore plus notre section tennis de table de Hayange. »


📍 RAPPEL DES HORAIRES (Complexe Régine Cavagnoud) :

Mardi : 20h00 - 22h30

Jeudi : 15h00 - 17h30 (Loisirs)

Vendredi : 20h30 - 22h30

Samedi : 15h00 - 17h00


Merci Président ! 👏`
  },
  {
    id: "championnat-j6",
    title: "Championnat J6 : Dernière Ligne Droite Avant la Trêve !",
    date: "lundi 9 décembre 2025",
    image: championnatJ6,
    excerpt: "Le compte à rebours est lancé ! Ce Dimanche 14 Décembre 2025, le HAYANGE USTH aborde le 6ème tour du championnat...",
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
  {
    id: "bilan-coupe-mirabelle",
    title: "Bilan du 1er Tour de la Coupe Mirabelle",
    date: "dimanche 7 décembre 2025",
    image: actu3,
    excerpt: "Retour sur les rencontres du 05/12/2025 face à Clouange. Un bilan contrasté pour nos équipes...",
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
  {
    id: "coupe-mirabelle-annonce",
    title: "Coup de Projecteur sur la Coupe Mirabelle",
    date: "mardi 2 décembre 2025",
    image: actu2,
    excerpt: "Préparez-vous pour des matchs intenses ! La prochaine journée de la Coupe Mirabelle approche...",
    content: `🏓 COUP DE PROJECTEUR SUR LA COUPE MIRABELLE DE TENNIS DE TABLE ! 🏓

Préparez-vous pour des matchs intenses et des échanges palpitants ! La prochaine journée de la Coupe Mirabelle approche à grands pas et nous vous donnons rendez-vous le 05 Décembre 2025 pour des rencontres explosives !

Nous mettons à l'honneur les équipes qui s'affronteront :
⚔️ TT Clouange (1) vs Hayange USTH (1)
⚔️ TT Clouange (2) vs Hayange USTH (2)

Venez nombreux encourager vos équipes favorites et vibrer au rythme du tennis de table !`
  },
  {
    id: "recrutement-usth",
    title: "USTH TT Recrute !",
    date: "lundi 1 décembre 2025",
    image: actu1,
    excerpt: "Viens t'essayer au tennis de table avec nous ! Recrutement joueurs compétition et loisir...",
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
];

// Helper to get article by ID
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

// Helper to get latest N articles
export const getLatestArticles = (count: number): Article[] => {
  return articles.slice(0, count);
};
