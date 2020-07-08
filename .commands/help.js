exports.run = (client, message, args, prefix) => {
	var msgString;
	const cmdConf = client.config.commands;
	var commands = new client.enmap();
	for(var i in cmdConf){
		commands.set(cmdConf[i].name, cmdConf[i]);
	}
	if(args[0] && args[0] != "help"){
		var cmd = commands.get(args[0]);
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
		commands.every((k) => {
			if(!k.hidden){
				msgString += "\t" + k.name + "\n";
			}
			return true;
		});
		msgString += '\nTo see command details, enter `' + prefix + ' help ` followed by the command.';
	}
	message.channel.send(message.member + msgString);
}
