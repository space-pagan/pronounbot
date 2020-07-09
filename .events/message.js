module.exports = (client, message) => {
	if (!message.author.bot){
		var server = client.serverconfig.servers.find(server => server.id == message.guild.id);
		var prefix;
		var rolefix;
		if (server){
			prefix = server.prefix;
			rolefix = server.rolefix;
		}else{
			prefix = client.config.prefix;
			rolefix = client.config.rolefix;
		}
		if (message.content.indexOf(prefix) == 0){
			const args = message.content.slice(prefix.length).trim().split(/ +/g);
			const command = args.shift();
			const cmd = client.commands.get(command);
			if (cmd){
				message.delete();
				cmd.run(client, message, args, prefix, rolefix);
			}else{
				if (command != "") {
					message.channel.send(message.member + ', the command `' + command + '` is not a valid command. Please enter `' + prefix + ' help` for a list of commands.');
				}else{
					message.channel.send(message.member + ', please enter `' + prefix + ' help` for a list of commands.');
				}
			}
		}
	}
};
