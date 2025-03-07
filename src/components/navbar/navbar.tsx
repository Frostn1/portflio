import GithubLogo from "@/assets/github.svg?react";
import LinkedinLogo from "@/assets/linkedin.svg?react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const links = [
  {
    url: "https://github.com/Frostn1",
    logo: GithubLogo,
    text: "Checkout my GitHub!",
  },
  {
    url: "https://linkedin.com/in/sean-dahan-4aa48b20b",
    logo: LinkedinLogo,
    text: "Let's Chat!",
  },
];

const navs = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Projects",
    id: "projects-page",
  },
  {
    name: "About",
    id: "about-page",
  },
];

const Navbar = () => {
  function handleScroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div
      className={
        "fixed z-20 top-0 flex w-full h-[60px] items-center justify-between box-border pr-10 pl-10 bg-background"
      }
    >
      <p
        className={
          "font-bold text-3xl font-[AuroRumpthut] w-fit hidden md:grid"
        }
      >
        Sean Dahan
      </p>
      <p className={"font-bold text-3xl font-[AuroRumpthut] w-fit md:hidden"}>
        S D
      </p>
      <div className="flex h-5 items-center md:space-x-4 text-xs md:text-sm">
        <div>
          {navs.map(({ name, id }) => (
            <Button onClick={() => handleScroll(id)} variant={"link"}>
              <p>{name}</p>
            </Button>
          ))}
        </div>
        <Separator className="hidden md:grid" orientation="vertical" />
        <div className="hidden md:flex">
          {links.map(({ url, logo: Logo }) => (
            <Button asChild variant={"link"}>
              <a target="_blank" rel="noreferrer" href={url}>
                {<Logo className={"h-5"} />}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
