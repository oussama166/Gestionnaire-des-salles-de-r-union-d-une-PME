import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model === "Room" && params.action === "createMany") {
    const data = await params.args.data;
    for (let i in data) {
      data[i].seventyPercent = data[i].max_capacity * 0.7;
    }
  }
  return next(params);
});

export default prisma;
