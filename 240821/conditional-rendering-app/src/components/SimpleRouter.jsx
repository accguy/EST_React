import React from "react";
import AdminPage from "./AdminPage";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import LoadingSpinner from "./LoadingSpinner";

function SimpleRouter({ userRole, isLoading, setUserRole }) {
  if (isLoading) {
    return <LoadingSpinner />;
  }
  switch (userRole) {
    case "guest":
      return <GuestPage />;
    case "user":
      return <UserPage setUserRole={setUserRole} />;
    case "admin":
      return <AdminPage />;
    default:
      return <h2>ㅌㅌ</h2>;
  }
}
export default SimpleRouter;
