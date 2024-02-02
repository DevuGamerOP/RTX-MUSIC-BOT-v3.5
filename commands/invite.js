const { ApplicationCommandOptionType } = require('discord.js');
const { EmbedBuilder } = require('discord.js');  EmbedBuilder
const { owner } = require('../config.json'); 

module.exports = {
  name: "invite",
  description: "Get an invite link for the bot.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const InviteLink = 'https://discord.com/api/oauth2/authorize?client_id=1202696328258519112&permissions=8&scope=bot+applications.commands'; 
      const SupportLink = 'YOUR_SUPPORT_SERVER_LINK'; 

      const embed = new EmbedBuilder()
        .setColor('#da2a41')
        .setAuthor({
          name: 'Invite Bot',
          iconURL: 'YOUR_BOT_ICON_URL', 
          url: InviteLink
        })
        .setDescription(Invite me to your server using [this link](${InviteLink}).\nJoin our support server: [Support Server](${SupportLink}).)
        .setTimestamp();

      interaction.reply({ embeds: [embed] }).catch(e => console.error(e));

    } catch (e) {
      console.error(e);
    }
  },
};
