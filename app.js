
import express from "express"
import dotenv from "dotenv"
import pkg from 'pg'
import bodyParser from 'body-parser'

dotenv.config()
const app = express() 
const PORT= process.env.PORT
app.use(bodyParser.json())
const { Pool } = pkg

const db = new Pool ({
    connectionString:process.env.DATABASE_URL
})

app.get("/status", async (req,res) => {
    try {
        const data = await db.query("SELECT * FROM status")
        res.status(200).send(data.rows)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/status/:id", async (req,res) => {
    try {
        let id = req.params.id
        const data = await db.query(`SELECT * FROM status WHERE id = ${id}`)
        res.status(200).send(data.rows)
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(3300,()=> {
    console.log(`Aplicação rodando na porta ${PORT}`);
})