import React from "react";

const UserContext = React.createContext({
  loggedInUser: "DefaultUser",
});

export default UserContext;
