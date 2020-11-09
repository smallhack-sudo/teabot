module.exports = ({
 name: "setmute",
 code: `
Теперь роль мута: <@&$roleID[$message]>
$setServerVar[mute;$message]
$onlyForIDs[707861883448983623;]
`
 })
