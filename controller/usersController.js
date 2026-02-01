import * as userRepository from "../repository/userRepository.js";
import express from "express"

export const index = async (req, res) => {
    try {
        const marks = await userRepository.index();
        res.status(200).send(marks);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const show = async(req, res) => {
    try {
        const { id } = req.params;
        const mark = await userRepository.show(id);
        res.status(200).send(mark);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const create = async (req, res) => {
    try {
        const data = req.body;
        const newMark = await userRepository.create(data);
        res.status(201).send(newMark);
    } catch (error) {
        res.status(500).send(error);
    }   
};


export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updated = await userRepository.update(id, data);
    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const remove = async (req, res) => {
    try {
        const { id } = req.params;      
        await userRepository.remove(id);
        res.status(204).send("Usuário deletado com sucesso");
    } catch (error) {
        res.status(500).send(error);
    }
};  