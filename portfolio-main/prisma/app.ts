import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";

// Inicializa a conexão SQLite com o adapter do Prisma v7
const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL || "file:./dev.db" });
const prisma = new PrismaClient({ adapter });


const lists = await prisma.jogo.findMany({
    include: {
        personagem: true,
        Conquistas: true,
        Plataformas: { include: { plataforma: true } },
    },
});
console.dir(lists, { depth: null });

