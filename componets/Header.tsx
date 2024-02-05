import Link from "next/link";
import { IconButton } from "@mui/material";
import { MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

import ProfileMenu from "./ProfileMenu";
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
            <IconButton className="lang">
              <img
                src="https://media.istockphoto.com/id/854115776/photo/flag-of-england.jpg?s=612x612&w=0&k=20&c=EojPOFUwYV_8vhsJ9RR06rmTwOsSpfVqWbbxGiVpxgk="
                alt="language"
              />
            </IconButton>
            <ProfileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
