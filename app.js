
import express from "express"
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import db from "./config/db.js"
import statusRoutes from "./routes/statusRoutes.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(bodyParser.json())

app.use("/api",statusRoutes)


app.put("/status/:id", async (req, res) => {
    try {   
        let id = req.params.id
        let {name} = req.body
        
        const data = db.query("UPDATE status SET name = ($1) WHERE id = ($2)", [name,id])

        res.status(200).send("Registro atualizado com sucesso")
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete("/status/:id", async (req, res) => {
    try {
        let id = req.params.id
        const data = await db.query(`DELETE FROM status WHERE id = ${id}`)
        res.status(204).send("Registro deletado com sucesso")
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(3300, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
})