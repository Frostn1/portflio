import About from "@/components/about/about";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Navbar from "@/components/navbar/navbar";
import WelcomeCard from "@/components/welcomecard/welcomecard";
import Page from "@/components/page/page";
import Projects from "@/components/projects/projects";

const pages = [
  {
    El: WelcomeCard,
    id: "home",
  },
  { El: Projects, id: "projects-page" },
  { El: About, id: "about-page" },
];

function App() {
  return (
    <div id={"app"} className={"h-full w-full "}>
      <ScrollProgress className="top-[60px]" />
      <Navbar />
      <div className={"h-screen no-scrollbar scroll-auto"}>
        {pages.map(({ El, id }) => (
          <Page id={id}>
            <El />
          </Page>
        ))}
      </div>
    </div>
  );
}

export default App;
