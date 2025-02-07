import React from "react";

interface PageProps {
  children: React.ReactNode;
  id: string;
}

const Page: React.FC<PageProps> = ({ children, id }) => {
  return (
    <div
      id={id}
      className={
        "relative h-[calc(100%-60px)] flex flex-col gap-10 place-items-left box-border p-30"
      }
    >
      {children}
    </div>
  );
};

export default Page;
