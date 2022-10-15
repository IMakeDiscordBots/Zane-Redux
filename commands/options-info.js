const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('./user-info');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('options')
        .setDescription('Info about provided options.')
        .addStringOption(option => option.setName('input').setDescription('The input to send back')),
    async execute(interaction) {
        const value = interaction.options.getString('input');
        if (value) return interaction.reply(`The options value is: \`${value}\``);
        return interaction.reply('No option was provided.');
    },
}