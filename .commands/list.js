exports.run = (client, message, args) => {
	var msgString = ", the available pronoun roles are:"
	message.guild.roles.every((k) => {
		if(k.name.substring(0,3) == "[P]"){
			msgString += "\n\t " + k;
		}
		return true;
	});
	message.channel.send(message.member + msgString);
}