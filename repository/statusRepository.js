import prisma from "../config/prisma.js"

export const index = async () => {
    let results = await prisma.status.findMany()
    return results
}

export const show = async (id) => {
    let results = await prisma.status.findUnique({
        where: {
            id: Number(id)
        }
    })
    return results
}

export const create = async (name) => {
    const results = await prisma.status.create({
        data: {
            name
        }
    })
    return results
}

export const update = async (id, name) => {
    const results = await prisma.status.update({
        where: {
            id:Number(id),
        },
        data: {
            name
        }

    })
    return results
}


export const destroy = async (id) => {


    const results = await prisma.status.delete({
        where: {
            id: Number(id),
        },
    })
    return results
}