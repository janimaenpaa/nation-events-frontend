import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";

export default function Header({ title }: { title: string }) {
  return (
    <nav className="justify-betwee flex w-full items-center p-4">
      <div className="flex w-full items-center justify-between gap-4">
        <Link className="text-lg font-bold" href="/">
          {title}
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
