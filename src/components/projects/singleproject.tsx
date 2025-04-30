import React from "react";
import { Safari } from "../magicui/safari";
import { Button } from "../ui/button";
import Iphone15Pro from "../magicui/iphone-15-pro";

interface SingleProjectProps {
  name: string;
  description: string;
  githubLink?: string;
  tags: string[];
  desktopImage: string;
  mobileImage?: string;
  websiteLink?: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({
  name,
  description,
  githubLink,
  tags,
  desktopImage,
  mobileImage,
  websiteLink,
}) => {
  return (
    <div className="gap-5 grid lg:grid-cols-2">
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-row items-baseline gap-3">
          <span className="text-2xl bold">{name}</span>
          {githubLink ? (
            <Button variant="link" className="text-(--subtext) p-0 h-fit">
              <a href={githubLink} rel="noreferrer" target="_blank">
                GitHub
              </a>
            </Button>
          ) : null}
          {websiteLink ? (
            <Button variant="link" className="text-(--subtext) p-0 h-fit">
              <a href={websiteLink} rel="noreferrer" target="_blank">
                Site
              </a>
            </Button>
          ) : null}
        </div>
        <div className="text-wrap text-(--sub-header)  md:w-md">
          {description}
        </div>
        <div className="flex flex-row gap-3">
          {tags.map((tag) => (
            <div className={"border rounded-3xl text-sm p-1 pl-3 pr-3 "}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-[150px] xs:h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-fit bg-red-100">
        <Safari
          mode="simple"
          url={websiteLink}
          imageSrc={desktopImage}
          className="bottom-0 h-[100%] left-0 w-fit absolute"
        />
        {mobileImage ? (
          <Iphone15Pro
            className="absolute h-[75%] md:h-[50%] w-fit left-0 bottom-0"
            src={mobileImage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SingleProject;
