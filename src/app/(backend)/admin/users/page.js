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
import { DotsVerticalIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { getUsers } from "@/actions/userActions";
import UsersFormEdit from "./form-edit";
import UsersFormCreate from "./form-create";
import { set } from "zod";
import LoadingIndicator from "@/components/ui/loading-indicator";
import UsersUpdatePasswordForm from "./update-password";

export default function UsersIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSeletedUser] = useState();
  const [selectedUserPassword, setSeletedUserPassword] = useState();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    setSeletedUser();
    setSeletedUserPassword();
    const data = await getUsers();
    setUsers(data.users);
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Users</h1>
        <div className="ml-auto gap-1.5 text-sm">
          <UsersFormCreate
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            onSuccess={() => {
              getData();
            }}
          />
          <UsersFormEdit
            user={selectedUser ? selectedUser : {}}
            open={selectedUser ? true : false}
            onClose={() => {
              setSeletedUser();
            }}
            onSuccess={() => {
              getData();
            }}
          />
          <UsersUpdatePasswordForm
            user={selectedUserPassword ? selectedUserPassword : {}}
            open={selectedUserPassword ? true : false}
            onClose={() => {
              setSeletedUserPassword();
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
          <div className="flex w-full border-[#e2e8f0] border-[] border rounded-lg overflow-hidden">
            <Table className="overflow-x-scroll">
              <TableHeader>
                <TableRow className="bg-white">
                  <TableHead className="px-4">Name</TableHead>
                  <TableHead className="px-4">Email</TableHead>
                  <TableHead className="text-right px-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users &&
                  users.map((user, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="px-4">{user.name}</TableCell>
                        <TableCell className="px-4">{user.email}</TableCell>
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
                                  setSeletedUser(user);
                                }}
                              >
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => {
                                  setSeletedUser(user);
                                }}
                              >
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => {
                                  setSeletedUserPassword(user);
                                }}
                              >
                                Update Password
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                Delete
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
