// ReactからcreateContextをインポート
import React, { createContext } from "react";

// ほかのコンポーネントでも参照できるようにexportする
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "じゃけぇ";

  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
