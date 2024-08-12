// projectContext.ts
import { createContext } from "react";
import { authContextProps, ProjectsContextType } from "../types";

export const ProjectContext = createContext<ProjectsContextType | undefined>(
  undefined
);

export const AuthContext = createContext<authContextProps | undefined>(
  undefined
);
