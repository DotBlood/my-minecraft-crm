import { defineEventHandler } from "h3";
import jwt from "jsonwebtoken";
import prisma from "~/lib/prisma"; // Подключение к базе данных

const JWT_SECRET = "your_secret_key"; // Должен быть таким же, как при создании токена

export default defineEventHandler(async (event) => {
  try {
    // Извлекаем заголовки
    const authHeader = event.req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return { error: "Токен отсутствует или неверен", statusCode: 401 };
    }

    // Получаем сам токен
    const token = authHeader.split(" ")[1];

    // Декодируем JWT
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return { error: "Недействительный токен", statusCode: 401 };
    }

    // Проверяем, есть ли userId в токене
    if (!decoded || typeof decoded !== "object" || !decoded.userId) {
      return { error: "Неверный токен", statusCode: 401 };
    }

    // Получаем пользователя из базы данных
    const user = await prisma.user.findUnique({
      where: { uuid: decoded.userId },
      select: { uuid: true, username: true, email: true },
    });

    if (!user) {
      return { error: "Пользователь не найден", statusCode: 404 };
    }

    // Возвращаем информацию о пользователе
    return { id: user.uuid, username: user.username, email: user.email };
  } catch (error) {
    console.error("Ошибка получения пользователя:", error);
    return { error: "Внутренняя ошибка сервера", statusCode: 500 };
  }
});
