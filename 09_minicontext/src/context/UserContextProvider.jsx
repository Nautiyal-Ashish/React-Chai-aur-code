import React from "react";
import UserContext from "./UserContext";

// This is Part 2
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    // these value are very important value={{ user, setUser }}
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
