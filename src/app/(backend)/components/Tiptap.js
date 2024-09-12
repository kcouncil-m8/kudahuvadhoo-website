"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import ToolBar from "./ToolBar";
import TextDirection from "tiptap-text-direction";
import Image from "@tiptap/extension-image";
import React from "react";
import ImagePasteExtension from "./ImagePasteExtension";

function Tiptap({ description, onChange }) {
  const editor = useEditor({
    extensions: [
      Image.configure({
        inline: true,
        HTMLAttributes: {
          class: "w-full h-auto",
        },
      }),
      StarterKit.configure({}),
      TextDirection.configure({
        types: ["heading", "paragraph"],
      }),
      ImagePasteExtension,
      // Heading.configure({
      //   HTMLAttributes: {
      //     class: "text-xl font-bold",
      //     levels: [2],
      //   },
      // }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[150px] border-input bg-background focus:ring-offset-2 disabled:cursor-not-allows disabled:opacity-50 p-2 prose lg:prose-lg font-rasmee rtl max-w-none",
      },
    },
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} className="focus:outline-none" />
    </div>
  );
}

export default Tiptap;
