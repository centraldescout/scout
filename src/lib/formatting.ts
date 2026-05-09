export function formatCurrency(value:number){return new Intl.NumberFormat('en-US',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(value)}
export function formatPercentile(value:number){return `${Math.round(value)}th percentile`}
export function formatMinutes(value:number){return `${value.toLocaleString()} min`}
export function formatAge(value:number){return `${value} yrs`}
export function formatScore(value:number){return `${Math.round(value)}/100`}
