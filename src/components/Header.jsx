import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import Image from 'next/image'


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold text-white flex items-center gap-3">
          <Image
            src="/IH-fav.png"
            width={40}
            height={40}
            alt="Picture of the author"
          /> <span>ISMAIL HOSSAIN</span>
            <span className="text-accent">.</span>
          </h1>
        </Link>



        {/* desktop nav */}
        <div className="hidden xl:flex justify-between items-center">
          <Nav />
          <Button className="btn">
             <span>Hire Me</span>
          </Button>
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
