module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  console.log(`${client.user.id}                                                                                                                                                                     `)
  //client.user.setActivity(`${prefix}yardım | ${client.guilds.size} sunucu | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıyı`, { type: "LISTENING"});
client.user.setActivity(`𝚆𝚑𝚒𝚕𝚎 𝙵𝚊𝚕𝚕𝚒𝚗𝚐 » 𝚂𝚎𝚗 𝚂𝚊𝚍𝚎𝚌𝚎 𝙸𝚣𝚕𝚎 #𝚃𝚛𝚘𝚍𝚘𝚜`, { type: "WATCHING"});  
//LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 
 console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + ` kullanıcıya hizmet veriliyor!`);
};