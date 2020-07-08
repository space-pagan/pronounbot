const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require('./.config/config.json');
const auth = require('./.config/token.json');
var serverconfig = require('./.config/server-config.json');
client.config = config;
client.serverconfig = serverconfig;
client.enmap = Enmap;
client.fs = fs;

fs.readdir("./.events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith(".js")) return;
		const event = require(`./.events/${file}`);
		let eventName = file.split(".")[0];
		console.log(`Attempting to load event "${eventName}"`);
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Enmap();

fs.readdir("./.commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./.commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command "${commandName}"`);
    client.commands.set(commandName, props);
  });
});

client.login(auth.token);
