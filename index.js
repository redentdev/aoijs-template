const aoijs = require("aoi.js");
 
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "!",
  intents: "all",
  mobilePlatform: false
});

const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

bot.onMessage();

bot.variables({
  var1: "1"
})

bot.command({
  name: "ping",
  code: `Pong! $pingms`,
});

bot.readyCommand({
    channel: "",
    code: `$log[$userTag[$clientID] Botuna giriş yapıldı.]`
});
