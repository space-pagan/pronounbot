exports.run = (client, message, args, prefix, rolefix) => {
	var msgString;
	if(args[0] && args[0] != "help"){
		var cmd = client.config.commands.find(cmd => cmd.name.toLowerCase() == args[0].toLowerCase());
		if(cmd){
			msgString = "\nCommand: " + cmd.name + "\nDescription: " + cmd.description + "\nUsage: " + prefix + " " + cmd.usage;
			if(cmd.example){
				msgString += "\nExample: " + prefix + " " + cmd.example;
			}
		}else{
			msgString = ', the command `' + args[0] + '` is not a valid command. Please enter `' + prefix + ' help` for a list of commands.';
		}
	}else{
		msgString = "\nThe available commands are:\n";
		client.config.commands.every((k) => {
			if(!k.admin){
				msgString += "\t" + k.name + "\n";
			}
			return true;
		});
		if(message.author.id == message.guild.owner.id){
			client.config.commands.every((k) => {
				if(k.admin){
					msgString += "\t" + k.name + "\n";
				}
				return true;
			});
		}else{
			msgString += "\t... (Admin commands hidden)\n";
		}
		msgString += '\nTo see command details, enter `' + prefix + ' help ` followed by the command.';
	}
	message.channel.send(message.member + msgString);
}
