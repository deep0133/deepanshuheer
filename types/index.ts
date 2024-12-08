import { User } from "firebase/auth";
import React, { ReactNode } from "react";

export type authContextProps = {
  user: User | null | userTypes;
  setUser: React.Dispatch<User | null>;
  signIn: (email: string, password: string) => void;
  loading: boolean;
  error: string | null;
  fetchUserProfile: () => void;
};

export type ProjectsContextType = {
  projects: ProjectCardProps[] | null;
  loading: boolean;
  getProjectHandler: () => void;
  addProjectLoading: boolean;
  projectAddedMsg: boolean;
  addProjectHandler: (addProject: jsonDataType, selectedFile: File) => void;
  deleteProjectHandler: (projectId: string) => void;
};

export type ProjectCardProps = {
  project: jsonDataType;
};
export type jsonDataType = {
  [key: string]: any;
  name: string;
  desc: string;
  type: string;
  tech: string;
  link: string | undefined;
};

export type ProjectsProviderProps = {
  children: ReactNode;
};

export type userTypes = {
  name: string;
  email: string;
  password: string;
};

export type ContactInputTypes = {
  name: string;
  email: string;
  message: string;
};

export type CardProps = {
  courseName: string;
  schoolName: string;
  outOf: string;
  marksObtained: string;
};
