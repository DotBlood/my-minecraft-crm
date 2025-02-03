// server/api/player/[nick].ts
export default defineEventHandler(async (event) => {
  const nick = event.context.params?.nick;

  // 1. Проверяем ник
  if (!nick || typeof nick !== "string") {
    throw createError({ statusCode: 400, message: "Invalid nickname" });
  }

  // 2. Запрос к игровому серверу или базе данных
  try {
    const playerData = await fetchPlayerData(nick); // Ваша логика получения данных

    return {
      status: "success",
      data: {
        nick: playerData.nick,
        avatar: playerData.avatarUrl,
        level: playerData.level,
        class: playerData.class,
        lastOnline: playerData.lastOnline,
      },
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error fetching player data",
    });
  }
});

async function fetchPlayerData(nick: string) {
  return {
    nick,
    avatarUrl: `https://mc-heads.net/avatar/${nick}`,
    level: Math.floor(Math.random() * 100),
    class: ["Warrior", "Mage", "Rogue"][Math.floor(Math.random() * 3)],
    lastOnline: new Date().toISOString(),
  };
}
