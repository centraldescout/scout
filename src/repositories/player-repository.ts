import { players } from '@/data/mock'
export interface PlayerFilters{position?:string;club?:string;status?:string;minAge?:number;maxAge?:number}
export class MockPlayerRepository{async findAll(filters?:PlayerFilters){return players.filter(player=>!filters?.position||player.position===filters.position).filter(player=>!filters?.club||player.club===filters.club).filter(player=>!filters?.status||player.status===filters.status).filter(player=>!filters?.minAge||player.age>=filters.minAge).filter(player=>!filters?.maxAge||player.age<=filters.maxAge)}async findById(id:string){return players.find(player=>player.id===id)}}
export const playerRepository=new MockPlayerRepository()
