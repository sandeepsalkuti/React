import React from "react";

function User({ Name, AccountStatus, Github }) {
  return (
    <div className="user-card">
      <h2>Name: {Name} </h2>
      <h2>AccountStatus: {AccountStatus}</h2>
      <h3>Github: {Github}</h3>
    </div>
  );
}

export default User;
