"use server";

import prisma from "@/lib/prisma";

export const getTypes = async () => {
  const types = await prisma.type.findMany();
  return { types };
};

export const createType = async (input) => {
  const createType = await prisma.type.create({
    data: {
      name: input.name,
      name_dv: input.name_dv,
      slug: input.slug,
    },
  });

  return { data: createType };
};

export const updateType = async (input) => {
  const updateType = await prisma.type.update({
    where: {
      id: input.id,
    },
    data: {
      name: input.name,
      name_dv: input.name_dv,
      slug: input.slug,
    },
  });

  return { data: updateType };
};

export const deleteType = async (id) => {
  const deleteType = await prisma.type.delete({
    where: {
      id: id,
    },
  });

  return { data: deleteType };
};
