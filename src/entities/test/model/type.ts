export type MatchOption = {
  text: string;
};

export type MatchTestQuestion = {
  id: string;
  title: string;
  leftColumn: MatchOption[];
  rightColumn: MatchOption[];
};
