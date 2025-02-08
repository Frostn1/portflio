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
  {
    name: "Shahar Dahan",
    description:
      "Landging page for training coach. Displays services socials and quick contact info.",
    githubLink: "https://github.com/Frostn1/shahardahan-portflio",
    websiteLink: "shahardahan.com",
    tags: ["tailwind", "react", "typescript"],
    desktopImage: "shahar-desktop.png",
    mobileImage: "shahar-mobile.png",
  },
];

const Projects = () => {
  return (
    <div id={"projects"}>
      <h1 className="text-3xl w-fit">My Projects</h1>
      <div className="flex flex-col gap-20">
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
    </div>
  );
};

export default Projects;
