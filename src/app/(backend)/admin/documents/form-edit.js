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
import { updateDocument } from "@/actions/documentActions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FileUpload from "../../components/FileUpload";

export default function DocumentsFormEdit({
  open,
  onClose,
  onSuccess,
  document,
  types,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(
      z.object({
        type_id: z.string().min(1, {
          message: "Type ID is required.",
        }),
        name: z.string().min(2, {
          message: "Name must be at least 2 characters.",
        }),
        gazette_url: z.string().optional(),
        name_dv: z.string().optional(),
        date_open: z.string().optional(),
        date_expiry: z.string().optional(),
        file: z.string().optional(),
      })
    ),
    defaultValues: {
      type_id: "",
      name: "",
      name_dv: "",
      date_open: null,
      date_expiry: null,
      file: "",
      gazette_url: "",
    },
  });

  useEffect(() => {
    document.type
      ? form.setValue("type_id", document.type.id.toString())
      : form.setValue("type_id", "");
    form.setValue("name", document.name || "");
    form.setValue("name_dv", document.name_dv || "");
    form.setValue("date_open", document.date_open || null);
    form.setValue("date_expiry", document.date_expiry || null);
    form.setValue("file", document.file || "");
    form.setValue("gazette_url", document.gazette_url || "");
  }, [document]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  async function onSubmit(values) {
    setIsLoading(true);
    const data = await updateDocument({ ...values, id: document.id });
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
                <SheetTitle>Edit Document ({document.name})</SheetTitle>
                <SheetDescription>
                  Fill out the form below to edit the document details. Please
                  ensure all information is accurate and up-to-date. Your
                  changes will be saved once you submit the form.
                </SheetDescription>
              </SheetHeader>
              <div className="flex-1 space-y-4 py-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="type_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {types.map((type) => {
                              return (
                                <SelectItem
                                  value={type.id.toString()}
                                  key={type.id}
                                >
                                  {type.name}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Document Name</FormLabel>
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
                        <FormLabel>Document Name DV</FormLabel>
                        <FormControl>
                          <Input
                            className="font-rasmee rtl"
                            placeholder="Enter the document name DV"
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
                    name="gazette_url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gazette URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Gazette URL (Optional)"
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
                    name="date_open"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date Open</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="Select date open"
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
                    name="date_expiry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date Expiry</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="Select date expiry"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FileUpload
                    label="File"
                    onSuccess={(url) => {
                      form.setValue("file", url);
                    }}
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
