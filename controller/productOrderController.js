import * as productOrderRepository from "../repository/productOrderRepository.js";

export const index = async (req, res) => {
    try {
        const results = await productOrderRepository.index();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await productOrderRepository.show(id);
        if (!data) {
            return res.status(404).json({ error: "ProductOrder não encontrado" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const data = req.body; // espera { productId, orderId, quantity }
        const result = await productOrderRepository.create(data);
        res.status(201).json(result); // retorna o registro criado
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body; // campos a atualizar

        const result = await productOrderRepository.update(id, data);

        if (!result) {
            return res.status(404).json({ error: "ProductOrder não encontrado" });
        }

        res.status(200).json(result); // retorna o registro atualizado
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const { id } = req.params; // pega o id da URL

        const result = await productOrderRepository.destroy(id); // chama o repository

        if (!result) {
            return res.status(404).json({ error: "ProductOrder não encontrado" });
        }

        res.status(200).json({ message: "ProductOrder deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
