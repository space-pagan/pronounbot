exports.run = (client, message, args, prefix, rolefix) => {
	if(args[0]){
		var toRole = message.guild.roles.find(role => role.name.indexOf(rolefix) == 0 && role.name.toLowerCase().includes(args[0].toLowerCase()));
		if(toRole){
			if (message.member.roles.has(toRole.id)){
				message.channel.send(message.member + ", you already have the role `" + toRole.name.substring(rolefix.length).trim() + "`!");
			}else{
				message.member.addRole(toRole).catch(console.error);
				message.channel.send(message.member + ", `" + toRole.name.substring(rolefix.length).trim() + "` has been added to your pronouns.");
			}
		}else{
			message.channel.send(message.member + ', the pronoun role `' + args[0] + '` does not exist, or is not user setable! Please request it or try again.');
		}
	}else{
		message.channel.send(message.member + ", please specify the pronoun that you would like to set for yourself!");
	}
}
