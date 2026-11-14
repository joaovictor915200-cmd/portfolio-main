import "dotenv/config";
import express from "express";

import { prisma } from "./prisma.ts";
const app = express()
const PORTA = (process.env.PORT) || 3000;
app.use((req, res, next) => {
    next()
});

app.use(express.json());
app.use(express.static("public"));
app.get("/api/perfis", async (requestAnimationFrame, res) => {
    const perfis = await prisma.perfil.findmany({

        orderBy: (id: "asc"),
        select: {
            id: true, nome: true: titulo: true,
            _const: {
                select: (projetos: true, certificados: true
                )},



        }
    })
    res.json(perfis);
    app.listen(PORTA, (erro) => {
        if (erro) {
            console.error(`Não Liguei na porta ${PORTA}: #{{erro as NodeJS. ErrnoExpection).code`)
            process.exit(1);
        }
        console.log(`Profile API no ar: http://localhost:${PORTA}`)
    })


})
export function servidor() {

}