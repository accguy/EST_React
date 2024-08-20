import React from "react";
import { useState } from "react";

function User({ user }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <dt>
        <button onClick={handleClick}>{user.name}</button>
      </dt>
      {isActive ? (
        <dd>
          <span>Email: {user.email}</span>
          <br />
          <span>Job: {user.job}</span>
        </dd>
      ) : null}
    </div>
  );
}

export default User;
