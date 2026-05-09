const positions=['GK','CB','RB','LB','DM','CM','AM','RW','LW','ST']
const clubs=['Guarani','Palmeiras','Santos','Corinthians','São Paulo','Athletico','Bahia','Ceará']
const names=['Lucas Andrade','João Silva','Pedro Henrique','Matheus Rocha','Rafael Costa','Bruno Lima','Caio Martins','Gustavo Alves','Diego Souza','Thiago Nunes']
export const players=Array.from({length:60}).map((_,i)=>({id:`${i+1}`,fullName:`${names[i%names.length]} ${i+1}`,position:positions[i%positions.length],club:clubs[i%clubs.length],age:18+(i%15),nationality:i%5===0?'Argentina':'Brazil',minutes:780+i*37,marketValue:800000+i*180000,foot:i%2===0?'Right':'Left',height:170+(i%22),rating:62+(i%34),percentile:55+(i%42),status:['Observe','Approved','Priority','Discarded'][i%4],monchiScore:70+(i%28),photoUrl:`https://api.dicebear.com/8.x/personas/svg?seed=scout-${i+1}`,metrics:{attack:50+(i%45),passing:48+(i%44),defending:42+(i%48),physical:58+(i%36),pressing:54+(i%38)},trend:[58+(i%12),61+(i%14),64+(i%16),66+(i%18)]}))
export const clubsList=clubs
export const positionsList=positions
