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
import DocumentsFormCreate from "./form-create";
import DocumentsFormEdit from "./form-edit";
import { deleteDocument, getDocuments } from "@/actions/documentActions";

export default function DocumentsIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState();
  const [documents, setDocuments] = useState([]);
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    setSelectedDocument();
    const data = await getDocuments();
    setDocuments(data.documents);
    setTypes(data.types);
    setIsLoading(false);
  };

  const onDelete = async (id) => {
    setIsLoading(true);
    await deleteDocument(id);
    getData();
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Documents</h1>
        <div className="ml-auto gap-1.5 text-sm">
          <DocumentsFormCreate
            types={types}
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            onSuccess={() => {
              getData();
            }}
          />
          <DocumentsFormEdit
            types={types}
            document={selectedDocument ? selectedDocument : {}}
            open={selectedDocument ? true : false}
            onClose={() => {
              setSelectedDocument();
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
                  <TableHead className="px-4">Number</TableHead>
                  <TableHead className="px-4">Name</TableHead>
                  <TableHead className="px-4">Type</TableHead>
                  <TableHead className="px-4">Open Date</TableHead>
                  <TableHead className="px-4">Deadline</TableHead>
                  <TableHead className="text-right px-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents &&
                  documents.map((document, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="px-4">
                          {document.id.toString()}
                        </TableCell>
                        <TableCell className="px-4">
                          {document.number ?? "N/A"}
                        </TableCell>
                        <TableCell className="px-4">{document.name}</TableCell>
                        <TableCell className="px-4">
                          {document.type ? document.type.name : "N/A"}
                        </TableCell>
                        <TableCell className="px-4">
                          {document.date_open
                            ? new Date(document.date_open).toLocaleDateString()
                            : "N/A"}
                        </TableCell>
                        <TableCell className="px-4">
                          {document.date_expiry
                            ? new Date(
                                document.date_expiry
                              ).toLocaleDateString()
                            : "N/A"}
                        </TableCell>
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
                                  setSelectedDocument(document);
                                }}
                              >
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => {
                                  setSelectedDocument(document);
                                }}
                              >
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <button
                                  onClick={() => {
                                    if (
                                      confirm(
                                        "Are you sure you want to delete this document?"
                                      )
                                    ) {
                                      onDelete(document.id.toString());
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
