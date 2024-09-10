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
import { updateSetting } from "@/actions/settingActions";
import FileUpload from "../../components/FileUpload";

export default function SettingsFormEdit({
  open,
  onClose,
  onSuccess,
  setting,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(
      z.object({
        name: z.string().min(2, {
          message: "Name must be at least 2 characters.",
        }),
        value: z.string().min(2, {
          message: "Value must be at least 2 characters.",
        }),
        image: z.string().optional(),
        description: z.string().optional(),
      })
    ),
    defaultValues: { name: "", value: "", image: "", description: "" },
  });

  useEffect(() => {
    setting.name
      ? form.setValue("name", setting.name)
      : form.setValue("name", "");
    setting.value
      ? form.setValue("value", setting.value)
      : form.setValue("value", "");
    setting.image
      ? form.setValue("image", setting.image)
      : form.setValue("image", "");
    setting.description
      ? form.setValue("description", setting.description)
      : form.setValue("description", "");
  }, [setting]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  async function onSubmit(values) {
    setIsLoading(true);
    const data = await updateSetting({ ...values, id: setting.id });
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
                <SheetTitle>Edit Setting ({setting.name})</SheetTitle>
                <SheetDescription>
                  Fill out the form below to edit the setting details. Please
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
                        <FormLabel>Name</FormLabel>
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
                    name="value"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Value</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter value" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FileUpload
                    label="Image"
                    defaultValue={setting.image}
                    onSuccess={(url) => {
                      form.setValue("image", url);
                    }}
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
