import About from "@/components/about/about";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Navbar from "@/components/navbar/navbar";
import WelcomeCard from "@/components/welcomecard/welcomecard";
import Page from "@/components/page/page";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";
import { BlurFade } from "./components/magicui/blur-fade";
import { DotPattern } from "./components/magicui/dot-pattern";

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
      <DotPattern className="fixed" glow={false}/>

      <div className={"h-screen no-scrollbar scroll-auto"}>
        {pages.map(({ El, id }, idx) => (
          <Page id={id}>
            <BlurFade
              className="relative h-[calc(100%-60px)]"
              key={id}
              delay={0.25 + idx * 0.05}
              inView
            >
              <El />
            </BlurFade>
          </Page>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default App;
