const { AttachmentBuilder, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Replies with a random image of a cat!')
        .addStringOption(option => option.setName('speak').setDescription('What you\'d like the image to say!')),
    async execute(interaction) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const input = interaction.options.getString('speak')
        const catImgEmbed = 
            (input) ? 
                new EmbedBuilder()
                    .setColor(`#${randomColor}`)
                    .setImage(`https://cataas.com/c/s/${input}?${Date.now()}`)
                    .setFooter({ text: 'Images courtesy of https://cataas.com/', iconURL: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' }) 
                : new EmbedBuilder()
                    .setColor(`#${randomColor}`)
                    .setImage(`https://cataas.com/c?${Date.now()}`)
                    .setFooter({ text: 'Images courtesy of https://cataas.com/', iconURL: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' })
        return interaction.reply({ embeds: [catImgEmbed] });
        /* WHY WONT YOU WORK
        const catResult = await request('https://aws.random.cat/meow');
        const { file } = await catResult.body.json();
        const attachment = new AttachmentBuilder(file, 'cat.png');

        const catImgEmbed = new EmbedBuilder()
            .setColor(`#${randomColor}`)
            .setImage(`https://cataas.com/c?${Date.now()}`)
            .setFooter({ text: 'Images courtesy of https://cataas.com/', iconURL: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' })
        */

        //Can't test because aws.random.cat/meow keeps returning 503 error :agony:
    },
};