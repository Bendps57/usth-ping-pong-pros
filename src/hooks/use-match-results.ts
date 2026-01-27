import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface DatabaseMatchResult {
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

export interface FormattedResult {
  tour: number;
  date: string;
  match: string;
  isHome: boolean;
  isVictory: boolean;
}

export interface TeamWithResults {
  name: string;
  championship: string;
  results: FormattedResult[];
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

const formatMatchResult = (result: DatabaseMatchResult): FormattedResult => {
  const isVictory = result.our_score > result.opponent_score;
  
  // Format match string based on home/away
  let matchString: string;
  if (result.is_home) {
    matchString = `${result.team_name} ${result.our_score} - ${result.opponent_score} ${result.opponent_team}`;
  } else {
    matchString = `${result.opponent_team} ${result.opponent_score} - ${result.our_score} ${result.team_name}`;
  }
  
  return {
    tour: result.tour,
    date: formatDate(result.match_date),
    match: matchString,
    isHome: result.is_home,
    isVictory
  };
};

export const useMatchResults = () => {
  const [dbResults, setDbResults] = useState<DatabaseMatchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      const { data, error } = await supabase
        .from('match_results')
        .select('*')
        .order('tour', { ascending: true });

      if (error) {
        console.error('Error fetching match results:', error);
      } else {
        setDbResults(data || []);
      }
      setIsLoading(false);
    };

    fetchResults();
  }, []);

  // Group results by team
  const getResultsByTeam = (teamName: string): FormattedResult[] => {
    return dbResults
      .filter(r => r.team_name === teamName)
      .map(formatMatchResult);
  };

  return { dbResults, getResultsByTeam, isLoading };
};
