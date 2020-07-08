exports.run = (client, message, args, prefix) => {
	if(args[0]){
		var toRole = message.guild.roles.find(role => (role.name.substring(0,3) == "[P]" && role.name.toLowerCase().includes(args[0])));
		if(toRole){
			var toName = toRole.name;
			var prRole = message.member.roles.find(role => (role.name.substring(0,3) == "[P]" && role.name.toLowerCase().includes(args[0])));
			if (prRole){
				message.channel.send(message.member + ", you already have the role `" + prRole.name.substring(4) + "`!");
			}else{
				message.member.addRole(toRole).catch(console.error);
				message.channel.send(message.member + ", `" + toName.substring(4) + "` has been added to your pronouns.");
			}
		}else{
			message.channel.send(message.member + ', the pronoun role `' + args[0] + '` does not exist, or is not user setable! Please request it or try again.');
		}
	}else{
		message.channel.send(message.member + ", please specify the pronoun that you would like to set for yourself!");
	}
}
