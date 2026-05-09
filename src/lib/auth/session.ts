export type UserRole='admin'|'scout'|'analyst'|'sporting_director'
export type SessionUser={id:string;name:string;clubId:string;role:UserRole}
export const mockSession:SessionUser={id:'1',name:'Head Scout',clubId:'guarani',role:'sporting_director'}
export function hasPermission(user:SessionUser,roles:UserRole[]){return roles.includes(user.role)}
