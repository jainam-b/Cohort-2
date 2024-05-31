import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <Mainapp />
    </RecoilRoot>
  );
}

function Mainapp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  return (
      
    <>
      <button>Home</button>
      <button>My network({networkCount>=100?"99+":networkCount})</button>
      <button>Jobs({jobsCount})</button>
      <button>Notification({notificationCount})</button>
      <button>Messaging({messagingCount})</button>

      <button>Me</button>
      
    </>
  );
}

export default App;
