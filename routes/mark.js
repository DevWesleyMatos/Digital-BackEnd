import express from "express";
import prisma from "../config/prisma.js";

const router = express.Router();

router.get("/marks", async (req, res) => {
  try {
    const marks = await prisma.mark.findMany();
    res.json(marks);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/marks", async (req, res) => {
  try {
    const mark = await prisma.mark.create({
      data: {
        name: req.body.name
      }
    });
    res.status(201).json(mark);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.put("/marks/:id", async (req, res) => {
  try {
    const mark = await prisma.mark.update({
      where: { id: Number(req.params.id) },
      data: { name: req.body.name }
    });
    res.json(mark);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/marks/:id", async (req, res) => {
  try {
    await prisma.mark.delete({
      where: { id: Number(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
