import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock, MapPin } from "lucide-react";

const Teams = () => {
  const teams = [
    {
      name: "Équipe 1 - Régionale",
      level: "Régionale 2",
      description: "Notre équipe phare qui évolue en championnat régional",
      schedule: "Mardi et Jeudi 19h-21h",
      location: "Gymnase Principal",
      players: 8,
      achievements: ["2ème place saison 2023-2024", "Montée en Régionale 2"],
    },
    {
      name: "Équipe 2 - Départementale",
      level: "Départementale 1",
      description: "Une équipe compétitive en pleine progression",
      schedule: "Mardi et Vendredi 19h-21h",
      location: "Gymnase Principal",
      players: 8,
      achievements: ["3ème place saison 2023-2024"],
    },
    {
      name: "Équipe 3 - Départementale",
      level: "Départementale 2",
      description: "Formation et développement des jeunes talents",
      schedule: "Lundi et Jeudi 18h-20h",
      location: "Gymnase Principal",
      players: 10,
      achievements: ["Formation de 3 joueurs montés en équipe 2"],
    },
    {
      name: "Équipe Loisir",
      level: "Loisir",
      description: "Pour le plaisir de jouer dans une ambiance conviviale",
      schedule: "Mercredi 20h-22h, Samedi 14h-17h",
      location: "Gymnase Principal",
      players: 25,
      achievements: ["Meilleure ambiance garantie !"],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Nos Équipes</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Du loisir à la compétition régionale, trouvez l'équipe qui vous correspond
          </p>
        </div>
      </section>

      {/* Teams List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-5xl mx-auto">
            {teams.map((team, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold text-primary">{team.name}</h2>
                    </div>
                    <Badge variant="secondary" className="mb-3">
                      {team.level}
                    </Badge>
                    <p className="text-muted-foreground">{team.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">{team.players} joueurs</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Horaires d'entraînement</h3>
                      <p className="text-sm text-muted-foreground">{team.schedule}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Lieu</h3>
                      <p className="text-sm text-muted-foreground">{team.location}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-sm text-muted-foreground uppercase">
                    Faits marquants
                  </h3>
                  <ul className="space-y-1">
                    {team.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Calendrier des Rencontres</h2>
            
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b">
                  <div>
                    <h3 className="font-semibold">Équipe 1 vs Nancy TT</h3>
                    <p className="text-sm text-muted-foreground">Championnat Régional</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">20 Avril 2025</p>
                    <p className="text-sm text-muted-foreground">14h00 - Domicile</p>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-b">
                  <div>
                    <h3 className="font-semibold">Équipe 2 vs Metz Sud</h3>
                    <p className="text-sm text-muted-foreground">Championnat Départemental</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">21 Avril 2025</p>
                    <p className="text-sm text-muted-foreground">15h00 - Extérieur</p>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-b">
                  <div>
                    <h3 className="font-semibold">Équipe 1 vs Strasbourg TT</h3>
                    <p className="text-sm text-muted-foreground">Championnat Régional</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">27 Avril 2025</p>
                    <p className="text-sm text-muted-foreground">16h00 - Extérieur</p>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-semibold">Équipe 3 vs Forbach TT</h3>
                    <p className="text-sm text-muted-foreground">Championnat Départemental</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">28 Avril 2025</p>
                    <p className="text-sm text-muted-foreground">14h30 - Domicile</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
