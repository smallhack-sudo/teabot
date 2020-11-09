module.exports = ({
 name: "unmute",
 code: `
$takeRoles[$mentioned[1];$roleID[$getServerVar[mute]]]
$channelSendMessage[$channelID;{description: $username[$mentioned[1]] С вас был снят мут!}]
$onlyIf[$mentioned[1]!=;Упомяни кого нибудь]
$onlyPerms[managemessages;{title:Недостаточно прав}{color:fdb333}{description:У вас нет прав.}]
`
 })
