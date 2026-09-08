export type SourceSearchParams = {
  city: string;
  category: string;
};

export type PublicLead = {
  id: string;
  name: string;
  city: string;
  profileUrl: string;
  website: string | null;
  whatsapp: string | null;
  instagram: string | null;
  source: string;
  score: number;
};

export type LeadSource = {
  id: string;
  name: string;
  description: string;
  search(params: SourceSearchParams): Promise<PublicLead[]>;
};

export const sources: LeadSource[] = [];
