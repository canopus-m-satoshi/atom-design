import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import "./styles.css";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    // RecoilRoot：stateのグローバル管理
    <RecoilRoot>
      <UserProvider>
        <Router />;
      </UserProvider>
    </RecoilRoot>
  );
}
