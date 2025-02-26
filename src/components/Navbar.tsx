import { ListChecks, ListTodo } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BorderedDiv } from "./ui/border";
import { MenubarDemo } from "./Menubar";

export default function Navbar() {
  return (
    <div className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2 flex items-center justify-between">
      <BorderedDiv className="flex gap-2 w-fit">
        <ListTodo />
        <p className="text-lg font-extrabold font-mono">Candidates</p>
        </BorderedDiv>
        <MenubarDemo />
    </div>
  );
}
