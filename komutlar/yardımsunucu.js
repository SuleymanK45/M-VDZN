const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let prefix = '+'
let yardım = new Discord.RichEmbed()
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Yapımcı Suleyman#2383',`
**+duyuru** : ***Duyuru Yapar***.
**+oylama** : ***Oylama Yapar***.
**+çekiliş** : ***Çekiliş Yapar***.
**+botistatistik** : ***Botun İstatistiğini Gösterir***.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu"],
  permLevel: 0
};
exports.help = {
  name: 'yardımsunucu',
  description: 'Sunucu.',
  usage: 'sunucu'
};
//Süleyman
