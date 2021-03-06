const { MessageEmbed, MessageAttachment } = require("discord.js");
const disbut = require('discord-buttons')
const conf = require("../../configs/settings.json")
module.exports = {
    conf: {
      aliases: ["ekip-bakma"],
      name: "ekip",
      help: "ekip"
    },
 run: async (client, message, args, durum, kanal) => {
  
let botcomamnds = "921460086650589246"
let tag = "✰" 
  let ekiprol = ["918651742579740742","921529460493287435"]
  let ekipetikettag = ["1706","0303"]
  let ekipisimtag = ["Efsanesi","Rayne"]

  let rdagıt = new disbut.MessageButton().setStyle('green').setLabel(`Rol Dağıt`).setID('rdagıt')
  let sesteolmayanlar = new disbut.MessageButton().setStyle('green').setLabel(`Seste olmayanlar`).setID('sesteolmayanlar')
  let ekiptekiler = new disbut.MessageButton().setStyle('green').setLabel(`Ekip Üyeleri`).setID('ekiptekiler')

  let rdagıt2 = new disbut.MessageButton().setStyle('green').setLabel(`Rol Dağıt`).setID('rdagıt2')
  let sesteolmayanlar2 = new disbut.MessageButton().setStyle('green').setLabel(`Seste olmayanlar`).setID('sesteolmayanlar2')
  let ekiptekiler2 = new disbut.MessageButton().setStyle('green').setLabel(`Ekip Üyeleri`).setID('ekiptekiler2')
    
    if (!message.guild) return;
    if (durum) {

if (["bak"].includes(args[0])) {
    let ekip = new disbut.MessageMenuOption().setValue("ekip").setLabel(message.guild.roles.cache.get(ekiprol[0]).name).setEmoji("899290755703640084")
    let ekip2 = new disbut.MessageMenuOption().setValue("ekip2").setLabel(message.guild.roles.cache.get(ekiprol[1]).name).setEmoji("899290755703640084")
   
    const menu = new disbut.MessageMenu()
.setID('menu')
.setPlaceholder('Ekipler.')
.setMaxValues(1)
.setMinValues(1)
.addOptions(ekip,ekip2)
    message.channel.send('Bilgisini görmek istediğiniz ekibin seçeneğine tıklayınız.',menu)
return;
}
  let embed = new MessageEmbed().setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setFooter(conf.botDurum).setColor("RANDOM")
  .setDescription(`Aşağıdaki ekip üyelerini'ı daha detaylı bir şekilde görmek için aşağıdaki komutu yazınız.
\`.ekip bak\`
  `)
  
  .addField(`${message.guild.roles.cache.get(ekiprol[0]).name}`,`\n
Toplam Üye: \`${message.guild.roles.cache.get(ekiprol[0]).members.size || "0"} kişi\`
Çevrimiçi Üye: \`${message.guild.roles.cache.get(ekiprol[0]).members.filter(x => x.presence.status !== "offline").size} kişi\`
Sesteki Üye: \`${message.guild.roles.cache.get(ekiprol[0]).members.filter(x => x.presence.status !== "offline" && x.voice.channel).size|| "0"} kişi\`
──────────────`, true)
.addField(`${message.guild.roles.cache.get(ekiprol[1]).name}`,`\n
Toplam Üye: \`${message.guild.roles.cache.get(ekiprol[1]).members.size || "0"} kişi\`
Çevrimiçi Üye: \`${message.guild.roles.cache.get(ekiprol[1]).members.filter(x => x.presence.status !== "offline").size} kişi\`
Sesteki Üye: \`${message.guild.roles.cache.get(ekiprol[1]).members.filter(x => x.presence.status !== "offline" && x.voice.channel).size|| "0"} kişi\`
──────────────`,true)

  message.channel.send(embed)
}

  client.on("clickMenu", async menu  => {

    let führer = "909784470633185310"
    let owner = "894935858531160065"
    let soul = "909784475645390849"
    let hand = "921460086650589246"
    let çifttag = "894935867628597300"
    if (menu.clicker.member.permissions.has(8) || menu.clicker.member.roles.cache.get(führer)|| menu.clicker.member.roles.cache.get(owner)|| menu.clicker.member.roles.cache.get(soul)|| menu.clicker.member.roles.cache.get(hand)|| menu.clicker.member.roles.cache.get(çifttag)) {
        
    if (menu.values.includes("ekip")) {
        menu.reply.send(new MessageEmbed().setColor("RANDOM").setDescription(`
        **${menu.guild.roles.cache.get(ekiprol[0]).name}** Ekip Bilgileri:
        
Toplam Üye: \`${menu.guild.roles.cache.get(ekiprol[0]).members.size || "0"} kişi\`
Çevrimiçi Üye: \`${menu.guild.roles.cache.get(ekiprol[0]).members.filter(x => x.presence.status !== "offline").size || "0"} kişi\`
Sesteki Üye: \`${menu.guild.roles.cache.get(ekiprol[0]).members.filter(x => x.presence.status !== "offline" && x.voice.channel).size|| "0"} kişi\`
Seste Olmayan Üye: \`${menu.guild.roles.cache.get(ekiprol[0]).members.filter(x => x.presence.status !== "offline" && !x.voice.channel).size || "0"} kişi\`
        
Taglı Üye: \`${menu.guild.roles.cache.get(ekiprol[0]).members.filter(member => member.user.username.includes(tag)).size} kişi\`
Yetkili Üye: \`${menu.guild.roles.cache.get(ekiprol[0]).members.filter(member => member.roles.cache.get(botcomamnds)).size} kişi\`
        `) , {
            buttons: [rdagıt,sesteolmayanlar,ekiptekiler]
        })
    
    }
        
        if (menu.values.includes("ekip2")) {
            menu.reply.send(new MessageEmbed().setColor("RANDOM").setDescription(`
            **${menu.guild.roles.cache.get(ekiprol[1]).name}** Ekip Bilgileri:
            
Toplam Üye: \`${menu.guild.roles.cache.get(ekiprol[1]).members.size || "0"} kişi\`
Çevrimiçi Üye: \`${menu.guild.roles.cache.get(ekiprol[1]).members.filter(x => x.presence.status !== "offline").size || "0"} kişi\`
Sesteki Üye: \`${menu.guild.roles.cache.get(ekiprol[1]).members.filter(x => x.presence.status !== "offline" && x.voice.channel).size|| "0"} kişi\`
Seste Olmayan Üye: \`${menu.guild.roles.cache.get(ekiprol[1]).members.filter(x => x.presence.status !== "offline" && !x.voice.channel).size || "0"} kişi\`
            
Taglı Üye: \`${menu.guild.roles.cache.get(ekiprol[1]).members.filter(member => member.user.username.includes(tag)).size} kişi\`
Yetkili Üye: \`${menu.guild.roles.cache.get(ekiprol[1]).members.filter(member => member.roles.cache.get(botcomamnds)).size} kişi\`
            `) , {
                buttons: [rdagıt2,sesteolmayanlar2,ekiptekiler2]
            })}
                                
                            }})

client.on('clickButton', async (button) => {
   

    let führer = "909784470633185310"
    let owner = "894935858531160065"
    let soul = "909784475645390849"
    let hand = "921460086650589246"
    let çifttag = "894935867628597300"
    if (button.clicker.member.permissions.has(8) ||button.clicker.member.roles.cache.get(führer)|| button.clicker.member.roles.cache.get(owner)|| button.clicker.member.roles.cache.get(soul)|| button.clicker.member.roles.cache.get(hand)|| button.clicker.member.roles.cache.get(çifttag)) {
       
 

                if (button.id === 'rdagıt') {
                    let dagit = button.guild.members.cache.filter(member =>member.user.username.toLowerCase().includes(ekipisimtag[0])+member.user.discriminator.includes(ekipetikettag[0])&& !member.roles.cache.has(ekiprol[0]))
button.reply.send(`Ekip tagı olup rolü olmayan ${dagit.size} kullanıcıya rol verildi.
                    
Rol verilen kullanıcılar;
${dagit.map(x => x || "Rolü olmayan bulunamadı.")}`)
button.guild.members.cache.filter(member =>member.user.username.toLowerCase().includes(ekipisimtag[0])+member.user.discriminator.includes(ekipetikettag[0])&& !member.roles.cache.has(ekiprol[0])).map(x=>x.roles.add(ekiprol[0]))                
                }
 if (button.id === 'sesteolmayanlar') {
button.reply.send(`Aktif olup seste olmayan kişiler;
                    
${button.guild.roles.cache.get(ekiprol[0]).members.filter(x => x.presence.status !== "offline" && !x.voice.channel).map(x=> x)}`)
                }
                if (button.id === 'ekiptekiler') {
                    let rol = button.guild.roles.cache.get(ekiprol[0])
button.reply.send(`Ekip üyeleri ${rol.members.size} kişi;
                    
${rol.members.size < 200 ? rol.members.map(x => `${x} (\`${x.id}\`)`).join("\n") : "200'den fazla kişi olduğu için listeleyemiyorum."}`,{
    split: true
})
}


if (button.id === 'rdagıt2') {
    let dagit = button.guild.members.cache.filter(member =>member.user.username.toLowerCase().includes(ekipisimtag[1])+member.user.discriminator.includes(ekipetikettag[1])&& !member.roles.cache.has(ekiprol[1]))
button.reply.send(`Ekip tagı olup rolü olmayan ${dagit.size} kullanıcıya rol verildi.
    
Rol verilen kullanıcılar;
${dagit.map(x => x || "Rolü olmayan bulunamadı.")}`)
button.guild.members.cache.filter(member =>member.user.username.toLowerCase().includes(ekipisimtag[1])+member.user.discriminator.includes(ekipetikettag[1])&& !member.roles.cache.has(ekiprol[1])).map(x=>x.roles.add(ekiprol[1]))                
}
if (button.id === 'sesteolmayanlar2') {
button.reply.send(`Aktif olup seste olmayan kişiler;
    
${button.guild.roles.cache.get(ekiprol[1]).members.filter(x => x.presence.status !== "offline" && !x.voice.channel).map(x=> x)}`)
}
if (button.id === 'ekiptekiler2') {
    let rol = button.guild.roles.cache.get(ekiprol[1])
button.reply.send(`Ekip üyeleri ${rol.members.size} kişi;
    
${rol.members.size < 200 ? rol.members.map(x => `${x} (\`${x.id}\`)`).join("\n") : "200'den fazla kişi olduğu için listeleyemiyorum."}`,{
split: true
})
}

    }    });
}}
