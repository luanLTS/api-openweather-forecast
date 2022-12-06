const express = require("express");
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
app.get("/", async (req, res) => {
    res.send("pong");
});

app.listen(3000, () => {
    console.log("iniciou o servidor");
});

/* 
// Exemplo persisir dados utilizando o prisma client
(async () => {
    console.log(
        await prisma.history.create({
            data: {
                cidade: "Itu",
            },
        })
    );
})(); */

(async () => {
    console.log(await prisma.history.findMany({ where: { cidade: "Itu" } }));
})();
