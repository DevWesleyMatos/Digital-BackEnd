import * as ProductRepository from "../repository/ProductRepository.js"
import prisma from "../config/prisma.js"


export const index = async (req , res ) => {
    try{
         const products = await prisma.product.findMany({
      include: {
        mark: true,
        category: true
      }
    })

    res.json(products)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const show = async (req , res ) => {
    try{
        let {id} = req.params
         const data = await ProductRepository.show(id) 
         res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const create = async (req , res ) => {
    try{
         const data = await ProductRepository.create(req.body) 
         res.status(201).send("Status cadastrado com sucesso")
    } catch (error) {
        res.status(500).send(error)
    }
}
export const update = async (req , res ) => {
    try{
         let {id} = req.params
         let {name} = req.body
         const data = await ProductRepository.update(id,name) 
         res.status(200).send("Status atualizado com sucesso")
    } catch (error) {
        res.status(500).send(error)
    }
}
export const destroy = async (req , res ) => {
    try{
         let {id} = req.params
         const data = await ProductRepository.destroy(id) 
         res.status(204).send("Status deletado com sucesso")
    } catch (error) {
        res.status(500).send(error)
    }
}