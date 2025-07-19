// context/MemberStatusContext.js
import React, { createContext, useState, useContext } from "react";

const MemberStatusContext = createContext();

export const MemberStatusProvider = ({ children }) => {
  const [memberStatus, setMemberStatus] = useState("new"); // 'new' or 'existing'

  return (
    <MemberStatusContext.Provider value={{ memberStatus, setMemberStatus }}>
      {children}
    </MemberStatusContext.Provider>
  );
};

export const useMemberStatus = () => useContext(MemberStatusContext);
