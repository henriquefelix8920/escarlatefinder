import type { LeadSource } from "../contract";
import { listouAchouSource } from "./listou-achou";

export const prospectSources: LeadSource[] = [
  listouAchouSource,
];

export function getProspectSource(
  sourceId: string
): LeadSource | undefined {
  return prospectSources.find(
    (source) => source.id === sourceId
  );
}
