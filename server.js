const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "Nzc1MDAwMDMzNzM2MzkyNzE0.X6f9Bg.dDvpybamo7K2yeWUojrdtCRE4tM", 
prefix: "$getServerVar[prefix]" 
})
bot.variables({
    prefix: "!",
    mute: "Muted",
    xp: "0",
    lvl: "0",
    channel: "775231832819105819",
    maxxp: "150"
  })

bot.status({
      text: "музыку | Tea Us",
      type: "LISTENING",
      time: 12
})

 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}
bot.command({
name: "tempmute",
code: `
$onlyForIDs[707861883448983623;]
$channelSendMessage[$channelID;<@$mentioned[1]> С вас сняли мут, причина: мут закончился.]
$takeRoles[$mentioned[1];$roleID[$getServerVar[mute]]]
$wait[$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;24d];false;$noMentionMessage[1]]]
$channelSendMessage[$channelID;{description: $username[$mentioned[1]]#$discriminator[$mentioned[1]] замучен на: \`$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;навсегда];false;$noMentionMessage[1]]\`}{color:FDBDDD}]
$giveRoles[$mentioned[1];$roleID[$getServerVar[mute]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Я не могу замутить этого участника]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Вы не можете замутить этого участника.]
$onlyIf[$mentioned[1]!=$authorID;Вы не можете замутить себя.]
$onlyIf[$mentioned[1]!=;Вам нужно упомянуть кого нибудь.]
$onlyPerms[managemessages;{title:Недостаточно прав}{color:FFDDDD}{description:У вас недостаточно прав!}]`
})
bot.command({
name: "$alwaysExecute",
code: `$onlyIf[$getUserVar[xp]>=$getUserVar[maxxp];]
$username У тебя новый уровень!
Твой уровень: $sum[$getUserVar[lvl];1]`
})
bot.command({
name: "$alwaysExecute", 
code: `$setUserVar[xp;$sum[$getUserVar[xp];$random[1;4]]]
$setUserVar[maxxp;$replaceText[$replaceText[$checkCondition[$getUserVar[xp]>=$getUserVar[maxxp]];true;$sum[$getUserVar[maxxp];150];1];false;$getUserVar[maxxp];1]]
$setUserVar[lvl;$replaceText[$replaceText[$checkCondition[$getUserVar[xp]>=$getUserVar[maxxp]];true;$sum[$getUserVar[lvl];1];1];false;$getUserVar[lvl];1]]`
})
bot.command({
name: "rank", 
code: `
XP = \` $getUserVar[xp] / $getUserVar[maxxp] \`
LVL = \`$getUserVar[lvl]\``
})
bot.command({
name: "prefix", 
code: `$setServerVar[prefix;$message[1]]
Теперь префикс: \`$message[1]\`
$onlyIf[$ownerID==$authorID;Вы не владелец сервера :x:!]`
})
bot.command({
name: "song",
code: `$onlyForIDs[707861883448983623;]
$title[$songInfo[title]]
$description[$songInfo[url] - Ссылка
$songInfo[description] - Описание
$songInfo[duration] Секунд - Длительность]`
})
bot.command({
name: "/eval",
code: `$eval[$message]
$onlyForIDs[707861883448983623;]`,
nonPrefixed: true
})
bot.command({
name: "<@",
code: `$onlyIf[$mentioned[1]==775000033736392714;]
$title[Test Bot]
$color[fdb333]
$author[Tea Us]
$description[**Привет, $username, это тестовый бот c уровнями. Проверка 24/7 хостинга.
\`$getServerVar[prefix]tea <IDEA>\` - Предложить идею по развитию бота/проекта.
\`(Тест)\`, Сервер: https://discord.gg/qBpngq8Aja
Мой пинг: \`$ping ms\`**]

`,
nonPrefixed: true
})
bot.command({
name: "tea",
code: `
$title[<:deny_wait:775249075586203678>  Tea Suggestion]
$color[fdb333]
$author[$username]
$description[**Отклонено/Не просмотрено: <:deny_wait:775249075586203678> 
Принято: <:accepted:775249007148007439>
<a:emoji_13:775236949568782346> Tea Suggestion:** $message]
$addReactions[🔼;🔽]
$useChannel[$getServerVar[channel]]`
})
bot.command({
name: "look",
code: `
$editMessage[$message[1];$replaceText[$message;$message[1]; ;1]]
$onlyForIDs[707861883448983623;]`
})