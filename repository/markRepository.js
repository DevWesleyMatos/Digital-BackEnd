import prisma from "../config/prisma.js";

export const index = async () => {
    let results = await prisma.mark.findMany();
    return results;
}

export const show = async (id) => {
    let results = await prisma.mark.findUnique({
        where: {        
            id: Number(id)
        }
    });
    return results;
}

export const create = async (data) => {
  const { name, image_url } = data;

  return prisma.mark.create({
    data: {
      name,
      image_url
    }
  });
};


export const update = async (id, data) => {
    const {name, image_url} = data;
    const results = await prisma.mark.update({
        where: {
            id: Number(id),
        },
        data: {
            name,
            image_url
        }
    });
    return results;
};

export const remove = async (id) => {
    const results = await prisma.mark.delete({
        where: {
            id: Number(id),
        },
    });
    return results;
}