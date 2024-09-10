"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
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
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingIndicator from "@/components/ui/loading-indicator";
import { createService } from "@/actions/serviceActions"; // Updated to use createService
import FileUpload from "../../components/FileUpload";
import { Switch } from "@/components/ui/switch";

export default function ServiceFormCreate({ onClose, onSuccess }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(
      z.object({
        title: z.string().min(2, {
          message: "Title must be at least 2 characters.",
        }),
        title_dv: z.string().min(2, {
          message: "Dhivehi title must be at least 2 characters.",
        }),
        file: z.string(),
        isPublished: z.boolean().default(false),
      })
    ),
    defaultValues: {
      title: "",
      title_dv: "",
      file: "",
      isPublished: false,
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    const data = await createService(values); // Updated to use createService
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
        setIsOpen(isOpen ? false : true);
        form.reset();
        onClose(false);
      }}
    >
      <SheetTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>New Service</Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-lg overflow-y-scroll"
        style={{ minWidth: "50vw" }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col h-full">
              <SheetHeader>
                <SheetTitle>Create Service</SheetTitle>
                <SheetDescription>
                  Fill out the form below to create a new service. Please ensure
                  all information is accurate and up-to-date. Your changes will
                  be saved once you submit the form.
                </SheetDescription>
              </SheetHeader>
              <div className="flex-1 space-y-4 py-6">
                <div>
                  <FileUpload
                    label="File"
                    onSuccess={(url) => {
                      form.setValue("file", url);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="title_dv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dhivehi Title</FormLabel>
                        <FormControl>
                          <Input
                            className="font-rasmee rtl"
                            placeholder="Enter dhivehi title"
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
                    name="isPublished"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Published</FormLabel>
                          <FormDescription>
                            By turning this on, you are indicating that this
                            service is published.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <SheetFooter className="border-t">
                <Button type="submit" className="w-full" disabled={isLoading}>
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
