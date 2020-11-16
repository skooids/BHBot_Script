Game.assignRandomTeam = false

let bot = new Bot("Rares")
  bot.setAvatar(1) // set the avatar of the bot ( this is only working with real player's outfits )
  Game.newBot(bot)
  bot.setSpeech("Text") // the thing that you want to say
  bot.setPosition(new Vector3(0,0,0))
  bot.setRotation(new Vector3(0,0,0))