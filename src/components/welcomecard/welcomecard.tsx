import { MorphingText } from "@/components/magicui/morphing-text";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const WelcomeCard = () => {
  return (
    <div id={"welcome"} className="flex flex-col gap-5">
      <div className={"text-3xl text-left"}>
        Hello, I'm Sean &<br /> I make designs that are&nbsp;&nbsp;
        <MorphingText
          className={"inline text-5xl w-[100px]"}
          texts={["Creative.", "Interesting.", "Artistic.", "Fascinating."]}
        />
      </div>
      <p className="text-wrap w-[300px] text-(--subtext)">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        nostrum cumque nulla debitis eligendi, obcaecati recusandae assumenda
        quisquam accusantium esse ex velit quaerat pariatur excepturi autem
        molestiae accusamus deserunt tempore?
      </p>
      <InteractiveHoverButton className={"w-fit h-fit"}>
        Hit me up !
      </InteractiveHoverButton>
    </div>
  );
};

export default WelcomeCard;
