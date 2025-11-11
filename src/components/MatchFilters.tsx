import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MatchFiltersProps {
  selectedTeam: string;
  onTeamChange: (team: string) => void;
  teams: string[];
}

export const MatchFilters = ({ selectedTeam, onTeamChange, teams }: MatchFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      <Button
        variant={selectedTeam === "all" ? "default" : "outline"}
        onClick={() => onTeamChange("all")}
        className="transition-all duration-300"
      >
        Toutes les équipes
        <Badge variant="secondary" className="ml-2 bg-background/50">
          {teams.length}
        </Badge>
      </Button>
      {teams.map((team) => (
        <Button
          key={team}
          variant={selectedTeam === team ? "default" : "outline"}
          onClick={() => onTeamChange(team)}
          className="transition-all duration-300"
        >
          {team}
        </Button>
      ))}
    </div>
  );
};
