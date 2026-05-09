import { playerRepository } from '@/repositories/player-repository'
import { calculateMonchiScore } from '@/lib/scouting/monchi-score'
export class PlayerService{async getPlayers(filters?:any){const data=await playerRepository.findAll(filters);return data.map(player=>({...player,computedMonchiScore:calculateMonchiScore(player)}))}async getPlayer(id:string){const player=await playerRepository.findById(id);if(!player)return null;return {...player,computedMonchiScore:calculateMonchiScore(player)}}}
export const playerService=new PlayerService()
