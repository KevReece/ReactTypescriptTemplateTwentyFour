import { PrismaClient } from "@prisma/client";

export const applyAsyncProcessExit = (prisma: PrismaClient) => {
  process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit();
  });
};
