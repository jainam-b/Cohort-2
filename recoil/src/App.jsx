import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atom";

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
  const totalnotificationCount=useRecoilValue(totalNotificationSelector);
  return (
      
    <>
      <button>Home</button>
      <button>My network({networkCount>=100?"99+":networkCount})</button>
      <button>Jobs({jobsCount})</button>
      <button>Notification({notificationCount})</button>
      <button>Messaging({messagingCount})</button>
    <ButtonUpdater/>
      <button>Me({totalnotificationCount})</button>
      
    </>
  );
}
function ButtonUpdater(){
  const setMessagingAtomCount=useSetRecoilState(messagingAtom);
  return <button onClick={()=>{
    setMessagingAtomCount(c=>c+1)
  }}>
    ME
  </button>
}


export default App;
