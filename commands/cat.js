const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Replies with a random image of a cat!'),
    async execute(interaction) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const catResult = await request('https://aws.random.cat/meow');
        const { file } = await catResult.body.json();
        const catImgEmbed = new EmbedBuilder()
            .setColor(`#${randomColor}`)
            .setImage({ files: [{ attachment: file, name: 'cat.png' }] })
            .setFooter({ text: 'Images courtesy of https://cataas.com/', iconURL: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' })
        return interaction.reply({ embeds: [catImgEmbed] });
    },
};