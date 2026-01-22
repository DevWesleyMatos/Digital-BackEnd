
import express from "express"
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import statusRoutes from "./routes/statusRoutes.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(bodyParser.json())

app.use("/api",statusRoutes)

app.listen(3300, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
})