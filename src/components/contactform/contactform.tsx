import { useState } from "react";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  return (
    <DialogContent className="sm:max-w-[300px] md:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Let's work together !</DialogTitle>
        <DialogDescription>
          I would love to hear about your idea.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <Label htmlFor="name" className="text-left">
            Name
          </Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="John Doe"
            value={name}
            className="col-span-3"
            required
          />
        </div>
        <div className="flex flex-col gap-5">
          <Label htmlFor="username" className="text-left">
            Description
          </Label>
          <Textarea
            required
            id="idea-text"
            onChange={(e) => setBody(e.target.value)}
            placeholder="What is your next big idea ?"
          />
        </div>
      </div>
      <Button variant={"default"} className="align-right w-fit">
        <a href={`mailto:hello@seandahan.com?subject=${name}&body=${body}`}>
          Email me
        </a>
      </Button>
    </DialogContent>
  );
};

export default ContactForm;
