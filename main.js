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
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  console.log(message.channel.id)
  const idcanaiscertos =['603415416865292298','582616672775700486']
  if (idcanaiscertos.indexOf(message.channel.id)===-1) {
    return;
  }
  if (message.content === '$play') {
    // Send "pong" to the same channel
    let uriimagem = 'https://image.flaticon.com/icons/png/512/44/44949.png'
    const numeroaleatorio = Math.floor(Math.random() * 6) + 1;
    switch (numeroaleatorio) {
      case 1:
        uriimagem = 'https://image.flaticon.com/icons/png/512/10/10502.png'
        break;
      case 2:
        uriimagem = 'https://image.flaticon.com/icons/png/512/26/26938.png'
        break;
      case 3:
        uriimagem = 'https://image.flaticon.com/icons/png/512/64/64576.png'
        break;
      case 4:
        uriimagem = 'https://merciwithlove.vteximg.com.br/arquivos/ids/182390-1000-1000/merci-with-love-jogo-americano-moma-preto-liso-kit-4.png?v=637323243871670000'
        break;
      case 5:
        uriimagem = 'https://s3-sa-east-1.amazonaws.com/static.donuz.co/resources/uploads/lojaDePremios/premioImagem/20171212132905324886837.png'
        break;
      case 6:
        uriimagem = 'https://image.flaticon.com/icons/png/512/9/9229.png'
        break;

      default:
        break;
    }
    message.channel.send(uriimagem);
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('');