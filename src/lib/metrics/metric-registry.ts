export type MetricCategory='attacking'|'passing'|'defending'|'possession'|'physical'|'tracking'|'obv'
export type PositionGroup='GK'|'CB'|'FB'|'DM'|'CM'|'AM'|'Winger'|'ST'
export type MetricDefinition={slug:string;displayName:string;category:MetricCategory;unit:string;percentileEnabled:boolean;radarEnabled:boolean;invertScale:boolean;decimals:number;positionGroups:PositionGroup[]}
const all:PositionGroup[]=['GK','CB','FB','DM','CM','AM','Winger','ST']
export const metricRegistry:MetricDefinition[]=[
{slug:'np_xg_90',displayName:'NP xG/90',category:'attacking',unit:'per90',percentileEnabled:true,radarEnabled:true,invertScale:false,decimals:2,positionGroups:['AM','Winger','ST']},
{slug:'goals_90',displayName:'Goals/90',category:'attacking',unit:'per90',percentileEnabled:true,radarEnabled:true,invertScale:false,decimals:2,positionGroups:['Winger','ST']},
{slug:'xa_90',displayName:'xA/90',category:'passing',unit:'per90',percentileEnabled:true,radarEnabled:true,invertScale:false,decimals:2,positionGroups:['CM','AM','Winger']},
{slug:'key_passes_90',displayName:'Key Passes/90',category:'passing',unit:'per90',percentileEnabled:true,radarEnabled:true,invertScale:false,decimals:2,positionGroups:['CM','AM','Winger']},
{slug:'deep_progressions_90',displayName:'Deep Progressions/90',category:'possession',unit:'per90',percentileEnabled:true,radarEnabled:true,invertScale:false,decimals:2,positionGroups:['CB','FB','DM','CM','AM']},
{slug:'tackles_90',displayName:'Tackles/90',category:'defending',unit:'per90',percentileEnabled:true,radarEnabled:true,invertScale:false,decimals:2,positionGroups:['CB','FB','DM','CM']},
{slug:'interceptions_90',displayName:'Interceptions/90',category:'defending',unit:'per90',percentileEnabled:true,radarEnabled:true,invertScale:false,decimals:2,positionGroups:['CB','FB','DM','CM']},
{slug:'pressures_90',displayName:'Pressures/90',category:'defending',unit:'per90',percentileEnabled:true,radarEnabled:true,invertScale:false,decimals:2,positionGroups:['FB','DM','CM','AM','Winger','ST']},
{slug:'obv_90',displayName:'OBV/90',category:'obv',unit:'per90',percentileEnabled:true,radarEnabled:true,invertScale:false,decimals:2,positionGroups:all},
{slug:'sprint_distance_full_all',displayName:'Sprint Distance',category:'physical',unit:'m',percentileEnabled:true,radarEnabled:false,invertScale:false,decimals:0,positionGroups:all},
{slug:'hsr_distance_full_all',displayName:'HSR Distance',category:'physical',unit:'m',percentileEnabled:true,radarEnabled:false,invertScale:false,decimals:0,positionGroups:all},
{slug:'total_metersperminute_full_all',displayName:'Meters/Min',category:'tracking',unit:'m/min',percentileEnabled:true,radarEnabled:false,invertScale:false,decimals:1,positionGroups:all}
]
export const getMetric=(slug:string)=>metricRegistry.find(metric=>metric.slug===slug)
