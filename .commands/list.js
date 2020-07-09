exports.run = (client, message, args, prefix, rolefix) => {
	var msgString = ", the available pronoun roles are:"
	message.guild.roles.every((k) => {
		if(k.name.indexOf(rolefix) == 0){
			msgString += "\n\t " + k;
		}
		return true;
	});
	message.channel.send(message.member + msgString);
}
