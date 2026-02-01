import prisma from "../config/prisma.js"

export const index = async () => {
    let results = await prisma.paymentMethod.findMany()
    return results
}

export const show = async (id) => {
    let results = await prisma.paymentMethod.findUnique({
        where: {
            id: Number(id)
        }
    })
    return results
}

export const create = async (data) => {
    const results = await prisma.paymentMethod.create({data})
    return results
}

export const update = async ( name,value,id) => {
    const results = await prisma.paymentMethod.update({
        where: {
            id:Number(id),
        },
        data: {
            name,value
        }

    })
    return results
}


export const destroy = async (id) => {


    const results = await prisma.paymentMethod.delete({
        where: {
            id: Number(id),
        },
    })
    return results
}