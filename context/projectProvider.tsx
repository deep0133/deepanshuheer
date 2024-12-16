"use client";
import axios from "axios";
import { useState } from "react";
import { ProjectCardProps, ProjectsProviderProps, jsonDataType } from "../types";
import { ProjectContext } from "./projectContext";

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({
  children,
}) => {
  const [projects, setProjects] = useState<ProjectCardProps[] |null>([]);
  const [loading, setLoading] = useState(true);

  const [addProjectLoading, setAddProjectLoading] = useState<boolean>(false);
  const [projectAddedMsg, setProjectAddedMsg] = useState<boolean>(false);

  const getProjectHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/project");
      setProjects(data?.data);
      console.log('-------data--------:',data.data)
    } catch (error: any) {
      console.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const addProjectHandler = async (
    addProject: jsonDataType,
    selectedFile: File
  ) => {
    try {
      let formData = new FormData();
      if (selectedFile) {
        formData.append("file", selectedFile);
      }
      formData.append("name", addProject?.name);
      formData.append("desc", addProject?.desc);
      formData.append("type", addProject?.type);
      formData.append("tech", addProject?.tech);
      formData.append("link", String(addProject?.link))

      await axios.post("/api/project", formData, {
        headers: {
          "Content-Type": "multipart/form-formData",
        },
      });
      setProjectAddedMsg(!projectAddedMsg);
    } catch (error) {
      console.error("Error adding project:", error);
    } finally {
      setAddProjectLoading(false);
    }
  };

  const deleteProjectHandler = async (projectId:string) => {
    try {
      setAddProjectLoading(true)
      await axios.delete("/api/project");
      setProjectAddedMsg(!projectAddedMsg);
    } catch (error) {
      console.error("Error adding project:", error);
    } finally {
      setAddProjectLoading(false);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        getProjectHandler,
        addProjectLoading,
        projectAddedMsg,
        addProjectHandler,
        deleteProjectHandler
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
