import Link from "next/link";
import { BiSolidError } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";

import ProfileMenu from "./menu/ProfileMenu";
import LangMenu from "./menu/LangMenu";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <Link href="/">Dash</Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link href="/not-found">
                <BiSolidError />
                Not Found
              </Link>
            </li>
            <li>
              <Link href="/products">
                <RiShoppingBag2Fill />
                Products
              </Link>
            </li>
          </ul>
          <div className="cta">
            <LangMenu />
            <ProfileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
