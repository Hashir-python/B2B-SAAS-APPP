import {Outlet,Link} from "react-router-dom";
import { SignedIn, SignedOut, UserButton ,OrganizationSwitcher,useOrganization} from "@clerk/clerk-react";

function Layout() {
  const { organization } = useOrganization();

  return (
    <div className="layout">
      <div className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            TaskBoard
          </Link>

          <div className="nav-links">
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}