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
import ServiceFormCreate from "./form-create";
import ServiceFormEdit from "./form-edit";
import { deleteService, getServices } from "@/actions/serviceActions";

export default function ServiceIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState();
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    setSelectedService();
    const data = await getServices();
    setServices(data.services);
    setIsLoading(false);
  };

  const onDelete = async (id) => {
    setIsLoading(true);
    await deleteService(id);
    getData();
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Services</h1>
        <div className="ml-auto gap-1.5 text-sm">
          <ServiceFormCreate
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            onSuccess={() => {
              getData();
            }}
          />
          <ServiceFormEdit
            service={selectedService ? selectedService : {}}
            open={selectedService ? true : false}
            onClose={() => {
              setSelectedService();
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
          <div className="flex w-full border-[#e2e8f0] border rounded-lg overflow-hidden">
            <Table className="overflow-x-scroll">
              <TableHeader>
                <TableRow className="bg-white">
                  <TableHead className="px-4">
                    <div className="relative">
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <div className="absolute -bottom-[3px] left-[3px] w-2 h-2 bg-gray-300 rounded-full" />
                    </div>
                  </TableHead>
                  <TableHead className="px-4">#</TableHead>
                  <TableHead className="px-4">Title</TableHead>
                  <TableHead className="text-right px-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services &&
                  services.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell className="px-4 w-[10px]">
                        <div className="flex justify-center items-center">
                          {service.isPublished ? (
                            <div className="w-2 h-2 bg-black rounded-full" />
                          ) : (
                            <div className="w-2 h-2 bg-gray-300 rounded-full" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="px-4">
                        {service.id.toString()}
                      </TableCell>
                      <TableCell className="px-4">{service.title}</TableCell>
                      <TableCell className="text-right px-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <div className="text-right flex justify-end">
                              <DotsVerticalIcon className="h-4 w-4" />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => setSelectedService(service)}
                            >
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => setSelectedService(service)}
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <button
                                onClick={() => onDelete(service.id.toString())}
                              >
                                Delete
                              </button>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
}
