import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Navbar from "@/components/navbar/navbar";
import WelcomeCard from "@/components/welcomecard/welcomecard";
function App() {
  return (
    <div className={"h-screen w-screen"}>
      <ScrollProgress className="top-[60px]" />
      <Navbar />
      <WelcomeCard/>
    </div>
  );
}

export default App;
