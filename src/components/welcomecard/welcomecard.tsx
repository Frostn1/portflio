import { MorphingText } from "../magicui/morphing-text";
import { SparklesText } from "../magicui/sparkles-text";
import { WordRotate } from "../magicui/word-rotate";

const texts = [
  "FullStack Developer",
  "Athlete",
  "Backend Developer",
  "Coffee Junkey",
];
const WelcomeCard = () => {
  return (
    <div id={"welcome"} className="h-full flex flex-col justify-evenly items-center">
      <div className="grid place-items-center">
        <div className="text-(--subtext)">I'm a</div>
        <div></div>
        <WordRotate
          className="relative mx-auto w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none [filter:url(#threshold)_blur(0.6px)]  lg:text-[6rem] h-[200px]"
          words={texts}
        />
        {/* <MorphingText
        className="h-[200px]"
        texts={texts}
      /> */}
      </div>
      <div className="grid place-items-center">
        <p className="text-wrap w-[300px] text-(--subtext)">
          I make people's ideas come to life.
        </p>
        <SparklesText text={"What about yours ?"} />
      </div>
    </div>
  );
};

export default WelcomeCard;
