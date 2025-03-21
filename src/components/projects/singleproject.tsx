import React from "react";
import { Safari } from "../magicui/safari";
import { Button } from "../ui/button";
import Iphone15Pro from "../magicui/iphone-15-pro";

interface SingleProjectProps {
  name: string;
  description: string;
  githubLink: string;
  tags: string[];
  desktopImage: string;
  mobileImage: string;
  websiteLink: string;
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
    <div className="flex flex-col gap-5 md:grid grid-cols-2">
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
      <div className="relative">
        <Safari
          mode="simple"
          url={websiteLink}
          imageSrc={desktopImage}
          className="size-full"
        />
        {mobileImage ? (
          <Iphone15Pro
            className="w-20 top-[-1.5%] md:w-40 md:top-[29%] absolute h-fit "
            src={mobileImage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SingleProject;
