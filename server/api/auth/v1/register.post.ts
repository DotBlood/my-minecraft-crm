import prisma from "~/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_secret_key";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, email, password } = body;

    if (!email || !password) {
      return { error: "Email и пароль обязательны", alert: { type: "error", text: "Email и пароль обязательны" } };
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: "Пользователь уже существует", alert: { type: "error", text: "Пользователь уже существует" } };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ userId: user.uuid, email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return { message: "Регистрация успешна", token, alert: { type: "success", text: "Регистрация прошла успешно!" } };
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    return { error: "Ошибка сервера", alert: { type: "error", text: "Не удалось зарегистрироваться. Попробуйте позже." } };
  }
});
