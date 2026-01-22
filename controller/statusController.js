import * as statusRepository from "../repository/statusRepository.js"
import express from "express"

export const index = async (req , res ) => {
    try{
         const index = await statusRepository.index()
         res.status(200).send(index)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const show = async (req , res ) => {
    try{
        let {id} = req.params
         const data = await statusRepository.show(id) 
         res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const create = async (req , res ) => {
    try{
         let {name} = req.body
         const data = await statusRepository.create(name) 
         res.status(201).send("Status cadastrado com sucesso")
    } catch (error) {
        res.status(500).send(error)
    }
}
export const update = async (req , res ) => {
    try{
         let {id} = req.params
         let {name} = req.body
         const data = await statusRepository.update(id,name) 
         res.status(200).send("Status atualizado com sucesso")
    } catch (error) {
        res.status(500).send(error)
    }
}
export const destroy = async (req , res ) => {
    try{
         let {id} = req.params
         const data = await statusRepository.destroy(id) 
         res.status(204).send("Status deletado com sucesso")
    } catch (error) {
        res.status(500).send(error)
    }
}