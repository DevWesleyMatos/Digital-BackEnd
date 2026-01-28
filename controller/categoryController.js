import * as CategoryRepository from "../repository/CategoryRepository.js";
import express from "express"

export const index = async (req, res) => {
    try {
        const category = await CategoryRepository.index();
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const show = async(req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryRepository.show(id);
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const create = async (req, res) => {
    try {
        const data = req.body;
        const newCategory = await CategoryRepository.create(data);
        res.status(201).send(newCategory);
    } catch (error) {
        res.status(500).send(error);
    }   
};


export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {name} = req.body;

    const updated = await CategoryRepository.update(id, name);
    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const remove = async (req, res) => {
    try {
        const { id } = req.params;      
        await CategoryRepository.remove(id);
        res.status(204).send("Categoria deletada com sucesso");
    } catch (error) {
        res.status(500).send(error);
    }
};  