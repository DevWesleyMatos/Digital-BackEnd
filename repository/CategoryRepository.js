import prisma from "../config/prisma.js";

export const index = async () => {
    let results = await prisma.category.findMany();
    return results;
}

export const show = async (id) => {
    let results = await prisma.category.findUnique({
        where: {        
            id: Number(id)
        }
    });
    return results;
}

export const create = async (data) => {
  const { id, name } = data;

  return prisma.category.create({
    data: {
      id,
      name
    }
  });
};


export const update = async (id, name) => {
    const results = await prisma.category.update({
        where: {
            id: Number(id),
        },
        data: {
            name
        }
    });
    return results;
};

export const remove = async (id) => {
    const results = await prisma.category.delete({
        where: {
            id: Number(id),
        },
    });
    return results;
}