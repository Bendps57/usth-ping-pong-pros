import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { LogOut, Plus, Trophy, Calendar, Trash2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface MatchResult {
  id: string;
  team_name: string;
  championship: string;
  tour: number;
  match_date: string;
  opponent_team: string;
  our_score: number;
  opponent_score: number;
  is_home: boolean;
}

const teams = [
  { name: "HAYANGE USTH 1", championship: "GE6" },
  { name: "HAYANGE USTH 2", championship: "GE7" },
  { name: "HAYANGE USTH 3", championship: "GE7" },
];

const Admin = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [tour, setTour] = useState("");
  const [matchDate, setMatchDate] = useState("");
  const [opponentTeam, setOpponentTeam] = useState("");
  const [ourScore, setOurScore] = useState("");
  const [opponentScore, setOpponentScore] = useState("");
  const [isHome, setIsHome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchResults();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/login");
    }
  };

  const fetchResults = async () => {
    const { data, error } = await supabase
      .from('match_results')
      .select('*')
      .order('match_date', { ascending: false });

    if (error) {
      console.error('Error fetching results:', error);
      return;
    }

    setMatchResults(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const team = teams.find(t => t.name === selectedTeam);
    if (!team) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner une équipe",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('match_results')
        .insert({
          team_name: selectedTeam,
          championship: team.championship,
          tour: parseInt(tour),
          match_date: matchDate,
          opponent_team: opponentTeam.trim(),
          our_score: parseInt(ourScore),
          opponent_score: parseInt(opponentScore),
          is_home: isHome,
        });

      if (error) throw error;

      toast({
        title: "Résultat ajouté",
        description: "Le résultat du match a été enregistré avec succès !",
      });

      // Reset form
      setTour("");
      setMatchDate("");
      setOpponentTeam("");
      setOurScore("");
      setOpponentScore("");
      setIsHome(true);

      // Refresh results
      fetchResults();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('match_results')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Supprimé",
        description: "Le résultat a été supprimé",
      });

      fetchResults();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Header */}
      <div className="bg-primary/10 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Administration</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add Result Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                Ajouter un Résultat
              </CardTitle>
              <CardDescription>
                Enregistrez le résultat d'un nouveau match
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Équipe</Label>
                  <Select value={selectedTeam} onValueChange={setSelectedTeam} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner l'équipe" />
                    </SelectTrigger>
                    <SelectContent>
                      {teams.map((team) => (
                        <SelectItem key={team.name} value={team.name}>
                          {team.name} ({team.championship})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tour">Journée</Label>
                    <Input
                      id="tour"
                      type="number"
                      min="1"
                      placeholder="Ex: 7"
                      value={tour}
                      onChange={(e) => setTour(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date du match</Label>
                    <Input
                      id="date"
                      type="date"
                      value={matchDate}
                      onChange={(e) => setMatchDate(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="opponent">Équipe adverse</Label>
                  <Input
                    id="opponent"
                    type="text"
                    placeholder="Ex: MANOM J.S 6"
                    value={opponentTeam}
                    onChange={(e) => setOpponentTeam(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ourScore">Notre score</Label>
                    <Input
                      id="ourScore"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={ourScore}
                      onChange={(e) => setOurScore(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="opponentScore">Score adverse</Label>
                    <Input
                      id="opponentScore"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={opponentScore}
                      onChange={(e) => setOpponentScore(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-secondary/10 rounded-lg">
                  <Switch
                    id="isHome"
                    checked={isHome}
                    onCheckedChange={setIsHome}
                  />
                  <Label htmlFor="isHome" className="cursor-pointer">
                    {isHome ? "Match à domicile" : "Match à l'extérieur"}
                  </Label>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Enregistrement..." : "Enregistrer le résultat"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Résultats Enregistrés
              </CardTitle>
              <CardDescription>
                Les derniers résultats ajoutés
              </CardDescription>
            </CardHeader>
            <CardContent>
              {matchResults.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Aucun résultat enregistré
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Équipe</TableHead>
                        <TableHead>Match</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {matchResults.slice(0, 10).map((result) => (
                        <TableRow key={result.id}>
                          <TableCell className="font-medium text-xs">
                            {result.team_name.replace('HAYANGE ', '')}
                          </TableCell>
                          <TableCell className="text-xs">
                            <div className="flex flex-col">
                              <span>vs {result.opponent_team}</span>
                              <span className="text-muted-foreground">
                                {formatDate(result.match_date)}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className={`font-bold ${
                              result.our_score > result.opponent_score 
                                ? 'text-green-600' 
                                : result.our_score < result.opponent_score 
                                  ? 'text-red-600' 
                                  : 'text-muted-foreground'
                            }`}>
                              {result.our_score} - {result.opponent_score}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(result.id)}
                              className="h-8 w-8 text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
