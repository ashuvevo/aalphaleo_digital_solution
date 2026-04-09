import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "admin@example.com").toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

async function main() {
  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);

  await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    create: {
      email: ADMIN_EMAIL,
      passwordHash,
      role: "ADMIN",
    },
    update: {
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log(`Admin credentials reset for ${ADMIN_EMAIL}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
