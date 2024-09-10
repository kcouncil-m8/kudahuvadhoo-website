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
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingIndicator from "@/components/ui/loading-indicator";
import { updateMember } from "@/actions/memberActions";
import FileUpload from "../../components/FileUpload";
import { Switch } from "@/components/ui/switch";

export default function MembersFormEdit({ open, onClose, onSuccess, member }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(
      z.object({
        name: z.string().min(2, {
          message: "Full name must be at least 2 characters.",
        }),
        name_dv: z.string().min(2, {
          message: "Dhivehi name must be at least 2 characters.",
        }),
        level: z.string().min(1, {
          message: "Level is required.",
        }),
        title: z.string().min(1, {
          message: "Title is required.",
        }),
        title_dv: z.string().min(1, {
          message: "Dhivehi title is required.",
        }),
        about: z.string().optional(),
        image: z.string().optional(),
        isCouncilMember: z.boolean().optional(),
        isPresident: z.boolean().optional(),
        isSeniorManagementMember: z.boolean().optional(),
        isWomentDevelopmentCommittee: z.boolean().optional(),
      })
    ),
    defaultValues: {
      name: "",
      name_dv: "",
      level: "",
      about: "",
      image: "",
      title: "",
      title_dv: "",
      isCouncilMember: false,
      isPresident: false,
      isSeniorManagementMember: false,
      isWomentDevelopmentCommittee: false,
    },
  });

  useEffect(() => {
    member.name
      ? form.setValue("name", member.name)
      : form.setValue("name", "");
    member.name_dv
      ? form.setValue("name_dv", member.name_dv)
      : form.setValue("name_dv", "");
    member.title
      ? form.setValue("title", member.title)
      : form.setValue("title", "");
    member.title_dv
      ? form.setValue("title_dv", member.title_dv)
      : form.setValue("title_dv", "");
    member.level
      ? form.setValue("level", member.level)
      : form.setValue("level", "");
    member.about
      ? form.setValue("about", member.about)
      : form.setValue("about", "");
    member.image
      ? form.setValue("image", member.image)
      : form.setValue("image", "");
    member.isCouncilMember
      ? form.setValue("isCouncilMember", member.isCouncilMember)
      : form.setValue("isCouncilMember", false);
    member.isPresident
      ? form.setValue("isPresident", member.isPresident)
      : form.setValue("isPresident", false);
    member.isSeniorManagementMember
      ? form.setValue(
          "isSeniorManagementMember",
          member.isSeniorManagementMember
        )
      : form.setValue("isSeniorManagementMember", false);
  }, [member]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  async function onSubmit(values) {
    setIsLoading(true);
    const data = await updateMember({ ...values, id: member.id });
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
                <SheetTitle>Edit Member ({member.name})</SheetTitle>
                <SheetDescription>
                  Fill out the form below to edit the member details. Please
                  ensure all information is accurate and up-to-date. Your
                  changes will be saved once you submit the form.
                </SheetDescription>
              </SheetHeader>
              <div className="flex-1 space-y-4 py-6">
                <div>
                  <FileUpload
                    label="Image"
                    defaultValue={member.image}
                    onSuccess={(url) => {
                      form.setValue("image", url);
                    }}
                  />
                </div>
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
                        <FormLabel>Name (DV)</FormLabel>
                        <FormControl>
                          <Input
                            className="font-rasmee rtl"
                            placeholder="Enter name"
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
                        <FormLabel>Title (DV)</FormLabel>
                        <FormControl>
                          <Input
                            className="font-rasmee rtl"
                            placeholder="Enter title"
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
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Level</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter level" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About</FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Enter about"
                            {...field}
                            className="resize-none border rounded-md p-2 w-full"
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
                    name="isCouncilMember"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Council Member</FormLabel>
                          <FormDescription>
                            By turning this on, you are indicating that this
                            member is a council member.
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
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="isPresident"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>President</FormLabel>
                          <FormDescription>
                            By turning this on, you are indicating that this
                            member is the president.
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
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="isSeniorManagementMember"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Senior Management Member</FormLabel>
                          <FormDescription>
                            By turning this on, you are indicating that this
                            member is part of the senior management.
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
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="isWomentDevelopmentCommittee"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>
                            Women Development Committee Member
                          </FormLabel>
                          <FormDescription>
                            By turning this on, you are indicating that this
                            member is part of the women development committee.
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
