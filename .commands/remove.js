exports.run = (client, message, args, prefix, rolefix) => {
	if(args[0]){
		var prRole = message.member.roles.find(role => role.name.indexOf(rolefix) == 0 && role.name.toLowerCase().includes(args[0].toLowerCase()));
		if(prRole){
            message.member.removeRole(prRole).catch(console.error);
			message.channel.send(message.member + ", `" + prRole.name.substring(rolefix.length).trim() + "` has been removed from your pronouns.");
		}else{
			message.channel.send(message.member + ', you do not have the pronoun role `' + args[0] + '`!');
		}
	}else{
		message.channel.send(message.member + ", please specify the pronoun that you would like to remove!");
	}
}
