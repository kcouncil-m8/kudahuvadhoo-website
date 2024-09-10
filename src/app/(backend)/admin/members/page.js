"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import LoadingIndicator from "@/components/ui/loading-indicator";
import MembersFormCreate from "./form-create";
import MembersFormEdit from "./form-edit";
import { deleteMember, getMembers } from "@/actions/memberActions";

export default function MembersIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState();
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    setSelectedMember();
    const data = await getMembers();
    setMembers(data.members);
    setIsLoading(false);
  };

  const onDelete = async (id) => {
    setIsLoading(true);
    await deleteMember(id);
    getData();
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Members</h1>
        <div className="ml-auto gap-1.5 text-sm">
          <MembersFormCreate
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            onSuccess={() => {
              getData();
            }}
          />
          <MembersFormEdit
            member={selectedMember ? selectedMember : {}}
            open={selectedMember ? true : false}
            onClose={() => {
              setSelectedMember();
            }}
            onSuccess={() => {
              getData();
            }}
          />
        </div>
      </div>
      <main className="flex p-4">
        {isLoading ? (
          <div className="w-full flex justify-center items-center py-12">
            <LoadingIndicator />
          </div>
        ) : (
          <div className="flex w-full border-stone-200 border rounded-lg overflow-hidden">
            <Table className="overflow-x-scroll">
              <TableHeader>
                <TableRow className="bg-white">
                  <TableHead className="px-4">#</TableHead>
                  <TableHead className="px-4">Name</TableHead>
                  <TableHead className="px-4">title</TableHead>
                  <TableHead className="px-4">Level</TableHead>
                  <TableHead className="text-right px-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members &&
                  members.map((member, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="px-4">
                          {member.id.toString()}
                        </TableCell>
                        <TableCell className="px-4">{member.name}</TableCell>
                        <TableCell className="px-4">{member.title}</TableCell>
                        <TableCell className="px-4">{member.level}</TableCell>
                        <TableCell className="text-right px-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <div className="text-right flex justify-end">
                                <DotsVerticalIcon className="h-4 w-4" />
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => {
                                  setSelectedMember(member);
                                }}
                              >
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => {
                                  setSelectedMember(member);
                                }}
                              >
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <button
                                  onClick={() => {
                                    if (
                                      confirm(
                                        "Are you sure you want to delete this member?"
                                      )
                                    ) {
                                      onDelete(member.id.toString());
                                    }
                                  }}
                                >
                                  Delete
                                </button>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
}
