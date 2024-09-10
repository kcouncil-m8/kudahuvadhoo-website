"use server";

import prisma from "@/lib/prisma";

export const getSettings = async () => {
  const settings = await prisma.setting.findMany();
  return { settings };
};

export const createSetting = async (input) => {
  const createSetting = await prisma.setting.create({
    data: {
      name: input.name,
      value: input.value,
      image: input.image,
      description: input.description,
    },
  });

  return { data: createSetting };
};

export const updateSetting = async (input) => {
  const updateSetting = await prisma.setting.update({
    where: {
      id: input.id,
    },
    data: {
      name: input.name,
      value: input.value,
      image: input.image,
      description: input.description,
    },
  });

  return { data: updateSetting };
};

export const deleteSetting = async (id) => {
  const deleteSetting = await prisma.setting.delete({
    where: {
      id: id,
    },
  });

  return { data: deleteSetting };
};
