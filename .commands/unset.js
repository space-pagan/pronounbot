exports.run = (client, message, args) => {
	if(args[0]){
		var prRole = message.member.roles.find(role => (role.name.substring(0,3) == "[P]" && role.name.toLowerCase().includes(args[0])));
		if(prRole){
			var prName = prRole.name;
            message.member.removeRole(prRole).catch(console.error);
			message.channel.send(message.member + ", `" + prName.substring(4) + "` has been removed from your pronouns.");
		}else{
			message.channel.send(message.member + ', you do not have the pronoun role `' + args[0] + '`!');
		}
	}else{
		message.channel.send(message.member + ", please specify the pronoun that you would like to remove!");
	}
}
