import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold text-white">
            IH <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex justify-between items-center">
          <Nav />
        </div>

        {/* mobile menu */}
        <div className="xl:hidden">
           Mobile menu
        </div>

      </div>
    </header>
  );
};

export default Header;
