exports.run = (client, message, args, prefix) => {
    if (message.author.id == message.guild.ownerID){
        if (args[0]) {
            serverindex = client.serverconfig.servers.findIndex(server => server.id == message.guild.id);
            if (serverindex >= 0){
                client.serverconfig.servers[serverindex].prefix = args[0]
            }else{
                client.serverconfig.servers.push({id: message.guild.id, prefix: args[0], rolefix: "[P]"});
            }
            var json = JSON.stringify(client.serverconfig, null, '\t');
            client.fs.writeFile('./.config/server-config.json', json, function (err) {
                console.log(err);
                }
            );
            message.channel.send(message.member + ", the prefix has been successfully changed to `" + args[0] + "`!");
        }else{
            message.channel.send(message.member + ", please specify the command prefix that you would like to set for this server!");
        }
    }else{
        message.channel.send(message.member + ", this command is restricted to the server owner only!");
    }
}
