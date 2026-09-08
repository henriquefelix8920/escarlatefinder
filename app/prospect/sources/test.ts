import { prospectSources } from "./index";

export function testProspectSources() {
  return prospectSources.map((source) => ({
    id: source.id,
    name: source.name,
    type: source.type,
  }));
}
