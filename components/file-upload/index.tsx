// components/FileUpload.js

import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ setValue }) => {
  const [previews, setPreviews] = useState([]);
  const [fileError, setFileError] = useState(null);
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setValue("file", acceptedFiles[0]);
      setFileError(null);
      const previews = acceptedFiles.map((file) => URL.createObjectURL(file));
      setPreviews(previews);
    }
  };
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [],
      },
      multiple: false,
      maxSize: 5 * 1024 * 1024,
    });

  // Cleanup object URLs when component unmounts
  React.useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);
  return (
    <>
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center w-full border-2 border-gray-300 
            ${isDragAccept ? "border-green-300" : ""}
         ${isDragReject ? "border-red-300" : ""}
         transition-all border-dashed rounded-lg p-4 cursor-pointer bg-gray-50 hover:bg-gray-200`}
      >
        {previews.length == 0 && (
          <>
            <svg
              className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF
            </p>
          </>
        )}

        {previews.map((preview, index) => (
          <img
            key={index}
            src={preview}
            alt={`Preview ${index}`}
            className="w-[100px] h-[100px] m-1 rounded-lg border-2 border-gray-200"
          />
        ))}

        {fileError && <p>{fileError}</p>}
        <input {...getInputProps()} />
      </div>
    </>
  );
};

export default FileUpload;
