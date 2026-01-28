import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import ProductRoutes from "./routes/ProductRoutes.js";
import MarkRoutes from "./routes/mark.js";
import CategoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3300;

app.use(cors()); 
app.use(bodyParser.json());


app.use("/api", MarkRoutes);
app.use("/api", CategoryRoutes);
app.use("/api", ProductRoutes);

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
