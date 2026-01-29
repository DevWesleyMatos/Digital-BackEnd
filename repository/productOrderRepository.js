import prisma from "../config/prisma.js"

export const index = async () => {
    let results = await prisma.productOrder.findMany()
    return results
}

export const show = async (id) => {
    let results = await prisma.productOrder.findUnique({
        where: {
            id: Number(id)
        }
    })
    return results
}

export const create = async (data) => {
    const results = await prisma.status.create({
        data: {
            data
        }
    })
    return results
}

export const update = async (id, data) => {
    const results = await prisma.productOrder.update({
        where: {
            id:Number(id),
        },
        data: {
            data
        }

    })
    return results
}


export const destroy = async (id) => {


    const results = await prisma.productOrder.delete({
        where: {
            id: Number(id),
        },
    })
    return results
}