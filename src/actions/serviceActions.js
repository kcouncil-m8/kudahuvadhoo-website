"use server";

import prisma from "@/lib/prisma";

export const getServices = async () => {
  const services = await prisma.service.findMany();
  return { services };
};

export const createService = async (input) => {
  const createService = await prisma.service.create({
    data: {
      title: input.title,
      title_dv: input.title_dv,
      file: input.image,
      isPublished: input.isPublished,
    },
  });

  return { data: createService };
};

export const updateService = async (input) => {
  const updateService = await prisma.service.update({
    where: {
      id: input.id,
    },
    data: {
      title: input.title,
      title_dv: input.title_dv,
      file: input.image,
      isPublished: input.isPublished,
    },
  });

  return { data: updateService };
};

export const deleteService = async (id) => {
  const deleteService = await prisma.service.delete({
    where: {
      id: id,
    },
  });

  return { data: deleteService };
};
