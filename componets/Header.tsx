import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

import ProfileMenu from "./ui/ProfileMenu";
import LangMenu from "./ui/LangMenu";
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
              <MdDashboard />
              <Link href="/dash">Dash</Link>
            </li>
            <li>
              <FaUserFriends />
              <Link href="/users">Users</Link>
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
