import prisma from "~/lib/prisma";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, newPassword } = body;

  if (!email || !newPassword) {
    return { error: "Email и новый пароль обязательны" };
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return { error: "Пользователь не найден" };
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  });

  return { message: "Пароль успешно изменен" };
});
