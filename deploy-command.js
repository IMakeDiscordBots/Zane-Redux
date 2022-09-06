const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with ping.'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info.'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info.'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then((data) => console.log(`Successfully registered ${data.length} application command(s).`))
    .catch(console.error);

//Guild level
rest.delete(Routes.applicationGuildCommands(clientId, guildId, 'commandId'))
    .then(() => console.log('Sucessfully deleted guild command.'))
    .catch(console.error);

//Global level
rest.delete(Routes.applicationCommand(clientId, 'commandId'))
    .then(() => console.log('Sucessfully deleted guild command.'))
    .catch(console.error);

//Delete all but for guild level
rest.put(Routes.applicationGuildCommands(clientId, guildId, { body: [] }))
    .then(() => console.log('Sucessfully deleted all guild commands.'))
    .catch(console.error);

//Delete all but for global level
rest.put(Routes.applicationCommand(clientId, 'commandId', { body: [] }))
    .then(() => console.log('Sucessfully deleted all application  commands.'))
    .catch(console.error);

//Delete all

