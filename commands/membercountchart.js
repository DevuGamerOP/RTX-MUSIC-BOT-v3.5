const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const QuickChart - require('quickchart-js'); //Run npm i quickchart-js in terminal

module.exports = {
    data: new SlashCommandBuilder()
    .setName('membercount-chart')
}
