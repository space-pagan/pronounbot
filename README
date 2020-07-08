# PronounBot

A discord bot written to support pronoun roles on a queer server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine. There is no way to run this code without deploying it to a live server. We recommend making a private channel on your server that only you and your bot can access or making a private server for testing purposes before deploying to a server with users.

### Installing

Install [node](https://nodejs.org/en/) for your OS. (built on node v11.6) 
#### Clone this repository with git.

```
git clone https://github.com/vsams14/pronounbot.git
```

#### Setting up discord bot and auth token
This bot requires an authentication token and a discord bot application:
1. Go to https://discordapp.com/developers/applications/
2. Create an application
3. Give the application a name and icon
4. Click on "Bot" in the left sidebar 
5. Add Bot
6. Yes, do it!
7. Click on copy under "click to reveal token"
8. make a new file token.json in your install directory and enter the following, replacing MyTokenHere with your copied token:

```
{
  "token":"MyTokenHere"
}
```

#### Invite bot to your server
1. Go to https://discordapp.com/developers/applications/
2. Click copy under the client id number
3. Replace YOUR_CLIENT_ID with the id you just copied and 
4. Navigate to https://discordapp.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=8  
(permissions can be changed within your server. =8 will give the bot all permissions)

#### Install dependancies with npm and test

```
npm install
```

If dependancies cannot be installed or need to be installed, install the following manually:
```
discord.js 11.4.2
enmap 4.6.0
fs 0.0.1-security
self-reload-json 0.4.0
```

Make sure the bot starts without any errors by running 
```
npm start
```
Then testing the bot in discord by typing 
```
/pronoun help set
```
into a channel that the bot can see. The expected output is:
```
@YourName
Command: set
Usage: /pronoun set PronounToSet
Description: Assigns the user a new pronoun role. Previous pronouns are removed.
Example: /pronoun set she
```

## Authors

* **Zoya Samsonov** - [SpacePagan](https://github.com/vsams14)

## License

This project is licensed under GNU GPLv3 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [An Adiot's Guide](https://anidiots.guide/first-bot/your-first-bot)
* [Discord.js Documentation](https://discord.js.org/#/docs/main/stable/general/welcome)