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
import { updateProject } from "@/actions/projectActions";

export default function ProjectsFormEdit({
  open,
  onClose,
  onSuccess,
  project,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(
      z.object({
        name: z.string().min(2, {
          message: "Name must be at least 2 characters.",
        }),
        name_dv: z.string().min(2, {
          message: "Name (Dhivehi) must be at least 2 characters.",
        }),
        company: z.string().min(2, {
          message: "Company name must be at least 2 characters.",
        }),
        price: z.union([
          z.string().regex(/^\d+(\.\d+)?$/, {
            message: "Price must be a positive number.",
          }),
          z.number().positive(),
        ]),
        duration: z.string().min(1, {
          message: "Duration must be a non-empty string.",
        }),
        description: z.string().optional(),
        percentage: z.string().regex(/^(100|[1-9]?\d)(\.\d+)?$/, {
          message: "Percentage must be a positive number between 0 and 100.",
        }),
      })
    ),
    defaultValues: {
      name: "",
      company: "",
      price: "0",
      duration: "",
      description: "",
      percentage: "0",
    },
  });

  useEffect(() => {
    form.setValue("name", project.name || "");
    form.setValue("name_dv", project.name_dv || "");
    form.setValue("company", project.company || "");
    form.setValue("price", project.price || "0");
    form.setValue("duration", project.duration || "");
    form.setValue("percentage", project.percentage || "0");
    form.setValue("description", project.description || "");
  }, [project]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  async function onSubmit(values) {
    setIsLoading(true);
    const data = await updateProject({ ...values, id: project.id });
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
      <SheetContent side="right" className="w-full max-w-md overflow-y-scroll">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col h-full">
              <SheetHeader>
                <SheetTitle>Edit Project ({project.name})</SheetTitle>
                <SheetDescription>
                  Fill out the form below to edit the project details. Please
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
                        <FormLabel>Project Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter project name" {...field} />
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
                        <FormLabel>Project Name (Dhivehi)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter project name in Dhivehi"
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
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter price"
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
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duration (Years)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter duration" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="percentage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Percentage</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter percentage"
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
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter description" {...field} />
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
