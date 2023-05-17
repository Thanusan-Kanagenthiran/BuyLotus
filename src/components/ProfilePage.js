import React from "react";

const ProfilePage = ({ handleLogout }) => {
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default ProfilePage;
