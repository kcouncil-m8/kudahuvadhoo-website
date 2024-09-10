"use client";

import LoadingIndicator from "@/components/ui/loading-indicator";
import Link from "next/link";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FileUpload({ onSuccess, defaultValue, label }) {
  const [fileUrl, setFileUrl] = React.useState(defaultValue);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (defaultValue) {
      setFileUrl(defaultValue);
    }
  });

  const uploadFile = async (file) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file-input", file);
    try {
      const response = await fetch("/admin/api/upload-file", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.message === "success") {
        setFileUrl(result.fileUrl); // Assuming the response contains the file URL
        onSuccess(result.fileUrl);
      } else {
        console.error("File upload failed");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error uploading file:", error);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    uploadFile(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      {label && (
        <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </p>
      )}
      <div className="cursor-pointer" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="border-2 border-dashed rounded-xl p-6 mt-4">
            <p className="text-sm text-center opacity-60">
              Drop the files here ...
            </p>
          </div>
        ) : (
          <div className="border-2 border-dashed rounded-xl p-6 mt-4">
            <p className="text-sm text-center opacity-60">
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>
        )}
      </div>
      {isLoading && (
        <div className="w-full">
          <div className="w-full flex justify-center items-center py-12">
            <LoadingIndicator />
          </div>
        </div>
      )}
      {fileUrl ? (
        fileUrl.endsWith(".jpg") ||
        fileUrl.endsWith(".jpeg") ||
        fileUrl.endsWith(".png") ||
        fileUrl.endsWith(".gif") ||
        fileUrl.endsWith(".bmp") ||
        fileUrl.endsWith(".svg") ? (
          <div className="h-[200px] lg:h-[250px] overflow-hidden flex justify-center items-center mt-6 rounded-xl">
            <Link href={fileUrl} target="_blank" className="w-full">
              <img
                className="rounded-xl w-full"
                src={fileUrl}
                alt="Uploaded File"
              />
            </Link>
          </div>
        ) : (
          <>
            {fileUrl && (
              <Link
                href={fileUrl}
                download
                className="mt-2 text-black flex justify-center items-center h-[40px] text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                Download File
              </Link>
            )}
          </>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default FileUpload;
