import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LoginOut from "./LoginOut";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-12">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="text-icon fa-2x" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="text-icon fa-2x" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {session ? (
          <>
            <p className="text-white text-lg">{session.user.email}</p>
            <LoginOut />
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
