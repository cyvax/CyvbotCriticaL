const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MjUxMDA1ODA3MDcwNjc0OTQ0.DMVAEw.5e0TGtVJLIeXDOxs9cgNDmOAwlA";
const prefix = "./";
var mention = "<@251005807070674944>";
var memberCount = client.users.size;
var servercount = client.guilds.size;


client.on("ready", () => {
  var servers = client.guilds.array().map(g => g.name).join(',');
console.log("Aizen est sous le bureau :Sifflote:");
console.log("--------------------------------------");
console.log('[:p]Le préfix :  ' + prefix + "\n[:D]Mentions = " + mention + "\n[;-)]Nombre de membres: " + memberCount + "\n[:/]Nombre de serveurs: " + servercount);
client.user.setGame('CriticaL-BOT (WIP)');﻿
});
//antiMère
client.on('message', message => {
  if (message.content === 'ta mère') {
    message.reply('Pas les maman :\'( c\'est pas gentils.');
  } else if (message.content === 'ta mere') {
      message.reply('Pas les maman :\'( c\'est pas gentils.');
    } else if (message.content === 'ta mer') {
      message.reply('Pas les maman :\'( c\'est pas gentils. cadeau : http://bescherelle.com');
    }});
//brevet hugo
client.on('message', message => {
  if (message.content === './brevet') {
    message.channel.sendMessage({
           "embed": {
                   title: 'Hugo ?',
                   url: 'http://www.clg-pascal-villemoisson.ac-versailles.fr/images/DNB.png',
                   "image": {
                   "url": "http://www.clg-pascal-villemoisson.ac-versailles.fr/images/DNB.png",
                   }
               }
})}});
//Stevenite
client.on('message', message => {
  if (message.content === './stevenite') {
    message.channel.sendMessage({
           "embed": {
                   title: 'stevenite ?',
                   url: 'https://i.imgur.com/LVGRCQy.jpg',
                   "image": {
                   "url": "https://i.imgur.com/LVGRCQy.jpg",
                   }
               }
})}});
//Aizen
client.on('message', message => {
  if (message.content === './aizen') {
    message.channel.sendMessage({
           "embed": {
                   title: 'aizenite ?',
                   url: 'https://s1.reutersmedia.net/resources/r/?m=02&d=20170815&t=2&i=1197142050&r=LYNXNPED7E080&w=940',
                   "image": {
                   "url": "https://s1.reutersmedia.net/resources/r/?m=02&d=20170815&t=2&i=1197142050&r=LYNXNPED7E080&w=940",
                   }
               }
})}});
//Farida
client.on('message', message => {
  if (message.content === './farid') {
    message.channel.sendMessage({
           "embed": {
                   title: 'farid ?',
                   url: 'http://farida-foodista.com/wp-content/uploads/2013/10/20131119_124446.jpg',
                   "image": {
                   "url": "http://farida-foodista.com/wp-content/uploads/2013/10/20131119_124446.jpg",
                   }
               }
})}});
//NorthKorea
client.on('message', message => {
  if (message.content === './nk') {
    message.channel.sendMessage({
           "embed": {
                   title: 'Pendant ce temps en Corée du nord ?',
                   url: 'https://i.imgur.com/HTpQymN.gif',
                   "image": {
                   "url": "https://i.imgur.com/HTpQymN.gif",
                   }
               }
})}});
//cyvax
client.on('message', message => {
  if (message.content === './cyvax') {
    message.channel.sendMessage({
           "embed": {
                   title: 'Nan Désolé :p',
                   url: 'https://i.imgur.com/N8G2JJK.jpg',
                   "image": {
                   "url": "https://i.imgur.com/N8G2JJK.jpg",
                   }
               }
})}});
//antiVent
client.on("message", (message) => {
  if (message.content === ("bonjour")){
   message.reply("bonjour à toi, je lutte contre les ouragan :'D");
 } else if (message.content === ("Bonjour")){
   message.reply("bonjour à toi, je lutte contre les ouragan :'D");
 } else if (message.content === ("bjr")){
   message.reply("bonjour à toi, je lutte contre les ouragan :'D");
 } else if (message.content === ("slt")){
   message.reply("bonjour à toi, je lutte contre les ouragan :'D");
 } else if (message.content === ("salut")){
   message.reply("bonjour à toi, je lutte contre les ouragan :'D");
 } else if (message.content === ("yo")){
   message.reply("bonjour à toi, je lutte contre les ouragan :'D");
 } else if (message.content === ("yop")){
   message.reply("bonjour à toi, je lutte contre les ouragan :'D");
 } else if (message.content === ("./hugo")){
   message.reply("\"Le Brevet c\'est de l\'eau...Pas pour lui x)");
} else if (message.content === ("./hugo")){
  message.reply("\"Le Brevet c\'est de l\'eau...Pas pour lui x)");
 }
});

//information ET
client.on("message", (message) => {
  if (message.content.startsWith("./origin")) {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Information",
        url: "https://discord.gg/5FVf2Dw",
        description: "Bot développé par CyVaX pour le serveur CriticaL, Tout droit réservés à CyVaX et au serveur CriticaL.",
        fields: [{
            name: "CyVaX",
            value: "Have Fun !"
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "©CyVaX pour ©CriticaL"
        }
      }
    });
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("./aizen")) {
    message.channel.send("@Aizen#4171 est sous ma table :sifflote");
  }
});

client.on('message', message => {
	if (message.content === ("./ping")){
	message.reply('pong!');
}
else if (message.content === "./stats") {
var memberCount = client.users.size;
var servercount = client.guilds.size;
	let m = " ";
	m += 'je suis avec '+ memberCount +' amis et ';
	m += 'je suis sur '+ servercount+' serveurs discord différent Yeah! \n';
	message.author.sendMessage(m).catch(console.log);
}
});
//Moderation
client.on('message', message => {
  if(message.content.startsWith("./info")) {
var memberavatar = message.author.avatarURL
var membername = message.author.username
var mentionned = message.mentions.users.first();
var getvalueof;
if(mentionned){
var getvalueof = mentionned;
} else {
var getvalueof = message.author;
}

if(getvalueof.bot == true){
var checkbot = "L'utilisateur est un bot";
} else {
var checkbot = "N'est pas un bot";
}
if(getvalueof.presence.status == 'online'){
var status = "En ligne";
}else {
var status = "Hors ligne";
}

message.channel.sendMessage({
embed: {
type: 'rich',
description: '',
fields: [{
name: 'Pseudo',
value: getvalueof.username,
inline: true
}, {
name: 'User id',
value: getvalueof.id,
inline: true
},{
name: 'Discriminateur',
value: getvalueof.discriminator,
inline: true
},{
name: 'Status',
value: status,
inline: true
},{
name: 'Bot',
value: checkbot,
inline: true
}],
image: {
url: getvalueof.avatarURL
},
color: 0xE46525,
footer: {
proxy_icon_url: ' '
},

author: {
name: membername,
icon_url: memberavatar,
proxy_icon_url: ' '
}
}
});
}

else if(message.content.startsWith('./kick')){
            let modRole = message.guild.roles.find("name", "Mod");
if(!message.member.roles.has(modRole.id)) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
    if(!message.guild.roles.exists("name", "Mod")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **Mod** n'existe pas dans ce serveur veuillez le créer pour Kick! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
if(message.mentions.users.size === 0) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Merci de spécifié l'utilisateur que vous voulez Kick. **Format ~> `!kick @mention`** ! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
}
let kickMember = message.guild.member(message.mentions.users.first());
if(!kickMember) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x:  L\'utilisateur que vous avez entré n'est pas valide ! :x:",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
}
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
  return message.reply("Je n'ai pas la permissions ** __(KICK_MEMBERS)__ **!").catch(console.error);
}
         if(!message.guild.channels.exists("name", "admin-logs")){
// créer le channel
message.guild.createChannel('admin-logs');
// Affiche un message d'erreur expliquant que le channel n'existait pas
return message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le salon textuel `admin-logs` n'existait pas, je viens de le créer pour vous :white_check_mark: , Veuillez réessayer :wink:",
footer: {
text: "Message par CyvBot."
}
}}).catch(console.error);
}
kickMember.kick().then(member => {
    message.channel.sendMessage("", {embed: {
          title: "Succès :white_check_mark:",
          color: 0xff0000,
          description: `${member.user.username}`+` à bien été kick`,
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
}).then(message.guild.channels.find('name','admin-logs').sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: '**L\'utilisateur <~>**',
            value: kickMember.user.username,
            inline: true
          }, {
            name: 'User id',
            value: kickMember.id,
            inline: true
          },{
            name: '**Action <~>**',
            value: "Kick",
            inline: true
},{
            name: 'Modérateur',
            value: message.author.username,
            inline: true
}],

          color: 0xD30000,
          footer: {
            text: 'Moderation',
            proxy_icon_url: ' '
          },

          author: {
            name: kickMember.user.username + "#"+ kickMember.user.discriminator,
            icon_url: " ",
            proxy_icon_url: ' '
          }
        }
})).catch(console.error);
        }
 else if(message.content.startsWith('./ban')){
            let modRole = message.guild.roles.find("name", "Mod");
if(!message.member.roles.has(modRole.id)) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
    if(!message.guild.roles.exists("name", "Mod")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **Mod** n'existe pas dans ce serveur veuillez le créer pour Kick! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
if(message.mentions.users.size === 0) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Merci de spécifié l'utilisateur que vous voulez Kick. **Format ~> `!ban @mention`** ! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
}
let banMember = message.guild.member(message.mentions.users.first());
if(!banMember) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x:  L\'utilisateur que vous avez entré n'est pas valide ! :x:",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
}
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
  return message.reply("Je n'ai pas la permissions ** __(BAN_MEMBERS)__ **!").catch(console.error);
}
         if(!message.guild.channels.exists("name", "admin-logs")){
// créer le channel
message.guild.createChannel('admin-logs');
// Affiche un message d'erreur expliquant que le channel n'existait pas
return message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le salon textuel `admin-logs` n'existait pas, je viens de le créer pour vous :white_check_mark: , Veuillez réessayer :wink:",
footer: {
text: "Message par CyvBot."
}
}}).catch(console.error);
}
banMember.kick().then(member => {
    message.channel.sendMessage("", {embed: {
          title: "Succès :white_check_mark:",
          color: 0xff0000,
          description: `${member.user.username}`+` à bien été ban`,
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
}).then(message.guild.channels.find('name','admin-logs').sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: '**L\'utilisateur <~>**',
            value: banMember.user.username,
            inline: true
          }, {
            name: 'User id',
            value: banMember.id,
            inline: true
          },{
            name: '**Action <~>**',
            value: "ban",
            inline: true
},{
            name: 'Modérateur',
            value: message.author.username,
            inline: true
}],

          color: 0xD30000,
          footer: {
            text: 'Moderation',
            proxy_icon_url: ' '
          },

          author: {
            name: banMember.user.username + "#"+ banMember.user.discriminator,
            icon_url: " ",
            proxy_icon_url: ' '
          }
        }
})).catch(console.error);
        }
        else if(message.content.startsWith('./mute')){
            let modRole = message.guild.roles.find("name", "Mod");
    if(!message.guild.roles.exists("name", "mute")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **mute** n'existe pas dans ce serveur veuillez le créer pour Mute! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
      if(!message.member.roles.has(modRole.id)) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
      if(message.mentions.users.size === 0) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Merci de spécifié l'utilisateur que vous voulez mute totalment. **Format ~> `!mute @mention`** ! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x:  L\'utilisateur que vous avez entré n'est pas valide ! :x:",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
      if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Je n'ai pas la permissions pour faire cela __(MANAGE_MESSAGES)__ !").catch(console.error);
      }
         if(!message.guild.channels.exists("name", "admin-logs")){
// créer le channel
message.guild.createChannel('admin-logs');
// Affiche un message d'erreur expliquant que le channel n'existait pas
return message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le salon textuel `admin-logs` n'existait pas, je viens de le créer pour vous :white_check_mark: , Veuillez réessayer :wink:",
footer: {
text: "Message par CyvBot."
}
}}).catch(console.error);
}
let mutedRole = message.guild.roles.find("name", "mute");
    var time = 500000;
    console.log(muteMember);
      muteMember.addRole(mutedRole).then(member => {
        message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :white_check_mark:  Vous avez bien mute ** "+ muteMember + " dans le serveur "+message.guild.name  + " ! :white_check_mark: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).then(message.guild.channels.find('name','admin-logs').sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: '**L\'utilisateur <~>**',
            value: muteMember.user.username,
            inline: true
          }, {
            name: 'User id',
            value: muteMember.id,
            inline: true
          },{
            name: '**Action <~>**',
            value: "mute total",
            inline: true
},{
            name: 'Modérateur',
            value: message.author.username,
            inline: true
}],

          color: 0xD30000,
          footer: {
            text: 'Moderation',
            proxy_icon_url: ' '
          },

          author: {
            name: muteMember.user.username,
            icon_url: " ",
            proxy_icon_url: ' '
          }
        }
})).catch(console.error);
        }
        )}
       else if(message.content.startsWith('./unmute')){
            let modRole = message.guild.roles.find("name", "Mod");
            if(!message.guild.roles.exists("name", "Mod")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **Mod** n'existe pas dans ce serveur veuillez le créer pour unmute! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
    if(!message.guild.roles.exists("name", "mute")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **mute** n'existe pas dans ce serveur veuillez le créer pour Unmute! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
      if(!message.member.roles.has(modRole.id)) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
      if(message.mentions.users.size === 0) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Merci de spécifié l'utilisateur que vous voulez unmute totalment. **Format ~> `!unmute @mention`** ! :no_entry_sign: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x:  L\'utilisateur que vous avez entré n'est pas valide ! :x:",
          footer: {
            text: "Message par CyvBot."
          }
        }}).catch(console.error);
      }
      if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Je n'ai pas la permissions pour faire cela __(MANAGE_MESSAGES)__ !").catch(console.error);
      }
         if(!message.guild.channels.exists("name", "admin-logs")){
// créer le channel
message.guild.createChannel('admin-logs');
// Affiche un message d'erreur expliquant que le channel n'existait pas
return message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le salon textuel `admin-logs` n'existait pas, je viens de le créer pour vous :white_check_mark: , Veuillez réessayer :wink:",
footer: {
text: "Message par CyvBot."
}
}}).catch(console.error);
}
let mutedRole = message.guild.roles.find("name", "mute");
    var time = 500000;
    console.log(muteMember);
      muteMember.removeRole(mutedRole).then(member => {
        message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :white_check_mark:  Vous avez bien unmute ** "+ muteMember + " dans le serveur "+message.guild.name  + " ! :white_check_mark: ",
          footer: {
            text: "Message par CyvBot."
          }
        }}).then(message.guild.channels.find('name','admin-logs').sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: '**L\'utilisateur <~>**',
            value: muteMember.user.username,
            inline: true
          }, {
            name: 'User id',
            value: muteMember.id,
            inline: true
          },{
            name: '**Action <~>**',
            value: "unmute total",
            inline: true
},{
            name: 'Modérateur',
            value: message.author.username,
            inline: true
}],

          color: 0xD30000,
          footer: {
            text: 'Moderation',
            proxy_icon_url: ' '
          },

          author: {
            name: muteMember.user.username,
            icon_url: " ",
            proxy_icon_url: ' '
          }
        }
})).catch(console.error);
        }
      )}
});

client.login("token");
