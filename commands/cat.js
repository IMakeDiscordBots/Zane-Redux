const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Replies with a random image of a cat!'),
    async execute(interaction) {
        const catImgEmbed = new EmbedBuilder()
            .setImage(`https://cataas.com/c?${Date.now()}`)
            .setFooter({ text: 'Images courtesy of https://cataas.com/', iconURL: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' })
        return interaction.reply({ embeds: [catImgEmbed] });
    },
};