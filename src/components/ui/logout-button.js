"use server";

import { DoorOpen } from "lucide-react";
import { Button } from "./button";
import { lucia, validateRequest } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutButton() {
  return (
    <div>
      <form action={logout}>
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="mt-auto rounded-lg"
          aria-label="Account"
        >
          <DoorOpen className="size-5" />
        </Button>
      </form>
    </div>
  );
}

async function logout() {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/admin/blog");
}
