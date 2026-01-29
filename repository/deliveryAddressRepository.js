import prisma from "../config/prisma.js";

export const create = (data) => prisma.deliveryAddress.create({ data });

export const show = async (id) => {
    let results = await prisma.deliveryAddress.findUnique({
        where: {
            id: Number(id)
        }
    })
    return results
};

export const index = async () => {
    let results = await prisma.deliveryAddress.findMany()
    return results
}

export const destroy = async (id) => {
    let results = await prisma.deliveryAddress.delete({
        where: {
            id: Number(id)
        }
    })
    return results
};


export const update = async (address,city,zip_code,state,neighborhood, id) => {


    let results = await prisma.deliveryAddress.update({
        where: {
            id: Number(id)
        },
        data: {
            address,
            city,
            zip_code,
            state,
            neighborhood
        }
    })
    return results
};