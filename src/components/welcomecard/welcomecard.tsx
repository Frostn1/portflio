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
    <div
      id={"welcome"}
      className="h-full flex flex-col justify-evenly items-center"
    >
      <div className="grid place-items-center">
        <div className="text-(--subtext)">I'm a</div>
        <WordRotate
          className="relative mx-auto w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none lg:text-[6rem] h-[200px]"
          words={texts}
        />
        {/* <MorphingText
        className=""
        texts={texts}
      /> */}
      </div>
      <div className="grid place-items-center">
        <p className="text-wrap w-[300px] text-(--subtext)">
          I make people's software ideas come to life.
        </p>
        <SparklesText className="z-10" text={"What about yours ?"} />
      </div>
    </div>
  );
};

export default WelcomeCard;
