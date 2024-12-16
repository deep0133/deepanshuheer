"use client";
import ProjectCard from "@/components/server/ProjectCard";
import { AuthContext, ProjectContext } from "@/context/projectContext";
import { useContext } from "react";

export default function Page() {
  const { loading, projects } = useContext(ProjectContext)!;
  const { user } = useContext(AuthContext)!;

  return (
    <div className='col-span-9 @container bg-slate-800/20 rounded-2xl text-typography p-3 space-y-8 shadow-2xl '>
      <div>
        <div className=' mb-5'>
          <h2 className='text-2xl font-semibold'>Projects</h2>
          <div className='h-1 w-16 mt-2 rounded-full bg-gradient-to-l from-typography to-buttons'></div>
        </div>
      </div>

      <div className='project-card-container grid @md:grid-cols-2 @xl:grid-cols-3 gap-5'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          projects &&
          Object.entries(projects)?.flatMap(([category, items]) =>
            Object.entries(items)?.map(([id, item]) => (
              <ProjectCard
                key={id}
                name={item?.name}
                desc={item?.desc}
                image_path={item?.image_path}
                tech={item?.tech}
                type={category}
                link={item?.projectLink}
              />
            ))
          )
        )}
      </div>
    </div>
  );
}
