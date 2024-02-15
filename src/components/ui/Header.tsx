import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <nav className="flex w-full items-center justify-betwee p-4">
      <div className="flex items-center gap-4 justify-between w-full">
        <Link className="text-lg font-bold" href="/">
          Nation Events
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
