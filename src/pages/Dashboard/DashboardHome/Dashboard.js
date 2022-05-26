import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../Firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  // const [user] = useAuthState(auth);
  // const [admin] = useAdmin(user);

  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-center text-orange-600">Welcome To Dashboard</h2>

        <Outlet />
        {/* <!-- Page content here --> */}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay">
          A
        </label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/myOrder">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/users">All User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
