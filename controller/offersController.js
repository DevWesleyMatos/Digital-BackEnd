import * as offersRepository from "../repository/offersRepository.js";

export const index = async (req, res) => {
    try {
        const data = await offersRepository.index();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await offersRepository.show(id);
        if (!data) {
            return res.status(404).json({ error: "Delivery não encontrado" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




export const create = async (req, res) => {
    try {
        const data = req.body;
        const result = await offersRepository.create(data);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await offersRepository.destroy(id);
        if (!data) {
            return res.status(404).json({ error: "Delivery não encontrado" });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        let { id } = req.params
        const {
            name,value} = req.body;
        if (!id) {
            return res.status(404).json({ error: "Delivery não encontrado" });
        }
        const result = await offersRepository.update(
           name,value, id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};