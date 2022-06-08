const http = require("http");
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

require("dotenv").config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ message: "/pong" });
});

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error("Server ERROR : ", err);
    await prisma.$disconnect();
  }
};

start();
