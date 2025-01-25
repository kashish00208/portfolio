"use client";
import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./navbar-menu";
import { cn } from "@/utils/cn";
const NavBar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-sm mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" icon="/home.png">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/home">Home</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects" icon="/project.png">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects">projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Tools" icon="/tool.png">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Tools">Tools</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact" icon="/note.png">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavBar;
