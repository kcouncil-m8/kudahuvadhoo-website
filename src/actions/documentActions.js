"use server";

import prisma from "@/lib/prisma";

export const getDocuments = async () => {
  const documents = await prisma.document.findMany({
    include: {
      type: true,
    },
  });
  const types = await prisma.type.findMany();
  return { documents, types };
};

export const createDocument = async (input) => {
  const createDocument = await prisma.document.create({
    data: {
      type_id: input.type_id,
      name: input.name,
      number: input.number,
      name_dv: input.name_dv,
      gazette_url: input.gazette_url,
      date_open: new Date(input.date_open).toISOString(),
      date_expiry: new Date(input.date_expiry).toISOString(),
      file: input.file,
    },
  });

  return { data: createDocument };
};

export const updateDocument = async (input) => {
  const updateDocument = await prisma.document.update({
    where: {
      id: input.id,
    },
    data: {
      type_id: input.type_id,
      number: input.number,
      name: input.name,
      name_dv: input.name_dv,
      gazette_url: input.gazette_url,
      date_open: new Date(input.date_open).toISOString(),
      date_expiry: new Date(input.date_expiry).toISOString(),
      file: input.file,
    },
  });

  return { data: updateDocument };
};

export const deleteDocument = async (id) => {
  const deleteDocument = await prisma.document.delete({
    where: {
      id: id,
    },
  });

  return { data: deleteDocument };
};
