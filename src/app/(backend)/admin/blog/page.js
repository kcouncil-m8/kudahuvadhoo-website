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
import BlogFormCreate from "./form-create";
import BlogFormEdit from "./form-edit";
import { deleteBlog, getBlogs } from "@/actions/blogActions";

export default function BlogIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState();
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    setSelectedBlog();
    const data = await getBlogs();
    setBlogs(data.blogs);
    setCategories(data.categories);
    setIsLoading(false);
  };

  const onDelete = async (id) => {
    setIsLoading(true);
    await deleteBlog(id);
    getData();
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Blog Posts</h1>
        <div className="ml-auto gap-1.5 text-sm">
          <BlogFormCreate
            categories={categories}
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            onSuccess={() => {
              getData();
            }}
          />
          <BlogFormEdit
            categories={categories}
            blog={selectedBlog ? selectedBlog : {}}
            open={selectedBlog ? true : false}
            onClose={() => {
              setSelectedBlog();
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
              <TableHeader className="font-bold">
                <TableRow className="bg-white">
                  <TableHead className="px-4">
                    <div className="relative">
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <div className="absolute -bottom-[3px] left-[3px] w-2 h-2 bg-gray-300 rounded-full" />
                    </div>
                  </TableHead>
                  <TableHead className="px-4">#</TableHead>
                  <TableHead className="px-4">Title</TableHead>
                  <TableHead className="px-4">Latin Title</TableHead>
                  <TableHead className="px-4">Category</TableHead>
                  <TableHead className="text-right px-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs &&
                  blogs.map((blog) => (
                    <TableRow key={blog.id}>
                      <TableCell className="px-4 w-[10px]">
                        <div className="flex justify-center items-center">
                          {blog.isPublished ? (
                            <div className="w-2 h-2 bg-black rounded-full" />
                          ) : (
                            <div className="w-2 h-2 bg-gray-300 rounded-full" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="px-4">
                        {blog.id.toString()}
                      </TableCell>
                      <TableCell className="px-4">{blog.title}</TableCell>
                      <TableCell className="px-4">{blog.latin}</TableCell>
                      <TableCell className="px-4">
                        {blog.category ? blog.category.name : "N/A"}
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
                              onClick={() => setSelectedBlog(blog)}
                            >
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => setSelectedBlog(blog)}
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <button
                                onClick={() => onDelete(blog.id.toString())}
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
