const LINE_PUSH_ENDPOINT = "https://api.line.me/v2/bot/message/push";
function getRequiredLineConfig() {
  const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN?.trim();
  const groupId = process.env.LINE_GROUP_ID?.trim();
  if (!channelAccessToken) {
    throw new Error("Missing LINE_CHANNEL_ACCESS_TOKEN");
  }
  if (!groupId) {
    throw new Error("Missing LINE_GROUP_ID");
  }
  return { channelAccessToken, groupId };
}
async function pushLineGroupMessage(messages) {
  const { channelAccessToken, groupId } = getRequiredLineConfig();
  const response = await fetch(LINE_PUSH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${channelAccessToken}`
    },
    body: JSON.stringify({
      to: groupId,
      messages
    })
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`LINE push failed (${response.status}): ${detail}`);
  }
}
export {
  pushLineGroupMessage as p
};
