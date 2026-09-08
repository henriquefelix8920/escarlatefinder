import { NextResponse } from "next/server";
import { testProspectSources } from "../../../prospect/sources/test";

export async function GET() {
  const sources = testProspectSources();

  return NextResponse.json({
    ok: true,
    motor: "EscarlateFinder",
    sources,
  });
}
