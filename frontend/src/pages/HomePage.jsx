import { Link } from "react-router-dom";
import {SignedIn,SignedOut,useOrganization,CreateOrganization} from "@clerk/clerk-react";

function HomePage() {
  const { organization } = useOrganization();

  return (
    <div className="home-container">
      <h1 className="home-title">
        Welcome to Our App for{" "}
        <span className="home-title-accent">
          Team Task Management
        </span>
      </h1>

      <p className="home-subtitle">
        Manage your team's tasks with powerful features.
        Create, assign, and track them all in one place.
      </p>

      <SignedOut>
        <div className="home-buttons">
          <Link to="/sign-up" className="btn btn-primary btn-lg">
            Get Started for Free
          </Link>

          <Link to="/sign-in" className="btn btn-outline btn-lg">
            Sign In
          </Link>
        </div>
      </SignedOut>

      <SignedIn>
        {organization ? (
          <Link to="/dashboard" className="btn btn-primary btn-lg">
            Go to Dashboard
          </Link>
        ) : (
          <div className="home-create-org">
            <CreateOrganization afterCreateOrganizationUrl="/dashboard" />
          </div>
        )}
      </SignedIn>
    </div>
  );
}

export default HomePage;