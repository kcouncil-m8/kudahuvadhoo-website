"use server";

import prisma from "@/lib/prisma";
import { verify } from "@node-rs/argon2";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

export const authenticateUser = async (input) => {
  const userDetails = await prisma.user.findUnique({
    where: {
      email: input.email,
    },
  });

  if (!userDetails) {
    return {
      status: false,
      error: "Sorry, we couldn't find your account. Please try again.",
    };
  }

  const validPassword = await verify(
    userDetails.password_hash,
    input.password,
    {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    }
  );
  if (!validPassword) {
    return {
      status: false,
      error: "Incorrect username or password",
    };
  }

  const session = await lucia.createSession(userDetails.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return { status: true };
};
