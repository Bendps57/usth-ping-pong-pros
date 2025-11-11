import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, Trophy, Calendar } from "lucide-react";

const players = [
  "Lucas NOGA",
  "Thierry HEINTZ",
  "Laurent MICHAUX",
  "Noel DEHARCHIES",
  "Benjamin DUVERGER",
  "Gilbert NADALIN",
  "Julien BENEDETTI",
  "Jean-Pierre COSSIN",
  "Joseph NAPOLITANO",
  "Manuel DOMINGUEZ",
  "Paul PIZZIMENTI",
  "Gregory ARGENTA",
  "Didier OTT",
  "Guy LAROCHE",
  "Andrea PEGORARO",
  "Daniel BENOIT",
  "Jean-Luc BACK",
  "Jeanne LAROCHE",
  "Ludovic GUILLEMOT",
  "Jeanne GUILLEMOT",
  "Lorrain DIDIER",
  "Adrien OTT",
  "Benoit WEMMERT"
];

const teams = [
  {
    name: "HAYANGE USTH 1",
    championship: "GE6",
    results: [
      { tour: 1, date: "28/09/2025", match: "BASSE HAM BHTT(2) 4 - 10 HAYANGE USTH 1", isHome: false },
      { tour: 2, date: "12/10/2025", match: "HAYANGE USTH 1 14 - 0 SIERCK SLPTT 1", isHome: true },
      { tour: 3, date: "09/11/2025", match: "TERVILLE TT 8 9 - 5 HAYANGE USTH 1", isHome: false }
    ]
  },
  {
    name: "HAYANGE USTH 2",
    championship: "GE7",
    results: [
      { tour: 1, date: "28/09/2025", match: "HAYANGE USTH 2 7 - 3 CLOUANGE T.T 3", isHome: true },
      { tour: 2, date: "12/10/2025", match: "ILLANGE USTT 6 4 - 6 HAYANGE USTH 2", isHome: false },
      { tour: 3, date: "09/11/2025", match: "HAYANGE USTH 2 9 - 1 BASSE HAM BHTT 3", isHome: true }
    ]
  },
  {
    name: "HAYANGE USTH 3",
    championship: "GE7",
    results: [
      { tour: 1, date: "28/09/2025", match: "HAYANGE USTH 3 0 - 10 HAGONDANGE E.S 4", isHome: true },
      { tour: 2, date: "12/10/2025", match: "TERVILLE TT 11 4 - 6 HAYANGE USTH 3", isHome: false },
      { tour: 3, date: "09/11/2025", match: "HAYANGE USTH 3 9 - 1 KNUT-NILV TT 7", isHome: true }
    ]
  }
];

const upcomingMatches = [
  // HAYANGE USTH 1
  { tour: 4, match: "ILLANGE USTT 5 vs HAYANGE USTH 1", date: "16/11/2025", team: "HAYANGE USTH 1", championship: "GE6" },
  { tour: 5, match: "HAYANGE USTH 1 vs AUDUN LE ROMAN 8", date: "30/11/2025", team: "HAYANGE USTH 1", championship: "GE6" },
  { tour: 6, match: "ROUSSY TT 2 vs HAYANGE USTH 1", date: "14/12/2025", team: "HAYANGE USTH 1", championship: "GE6" },
  { tour: 7, match: "HAYANGE USTH 1 vs MANOM J.S 6", date: "11/01/2026", team: "HAYANGE USTH 1", championship: "GE6" },
  // HAYANGE USTH 2
  { tour: 4, match: "KNUT-NILV TT 8 vs HAYANGE USTH 2", date: "16/11/2025", team: "HAYANGE USTH 2", championship: "GE7" },
  { tour: 5, match: "HAYANGE USTH 2 vs THIONVILLE TT 10", date: "30/11/2025", team: "HAYANGE USTH 2", championship: "GE7" },
  { tour: 6, match: "HAYANGE USTH 2 vs TERVILLE TT 9", date: "14/12/2025", team: "HAYANGE USTH 2", championship: "GE7" },
  { tour: 7, match: "PAYS SIERCKOIS 3 vs HAYANGE USTH 2", date: "11/01/2026", team: "HAYANGE USTH 2", championship: "GE7" },
  // HAYANGE USTH 3
  { tour: 4, match: "HAYANGE USTH 3 vs MAIZIERES 13", date: "16/11/2025", team: "HAYANGE USTH 3", championship: "GE7" },
  { tour: 5, match: "T.T Amneville 7 vs HAYANGE USTH 3", date: "30/11/2025", team: "HAYANGE USTH 3", championship: "GE7" },
  { tour: 6, match: "HAYANGE USTH 3 vs MAIZIERES 12", date: "14/12/2025", team: "HAYANGE USTH 3", championship: "GE7" },
  { tour: 7, match: "CLOUANGE T.T 4 vs HAYANGE USTH 3", date: "11/01/2026", team: "HAYANGE USTH 3", championship: "GE7" },
];

const Teams = () => {
  const playersAnim = useScrollAnimation();
  const teamsAnim = useScrollAnimation();
  const resultsAnim = useScrollAnimation();
  const calendarAnim = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Nos Joueurs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre équipe de passionnés qui représentent l'USTH Tennis de Table
            </p>
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-20 bg-background" ref={playersAnim.ref}>
        <div className="container mx-auto px-6">
          <div className={`mb-12 text-center transition-all duration-1000 ${
            playersAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Nos Licenciés</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              {players.length} joueurs passionnés représentent notre club
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-1000 delay-200 ${
            playersAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {players.map((player, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
                <CardContent className="p-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">
                      {player.split(' ')[0].charAt(0)}{player.split(' ')[player.split(' ').length - 1].charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm leading-tight">{player}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-20 bg-secondary/5" ref={teamsAnim.ref}>
        <div className="container mx-auto px-6">
          <div className={`mb-12 text-center transition-all duration-1000 ${
            teamsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-4">
              <Trophy className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Nos Équipes</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              3 équipes en compétition cette saison
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            teamsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {teams.map((team, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-card to-card/50">
                <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/10 to-transparent">
                  <CardTitle className="text-2xl font-bold text-foreground">{team.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary hover:bg-primary/20 text-sm font-semibold">
                      Championnat {team.championship}
                    </Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background" ref={resultsAnim.ref}>
        <div className="container mx-auto px-6">
          <div className={`mb-12 text-center transition-all duration-1000 ${
            resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-foreground mb-4">Résultats Actuels</h2>
            <p className="text-lg text-muted-foreground">
              Les dernières performances de nos équipes
            </p>
          </div>

          <div className={`space-y-12 transition-all duration-1000 delay-200 ${
            resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {teams.map((team, teamIndex) => (
              <div key={teamIndex}>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded" />
                  {team.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {team.results.map((result, resultIndex) => {
                    const isVictory = team.name.includes("USTH 1") 
                      ? (resultIndex === 0 && true) || (resultIndex === 1 && true) || (resultIndex === 2 && false)
                      : team.name.includes("USTH 2")
                      ? (resultIndex === 0 && true) || (resultIndex === 1 && true) || (resultIndex === 2 && true)
                      : (resultIndex === 0 && false) || (resultIndex === 1 && true) || (resultIndex === 2 && true);
                    
                    return (
                      <Card key={resultIndex} className={`border-l-4 hover:shadow-lg transition-all duration-300 ${
                        isVictory ? 'border-l-green-500 bg-green-500/5' : 'border-l-red-500 bg-red-500/5'
                      }`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="font-semibold">Tour n°{result.tour}</Badge>
                            <Badge className={isVictory ? 'bg-green-500/20 text-green-700 dark:text-green-300 hover:bg-green-500/30' : 'bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30'}>
                              {isVictory ? 'Victoire' : 'Défaite'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{result.date}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-base font-semibold text-foreground leading-relaxed">
                            {(() => {
                              // Parse the match string to highlight scores
                              const matchText = result.match;
                              const scorePattern = /(\d+)\s*-\s*(\d+)/;
                              const scoreMatch = matchText.match(scorePattern);
                              
                              if (scoreMatch) {
                                const [fullScore, score1, score2] = scoreMatch;
                                const isUsthFirst = matchText.indexOf('HAYANGE USTH') < matchText.indexOf(fullScore);
                                const usthScore = isUsthFirst ? score1 : score2;
                                const opponentScore = isUsthFirst ? score2 : score1;
                                
                                const parts = matchText.split(scorePattern);
                                
                                return (
                                  <span className="flex flex-wrap items-center gap-2">
                                    <span>{parts[0]}</span>
                                    <Badge className={`${isUsthFirst ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white font-bold text-sm px-3 py-1`}>
                                      {score1}
                                    </Badge>
                                    <span className="font-bold">-</span>
                                    <Badge className={`${isUsthFirst ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white font-bold text-sm px-3 py-1`}>
                                      {score2}
                                    </Badge>
                                    <span>{parts[3]}</span>
                                  </span>
                                );
                              }
                              
                              return matchText;
                            })()}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background" ref={calendarAnim.ref}>
        <div className="container mx-auto px-6">
          <div className={`mb-12 text-center transition-all duration-1000 ${
            calendarAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-4">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Calendrier des Rencontres</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Prochains matchs à venir
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${
            calendarAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {upcomingMatches.map((match, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="border-b border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/90 hover:bg-primary">{match.team}</Badge>
                    <Badge variant="outline" className="font-semibold">Tour n°{match.tour}</Badge>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm">
                    Championnat {match.championship}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground leading-relaxed">
                      {match.match}
                    </p>
                    <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                      <Calendar className="h-4 w-4 text-primary" />
                      <p className="text-sm font-semibold text-foreground">{match.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
