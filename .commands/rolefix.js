exports.run = (client, message, args, prefix, rolefix) => {
    if (message.author.id == message.guild.ownerID){
        if (args[0]) {
            serverindex = client.serverconfig.servers.findIndex(server => server.id == message.guild.id);
            if (serverindex >= 0){
                client.serverconfig.servers[serverindex].rolefix = args[0]
            }else{
                client.serverconfig.servers.push({id: message.guild.id, prefix: prefix, rolefix: args[0]});
            }
            var json = JSON.stringify(client.serverconfig, null, '\t');
            client.fs.writeFile('./.config/server-config.json', json, function (err) {
                if (err) console.log(err);
                }
            );
            message.channel.send(message.member + ", the role prefix has been successfully changed to `" + args[0] + "`!");
        }else{
            message.channel.send(message.member + ", please specify the role prefix that you would like to set for this server!");
        }
    }else{
        message.channel.send(message.member + ", this command is restricted to the server owner only!");
    }
}
