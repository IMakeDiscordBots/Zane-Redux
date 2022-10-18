const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with current ping.'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        const pingEmbed = new EmbedBuilder()
            .setTitle("Pong!")
            .setDescription("Uptime, Websocket Heartbeat, and Roundtrip Latency.")
            .setAuthor({ name: `@${interaction.user.username} used ping command`, iconURL: `${interaction.user.avatarURL}` })
            .setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
            .addFields(
                { name: 'Uptime :stopwatch:', value: `${Math.round(interaction.client.uptime / 60000)} minutes`},
                { name: 'Websocket Heartbeat :sparkling_heart:', value: `${interaction.client.ws.ping}ms`},
                { name: 'Roundtrip Latency :round_pushpin:', value: `${sent.createdTimestamp - interaction.createdTimestamp}ms`},
            )
            .setFooter(`:ping_pong`);
        //await interaction.editReply(`:ping_pong: Pong!\n:stopwatch: Uptime: ${Math.round(interaction.client.uptime / 60000)} minutes\n:sparkling_heart: Websocket heartbeat: ${interaction.client.ws.ping}ms.\n:round_pushpin: Roundtrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`)
        await interaction.editReply({ embeds: [pingEmbed] });
    },
}