const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user-info')
<<<<<<< HEAD
        .setDescription('Replies with user info'),
    async execute(interaction) {
        return interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
=======
        .setDescription('Displays your user information'),
    async execute(interaction) {
        return interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}\n`);
>>>>>>> 015ca2f4e788d904d188c0e8dfc5a01393f0caf7
    },
};