const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user-info')
        .setDescription('Replies with user info')
        .addUserOption(option => option.setName('target').setDescription('The user you would like to know about.')),
    async execute(interaction) {
        const member = interaction.options.getMember('target');
        return (member) ? interaction.reply(`Their username: ${member.user.username}\nTheir ID: ${member.user.id}`) : interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
    },
};