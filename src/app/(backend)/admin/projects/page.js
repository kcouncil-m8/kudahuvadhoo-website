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
import ProjectsFormCreate from "./form-create";
import ProjectsFormEdit from "./form-edit";
import { deleteProject, getProjects } from "@/actions/projectActions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProjectsIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getData(keyword);
  }, []);

  const getData = async (keyword) => {
    setIsLoading(true);
    setSelectedProject();
    const data = await getProjects(keyword);
    setProjects(data.projects);
    setIsLoading(false);
  };

  const onDelete = async (id) => {
    setIsLoading(true);
    await deleteProject(id);
    getData(keyword);
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Projects</h1>
        <div className="ml-auto gap-1.5 text-sm">
          <ProjectsFormCreate
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            onSuccess={() => {
              getData(keyword);
            }}
          />
          <ProjectsFormEdit
            project={selectedProject ? selectedProject : {}}
            open={selectedProject ? true : false}
            onClose={() => {
              setSelectedProject();
            }}
            onSuccess={() => {
              getData(keyword);
            }}
          />
        </div>
      </div>
      <div className="flex w-full justify-between pt-4 px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getData(keyword);
          }}
          className="flex w-full items-center justify-between gap-2 mb-4"
        >
          <Input
            type="text"
            placeholder="Enter project name to search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="px-4 py-2 border rounded-md"
          />
          <Button type="submit" className="px-4 py-2 text-white rounded-md">
            Search
          </Button>
        </form>
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
                  <TableHead className="px-4">#</TableHead>
                  <TableHead className="px-4">Name</TableHead>
                  <TableHead className="px-4">Company</TableHead>
                  <TableHead className="px-4">Price</TableHead>
                  <TableHead className="px-4">Duration</TableHead>
                  <TableHead className="px-4">Percentage</TableHead>
                  <TableHead className="text-right px-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects &&
                  projects.map((project, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="px-4">
                          {project.id.toString()}
                        </TableCell>
                        <TableCell className="px-4">{project.name}</TableCell>
                        <TableCell className="px-4">
                          {project.company}
                        </TableCell>
                        <TableCell className="px-4">{project.price}</TableCell>
                        <TableCell className="px-4 font-rasmee whitespace-nowrap rtl text-left">
                          {project.duration}
                        </TableCell>
                        <TableCell className="px-4 text-left">
                          {project.percentage}%
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
                                  setSelectedProject(project);
                                }}
                              >
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => {
                                  setSelectedProject(project);
                                }}
                              >
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <button
                                  onClick={() => {
                                    onDelete(project.id.toString());
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
