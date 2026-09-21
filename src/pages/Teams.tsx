import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useMatchResults, type FormattedResult } from "@/hooks/use-match-results";
import { Users, Calendar } from "lucide-react";
import { MatchResultCard } from "@/components/MatchResultCard";
import { MatchFilters } from "@/components/MatchFilters";
import { useState, useMemo } from "react";

// Liste triée par nom de famille (le mot en majuscules)
const players = [
  "Gregory ARGENTA",
  "Jean-Luc BACK",
  "Julien BENEDETTI",
  "Daniel BENOIT",
  "Jean-Pierre COSSIN",
  "Noel DEHARCHIES",
  "Lorrain DIDIER",
  "Manuel DOMINGUEZ",
  "Benjamin DUVERGER",
  "Chantal EDERLE",
  "Jeanne GUILLEMOT",
  "Ludovic GUILLEMOT",
  "Thierry HEINTZ",
  "Gérard JAMROZIK",
  "Guy LAROCHE",
  "Jeanne LAROCHE",
  "Magali MASSON",
  "Laurent MICHAUX",
  "Gilbert NADALIN",
  "Joseph NAPOLITANO",
  "Lucas NOGA",
  "Adrien OTT",
  "Didier OTT",
  "Andrea PEGORARO",
  "Paul PIZZIMENTI",
  "David POLI"
];

// Les résultats sont désormais saisis depuis l'espace administration
type StaticTeam = {
  name: string;
  championship: string;
  pool: string;
  results: FormattedResult[];
};

const staticTeams: StaticTeam[] = [
  {
    name: "HAYANGE USTH 1",
    championship: "GE5",
    pool: "Poule 5",
    results: []
  },
  {
    name: "HAYANGE USTH 2",
    championship: "GE7",
    pool: "Poule 12",
    results: []
  },
  {
    name: "HAYANGE USTH 3",
    championship: "GE7",
    pool: "Poule 13",
    results: []
  }
];

const upcomingMatchesData = [
  { tour: 2, match: "HAYANGE USTH 1 vs à définir", date: "À venir", team: "HAYANGE USTH 1", championship: "GE5", pool: "Poule 5" },
  { tour: 2, match: "HAYANGE USTH 2 vs à définir", date: "À venir", team: "HAYANGE USTH 2", championship: "GE7", pool: "Poule 12" },
  { tour: 2, match: "HAYANGE USTH 3 vs à définir", date: "À venir", team: "HAYANGE USTH 3", championship: "GE7", pool: "Poule 13" },
];

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [showAllResults, setShowAllResults] = useState(false);
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const { getResultsByTeam, isLoading } = useMatchResults();
  
  const playersAnim = useScrollAnimation();
  const resultsAnim = useScrollAnimation();
  const calendarAnim = useScrollAnimation();

  // Combine static and dynamic results
  const teams = useMemo(() => {
    return staticTeams.map(team => {
      const dbResults = getResultsByTeam(team.name);
      // Combine static results with database results, avoiding duplicates by tour
      const existingTours = new Set(team.results.map(r => r.tour));
      const newResults = dbResults.filter(r => !existingTours.has(r.tour));
      
      return {
        ...team,
        results: [...team.results, ...newResults].sort((a, b) => a.tour - b.tour)
      };
    });
  }, [getResultsByTeam]);

  // Filter out upcoming matches that already have results
  const upcomingMatches = useMemo(() => {
    return upcomingMatchesData.filter(upcoming => {
      const teamResults = teams.find(t => t.name === upcoming.team);
      if (!teamResults) return true;
      // Check if this tour already has a result for this team
      return !teamResults.results.some(r => r.tour === upcoming.tour);
    });
  }, [teams]);

  const teamNames = teams.map(t => t.name);
  
  const filteredTeams = selectedTeam === "all" 
    ? teams 
    : teams.filter(t => t.name === selectedTeam);
  
  const filteredUpcoming = selectedTeam === "all"
    ? upcomingMatches
    : upcomingMatches.filter(m => m.team === selectedTeam);
  
  const displayedUpcoming = showAllUpcoming 
    ? filteredUpcoming 
    : filteredUpcoming.slice(0, 6);
  
  const RESULTS_LIMIT = 6;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
              Nos Joueurs
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre équipe de passionnés qui représentent l'USTH Tennis de Table
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-background" ref={resultsAnim.ref}>
        <div className="container mx-auto px-6">
          <div className={`mb-10 text-center transition-all duration-1000 ${
            resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-foreground mb-4">Résultats 2026-2027</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Les dernières performances de nos équipes
            </p>
            
            <MatchFilters 
              selectedTeam={selectedTeam}
              onTeamChange={setSelectedTeam}
              teams={teamNames}
            />
          </div>

          <div className={`transition-all duration-1000 delay-200 ${
            resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className={`grid grid-cols-1 gap-8 items-start ${
              filteredTeams.length === 1 ? 'lg:grid-cols-1 max-w-2xl mx-auto'
              : filteredTeams.length === 2 ? 'lg:grid-cols-2'
              : 'lg:grid-cols-3'
            }`}>
              {filteredTeams.map((team, teamIndex) => {
                const displayedResults = showAllResults 
                  ? team.results 
                  : team.results.slice(0, RESULTS_LIMIT);
                
                return (
                  <div key={teamIndex} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                        <div className="h-1 w-10 bg-gradient-to-r from-primary to-primary/50 rounded" />
                        {team.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 pl-[3.25rem]">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-xs font-semibold">
                          Championnat {team.championship}
                        </Badge>
                        <Badge variant="outline" className="text-xs font-semibold">
                          {team.pool}
                        </Badge>
                      </div>
                    </div>
                    {team.results.length === 0 && (
                      <p className="text-sm text-muted-foreground italic">
                        Aucun résultat enregistré pour le moment.
                      </p>
                    )}
                    <div className="flex flex-col gap-4">
                      {displayedResults.map((result, resultIndex) => {
                        // Calculate victory based on score parsing for static results
                        // or use isVictory from database results
                        let isVictory = (result as any).isVictory;
                        if (isVictory === undefined) {
                          const scorePattern = /(\d+)\s*-\s*(\d+)/;
                          const scoreMatch = result.match.match(scorePattern);
                          if (scoreMatch) {
                            const [, score1, score2] = scoreMatch;
                            const isUsthFirst = result.match.indexOf(team.name) < result.match.indexOf(scoreMatch[0]);
                            isVictory = isUsthFirst ? parseInt(score1) > parseInt(score2) : parseInt(score2) > parseInt(score1);
                          } else {
                            isVictory = false;
                          }
                        }
                        
                        return (
                          <MatchResultCard 
                            key={resultIndex} 
                            result={result} 
                            isVictory={isVictory}
                          />
                        );
                      })}
                    </div>
                    {team.results.length > RESULTS_LIMIT && !showAllResults && (
                      <div className="text-center">
                        <Button 
                          variant="outline" 
                          onClick={() => setShowAllResults(true)}
                          className="hover:bg-primary/10"
                        >
                          Voir tous les résultats ({team.results.length})
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {showAllResults && (
              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAllResults(false)}
                  className="hover:bg-primary/10"
                >
                  Voir moins
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

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

          <div className={`transition-all duration-1000 delay-200 ${
            calendarAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedUpcoming.map((match, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
                  <CardHeader className="border-b border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary/90 hover:bg-primary">{match.team}</Badge>
                      <Badge variant="outline" className="font-semibold">Tour n°{match.tour}</Badge>
                    </div>
                    <CardDescription className="text-muted-foreground text-sm">
                      Championnat {match.championship} · {match.pool}
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
            
            {filteredUpcoming.length > 6 && (
              <div className="mt-8 text-center">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAllUpcoming(!showAllUpcoming)}
                  className="hover:bg-primary/10"
                >
                  {showAllUpcoming 
                    ? 'Voir moins' 
                    : `Voir tous les matchs (${filteredUpcoming.length})`}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
