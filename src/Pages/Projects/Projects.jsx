import ProjectCard from "../../Components/Project/ProjectCard";
import Header from "../../Components/Shared/Header/Header";
import { projectItem } from "../../Utils/projectItem";

const Projects = () => {
  return (
    <div className="">
      <Header text1={"My"} text2={"Works"} />
      <div className="flex flex-col justify-center items-center gap-10 w-full">
        {projectItem?.slice(0, 3).map((item) => (
          <ProjectCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
