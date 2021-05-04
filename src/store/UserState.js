import { atom } from "recoil";

export const userState = atom({
  // システム全体でstateを参照できるようにkeyを設定(ファイル名と同一にしておく)
  key: "userState",
  default: { isAdmin: false }
});
