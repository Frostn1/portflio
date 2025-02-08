import ContactForm from "../contactform/contactform";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Dialog, DialogTrigger } from "../ui/dialog";

const WelcomeCard = () => {
  return (
    <div
      id={"welcome"}
      className="h-full flex flex-col justify-evenly items-center"
    >
      <div className="grid place-items-center gap-10 text-center">
        <div className="text-5xl">
          I make people's software ideas come to life.
        </div>
        <div className="text-(--sub-header) text-wrap md:w-sm text-left">
          Using innovative design, clean and efficient code and a vast
          technology stack, I strive for perfection and create personal tailored
          branding to what you represent.
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
9;

export default WelcomeCard;
