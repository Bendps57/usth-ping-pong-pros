import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface MatchResult {
  tour: number;
  date: string;
  match: string;
  isHome: boolean;
}

interface MatchResultCardProps {
  result: MatchResult;
  isVictory: boolean;
}

export const MatchResultCard = ({ result, isVictory }: MatchResultCardProps) => {
  const parseMatchScore = (matchText: string) => {
    const scorePattern = /(\d+)\s*-\s*(\d+)/;
    const scoreMatch = matchText.match(scorePattern);
    
    if (scoreMatch) {
      const [fullScore, score1, score2] = scoreMatch;
      const isUsthFirst = matchText.indexOf('HAYANGE USTH') < matchText.indexOf(fullScore);
      const parts = matchText.split(scorePattern);
      
      return {
        teamBefore: parts[0],
        score1: parseInt(score1),
        score2: parseInt(score2),
        teamAfter: parts[3],
        isUsthFirst
      };
    }
    
    return null;
  };

  const scoreData = parseMatchScore(result.match);

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-secondary/5 border-border/50">
      <div className={`h-1.5 w-full ${isVictory ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'}`} />
      <CardHeader className="pb-4 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="font-semibold border-primary/30 text-primary">
            Tour n°{result.tour}
          </Badge>
          <Badge className={`${
            isVictory 
              ? 'bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30' 
              : 'bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30'
            } border font-semibold px-3 py-1`}>
            {isVictory ? '✓ Victoire' : '✗ Défaite'}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5" />
          {result.date}
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        {scoreData ? (
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">{scoreData.teamBefore}</div>
            <div className="flex items-center justify-center gap-3 py-3 px-4 bg-secondary/30 rounded-lg">
              <span className={`text-3xl font-bold ${
                scoreData.isUsthFirst 
                  ? (scoreData.score1 > scoreData.score2 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')
                  : (scoreData.score2 > scoreData.score1 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')
              }`}>
                {scoreData.score1}
              </span>
              <span className="text-2xl font-bold text-muted-foreground">-</span>
              <span className={`text-3xl font-bold ${
                scoreData.isUsthFirst 
                  ? (scoreData.score2 > scoreData.score1 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')
                  : (scoreData.score1 > scoreData.score2 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')
              }`}>
                {scoreData.score2}
              </span>
            </div>
            <div className="text-sm text-muted-foreground text-right">{scoreData.teamAfter}</div>
          </div>
        ) : (
          <div className="text-base font-semibold text-foreground">{result.match}</div>
        )}
      </CardContent>
    </Card>
  );
};
