module.exports = {
  name: "exec",
  code: `
$exec[$message]

$onlyForIDs[$botOwnerID;Bu komutu yalnızca **$userTag[$botOwnerID]** kullanabilir.]
`
}