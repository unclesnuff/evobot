const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Display all commands and descriptions',
    execute(message) {
        const commands = message.client.commands.array();

        const helpEmbed = new MessageEmbed()
            .setTitle('Help')
            .setDescription('List of all commands')
            .setColor('#F8AA2A');

        commands.forEach( (cmd) => {
            helpEmbed.addField(
                `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ''}**`,
                `${cmd.description}`,
                true,
            );
        } );

        helpEmbed.setTimestamp();

        return message.channel.send(helpEmbed).catch(console.error);
    },
};
