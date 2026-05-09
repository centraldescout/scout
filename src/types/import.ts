export type ImportPreviewRow=Record<string,string|number|null>
export type ImportValidationReport={rows:number;columns:string[];missingRequired:string[];warnings:string[]}
export const requiredStatsBombColumns=['player_name','team_name','competition_name','season_name']
