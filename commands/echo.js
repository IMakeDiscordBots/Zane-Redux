const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Echoes back whatever you input.')
        .addStringOption(option => option.setName('input').setDescription('The input to echo.')),
    async execute(interaction) {
        const value = interaction.options.getString('input');
        return (value) ? interaction.reply(value) : interaction.reply('No input provided.');
    },
};