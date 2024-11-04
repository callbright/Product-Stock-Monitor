const { MessageEmbed, WebhookClient } = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');
const Discord = require('discord.js');
axios.defaults.withCredentials = true;
//https://discord.com/api/webhooks/1054951086324191292/8ON04HIi0Ga-dKZ4PRYB0SjadrDzL5aXQpuP3SR0j24joiDBjASFXX0UlktPZBpFHLEz

function sendWebhook(productName, productImage, productLink, productPrices) {
  const webhook = new WebhookClient({
    id: '1052981915197640804',
    token:
      'YdUT9zafBUtJqd-qFjnIk424pgsil87X6zd9sLkYMqFFkZKJyXNVQWXp9kkcrLec-0Vg',
  });

  
  const embed = new MessageEmbed()
    .setTitle(productName)
    .setImage(productImage)
    .setURL(productLink)
    .setDescription(productPrices)
    .setFooter('Monitor by christian_#5652')
    .setAuthor('the vAn')
    .setTimestamp(Date.now());

  webhook.send({
    embeds: [embed],
  });
}

async function checkForNewProducts() {
  const response = await axios.get('https://thevan.nike.com/the-vault.html', {
    headers: {
      Cookie:
        'X-Magento-Vary=13a9928d7199f2215b38b21f6435815e4fc56d46; PHPSESSID=ichnfqh6iv3rqrsvu0v89909a3;',
    },
  });
  const html = response.data;
  const $ = cheerio.load(html);

  const links = [];
  const images = [];
  const names = [];
  const prices = [];

  $('.product-item-link').each((i, element) => {
    links.push($(element).attr('href'));
  });

  $('.product-image-photo').each((i, element) => {
    images.push($(element).attr('src'));
  });

  $('.product-item-link').each((i, element) => {
    names.push($(element).text());
  });

  $('span.price-wrapper').each((i, element) => {
    prices.push($(element).text());
  });

  for (let i = 0; i < names.length; i++) {
    const productName = names[i];
    const productImage = images[i];
    const productLink = links[i];
    const productPrices = prices[i];

    if (!previousNames.includes(productName)) {
      console.log('Product found!');
      previousNames.push(productName);
      sendWebhook(productName, productImage, productLink, productPrices);
    }
  }
  console.log('Monitoring....');
}

//On the first run of the program, previousNames is getiing filled with current items so it can compare for new items
let previousNames = [];
setInterval(checkForNewProducts, 10000); // 10 seconds
//[a,b,c] [a,b,c]
//[a,b,c] [a,b,c,d]
// https://thevan.nike.com/the-vault.html