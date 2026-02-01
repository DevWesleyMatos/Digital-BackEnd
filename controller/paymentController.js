import * as paymentRepository from "../repository/paymentRepository.js";

export const index = async (req, res) => {
    try {
        const payments = await paymentRepository.index();
        res.status(200).send(payment);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const show = async(req, res) => {
    try {
        const { id } = req.params;
        const payment = await paymentRepository.show(id);
        res.status(200).send(payment);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const create = async (req, res) => {
    try {
        const data = req.body;
        const newPayment = await paymentRepository.create(data);
        res.status(201).send(newPayment);
    } catch (error) {
        res.status(500).send(error);
    }   
};


export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updated = await paymentRepository.update(id, data);
    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const remove = async (req, res) => {
    try {
        const { id } = req.params;      
        await paymentRepository.remove(id);
        res.status(204).send("Pagamento deletado com sucesso");
    } catch (error) {
        res.status(500).send(error);
    }
};  