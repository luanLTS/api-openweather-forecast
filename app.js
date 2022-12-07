require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const historyRoutes = require("./src/routers/history.route");

const { PORT } = process.env;

app.get("/", async (req, res) => {
    res.send("pong");
});

app.use(express.json());
app.use(cors());

// routes
app.use("/history", historyRoutes);

app.listen(PORT, () => {
    console.log("iniciou o servidor na porta " + PORT);
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
/* 
// Exemplo recuperar dados com condicao utilizando o prisma clients
(async () => {
    console.log(await prisma.history.findMany({ where: { cidade: "Itu" } }));
})();
 */
