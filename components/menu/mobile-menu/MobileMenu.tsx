import Link from "next/link";
import { List, Avatar } from "@mui/material";
import { BiSolidError } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";

import "./MobileMenu.scss";

const MobileMenu = ({ onClick }: any) => {
  return (
    <div className="mob-menu">
      <List className="list">
        <Link href="/" className="logo" onClick={onClick}>
          Dash
        </Link>
        <div className="profile-badge">
          <Avatar
            alt="avatar"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            className="avatar"
          />
          <p>Lisa Brian</p>
        </div>
        <ul>
          <Link href="/not-found">
            <li onClick={onClick}>
              <BiSolidError />
              Not Found
            </li>
          </Link>
          <Link href="/products">
            <li onClick={onClick}>
              <RiShoppingBag2Fill />
              Products
            </li>
          </Link>
        </ul>
      </List>
    </div>
  );
};

export default MobileMenu;
