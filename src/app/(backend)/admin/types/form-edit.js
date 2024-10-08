"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingIndicator from "@/components/ui/loading-indicator";
import { updateType } from "@/actions/typeActions";

export default function TypeFormEdit({ open, onClose, onSuccess, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(
      z.object({
        name: z.string().min(2, {
          message: "Name must be at least 2 characters.",
        }),
        name_dv: z.string().min(2, {
          message: "Dhivehi name must be at least 2 characters.",
        }),
        slug: z.string().min(2, {
          message: "Slug must be at least 2 characters.",
        }),
      })
    ),
    defaultValues: { name: "", name_dv: "", slug: "" },
  });

  useEffect(() => {
    type.name ? form.setValue("name", type.name) : form.setValue("name", "");
    type.name_dv
      ? form.setValue("name_dv", type.name_dv)
      : form.setValue("name_dv", "");
    type.slug ? form.setValue("slug", type.slug) : form.setValue("slug", "");
  }, [type]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  async function onSubmit(values) {
    setIsLoading(true);
    const data = await updateType({ ...values, id: type.id });
    if (data) {
      onSuccess();
      setIsOpen(false);
    }
    setIsLoading(false);
  }

  return (
    <Sheet
      open={isOpen}
      onOpenChange={() => {
        onClose();
      }}
    >
      <SheetContent side="right" className="w-full max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col h-full">
              <SheetHeader>
                <SheetTitle>Edit Type ({type.name})</SheetTitle>
                <SheetDescription>
                  Fill out the form below to edit the type details. Please
                  ensure all information is accurate and up-to-date. Your
                  changes will be saved once you submit the form.
                </SheetDescription>
              </SheetHeader>
              <div className="flex-1 space-y-4 py-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="name_dv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dhivehi Name</FormLabel>
                        <FormControl>
                          <Input
                            className="font-rasmee rtl"
                            placeholder="ނަން"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter the slug" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <SheetFooter className="border-t">
                <Button type="submit" className="w-full">
                  {isLoading && (
                    <LoadingIndicator className="w-4 h-4 text-white" />
                  )}
                  Submit
                </Button>
              </SheetFooter>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
