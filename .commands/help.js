exports.run = (client, message, args) => {
	var msgString;
	const cmdConf = client.config.commands;
	var commands = new client.enmap();
	for(var i in cmdConf){
		commands.set(cmdConf[i].name, cmdConf[i]);
	}
	if(args[0] && args[0] != "help" && args[0]){
		var cmd = commands.get(args[0]);
		if(cmd){
			msgString = "\nCommand: " + cmd.name + "\nDescription: " + cmd.description + "\nUsage: " + client.config.prefix + " " + cmd.usage;
			if(cmd.example){
				msgString += "\nExample: " + client.config.prefix + " " + cmd.example;
			}
		}else{
			msgString = ', "' + args[0] + '" is not a valid command. Please enter "' + client.config.prefix + ' help" for a list of commands.';
		}
	}else{
		msgString = "\nThe available commands are:\n";
		commands.every((k) => {
			if(!k.hidden){
				msgString += "\t" + k.name + "\n";
			}
			return true;
		});
		msgString += '\nTo see command details, enter "' + client.config.prefix + ' help " followed by the command.';
	}
	message.channel.send(message.member + msgString);
}
