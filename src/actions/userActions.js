"use server";

import { lucia } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";

export const getUsers = async () => {
  const users = await prisma.user.findMany();
  return { users };
};

export const createUser = async (input) => {
  const passwordHash = await hash(input.password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const userId = generateIdFromEntropySize(10);

  const createUser = await prisma.user.create({
    data: {
      id: userId,
      name: input.name,
      email: input.email,
      password_hash: passwordHash,
    },
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return { data: createUser };
};

export const updateUser = async (input) => {
  const updateUser = await prisma.user.update({
    where: {
      id: input.id,
    },
    data: {
      name: input.name,
      email: input.email,
    },
  });

  return { data: updateUser };
};
