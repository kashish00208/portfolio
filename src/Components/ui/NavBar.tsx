"use client";
import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./navbar-menu";
import { cn } from "@/utils/cn";
const NavBar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-xs mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" icon="/home.png" href="/Homepage">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Homepage">Home</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects" icon="/note.png" href="Project">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Project">projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Tools" icon="/tool.png" href="/Tools">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Tools">Tools</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Connect" icon="/project.png" href="/Connect">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Connect">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavBar;
