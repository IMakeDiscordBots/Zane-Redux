const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
<<<<<<< HEAD
const { Routes } = require('discord.js')
const { clientId,  guildId, token } = require('./config.json');

const commands = [];
const commandsPath = path.join(path.dirname(__dirname), 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require('filePath');
    commands.push(command.data.toJSON);
=======
const { Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
>>>>>>> 015ca2f4e788d904d188c0e8dfc5a01393f0caf7
}

const rest = new REST({ version: '10' }).setToken(token);

<<<<<<< HEAD
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands})
    .then(() => console.log(`Successfully registered ${data.length} application commands`))
=======

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then((data) => console.log(`Successfully registered ${data.length} application command(s).`))
>>>>>>> 015ca2f4e788d904d188c0e8dfc5a01393f0caf7
    .catch(console.error);

/*
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
*/
