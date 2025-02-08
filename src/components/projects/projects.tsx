import SingleProject from "./singleproject";

const porjects = [
  {
    name: "Das Tracks",
    description:
      "Connects riders over the world with track owners lets them see closest track to them, see opening hours and more.",
    githubLink: "https://github.com/frostn1",
    tags: ["express", "react", "typescript"],
    desktopImage: "dastrack-desktop.png",
    mobileImage: "",
  },
];

const Projects = () => {
  return (
    <div id={"projects"}>
      {/* <h1 className="text-3xl">Projects</h1> */}
      {porjects.map((_project) => (
        <SingleProject
          name={_project.name}
          description={_project.description}
          githubLink={_project.githubLink}
          tags={_project.tags}
          desktopImage={_project.desktopImage}
          mobileImage={_project.mobileImage}
        />
      ))}
    </div>
  );
};

export default Projects;
