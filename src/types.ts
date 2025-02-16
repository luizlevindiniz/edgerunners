export type Marathon = {
  id: string;
  created_at: Date;
  name?: string | null;
  thumbnail_url?: string | null;
  promoter?: string | null;
  starting_date: Date;
  ending_date: Date;
  price: number;
  tracks?: string[] | null;
  description?: string | null;
};
