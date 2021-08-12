import React, { useCallback, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPostAction,
  openModalAction,
} from "../../redux/actions/ProjectAction";
import { useDropzone } from "react-dropzone";

function Modal() {
  const { modalIsOpen } = useSelector((state) => state.ProjectReducer);
  const [data, setData] = useState({
    title: "",
    author: "",
    content: "",
    attachment: "",
  });
  const dispatch = useDispatch();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onDrop = async (acceptedFiles) => {
    setData({ ...data, attachment: await toBase64(acceptedFiles[0]) });
  };
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({ onDrop, maxFiles: 1, maxSize: 10485760 });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <p key={file.path}>
      {file.path} - {(file.size / (1024 * 1024)).toFixed(2)}MB
    </p>
  ));

  const dragChecker = () => {
    if (isDragActive) {
      return <p className="text-center">Drop here</p>;
    } else if (acceptedFiles.length !== 0) {
      return acceptedFileItems;
    } else {
      return (
        <>
          <span className="font-medium text-indigo-600 hover:text-indigo-500">
            Upload a file
          </span>
          <p class="pl-1">or drag and drop</p>
        </>
      );
    }
  };

  const modalHanlder = () => {
    dispatch(openModalAction(false));
  };
  return (
    <>
      <Transition appear show={modalIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={modalHanlder}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Your Story
                </Dialog.Title>

                <div className="mt-2">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Title
                    </label>
                    <input
                      onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                      }
                      type="text"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Author
                    </label>
                    <input
                      onChange={(e) =>
                        setData({ ...data, author: e.target.value })
                      }
                      type="text"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="about" className="block mb-2 text-sm">
                    Content
                  </label>
                  <div className="mt-1">
                    <textarea
                      onChange={(e) =>
                        setData({ ...data, content: e.target.value })
                      }
                      id="about"
                      name="about"
                      rows={3}
                      className="shadow-sm pl-2 pt-1 mt-1 block w-full border border-gray-300 rounded-md"
                      placeholder="you@example.com"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>
                  <div
                    {...getRootProps()}
                    className="mt-1 cursor-pointer flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                  >
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600">
                        <input
                          {...getInputProps()}
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                        {dragChecker()}
                      </div>
                      {acceptedFiles.length !== 0 ? null : (
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => {
                      dispatch(createPostAction(data));
                      modalHanlder();
                    }}
                  >
                    Post
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ml-4"
                    onClick={() => {
                      modalHanlder();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
