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
    <DialogContent className="sm:max-w-[425px]">
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
            value="John Doe"
            className="col-span-3"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Label htmlFor="username" className="text-left">
            Description
          </Label>
          <Textarea
            onChange={(e) => setBody(e.target.value)}
            placeholder="Type your idea here."
          />
        </div>
      </div>
      <Button variant={"ghost"} className="align-right w-fit">
        <a href={`mailto:hello@seandahan.com?body=${body}`}>Email me</a>
      </Button>
    </DialogContent>
  );
};

export default ContactForm;
