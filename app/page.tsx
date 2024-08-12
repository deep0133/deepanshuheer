"use client";
import AboutCard from "@/components/server/AboutCard";
import { useContext, useEffect } from "react";
import { AuthContext, ProjectContext } from "@/context/projectContext";

export default function Page() {
  const { getProjectHandler, projectAddedMsg } = useContext(ProjectContext)!;
  const { fetchUserProfile, user } = useContext(AuthContext)!;

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    getProjectHandler();
    if (uid || user) {
      // @ts-ignore
      fetchUserProfile("uid");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectAddedMsg, user]);

  return <AboutCard />;
}
