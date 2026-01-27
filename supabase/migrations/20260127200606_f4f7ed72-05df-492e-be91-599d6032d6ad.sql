-- Create table for match results
CREATE TABLE public.match_results (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    team_name TEXT NOT NULL,
    championship TEXT NOT NULL,
    tour INTEGER NOT NULL,
    match_date DATE NOT NULL,
    opponent_team TEXT NOT NULL,
    our_score INTEGER NOT NULL CHECK (our_score >= 0),
    opponent_score INTEGER NOT NULL CHECK (opponent_score >= 0),
    is_home BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.match_results ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (everyone can see results)
CREATE POLICY "Anyone can view match results" 
ON public.match_results 
FOR SELECT 
USING (true);

-- Create policy for authenticated users to insert
CREATE POLICY "Authenticated users can insert match results" 
ON public.match_results 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Create policy for authenticated users to update
CREATE POLICY "Authenticated users can update match results" 
ON public.match_results 
FOR UPDATE 
TO authenticated
USING (true);

-- Create policy for authenticated users to delete
CREATE POLICY "Authenticated users can delete match results" 
ON public.match_results 
FOR DELETE 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_match_results_updated_at
BEFORE UPDATE ON public.match_results
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();