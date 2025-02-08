import React from "react";
import { Safari } from "../magicui/safari";
import { Button } from "../ui/button";

interface SingleProjectProps {
  name: string;
  description: string;
  githubLink: string;
  tags: string[];
  desktopImage: string;
  mobileImage: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({
  name,
  description,
  githubLink,
  tags,
  desktopImage,
  mobileImage: _mobileImage,
}) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-row items-baseline gap-3">
          <span className="text-2xl bold">{name}</span>
          <Button variant="link" className="text-(--subtext) p-0 h-fit">
            <a href={githubLink} rel="noreferrer" target="_blank">
              GitHub
            </a>
          </Button>
        </div>
        <div className="text-wrap text-(--subtext) w-md">{description}</div>
        <div className="flex flex-row gap-3">
          {tags.map((tag) => (
            <div className={"border rounded-3xl text-sm p-1 pl-3 pr-3 "}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Safari
          mode="simple"
          url="das-track.web.app"
          imageSrc={desktopImage}
          className="size-full"
        />
        {/* <Iphone15Pro className="size-full" /> */}
      </div>
    </div>
  );
};

export default SingleProject;
