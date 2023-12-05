import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link
        to="/project/signin"
        className={`nav-link ${pathname.includes("project") ? "active" : ""}`}
      >
        signin
      </Link>
      <Link
        to="/project/signup"
        className={`nav-link ${pathname.includes("project") ? "active" : ""}`}
      >
        signup
      </Link>
      <Link
        to="/project/account"
        className={`nav-link ${pathname.includes("project") ? "active" : ""}`}
      >
        account
      </Link>
    </nav>
  );
}
export default Nav;
