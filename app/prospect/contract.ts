export type LeadSourceStatus =
  | "demo"
  | "available"
  | "connected"
  | "disabled";

export type LeadSource = {
  id: string;
  name: string;
  description: string;
  status: LeadSourceStatus;
  type: "manual" | "public" | "api";

  search: (query: {
    city?: string;
    category?: string;
  }) => Promise<{
    leads: PublicLead[];
    sourceName: string;
  }>;
};

export type PublicLead = {
  id: string;
  name: string;
  city: string;
  score: number;
  instagram: string;
  website: boolean;
  photos: number;
  whatsapp: string | null;
};
