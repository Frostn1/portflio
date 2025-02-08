import ContactForm from "../contactform/contactform";
import { AuroraText } from "../magicui/aurora-text";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { SparklesText } from "../magicui/sparkles-text";
import { WordRotate } from "../magicui/word-rotate";
import { Dialog, DialogTrigger } from "../ui/dialog";

const texts = [
  "FullStack Developer",
  "Athlete",
  "Backend Developer",
  "Coffee Junkey",
];
const WelcomeCard = () => {
  return (
    <div
      id={"welcome"}
      className="h-full flex flex-col justify-evenly items-center"
    >
      <div className="grid place-items-center gap-10">
        <div className="text-5xl">
          I make people's software ideas come to life.
        </div>
        <div className="text-(--sub-header) text-wrap w-sm">
          Using innovative design, clean and effecient code and vast technology
          stack.
          <br />I strive for perfection and create personal tailored branding to
          what you represent.
        </div>
      </div>

      <div className="grid place-items-center gap-5">
        <div className="z-10 text-3xl">Tell me about yours</div>
        <Dialog>
          <DialogTrigger asChild>
            <InteractiveHoverButton>Let's chat !</InteractiveHoverButton>
          </DialogTrigger>
          <ContactForm />
        </Dialog>
      </div>
    </div>
  );
};

export default WelcomeCard;
