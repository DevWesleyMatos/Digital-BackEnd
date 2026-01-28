import express from "express";
import prisma from "../config/prisma.js";

const router = express.Router();

router.get("/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/categories", async (req, res) => {
  try {
    const category = await prisma.category.create({
      data: {
        name: req.body.name
      }
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.put("/categories/:id", async (req, res) => {
  try {
    const category = await prisma.category.update({
      where: { id: Number(req.params.id) },
      data: { name: req.body.name }
    });
    res.json(category);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/categories/:id", async (req, res) => {
  try {
    await prisma.category.delete({
      where: { id: Number(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
