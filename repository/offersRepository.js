import prisma from "../config/prisma.js"

export const index = async () => {
    let results = await prisma.offers.findMany()
    return results
}

export const show = async (id) => {
    let results = await prisma.offers.findUnique({
        where: {
            id: Number(id)
        }
    })
    return results
}

export const create = async (data) => {
    const results = await prisma.offers.create({data})
    return results
}

export const update = async ( name,value,id) => {
    const results = await prisma.offers.update({
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


    const results = await prisma.offers.delete({
        where: {
            id: Number(id),
        },
    })
    return results
}