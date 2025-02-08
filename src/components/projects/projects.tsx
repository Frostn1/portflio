import SingleProject from "./singleproject";

const porjects = [
  {
    name: "Das Tracks",
    description:
      "Connects riders over the world with track owners lets them see closest track to them, see opening hours and more.",
    githubLink: "https://github.com/frostn1",
    websiteLink: "das-track.web.app",
    tags: ["express", "react", "typescript"],
    desktopImage: "dastrack-desktop.png",
    mobileImage: "dastrack-mobile.jpg",
  },
];

const Projects = () => {
  return (
    <div id={"projects"}>
      <h1 className="text-3xl w-fit flex flex-col gap-1">My Projects</h1>
      {porjects.map((_project) => (
        <SingleProject
          name={_project.name}
          description={_project.description}
          githubLink={_project.githubLink}
          tags={_project.tags}
          desktopImage={_project.desktopImage}
          mobileImage={_project.mobileImage}
          websiteLink={_project.websiteLink}
        />
      ))}
    </div>
  );
};

export default Projects;
