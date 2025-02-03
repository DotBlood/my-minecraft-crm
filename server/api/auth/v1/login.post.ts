// login.js
import prisma from "~/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_secret_key";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (!email || !password) {
    return { error: "Email и пароль обязательны" };
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return { error: "Пользователь не найден" };
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return { error: "Неверный пароль" };
  }

  const token = jwt.sign({ userId: user.uuid, email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return { message: "Авторизация успешна", token };
});
