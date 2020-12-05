'use strict';

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Estou pronto capitão');
});

// Create an event listener for messages
client.on('message', message => {
  // canais selecionados
  console.log(message.channel.id)
  const idcanaiscertos =['603415416865292298','582616672775700486','580826901531066368']
  if (idcanaiscertos.indexOf(message.channel.id)===-1) {
    return;
  }
  if (message.content === '!r') {
    // mostra a imagem
    let uriimagem = 'https://image.flaticon.com/icons/png/512/44/44949.png'
    const numeroaleatorio = Math.floor(Math.random() * 6) + 1;
    switch (numeroaleatorio) {
      case 1:
        uriimagem = 'https://i.ibb.co/YPDM0x3/dados-Prancheta-1-c-pia-5.png'
        break;
      case 2:
        uriimagem = 'https://i.ibb.co/ZK8NLkP/dados-Prancheta-1-c-pia-4.png'
        break;
      case 3:
        uriimagem = 'https://i.ibb.co/jwnwNpf/dados-Prancheta-1-c-pia-3.png'
        break;
      case 4:
        uriimagem = 'https://i.ibb.co/gZ8sCCD/dados-Prancheta-1-c-pia-2.png'
        break;
      case 5:
        uriimagem = 'https://i.ibb.co/7GXXLh9/dados-Prancheta-1-c-pia.png'
        break;
      case 6:
        uriimagem = 'https://cdn.discordapp.com/attachments/574351305565536306/784881209868025877/dados_Prancheta_1.png'
        break;

      default:
        break;
    }
    message.channel.send(uriimagem);
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('');