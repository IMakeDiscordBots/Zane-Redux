module.exports = {
    name: 'ready', 
    once: true, 
    exectue (client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
}