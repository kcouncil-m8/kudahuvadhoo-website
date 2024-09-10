"use server";

import prisma from "@/lib/prisma";

export const getCategories = async () => {
  const categories = await prisma.category.findMany();
  return { categories };
};

export const createCategory = async (input) => {
  const createCategory = await prisma.category.create({
    data: {
      name: input.name,
      name_dv: input.name_dv,
    },
  });

  return { data: createCategory };
};

export const updateCategory = async (input) => {
  const updateCategory = await prisma.category.update({
    where: {
      id: input.id,
    },
    data: {
      name: input.name,
      name_dv: input.name_dv,
    },
  });

  return { data: updateCategory };
};

export const deleteCategory = async (id) => {
  const deleteCategory = await prisma.category.delete({
    where: {
      id: id,
    },
  });

  return { data: deleteCategory };
};
