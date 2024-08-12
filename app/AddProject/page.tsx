"use client";
import { useContext, useState } from "react";
import ProjectCard from "@/components/server/ProjectCard";
import { ProjectContext } from "@/context/projectContext";
import { convertToBase64 } from "@/lib/convertToBase64";
import { jsonDataType } from "@/types";

const Page = () => {
  const [addProject, setAddProject] = useState<jsonDataType>({
    name: "",
    desc: "",
    type: "Frontend",
    tech: "",
    link: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [filePreview, setFilePreview] = useState<string | null>(null);

  const { addProjectLoading, projectAddedMsg, addProjectHandler } =
    useContext(ProjectContext)!;

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target?.files[0] as File;
      setSelectedFile(file);
      if (file) {
        const base64 = (await convertToBase64(file)) as string;
        setFilePreview(base64);
      }
      // setFilePreview(convertToBase64(URL.createObjectURL(file)));
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddProject((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className='col-span-9 bg-slate-800/20 rounded-2xl text-typography p-5 space-y-8 shadow-2xl '>
      <h1>Add Project</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProjectHandler(addProject, selectedFile!);
        }}
      >
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <div className='grid grid-cols-6 gap-3'>
            <div className='relative col-span-full space-y-4 md:col-span-4 lg:col-span-3'>
              <div className=''>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Project name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  autoComplete='name'
                  value={addProject?.name}
                  onChange={changeHandler}
                  className='mt-1 py-2 bg-slate-800/60 block w-full shadow-sm sm:text-sm outline-none px-3 rounded-md'
                />
              </div>

              <div className=''>
                <label
                  htmlFor='desc'
                  className='block text-sm font-medium text-gray-700'
                >
                  Description
                </label>
                <input
                  type='text'
                  name='desc'
                  id='desc'
                  value={addProject?.desc}
                  onChange={changeHandler}
                  autoComplete='desc'
                  className='mt-1 py-2 bg-slate-800/60 block w-full shadow-sm sm:text-sm outline-none px-3 rounded-md'
                />
              </div>

              <div className='pb-2'>
                <label
                  htmlFor='project_type'
                  className='block text-sm font-medium text-gray-700'
                >
                  Project Type
                </label>
                <select
                  id='project_type'
                  name='type'
                  value={addProject?.type}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setAddProject({ ...addProject, type: e.target.value });
                  }}
                  autoComplete='project_type'
                  className='mt-1 py-2 bg-slate-800/60 block w-full shadow-sm sm:text-sm outline-none px-3 rounded-md'
                >
                  <option>Frontend</option>
                  <option>MERN</option>
                </select>
              </div>
              <div className='pb-2'>
                <label
                  htmlFor='tech-stack'
                  className='block text-sm font-medium text-gray-700'
                >
                  Stack Used
                </label>
                <input
                  type='text'
                  name='tech'
                  id='tech-stack'
                  value={addProject?.tech}
                  onChange={changeHandler}
                  autoComplete='tech'
                  className='mt-1 py-2 bg-slate-800/60 block w-full shadow-sm sm:text-sm outline-none px-3 rounded-md'
                />
              </div>
              <div className='pb-2'>
                <label
                  htmlFor='link'
                  className='block text-sm font-medium text-gray-700'
                >
                Project Link
                </label>
                <input
                  type='text'
                  name='link'
                  id='link'
                  value={addProject?.link}
                  onChange={changeHandler}
                  autoComplete='link'
                  className='mt-1 py-2 bg-slate-800/60 block w-full shadow-sm sm:text-sm outline-none px-3 rounded-md'
                />
              </div>

              <div className='lg:col-span-2 bg-gray-700/30 rounded-md '>
                <div className='mt-1 sm:mt-0 sm:col-span-2'>
                  <div className='max-w-lg flex justify-center px-6 pt-5 pb-6 border-gray-300 border-dashed rounded-md'>
                    <div className='space-y-1 text-center'>
                      <svg
                        className='mx-auto h-12 w-12 text-gray-400'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 48 48'
                        aria-hidden='true'
                      >
                        <path
                          d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <div className='flex text-sm text-gray-600'>
                        <label
                          htmlFor='file-upload'
                          className='relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                        >
                          <span>Upload a file</span>
                          <input
                            id='file-upload'
                            name='file-upload'
                            type='file'
                            className='sr-only'
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className='pl-1'>or drag and drop</p>
                      </div>
                      <p className='text-xs text-gray-500'>
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-full flex justify-center items-center md:col-span-2 lg:col-span-3'>
              <ProjectCard
                name={addProject?.name}
                desc={addProject?.desc}
                tech={addProject?.tech}
                image_path={filePreview}
                type={addProject?.type}
                link={addProject?.link}
              />
            </div>
          </div>
        </div>
        <button
          type='submit'
          disabled={addProjectLoading}
          className='inline-flex mt-5 items-center px-4 py-2 border border-slate-600 text-base font-medium rounded-md text-typography focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          {addProjectLoading ? "Adding..." : "Add Project"}
        </button>
      </form>
      {projectAddedMsg && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(projectAddedMsg, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Page;
