import { MorphingText } from "@/components/magicui/morphing-text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";

const WelcomeCard = () => {
  return (
    <div className={"w-full relative h-full grid justify-center"}>
      <p className={"text-3xl mt-50 text-center"}>
        Hello, I'm Sean &<br /> I make websites that are&nbsp;
        <MorphingText
          className={"inline text-5xl"}
          texts={["Creative.", "Interesting.", "Artistic."]}
        />
      </p>
    </div>
  );
};

export default WelcomeCard;
