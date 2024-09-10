"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authenticateUser } from "@/actions/authActions";
import { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingIndicator from "@/components/ui/loading-indicator";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const form = useForm({
    resolver: zodResolver(
      z.object({
        email: z.string().email({
          message: "Invalid email address.",
        }),
        password: z.string().min(8, {
          message: "Password must be at least 8 characters.",
        }),
      })
    ),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    const data = await authenticateUser(values);
    if (data.status) {
      router.push("/admin/blog");
    } else {
      data.error && setError(data.error);
    }
    setIsLoading(false);
  }

  return (
    <div className="w-full lg:grid min-h-screen lg:grid-cols-2">
      <div className="h-[20rem] lg:h-full bg-black lg:block"></div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto flex flex-col gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="w-fulls grid gap-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="w-full gap-4 flex flex-col items-center justify-center">
                  <div className="w-full flex flex-col gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your full name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter your password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    {error && (
                      <p className="text-red-500 text-sm font-[300]">{error}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && (
                      <LoadingIndicator className="w-4 h-4 text-white" />
                    )}
                    Login
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
