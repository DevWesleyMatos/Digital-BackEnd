import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import statusRoutes from "./routes/statusRoutes.js";
import productOrderRoutes from "./routes/productOrderRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3300;

app.use(bodyParser.json());

app.use("/api/status", statusRoutes);
app.use("/api/product-orders", productOrderRoutes);

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
