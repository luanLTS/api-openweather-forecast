const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
exports.save = async ({ cidade, data }) => {
    return prisma.history.create({ data: { cidade, data } });
};
exports.findAll = async () => {
    return prisma.history.findMany();
};
